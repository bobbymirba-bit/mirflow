/**
 * Booking link handling.
 *
 * The Calendly URL is configuration, not code: no working Calendly link
 * survives in Git history (every URL found there now 404s), so the site ships
 * with booking "unconfigured" and degrades to the inquiry form until
 * NEXT_PUBLIC_CALENDLY_URL is set.
 *
 * `publicBookingUrl` is recovered verbatim in spirit from
 * src/lib/booking-url.ts on origin/cursor/lead-form-one-price-d6d0 (7ff0780):
 * anything that is not a clean https URL hides the booking UI rather than
 * rendering a dead or hostile link.
 */

/** https booking links only. Anything else disables the booking UI. */
export function publicBookingUrl(value: string | undefined | null): string | null {
  if (!value?.trim()) return null;
  try {
    const url = new URL(value.trim());
    if (url.protocol !== "https:") return null;
    if (url.username || url.password) return null;
    return url.toString();
  } catch {
    return null;
  }
}

/** Only Calendly URLs can be embedded; anything else is shown as a plain link. */
export function isCalendlyUrl(value: string | null): boolean {
  if (!value) return false;
  try {
    const { hostname } = new URL(value);
    return hostname === "calendly.com" || hostname.endsWith(".calendly.com");
  } catch {
    return false;
  }
}

/** Where "Book a call" points when no booking URL is configured. */
export const INQUIRY_FALLBACK_HREF = "/#walkthrough";

export const bookingUrl = publicBookingUrl(process.env.NEXT_PUBLIC_CALENDLY_URL);
