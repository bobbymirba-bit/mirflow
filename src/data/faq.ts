export type FaqItem = {
  question: string;
  answer: string;
  category: "General" | "Implementation" | "Pricing" | "Technical" | "Security";
};

export const faqs: FaqItem[] = [
  {
    category: "General",
    question: "What exactly does Cadence do?",
    answer:
      "Cadence designs, builds, and operates AI automation systems for your business — from AI receptionists and chatbots to back-office and document automation. We handle the strategy, build, deployment, and ongoing optimization, not just the software.",
  },
  {
    category: "General",
    question: "How is Cadence different from buying a SaaS AI tool myself?",
    answer:
      "Off-the-shelf tools require you to configure, train, and maintain them yourself, and rarely handle more than one narrow task. Cadence designs a system around your actual workflows, integrates it with your existing tools, and continues optimizing it after launch.",
  },
  {
    category: "Implementation",
    question: "How long does it take to go live?",
    answer:
      "Most single-workflow automations (like an AI receptionist or chatbot) go live within 2 to 4 weeks. Multi-workflow or custom AI application projects typically take 6 to 12 weeks depending on complexity and integration requirements.",
  },
  {
    category: "Implementation",
    question: "Do I need technical staff to work with Cadence?",
    answer:
      "No. We handle the technical implementation, integrations, and hosting. Your team's job is to share context about how the business runs — we translate that into a working system.",
  },
  {
    category: "Implementation",
    question: "What if the AI doesn't understand a customer's request?",
    answer:
      "Every Cadence deployment includes clear escalation paths. When the system isn't confident or a request falls outside its scope, it hands off to a human with full context, rather than guessing.",
  },
  {
    category: "Pricing",
    question: "How is pricing structured?",
    answer:
      "Pricing is a flat monthly fee based on the number of workflows and conversation volume, not a per-seat or per-agent fee. This means costs stay predictable even as usage grows. See our Pricing page for current tiers.",
  },
  {
    category: "Pricing",
    question: "Is there a setup fee?",
    answer:
      "Most engagements include a one-time implementation fee that covers discovery, integration, and training the system on your business — scoped and quoted during your onboarding call based on complexity.",
  },
  {
    category: "Pricing",
    question: "Can I cancel or change plans?",
    answer:
      "Yes. Monthly plans can be adjusted or canceled with 30 days' notice. Enterprise agreements follow the terms set in your custom contract.",
  },
  {
    category: "Technical",
    question: "What systems does Cadence integrate with?",
    answer:
      "Cadence integrates with most common CRMs, calendars, help desks, and communication platforms out of the box, and we build custom integrations for proprietary or legacy systems as part of enterprise engagements.",
  },
  {
    category: "Technical",
    question: "Can Cadence work with our existing phone number and tools?",
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
    question: "Is Cadence compliant with industry regulations like HIPAA?",
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
