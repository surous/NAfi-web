"use client";

import React from "react";
import Card from "@/components/ui/Card";
import CounterStat from "@/components/motion/CounterStat";

interface StatCardProps {
  numberValue: number;
  suffix?: string;
  label: string;
}

export default function StatCard({
  numberValue,
  suffix = "",
  label,
}: StatCardProps) {
  return (
    <Card className="flex flex-col items-center justify-center text-center p-8 border-[var(--color-border)] hover:border-[var(--color-border-brand)]">
      <div className="text-4xl md:text-5xl font-extrabold font-heading text-[var(--color-text-primary)] mb-2 tracking-tight">
        <CounterStat value={numberValue} suffix={suffix} />
      </div>
      <p className="text-sm md:text-base text-[var(--color-text-secondary)] font-body font-medium">
        {label}
      </p>
    </Card>
  );
}
