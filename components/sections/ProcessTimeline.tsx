import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeInView from "@/components/motion/FadeInView";

const steps = [
  { num: "01", title: "Discovery", desc: "We listen, learn, and define the exact problem to solve." },
  { num: "02", title: "Design", desc: "We create intuitive interfaces your users will love." },
  { num: "03", title: "Development", desc: "We build with clean, scalable, and secure code." },
  { num: "04", title: "Testing", desc: "We test rigorously across all devices and scenarios." },
  { num: "05", title: "Launch", desc: "We deploy and go live with full support." },
  { num: "06", title: "Support", desc: "We maintain, monitor, and improve after launch." },
];

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-[var(--color-bg-surface)]">
      <div className="max-w-[var(--content-max-width)] mx-auto px-6">
        <SectionHeader
          title="How We Work"
          subtitle="A proven process from idea to launch"
        />

        <div className="relative">
          {/* Vertical line on desktop */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[var(--color-border)]" />

          <div className="space-y-8">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <FadeInView
                  key={step.num}
                  direction={isEven ? "left" : "right"}
                  delay={idx * 0.07}
                >
                  <div
                    className={`relative flex flex-col md:flex-row items-center gap-6 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${isEven ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                      <div
                        className={`bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-[var(--radius-md)] p-6 hover:border-[var(--color-border-brand)] transition-colors duration-300 ${
                          isEven ? "md:ml-auto" : ""
                        } max-w-md ${isEven ? "md:ml-auto" : "md:mr-auto"}`}
                      >
                        <span className="text-xs font-mono text-[var(--color-brand)] uppercase tracking-widest mb-2 block">
                          Step {step.num}
                        </span>
                        <h3 className="text-lg font-bold font-heading text-[var(--color-text-primary)] mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-[var(--color-text-secondary)] font-body leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    {/* Number bubble — center marker */}
                    <div className="relative z-10 w-10 h-10 rounded-full bg-[var(--color-brand)] flex items-center justify-center shrink-0 shadow-lg">
                      <span className="text-xs font-bold font-mono text-white">{step.num}</span>
                    </div>

                    <div className="flex-1 hidden md:block" />
                  </div>
                </FadeInView>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
