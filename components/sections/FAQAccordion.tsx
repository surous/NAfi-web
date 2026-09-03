import React from "react";
import Accordion from "@/components/ui/Accordion";
import SectionHeader from "@/components/ui/SectionHeader";

const faqs = [
  {
    id: "faq-1",
    question: "How long does a typical project take?",
    answer:
      "Most standard websites and landing pages are delivered within 1–2 weeks, while custom mobile apps and complex software typically take 3–6 weeks. We work in agile sprints to deliver rapid, working results with clear milestones along the way.",
  },
  {
    id: "faq-2",
    question: "How much does a project cost?",
    answer:
      "We offer competitive, transparent pricing tailored to each project's specific requirements. We believe quality technology should be accessible and affordable. Contact us for a free quote.",
  },
  {
    id: "faq-3",
    question: "Do you work with small businesses and startups?",
    answer:
      "Absolutely. We work with organizations of all sizes — from startups and small businesses to schools, hotels, and large enterprises. Our solutions are designed to scale with your growth.",
  },
  {
    id: "faq-4",
    question: "Will I be able to manage my website or app after launch?",
    answer:
      "Yes. We build with content management systems that are easy to use without any technical knowledge. We also provide training and ongoing support after launch.",
  },
  {
    id: "faq-5",
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes. We offer post-launch maintenance packages that include updates, performance monitoring, security patches, and technical support to keep your system running smoothly.",
  },
  {
    id: "faq-6",
    question: "Can you work with clients outside Ethiopia?",
    answer:
      "Yes. While we are based in Ethiopia, we work with clients remotely across East Africa and beyond. All communication, project management, and delivery can be handled fully online.",
  },
  {
    id: "faq-7",
    question: "What information do I need to start a project?",
    answer:
      "Just a basic idea of what you need and the problem you want to solve. We handle the rest — from scoping and planning to design, development, and launch. Start with a free consultation.",
  },
];

export default function FAQAccordion() {
  return (
    <section className="py-24 bg-[var(--color-bg-page)]">
      <div className="max-w-[var(--content-max-width)] mx-auto px-6">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before getting started"
        />
        <div className="max-w-3xl mx-auto">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
