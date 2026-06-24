"use client";

import React from "react";
import { Lightbulb, Star, Shield, Users, Target, Eye } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import StaggerContainer, { staggerItemVariants } from "@/components/motion/StaggerContainer";
import { motion } from "framer-motion";

const values = [
  {
    Icon: Lightbulb,
    title: "Innovation",
    body: "We continuously explore new technologies and creative approaches to solve complex business challenges.",
  },
  {
    Icon: Star,
    title: "Excellence",
    body: "We maintain high standards in every project, ensuring quality, reliability, and outstanding performance.",
  },
  {
    Icon: Shield,
    title: "Integrity",
    body: "We build trust through transparency, honesty, and accountability in everything we do.",
  },
  {
    Icon: Users,
    title: "Customer Success",
    body: "Our clients' success is our success. We measure our impact by the results we deliver.",
  },
];

export default function ValuesSection() {
  return (
    <section className="py-24 bg-[var(--color-bg-page)]">
      <div className="max-w-[var(--content-max-width)] mx-auto px-6">
        <SectionHeader
          title="Our Core Values"
          subtitle="The principles that guide every decision we make"
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ Icon, title, body }) => (
            <motion.div key={title} variants={staggerItemVariants}>
              <Card className="flex flex-col items-start p-8 h-full hover:border-[var(--color-border-brand)]">
                <div className="w-12 h-12 rounded-[var(--radius-sm)] bg-[rgba(79,126,247,0.06)] border border-[var(--color-border-brand)] flex items-center justify-center text-[var(--color-brand)] mb-6">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold font-heading text-[var(--color-text-primary)] mb-2">
                  {title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] font-body leading-relaxed">
                  {body}
                </p>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
