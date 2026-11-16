"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Clock3, ScanSearch, ShieldCheck } from "lucide-react";

import { flowStages } from "@/components/visuals/flow-content";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";
import { cn } from "@/lib/utils";

const stages = ["Queued", "In progress", "Your review", "Running"] as const;
type Stage = (typeof stages)[number];

const stageStyle: Record<Stage, { icon: React.ComponentType<{ className?: string }>; className: string }> = {
  Queued: { icon: Clock3, className: "border-white/10 bg-white/[0.04] text-muted-foreground" },
  "In progress": { icon: ScanSearch, className: "border-primary/30 bg-primary/10 text-primary" },
  "Your review": { icon: ShieldCheck, className: "border-warning/30 bg-warning/10 text-warning" },
  Running: { icon: CheckCircle2, className: "border-success/30 bg-success/10 text-success" },
};

function StageChip({ stage, reduced }: { stage: Stage; reduced: boolean }) {
  const { icon: Icon, className } = stageStyle[stage];
  const chip = (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.14em]",
        className
      )}
    >
      <Icon className="h-3 w-3" />
      {stage}
    </span>
  );
  if (reduced) return chip;
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={stage}
        initial={{ opacity: 0, y: 6, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -6, scale: 0.96 }}
        transition={{ duration: 0.25 }}
        className={cn(
          "reveal-motion inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.14em]",
          className
        )}
      >
        <Icon className="h-3 w-3" />
        {stage}
      </motion.span>
    </AnimatePresence>
  );
}

export function OpsConsole({ className }: { className?: string }) {
  const reduced = usePrefersReducedMotion();
  const [tick, setTick] = React.useState(0);

  React.useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setTick((t) => t + 1), 1700);
    return () => clearInterval(id);
  }, [reduced]);

  return (
    <aside aria-label="How Mirflow’s services work together" className={cn("card-glass relative overflow-hidden rounded-3xl p-1.5", className)}>
      <div className="relative overflow-hidden rounded-[1.25rem] border border-white/5 bg-[#070910]/95">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(34,211,238,.12),transparent)] animate-scan motion-reduce:hidden"
        />

        <div className="flex items-center justify-between gap-3 border-b border-white/5 px-4 py-3 sm:px-5">
          <div className="flex shrink-0 items-center gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <p className="min-w-0 text-center font-mono text-[10px] uppercase leading-snug tracking-[0.14em] text-muted-foreground">
            How it connects
          </p>
          <span className="flex shrink-0 items-center gap-1.5 font-mono text-[10px] font-medium text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Sample
          </span>
        </div>

        <ul className="divide-y divide-white/5">
          {flowStages.map((run, row) => {
            const index = reduced ? 0 : (tick + (flowStages.length - row)) % stages.length;
            const stage = stages[index];
            const Icon = run.icon;
            return (
              <li key={run.title} className="grid gap-3 px-5 py-4 sm:grid-cols-[1fr_auto] sm:items-center">
                <div className="flex min-w-0 items-start gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-primary">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-display text-lg">{run.title}</p>
                    <p className="mt-0.5 truncate text-xs text-muted-foreground">{run.detail}</p>
                    <div className="mt-3 flex gap-1" aria-hidden>
                      {stages.map((s, j) => (
                        <span
                          key={s}
                          className={cn(
                            "h-1 flex-1 rounded-full",
                            j < index
                              ? "bg-primary/60"
                              : j === index
                                ? "bg-primary shadow-[0_0_10px_rgba(34,211,238,.8)] animate-pulse-slow"
                                : "bg-white/10"
                          )}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <StageChip stage={stage} reduced={reduced} />
              </li>
            );
          })}
        </ul>

        <div className="grid grid-cols-2 divide-x divide-white/5 border-t border-white/5 bg-white/[0.02]">
          {["One setup fee", "One monthly retainer"].map((label) => (
            <p key={label} className="px-4 py-3.5 text-xs font-semibold text-primary sm:px-5 sm:text-sm">
              {label}
            </p>
          ))}
        </div>
      </div>
    </aside>
  );
}
