import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 font-display text-lg font-semibold tracking-[-0.03em] text-foreground",
        className
      )}
    >
      <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-[linear-gradient(135deg,#22d3ee,#6366f1_60%,#a855f7)] shadow-[0_0_22px_-4px_rgba(34,211,238,.85)] transition-shadow duration-300 group-hover:shadow-[0_0_28px_-2px_rgba(34,211,238,.95)]">
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-white" aria-hidden="true">
          <path
            d="M4 15c2-4 4-9 8-9s6 5 8 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/25" />
      </span>
      <span className="flex items-baseline gap-1">
        Mirflow
        <span className="font-mono text-[9px] font-medium tracking-[0.2em] text-primary">AI</span>
      </span>
    </Link>
  );
}
