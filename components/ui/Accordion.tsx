"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export default function Accordion({ items, className = "" }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className="border border-[var(--color-border)] bg-[var(--color-bg-surface)] rounded-[var(--radius-md)] overflow-hidden transition-colors duration-300 hover:border-[var(--color-border-strong)]"
          >
            <button
              type="button"
              className="flex justify-between items-center w-full px-6 py-5 text-left text-base font-semibold font-heading text-[var(--color-text-primary)] hover:text-[var(--color-brand)] focus:outline-none focus:text-[var(--color-brand)] transition-colors cursor-pointer"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
              id={`accordion-button-${item.id}`}
            >
              <span>{item.question}</span>
              <motion.span
                animate={shouldReduceMotion ? {} : { rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-[var(--color-text-secondary)] shrink-0 ml-4"
              >
                <ChevronDown className="w-5 h-5" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`accordion-content-${item.id}`}
                  role="region"
                  aria-labelledby={`accordion-button-${item.id}`}
                  initial={shouldReduceMotion ? { opacity: 1, height: "auto" } : { height: 0, opacity: 0 }}
                  animate={shouldReduceMotion ? { opacity: 1, height: "auto" } : { height: "auto", opacity: 1 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 text-sm md:text-base text-[var(--color-text-secondary)] font-body leading-relaxed border-t border-[var(--color-border)] pt-4">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
