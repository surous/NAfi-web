"use client";

import React, { useEffect, useRef } from "react";
import { useMotionValue, useSpring, useInView } from "framer-motion";

interface CounterStatProps {
  value: number;
  suffix?: string;
  className?: string;
}

export default function CounterStat({
  value,
  suffix = "",
  className = "",
}: CounterStatProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 60, damping: 20 });
  const isInView = useInView(elementRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (elementRef.current) {
        elementRef.current.textContent = Math.floor(latest).toString();
      }
    });
    return () => unsubscribe();
  }, [springValue]);

  return (
    <span className={className}>
      <span ref={elementRef}>0</span>
      {suffix}
    </span>
  );
}
