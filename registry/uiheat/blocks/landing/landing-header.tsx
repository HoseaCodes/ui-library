"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { Cta, NavLink } from "@/components/landing/types";

export interface LandingHeaderProps {
  /** Logo element, e.g. <img src="/logo.png" className="h-8 w-8" alt="" />. */
  logo?: React.ReactNode;
  name: string;
  tagline?: string;
  links?: NavLink[];
  cta?: Cta;
  /** Rendered beside the CTA on desktop, e.g. <ModeToggle />. */
  actions?: React.ReactNode;
}

export function LandingHeader({
  logo,
  name,
  tagline,
  links = [],
  cta,
  actions,
}: LandingHeaderProps) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const CtaIcon = cta?.icon;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent bg-background transition-all duration-300",
        scrolled && "border-border bg-background/90 shadow-sm backdrop-blur",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          {logo}
          <span>
            <span className="block text-base font-bold leading-none tracking-tight">{name}</span>
            {tagline && (
              <span className="text-[10px] leading-none tracking-wide text-muted-foreground">
                {tagline}
              </span>
            )}
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 md:flex">{actions}</div>
          {cta && (
            <Button asChild size="sm">
              <a href={cta.href}>
                {CtaIcon && <CtaIcon className="h-4 w-4" />}
                {cta.label}
              </a>
            </Button>
          )}
          {links.length > 0 && (
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t bg-background md:hidden"
          >
            <div className="flex flex-col gap-4 px-4 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              {actions && <div className="flex items-center gap-2">{actions}</div>}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
