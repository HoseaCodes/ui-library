"use client";

import { Star } from "lucide-react";

import { Reveal, Section, SectionHeading } from "@/components/landing/section";

export interface Testimonial {
  name: string;
  quote: string;
  /** 0–5, halves allowed. */
  rating?: number;
  /** Shown under the name, e.g. "Pearland, TX · Full detail". */
  detail?: string;
  avatarUrl?: string;
}

export interface LandingTestimonialsProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  testimonials: Testimonial[];
  /** Summary row under the grid, e.g. { rating: 4.8, label: "average · 120 reviews" }. */
  summary?: { rating: number; label: string };
}

export function LandingTestimonials({
  id = "testimonials",
  eyebrow = "Reviews",
  title = "What customers say",
  description,
  testimonials,
  summary,
}: LandingTestimonialsProps) {
  return (
    <Section id={id}>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name + i} delay={i * 0.08}>
            <figure className="flex h-full flex-col rounded-3xl bg-muted/60 p-6 transition-colors hover:bg-muted">
              {t.rating !== undefined && <Stars rating={t.rating} />}
              <blockquote className="mb-5 mt-3 flex-1 text-[15px] leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3">
                {t.avatarUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={t.avatarUrl} alt="" className="h-10 w-10 rounded-full object-cover" />
                ) : (
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {initials(t.name)}
                  </span>
                )}
                <span>
                  <span className="block text-sm font-semibold">{t.name}</span>
                  {t.detail && <span className="text-xs text-muted-foreground">{t.detail}</span>}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      {summary && (
        <Reveal delay={0.3} className="mt-8 flex items-center justify-center gap-3 text-sm text-muted-foreground">
          <Stars rating={summary.rating} size="md" />
          <span className="font-semibold text-foreground">{summary.rating}</span>
          <span>{summary.label}</span>
        </Reveal>
      )}
    </Section>
  );
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]!.toUpperCase())
    .join("");
}

function Stars({ rating, size = "sm" }: { rating: number; size?: "sm" | "md" }) {
  const box = size === "md" ? "h-4 w-4" : "h-3.5 w-3.5";
  return (
    <span className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.max(0, Math.min(1, rating - i));
        return (
          <span key={i} className={`relative inline-block ${box}`}>
            <Star className={`absolute inset-0 ${box} fill-muted-foreground/20 text-muted-foreground/20`} />
            {fill > 0 && (
              <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                <Star className={`${box} fill-yellow-400 text-yellow-400`} />
              </span>
            )}
          </span>
        );
      })}
    </span>
  );
}
