"use client";

import * as React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, Section, SectionHeading } from "@/components/landing/section";

export interface Faq {
  question: string;
  answer: React.ReactNode;
}

export interface LandingFaqProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: React.ReactNode;
  faqs: Faq[];
}

export function LandingFaq({
  id = "faq",
  eyebrow = "FAQ",
  title = "Frequently asked questions",
  description = (
    <>
      Can&apos;t find what you&apos;re looking for?{" "}
      <a href="#contact" className="font-medium text-primary underline-offset-4 hover:underline">
        Contact us
      </a>
      .
    </>
  ),
  faqs,
}: LandingFaqProps) {
  return (
    <Section id={id} containerClassName="max-w-3xl">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <Reveal>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.question} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base">{faq.question}</AccordionTrigger>
              <AccordionContent className="leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </Section>
  );
}
