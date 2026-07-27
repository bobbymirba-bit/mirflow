import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mirflow. For scheduling, book a call directly — for anything else, send us a message and we'll reply within one business day.",
  openGraph: {
    title: `Contact | ${siteConfig.name}`,
    description: "Get in touch with Mirflow.",
  },
};

const contactDetails = [
  { icon: Mail, label: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}` },
  { icon: MapPin, label: siteConfig.address, href: undefined },
];

export default function ContactPage() {
  return (
    <section className="bg-grid bg-radial-glow noise-overlay relative overflow-hidden">
      <div className="container-page py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <Badge variant="brand">Contact</Badge>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Get in touch
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              Looking to book a call? That&apos;s the fastest way to talk to us.
              For anything else — partnerships, press, support — send a message below.
            </p>

            <Link
              href="/book-a-call"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              Book a call instead
              <ArrowRight className="h-4 w-4" />
            </Link>

            <div className="mt-10 flex flex-col gap-4">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <detail.icon className="h-4 w-4" />
                  </span>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="mt-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {detail.label}
                    </a>
                  ) : (
                    <p className="mt-1.5 text-sm text-muted-foreground">{detail.label}</p>
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-card p-8 lg:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
