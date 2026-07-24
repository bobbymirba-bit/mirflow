import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}, explaining what data we collect, how it's used, and the choices you have.`,
};

const lastUpdated = "June 1, 2026";

export default function PrivacyPage() {
  return (
    <section className="border-b border-border">
      <div className="container-page py-16 sm:py-24">
        <Reveal className="mx-auto max-w-3xl">
          <Badge variant="brand">Legal</Badge>
          <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>

          <div className="prose-legal mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                1. Overview
              </h2>
              <p className="mt-3">
                {siteConfig.legalName} (&ldquo;Cadence,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
                or &ldquo;our&rdquo;) provides this Privacy Policy to explain what
                information we collect through {siteConfig.url}, why we collect it, and
                how it&apos;s used, shared, and protected.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                2. Information we collect
              </h2>
              <p className="mt-3">We collect information in three ways:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-foreground">Information you provide directly</strong>{" "}
                  — such as your name, email address, phone number, and company details
                  when you fill out a contact form, book a call, or otherwise
                  communicate with us.
                </li>
                <li>
                  <strong className="text-foreground">Information collected automatically</strong>{" "}
                  — such as IP address, browser type, device information, and pages
                  visited, collected via cookies and similar technologies.
                </li>
                <li>
                  <strong className="text-foreground">Information from third parties</strong>{" "}
                  — such as scheduling data from our booking provider when you reserve a
                  call.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                3. How we use information
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>To respond to inquiries and schedule calls</li>
                <li>To provide, maintain, and improve our services</li>
                <li>To send updates, but only if you&apos;ve opted in</li>
                <li>To monitor site performance and security</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                4. Sharing of information
              </h2>
              <p className="mt-3">
                We do not sell your personal information. We share information only with
                service providers who help us operate the site and deliver our services
                (such as scheduling, hosting, and analytics providers), each bound by
                confidentiality obligations, or when required by law.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                5. Cookies
              </h2>
              <p className="mt-3">
                We use cookies and similar technologies to remember preferences,
                understand site usage, and improve performance. You can control cookies
                through your browser settings or the cookie preferences banner on this
                site.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                6. Data retention and security
              </h2>
              <p className="mt-3">
                We retain personal information only as long as necessary for the
                purposes described here, and use reasonable administrative, technical,
                and physical safeguards to protect it. No method of transmission or
                storage is completely secure.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                7. Your choices
              </h2>
              <p className="mt-3">
                You may request access to, correction of, or deletion of your personal
                information at any time by emailing{" "}
                <a
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="text-primary hover:underline"
                >
                  {siteConfig.supportEmail}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                8. Changes to this policy
              </h2>
              <p className="mt-3">
                We may update this policy from time to time. Material changes will be
                reflected by updating the &ldquo;Last updated&rdquo; date above.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                9. Contact us
              </h2>
              <p className="mt-3">
                Questions about this policy can be sent to{" "}
                <a
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="text-primary hover:underline"
                >
                  {siteConfig.supportEmail}
                </a>{" "}
                or {siteConfig.address}.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
