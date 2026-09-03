import type { Metadata } from "next";
import Link from "next/link";
import { Dumbbell, GraduationCap, CheckCircle2, ArrowRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import CTABanner from "@/components/layout/CTABanner";
import ServicesTabs from "@/components/sections/ServicesTabs";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import FadeInView from "@/components/motion/FadeInView";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Services & Products",
  description:
    "Explore our flagship platforms GULBETOPS (Gym Management) and EDUCORE (School Management), alongside custom websites, mobile apps, and enterprise solutions.",
  openGraph: {
    title: "Services & Products | NAFI Solutions",
    description: "Explore our flagship platforms and full range of digital services.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const proprietaryProducts = [
  {
    name: "GULBETOPS",
    badge: "Gym Management System",
    status: "Live in Production • Extreme Gym",
    icon: Dumbbell,
    description:
      "A comprehensive, high-performance operations platform built specifically for fitness centers, gym clubs, and wellness facilities.",
    features: [
      "Member registration, profiles & digital ID cards",
      "Subscription renewal tracking & automated reminders",
      "Daily check-in logs & attendance analytics",
      "Trainer schedules & facility capacity management",
      "Revenue tracking & financial summary reports",
    ],
  },
  {
    name: "EDUCORE",
    badge: "School Management System",
    status: "Ready for Deployment",
    icon: GraduationCap,
    description:
      "An all-in-one digital campus ecosystem connecting school administrators, educators, students, and parents in a single unified platform.",
    features: [
      "Student information & academic record database",
      "Automated grading, report cards & term assessments",
      "Daily student & staff attendance monitoring",
      "Direct parent notification & communication portal",
      "Fee payment status & tuition tracking",
    ],
  },
];

const techStack = [
  { group: "Frontend", items: ["React", "Next.js", "Flutter"] },
  { group: "Backend", items: ["Node.js", "Python", "Django"] },
  { group: "Database", items: ["PostgreSQL", "MongoDB", "MySQL"] },
  { group: "Cloud", items: ["AWS", "Azure", "Google Cloud"] },
  { group: "Mobile", items: ["React Native", "Flutter"] },
];

const industries = [
  "Fitness & Wellness (GULBETOPS)",
  "Education & Schools (EDUCORE)",
  "Hospitality & Hotels",
  "Real Estate & Property",
  "Healthcare",
  "Retail & E-Commerce",
  "Finance & Banking",
  "Logistics & Transport",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        headline="Solutions & Products Built for Impact"
        subheadline="Discover our proprietary management platforms alongside custom digital engineering built for your specific workflow."
      />

      {/* Proprietary Products Section */}
      <section className="py-24 bg-[var(--color-bg-page)]">
        <div className="max-w-[var(--content-max-width)] mx-auto px-6">
          <SectionHeader
            title="Our Flagship Products"
            subtitle="Engineered in-house by NAFI Solutions to solve critical industry workflows"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {proprietaryProducts.map((product) => {
              const Icon = product.icon;
              return (
                <FadeInView key={product.name}>
                  <Card className="p-8 md:p-10 h-full border-[var(--color-border-brand)] hover:border-[var(--color-brand)] transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-6">
                        <div className="w-12 h-12 rounded-[var(--radius-sm)] bg-[rgba(79,126,247,0.12)] border border-[var(--color-border-brand)] flex items-center justify-center text-[var(--color-brand)] shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[rgba(52,211,153,0.1)] text-[var(--color-success)] border border-[rgba(52,211,153,0.2)] text-right">
                          {product.status}
                        </span>
                      </div>

                      <p className="text-xs font-mono text-[var(--color-brand)] uppercase tracking-wider mb-1">
                        {product.badge}
                      </p>
                      <h3 className="text-2xl font-bold font-heading text-[var(--color-text-primary)] mb-4">
                        {product.name}
                      </h3>
                      <p className="text-sm text-[var(--color-text-secondary)] font-body leading-relaxed mb-6">
                        {product.description}
                      </p>

                      <div className="border-t border-[var(--color-border)] pt-5 mb-6">
                        <p className="text-xs font-mono text-[var(--color-text-disabled)] uppercase tracking-wider mb-3">
                          Core Capabilities
                        </p>
                        <ul className="space-y-2.5">
                          {product.features.map((feat) => (
                            <li key={feat} className="text-xs md:text-sm text-[var(--color-text-secondary)] font-body flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-[var(--color-brand)] shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-[var(--radius-sm)] bg-[var(--color-bg-elevated)] hover:bg-[var(--color-brand)] text-[var(--color-text-primary)] hover:text-white border border-[var(--color-border)] hover:border-transparent text-sm font-medium transition-all duration-200"
                    >
                      Request a Demo for {product.name}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Card>
                </FadeInView>
              );
            })}
          </div>
        </div>
      </section>

      <ServicesTabs />

      {/* Technology Strip */}
      <section className="py-20 bg-[var(--color-bg-surface)] border-y border-[var(--color-border)]">
        <div className="max-w-[var(--content-max-width)] mx-auto px-6">
          <SectionHeader
            title="Technologies We Use"
            subtitle="Modern tools, proven results"
          />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {techStack.map(({ group, items }) => (
              <FadeInView key={group}>
                <div>
                  <p className="text-xs font-mono text-[var(--color-brand)] uppercase tracking-widest mb-3">
                    {group}
                  </p>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-[var(--color-text-secondary)] font-body flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-[var(--color-border-brand)] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline />

      {/* Industries Strip */}
      <section className="py-20 bg-[var(--color-bg-surface)] border-t border-[var(--color-border)]">
        <div className="max-w-[var(--content-max-width)] mx-auto px-6">
          <SectionHeader
            title="Industries We Serve"
            subtitle="Specialized solutions for diverse sectors"
          />
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <FadeInView key={industry}>
                <span className="px-4 py-2 rounded-full text-sm font-body font-medium text-[var(--color-text-secondary)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] hover:border-[var(--color-border-brand)] hover:text-[var(--color-text-primary)] transition-colors duration-200">
                  {industry}
                </span>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Have a Project in Mind?"
        subtext="Tell us about your challenge and we'll design the right solution for you."
        primaryLabel="Request a Free Consultation"
        primaryHref="/contact"
        secondaryLabel="View Case Studies"
        secondaryHref="/testimonials"
      />
    </>
  );
}
