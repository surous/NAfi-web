"use client";

import React from "react";
import { motion } from "framer-motion";
import TestimonialCard from "@/components/ui/TestimonialCard";
import Card from "@/components/ui/Card";
import StaggerContainer, { staggerItemVariants } from "@/components/motion/StaggerContainer";
import type { Testimonial } from "@/types";

interface TestimonialsGridProps {
  testimonials: Testimonial[];
}

export function TestimonialsGrid({ testimonials }: TestimonialsGridProps) {
  const isSingle = testimonials.length === 1;

  return (
    <div className={isSingle ? "max-w-2xl mx-auto" : ""}>
      <StaggerContainer className={isSingle ? "grid grid-cols-1" : "grid grid-cols-1 md:grid-cols-3 gap-6"}>
        {testimonials.map((t) => (
          <motion.div key={t._id} variants={staggerItemVariants}>
            <TestimonialCard
              clientName={t.clientName}
              role={t.role}
              company={t.company}
              quote={t.quote}
              rating={t.rating}
              avatar={typeof t.avatar === "string" ? t.avatar : undefined}
            />
          </motion.div>
        ))}
      </StaggerContainer>
    </div>
  );
}

const caseResults = [
  {
    title: "GULBETOPS — Gym Management System",
    tag: "Flagship Product • Live at Extreme Gym",
    problem: "Gyms and fitness centers deal with manual membership tracking, lost attendance records, subscription renewals, and disjointed communication.",
    solution: "A high-performance management platform designed by NAFI Solutions and deployed at Extreme Gym, powering membership tracking, daily check-ins, and operations.",
    results: [
      "Currently deployed and powering live operations at Extreme Gym",
      "Automated member management and renewal tracking",
      "100% reliable uptime with ongoing dedicated support",
    ],
  },
  {
    title: "EDUCORE — School Management System",
    tag: "Proprietary Product • Education",
    problem: "Educational institutions struggle with fragmented paper records, manual grade compilation, attendance tracking, and delayed parent communications.",
    solution: "A modern, unified school management platform connecting administration, teachers, students, and parents in one seamless digital ecosystem.",
    results: [
      "Centralized student records, attendance, and grading modules",
      "Real-time communication and parent portal capabilities",
      "Scalable for primary schools, high schools, and training academies",
    ],
  },
];

export function CaseResultsGrid() {
  return (
    <div className="max-w-5xl mx-auto">
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {caseResults.map((cr) => (
          <motion.div key={cr.title} variants={staggerItemVariants}>
            <Card className="p-8 md:p-10 h-full hover:border-[var(--color-border-brand)] flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[var(--color-brand)]" />
                <span className="text-xs font-mono text-[var(--color-brand)] uppercase tracking-wider">
                  {cr.tag}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-heading text-[var(--color-text-primary)] mb-5">
                {cr.title}
              </h3>
              <div className="mb-5">
                <p className="text-xs font-mono text-[var(--color-brand)] uppercase tracking-wider mb-1.5">
                  Challenge
                </p>
                <p className="text-sm text-[var(--color-text-secondary)] font-body leading-relaxed">
                  {cr.problem}
                </p>
              </div>
              <div className="mb-6">
                <p className="text-xs font-mono text-[var(--color-accent)] uppercase tracking-wider mb-1.5">
                  Delivered Solution
                </p>
                <p className="text-sm text-[var(--color-text-secondary)] font-body leading-relaxed">
                  {cr.solution}
                </p>
              </div>
              <div className="mt-auto pt-5 border-t border-[var(--color-border)]">
                <p className="text-xs font-mono text-[var(--color-success)] uppercase tracking-wider mb-3">
                  Delivered Results
                </p>
                <ul className="space-y-2">
                  {cr.results.map((r) => (
                    <li
                      key={r}
                      className="text-xs md:text-sm text-[var(--color-text-secondary)] font-body flex items-center gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-success)] shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        ))}
      </StaggerContainer>
    </div>
  );
}
