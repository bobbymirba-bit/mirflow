import { cn } from "@/lib/utils";

/** Static, numbered process list. Reads top-to-bottom on mobile, left-to-right on desktop. */
export function ProcessSteps({
  steps,
  className,
  tone = "light",
}: {
  steps: { title: string; description: string }[];
  className?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <ol
      className={cn(
        "grid gap-px border",
        dark ? "border-white/15 bg-white/15" : "border-border bg-border",
        steps.length === 5 ? "sm:grid-cols-2 lg:grid-cols-5" : "sm:grid-cols-2 lg:grid-cols-4",
        className
      )}
    >
      {steps.map((step, index) => (
        <li
          key={step.title}
          className={cn("flex flex-col p-6 sm:p-7", dark ? "bg-foreground" : "bg-background")}
        >
          <span
            className={cn(
              "font-mono text-xs",
              dark ? "text-signal" : "text-primary"
            )}
          >
            Step {String(index + 1).padStart(2, "0")}
          </span>
          <h3
            className={cn(
              "mt-8 font-display text-2xl font-normal tracking-[-0.02em]",
              dark ? "text-background" : "text-foreground"
            )}
          >
            {step.title}
          </h3>
          <p
            className={cn(
              "mt-3 text-sm leading-relaxed",
              dark ? "text-white/70" : "text-muted-foreground"
            )}
          >
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
