import type * as React from "react";

export type NavLink = { label: string; href: string };

export type Cta = {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
};
