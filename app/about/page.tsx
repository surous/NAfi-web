import type { Metadata } from "next";
import { Target, Eye } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import CTABanner from "@/components/layout/CTABanner";
import ValuesSection from "@/components/sections/ValuesSection";
import TeamSection from "@/components/sections/TeamSection";
import FadeInView from "@/components/motion/FadeInView";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn the story behind NAFI Solutions — our mission, vision, values, and the team committed to delivering smart digital solutions across Ethiopia.",
  openGraph: {
    title: "About Us | NAFI Solutions",
    description:
      "Learn the story behind NAFI Solutions — our mission, vision, values, and the team dedicated to smart digital solutions.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        headline="We Build Technology That Creates Real Impact"
        subheadline="A team of passionate engineers and designers dedicated to solving real business problems through smart digital solutions."
      />

      {/* Our Story */}
      <section className="py-24 bg-[var(--color-bg-page)]">
        <div className="max-w-[var(--content-max-width)] mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <FadeInView>
              <p className="text-xs font-mono text-[var(--color-brand)] uppercase tracking-widest mb-4">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-[var(--color-text-primary)] tracking-tight leading-[1.15] mb-8">
                Our Story
              </h2>
            </FadeInView>

            <FadeInView delay={0.1}>
              <p className="text-base md:text-lg text-[var(--color-text-secondary)] font-body leading-relaxed mb-6">
                Nafi Solutions was founded to solve a core problem: many organizations have incredible potential but are held back by inefficient processes and outdated systems. We set out to create practical, innovative digital solutions that simplify operations and empower growth. Today, we specialize in building intelligent websites, mobile applications, and enterprise systems that deliver measurable value across Ethiopia and beyond.
              </p>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-[var(--color-bg-surface)]">
        <div className="max-w-[var(--content-max-width)] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeInView direction="left">
              <Card className="p-8 h-full hover:border-[var(--color-border-brand)]">
                <div className="w-12 h-12 rounded-[var(--radius-sm)] bg-[rgba(79,126,247,0.06)] border border-[var(--color-border-brand)] flex items-center justify-center text-[var(--color-brand)] mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-[var(--color-text-primary)] mb-4">
                  Our Mission
                </h3>
                <p className="text-[var(--color-text-secondary)] font-body leading-relaxed">
                  To empower organizations through innovative technology solutions that simplify operations, enhance accessibility, and create measurable business value.
                </p>
              </Card>
            </FadeInView>

            <FadeInView direction="right" delay={0.1}>
              <Card className="p-8 h-full hover:border-[var(--color-border-brand)]">
                <div className="w-12 h-12 rounded-[var(--radius-sm)] bg-[rgba(124,92,252,0.06)] border border-[rgba(124,92,252,0.25)] flex items-center justify-center text-[var(--color-accent)] mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-[var(--color-text-primary)] mb-4">
                  Our Vision
                </h3>
                <p className="text-[var(--color-text-secondary)] font-body leading-relaxed">
                  To become a trusted technology partner recognized for delivering impactful digital solutions that transform businesses and communities globally.
                </p>
              </Card>
            </FadeInView>
          </div>
        </div>
      </section>

      <ValuesSection />
      <TeamSection />

      <CTABanner
        headline="Let's Build Your Digital Future"
        subtext="Partner with a team that understands your business and delivers technology that works."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="View Our Services"
        secondaryHref="/services"
      />
    </>
  );
}
