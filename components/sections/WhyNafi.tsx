"use client";

import React from "react";
import { CheckCircle2, Sparkles, Clock, HeartHandshake, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import FadeInView from "@/components/motion/FadeInView";

const differentiators = [
  {
    title: "No Confusing Technical Jargon",
    desc: "We speak the language of your business. Clear communication, straightforward pricing, and no hidden surprises.",
  },
  {
    title: "Dedicated One-on-One Attention",
    desc: "You collaborate directly with the team designing and building your product — giving your project the focused care it deserves.",
  },
  {
    title: "Built to Grow With Your Business",
    desc: "Every system is designed to scale effortlessly as your customers, students, or gym members multiply.",
  },
  {
    title: "Reliable Long-Term Support",
    desc: "We don't vanish after launch. We stay by your side to keep everything running smoothly, securely, and without downtime.",
  },
];

const pillars = [
  {
    icon: Sparkles,
    badge: "100% Tailored",
    title: "Custom Built for Your Operations",
    description:
      "Crafted specifically around your unique workflow — never an off-the-shelf, one-size-fits-all template.",
  },
  {
    icon: Clock,
    badge: "1 – 2 Weeks",
    title: "Fast, Rapid Delivery",
    description:
      "We work in swift, agile sprints so your business sees tangible, working progress without months of delay.",
  },
  {
    icon: HeartHandshake,
    badge: "Direct Access",
    title: "Always-On Support & Partnership",
    description:
      "Direct line to our core team whenever you need updates, guidance, or new capabilities added.",
  },
];

export default function WhyNafi() {
  return (
    <section className="py-24 bg-[var(--color-bg-surface)] relative overflow-hidden">
      <div className="max-w-[var(--content-max-width)] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="lg:col-span-6">
            <FadeInView direction="left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(79,126,247,0.08)] border border-[var(--color-border-brand)] text-[var(--color-brand)] text-xs font-mono mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                THE NAFI DIFFERENCE
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-[var(--color-text-primary)] tracking-tight leading-[1.15] mb-6">
                Built for Impact,{" "}
                <span className="text-[var(--color-brand)]">Designed</span> for Your Peace of Mind
              </h2>
              <p className="text-base text-[var(--color-text-secondary)] font-body leading-relaxed mb-8">
                Technology should simplify your business, not make it more complicated. We create dependable websites and digital platforms that eliminate paperwork, save you hours each week, and give your brand a modern edge.
              </p>

              <div className="space-y-4">
                {differentiators.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-3.5 rounded-[var(--radius-md)] bg-[var(--color-bg-page)]/60 border border-[var(--color-border)] hover:border-[var(--color-border-brand)] transition-colors duration-200"
                  >
                    <div className="w-5 h-5 rounded-full bg-[rgba(79,126,247,0.12)] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-brand)]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold font-heading text-[var(--color-text-primary)]">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[var(--color-text-secondary)] font-body mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>
          </div>

          {/* Right — Simple, luxury executive delivery showcase */}
          <div className="lg:col-span-6">
            <FadeInView direction="right" delay={0.1}>
              <div className="relative rounded-[var(--radius-lg)] border border-[var(--color-border-brand)] bg-[var(--color-bg-page)] p-7 md:p-9 shadow-2xl shadow-[rgba(0,0,0,0.4)] overflow-hidden">
                {/* Decorative subtle ambient glow */}
                <div
                  className="absolute -top-24 -right-24 w-64 h-64 rounded-full pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, rgba(79,126,247,0.12) 0%, transparent 70%)",
                    filter: "blur(30px)",
                  }}
                />

                <div className="relative z-10">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-6 border-b border-[var(--color-border)] mb-6">
                    <div>
                      <span className="text-xs font-mono text-[var(--color-brand)] uppercase tracking-wider">
                        Client Delivery Standard
                      </span>
                      <h3 className="text-lg font-bold font-heading text-[var(--color-text-primary)] mt-0.5">
                        What Every Client Receives
                      </h3>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[rgba(52,211,153,0.1)] text-[var(--color-success)] border border-[rgba(52,211,153,0.2)]">
                      <ShieldCheck className="w-3.5 h-3.5" /> Guaranteed
                    </span>
                  </div>

                  {/* 3 Executive Pillars */}
                  <div className="space-y-4">
                    {pillars.map((pillar) => {
                      const Icon = pillar.icon;
                      return (
                        <div
                          key={pillar.title}
                          className="p-4 rounded-[var(--radius-md)] bg-[var(--color-bg-surface)] border border-[var(--color-border)] hover:border-[var(--color-border-brand)] transition-all duration-200"
                        >
                          <div className="flex items-center justify-between gap-3 mb-2">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-[var(--radius-sm)] bg-[rgba(79,126,247,0.1)] border border-[var(--color-border-brand)] flex items-center justify-center text-[var(--color-brand)] shrink-0">
                                <Icon className="w-4 h-4" />
                              </div>
                              <h4 className="text-sm font-bold font-heading text-[var(--color-text-primary)]">
                                {pillar.title}
                              </h4>
                            </div>
                            <span className="text-[11px] font-mono font-medium text-[var(--color-brand)] bg-[rgba(79,126,247,0.08)] px-2.5 py-0.5 rounded-full shrink-0">
                              {pillar.badge}
                            </span>
                          </div>
                          <p className="text-xs text-[var(--color-text-secondary)] font-body leading-relaxed pl-11">
                            {pillar.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Bottom Trust & Action Banner */}
                  <div className="mt-6 pt-5 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-[var(--color-text-secondary)] font-body text-center sm:text-left">
                      Proven with <strong className="text-[var(--color-text-primary)]">Extreme Gym</strong> via <span className="text-[var(--color-brand)]">GULBETOPS</span>
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-brand)] hover:text-white transition-colors"
                    >
                      Start a Conversation
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </div>
    </section>
  );
}
