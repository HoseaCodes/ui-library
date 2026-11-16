"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { findTrail, type NavSection } from "@/components/dashboard/nav";

function titleCase(segment: string) {
  return decodeURIComponent(segment)
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * Breadcrumbs for the current page. Uses nav titles where the path matches a
 * nav item, and title-cases the remaining URL segments (e.g. an [id] page).
 */
export function DashboardBreadcrumbs({
  sections,
  home = { title: "Dashboard", href: "/dashboard" },
}: {
  sections: NavSection[];
  home?: { title: string; href: string };
}) {
  const pathname = usePathname() ?? "";
  const trail = findTrail(sections, pathname).filter((item) => item.href !== home.href);

  const crumbs = trail.map((item) => ({ title: item.title, href: item.href }));
  const covered = crumbs.at(-1)?.href ?? home.href;
  if (pathname.startsWith(covered) && pathname.length > covered.length) {
    let href = covered.replace(/\/$/, "");
    for (const segment of pathname.slice(covered.length).split("/").filter(Boolean)) {
      href += `/${segment}`;
      crumbs.push({ title: titleCase(segment), href });
    }
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          {crumbs.length ? (
            <BreadcrumbLink asChild>
              <Link href={home.href}>{home.title}</Link>
            </BreadcrumbLink>
          ) : (
            <BreadcrumbPage>{home.title}</BreadcrumbPage>
          )}
        </BreadcrumbItem>
        {crumbs.map((crumb, i) => (
          <React.Fragment key={crumb.href}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {i === crumbs.length - 1 ? (
                <BreadcrumbPage>{crumb.title}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={crumb.href}>{crumb.title}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
