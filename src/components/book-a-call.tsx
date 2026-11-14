import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { bookingUrl } from "@/lib/booking";

/**
 * The site-wide "Book a call" CTA. One component so every primary CTA lands on
 * the same booking link, and so changing where bookings go is one edit.
 *
 * The booking URL is external, so this renders a plain anchor that opens in a
 * new tab. It falls back to a Next.js <Link> if the resolved URL is ever
 * relative, which keeps client-side navigation working for an internal
 * override.
 */
export function BookACall({
  label = "Book a call",
  className,
  showIcon = true,
}: {
  label?: string;
  className?: string;
  showIcon?: boolean;
}) {
  const content = (
    <>
      {label}
      {showIcon ? <ArrowRight size={16} aria-hidden="true" /> : null}
    </>
  );

  if (bookingUrl.startsWith("/")) {
    return (
      <Link href={bookingUrl} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={className}>
      {content}
    </a>
  );
}
