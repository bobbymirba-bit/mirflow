import Link from "next/link";
import { ArrowRight, Home, Search } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="bg-grid bg-radial-glow noise-overlay relative flex min-h-[70vh] items-center overflow-hidden">
      <div className="container-page py-24 text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
          404
        </p>
        <h1 className="mx-auto mt-4 max-w-lg text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          This page doesn&apos;t exist
        </h1>
        <p className="mx-auto mt-4 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
          The page you&apos;re looking for may have moved or never existed.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="gradient" size="lg">
            <Link href="/">
              <Home className="h-4 w-4" />
              Back to home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/services">
              <Search className="h-4 w-4" />
              Browse services
            </Link>
          </Button>
        </div>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Or tell us what you were looking for
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
