import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "primary" | "outline" | "ghost";
  size?: "default" | "icon";
};

export function Button({ asChild, variant = "primary", size = "default", className, ...props }: ButtonProps) {
  const Component = asChild ? Slot : "button";
  return (
    <Component
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" && "bg-primary px-5 text-primary-foreground shadow-sm hover:-translate-y-0.5 hover:bg-primary/90",
        variant === "outline" && "border border-foreground/20 bg-background/30 px-5 text-foreground hover:-translate-y-0.5 hover:bg-background/70",
        variant === "ghost" && "px-3 text-foreground hover:bg-foreground/5",
        size === "icon" && "min-h-11 min-w-11 p-0",
        className,
      )}
      {...props}
    />
  );
}