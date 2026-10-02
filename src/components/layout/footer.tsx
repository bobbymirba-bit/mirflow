import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Logo } from "@/components/logo";
import { siteConfig, footerNav } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-3">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
            <Link
              href={siteConfig.assessmentHref}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline hover:underline-offset-4"
            >
              Book an AI Assessment
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          {Object.entries(footerNav).map(([heading, items]) => (
            <nav key={heading} aria-label={heading}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground">
                {heading}
              </p>
              <ul className="mt-4 space-y-3">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <p className="max-w-4xl text-xs leading-relaxed text-muted-foreground">
            Mirflow provides AI strategy, technology, and operations services. We do not
            provide legal, tax, or accounting advice, and our services are not a substitute
            for review by qualified professionals.
          </p>
          <div className="mt-6 flex flex-col justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
            <p>
              © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
            </p>
            <p>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
                {siteConfig.email}
              </a>
              <span aria-hidden="true"> · </span>
              {siteConfig.address}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
