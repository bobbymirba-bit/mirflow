import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${siteConfig.name}, covering use of our website and services.`,
};

const lastUpdated = "October 20, 2026";

export default function TermsPage() {
  return (
    <section className="border-b border-border">
      <div className="container-page py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Legal</p>
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
                Mirflow builds AI support agents that answer questions from a
                company&apos;s own public help pages, including free demo agents and the
                Launch and Care services described on this site. The example agent on
                this site answers only from Mirflow&apos;s own FAQ and is provided for
                demonstration. Specific engagements are
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
                this site — including the example agent and its answers — is provided
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
                The Service may link to or integrate with third-party tools (such as hosting or
                email providers). We are not responsible for the content, policies,
                or practices of third-party services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                6. Text messaging terms
              </h2>
              <p className="mt-3">
                Mirflow operates a text messaging program under the name Mirflow.
                When you agree during a recorded phone call with our team or our
                AI assistant to receive text messages from us, we send messages
                from our business number, +1 (949) 328-5051, related to that
                conversation, such as a link to a product demo you asked for and
                one-to-one follow-up messages in the same thread about our AI
                support agent service. The exact consent script our assistant
                reads on the call is published at{" "}
                <a href="/sms-consent" className="text-primary hover:underline">
                  mirflow.online/sms-consent
                </a>
                .
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Message frequency varies.</li>
                <li>Message and data rates may apply.</li>
                <li>
                  <strong className="text-foreground">
                    Reply STOP to opt out at any time. Reply HELP for help.
                  </strong>
                </li>
                <li>
                  For support, email{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-primary hover:underline"
                  >
                    {siteConfig.email}
                  </a>{" "}
                  or call +1 (949) 328-5051.
                </li>
                <li>
                  Consent to receive text messages is not a condition of
                  purchasing any goods or services.
                </li>
                <li>Carriers are not liable for delayed or undelivered messages.</li>
                <li>
                  Our{" "}
                  <a href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </a>{" "}
                  explains how we handle your mobile number and messaging data,
                  including that we do not share mobile opt-in data or consent
                  with third parties or affiliates for marketing or promotional
                  purposes.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                7. Disclaimer of warranties
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
                8. Limitation of liability
              </h2>
              <p className="mt-3">
                To the fullest extent permitted by law, {siteConfig.legalName} shall not
                be liable for any indirect, incidental, special, or consequential
                damages arising from your use of the Service.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                9. Changes to these terms
              </h2>
              <p className="mt-3">
                We may revise these Terms from time to time. Continued use of the
                Service after changes take effect constitutes acceptance of the revised
                Terms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                10. Contact us
              </h2>
              <p className="mt-3">
                Questions about these Terms can be sent to{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-primary hover:underline"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
