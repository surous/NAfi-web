import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const TelegramIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.686c.223-.195-.054-.282-.346-.086l-6.4 4.024-2.76-.86c-.6-.185-.61-.595.125-.89l10.81-4.17c.5-.185.95.11.815.903z" />
  </svg>
);

const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.996 0C5.374 0 0 5.373 0 11.998c0 2.115.549 4.108 1.517 5.862L.15 24l6.326-1.658A11.956 11.956 0 0011.996 24C18.623 24 24 18.626 24 11.998 24 5.373 18.623 0 11.996 0zM17.472 16.945c-.244.693-1.42 1.332-1.993 1.393-.538.058-1.222.185-3.834-.897-3.153-1.306-5.184-4.526-5.34-4.735-.157-.208-1.272-1.694-1.272-3.23 0-1.536.793-2.292 1.077-2.604.284-.312.617-.39.822-.39.206 0 .41.002.593.01.196.01.46-.076.718.547.268.647.876 2.138.954 2.293.078.156.13.338.026.547-.104.208-.156.338-.312.52-.156.182-.326.39-.468.52-.156.156-.322.327-.14.64.182.312.808 1.334 1.734 2.16 1.198 1.072 2.193 1.402 2.504 1.558.312.156.495.13.677-.078.182-.208.78-1.015.988-1.365.208-.35.416-.292.688-.182.272.11 1.733.82 2.03.963.298.143.495.215.567.332.072.117.072.676-.172 1.37z" />
  </svg>
);

const InstagramIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services", label: "Website Development" },
  { href: "/services", label: "Mobile Apps" },
  { href: "/services", label: "Enterprise Software" },
  { href: "/services", label: "Cloud Solutions" },
  { href: "/services", label: "AI & Automation" },
];

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "var(--color-bg-footer)" }}
      className="border-t border-[var(--color-border)]"
    >
      <div className="max-w-[var(--content-max-width)] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-1.5 mb-6">
              <Image src="/logo.png" alt="NAFI Solutions" width={160} height={48} className="h-12 w-auto object-contain opacity-90" priority />
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] font-body leading-relaxed mb-6">
              Building solutions that drive growth.
            </p>
            <div className="flex gap-3">
              <a
                href="https://t.me/NafiSolutions"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with us on Telegram"
                className="w-8 h-8 rounded-[var(--radius-sm)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[#0088cc] hover:border-[#0088cc] transition-colors duration-200"
              >
                <TelegramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/251000000000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with us on WhatsApp"
                className="w-8 h-8 rounded-[var(--radius-sm)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[#25D366] hover:border-[#25D366] transition-colors duration-200"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/nafisolutions"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with us on Instagram"
                className="w-8 h-8 rounded-[var(--radius-sm)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[#E1306C] hover:border-[#E1306C] transition-colors duration-200"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/company/nafi-solutions"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with us on LinkedIn"
                className="w-8 h-8 rounded-[var(--radius-sm)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[#0077b5] hover:border-[#0077b5] transition-colors duration-200"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-bold font-heading text-[var(--color-text-primary)] uppercase tracking-wider mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-[var(--color-text-secondary)] font-body hover:text-[var(--color-text-primary)] transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-bold font-heading text-[var(--color-text-primary)] uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-[var(--color-text-secondary)] font-body hover:text-[var(--color-text-primary)] transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold font-heading text-[var(--color-text-primary)] uppercase tracking-wider mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:nafisolutions1@gmail.com"
                  className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)] font-body hover:text-[var(--color-brand)] transition-colors duration-200 group"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-[var(--color-brand)] shrink-0" />
                  nafisolutions1@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+251968876088"
                  className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)] font-body hover:text-[var(--color-brand)] transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-[var(--color-brand)] shrink-0" />
                  +251 968 876 088
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)] font-body">
                  <MapPin className="w-4 h-4 mt-0.5 text-[var(--color-brand)] shrink-0" />
                  Adama, Ethiopia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-disabled)] font-body">
            © 2025 Nafi Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-[var(--color-text-disabled)] font-body hover:text-[var(--color-text-secondary)] transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-[var(--color-text-disabled)] font-body hover:text-[var(--color-text-secondary)] transition-colors duration-200"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
