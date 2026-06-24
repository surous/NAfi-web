import React from "react";
import { CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeInView from "@/components/motion/FadeInView";

const differentiators = [
  "User-Centered Design",
  "Mobile-First Development",
  "Affordable & Scalable Solutions",
  "Industry-Specific Expertise",
];

export default function WhyNafi() {
  return (
    <section className="py-24 bg-[var(--color-bg-surface)]">
      <div className="max-w-[var(--content-max-width)] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <FadeInView direction="left">
              <p className="text-xs font-mono text-[var(--color-brand)] uppercase tracking-widest mb-4">
                Why choose us
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-[var(--color-text-primary)] tracking-tight leading-[1.15] mb-6">
                Built for Impact,{" "}
                <span className="text-[var(--color-brand)]">Designed</span> for
                Growth
              </h2>
              <p className="text-base text-[var(--color-text-secondary)] font-body leading-relaxed mb-8">
                Unlike generic software providers, we focus on solving specific
                business problems. Every solution we build is customized, secure,
                scalable, and designed around real organizational needs — so you
                can focus on what you do best.
              </p>

              <ul className="space-y-4">
                {differentiators.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[rgba(79,126,247,0.12)] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-brand)]" />
                    </div>
                    <span className="text-sm font-medium font-body text-[var(--color-text-primary)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeInView>
          </div>

          {/* Right — decorative visual block */}
          <FadeInView direction="right" delay={0.1}>
            <div className="relative">
              <div
                className="rounded-[var(--radius-lg)] border border-[var(--color-border-brand)] bg-[var(--color-bg-elevated)] p-8 md:p-10"
                style={{ boxShadow: "0 0 80px rgba(79,126,247,0.06)" }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Custom Built", icon: "⚙️" },
                    { label: "Secure", icon: "🔒" },
                    { label: "Scalable", icon: "📈" },
                    { label: "Supported", icon: "🤝" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col items-center justify-center p-4 rounded-[var(--radius-md)] bg-[var(--color-bg-surface)] border border-[var(--color-border)] text-center gap-2"
                    >
                      <span className="text-2xl" role="img" aria-label={item.label}>
                        {item.icon}
                      </span>
                      <span className="text-xs font-mono font-medium text-[var(--color-text-secondary)] uppercase tracking-wider">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Glow effect behind card */}
              <div
                className="absolute -inset-4 rounded-[var(--radius-lg)] pointer-events-none"
                aria-hidden="true"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(79,126,247,0.06) 0%, transparent 70%)",
                  zIndex: -1,
                }}
              />
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
