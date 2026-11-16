"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Clock3, ScanSearch, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const stages = ["Queued", "Extracting", "Awaiting review", "Posted"] as const;
type Stage = (typeof stages)[number];

const runs = [
  { name: "Invoice · Vendor #4821", route: "AP inbox → QuickBooks", offset: 3 },
  { name: "Client intake · Onboarding", route: "Portal → Document checklist", offset: 2 },
  { name: "Weekly ops report", route: "Sheets + CRM → Draft summary", offset: 1 },
  { name: "Expense exceptions", route: "Card feed → Controller review", offset: 0 },
];

const stageStyle: Record<Stage, { icon: React.ComponentType<{ className?: string }>; className: string }> = {
  Queued: { icon: Clock3, className: "border-white/10 bg-white/[0.04] text-muted-foreground" },
  Extracting: { icon: ScanSearch, className: "border-primary/30 bg-primary/10 text-primary" },
  "Awaiting review": { icon: ShieldCheck, className: "border-warning/30 bg-warning/10 text-warning" },
  Posted: { icon: CheckCircle2, className: "border-success/30 bg-success/10 text-success" },
};

function StageChip({ stage }: { stage: Stage }) {
  const { icon: Icon, className } = stageStyle[stage];
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={stage}
        initial={{ opacity: 0, y: 6, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -6, scale: 0.96 }}
        transition={{ duration: 0.25 }}
        className={cn(
          "inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.14em]",
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
  const [tick, setTick] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1700);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={cn("card-glass relative overflow-hidden rounded-3xl p-1.5", className)}>
      <div className="relative overflow-hidden rounded-[1.25rem] border border-white/5 bg-[#070910]/95">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(34,211,238,.12),transparent)] animate-scan"
        />

        <div className="flex items-center justify-between gap-3 border-b border-white/5 px-5 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <p className="truncate font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            mirflow / ops console · illustrative
          </p>
          <span className="flex items-center gap-1.5 font-mono text-[10px] font-medium text-success">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
            </span>
            LIVE
          </span>
        </div>

        <ul className="divide-y divide-white/5">
          {runs.map((run) => {
            const index = (tick + run.offset) % stages.length;
            const stage = stages[index];
            return (
              <li key={run.name} className="grid gap-3 px-5 py-4 sm:grid-cols-[1fr_auto] sm:items-center">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{run.name}</p>
                  <p className="mt-0.5 truncate font-mono text-[11px] text-muted-foreground">{run.route}</p>
                  <div className="mt-3 flex gap-1">
                    {stages.map((s, j) => (
                      <span
                        key={s}
                        className={cn(
                          "h-1 flex-1 rounded-full transition-colors duration-500",
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
                <StageChip stage={stage} />
              </li>
            );
          })}
        </ul>

        <div className="grid grid-cols-3 divide-x divide-white/5 border-t border-white/5 bg-white/[0.02]">
          {[
            ["Exceptions", "2 flagged", "text-warning"],
            ["Approvals", "Human", "text-success"],
            ["Audit trail", "Saved", "text-primary"],
          ].map(([label, value, tone]) => (
            <div key={label} className="px-3 py-3.5 sm:px-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{label}</p>
              <p className={cn("mt-1 whitespace-nowrap text-xs font-semibold sm:text-sm", tone)}>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
