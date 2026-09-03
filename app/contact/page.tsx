import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import FAQAccordion from "@/components/sections/FAQAccordion";
import ContactForm from "@/components/sections/ContactForm";
import FadeInView from "@/components/motion/FadeInView";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with NAFI Solutions. Request a free consultation, ask about our services, or tell us about your project.",
  openGraph: {
    title: "Contact | NAFI Solutions",
    description:
      "Get in touch with NAFI Solutions. Request a free consultation or ask about our services.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const contactInfo = [
  {
    Icon: Mail,
    label: "Email",
    value: "support@nafisolutions.com.et",
    href: "mailto:support@nafisolutions.com.et",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+251 959 36 00 16",
    href: "tel:+251959360016",
  },
  {
    Icon: MapPin,
    label: "Location",
    value: "Adama, Ethiopia",
    href: undefined,
  },
  {
    Icon: Clock,
    label: "Hours",
    value: "Monday – Sunday, 8:00 AM – 8:00 PM (GMT+3)",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        headline="Let's Build Something Amazing Together"
        subheadline="Whether you're launching a new product or modernizing your systems — we're ready to help."
      />

      {/* Contact section */}
      <section className="py-24 bg-[var(--color-bg-page)]">
        <div className="max-w-[var(--content-max-width)] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: form */}
            <div className="lg:col-span-3">
              <FadeInView direction="left">
                <h2 className="text-2xl font-bold font-heading text-[var(--color-text-primary)] mb-2">
                  Send Us a Message
                </h2>
                <p className="text-sm text-[var(--color-text-secondary)] font-body mb-8">
                  Fill in your details and we&apos;ll get back to you within 24 hours.
                </p>
              </FadeInView>
              <ContactForm />
            </div>

            {/* Right: contact info */}
            <div className="lg:col-span-2">
              <FadeInView direction="right" delay={0.1}>
                <h2 className="text-2xl font-bold font-heading text-[var(--color-text-primary)] mb-2">
                  Get in Touch
                </h2>
                <p className="text-sm text-[var(--color-text-secondary)] font-body mb-8">
                  Have a question? Reach out directly through any of the channels below.
                </p>

                <div className="space-y-5">
                  {contactInfo.map(({ Icon, label, value, href }) => (
                    <div
                      key={label}
                      className="flex items-start gap-4 p-5 rounded-[var(--radius-md)] bg-[var(--color-bg-surface)] border border-[var(--color-border)] hover:border-[var(--color-border-brand)] transition-colors duration-300"
                    >
                      <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[rgba(79,126,247,0.08)] border border-[var(--color-border-brand)] flex items-center justify-center text-[var(--color-brand)] shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-mono text-[var(--color-text-disabled)] uppercase tracking-wider mb-1">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            className="text-sm font-body text-[var(--color-text-primary)] hover:text-[var(--color-brand)] transition-colors duration-200"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm font-body text-[var(--color-text-primary)]">
                            {value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </FadeInView>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion />
    </>
  );
}
