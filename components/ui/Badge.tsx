import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "brand" | "accent";
}

export default function Badge({
  children,
  className = "",
  variant = "brand",
}: BadgeProps) {
  const variants = {
    brand:
      "bg-[rgba(79,126,247,0.1)] text-[var(--color-brand)] border border-[var(--color-border-brand)]",
    accent:
      "bg-[rgba(124,92,252,0.12)] text-[var(--color-accent)] border border-[rgba(124,92,252,0.25)]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-full font-mono",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
