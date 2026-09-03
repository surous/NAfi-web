"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";

const schema = z.object({
  name: z.string().min(2, "Full name is required"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(20, "Please describe your project (at least 20 characters)"),
});

type FormValues = z.infer<typeof schema>;

const serviceOptions = [
  { value: "gulbetops", label: "GULBETOPS — Gym Management System" },
  { value: "educore", label: "EDUCORE — School Management System" },
  { value: "website", label: "Website Development" },
  { value: "mobile", label: "Mobile App" },
  { value: "enterprise", label: "Custom Enterprise Software" },
  { value: "cloud", label: "Cloud Solutions" },
  { value: "ai", label: "AI & Automation" },
  { value: "consulting", label: "IT Consulting" },
  { value: "other", label: "Other" },
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const shouldReduceMotion = useReducedMotion();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center text-center py-20 px-8 bg-[var(--color-bg-surface)] border border-[var(--color-border-brand)] rounded-[var(--radius-lg)]"
          >
            <div className="w-16 h-16 rounded-full bg-[rgba(52,211,153,0.1)] border border-[var(--color-success)] flex items-center justify-center mb-6">
              <CheckCircle2 className="w-8 h-8 text-[var(--color-success)]" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-[var(--color-text-primary)] mb-3">
              Message Sent!
            </h3>
            <p className="text-[var(--color-text-secondary)] font-body">
              Thank you! We&apos;ll be in touch within 24 hours.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm text-[var(--color-brand)] font-body hover:underline cursor-pointer"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={shouldReduceMotion ? {} : { opacity: 1 }}
            exit={shouldReduceMotion ? {} : { opacity: 0, y: -20 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
              <Input
                label="Full Name *"
                error={errors.name?.message}
                {...register("name")}
              />
              <Input
                label="Company Name (optional)"
                error={errors.company?.message}
                {...register("company")}
              />
              <Input
                label="Email Address *"
                type="email"
                error={errors.email?.message}
                {...register("email")}
              />
              <Input
                label="Phone Number (optional)"
                type="tel"
                error={errors.phone?.message}
                {...register("phone")}
              />
            </div>

            <Select
              label="Service Interest *"
              options={serviceOptions}
              error={errors.service?.message}
              {...register("service")}
            />

            <Textarea
              label="Project Description *"
              error={errors.message?.message}
              rows={5}
              {...register("message")}
            />

            {status === "error" && (
              <p className="mb-4 text-sm text-[var(--color-error)] font-body">
                Something went wrong. Please try again.
              </p>
            )}

            <Button
              type="submit"
              variant="primary"
              fullWidth
              disabled={status === "loading"}
              className="text-base py-4 h-auto gap-3"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Get My Free Consultation"
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
