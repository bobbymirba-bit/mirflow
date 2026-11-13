import { LeadForm } from "@/components/lead-form";
import { publicBookingUrl } from "@/lib/booking-url";
import { listPrice } from "@/lib/site-config";

export function LeadSection({
  id = "walkthrough",
  headingId = "contact-heading",
  source,
  heading,
  lede,
}: {
  id?: string;
  headingId?: string;
  source: string;
  heading: string;
  lede: string;
}) {
  const bookingUrl = publicBookingUrl(process.env.NEXT_PUBLIC_BOOKING_URL);

  return (
    <section id={id} aria-labelledby={headingId} className="scroll-mt-28 bg-secondary/40 md:scroll-mt-16">
      <div className="container-page grid gap-8 py-14 sm:py-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <div className="min-w-0">
          <h2 id={headingId} className="max-w-xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">{lede}</p>
          <p className="mt-4 font-semibold text-foreground">{listPrice.label}</p>
        </div>
        <div className="min-w-0 rounded-2xl border border-border bg-card p-5 shadow-sm shadow-blue-950/5 sm:p-6">
          <LeadForm source={source} bookingUrl={bookingUrl} />
        </div>
      </div>
    </section>
  );
}
