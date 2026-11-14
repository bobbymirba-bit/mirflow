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
      "Mirflow builds and manages customer support workflows as part of its all-in-one digital service. We help customers get routine answers, find a booking path, or reach the right person, then keep improving how those steps work together.",
    keywords: ["service", "offer", "about", "company", "build", "chatbot", "support", "bot", "who"],
  },
  {
    id: "free-demo",
    question: "How can we try the agent?",
    answer:
      "Try the example on this page to see a website answer and handoff. On the AI Receptionist page you can also listen to a recording or call our voice agent.",
    keywords: ["demo", "free", "trial", "try", "test", "sample", "start"],
  },
  {
    id: "launch-price",
    question: "How much does setup cost?",
    answer:
      "We quote the front desk as part of the scope we agree with you: one setup fee for the build and one monthly retainer for the ongoing management. The pricing page has the current list price, and you get your figure in writing before anything starts. If the front desk is still failing to handle real customer questions after 14 live days under the agreed checks, we refund the setup fee.",
    keywords: ["price", "pricing", "cost", "fee", "setup", "one-time", "install", "how much", "pay"],
  },
  {
    id: "care-price",
    question: "What does the monthly fee cover?",
    answer:
      "The AI Front Desk monthly plan covers ongoing management of the agreed front desk and follow-up workflow. Additional support work, such as new channels or integrations, is scoped with you separately.",
    keywords: ["monthly", "subscription", "maintenance", "ongoing", "month", "report", "plan", "price", "cost", "retainer"],
  },
  {
    id: "sources-only",
    question: "Where do the agent's answers come from?",
    answer:
      "We work from business information you approve, such as your services, hours, policies, FAQs, and booking rules. We also agree on when to send a question to your team.",
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
      "It’s for businesses that want help answering repeat questions and moving inquiries to the right next step. We configure the workflow around your customers and how your team works.",
    keywords: ["fit", "customers", "saas", "software", "ecommerce", "e-commerce", "shop", "store", "local", "small business", "industry"],
  },
  {
    id: "no-help-center",
    question: "What if we don't have a help center?",
    answer:
      "We can start with the service details, policies, and common questions your team already uses. During setup we turn those into approved answers and agree on what should go to a person.",
    keywords: ["faq page", "no docs", "documentation", "website", "without", "missing", "content"],
  },
  {
    id: "data-privacy",
    question: "Do you need access to our customer data or systems?",
    answer:
      "We agree with you on what information the agent can use, which channels it will work in, and where it should send questions that need your team.",
    keywords: ["privacy", "data", "security", "access", "login", "credentials", "robots", "crawl", "scrape", "gdpr", "safe", "customer data"],
  },
  {
    id: "control",
    question: "Who decides what goes live?",
    answer:
      "You approve what the agent can use and how it should handle customer inquiries. Mirflow handles setup, testing, and updates.",
    keywords: ["approve", "approval", "control", "review", "publish", "live", "remove", "turn off", "cancel"],
  },
  {
    id: "timeline",
    question: "How long does it take?",
    answer:
      "Timing depends on the channels and handoffs involved. We agree on the first workflow, what needs testing, and a launch plan before setup.",
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
