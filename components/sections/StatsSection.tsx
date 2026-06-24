"use client";

import React from "react";
import StatCard from "@/components/ui/StatCard";
import StaggerContainer, { staggerItemVariants } from "@/components/motion/StaggerContainer";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const stats = [
  { numberValue: 10, suffix: "+", label: "Projects Delivered" },
  { numberValue: 7, suffix: "+", label: "Happy Clients" },
  { numberValue: 2, suffix: "+", label: "Years of Experience" },
  { numberValue: 99, suffix: "%", label: "Client Satisfaction" },
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
