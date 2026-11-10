import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Headphones } from "lucide-react";

import { FrontDeskDemos } from "@/components/front-desk-demos";

const title = "AI Voice Receptionist";
const description = "Hear Mirflow’s Grok-powered voice receptionist and see how it answers calls, handles routine questions, and routes callbacks.";

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
      <section className="border-b border-border bg-[radial-gradient(ellipse_at_85%_10%,#edd9d0,transparent_65%)]">
        <div className="container-page py-14 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Mirflow AI Receptionist</p>
          <h1 className="mt-3 max-w-3xl text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl">Give callers a next step when you can’t pick up</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            We set up a voice receptionist around your business hours, services, and routing rules. It can answer routine questions
            and send booking requests or callback details to your team.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-5">
            <Link href="/ai-receptionist#demos" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
              <Headphones size={17} aria-hidden="true" /> Hear a real call
            </Link>
            <Link href="/#walkthrough" className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline underline-offset-4">
              Talk to Bobby <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <FrontDeskDemos />
    </>
  );
}
