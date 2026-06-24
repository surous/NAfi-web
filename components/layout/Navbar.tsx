"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setScrolled(latest > 20);
    });
    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.3 },
    }),
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[rgba(13,15,20,0.85)] backdrop-blur-md border-b border-[var(--color-border)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav
        className="max-w-[var(--content-max-width)] mx-auto px-6 h-16 flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 group" aria-label="NAFI Solutions Home">
          <Image src="/logo.png" alt="NAFI Solutions" width={160} height={48} className="h-10 md:h-12 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "px-4 py-2 text-sm font-medium font-body rounded-[var(--radius-sm)] transition-all duration-200",
                pathname === href
                  ? "text-[var(--color-brand)] bg-[var(--color-brand-glow)]"
                  : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface)]"
              )}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="/contact">
            <Button variant="primary" className="text-sm h-9 px-5">
              Get a Free Consultation
            </Button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center p-2 rounded-[var(--radius-sm)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface)] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, height: "auto" } : mobileMenuVariants.hidden}
            animate={mobileMenuVariants.visible}
            exit={shouldReduceMotion ? { opacity: 0 } : mobileMenuVariants.hidden}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-[rgba(13,15,20,0.97)] backdrop-blur-md border-b border-[var(--color-border)] overflow-hidden"
          >
            <div className="max-w-[var(--content-max-width)] mx-auto px-6 py-6 flex flex-col gap-2">
              {navLinks.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  custom={i}
                  initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
                  animate={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={href}
                    className={cn(
                      "block px-4 py-3 text-sm font-medium font-body rounded-[var(--radius-sm)] transition-colors duration-200",
                      pathname === href
                        ? "text-[var(--color-brand)] bg-[var(--color-brand-glow)]"
                        : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface)]"
                    )}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
                <Link href="/contact" className="block">
                  <Button variant="primary" fullWidth className="text-sm">
                    Get a Free Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
