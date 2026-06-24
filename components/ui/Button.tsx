"use client";

import React, { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import AnimatedButton from "@/components/motion/AnimatedButton";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  disabled = false,
  type = "button",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-body text-sm font-semibold transition-all duration-300 rounded-[var(--radius-sm)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg-page)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer px-6 py-3";

  const variants = {
    primary:
      "bg-[var(--color-brand)] text-[var(--color-text-primary)] hover:bg-[#3d6de5]",
    secondary:
      "bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] border border-[var(--color-border-strong)] hover:bg-[var(--color-bg-elevated)]",
    ghost:
      "bg-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface)]",
  };

  const buttonClass = cn(
    baseStyles,
    variants[variant],
    fullWidth ? "w-full" : "",
    className
  );

  return (
    <AnimatedButton
      type={type}
      className={buttonClass}
      disabled={disabled}
      {...props}
    >
      {children}
    </AnimatedButton>
  );
}
