"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
import { primaryNav, secondaryNav, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border transition-colors duration-300",
        scrolled ? "bg-background/95 backdrop-blur-xl" : "bg-background"
      )}
    >
      <div className="container-page flex h-[72px] items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          <MegaMenu groups={primaryNav} />
          {secondaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={cn(
                "px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-foreground/80 transition-colors hover:text-primary",
                pathname === item.href && "text-primary"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="gradient" size="sm" className="hidden h-10 px-5 text-xs lg:inline-flex">
            <Link href={siteConfig.assessmentHref}>
              Book an AI Assessment
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-full flex-col overflow-y-auto sm:max-w-sm">
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>

              <nav aria-label="Mobile" className="mt-6 flex flex-1 flex-col gap-8">
                {primaryNav.map((group) => (
                  <div key={group.label}>
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {group.label}
                    </p>
                    <ul className="divide-y divide-border border-y border-border">
                      {group.columns.flatMap((col) => col.items).map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            aria-current={pathname === item.href ? "page" : undefined}
                            className="block py-3"
                          >
                            <span className="block font-display text-lg text-foreground">{item.label}</span>
                            {item.description ? (
                              <span className="block text-xs text-muted-foreground">{item.description}</span>
                            ) : null}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <ul className="space-y-1">
                  {secondaryNav.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        aria-current={pathname === item.href ? "page" : undefined}
                        className="block py-2 text-sm font-semibold uppercase tracking-[0.1em] text-foreground/85"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-6 border-t border-border pt-6">
                <Button asChild variant="gradient" className="w-full">
                  <Link href={siteConfig.assessmentHref} onClick={() => setMobileOpen(false)}>
                    Book an AI Assessment
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
