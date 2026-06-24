import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import TrustedByStrip from "@/components/sections/TrustedByStrip";
import StatsSection from "@/components/sections/StatsSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyNafi from "@/components/sections/WhyNafi";
import TestimonialTeaser from "@/components/sections/TestimonialTeaser";
import CTABanner from "@/components/layout/CTABanner";

export const metadata: Metadata = {
  title: "NAFI Solutions — Smart Digital Solutions for Modern Businesses",
  description:
    "NAFI Solutions builds custom websites, mobile apps, and enterprise software that help businesses in Ethiopia grow, operate efficiently, and embrace digital transformation.",
  openGraph: {
    title: "NAFI Solutions — Smart Digital Solutions for Modern Businesses",
    description:
      "NAFI Solutions builds custom websites, mobile apps, and enterprise software that help businesses in Ethiopia grow.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NAFI Solutions",
    "url": "https://nafisolutions.com",
    "logo": "https://nafisolutions.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+251968876088",
      "contactType": "customer service",
      "areaServed": "ET",
      "availableLanguage": ["English", "Amharic"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Adama",
      "addressCountry": "ET"
    },
    "sameAs": [
      "https://linkedin.com/company/nafi-solutions",
      "https://instagram.com/nafisolutions",
      "https://t.me/nafisolutions"
    ],
    "description": "NAFI Solutions builds custom websites, mobile apps, and enterprise software that help businesses in Ethiopia grow, operate efficiently, and embrace digital transformation."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <TrustedByStrip />
      <StatsSection />
      <ServicesGrid />
      <WhyNafi />
      <TestimonialTeaser />
      <CTABanner
        headline="Ready to Build Something Amazing?"
        subtext="Whether you're launching a new product or modernizing your existing systems — we're here to help."
        primaryLabel="Get a Free Consultation"
        primaryHref="/contact"
        secondaryLabel="View Our Work"
        secondaryHref="/services"
      />
    </>
  );
}
