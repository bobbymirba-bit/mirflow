import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CheckoutSuccessPage() {
  return (
    <section className="container-page flex min-h-[70vh] items-center justify-center py-20">
      <div className="max-w-xl text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-success" />
        <h1 className="mt-6 font-display text-4xl font-semibold">Welcome to Mirflow</h1>
        <p className="mt-4 text-lg text-muted-foreground">Your subscription is active. We&apos;ll email your onboarding questionnaire and kickoff details shortly.</p>
        <Button asChild className="mt-8"><Link href="/">Return home</Link></Button>
      </div>
    </section>
  );
}
