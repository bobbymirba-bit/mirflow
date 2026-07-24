"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

import type { NavGroup } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function MegaMenu({ groups }: { groups: NavGroup[] }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const closeTimeout = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = (index: number) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenIndex(index);
  };

  const scheduleClose = () => {
    closeTimeout.current = setTimeout(() => setOpenIndex(null), 120);
  };

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <nav
      className="hidden items-center gap-1 lg:flex"
      onMouseLeave={scheduleClose}
    >
      {groups.map((group, index) => (
        <div
          key={group.label}
          className="relative"
          onMouseEnter={() => open(index)}
          onFocus={() => open(index)}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setOpenIndex(null);
              (event.currentTarget.querySelector("button") as HTMLButtonElement | null)?.focus();
            }
          }}
        >
          <button
            type="button"
            aria-expanded={openIndex === index}
            aria-haspopup="true"
            aria-controls={`mega-menu-panel-${index}`}
            onClick={() => toggle(index)}
            className={cn(
              "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground",
              openIndex === index && "bg-accent text-foreground"
            )}
          >
            {group.label}
            <ChevronDown
              className={cn(
                "h-3.5 w-3.5 transition-transform",
                openIndex === index && "rotate-180"
              )}
            />
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                id={`mega-menu-panel-${index}`}
                role="menu"
                aria-label={group.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.16, ease: "easeOut" }}
                className="absolute left-1/2 top-full z-50 mt-2 w-[min(720px,90vw)] -translate-x-1/3 rounded-2xl border border-border bg-popover p-6 shadow-2xl"
                onMouseEnter={() => open(index)}
              >
                <div className="grid grid-cols-3 gap-6">
                  {group.columns.map((col) => (
                    <div key={col.heading}>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {col.heading}
                      </p>
                      <ul className="space-y-2.5">
                        {col.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="text-sm text-foreground/90 transition-colors hover:text-primary"
                              onClick={() => setOpenIndex(null)}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                {group.featured ? (
                  <Link
                    href={group.featured.href}
                    onClick={() => setOpenIndex(null)}
                    className="mt-6 flex items-center justify-between rounded-xl border border-border bg-secondary/60 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-accent"
                  >
                    <span>
                      {group.featured.label}
                      {group.featured.description ? (
                        <span className="ml-2 font-normal text-muted-foreground">
                          {group.featured.description}
                        </span>
                      ) : null}
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : null}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </nav>
  );
}
