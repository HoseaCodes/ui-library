import { Loader } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const spinnerVariants = cva("animate-spin text-muted-foreground", {
  variants: {
    size: {
      sm: "h-3 w-3",
      default: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-10 w-10",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
  className?: string;
  label?: string;
}

export function Spinner({ size, className, label = "Loading" }: SpinnerProps) {
  return (
    <Loader
      role="status"
      aria-label={label}
      className={cn(spinnerVariants({ size }), className)}
    />
  );
}

export { spinnerVariants };
