import * as React from "react";

import type { NavLink } from "@/components/landing/types";

export interface FooterContact {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href?: string;
}

export interface LandingFooterProps {
  logo?: React.ReactNode;
  name: string;
  tagline?: string;
  description?: string;
  contacts?: FooterContact[];
  /** One or more titled link columns. */
  columns?: { title: string; links: NavLink[] }[];
  /** Right side of the bottom bar. */
  note?: React.ReactNode;
}

export function LandingFooter({
  logo,
  name,
  tagline,
  description,
  contacts = [],
  columns = [],
  note,
}: LandingFooterProps) {
  return (
    <footer className="border-t bg-muted/40 text-muted-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col justify-between gap-10 sm:flex-row">
          <div className="max-w-xs">
            <div className="mb-3 flex items-center gap-2">
              {logo}
              <span>
                <span className="block text-base font-bold leading-none tracking-tight text-foreground">
                  {name}
                </span>
                {tagline && <span className="text-[10px] leading-none tracking-wide">{tagline}</span>}
              </span>
            </div>
            {description && <p className="text-sm leading-relaxed">{description}</p>}
          </div>

          {contacts.length > 0 && (
            <ul className="flex flex-col gap-3 text-sm">
              {contacts.map(({ icon: Icon, label, href }) => {
                const content = (
                  <>
                    <Icon className="h-4 w-4 text-primary" />
                    {label}
                  </>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a href={href} className="flex items-center gap-2.5 transition-colors hover:text-foreground">
                        {content}
                      </a>
                    ) : (
                      <span className="flex items-center gap-2.5">{content}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          )}

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="flex flex-col gap-2.5 text-sm">
              <p className="mb-0.5 font-medium text-foreground">{col.title}</p>
              {col.links.map((link) => (
                <a key={link.href} href={link.href} className="transition-colors hover:text-foreground">
                  {link.label}
                </a>
              ))}
            </nav>
          ))}
        </div>

        <div className="mt-10 flex flex-col justify-between gap-2 border-t pt-6 text-xs sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {name}. All rights reserved.
          </p>
          {note && <p>{note}</p>}
        </div>
      </div>
    </footer>
  );
}
