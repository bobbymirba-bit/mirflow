import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

import type { Solution } from "@/data/solutions";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

export function SolutionCard({ solution, className }: { solution: Solution; className?: string }) {
  return (
    <Link
      href={`/solutions/${solution.slug}`}
      className={cn(
        "group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon name={solution.icon} className="h-6 w-6" />
        </span>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
        {solution.name}
      </h3>
      <p className="mt-2 text-sm font-medium text-primary">{solution.tagline}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {solution.description}
      </p>
      <ul className="mt-5 space-y-2 border-t border-border pt-4">
        {solution.outcomes.slice(0, 3).map((outcome) => (
          <li key={outcome} className="flex items-start gap-2.5 text-sm text-foreground/90">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            {outcome}
          </li>
        ))}
      </ul>
    </Link>
  );
}
