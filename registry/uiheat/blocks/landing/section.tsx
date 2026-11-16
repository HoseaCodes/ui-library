"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

/** Page-width section with consistent vertical rhythm. `muted` alternates the background. */
export function Section({
  id,
  muted,
  className,
  containerClassName,
  children,
}: {
  id?: string;
  muted?: boolean;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-20 py-20", muted && "bg-muted/50", className)}
    >
      <div className={cn("mx-auto max-w-6xl px-4 sm:px-6", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

/** Eyebrow + title + description, centered above a section's content. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={cn("mx-auto mb-12 max-w-2xl text-center", className)}>
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className="text-muted-foreground">{description}</p>}
    </Reveal>
  );
}

/** Fades content up the first time it scrolls into view. */
export function Reveal({
  delay = 0,
  className,
  children,
}: {
  delay?: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
