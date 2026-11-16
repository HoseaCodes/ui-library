"use client";

import * as React from "react";

import { Reveal, Section, SectionHeading } from "@/components/landing/section";

export interface Step {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface LandingHowItWorksProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  /** Works best with 3 steps; 2 or 4 also lay out cleanly. */
  steps: Step[];
}

export function LandingHowItWorks({
  id = "how-it-works",
  eyebrow = "Simple process",
  title = "How it works",
  description,
  steps,
}: LandingHowItWorksProps) {
  const cols =
    steps.length === 2 ? "sm:grid-cols-2" : steps.length >= 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3";

  return (
    <Section id={id} muted>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <ol className={`grid gap-10 ${cols}`}>
        {steps.map((step, i) => (
          <li key={step.title}>
            <Reveal delay={i * 0.15} className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="flex h-[72px] w-[72px] items-center justify-center rounded-3xl border-2 bg-background shadow-sm">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <span className="absolute -right-2.5 -top-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-sm">
                  {i + 1}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-bold">{step.title}</h3>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
