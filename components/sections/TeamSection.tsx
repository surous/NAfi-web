"use client";

import React from "react";
import Image from "next/image";
import { Link2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import StaggerContainer, { staggerItemVariants } from "@/components/motion/StaggerContainer";
import { motion } from "framer-motion";
import type { TeamMember } from "@/types";

const fallbackTeam: TeamMember[] = [
  {
    _id: "team-1",
    name: "Abebe Kebede",
    role: "Founder & CEO",
    bio: "Visionary leader focused on business innovation and digital transformation across Ethiopia.",
    linkedinUrl: "https://linkedin.com/company/nafi-solutions",
  },
  {
    _id: "team-2",
    name: "Dawit Yohannes",
    role: "Lead Software Engineer",
    bio: "Responsible for architecture, development, and technology strategy across all projects.",
    linkedinUrl: "https://linkedin.com/company/nafi-solutions",
  },
  {
    _id: "team-3",
    name: "Tigist Amare",
    role: "Product & Client Success Manager",
    bio: "Ensures successful project delivery and lasting client satisfaction.",
    linkedinUrl: "https://linkedin.com/company/nafi-solutions",
  },
];

interface TeamSectionProps {
  members?: TeamMember[];
}

export default function TeamSection({ members = fallbackTeam }: TeamSectionProps) {
  return (
    <section className="py-24 bg-[var(--color-bg-page)]">
      <div className="max-w-[var(--content-max-width)] mx-auto px-6">
        <SectionHeader
          title="Meet the Team"
          subtitle="The people behind every solution"
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {members.map((member) => (
            <motion.div key={member._id} variants={staggerItemVariants}>
              <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-8 text-center hover:border-[var(--color-border-brand)] transition-colors duration-300 flex flex-col items-center">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full bg-[var(--color-bg-elevated)] border-2 border-[var(--color-border-brand)] flex items-center justify-center mb-5 overflow-hidden">
                  {typeof member.photo === "string" && member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <span className="text-2xl font-extrabold font-heading text-[var(--color-brand)]">
                      {member.name.charAt(0)}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold font-heading text-[var(--color-text-primary)] mb-1">
                  {member.name}
                </h3>
                <p className="text-xs font-mono text-[var(--color-brand)] uppercase tracking-wider mb-4">
                  {member.role}
                </p>
                <p className="text-sm text-[var(--color-text-secondary)] font-body leading-relaxed mb-6">
                  {member.bio}
                </p>

                {member.linkedinUrl && (
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="flex items-center gap-2 text-xs font-body text-[var(--color-text-secondary)] hover:text-[var(--color-brand)] transition-colors duration-200"
                  >
                    <Link2 className="w-4 h-4" />
                    LinkedIn
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
