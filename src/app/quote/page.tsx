import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { QuoteForm } from "@/components/quote-form";

export const metadata: Metadata = {
  title: "AI Readiness & Risk Review",
  description: "Tell Mirflow where work is slow, repetitive, or risky. We will help you choose the right first move.",
};

export default async function QuotePage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string; solution?: string; industry?: string }>;
}) {
  const params = await searchParams;
  const initialInterest =
    params.service ? `Service: ${params.service}` :
    params.solution ? `Solution: ${params.solution}` :
    params.industry ? `Industry: ${params.industry}` : "";
  return (
    <section className="bg-grid bg-radial-glow min-h-screen">
      <div className="container-page py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="brand">Custom quote</Badge>
          <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Find the first workflow worth building
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Share your current process, tools, team, and concern. We&apos;ll look at what to
            build, what to buy, what to govern, and what to leave alone.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-4xl"><QuoteForm initialInterest={initialInterest} /></div>
      </div>
    </section>
  );
}
