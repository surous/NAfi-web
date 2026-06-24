"use client";

import React, { useState, forwardRef, FocusEvent, ChangeEvent, useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className = "", onFocus, onBlur, onChange, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(!!props.value || !!props.defaultValue);
    const shouldReduceMotion = useReducedMotion();
    const selectId = useId();
    const errorId = `${selectId}-error`;

    const handleFocus = (e: FocusEvent<HTMLSelectElement>) => {
      setIsFocused(true);
      if (onFocus) onFocus(e);
    };

    const handleBlur = (e: FocusEvent<HTMLSelectElement>) => {
      setIsFocused(false);
      setHasValue(!!e.target.value);
      if (onBlur) onBlur(e);
    };

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
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
          <select
            id={selectId}
            ref={ref}
            className={cn(
              "w-full bg-[var(--color-bg-page)] text-[var(--color-text-primary)] border rounded-[var(--radius-sm)] px-4 pt-6 pb-2 text-sm font-body focus:outline-none transition-all duration-300 appearance-none cursor-pointer",
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
          >
            <option value="" disabled hidden></option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-[var(--color-bg-surface)] text-[var(--color-text-primary)]">
                {opt.label}
              </option>
            ))}
          </select>
          <label
            htmlFor={selectId}
            className={cn(
              "absolute left-4 top-4 font-body text-xs text-[var(--color-text-secondary)] transition-all duration-300 pointer-events-none origin-left transform -translate-y-1/2 scale-100",
              (isFocused || hasValue)
                ? "top-2.5 scale-90 text-[var(--color-brand)]"
                : "top-1/2 -translate-y-1/2",
              error ? "text-[var(--color-error)]" : ""
            )}
          >
            {label}
          </label>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-text-secondary)]">
            <svg
              className="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
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

Select.displayName = "Select";
export default Select;
