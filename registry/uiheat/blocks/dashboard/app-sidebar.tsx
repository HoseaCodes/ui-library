"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, ChevronsUpDown, LogOut } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { isActive, type NavItem, type NavSection } from "@/components/dashboard/nav";

export type SidebarUser = { name: string; email?: string; avatarUrl?: string };

export interface AppSidebarProps {
  brand: { name: string; subtitle?: string; logo?: React.ReactNode; href?: string };
  sections: NavSection[];
  user?: SidebarUser;
  onSignOut?: () => void | Promise<void>;
  /** Extra <DropdownMenuItem>s shown above "Sign out" in the user menu. */
  userMenu?: React.ReactNode;
}

export function AppSidebar({ brand, sections, user, onSignOut, userMenu }: AppSidebarProps) {
  const pathname = usePathname() ?? "";

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href={brand.href ?? "/dashboard"}>
                <span className="flex aspect-square size-8 shrink-0 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  {brand.logo ?? <span className="text-sm font-bold">{brand.name.charAt(0)}</span>}
                </span>
                <span className="grid flex-1 text-left leading-tight">
                  <span className="truncate font-semibold">{brand.name}</span>
                  {brand.subtitle && <span className="truncate text-xs text-sidebar-foreground/70">{brand.subtitle}</span>}
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {sections.map((section, i) => (
          <SidebarGroup key={section.label ?? i}>
            {section.label && <SidebarGroupLabel>{section.label}</SidebarGroupLabel>}
            <SidebarMenu>
              {section.items.map((item) => (
                <NavMenuItem key={item.href} item={item} pathname={pathname} />
              ))}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>

      {user && (
        <SidebarFooter>
          <UserMenu user={user} onSignOut={onSignOut}>
            {userMenu}
          </UserMenu>
        </SidebarFooter>
      )}
      <SidebarRail />
    </Sidebar>
  );
}

function NavMenuItem({ item, pathname }: { item: NavItem; pathname: string }) {
  const active = isActive(pathname, item.href, item.exact);
  const Icon = item.icon;
  const showBadge = item.badge !== undefined && item.badge !== 0 && item.badge !== "";

  if (!item.items?.length) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton asChild isActive={active} tooltip={item.title}>
          <Link href={item.href}>
            {Icon && <Icon />}
            <span>{item.title}</span>
          </Link>
        </SidebarMenuButton>
        {showBadge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
      </SidebarMenuItem>
    );
  }

  return (
    <Collapsible asChild defaultOpen={active} className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton isActive={active} tooltip={item.title}>
            {Icon && <Icon />}
            <span>{item.title}</span>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {item.items.map((sub) => (
              <SidebarMenuSubItem key={sub.href}>
                <SidebarMenuSubButton asChild isActive={isActive(pathname, sub.href, sub.exact)}>
                  <Link href={sub.href}>
                    <span>{sub.title}</span>
                    {sub.badge !== undefined && sub.badge !== 0 && (
                      <span className="ml-auto text-xs tabular-nums text-sidebar-foreground/70">{sub.badge}</span>
                    )}
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]!.toUpperCase())
    .join("");
}

function UserMenu({
  user,
  onSignOut,
  children,
}: {
  user: SidebarUser;
  onSignOut?: () => void | Promise<void>;
  children?: React.ReactNode;
}) {
  const avatar = (
    <Avatar className="size-8 rounded-lg">
      {user.avatarUrl && <AvatarImage src={user.avatarUrl} alt="" />}
      <AvatarFallback className="rounded-lg">{initials(user.name)}</AvatarFallback>
    </Avatar>
  );
  const identity = (
    <span className="grid flex-1 text-left text-sm leading-tight">
      <span className="truncate font-medium">{user.name}</span>
      {user.email && <span className="truncate text-xs text-sidebar-foreground/70">{user.email}</span>}
    </span>
  );

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton size="lg" tooltip={user.name}>
              {avatar}
              {identity}
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="top" align="start" className="min-w-56 rounded-lg">
            <DropdownMenuLabel className="flex items-center gap-2 font-normal">
              {avatar}
              {identity}
            </DropdownMenuLabel>
            {children && (
              <>
                <DropdownMenuSeparator />
                {children}
              </>
            )}
            {onSignOut && (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => void onSignOut()}>
                  <LogOut />
                  Sign out
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
