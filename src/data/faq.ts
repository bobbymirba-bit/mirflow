export type FaqItem = {
  question: string;
  answer: string;
  category: "General" | "Engagements" | "Security & Data" | "Tax" | "Pricing";
  /** Shown on the homepage. */
  featured?: boolean;
};

export const faqs: FaqItem[] = [
  {
    category: "General",
    featured: true,
    question: "What does Mirflow do?",
    answer:
      "Mirflow helps finance-heavy and operations-driven businesses deploy AI safely. We work across five areas: AI strategy and implementation, AI automation for business workflows, AI security and governance, AI for tax operations, and AI product leadership. We advise, build, and help operate what we deliver.",
  },
  {
    category: "General",
    featured: true,
    question: "How is Mirflow different from a typical AI consultancy?",
    answer:
      "We focus on businesses where accuracy and data protection matter, especially finance, tax, and operations. Security, governance, and human review are designed into every engagement from the start rather than added at the end. Our recommendations are vendor-neutral.",
  },
  {
    category: "General",
    question: "Who is a good fit for Mirflow?",
    answer:
      "Leadership teams at mid-market and growing businesses, tax departments and accounting firms, data-sensitive organizations, and software companies adding AI to their products. If your work involves high volumes of documents, sensitive data, or multi-system processes, we're likely a good fit.",
  },
  {
    category: "Engagements",
    featured: true,
    question: "What happens in an AI Assessment?",
    answer:
      "We start with a working session to understand your goals, workflows, systems, and current AI use. From there, we outline the most promising opportunities, the readiness gaps and risks to address, and recommended next steps. The scope of any deeper assessment is agreed in writing before work begins.",
  },
  {
    category: "Engagements",
    question: "How are engagements structured?",
    answer:
      "Most clients start with an assessment or a focused first project, such as one automated workflow or a governance baseline. Larger programs are delivered in phases with defined deliverables and checkpoints. Fractional product leadership is typically a recurring engagement.",
  },
  {
    category: "Engagements",
    question: "Do we need technical staff to work with you?",
    answer:
      "It helps to have someone who owns each system we integrate with, but you don't need an in-house AI team. We work with your IT, security, finance, and operations leads and document everything we deliver.",
  },
  {
    category: "Engagements",
    question: "What does pricing look like?",
    answer:
      "Pricing depends on scope. Assessments and focused projects are quoted as fixed fees where possible. Ongoing work, such as fractional leadership or managed automation, is quoted as a recurring fee. You'll receive a written proposal before any commitment.",
  },
  {
    category: "Security & Data",
    featured: true,
    question: "How do you protect our data?",
    answer:
      "Each system is designed with scoped data access, least-privilege permissions, approved vendors, defined retention, and logging. We review and agree on data flows with your team before any production data is used. Specific controls depend on your environment and requirements.",
  },
  {
    category: "Security & Data",
    question: "Can you guarantee security or regulatory compliance?",
    answer:
      "No, and we'd be cautious of anyone who does. Our work is designed to reduce risk and help you prepare for audits, customer security reviews, and regulatory expectations. Compliance determinations are made by your auditors, regulators, and legal advisors.",
  },
  {
    category: "Security & Data",
    question: "Do your AI systems train on our data?",
    answer:
      "We select and configure tools so your data isn't used to train third-party models wherever the vendor offers that control, and we document each vendor's data-handling terms as part of the design.",
  },
  {
    category: "Tax",
    featured: true,
    question: "Does Mirflow provide tax advice?",
    answer:
      "No. Mirflow is a technology and operations partner, not a CPA firm or tax advisor. Our systems support tax professionals by handling document processing, classification, research assistance, and preparation work. Determinations, positions, and filings remain with your team and advisors.",
  },
  {
    category: "Tax",
    question: "How do you handle high-risk tax decisions?",
    answer:
      "We set review thresholds with your tax leaders. Uncertain, high-value, or judgment-based items are routed to qualified professionals before anything is filed or relied on, and those decisions are logged.",
  },
  // Legacy small-business automation plan FAQs, used only on /pricing.
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
];

export const faqCategories: FaqItem["category"][] = [
  "General",
  "Engagements",
  "Security & Data",
  "Tax",
];
