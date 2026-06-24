import React from "react";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import FadeInView from "@/components/motion/FadeInView";

export default function TestimonialTeaser() {
  return (
    <section className="py-24 bg-[var(--color-bg-page)]">
      <div className="max-w-[var(--content-max-width)] mx-auto px-6">
        <FadeInView>
          <div
            className="relative rounded-[var(--radius-lg)] border border-[var(--color-border-brand)] bg-[var(--color-bg-surface)] p-10 md:p-16 text-center overflow-hidden"
            style={{ boxShadow: "0 0 60px rgba(79,126,247,0.06)" }}
          >
            {/* Glow backdrop */}
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(79,126,247,0.06) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[var(--color-warning)] text-[var(--color-warning)]"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl font-heading font-semibold text-[var(--color-text-primary)] leading-[1.4] max-w-3xl mx-auto mb-8 italic">
                "Nafi Solutions transformed our school's operations through a
                modern management platform. Administrative tasks became
                significantly easier."
              </blockquote>

              {/* Attribution */}
              <p className="text-sm text-[var(--color-text-secondary)] font-body font-medium mb-8">
                — School Administrator, Ethiopia
              </p>

              {/* Link */}
              <Link
                href="/testimonials"
                className="inline-flex items-center gap-2 text-[var(--color-brand)] font-body text-sm font-semibold hover:gap-3 transition-all duration-200"
              >
                Read all reviews
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
