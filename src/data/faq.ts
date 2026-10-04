export type FaqItem = {
  question: string;
  answer: string;
  category: "General" | "Sessions" | "Safety & privacy" | "Plans" | "Pricing";
  /** Shown on the homepage. */
  featured?: boolean;
};

export const faqs: FaqItem[] = [
  {
    category: "Safety & privacy",
    featured: true,
    question: "What will Mirflow never ask for?",
    answer:
      "We will never ask for your passwords, PINs, or verification codes. We won't ask for card or bank numbers during a session, we never take remote control of your devices, and we will never ask you to pay with gift cards, crypto, or wire transfers. If anyone claiming to be Mirflow asks for these, it isn't us. Hang up and contact us at hello@mirflow.online.",
  },
  {
    category: "General",
    featured: true,
    question: "Who is Mirflow for?",
    answer:
      "Anyone who wants to use AI safely or avoid AI-powered scams. That includes adults worried about scams targeting their parents, older adults who want patient one-on-one help, and everyday users who want to try AI tools without exposing personal information.",
  },
  {
    category: "General",
    question: "Do I need to be good with technology?",
    answer:
      "No. Guides are written in plain English, and sessions go at your pace. If you can join a video call, we can help.",
  },
  {
    category: "Sessions",
    featured: true,
    question: "How does a 1:1 session work?",
    answer:
      "You book a time, answer a few short questions, and join a video call. You share your screen and make each change yourself while we guide you. Afterward you get a written summary of what we set up.",
  },
  {
    category: "Sessions",
    question: "Why don't you take remote control of my device?",
    answer:
      "Because remote-access requests are one of the most common tricks scammers use. We want you to learn one simple rule: never let someone you don't know control your device. So we guide while you click, and you can see everything that happens.",
  },
  {
    category: "Sessions",
    question: "Can I book a session for my parent?",
    answer:
      "Yes. You can book on their behalf and join the call too. Many families find it easiest when an adult child and a parent take part together.",
  },
  {
    category: "Safety & privacy",
    question: "Can you get back money I lost to a scam?",
    answer:
      "No. Mirflow can't recover money. If you think you've been scammed, call your bank or card company right away using the number on the back of your card, then report it at ReportFraud.ftc.gov and ic3.gov.",
  },
  {
    category: "Safety & privacy",
    question: "Is this financial or legal advice?",
    answer:
      "No. Mirflow provides general education and personal setup help. For legal or financial decisions, please speak with a qualified professional.",
  },
  {
    category: "Plans",
    featured: true,
    question: "How much does it cost?",
    answer:
      "Guides and the family scam checklist are free. A one-on-one session is $99. Membership ($12 a month) and the family plan ($29 a month) are opening soon, and you can join the waitlist now.",
  },
  {
    category: "Plans",
    question: "Do you offer talks for community groups?",
    answer:
      "Yes. Libraries, senior centers, and community groups can request a free talk through our contact page.",
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
  "Sessions",
  "Safety & privacy",
  "Plans",
];
