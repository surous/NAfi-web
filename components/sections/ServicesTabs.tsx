"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import ServiceCard from "@/components/ui/ServiceCard";
import SectionHeader from "@/components/ui/SectionHeader";

const categories = [
  "All",
  "Web",
  "Mobile",
  "Enterprise",
  "Cloud",
  "AI",
  "Consulting",
];

const services = [
  {
    iconName: "Globe",
    title: "Custom Website Development",
    description:
      "Professional, responsive, and scalable websites designed to strengthen your digital presence and convert visitors into clients.",
    features: [
      "Corporate websites",
      "School portals",
      "Hotel booking systems",
      "Real estate platforms",
      "E-commerce solutions",
      "Content management systems",
    ],
    category: "Web",
  },
  {
    iconName: "Smartphone",
    title: "Mobile App Development",
    description:
      "Powerful Android and iOS applications designed to improve customer engagement and business efficiency.",
    features: [
      "Native & cross-platform apps",
      "Customer portals",
      "Booking systems",
      "Educational apps",
      "Business management apps",
    ],
    category: "Mobile",
  },
  {
    iconName: "Database",
    title: "Enterprise Software Solutions",
    description:
      "Custom software systems tailored to your organizational workflows, replacing manual processes with intelligent automation.",
    features: [
      "Student Information Systems",
      "Hotel Management Systems",
      "Property Management Platforms",
      "Inventory Systems",
      "CRM Systems",
    ],
    category: "Enterprise",
  },
  {
    iconName: "Cloud",
    title: "Cloud Solutions",
    description:
      "Modern cloud infrastructure that gives your business the reliability, security, and scalability it needs to grow.",
    features: [
      "Cloud migration",
      "Data management",
      "Backup & disaster recovery",
      "Infrastructure optimization",
    ],
    category: "Cloud",
  },
  {
    iconName: "Bot",
    title: "AI & Intelligent Automation",
    description:
      "Leverage modern AI technologies to improve decision-making, automate repetitive tasks, and gain competitive advantage.",
    features: [
      "AI-powered chatbots",
      "Data analytics dashboards",
      "Predictive reporting",
      "Process automation",
    ],
    category: "AI",
  },
  {
    iconName: "Headphones",
    title: "IT Consulting",
    description:
      "Expert guidance to help your organization choose, implement, and manage the right technologies for long-term growth.",
    features: [
      "Technology strategy",
      "System audits",
      "Digital transformation roadmaps",
      "Vendor selection",
    ],
    category: "Consulting",
  },
];

export default function ServicesTabs() {
  const [activeCategory, setActiveCategory] = useState("All");
  const shouldReduceMotion = useReducedMotion();

  const filtered =
    activeCategory === "All"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <section className="py-24 bg-[var(--color-bg-page)]">
      <div className="max-w-[var(--content-max-width)] mx-auto px-6">
        <SectionHeader
          title="Our Services"
          subtitle="Comprehensive digital solutions for every need"
        />

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium uppercase tracking-wider border transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[var(--color-brand)] text-white border-[var(--color-brand)]"
                  : "bg-transparent text-[var(--color-text-secondary)] border-[var(--color-border)] hover:border-[var(--color-border-brand)] hover:text-[var(--color-text-primary)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((svc) => (
              <ServiceCard
                key={svc.title}
                iconName={svc.iconName}
                title={svc.title}
                description={svc.description}
                features={svc.features}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
