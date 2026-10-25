export type FaqEntry = {
  id: string;
  question: string;
  answer: string;
  /** Extra search terms (synonyms) that point to this entry. */
  keywords: string[];
};

/** Mirflow's own FAQ. The example agent on the homepage answers only from these entries. */
export const faq: FaqEntry[] = [
  {
    id: "what-is-mirflow",
    question: "What does Mirflow do?",
    answer:
      "Mirflow builds AI support agents that answer your customers' questions using only your company's own public help pages. Each answer points to the page it came from, and when the agent isn't sure it hands the conversation to a person on your team.",
    keywords: ["service", "offer", "about", "company", "build", "chatbot", "support", "bot", "who"],
  },
  {
    id: "free-demo",
    question: "What is the free demo agent?",
    answer:
      "Send us the URL of your public help center (or your website FAQ). We build a demo agent from those public pages and send you a private link so you can ask it real customer questions. The demo is free and there is no obligation to buy anything.",
    keywords: ["demo", "free", "trial", "try", "test", "sample", "cost", "obligation", "start"],
  },
  {
    id: "who-qualifies-demo",
    question: "Who qualifies for a free demo?",
    answer:
      "Small software and e-commerce teams with a public help center or a clear website FAQ. We build the demo only from those public pages (robots.txt respected). No customer data, logins, or obligation are required.",
    keywords: ["qualify", "qualifies", "eligible", "eligibility", "who can", "requirements", "fit", "free demo"],
  },
  {
    id: "launch-price",
    question: "What does Launch include and cost?",
    answer:
      "Launch is $1,500 one-time. We load your full help center and docs, add a hand-off to a human on your team, and install the agent on your site.",
    keywords: ["price", "pricing", "cost", "fee", "setup", "one-time", "install", "1500", "how much", "pay"],
  },
  {
    id: "care-price",
    question: "What is the Care plan?",
    answer:
      "Care is $299 per month. It covers content refreshes when your help pages change, a monthly report of the questions the agent couldn't answer, and fixes.",
    keywords: ["monthly", "subscription", "maintenance", "ongoing", "299", "month", "report", "plan", "price", "cost", "retainer"],
  },
  {
    id: "founding-offer",
    question: "Is there a founding-client discount?",
    answer:
      "Yes. The first 3 clients get Launch for $750 instead of $1,500, in exchange for agreeing to be a reference for future clients.",
    keywords: ["discount", "founding", "deal", "750", "cheaper", "reference", "first", "promo", "special"],
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
      "It says it doesn't know and offers a hand-off to a human, for example by collecting the customer's email for your support team or pointing them to your existing contact channel. With Launch we set up the hand-off that fits how your team already works.",
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
      "Not for the demo. We only read your public pages and we respect robots.txt. No customer data, logins, or system access are needed to build the demo agent.",
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
      "It depends on how many pages you have. We'll tell you the expected timing when you send your help-center URL, and the Launch install is scheduled with you once you've tried the demo.",
    keywords: ["time", "timeline", "fast", "quick", "days", "weeks", "turnaround", "when", "long"],
  },
  {
    id: "install",
    question: "How is the agent installed on our site?",
    answer:
      "As part of Launch we install it on your site, typically as a chat widget added with a small snippet. We'll work with whoever manages your website to put it where you want it.",
    keywords: ["widget", "embed", "snippet", "website", "install", "integrate", "integration", "wordpress", "shopify", "chat"],
  },
  {
    id: "cancel-care",
    question: "Do we have to keep paying for Care?",
    answer:
      "Care is optional and month to month. It keeps the agent's content in sync with your help pages and gives you the monthly unanswered-questions report. Talk to us before cancelling about what happens to the hosted agent.",
    keywords: ["cancel", "contract", "commitment", "optional", "month to month", "stop", "required"],
  },
  {
    id: "contact",
    question: "How do I contact Mirflow?",
    answer:
      "Email bobby@mirflow.online, call (949) 422-8674, or find us on Instagram at @mirflow.ai. You can also request a free demo agent with the form on this page.",
    keywords: ["email", "phone", "call", "reach", "talk", "contact", "instagram", "speak", "number"],
  },
];
