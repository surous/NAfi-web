import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import CTABanner from "@/components/layout/CTABanner";
import ServicesTabs from "@/components/sections/ServicesTabs";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import FadeInView from "@/components/motion/FadeInView";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Services",
  description:
    "From custom websites and mobile apps to enterprise software and AI solutions — explore the full range of digital services NAFI Solutions offers.",
  openGraph: {
    title: "Services | NAFI Solutions",
    description: "Explore the full range of digital services from NAFI Solutions.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const techStack = [
  { group: "Frontend", items: ["React", "Next.js", "Flutter"] },
  { group: "Backend", items: ["Node.js", "Python", "Django"] },
  { group: "Database", items: ["PostgreSQL", "MongoDB", "MySQL"] },
  { group: "Cloud", items: ["AWS", "Azure", "Google Cloud"] },
  { group: "Mobile", items: ["React Native", "Flutter"] },
];

const industries = [
  "Education",
  "Hospitality",
  "Real Estate",
  "Healthcare",
  "Retail & E-Commerce",
  "Finance",
  "Logistics",
  "Government & NGOs",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        headline="Solutions Built for Your Business"
        subheadline="We design and develop custom digital products that solve real problems and create measurable results."
      />

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
