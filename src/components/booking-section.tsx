import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

import { CalendlyEmbed } from "@/components/calendly-embed";
import { INQUIRY_FALLBACK_HREF, bookingUrl, isCalendlyUrl } from "@/lib/booking";
import { siteConfig } from "@/lib/site-config";

const primaryButton =
  "inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110";

/**
 * Booking block used at the bottom of /pricing.
 *
 * With NEXT_PUBLIC_CALENDLY_URL set we embed the scheduler *and* keep a direct
 * link visible, so booking still works if the embed is blocked by a content
 * blocker or fails to load. With it unset we never render a guessed link —
 * visitors get the inquiry form and Bobby's real phone and email instead.
 */
export function BookingSection() {
  const canEmbed = isCalendlyUrl(bookingUrl);

  return (
    <section id="book" aria-labelledby="book-heading" className="scroll-mt-28 border-t border-border bg-secondary/40 md:scroll-mt-16">
      <div className="container-page py-14 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Book a call</p>
        <h2 id="book-heading" className="mt-3 max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Talk through the scope before you pay for anything
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          We&rsquo;ll go over what you already have, which channels you want managed, and what the setup and monthly
          work would actually cover. You get a written scope and price before any work or payment starts.
        </p>

        {bookingUrl ? (
          <>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={primaryButton}>
                <CalendarDays size={17} aria-hidden="true" /> Pick a time
              </a>
              <a href={`tel:${siteConfig.phoneTel}`} className="text-sm font-semibold text-primary underline underline-offset-4">
                Or call {siteConfig.phone}
              </a>
            </div>
            {canEmbed ? <CalendlyEmbed url={bookingUrl} /> : null}
          </>
        ) : (
          <div className="mt-6 rounded-2xl border border-border bg-card p-5 shadow-sm shadow-blue-950/5 sm:p-6">
            <p className="text-sm font-semibold">Online scheduling isn&rsquo;t connected yet</p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Send us the details and we&rsquo;ll come back with times, or call and we&rsquo;ll book it on the spot.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
              <Link href={INQUIRY_FALLBACK_HREF} className={primaryButton}>
                Request a call <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <a href={`tel:${siteConfig.phoneTel}`} className="text-sm font-semibold text-primary underline underline-offset-4">
                Call {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="text-sm font-semibold text-primary underline underline-offset-4">
                {siteConfig.email}
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
