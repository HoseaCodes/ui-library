"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Cta } from "@/components/landing/types";

export interface LandingHeroProps {
  /** Small pill above the title, e.g. "Now booking for June". */
  badge?: string;
  title: React.ReactNode;
  /** Part of the title shown in the primary color, appended after `title`. */
  highlight?: string;
  description: React.ReactNode;
  /** Short checkmarked selling points. */
  points?: string[];
  primaryCta?: Cta;
  secondaryCta?: Cta;
  image?: { src: string; alt: string };
  /** Floating card over the image's top-right corner, e.g. a price. */
  callout?: { title: string; subtitle?: string };
  /** Floating card over the image's bottom-left corner, e.g. a rating. */
  proof?: { title: string; rating?: number };
}

export function LandingHero({
  badge,
  title,
  highlight,
  description,
  points = [],
  primaryCta,
  secondaryCta,
  image,
  callout,
  proof,
}: LandingHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/60 to-background pt-16">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/3 rounded-full bg-primary/10 blur-3xl" />

      <div
        className={
          image
            ? "relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-16"
            : "relative mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-28"
        }
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {badge && (
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              {badge}
            </div>
          )}

          <h1 className="mb-5 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[52px]">
            {title}
            {highlight && (
              <>
                {" "}
                <span className="text-primary">{highlight}</span>
              </>
            )}
          </h1>

          <p
            className={
              image
                ? "mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground"
                : "mx-auto mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground"
            }
          >
            {description}
          </p>

          {points.length > 0 && (
            <ul className={image ? "mb-9 flex flex-col gap-2.5" : "mx-auto mb-9 flex w-fit flex-col gap-2.5 text-left"}>
              {points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {point}
                </li>
              ))}
            </ul>
          )}

          <div className={image ? "flex flex-wrap gap-3" : "flex flex-wrap justify-center gap-3"}>
            {primaryCta && <CtaButton cta={primaryCta} />}
            {secondaryCta && <CtaButton cta={secondaryCta} variant="outline" />}
          </div>
        </motion.div>

        {image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
            </div>

            {proof && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 rounded-2xl border bg-card p-3.5 text-card-foreground shadow-lg"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold">{proof.title}</p>
                    {proof.rating !== undefined && (
                      <p className="text-xs leading-tight text-yellow-500">
                        ★★★★★ <span className="ml-1 text-muted-foreground">{proof.rating}</span>
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {callout && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -right-3 -top-3 rounded-2xl bg-primary px-3.5 py-2 text-primary-foreground shadow-lg"
              >
                <p className="text-xs font-bold">{callout.title}</p>
                {callout.subtitle && <p className="text-[10px] opacity-80">{callout.subtitle}</p>}
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}

function CtaButton({ cta, variant }: { cta: Cta; variant?: "outline" }) {
  const Icon = cta.icon;
  return (
    <Button asChild size="lg" variant={variant}>
      <a href={cta.href}>
        {Icon && <Icon className="h-4 w-4" />}
        {cta.label}
      </a>
    </Button>
  );
}
