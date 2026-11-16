"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Database, Inbox, ScanSearch, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const stages = [
  { icon: Inbox, label: "Intake", sub: "Email, portal, upload" },
  { icon: ScanSearch, label: "AI extraction", sub: "Fields, checks, matching" },
  { icon: ShieldCheck, label: "Human review", sub: "Exceptions only" },
  { icon: Database, label: "System of record", sub: "ERP, CRM, ledger" },
];

const log: { time: string; tag: string; text: string; tone: string }[] = [
  { time: "09:41:02", tag: "intake", text: "invoice_4821.pdf received via AP inbox", tone: "text-muted-foreground" },
  { time: "09:41:03", tag: "extract", text: "12 fields read · vendor matched · PO 7730 linked", tone: "text-primary" },
  { time: "09:41:03", tag: "check", text: "total differs from PO by 4.2% → flagged as exception", tone: "text-warning" },
  { time: "09:41:04", tag: "review", text: "routed to AP lead with side-by-side comparison", tone: "text-warning" },
  { time: "09:42:10", tag: "review", text: "approved with note · freight added after PO", tone: "text-success" },
  { time: "09:42:11", tag: "post", text: "bill created in QuickBooks · approval trail saved", tone: "text-success" },
  { time: "09:42:11", tag: "metric", text: "handling time and exception rate written to baseline", tone: "text-primary" },
];

export function AutomationPipeline({ className }: { className?: string }) {
  const [tick, setTick] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1800);
    return () => clearInterval(id);
  }, []);

  const active = tick % stages.length;
  const cycle = log.length + 2;
  const shown = Math.min(log.length, (tick % cycle) + 1);
  const visible = log.slice(0, shown).slice(-5);

  return (
    <div className={cn("card-glass overflow-hidden rounded-3xl", className)}>
      <div className="relative p-6 sm:p-8">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

        <div className="relative flex flex-col items-stretch gap-2 md:flex-row md:items-center">
          {stages.map((stage, i) => {
            const Icon = stage.icon;
            const isActive = i === active;
            const isDone = i < active;
            return (
              <React.Fragment key={stage.label}>
                <div
                  className={cn(
                    "relative flex flex-1 items-center gap-4 rounded-2xl border p-4 transition-all duration-500 md:flex-col md:items-start md:p-5",
                    isActive
                      ? "border-primary/50 bg-primary/[0.07] shadow-[0_0_40px_-12px_rgba(34,211,238,.7)]"
                      : isDone
                        ? "border-white/15 bg-white/[0.04]"
                        : "border-white/10 bg-white/[0.02]"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors duration-500",
                      isActive
                        ? "border-primary/40 bg-[linear-gradient(135deg,rgba(34,211,238,.35),rgba(99,102,241,.35))] text-white"
                        : "border-white/10 bg-white/[0.04] text-muted-foreground"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      0{i + 1}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold">{stage.label}</p>
                    <p className="mt-0.5 truncate text-xs text-muted-foreground">{stage.sub}</p>
                  </div>
                  {isActive ? (
                    <span className="absolute right-3 top-3 flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                    </span>
                  ) : null}
                </div>

                {i < stages.length - 1 ? (
                  <>
                    <div className="relative hidden h-px w-10 shrink-0 bg-white/10 md:block lg:w-14">
                      <span
                        className="absolute -top-[2px] h-[5px] w-[5px] rounded-full bg-primary shadow-[0_0_12px_2px_rgba(34,211,238,.8)] animate-travel-x"
                        style={{ animationDelay: `${i * 0.7}s` }}
                      />
                    </div>
                    <div className="relative mx-auto h-7 w-px bg-white/10 md:hidden">
                      <span
                        className="absolute -left-[2px] h-[5px] w-[5px] rounded-full bg-primary shadow-[0_0_12px_2px_rgba(34,211,238,.8)] animate-travel-y"
                        style={{ animationDelay: `${i * 0.7}s` }}
                      />
                    </div>
                  </>
                ) : null}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <div className="border-t border-white/5 bg-[#070910]/80">
        <div className="flex items-center justify-between px-6 py-2.5 sm:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            run log · illustrative
          </p>
          <p className="font-mono text-[10px] text-muted-foreground">workflow: ap-invoices</p>
        </div>
        <ul className="min-h-[9.5rem] space-y-1 px-6 pb-5 font-mono text-[12px] leading-relaxed sm:px-8">
          <AnimatePresence initial={false}>
            {visible.map((line) => (
              <motion.li
                key={`${line.time}-${line.tag}-${line.text}`}
                layout
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-[auto_auto_1fr] gap-x-3"
              >
                <span className="text-muted-foreground/70">{line.time}</span>
                <span className={cn("w-16", line.tone)}>{line.tag}</span>
                <span className="truncate text-foreground/85">{line.text}</span>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
}
