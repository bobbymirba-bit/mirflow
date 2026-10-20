import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">404</p>
      <h1 className="mt-3 font-display text-4xl font-semibold">This page doesn&apos;t exist</h1>
      <Link href="/" className="mt-8 rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground">Back to home</Link>
    </section>
  );
}
