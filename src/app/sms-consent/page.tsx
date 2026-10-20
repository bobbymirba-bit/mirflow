import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Text Message Consent",
  description: `How ${siteConfig.name} asks for and records consent to send text messages, including the exact script read on calls.`,
};

export default function SmsConsentPage() {
  return (
    <section className="border-b border-border">
      <div className="container-page py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Legal</p>
          <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Text Message Consent
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            How Mirflow asks for consent to send text messages, and the exact words
            used on the call.
          </p>

          <div className="prose-legal mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                The program
              </h2>
              <p className="mt-3">
                Mirflow builds applied AI for small operating businesses: voice
                agents, conversational systems, and automation that quietly remove
                friction from the way a company runs. One of those systems is an AI
                support agent trained on a company&apos;s own public help pages.
              </p>
              <p className="mt-3">
                Mirflow sends text messages only to people who agree to receive
                them during a phone call with our team or our AI assistant. The
                messages carry a link to a working demo of our AI support agent
                that the person asked for, plus one-to-one follow-up messages in
                the same thread about that demo and our AI support agent service.
                Messages are sent from +1 (949) 328-5051. Message frequency
                varies. Message and data rates may apply.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                How consent is collected, step by step
              </h2>
              <ol className="mt-3 list-decimal space-y-2 pl-5">
                <li>
                  The call is recorded. At the start of the call, our assistant
                  identifies itself as an AI assistant calling on behalf of
                  Mirflow.
                </li>
                <li>
                  During the conversation, the assistant offers to text a demo
                  link and asks for the best mobile number.
                </li>
                <li>
                  The assistant reads the number back digit by digit, and the
                  person confirms it is correct.
                </li>
                <li>
                  The assistant then reads the consent statement below, word for
                  word, and asks whether it is okay to send.
                </li>
                <li>
                  Only if the person clearly says yes is the first text message
                  sent, while the call is still in progress. If the person says
                  no, no text is sent, and the link is offered by email instead.
                </li>
              </ol>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                The exact words used
              </h2>
              <p className="mt-3">First, the assistant asks for the number:</p>
              <blockquote className="mt-3 border-l-2 border-primary pl-4 italic">
                &ldquo;Easiest thing, I can text you the link so you can try it on
                your phone. What is the best mobile for that?&rdquo;
              </blockquote>
              <p className="mt-3">
                After the number is read back and confirmed, the assistant reads
                this consent statement before sending anything:
              </p>
              <blockquote className="mt-3 border-l-2 border-primary pl-4 italic">
                &ldquo;Perfect. Just so it is official: by saying yes, you agree
                Mirflow can text that number the demo link and follow-up messages
                about it in the same thread. Message frequency varies, and message
                and data rates may apply. Reply STOP to end them anytime, HELP for
                help. Okay to send?&rdquo;
              </blockquote>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                Your choices
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-foreground">
                    Reply STOP to opt out at any time. Reply HELP for help.
                  </strong>
                </li>
                <li>
                  Consent to receive text messages is not a condition of
                  purchasing any goods or services.
                </li>
                <li>Carriers are not liable for delayed or undelivered messages.</li>
                <li>
                  We do not share, sell, rent, or disclose your mobile phone
                  number, text messaging opt-in data, or consent status with
                  third parties or affiliates for marketing or promotional
                  purposes. See our{" "}
                  <a href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </a>{" "}
                  and the text messaging section of our{" "}
                  <a href="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </a>
                  .
                </li>
                <li>
                  Questions: email{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-primary hover:underline"
                  >
                    {siteConfig.email}
                  </a>{" "}
                  or call +1 (949) 328-5051.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
