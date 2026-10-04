import Link from "next/link";

import { Logo } from "@/components/logo";
import { siteConfig, footerNav } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background print:hidden">
      <div className="container-page py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-3">
            <Logo />
            <p className="mt-2 text-sm font-semibold text-foreground">{siteConfig.tagline}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          {Object.entries(footerNav).map(([heading, items]) => (
            <nav key={heading} aria-label={heading}>
              <p className="text-sm font-semibold text-foreground">{heading}</p>
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

        <div className="mt-14 border border-border bg-card p-5 text-sm leading-relaxed text-foreground/80">
          <p className="font-semibold text-foreground">Think you&apos;ve been scammed?</p>
          <p className="mt-1">
            Call your bank or card company first, using the number on the back of your card.
            Then report it to the FTC at{" "}
            <a href="https://reportfraud.ftc.gov" className="underline underline-offset-4" rel="noopener noreferrer" target="_blank">
              ReportFraud.ftc.gov
            </a>{" "}
            and to the FBI at{" "}
            <a href="https://www.ic3.gov" className="underline underline-offset-4" rel="noopener noreferrer" target="_blank">
              ic3.gov
            </a>
            . Mirflow isn&apos;t a law enforcement agency or a bank and can&apos;t recover lost money.
          </p>
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <p className="max-w-4xl text-xs leading-relaxed text-muted-foreground">
            Mirflow provides general education and personal setup help. We don&apos;t provide
            legal, financial, or investment advice. We will never ask for your passwords or
            payment details, and we never take remote control of your devices.
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
