import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { QuoteForm } from "@/components/quote-form";

export const metadata: Metadata = {
  title: "Get a Custom Quote",
  description: "Tell Mirflow what you want to automate and receive a tailored implementation quote.",
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
            Tell us exactly what you need
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Share your current process, tools, volume, and goal. We&apos;ll map the right
            workflow and send a tailored scope and price.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-4xl"><QuoteForm initialInterest={initialInterest} /></div>
      </div>
    </section>
  );
}
