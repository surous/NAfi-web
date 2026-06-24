"use client";

import React from "react";
import * as Icons from "lucide-react";
import Card from "@/components/ui/Card";

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
  features?: string[];
}

export default function ServiceCard({
  title,
  description,
  iconName,
  features = [],
}: ServiceCardProps) {
  // Dynamic icon resolution
  const IconComponent = (Icons as any)[iconName] || Icons.HelpCircle;

  return (
    <Card className="flex flex-col h-full hover:border-[var(--color-border-brand)] p-8">
      <div className="w-12 h-12 rounded-[var(--radius-sm)] bg-[rgba(79,126,247,0.06)] border border-[var(--color-border-brand)] flex items-center justify-center text-[var(--color-brand)] mb-6">
        <IconComponent className="w-6 h-6" />
      </div>

      <h3 className="text-xl font-bold font-heading text-[var(--color-text-primary)] mb-3 leading-tight">
        {title}
      </h3>

      <p className="text-[var(--color-text-secondary)] font-body text-sm leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      {features.length > 0 && (
        <ul className="space-y-2 border-t border-[var(--color-border)] pt-4 mt-auto">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-xs text-[var(--color-text-secondary)] font-body">
              <Icons.CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-brand)] mr-2 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
