"use client";

import React from "react";
import { Dumbbell, ShieldCheck } from "lucide-react";
import FadeInView from "@/components/motion/FadeInView";

export default function TrustedByStrip() {
  return (
    <section className="py-10 border-y border-[var(--color-border)] bg-[var(--color-bg-surface)] relative overflow-hidden">
      <div className="max-w-[var(--content-max-width)] mx-auto px-6">
        <FadeInView>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand)] animate-pulse" />
              <p className="text-xs font-mono text-[var(--color-text-secondary)] uppercase tracking-widest">
                Featured Client Partner
              </p>
            </div>

            <div className="flex items-center gap-4 px-6 py-3 rounded-[var(--radius-md)] bg-[var(--color-bg-elevated)] border border-[var(--color-border-brand)] shadow-lg shadow-[rgba(79,126,247,0.05)]">
              <div className="w-9 h-9 rounded-[var(--radius-sm)] bg-[rgba(79,126,247,0.12)] border border-[var(--color-border-brand)] flex items-center justify-center text-[var(--color-brand)] shrink-0">
                <Dumbbell className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold font-heading text-[var(--color-text-primary)] tracking-wide uppercase">
                  Extreme Gym
                </h4>
                <p className="text-xs text-[var(--color-text-secondary)] font-body">
                  Powered by <span className="text-[var(--color-brand)] font-semibold">GULBETOPS</span> Gym Management System
                </p>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 ml-4 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-[rgba(52,211,153,0.1)] text-[var(--color-success)] border border-[rgba(52,211,153,0.2)]">
                <ShieldCheck className="w-3 h-3" /> Live Partner
              </span>
            </div>

            <p className="text-xs text-[var(--color-text-disabled)] font-body text-center md:text-right">
              Crafting dedicated, high-impact digital solutions
            </p>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
