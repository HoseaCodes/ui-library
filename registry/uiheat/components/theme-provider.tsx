"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Wrap your root layout's <body> contents with <ThemeProvider> and add
 * `suppressHydrationWarning` to <html>.
 *
 * Defaults match the UI Heat theme, which keys dark mode off the `.dark`
 * class. Any prop you pass overrides the default.
 */
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
