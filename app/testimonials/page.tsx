import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import CTABanner from "@/components/layout/CTABanner";
import StatsSection from "@/components/sections/StatsSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { TestimonialsGrid, CaseResultsGrid } from "@/components/sections/TestimonialsGridClient";
import { getTestimonials, fallbackTestimonials } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "See what our clients say about working with NAFI Solutions — real results, real impact, and real partnerships.",
  openGraph: {
    title: "Testimonials | NAFI Solutions",
    description: "Real feedback from organizations we've helped grow and transform.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default async function TestimonialsPage() {
  let testimonials = fallbackTestimonials;
  try {
    testimonials = await getTestimonials();
  } catch {
    // use fallback
  }

  return (
    <>
      <PageHero
        headline="What Our Clients Say"
        subheadline="Real feedback from organizations we've helped grow and transform."
      />

      <StatsSection />

      {/* Testimonials Grid */}
      <section className="py-24 bg-[var(--color-bg-page)]">
        <div className="max-w-[var(--content-max-width)] mx-auto px-6">
          <SectionHeader
            title="Client Testimonials"
            subtitle="Trusted by businesses across Ethiopia"
          />
          <TestimonialsGrid testimonials={testimonials} />
        </div>
      </section>

      {/* Case Results */}
      <section className="py-24 bg-[var(--color-bg-surface)]">
        <div className="max-w-[var(--content-max-width)] mx-auto px-6">
          <SectionHeader
            title="Results We've Delivered"
            subtitle="Real problems solved, real impact created"
          />
          <CaseResultsGrid />
        </div>
      </section>

      <CTABanner
        headline="Ready to Be Our Next Success Story?"
        subtext="Let's talk about your goals and build something that gets results."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="View Our Services"
        secondaryHref="/services"
      />
    </>
  );
}
