import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import FadeInView from "@/components/motion/FadeInView";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 50% 30%, rgba(79,126,247,0.10) 0%, transparent 65%),
            radial-gradient(ellipse 40% 40% at 20% 60%, rgba(124,92,252,0.05) 0%, transparent 60%)
          `,
        }}
      />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-[var(--content-max-width)] mx-auto px-6 text-center">
        {/* Badge */}
        <FadeInView delay={0}>
          <Badge variant="brand" className="mb-8">
            ✦ Ethiopia&apos;s Leading Software Partner
          </Badge>
        </FadeInView>

        {/* Main Headline */}
        <FadeInView delay={0.1}>
          <h1 className="text-5xl md:text-7xl font-extrabold font-heading text-[var(--color-text-primary)] tracking-tight leading-[1.08] mb-6">
            Transforming Businesses
            <br />
            Through{" "}
            <span className="text-[var(--color-brand)]">Smart Digital</span>{" "}
            Solutions
          </h1>
        </FadeInView>

        {/* Sub-headline */}
        <FadeInView delay={0.2}>
          <p className="text-base md:text-xl text-[var(--color-text-secondary)] font-body leading-relaxed max-w-2xl mx-auto mb-10">
            Nafi Solutions empowers organizations with innovative websites, mobile
            applications, and digital systems that simplify operations, improve
            accessibility, and drive sustainable growth.
          </p>
        </FadeInView>

        {/* CTAs */}
        <FadeInView delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="primary" className="text-base px-8 py-4 h-auto gap-2">
                Request a Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="secondary" className="text-base px-8 py-4 h-auto border border-[var(--color-border-strong)]">
                View Our Solutions
              </Button>
            </Link>
          </div>
        </FadeInView>

        {/* Decorative floating orbs */}
        <div
          className="absolute -left-20 top-1/3 w-64 h-64 rounded-full pointer-events-none"
          aria-hidden="true"
          style={{
            background: "radial-gradient(circle, rgba(124,92,252,0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute -right-20 top-1/2 w-80 h-80 rounded-full pointer-events-none"
          aria-hidden="true"
          style={{
            background: "radial-gradient(circle, rgba(79,126,247,0.06) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>
    </section>
  );
}
