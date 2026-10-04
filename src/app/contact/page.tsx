import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { contactInterests } from "@/data/contact";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Mirflow about a 1:1 session, the membership waitlist, a small-office package, or a free community talk.",
  path: "/contact",
});

const contactDetails = [
  { icon: Mail, label: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: siteConfig.phone, href: `tel:${siteConfig.phoneTel}` },
  { icon: MapPin, label: siteConfig.address, href: undefined },
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string }>;
}) {
  const { interest } = await searchParams;
  const initialInterest = contactInterests.some((option) => option.value === interest)
    ? interest
    : undefined;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        description={
          <p>
            We&apos;ll reply within one business day. Libraries, senior centers, and community
            groups can request a free talk here too. Prefer to talk it through?{" "}
            <Link href={siteConfig.bookingHref} className="font-medium text-foreground underline underline-offset-4">
              Book a 1:1 session
            </Link>
            .
          </p>
        }
      />

      <section aria-label="Contact form" className="border-b border-border">
        <div className="container-page grid gap-12 py-16 sm:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <h2 className="font-display text-2xl font-normal tracking-[-0.02em] text-foreground">
              Reach us directly
            </h2>
            <ul className="mt-6 flex flex-col gap-4">
              {contactDetails.map((detail) => (
                <li key={detail.label} className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-border bg-card text-primary">
                    <detail.icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="mt-2 text-sm text-foreground underline-offset-4 hover:underline"
                    >
                      {detail.label}
                    </a>
                  ) : (
                    <p className="mt-2 text-sm text-muted-foreground">{detail.label}</p>
                  )}
                </li>
              ))}
            </ul>
            <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
              Please don&apos;t include passwords, account numbers, or other sensitive details
              in this form. We will never ask for them.
            </p>
            <Link
              href={siteConfig.checklistHref}
              className="mt-6 inline-flex items-center gap-1.5 text-base font-semibold text-primary hover:underline hover:underline-offset-4"
            >
              Get the free scam checklist
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="border border-border bg-card p-6 sm:p-10">
            <ContactForm initialInterest={initialInterest} />
          </div>
        </div>
      </section>
    </>
  );
}
