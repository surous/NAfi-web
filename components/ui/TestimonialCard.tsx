"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import Card from "@/components/ui/Card";
import Image from "next/image";

interface TestimonialCardProps {
  clientName: string;
  role?: string;
  company: string;
  quote: string;
  rating: number;
  avatar?: string;
}

export default function TestimonialCard({
  clientName,
  role = "",
  company,
  quote,
  rating,
  avatar,
}: TestimonialCardProps) {
  const starsArray = Array.from({ length: 5 }, (_, i) => i < rating);

  return (
    <Card className="flex flex-col justify-between h-full hover:border-[var(--color-border-brand)] p-8">
      <div>
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-1 text-[var(--color-warning)]">
            {starsArray.map((filled, index) => (
              <Star
                key={index}
                className={`w-4 h-4 ${
                  filled ? "fill-[var(--color-warning)]" : "text-[var(--color-text-disabled)]"
                }`}
              />
            ))}
          </div>
          <Quote className="w-8 h-8 text-[var(--color-border-brand)] rotate-180" />
        </div>

        <p className="text-[var(--color-text-secondary)] font-body text-sm md:text-base leading-relaxed italic mb-8">
          "{quote}"
        </p>
      </div>

      <div className="flex items-center gap-4 border-t border-[var(--color-border)] pt-5">
        <div className="w-10 h-10 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border-strong)] flex items-center justify-center overflow-hidden shrink-0 relative">
          {avatar ? (
            <Image
              src={avatar}
              alt={clientName}
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
          ) : (
            <span className="text-sm font-semibold font-mono text-[var(--color-brand)]">
              {clientName.charAt(0).toUpperCase()}
            </span>
          )}
        </div>
        <div>
          <h4 className="text-sm font-bold font-heading text-[var(--color-text-primary)]">
            {clientName}
          </h4>
          <p className="text-xs text-[var(--color-text-secondary)] font-body mt-0.5">
            {role ? `${role}, ` : ""}
            {company}
          </p>
        </div>
      </div>
    </Card>
  );
}
