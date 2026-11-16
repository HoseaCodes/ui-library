import { useColorScheme } from "react-native";

/** UI Heat palette for React Native, matching the web theme. */
export const palette = {
  light: {
    background: "#FFFFFF",
    foreground: "#171717",
    card: "#FFFFFF",
    muted: "#F5F5F5",
    mutedForeground: "#737373",
    border: "#E5E5E5",
    primary: "#E84545",
    primaryForeground: "#FFFFFF",
    destructive: "#C62828",
  },
  dark: {
    background: "#1A1A1A",
    foreground: "#FAFAFA",
    card: "#1F1F1F",
    muted: "#2B2B2B",
    mutedForeground: "#A3A3A3",
    border: "#363636",
    primary: "#FF6B6B",
    primaryForeground: "#1A1A1A",
    destructive: "#EF5350",
  },
} as const;

export type ThemeColors = { [K in keyof (typeof palette)["light"]]: string };

export const radius = { sm: 6, md: 8, lg: 12 } as const;

/** Colors for the current light/dark setting. */
export function useTheme(): ThemeColors {
  return useColorScheme() === "dark" ? palette.dark : palette.light;
}
