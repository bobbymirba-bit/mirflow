"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

export function WorkflowVisualizer({
  steps,
  className,
}: {
  steps: { title: string; description: string }[];
  className?: string;
}) {
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className={cn("grid gap-6 lg:grid-cols-[280px_1fr]", className)}>
      <div className="flex flex-col gap-1">
        {steps.map((step, index) => (
          <button
            key={step.title}
            onClick={() => setActive(index)}
            className={cn(
              "flex items-center gap-3 rounded-xl border border-transparent px-4 py-3 text-left transition-colors",
              active === index
                ? "border-primary/30 bg-primary/10"
                : "hover:bg-accent"
            )}
          >
            <span
              className={cn(
                "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors",
                active === index
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground"
              )}
            >
              {active > index ? <Check className="h-3.5 w-3.5" /> : index + 1}
            </span>
            <span
              className={cn(
                "text-sm font-medium transition-colors",
                active === index ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {step.title}
            </span>
          </button>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8">
        {steps.map((step, index) =>
          index === active ? (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <span className="font-mono text-xs font-semibold uppercase tracking-wide text-primary">
                Step {index + 1} of {steps.length}
              </span>
              <h4 className="mt-3 font-display text-xl font-semibold text-foreground">
                {step.title}
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ) : null
        )}

        <div className="mt-8 flex gap-1.5">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="h-1 flex-1 overflow-hidden rounded-full bg-secondary"
            >
              {active === index ? (
                <motion.div
                  key={`${active}-${index}`}
                  className="h-full bg-primary"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.8, ease: "linear" }}
                />
              ) : (
                <div
                  className={cn(
                    "h-full",
                    active > index ? "bg-primary" : "bg-transparent"
                  )}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
