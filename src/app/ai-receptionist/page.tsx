import type { Metadata } from "next";
import Link from "next/link";
import { Headphones, PhoneCall } from "lucide-react";

import { BookACall } from "@/components/book-a-call";
import { FrontDeskDemos } from "@/components/front-desk-demos";
import { frontDeskOffer, siteConfig } from "@/lib/site-config";

const title = "AI Receptionist for Small Businesses";
const description = "Mirflow sets up and manages an AI voice receptionist to answer calls, handle routine questions, and route booking requests and callbacks. Hear the live demo.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/ai-receptionist" },
  openGraph: { title, description, url: "/ai-receptionist" },
  twitter: { title, description },
};

export default function ReceptionistPage() {
  return (
    <>
      <section className="border-b border-border blue-hero">
        <div className="container-page py-14 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Mirflow AI Front Desk</p>
          <h1 className="mt-3 max-w-3xl text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl">Give callers a next step when you can’t pick up</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            We set up a voice receptionist around your business hours, services, and routing rules. It can answer routine questions
            and send booking requests or callback details to your team.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{frontDeskOffer.refund}</p>
          <Link href="/pricing" className="mt-2 inline-block text-sm text-primary underline underline-offset-4">See what the all-in-one package covers</Link>
          <div className="mt-6 flex flex-wrap items-center gap-5">
            <a href={`tel:${siteConfig.voiceAgentTel}`} className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110">
              <PhoneCall size={17} aria-hidden="true" /> Call the AI voice agent {siteConfig.voiceAgentPhone}
            </a>
            <Link href="/ai-receptionist#demos" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-primary hover:border-primary">
              <Headphones size={17} aria-hidden="true" /> Hear a real call
            </Link>
            <BookACall className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline underline-offset-4" />
          </div>
        </div>
      </section>
      <FrontDeskDemos />
    </>
  );
}
