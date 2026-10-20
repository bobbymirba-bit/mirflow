import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}, explaining what data we collect, how it's used, and the choices you have.`,
};

const lastUpdated = "October 19, 2026";

export default function PrivacyPage() {
  return (
    <section className="border-b border-border">
      <div className="container-page py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Legal</p>
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
                {siteConfig.legalName} (&ldquo;Mirflow,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
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
                  when you request a demo agent (your help-center URL, work email, and
                  optional company name), use the hand-off form, or otherwise communicate
                  with us.
                </li>
                <li>
                  <strong className="text-foreground">Information collected automatically</strong>{" "}
                  — such as IP address, browser type, device information, and pages
                  visited, collected via cookies and similar technologies.
                </li>
                <li>
                  <strong className="text-foreground">Public pages you point us to</strong>{" "}
                  — when you request a demo agent, we read the public help-center or FAQ
                  pages at the URL you give us, respecting robots.txt. We do not need
                  logins or customer data to build a demo.
                </li>
                <li>
                  <strong className="text-foreground">The example agent</strong>{" "}
                  — questions typed into the example agent on our homepage are matched
                  in your browser against our FAQ and are not sent to us unless you
                  submit the hand-off form.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                3. How we use information
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>To respond to inquiries and build the demo agent you requested</li>
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
                (such as hosting and email delivery providers), each bound by
                confidentiality obligations, or when required by law.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                5. Text messaging
              </h2>
              <p className="mt-3">
                If you give us your mobile number and agree to receive text messages
                from us, for example during a phone call with our team or our AI
                assistant, we will send you text messages related to that
                conversation, such as a link to a product demo you asked for and
                follow-up messages in the same thread. Message frequency varies.
                Message and data rates may apply. You can opt out at any time by
                replying STOP, and get help by replying HELP or emailing us.
              </p>
              <p className="mt-3">
                We do not share, sell, rent, or disclose your mobile phone number,
                text messaging opt-in data, or consent status to third parties or
                affiliates for their marketing or promotional purposes.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                6. Cookies
              </h2>
              <p className="mt-3">
                This site does not set advertising or analytics cookies. Our hosting
                provider may use strictly necessary technologies to deliver and secure
                the site. You can control cookies through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                7. Data retention and security
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
                8. Your choices
              </h2>
              <p className="mt-3">
                You may request access to, correction of, or deletion of your personal
                information at any time by emailing{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-primary hover:underline"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                9. Changes to this policy
              </h2>
              <p className="mt-3">
                We may update this policy from time to time. Material changes will be
                reflected by updating the &ldquo;Last updated&rdquo; date above.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                10. Contact us
              </h2>
              <p className="mt-3">
                Questions about this policy can be sent to{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-primary hover:underline"
                >
                  {siteConfig.email}
                </a>{" "}
                or by calling {siteConfig.phone}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
