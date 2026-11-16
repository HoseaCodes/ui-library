"use client";

/**
 * A full landing page assembled from the UI Heat landing blocks.
 * Render it from app/page.tsx (`export { LandingExample as default } from "@/components/landing/landing-example"`),
 * then replace the placeholder copy below with the real business.
 */

import { CalendarCheck, Mail, MapPin, Phone, Rocket, Sparkles } from "lucide-react";

import { LandingContact } from "@/components/landing/landing-contact";
import { LandingFaq } from "@/components/landing/landing-faq";
import { LandingFooter } from "@/components/landing/landing-footer";
import { LandingHeader } from "@/components/landing/landing-header";
import { LandingHero } from "@/components/landing/landing-hero";
import { LandingHowItWorks } from "@/components/landing/landing-how-it-works";
import { LandingTestimonials } from "@/components/landing/landing-testimonials";
import type { NavLink } from "@/components/landing/types";

const NAME = "Acme Studio";

const links: NavLink[] = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const logo = (
  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
    A
  </span>
);

export function LandingExample() {
  return (
    <>
      <LandingHeader
        logo={logo}
        name={NAME}
        tagline="Design & build"
        links={links}
        cta={{ label: "Get a quote", href: "#contact" }}
      />

      <main>
        <LandingHero
          badge="Now booking new projects"
          title="Websites that"
          highlight="win you customers"
          description="We design, build and launch fast, accessible sites for small businesses, usually in under two weeks."
          points={["Fixed price, no surprises", "Launch in 2 weeks or less", "You own everything we build"]}
          primaryCta={{ label: "Get a free quote", href: "#contact", icon: Rocket }}
          secondaryCta={{ label: "See how it works", href: "#how-it-works" }}
        />

        <LandingHowItWorks
          description="Three steps from first call to live site."
          steps={[
            { icon: CalendarCheck, title: "Book a call", description: "Tell us about your business and goals. 20 minutes, no pressure." },
            { icon: Sparkles, title: "We design & build", description: "You get a clickable draft in days and two rounds of revisions." },
            { icon: Rocket, title: "Launch", description: "We handle the domain, hosting and analytics, then hand you the keys." },
          ]}
        />

        <LandingTestimonials
          title="Clients love working with us"
          testimonials={[
            { name: "Jordan Lee", detail: "Bakery owner", rating: 5, quote: "Our online orders doubled in the first month. The site is fast and looks great on phones." },
            { name: "Sam Rivera", detail: "Fitness coach", rating: 5, quote: "Clear process, quick turnaround, and they explained everything without jargon." },
            { name: "Alex Kim", detail: "Law office", rating: 4.5, quote: "Professional from start to finish. We get real leads from the contact form every week." },
          ]}
          summary={{ rating: 4.8, label: "average from 40+ clients" }}
        />

        <LandingFaq
          faqs={[
            { question: "How much does a site cost?", answer: "Most projects are a fixed price agreed before we start. We'll quote after a short call." },
            { question: "How long does it take?", answer: "Typically two weeks from kickoff to launch, depending on how quickly content is ready." },
            { question: "Can I edit the site myself?", answer: "Yes. We set you up to update text and images without touching code." },
          ]}
        />

        <LandingContact
          title="Request a free quote"
          topics={["New website", "Redesign", "Something else"]}
          phone
        />
      </main>

      <LandingFooter
        logo={logo}
        name={NAME}
        tagline="Design & build"
        description="Fast, accessible websites for small businesses."
        contacts={[
          { icon: Phone, label: "(555) 010-0000", href: "tel:+15550100000" },
          { icon: Mail, label: "hello@example.com", href: "mailto:hello@example.com" },
          { icon: MapPin, label: "Remote, worldwide" },
        ]}
        columns={[{ title: "Quick links", links }]}
      />
    </>
  );
}
