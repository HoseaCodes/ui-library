"use client";

/**
 * Example dashboard frame. Nav config lives here (a client file) because icon
 * components can't be passed from a server layout. Replace the sample entries.
 */

import * as React from "react";
import {
  BarChart3,
  CreditCard,
  FileText,
  FolderKanban,
  LayoutDashboard,
  LifeBuoy,
  MessageSquare,
  Settings,
  Users,
} from "lucide-react";

import { ModeToggle } from "@/components/mode-toggle";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import type { NavSection } from "@/components/dashboard/nav";

const sections: NavSection[] = [
  {
    items: [
      { title: "Overview", href: "/dashboard", icon: LayoutDashboard, exact: true },
      { title: "Projects", href: "/dashboard/projects", icon: FolderKanban },
      { title: "Clients", href: "/dashboard/clients", icon: Users },
      { title: "Messages", href: "/dashboard/messages", icon: MessageSquare, badge: 3 },
      {
        title: "Reports",
        href: "/dashboard/reports",
        icon: BarChart3,
        items: [
          { title: "Revenue", href: "/dashboard/reports/revenue" },
          { title: "Pipeline", href: "/dashboard/reports/pipeline" },
        ],
      },
      { title: "Invoices", href: "/dashboard/invoices", icon: FileText },
    ],
  },
  {
    label: "Settings",
    items: [
      { title: "Settings", href: "/dashboard/settings", icon: Settings },
      { title: "Billing", href: "/dashboard/billing", icon: CreditCard },
    ],
  },
];

export function DashboardExample({
  children,
  defaultOpen,
}: {
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <DashboardShell
      defaultOpen={defaultOpen}
      brand={{ name: "Acme Studio", subtitle: "Workspace" }}
      sections={sections}
      user={{ name: "Jordan Lee", email: "jordan@example.com" }}
      userMenu={
        <DropdownMenuItem asChild>
          <a href="mailto:support@example.com">
            <LifeBuoy /> Support
          </a>
        </DropdownMenuItem>
      }
      // Wire to your auth, e.g. next-auth's signOut({ callbackUrl: "/login" }).
      onSignOut={() => alert("Sign out")}
      actions={<ModeToggle />}
    >
      {children}
    </DashboardShell>
  );
}
