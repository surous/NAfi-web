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
  return (
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
  );
}

const caseResults = [
  {
    title: "School Management Platform",
    problem: "Manual student records, attendance tracking, and parent communication were consuming staff time.",
    solution: "Centralized School Management System with web and mobile access.",
    results: [
      "80% reduction in paperwork",
      "Faster report generation",
      "Improved parent-teacher communication",
    ],
  },
  {
    title: "Hotel Reservation System",
    problem: "Phone-based bookings and manual reservation tracking were causing errors and lost revenue.",
    solution: "Online booking platform with room management and payment integration.",
    results: [
      "Increased online reservations",
      "Reduced booking errors",
      "Higher guest satisfaction",
    ],
  },
  {
    title: "Real Estate Platform",
    problem: "Property listings were difficult to manage and lacked online visibility.",
    solution: "Property management and listing platform with advanced search.",
    results: [
      "Increased lead generation",
      "Better customer engagement",
      "Improved property visibility",
    ],
  },
];

export function CaseResultsGrid() {
  return (
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {caseResults.map((cr) => (
        <motion.div key={cr.title} variants={staggerItemVariants}>
          <Card className="p-8 h-full hover:border-[var(--color-border-brand)] flex flex-col">
            <h3 className="text-lg font-bold font-heading text-[var(--color-text-primary)] mb-4">
              {cr.title}
            </h3>
            <div className="mb-4">
              <p className="text-xs font-mono text-[var(--color-brand)] uppercase tracking-wider mb-1">
                Problem
              </p>
              <p className="text-sm text-[var(--color-text-secondary)] font-body leading-relaxed">
                {cr.problem}
              </p>
            </div>
            <div className="mb-4">
              <p className="text-xs font-mono text-[var(--color-accent)] uppercase tracking-wider mb-1">
                Solution
              </p>
              <p className="text-sm text-[var(--color-text-secondary)] font-body leading-relaxed">
                {cr.solution}
              </p>
            </div>
            <div className="mt-auto pt-4 border-t border-[var(--color-border)]">
              <p className="text-xs font-mono text-[var(--color-success)] uppercase tracking-wider mb-2">
                Results
              </p>
              <ul className="space-y-1.5">
                {cr.results.map((r) => (
                  <li
                    key={r}
                    className="text-xs text-[var(--color-text-secondary)] font-body flex items-center gap-2"
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
  );
}
