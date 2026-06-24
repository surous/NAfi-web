"use client";

import React, { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Card({ children, className = "", onClick }: CardProps) {
  const shouldReduceMotion = useReducedMotion();

  const baseClasses = cn(
    "bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6 transition-colors duration-300",
    onClick ? "cursor-pointer" : "",
    className
  );

  if (shouldReduceMotion) {
    return (
      <div className={baseClasses} onClick={onClick}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={baseClasses}
      onClick={onClick}
      whileHover={{
        y: -6,
        borderColor: "rgba(255, 255, 255, 0.15)", // Brighter border on hover
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
