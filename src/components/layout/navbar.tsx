"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/logo";
import { MegaMenu } from "@/components/layout/mega-menu";
import { primaryNav, secondaryNav } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className={cn("container-page transition-[padding] duration-300", scrolled ? "pt-3" : "pt-0")}>
        <div
          className={cn(
            "flex h-[68px] items-center justify-between rounded-2xl border px-3 transition-all duration-300 sm:px-4",
            scrolled
              ? "border-white/10 bg-background/70 shadow-[0_18px_50px_-24px_rgba(34,211,238,.45)] backdrop-blur-xl"
              : "border-transparent bg-transparent"
          )}
        >
          <Logo />

          <MegaMenu groups={primaryNav} />

          <div className="hidden items-center gap-0.5 xl:flex">
            {secondaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-white/[0.06] hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button asChild variant="gradient" size="default" className="hidden lg:inline-flex">
              <Link href="/#audit">
                Get your free digital audit
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="flex w-full flex-col overflow-y-auto border-white/10 bg-background/95 backdrop-blur-xl sm:max-w-sm">
                <SheetHeader>
                  <SheetTitle>
                    <Logo />
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-6 flex flex-1 flex-col gap-6">
                  {primaryNav.map((group) => (
                    <div key={group.label}>
                      <p className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                        {group.label}
                      </p>
                      <ul className="space-y-1">
                        {group.columns.flatMap((col) => col.items).map((item) => (
                          <li key={`${item.href}-${item.label}`}>
                            <Link
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="block rounded-lg px-2 py-1.5 text-sm text-foreground/90 hover:bg-white/[0.06]"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <div>
                    <p className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      More
                    </p>
                    <ul className="space-y-1">
                      {secondaryNav.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-lg px-2 py-1.5 text-sm text-foreground/90 hover:bg-white/[0.06]"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-end border-t border-white/10 pt-6">
                  <Button asChild variant="gradient">
                    <Link href="/#audit" onClick={() => setMobileOpen(false)}>
                      Get your free digital audit
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
