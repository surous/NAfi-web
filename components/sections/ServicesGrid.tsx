"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";
import StaggerContainer, { staggerItemVariants } from "@/components/motion/StaggerContainer";
import { motion } from "framer-motion";
import FadeInView from "@/components/motion/FadeInView";

const services = [
  {
    iconName: "Globe",
    title: "Website Development",
    description:
      "Professional, responsive websites — from corporate portals to school systems, hotel booking platforms, and e-commerce solutions.",
    features: [],
  },
  {
    iconName: "Smartphone",
    title: "Mobile Applications",
    description:
      "Native and cross-platform Android & iOS apps designed to improve customer engagement and streamline business operations.",
    features: [],
  },
  {
    iconName: "Settings2",
    title: "Enterprise Software",
    description:
      "Custom management systems for schools, hotels, real estate companies, and enterprises — built around your exact workflow.",
    features: [],
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-[var(--color-bg-page)]">
      <div className="max-w-[var(--content-max-width)] mx-auto px-6">
        <SectionHeader
          title="What We Build"
          subtitle="Custom solutions tailored to your industry and goals"
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc) => (
            <motion.div key={svc.title} variants={staggerItemVariants}>
              <ServiceCard
                iconName={svc.iconName}
                title={svc.title}
                description={svc.description}
                features={svc.features}
              />
            </motion.div>
          ))}
        </StaggerContainer>

        <FadeInView delay={0.2}>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[var(--color-brand)] font-body text-sm font-semibold hover:gap-3 transition-all duration-200"
            >
              View all services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
