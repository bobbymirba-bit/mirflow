import Link from "next/link";

import { BookACall } from "@/components/book-a-call";
import { primaryNav, siteConfig } from "@/lib/site-config";

function Mark() {
  return (
    <span className="relative flex size-8 items-center justify-center rounded-lg bg-[linear-gradient(135deg,#22d3ee,#6366f1_60%,#a855f7)] shadow-[0_0_22px_-4px_rgba(34,211,238,.85)]">
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-white" aria-hidden="true">
        <path d="M4 15c2-4 4-9 8-9s6 5 8 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/25" />
    </span>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40">
      <div className="container-page pt-3">
        <div className="rounded-2xl border border-white/10 bg-background/75 shadow-[0_18px_50px_-28px_rgba(34,211,238,.45)] backdrop-blur-xl">
          <div className="grid grid-cols-[1fr_auto] items-center gap-x-3 px-3 py-2 md:grid-cols-[auto_1fr_auto] md:px-4">
            <Link href="/" className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-[-0.03em]">
              <Mark />
              {siteConfig.name}
            </Link>
            <nav aria-label="Main navigation" className="order-3 col-span-2 grid grid-cols-2 gap-x-2 gap-y-1 border-t border-white/10 py-2 text-sm text-muted-foreground md:order-0 md:col-span-1 md:flex md:justify-center md:gap-1 md:border-0 md:py-0">
              {primaryNav.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-full px-2 py-1 text-center hover:bg-white/[0.06] hover:text-foreground md:text-left">
                  {item.label}
                </Link>
              ))}
            </nav>
            <BookACall className="btn-primary justify-self-end px-3.5 py-2" showIcon={false} />
          </div>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5">
      <div aria-hidden className="hairline-gradient absolute inset-x-0 top-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 left-1/2 h-96 w-[70rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,.16),transparent)] blur-3xl"
      />
      <div className="container-page relative flex flex-col gap-6 pt-10 pb-24 text-sm text-muted-foreground sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-semibold text-foreground">{siteConfig.name}</p>
          <p className="mt-1 max-w-xs">Your all-in-one partner for websites, marketing, and AI.</p>
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
      <p aria-hidden className="pointer-events-none select-none text-center font-display text-[18vw] font-bold leading-[0.8] tracking-[-0.06em] text-white/[0.035]">
        MIRFLOW
      </p>
    </footer>
  );
}
