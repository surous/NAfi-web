"use client";

import React, { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface FadeInViewProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export default function FadeInView({
  children,
  delay = 0,
  duration = 0.5,
  direction = "up",
  className = "",
}: FadeInViewProps) {
  const shouldReduceMotion = useReducedMotion();

  // If user prefers reduced motion, disable transitions & translates
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const directions = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
  };

  const initialOffset = directions[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...initialOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: "easeOut" as const,
      }}
    >
      {children}
    </motion.div>
  );
}
