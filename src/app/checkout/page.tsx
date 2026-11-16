import { notFound } from "next/navigation";
import { Check, LockKeyhole } from "lucide-react";
import { CheckoutButton } from "@/components/checkout-button";
import { pricingTiers } from "@/data/pricing";

export default async function CheckoutPage({ searchParams }: { searchParams: Promise<{ plan?: string }> }) {
  const { plan } = await searchParams;
  const tier = pricingTiers.find((item) => item.id === plan && item.id !== "enterprise");
  if (!tier) notFound();

  return (
    <section className="bg-grid bg-radial-glow min-h-screen">
      <div className="container-page py-16 sm:py-24">
        <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-card p-7 shadow-2xl sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Mirflow {tier.name}</p>
          <h1 className="mt-4 font-display text-4xl font-semibold">{tier.price}<span className="text-lg text-muted-foreground">{tier.priceSuffix}</span></h1>
          <p className="mt-2 font-medium text-muted-foreground">{tier.setupFee}</p>
          <p className="mt-5 text-muted-foreground">{tier.description}</p>
          <ul className="my-8 space-y-3">{tier.features.map((feature) => <li key={feature} className="flex gap-3 text-sm"><Check className="h-5 w-5 shrink-0 text-primary" />{feature}</li>)}</ul>
          <CheckoutButton plan={tier.id} />
          <p className="mt-5 flex items-center justify-center gap-2 text-xs text-muted-foreground"><LockKeyhole className="h-3.5 w-3.5" />Payments are processed securely by Stripe.</p>
        </div>
      </div>
    </section>
  );
}
