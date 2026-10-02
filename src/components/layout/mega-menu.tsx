"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

import type { NavGroup } from "@/lib/site-config";
import { cn } from "@/lib/utils";

/** Dropdown triggers for grouped navigation. Rendered inside the primary <nav>. */
export function MegaMenu({ groups }: { groups: NavGroup[] }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const closeTimeout = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduceMotion = useReducedMotion();

  const open = (index: number) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenIndex(index);
  };

  const scheduleClose = () => {
    closeTimeout.current = setTimeout(() => setOpenIndex(null), 120);
  };

  React.useEffect(
    () => () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    },
    []
  );

  return (
    <>
      {groups.map((group, index) => {
        const isOpen = openIndex === index;
        const panelId = `nav-panel-${index}`;
        return (
          <div
            key={group.label}
            className="relative"
            onMouseEnter={() => open(index)}
            onMouseLeave={scheduleClose}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setOpenIndex(null);
              }
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape" && isOpen) {
                setOpenIndex(null);
                (event.currentTarget.querySelector("button") as HTMLButtonElement | null)?.focus();
              }
            }}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className={cn(
                "flex items-center gap-1 px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-foreground/80 transition-colors hover:text-primary",
                isOpen && "text-primary"
              )}
            >
              {group.label}
              <ChevronDown
                className={cn("h-3.5 w-3.5 transition-transform", isOpen && "rotate-180")}
                aria-hidden="true"
              />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  id={panelId}
                  initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 6 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute left-0 top-full z-50 mt-3 w-[min(560px,90vw)] border border-border bg-popover shadow-[0_24px_60px_-30px_rgba(14,22,33,0.45)]"
                >
                  {group.columns.map((col) => (
                    <div key={col.heading} className="p-3">
                      <p className="px-3 pb-2 pt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        {col.heading}
                      </p>
                      <ul className="grid gap-px sm:grid-cols-2">
                        {col.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={() => setOpenIndex(null)}
                              className="block px-3 py-3 transition-colors hover:bg-secondary focus-visible:bg-secondary"
                            >
                              <span className="block text-sm font-semibold text-foreground">
                                {item.label}
                              </span>
                              {item.description ? (
                                <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                                  {item.description}
                                </span>
                              ) : null}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {group.featured ? (
                    <Link
                      href={group.featured.href}
                      onClick={() => setOpenIndex(null)}
                      className="flex items-center justify-between gap-4 border-t border-border bg-secondary/60 px-6 py-4 text-sm text-foreground transition-colors hover:bg-secondary"
                    >
                      <span>
                        <span className="font-semibold">{group.featured.label}</span>{" "}
                        <span className="text-muted-foreground">{group.featured.description}</span>
                      </span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    </Link>
                  ) : null}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </>
  );
}
