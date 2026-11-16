// Minimal stand-in for the parts of expo-router the native items use, so the
// registry can type-check them without installing the whole Expo toolchain.
declare module "expo-router" {
  import type * as React from "react";
  export type Href = string & { readonly __href?: unique symbol };
  export const router: { replace(href: Href): void; push(href: Href): void; back(): void };
  export function useSegments(): string[];
  export const Stack: React.FC<{ screenOptions?: Record<string, unknown>; children?: React.ReactNode }>;
}
