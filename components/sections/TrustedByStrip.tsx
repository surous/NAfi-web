"use client";

import React from "react";
import { motion } from "framer-motion";
import FadeInView from "@/components/motion/FadeInView";

export default function TrustedByStrip() {
  const partners = [
    "Adama Hospital",
    "EthioTel",
    "Oromia Schools",
    "Hawassa Uni.",
    "Blue Nile Bank",
    "ZemenBank",
    "EthioBIM",
    "Adama Hospital",
    "EthioTel",
    "Oromia Schools",
    "Hawassa Uni.",
    "Blue Nile Bank",
    "ZemenBank",
    "EthioBIM",
  ];

  return (
    <section className="py-12 border-y border-[var(--color-border)] bg-[var(--color-bg-surface)] overflow-hidden relative">
      <div className="max-w-[var(--content-max-width)] mx-auto px-6">
        <FadeInView>
          <p className="text-xs font-mono text-[var(--color-text-disabled)] uppercase tracking-widest text-center mb-8">
            Trusted by organizations across Ethiopia
          </p>
        </FadeInView>
      </div>

      <FadeInView delay={0.1}>
        <div className="relative w-full overflow-hidden flex group">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--color-bg-surface)] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--color-bg-surface)] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex w-max items-center gap-12 pr-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {partners.map((partner, i) => (
              <div
                key={i}
                className="w-32 h-12 rounded-[var(--radius-sm)] bg-[var(--color-bg-elevated)] border border-[var(--color-border)] flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 shrink-0 cursor-pointer"
                aria-label={partner}
              >
                <span className="text-xs font-mono text-[var(--color-text-disabled)] uppercase tracking-wider">
                  {partner}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </FadeInView>
    </section>
  );
}
