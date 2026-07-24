import { Check, Minus, X } from "lucide-react";

import type { ComparisonRow } from "@/data/pricing";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

function Cell({ value, emphasize }: { value: string | boolean; emphasize?: boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className={cn("h-4 w-4", emphasize ? "text-primary" : "text-success")} />
    ) : (
      <X className="h-4 w-4 text-muted-foreground/50" />
    );
  }
  return (
    <span
      className={cn(
        "text-sm",
        emphasize ? "font-medium text-foreground" : "text-muted-foreground"
      )}
    >
      {value}
    </span>
  );
}

export function ComparisonTable({ rows }: { rows: ComparisonRow[] }) {
  return (
    <Reveal className="overflow-x-auto rounded-2xl border border-border">
      <table className="w-full min-w-[640px] border-collapse text-left">
        <thead>
          <tr className="border-b border-border bg-secondary/40">
            <th className="px-6 py-4 text-sm font-medium text-muted-foreground">
              <Minus className="h-0 w-0 opacity-0" />
              Capability
            </th>
            <th className="px-6 py-4 font-display text-sm font-semibold text-primary">
              Cadence
            </th>
            <th className="px-6 py-4 text-sm font-medium text-muted-foreground">
              Hiring in-house
            </th>
            <th className="px-6 py-4 text-sm font-medium text-muted-foreground">
              Point solutions
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.feature} className="border-b border-border last:border-0">
              <td className="px-6 py-4 text-sm font-medium text-foreground">{row.feature}</td>
              <td className="px-6 py-4">
                <Cell value={row.cadence} emphasize />
              </td>
              <td className="px-6 py-4">
                <Cell value={row.hiring} />
              </td>
              <td className="px-6 py-4">
                <Cell value={row.pointSolutions} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Reveal>
  );
}
