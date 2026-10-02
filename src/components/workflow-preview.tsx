import { Check, Clock3, CircleAlert, Lock, ScrollText } from "lucide-react";

import { cn } from "@/lib/utils";

type StepState = "done" | "review" | "pending";

const steps: { label: string; detail: string; state: StepState }[] = [
  { label: "Intake", detail: "Invoice received in the AP inbox", state: "done" },
  { label: "Extract", detail: "Vendor, PO, amounts, and line items captured", state: "done" },
  { label: "Policy check", detail: "Matched to PO and within approval limit", state: "done" },
  { label: "Tax review", detail: "Possible use-tax item flagged for a reviewer", state: "review" },
  { label: "Approval", detail: "Routed to the AP manager", state: "pending" },
  { label: "Post", detail: "ERP entry drafted, posts after approval", state: "pending" },
];

const stateStyles: Record<StepState, { icon: typeof Check; label: string; className: string }> = {
  done: { icon: Check, label: "Complete", className: "border-primary/30 bg-primary text-primary-foreground" },
  review: { icon: CircleAlert, label: "Needs human review", className: "border-warning/40 bg-warning/10 text-warning" },
  pending: { icon: Clock3, label: "Waiting", className: "border-border bg-card text-muted-foreground" },
};

/**
 * An illustrative, static example of a governed AI workflow, showing
 * automation, a tax flag, and human approval before anything is posted.
 */
export function WorkflowPreview() {
  return (
    <figure className="min-w-0 border border-border bg-card shadow-[0_24px_60px_-30px_rgba(14,22,33,0.35)]">
      <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4">
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Illustrative example
          </p>
          <p className="mt-1 text-sm font-semibold text-foreground">Vendor invoice workflow</p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 border border-border px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground/70">
          <span className="h-1.5 w-1.5 rounded-full bg-warning" aria-hidden="true" />
          Awaiting review
        </span>
      </div>

      <ol className="px-5 py-2">
        {steps.map((step, index) => {
          const style = stateStyles[step.state];
          const StateIcon = style.icon;
          return (
            <li key={step.label} className="relative flex gap-4 py-3">
              {index < steps.length - 1 ? (
                <span className="absolute left-[13px] top-10 h-[calc(100%-22px)] w-px bg-border" aria-hidden="true" />
              ) : null}
              <span
                className={cn(
                  "relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border",
                  style.className
                )}
              >
                <StateIcon className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="sr-only">{style.label}</span>
              </span>
              <div className="min-w-0 pt-0.5">
                <p className="text-sm font-semibold text-foreground">{step.label}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{step.detail}</p>
              </div>
            </li>
          );
        })}
      </ol>

      <figcaption className="grid grid-cols-2 border-t border-border text-[11px] text-muted-foreground">
        <span className="flex items-center gap-2 border-r border-border px-5 py-3">
          <ScrollText className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
          Every step logged
        </span>
        <span className="flex items-center gap-2 px-5 py-3">
          <Lock className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
          Role-based access
        </span>
      </figcaption>
    </figure>
  );
}
