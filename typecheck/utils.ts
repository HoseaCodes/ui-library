// Stand-in for the consumer app's @/lib/utils (created by `shadcn init`).
// Only used to type-check registry sources; never published.
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
