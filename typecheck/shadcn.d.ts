// Loose types for stock shadcn components that registry items import but that
// come from shadcn itself (via registryDependencies), not from this registry.
// Only used to type-check registry sources; never published.
import type * as React from "react";

type Loose = React.FC<Record<string, unknown> & { children?: React.ReactNode }>;

export declare const Button: Loose;
export declare const DropdownMenu: Loose;
export declare const DropdownMenuContent: Loose;
export declare const DropdownMenuItem: Loose;
export declare const DropdownMenuTrigger: Loose;
export declare const Input: Loose;
export declare const Label: Loose;
export declare const Textarea: Loose;
export declare const Accordion: Loose;
export declare const AccordionContent: Loose;
export declare const AccordionItem: Loose;
export declare const AccordionTrigger: Loose;
export declare const DropdownMenuLabel: Loose;
export declare const DropdownMenuSeparator: Loose;
export declare const Avatar: Loose;
export declare const AvatarFallback: Loose;
export declare const AvatarImage: Loose;
export declare const Collapsible: Loose;
export declare const CollapsibleContent: Loose;
export declare const CollapsibleTrigger: Loose;
export declare const Separator: Loose;
export declare const Breadcrumb: Loose;
export declare const BreadcrumbItem: Loose;
export declare const BreadcrumbLink: Loose;
export declare const BreadcrumbList: Loose;
export declare const BreadcrumbPage: Loose;
export declare const BreadcrumbSeparator: Loose;
export declare const Sidebar: Loose;
export declare const SidebarContent: Loose;
export declare const SidebarFooter: Loose;
export declare const SidebarGroup: Loose;
export declare const SidebarGroupLabel: Loose;
export declare const SidebarHeader: Loose;
export declare const SidebarInset: Loose;
export declare const SidebarMenu: Loose;
export declare const SidebarMenuBadge: Loose;
export declare const SidebarMenuButton: Loose;
export declare const SidebarMenuItem: Loose;
export declare const SidebarMenuSub: Loose;
export declare const SidebarMenuSubButton: Loose;
export declare const SidebarMenuSubItem: Loose;
export declare const SidebarProvider: Loose;
export declare const SidebarRail: Loose;
export declare const SidebarTrigger: Loose;
export declare const Card: Loose;
export declare const CardContent: Loose;
export declare const CardDescription: Loose;
export declare const CardHeader: Loose;
export declare const CardTitle: Loose;
