import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="container-page flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span aria-hidden className="inline-block h-6 w-6 rounded-md bg-primary" />
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <Link href="/#example" className="hover:text-foreground">Example agent</Link>
          <Link href="/#how" className="hover:text-foreground">How it works</Link>
          <Link href="/#pricing" className="hover:text-foreground">Pricing</Link>
          <Link href="/#safety" className="hover:text-foreground">Safety</Link>
          <Link href="/#faq" className="hover:text-foreground">FAQ</Link>
        </nav>
        <Link href="/#demo" className="rounded-lg bg-primary px-3.5 py-2 text-sm font-semibold text-primary-foreground">Free demo</Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col gap-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-semibold text-foreground">{siteConfig.name}</p>
          <p className="mt-1 max-w-xs">AI support agents that answer only from your own help pages.</p>
        </div>
        <ul className="space-y-1.5">
          <li><a href={`tel:${siteConfig.phoneTel}`} className="hover:text-foreground">{siteConfig.phone}</a></li>
          <li><a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">{siteConfig.email}</a></li>
          <li><a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Instagram {siteConfig.instagramHandle}</a></li>
        </ul>
        <ul className="space-y-1.5">
          <li><Link href="/privacy" className="hover:text-foreground">Privacy</Link></li>
          <li><Link href="/terms" className="hover:text-foreground">Terms</Link></li>
          <li>&copy; {new Date().getFullYear()} {siteConfig.legalName}</li>
        </ul>
      </div>
    </footer>
  );
}
