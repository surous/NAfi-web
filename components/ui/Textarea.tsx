"use client";

import React, { useState, forwardRef, FocusEvent, ChangeEvent, useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = "", onFocus, onBlur, onChange, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(!!props.value || !!props.defaultValue);
    const shouldReduceMotion = useReducedMotion();
    const textareaId = useId();
    const errorId = `${textareaId}-error`;

    const handleFocus = (e: FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(true);
      if (onFocus) onFocus(e);
    };

    const handleBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false);
      setHasValue(!!e.target.value);
      if (onBlur) onBlur(e);
    };

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setHasValue(!!e.target.value);
      if (onChange) onChange(e);
    };

    const shakeAnimation = shouldReduceMotion
      ? {}
      : {
          x: [0, 10, -10, 10, -10, 0],
        };

    return (
      <motion.div
        animate={error ? shakeAnimation : {}}
        transition={{ duration: 0.4 }}
        className="relative w-full mb-6"
      >
        <div className="relative">
          <textarea
            id={textareaId}
            ref={ref}
            className={cn(
              "w-full bg-[var(--color-bg-page)] text-[var(--color-text-primary)] border rounded-[var(--radius-sm)] px-4 pt-6 pb-2 text-sm font-body focus:outline-none transition-all duration-300 min-h-[120px] resize-y",
              error
                ? "border-[var(--color-error)] focus:border-[var(--color-error)]"
                : "border-[var(--color-border)] focus:border-[var(--color-brand)] focus:ring-1 focus:ring-[var(--color-brand)]",
              className
            )}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
            {...props}
          />
          <label
            htmlFor={textareaId}
            className={cn(
              "absolute left-4 top-4 font-body text-xs text-[var(--color-text-secondary)] transition-all duration-300 pointer-events-none origin-left transform -translate-y-1/2 scale-100",
              (isFocused || hasValue)
                ? "top-2.5 scale-90 text-[var(--color-brand)]"
                : "top-5",
              error ? "text-[var(--color-error)]" : ""
            )}
          >
            {label}
          </label>
        </div>
        {error && (
          <p id={errorId} className="mt-1 text-xs text-[var(--color-error)] font-body font-medium">
            {error}
          </p>
        )}
      </motion.div>
    );
  }
);

Textarea.displayName = "Textarea";
export default Textarea;
