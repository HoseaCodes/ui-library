"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Spinner } from "@/components/ui/spinner";
import { Reveal, Section, SectionHeading } from "@/components/landing/section";

export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  topic?: string;
  message?: string;
  /** Honeypot: hidden from people, filled in by bots. The API route drops these. */
  company?: string;
};

export interface LandingContactProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  /** Adds a phone field. */
  phone?: boolean;
  /** Adds a required "What do you need?" select with these options. */
  topics?: string[];
  /** Adds a message textarea (default true). */
  message?: boolean;
  submitLabel?: string;
  /** POSTs JSON here unless `onSubmit` is given (default "/api/contact"). */
  endpoint?: string;
  onSubmit?: (data: ContactPayload) => Promise<void>;
  success?: { title: string; description?: string };
  /** Shown when sending fails, e.g. "Please call us at …". */
  fallback?: string;
}

export function LandingContact({
  id = "contact",
  eyebrow = "Contact",
  title = "Get in touch",
  description = "We usually reply within one business day.",
  phone = false,
  topics,
  message = true,
  submitLabel = "Send message",
  endpoint = "/api/contact",
  onSubmit,
  success = { title: "Thanks! We'll be in touch.", description: "Your message is on its way." },
  fallback = "Something went wrong. Please try again in a moment.",
}: LandingContactProps) {
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(
      Array.from(form.entries()).map(([k, v]) => [k, String(v).trim()]),
    ) as ContactPayload;

    setStatus("sending");
    try {
      if (onSubmit) {
        await onSubmit(data);
      } else {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error(`Contact request failed: ${res.status}`);
      }
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id={id} muted containerClassName="max-w-xl">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} className="mb-8" />

      <Reveal delay={0.1} className="rounded-3xl border bg-card p-6 text-card-foreground shadow-sm sm:p-8">
        {status === "sent" ? (
          <div className="py-10 text-center" role="status">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10"
            >
              <CheckCircle className="h-8 w-8 text-primary" />
            </motion.div>
            <h3 className="mb-2 text-xl font-bold">{success.title}</h3>
            {success.description && (
              <p className="text-sm text-muted-foreground">{success.description}</p>
            )}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <Field label="Name" htmlFor="contact-name">
              <Input id="contact-name" name="name" required autoComplete="name" />
            </Field>
            <Field label="Email" htmlFor="contact-email">
              <Input id="contact-email" name="email" type="email" required autoComplete="email" />
            </Field>
            {phone && (
              <Field label="Phone" htmlFor="contact-phone">
                <Input id="contact-phone" name="phone" type="tel" autoComplete="tel" />
              </Field>
            )}
            {topics && topics.length > 0 && (
              <Field label="What do you need?" htmlFor="contact-topic">
                <select
                  id="contact-topic"
                  name="topic"
                  required
                  defaultValue=""
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                >
                  <option value="" disabled>
                    Select one…
                  </option>
                  {topics.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
            )}
            {message && (
              <Field label="Message" htmlFor="contact-message">
                <Textarea id="contact-message" name="message" rows={4} />
              </Field>
            )}

            {/* Honeypot. Off-screen rather than display:none so naive bots still fill it. */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <label htmlFor="contact-company">Company</label>
              <input id="contact-company" name="company" tabIndex={-1} autoComplete="off" />
            </div>

            <Button type="submit" size="lg" disabled={status === "sending"} className="mt-1">
              {status === "sending" ? (
                <>
                  <Spinner className="text-primary-foreground" /> Sending…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> {submitLabel}
                </>
              )}
            </Button>

            {status === "error" && (
              <p role="alert" className="text-center text-sm text-destructive">
                {fallback}
              </p>
            )}
            <p className="text-center text-xs text-muted-foreground">
              No spam. We&apos;ll only contact you about your request.
            </p>
          </form>
        )}
      </Reveal>
    </Section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
