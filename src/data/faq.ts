export type FaqEntry = {
  id: string;
  question: string;
  answer: string;
  /** Extra search terms (synonyms) that point to this entry. */
  keywords: string[];
};

/** Mirflow's own FAQ. The example on the support-agent page answers only from these entries. */
export const faq: FaqEntry[] = [
  {
    id: "what-is-mirflow",
    question: "What does the support agent do?",
    answer:
      "Mirflow builds AI support agents that answer your customers' questions using only your company's own public help pages. Each answer points to the page it came from, and when the agent isn't sure it hands the conversation to a person on your team.",
    keywords: ["service", "offer", "about", "company", "build", "chatbot", "support", "bot", "who"],
  },
  {
    id: "free-demo",
    question: "How can we try the agent?",
    answer:
      "Try the live example on this page to see how answers, sources, and human handoffs work. Email us with your public help-center URL to discuss a setup for your company.",
    keywords: ["demo", "free", "trial", "try", "test", "sample", "start"],
  },
  {
    id: "launch-price",
    question: "How much does setup cost?",
    answer:
      "Setup costs $2,000. We load your published help content, set up a human handoff, and install the agent on your site. If it is still failing to answer real questions after 14 live days, we refund the setup fee under the agreed terms.",
    keywords: ["price", "pricing", "cost", "fee", "setup", "one-time", "install", "2000", "refund", "how much", "pay"],
  },
  {
    id: "care-price",
    question: "What does the monthly fee cover?",
    answer:
      "The $500 monthly fee covers content refreshes when your help pages change, a report of unanswered questions, and ongoing fixes.",
    keywords: ["monthly", "subscription", "maintenance", "ongoing", "500", "month", "report", "plan", "price", "cost", "retainer"],
  },
  {
    id: "sources-only",
    question: "Where do the agent's answers come from?",
    answer:
      "Only from your own pages: your help center, docs, or website FAQ. The agent shows the source it used for each answer. If your pages don't cover a question, it says it doesn't know instead of guessing.",
    keywords: ["source", "sources", "accurate", "accuracy", "hallucinate", "hallucination", "make up", "cite", "citation", "trust", "wrong"],
  },
  {
    id: "handoff",
    question: "What happens when the agent can't answer?",
    answer:
      "It says it doesn't know and offers a hand-off to a human, for example by collecting the customer's email for your support team or pointing them to your existing contact channel. During setup we configure the hand-off that fits how your team already works.",
    keywords: ["human", "handoff", "hand-off", "escalate", "escalation", "person", "staff", "unsure", "unknown", "live agent"],
  },
  {
    id: "who-for",
    question: "Who is this for?",
    answer:
      "Small software and e-commerce companies with a public help center are the best fit. Local businesses can use the FAQ on their website as the source instead.",
    keywords: ["fit", "customers", "saas", "software", "ecommerce", "e-commerce", "shop", "store", "local", "small business", "industry"],
  },
  {
    id: "no-help-center",
    question: "What if we don't have a help center?",
    answer:
      "A clear FAQ page on your website works too. The agent can only be as complete as the pages it reads, so the more of your common questions are written down publicly, the more it can answer.",
    keywords: ["faq page", "no docs", "documentation", "website", "without", "missing", "content"],
  },
  {
    id: "data-privacy",
    question: "Do you need access to our customer data or systems?",
    answer:
      "The agent uses your public help pages. During setup we confirm how to install it and where to send questions that need your team.",
    keywords: ["privacy", "data", "security", "access", "login", "credentials", "robots", "crawl", "scrape", "gdpr", "safe", "customer data"],
  },
  {
    id: "control",
    question: "Who decides what goes live?",
    answer:
      "You do. Nothing is installed on your site until you approve it, you choose which pages the agent may use, and you can ask us to remove or change content at any time.",
    keywords: ["approve", "approval", "control", "review", "publish", "live", "remove", "turn off", "cancel"],
  },
  {
    id: "timeline",
    question: "How long does it take?",
    answer:
      "It depends on how many pages you have. We'll tell you the expected timing when you send your help-center URL, and we schedule the installation with you.",
    keywords: ["time", "timeline", "fast", "quick", "days", "weeks", "turnaround", "when", "long"],
  },
  {
    id: "install",
    question: "How is the agent installed on our site?",
    answer:
      "During setup we install it on your site, typically as a chat widget added with a small snippet. We'll work with whoever manages your website to put it where you want it.",
    keywords: ["widget", "embed", "snippet", "website", "install", "integrate", "integration", "wordpress", "shopify", "chat"],
  },
  {
    id: "contact",
    question: "How do I contact Mirflow?",
    answer:
      "Email bobby@mirflow.online, call (949) 422-8674, or find us on Instagram at @mirflow.ai.",
    keywords: ["email", "phone", "call", "reach", "talk", "contact", "instagram", "speak", "number"],
  },
];
