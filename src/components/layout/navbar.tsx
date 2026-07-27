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
import { primaryNav, secondaryNav } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const mobileHome = pathname === "/";
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        mobileHome && "max-sm:border-white/8 max-sm:bg-[#06070a] max-sm:text-white",
        scrolled
          ? cn("border-b border-border bg-background/95 backdrop-blur-xl", mobileHome && "max-sm:bg-[#06070a]/95")
          : "border-b border-border bg-background"
      )}
    >
      <div className="container-page flex h-[76px] items-center justify-between">
        <Logo className={cn(mobileHome && "max-sm:text-white [&>span]:max-sm:bg-white [&_svg]:max-sm:text-black")} />

        <MegaMenu groups={primaryNav} />

        <div className="hidden items-center gap-1 lg:flex">
          {secondaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-foreground/75 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button asChild variant="gradient" size="default" className="hidden lg:inline-flex">
            <Link href="/quote">
              Get a quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn("lg:hidden", mobileHome && "max-sm:text-white max-sm:hover:bg-white/10")} aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-full flex-col overflow-y-auto sm:max-w-sm">
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-1 flex-col gap-6">
                {primaryNav.map((group) => (
                  <div key={group.label}>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {group.label}
                    </p>
                    <ul className="space-y-2">
                      {group.columns.flatMap((col) => col.items).map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-lg px-2 py-1.5 text-sm text-foreground/90 hover:bg-accent"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    More
                  </p>
                  <ul className="space-y-2">
                    {secondaryNav.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-lg px-2 py-1.5 text-sm text-foreground/90 hover:bg-accent"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end border-t border-border pt-6">
                <Button asChild variant="gradient">
                  <Link href="/quote" onClick={() => setMobileOpen(false)}>
                    Get a quote
                    <ArrowRight className="h-4 w-4" />
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
