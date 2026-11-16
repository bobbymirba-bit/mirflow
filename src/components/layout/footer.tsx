import Link from "next/link";

import { Logo } from "@/components/logo";
import { siteConfig, footerNav } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-background">
      <div aria-hidden className="hairline-gradient absolute inset-x-0 top-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 left-1/2 h-96 w-[70rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,.16),transparent)] blur-3xl"
      />

      <div className="container-page relative py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
              </span>
              Taking new assessments
            </div>
          </div>

          {Object.entries(footerNav).map(([heading, items]) => (
            <div key={heading}>
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-foreground/80">{heading}</p>
              <ul className="mt-4 space-y-3">
                {items.map((item) => (
                  <li key={`${item.href}-${item.label}`}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            {siteConfig.address}
          </p>
        </div>
      </div>

      <p
        aria-hidden
        className="pointer-events-none select-none text-center font-display text-[22vw] font-bold leading-[0.8] tracking-[-0.06em] text-white/[0.025]"
      >
        MIRFLOW
      </p>
    </footer>
  );
}
