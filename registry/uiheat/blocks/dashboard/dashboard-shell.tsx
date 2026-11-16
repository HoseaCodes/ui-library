"use client";

import * as React from "react";

import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar, type AppSidebarProps } from "@/components/dashboard/app-sidebar";
import { DashboardBreadcrumbs } from "@/components/dashboard/dashboard-breadcrumbs";

export interface DashboardShellProps extends AppSidebarProps {
  children: React.ReactNode;
  /**
   * Whether the sidebar starts expanded. Read it from the `sidebar_state`
   * cookie in your server layout so the collapsed state survives reloads:
   *   (await cookies()).get("sidebar_state")?.value !== "false"
   */
  defaultOpen?: boolean;
  /** First breadcrumb (default: Dashboard → /dashboard). */
  home?: { title: string; href: string };
  /** Right side of the top bar, e.g. <ModeToggle /> or a search button. */
  actions?: React.ReactNode;
}

/**
 * Sidebar + top bar + content area for an app dashboard.
 * Collapses to icons on desktop (⌘/Ctrl+B or the rail), becomes a drawer on mobile.
 */
export function DashboardShell({
  children,
  defaultOpen = true,
  home,
  actions,
  ...sidebar
}: DashboardShellProps) {
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar {...sidebar} />
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 shrink-0 items-center gap-2 border-b bg-background/95 px-4 backdrop-blur">
          <SidebarTrigger className="-ml-1" />
          <span aria-hidden="true" className="mr-2 h-4 w-px shrink-0 bg-border" />
          <DashboardBreadcrumbs sections={sidebar.sections} home={home} />
          {actions && <div className="ml-auto flex items-center gap-2">{actions}</div>}
        </header>
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
