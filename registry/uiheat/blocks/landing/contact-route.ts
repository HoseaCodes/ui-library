import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { Logger } from "@/lib/logger";

/**
 * POST /api/contact, the backend for <LandingContact />.
 *
 * Env (any SMTP provider: Gmail app password, Resend, Postmark, SES…):
 *   SMTP_HOST, SMTP_PORT (default 465), SMTP_USER, SMTP_PASS
 *   CONTACT_TO      inbox that receives messages
 *   CONTACT_FROM    optional, defaults to SMTP_USER
 *   SITE_NAME       optional, used in the subject line
 */

const logger = new Logger("contact");

const MAX = { name: 200, email: 320, phone: 40, topic: 200, message: 5000 };

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
}

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  // Honeypot filled in: pretend success so the bot moves on.
  if (clean(body.company, 200)) {
    logger.warn("Dropped submission that filled the honeypot");
    return NextResponse.json({ ok: true });
  }

  const fields = {
    name: clean(body.name, MAX.name),
    email: clean(body.email, MAX.email),
    phone: clean(body.phone, MAX.phone),
    topic: clean(body.topic, MAX.topic),
    message: clean(body.message, MAX.message),
  };

  if (!fields.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    return NextResponse.json({ error: "Name and a valid email are required." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO, CONTACT_FROM, SITE_NAME } =
    process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
    logger.error("Contact form is not configured: set SMTP_HOST, SMTP_USER, SMTP_PASS, CONTACT_TO");
    return NextResponse.json({ error: "Contact form is not configured." }, { status: 500 });
  }

  const port = Number(SMTP_PORT ?? 465);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const rows = Object.entries(fields)
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px 8px 0;color:#555;vertical-align:top"><strong>${k}</strong></td>` +
        `<td style="padding:8px 0;color:#111;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
    )
    .join("");

  try {
    await transporter.sendMail({
      from: CONTACT_FROM ?? SMTP_USER,
      to: CONTACT_TO,
      replyTo: fields.email,
      subject: `${SITE_NAME ? `[${SITE_NAME}] ` : ""}New message from ${fields.name}`.replace(/[\r\n]+/g, " "),
      text: Object.entries(fields)
        .filter(([, v]) => v)
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n"),
      html: `<div style="font-family:sans-serif;max-width:560px"><table>${rows}</table></div>`,
    });
  } catch (err) {
    logger.error("Failed to send contact email", err);
    return NextResponse.json({ error: "Could not send message." }, { status: 502 });
  }

  logger.info("Contact message sent", { topic: fields.topic || undefined });
  return NextResponse.json({ ok: true });
}
