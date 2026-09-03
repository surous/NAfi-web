"use client";

import React from "react";
import StatCard from "@/components/ui/StatCard";
import StaggerContainer, { staggerItemVariants } from "@/components/motion/StaggerContainer";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const stats = [
  { numberValue: 1, suffix: "", label: "Flagship Client Partner" },
  { numberValue: 100, suffix: "%", label: "Client Satisfaction" },
  { numberValue: 100, suffix: "%", label: "Dedicated Attention" },
  { numberValue: 24, suffix: "/7", label: "Direct Support" },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-[var(--color-bg-page)]">
      <div className="max-w-[var(--content-max-width)] mx-auto px-6">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={staggerItemVariants}>
              <StatCard
                numberValue={stat.numberValue}
                suffix={stat.suffix}
                label={stat.label}
              />
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
