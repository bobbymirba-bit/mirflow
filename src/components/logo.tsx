import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-3 font-display text-xl font-normal tracking-[-0.03em] text-foreground",
        className
      )}
    >
      <span className="relative flex h-8 w-8 items-center justify-center bg-foreground">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-4 w-4 text-white"
          aria-hidden="true"
        >
          <path
            d="M4 15c2-4 4-9 8-9s6 5 8 9"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      Mirflow
    </Link>
  );
}
