import React from "react";
import Link from "next/link";
import FadeInView from "@/components/motion/FadeInView";
import Button from "@/components/ui/Button";

interface CTABannerProps {
  headline: string;
  subtext: string;
  primaryLabel: string;
  primaryHref?: string;
  secondaryLabel: string;
  secondaryHref?: string;
}

export default function CTABanner({
  headline,
  subtext,
  primaryLabel,
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref = "/services",
}: CTABannerProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle glow backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(79,126,247,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[var(--content-max-width)] mx-auto px-6 relative z-10">
        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-brand)] rounded-[var(--radius-lg)] p-10 md:p-16 text-center"
          style={{ boxShadow: "0 0 80px rgba(79,126,247,0.06)" }}
        >
          <FadeInView>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-[var(--color-text-primary)] tracking-tight leading-[1.15] mb-4">
              {headline}
            </h2>
          </FadeInView>

          <FadeInView delay={0.1}>
            <p className="text-base md:text-lg text-[var(--color-text-secondary)] font-body leading-relaxed max-w-2xl mx-auto mb-10">
              {subtext}
            </p>
          </FadeInView>

          <FadeInView delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={primaryHref}>
                <Button variant="primary" className="text-base px-8 py-4 h-auto">
                  {primaryLabel}
                </Button>
              </Link>
              <Link href={secondaryHref}>
                <Button variant="secondary" className="text-base px-8 py-4 h-auto border border-[var(--color-border-strong)]">
                  {secondaryLabel}
                </Button>
              </Link>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
