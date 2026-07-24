import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-foreground",
        className
      )}
    >
      <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-indigo via-brand-violet to-brand-blue shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
        <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 to-transparent" />
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-4 w-4 text-white"
          aria-hidden="true"
        >
          <path
            d="M4 15c2-4 4-9 8-9s6 5 8 9"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      Cadence
    </Link>
  );
}
