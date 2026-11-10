import Link from "next/link";

import { primaryNav, siteConfig } from "@/lib/site-config";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="container-page grid min-h-14 grid-cols-[1fr_auto] items-center gap-x-3 pt-2 md:grid-cols-[1fr_auto_1fr] md:gap-x-8 md:pt-0">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span aria-hidden className="inline-block size-6 rounded-[0.5rem] bg-linear-to-br from-[#568dff] to-primary shadow-sm" />
          {siteConfig.name}
        </Link>
        <nav aria-label="Main navigation" className="order-3 col-span-2 flex items-center gap-5 border-t border-border/70 py-2 text-sm text-muted-foreground md:order-0 md:col-span-1 md:border-0 md:py-0">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/#walkthrough" className="justify-self-end rounded-lg bg-primary px-3.5 py-2 text-sm font-semibold text-primary-foreground">
          Talk to Bobby
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col gap-6 pt-10 pb-24 text-sm text-muted-foreground sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-semibold text-foreground">{siteConfig.name}</p>
          <p className="mt-1 max-w-xs">Your all-in-one team for websites, marketing, and AI.</p>
        </div>
        <ul className="space-y-1.5">
          {primaryNav.map((item) => (
            <li key={item.href}><Link href={item.href} className="hover:text-foreground">{item.label}</Link></li>
          ))}
        </ul>
        <ul className="space-y-1.5">
          <li><a href={`tel:${siteConfig.phoneTel}`} className="hover:text-foreground">Direct line {siteConfig.phone}</a></li>
          <li><a href={`tel:${siteConfig.voiceAgentTel}`} className="font-medium text-primary hover:underline">AI voice agent {siteConfig.voiceAgentPhone}</a></li>
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
