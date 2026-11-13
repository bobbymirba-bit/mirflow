/**
 * Booking link handling.
 *
 * DEFAULT_BOOKING_URL is the one Calendly link that has been checked and
 * responds (HTTP 200, "30 Minute Meeting - bobby mir"). Every URL found in Git
 * history 404s, so those are gone. Bobby should still confirm this is the event
 * he wants bookings to land on; until then it is the site-wide default so
 * "Book a call" goes somewhere that works instead of to a form.
 *
 * NEXT_PUBLIC_CALENDLY_URL overrides it without a deploy. An override that
 * isn't a clean https URL is ignored in favour of the default, rather than
 * rendering a dead or hostile link — the behaviour recovered from
 * src/lib/booking-url.ts on origin/cursor/lead-form-one-price-d6d0 (7ff0780).
 */

export const DEFAULT_BOOKING_URL = "https://calendly.com/bobbymirba/30min";

/** https booking links only. Anything else is rejected. */
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

/** The inquiry form. Kept as the secondary path, never as "Book a call". */
export const INQUIRY_HREF = "/#walkthrough";

export const bookingUrl =
  publicBookingUrl(process.env.NEXT_PUBLIC_CALENDLY_URL) ?? DEFAULT_BOOKING_URL;
