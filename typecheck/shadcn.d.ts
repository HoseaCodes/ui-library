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
