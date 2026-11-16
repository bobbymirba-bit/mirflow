"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { flowStages } from "@/components/visuals/flow-content";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";
import { cn } from "@/lib/utils";

const log = flowStages.map((stage, index) => ({
  step: `0${index + 1}`,
  text: `${stage.title} — ${stage.detail}`,
}));

export function AutomationPipeline({ className }: { className?: string }) {
  const reduced = usePrefersReducedMotion();
  const [tick, setTick] = React.useState(0);

  React.useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setTick((t) => t + 1), 1800);
    return () => clearInterval(id);
  }, [reduced]);

  const active = reduced ? -1 : tick % flowStages.length;
  const cycle = log.length + 2;
  const shown = reduced ? log.length : Math.min(log.length, (tick % cycle) + 1);
  const visible = log.slice(0, shown);

  return (
    <div className={cn("card-glass overflow-hidden rounded-3xl", className)}>
      <div className="relative p-6 sm:p-8">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

        <div className="relative flex flex-col items-stretch gap-2 md:flex-row md:items-center">
          {flowStages.map((stage, i) => {
            const Icon = stage.icon;
            const isActive = i === active;
            const isDone = active >= 0 && i < active;
            return (
              <React.Fragment key={stage.title}>
                <div
                  className={cn(
                    "relative flex flex-1 items-center gap-4 rounded-2xl border p-4 md:flex-col md:items-start md:p-5",
                    isActive
                      ? "border-primary/50 bg-primary/[0.07] shadow-[0_0_40px_-12px_rgba(34,211,238,.7)]"
                      : isDone
                        ? "border-white/15 bg-white/[0.04]"
                        : "border-white/10 bg-white/[0.02]"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border",
                      isActive
                        ? "border-primary/40 bg-[linear-gradient(135deg,rgba(34,211,238,.35),rgba(99,102,241,.35))] text-white"
                        : "border-white/10 bg-white/[0.04] text-muted-foreground"
                    )}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">0{i + 1}</p>
                    <p className="mt-0.5 text-sm font-semibold">{stage.title}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{stage.detail}</p>
                  </div>
                  {isActive ? (
                    <span className="absolute right-3 top-3 flex h-1.5 w-1.5" aria-hidden>
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75 motion-reduce:hidden" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                    </span>
                  ) : null}
                </div>

                {i < flowStages.length - 1 ? (
                  <>
                    <div className="relative hidden h-px w-10 shrink-0 bg-white/10 md:block lg:w-14" aria-hidden>
                      <span
                        className="absolute -top-[2px] h-[5px] w-[5px] rounded-full bg-primary shadow-[0_0_12px_2px_rgba(34,211,238,.8)] animate-travel-x motion-reduce:hidden"
                        style={{ animationDelay: `${i * 0.7}s` }}
                      />
                    </div>
                    <div className="relative mx-auto h-7 w-px bg-white/10 md:hidden" aria-hidden>
                      <span
                        className="absolute -left-[2px] h-[5px] w-[5px] rounded-full bg-primary shadow-[0_0_12px_2px_rgba(34,211,238,.8)] animate-travel-y motion-reduce:hidden"
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
        <div className="flex items-center justify-between gap-3 px-6 py-2.5 sm:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">run log · illustrative</p>
          <p className="font-mono text-[10px] text-muted-foreground">Mirflow / Digital team</p>
        </div>
        <ul className="min-h-[6.5rem] space-y-1 px-6 pb-5 font-mono text-[12px] leading-relaxed sm:px-8">
          <AnimatePresence initial={false}>
            {visible.map((line) => (
              <motion.li
                key={line.step}
                layout={reduced ? false : true}
                initial={reduced ? false : { opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: reduced ? 0 : 0.3 }}
                className="reveal-motion grid grid-cols-[auto_1fr] gap-x-3"
              >
                <span className="text-primary">{line.step}</span>
                <span className="text-foreground/85">{line.text}</span>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
}
