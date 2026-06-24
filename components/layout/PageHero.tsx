import React from "react";
import { cn } from "@/lib/utils";
import FadeInView from "@/components/motion/FadeInView";

interface PageHeroProps {
  headline: string;
  subheadline: string;
  badge?: string;
  className?: string;
}

export default function PageHero({
  headline,
  subheadline,
  badge,
  className = "",
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden",
        className
      )}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(79,126,247,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[var(--content-max-width)] mx-auto px-6 text-center relative z-10">
        {badge && (
          <FadeInView delay={0}>
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-full font-mono bg-[rgba(79,126,247,0.1)] text-[var(--color-brand)] border border-[var(--color-border-brand)] mb-6">
              {badge}
            </span>
          </FadeInView>
        )}

        <FadeInView delay={0.1}>
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading text-[var(--color-text-primary)] tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
            {headline}
          </h1>
        </FadeInView>

        <FadeInView delay={0.2}>
          <p className="text-base md:text-xl text-[var(--color-text-secondary)] font-body leading-relaxed max-w-2xl mx-auto">
            {subheadline}
          </p>
        </FadeInView>
      </div>

      {/* Decorative separator line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-brand)] to-transparent opacity-40" />
    </section>
  );
}
