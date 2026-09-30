export type FaqItem = {
  question: string;
  answer: string;
  category: "General" | "Implementation" | "Pricing" | "Technical" | "Security";
};

export const faqs: FaqItem[] = [
  {
    category: "General",
    question: "What exactly does Mirflow do?",
    answer:
      "Mirflow designs, builds, and operates AI automation systems for your business — from AI receptionists and chatbots to back-office and document automation. We handle the strategy, build, deployment, and ongoing optimization, not just the software.",
  },
  {
    category: "General",
    question: "How is Mirflow different from buying a SaaS AI tool myself?",
    answer:
      "Off-the-shelf tools require you to configure, train, and maintain them yourself, and rarely handle more than one narrow task. Mirflow designs a system around your actual workflows, integrates it with your existing tools, and continues optimizing it after launch.",
  },
  {
    category: "Implementation",
    question: "How long does it take to go live?",
    answer:
      "Our standard lead follow-up system can go live within 24 hours after we receive access to your lead source, calendar, and messaging tools. Custom voice agents, multiple workflows, complex integrations, or incomplete account access take longer; we confirm that timeline in your quote before work begins.",
  },
  {
    category: "Implementation",
    question: "Do I need technical staff to work with Mirflow?",
    answer:
      "No. We handle the technical implementation, integrations, and hosting. Your team's job is to share context about how the business runs — we translate that into a working system.",
  },
  {
    category: "Implementation",
    question: "What if the AI doesn't understand a customer's request?",
    answer:
      "Every Mirflow deployment includes clear escalation paths. When the system isn't confident or a request falls outside its scope, it hands off to a human with full context, rather than guessing.",
  },
  {
    category: "Pricing",
    question: "How is pricing structured?",
    answer:
      "Three published plans. The Pilot is $197 one-time for seven days of missed-call text-back, credited toward setup. Starter is $497 setup + $199/mo for an after-hours AI receptionist, text-back, and call summaries. Growth is $997 setup + $399/mo for 24/7 answering, calendar booking, follow-ups, and review requests. No per-seat fees. Multi-location and custom builds are quoted separately.",
  },
  {
    category: "Pricing",
    question: "Is there a setup fee?",
    answer:
      "Yes, one time. Starter is $497 setup + $199/mo and Growth is $997 setup + $399/mo, both month-to-month with no long-term contract. If you start with the $197 7-Day Missed-Call Text-Back Pilot, the $197 is credited toward either setup fee. Custom and multi-location builds are scoped and quoted separately.",
  },
  {
    category: "Pricing",
    question: "Is there a contract? Can I cancel?",
    answer:
      "No long-term contract. Starter and Growth are month-to-month, and you can cancel anytime. You can also move between plans from one month to the next. Custom builds follow the terms in your quote.",
  },
  {
    category: "Pricing",
    question: "How does the $197 pilot work?",
    answer:
      "We connect to your line and call capture is live within 24 hours, so you get an email for every missed call right away. The text-back needs carrier approval (10DLC) under your business name, which usually takes 2 to 7 business days. Your seven days start when texts go live. At the end you get a plain recap of what came in. If you continue, the $197 is credited toward setup.",
  },
  {
    category: "Technical",
    question: "What systems does Mirflow integrate with?",
    answer:
      "Mirflow integrates with most common CRMs, calendars, help desks, and communication platforms out of the box, and we build custom integrations for proprietary or legacy systems as part of enterprise engagements.",
  },
  {
    category: "Technical",
    question: "Can Mirflow work with our existing phone number and tools?",
    answer:
      "Yes. Voice and messaging automations are typically deployed on your existing phone number and channels, so there's no disruption to how customers already reach you.",
  },
  {
    category: "Security",
    question: "How is our business and customer data protected?",
    answer:
      "Data is encrypted in transit and at rest, access is role-based and logged, and we operate under signed data processing agreements. Enterprise plans include dedicated infrastructure and custom compliance support for regulated industries.",
  },
  {
    category: "Security",
    question: "Is Mirflow compliant with industry regulations like HIPAA?",
    answer:
      "For healthcare, legal, and financial clients, we configure deployments to align with relevant regulatory requirements, including signed BAAs where applicable. Talk to our team about your specific compliance needs during onboarding.",
  },
];

export const faqCategories: FaqItem["category"][] = [
  "General",
  "Implementation",
  "Pricing",
  "Technical",
  "Security",
];
