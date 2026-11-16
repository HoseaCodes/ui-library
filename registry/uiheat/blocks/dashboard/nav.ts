import type * as React from "react";

export type NavItem = {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  /** Count or label shown at the right, e.g. unread messages. Hidden when 0. */
  badge?: number | string;
  /** Only active on this exact path (use for the dashboard home). */
  exact?: boolean;
  /** Sub-pages, shown as a collapsible sub-menu. */
  items?: NavItem[];
};

export type NavSection = {
  /** Optional heading, e.g. "Settings". */
  label?: string;
  items: NavItem[];
};

/**
 * Whether `href` is the current page or one of its children.
 * Matches on path segments, so /dashboard/notes is not active on /dashboard/notes-archive.
 */
export function isActive(pathname: string, href: string, exact = false): boolean {
  if (pathname === href) return true;
  if (exact) return false;
  const base = href.endsWith("/") ? href : `${href}/`;
  return pathname.startsWith(base);
}

/** The chain of nav items leading to the current page, deepest match last. */
export function findTrail(sections: NavSection[], pathname: string): NavItem[] {
  // Every active item extends the trail; keep the one whose page is most specific.
  let best: NavItem[] = [];
  const walk = (items: NavItem[], trail: NavItem[]) => {
    for (const item of items) {
      if (!isActive(pathname, item.href, item.exact)) continue;
      const next = [...trail, item];
      if (item.href.length > (best.at(-1)?.href.length ?? -1)) best = next;
      if (item.items) walk(item.items, next);
    }
  };
  for (const section of sections) walk(section.items, []);
  return best;
}
