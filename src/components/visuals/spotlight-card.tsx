"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function SpotlightCard({
  children,
  className,
  contentClassName,
}: {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${event.clientX - rect.left}px`);
    el.style.setProperty("--y", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn(
        "spotlight group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition-colors duration-300 hover:border-white/20",
        className
      )}
    >
      <div className={cn("relative z-10 flex h-full flex-col", contentClassName)}>{children}</div>
    </div>
  );
}
