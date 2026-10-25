import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="container-page flex h-14 items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center gap-2 font-semibold tracking-tight">
          <span aria-hidden className="inline-block h-6 w-6 rounded-md bg-primary" />
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-5 text-sm text-muted-foreground lg:flex">
          <Link href="/#platform" className="hover:text-foreground">
            Platform
          </Link>
          <Link href="/#example" className="hover:text-foreground">
            Example
          </Link>
          <Link href="/#how" className="hover:text-foreground">
            How it works
          </Link>
          <Link href="/#pricing" className="hover:text-foreground">
            Pricing
          </Link>
          <Link href="/#trust" className="hover:text-foreground">
            Trust
          </Link>
          <Link href="/#faq" className="hover:text-foreground">
            FAQ
          </Link>
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/#example"
            className="hidden rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary sm:inline-block"
          >
            Try example
          </Link>
          <Link
            href="/#demo"
            className="rounded-lg bg-primary px-3.5 py-2 text-sm font-semibold text-primary-foreground"
          >
            Get free demo
          </Link>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col gap-8 py-12 text-sm text-muted-foreground sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-semibold text-foreground">{siteConfig.name}</p>
          <p className="mt-1 max-w-xs">{siteConfig.tagline}</p>
          <p className="mt-3 max-w-xs text-xs">
            Support agents that answer only from your public help pages — cite sources, hand off when unsure.
          </p>
        </div>
        <div>
          <p className="font-medium text-foreground">Product</p>
          <ul className="mt-2 space-y-1.5">
            <li>
              <Link href="/#platform" className="hover:text-foreground">
                Platform
              </Link>
            </li>
            <li>
              <Link href="/#example" className="hover:text-foreground">
                Live example
              </Link>
            </li>
            <li>
              <Link href="/#pricing" className="hover:text-foreground">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/#trust" className="hover:text-foreground">
                Trust &amp; safety
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-foreground">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-foreground">Contact</p>
          <ul className="mt-2 space-y-1.5">
            <li>
              <a href={`tel:${siteConfig.phoneTel}`} className="hover:text-foreground">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                Instagram {siteConfig.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-foreground">Legal</p>
          <ul className="mt-2 space-y-1.5">
            <li>
              <Link href="/privacy" className="hover:text-foreground">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-foreground">
                Terms
              </Link>
            </li>
            <li>
              &copy; {new Date().getFullYear()} {siteConfig.legalName}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
