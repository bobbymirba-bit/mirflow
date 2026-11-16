import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${siteConfig.name}, covering use of our website and services.`,
};

const lastUpdated = "June 1, 2026";

export default function TermsPage() {
  return (
    <section className="border-b border-border">
      <div className="container-page py-16 sm:py-24">
        <Reveal className="mx-auto max-w-3xl">
          <Badge variant="brand">Legal</Badge>
          <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                1. Agreement to terms
              </h2>
              <p className="mt-3">
                These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and
                use of {siteConfig.url} and any related services (collectively, the
                &ldquo;Service&rdquo;) operated by {siteConfig.legalName}. By accessing
                the Service, you agree to be bound by these Terms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                2. Description of service
              </h2>
              <p className="mt-3">
                Mirflow designs, builds, and operates AI automation systems for
                businesses, including voice AI, chat automation, workflow automation,
                and related services described on this site. Specific engagements are
                governed by a separate service agreement entered into with each client.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                3. Use of the website
              </h2>
              <p className="mt-3">
                You agree not to misuse the Service, including by attempting to access
                it using a method other than the interface we provide, interfering with
                its normal operation, or using it for any unlawful purpose. Content on
                this site — including case studies, examples, and figures — is provided
                for illustrative purposes and does not constitute a guarantee of
                specific results.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                4. Intellectual property
              </h2>
              <p className="mt-3">
                All content on this site, including text, graphics, logos, and
                software, is the property of {siteConfig.legalName} or its licensors and
                is protected by applicable intellectual property laws. You may not
                reproduce, distribute, or create derivative works without prior written
                consent.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                5. Third-party links and services
              </h2>
              <p className="mt-3">
                The Service may link to or integrate with third-party tools (such as our
                scheduling provider). We are not responsible for the content, policies,
                or practices of third-party services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                6. Disclaimer of warranties
              </h2>
              <p className="mt-3">
                The Service is provided &ldquo;as is&rdquo; without warranties of any
                kind, express or implied. We do not warrant that the Service will be
                uninterrupted, error-free, or that any specific business outcome will be
                achieved.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                7. Limitation of liability
              </h2>
              <p className="mt-3">
                To the fullest extent permitted by law, {siteConfig.legalName} shall not
                be liable for any indirect, incidental, special, or consequential
                damages arising from your use of the Service.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                8. Changes to these terms
              </h2>
              <p className="mt-3">
                We may revise these Terms from time to time. Continued use of the
                Service after changes take effect constitutes acceptance of the revised
                Terms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                9. Contact us
              </h2>
              <p className="mt-3">
                Questions about these Terms can be sent to{" "}
                <a
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="text-primary hover:underline"
                >
                  {siteConfig.supportEmail}
                </a>
                .
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
