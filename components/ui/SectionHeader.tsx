import React from "react";
import { cn } from "@/lib/utils";
import Badge from "@/components/ui/Badge";
import FadeInView from "@/components/motion/FadeInView";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  badge,
  title,
  titleHighlight = "",
  subtitle,
  className = "",
  align = "center",
}: SectionHeaderProps) {
  const parts = titleHighlight ? title.split(titleHighlight) : [title];

  return (
    <FadeInView
      className={cn(
        "max-w-3xl mb-16",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <Badge variant="brand" className="mb-4">
          {badge}
        </Badge>
      )}
      <h2 className="text-3xl md:text-5xl font-bold font-heading text-[var(--color-text-primary)] tracking-tight mb-4 leading-[1.15]">
        {titleHighlight ? (
          <>
            {parts[0]}
            <span className="text-[var(--color-brand)]">{titleHighlight}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-[var(--color-text-secondary)] font-body leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </FadeInView>
  );
}
