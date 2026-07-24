export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: { name: string; role: string; initials: string };
  content: { heading?: string; body: string }[];
};

export const blogCategories = [
  "Automation Strategy",
  "Voice & Conversational AI",
  "Operations",
  "Case Studies",
  "Industry",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-calculate-roi-on-ai-automation",
    title: "How to Calculate ROI on AI Automation Before You Buy",
    excerpt:
      "Most automation pitches lead with technology. Here's the framework we use with clients to model payback period before signing anything.",
    category: "Automation Strategy",
    date: "2026-06-02",
    readTime: "7 min read",
    author: { name: "Cadence Team", role: "Editorial", initials: "CT" },
    content: [
      {
        heading: "Start with cost, not capability",
        body: "The most common mistake in evaluating automation is starting with what the technology can do rather than what it costs you today not to have it. Before comparing tools, quantify the current cost of the manual process: hours spent, error rate, and opportunity cost of delayed response.",
      },
      {
        heading: "Model three numbers",
        body: "Every credible ROI model for automation comes down to three inputs: current cost of the manual process, expected cost of the automated system, and the conversion or efficiency lift once it's live. Everything else is commentary.",
      },
      {
        heading: "Discount your own optimism",
        body: "Vendors — including us — will show best-case outcomes. Build your model on the conservative end of any range you're quoted, and treat anything beyond that as upside.",
      },
      {
        heading: "Payback period, not just percentage lift",
        body: "A 30% efficiency gain sounds impressive until you calculate how long it takes to offset the implementation cost. Payback period, typically expressed in months, is the number that should drive your decision.",
      },
    ],
  },
  {
    slug: "voice-ai-vs-ivr-whats-actually-different",
    title: "Voice AI vs. Traditional IVR: What's Actually Different",
    excerpt:
      "\"Press 1 for sales\" and a modern voice AI agent are not the same category of technology. Here's what actually changed.",
    category: "Voice & Conversational AI",
    date: "2026-05-18",
    readTime: "6 min read",
    author: { name: "Cadence Team", role: "Editorial", initials: "CT" },
    content: [
      {
        heading: "IVR was built for routing, not resolution",
        body: "Traditional IVR systems exist to route a caller to the right queue. They can't understand natural language, can't answer a question, and can't complete a task like booking an appointment.",
      },
      {
        heading: "Modern voice AI understands intent",
        body: "Current-generation voice AI combines real-time speech recognition with a reasoning model that understands context, follows multi-turn conversations, and takes action — booking, transferring, or resolving a request live.",
      },
      {
        heading: "Latency is the make-or-break metric",
        body: "The biggest technical unlock in the last two years has been latency. Early voice AI felt robotic because of the delay between a caller finishing a sentence and the system responding. Sub-second response time is what makes a conversation feel natural.",
      },
    ],
  },
  {
    slug: "why-most-automation-projects-fail-at-the-handoff",
    title: "Why Most Automation Projects Fail at the Handoff",
    excerpt:
      "It's rarely the AI model that breaks an automation project. It's what happens when the system doesn't know what to do next.",
    category: "Automation Strategy",
    date: "2026-05-02",
    readTime: "5 min read",
    author: { name: "Cadence Team", role: "Editorial", initials: "CT" },
    content: [
      {
        heading: "The 90% problem",
        body: "Most automation systems can handle roughly 90% of cases without issue. Projects fail not because that 90% doesn't work, but because no one designed what happens with the remaining 10%.",
      },
      {
        heading: "Design the escalation path first",
        body: "Before automating the happy path, define exactly what happens when the system is uncertain: who gets notified, what context they receive, and how quickly they need to respond.",
      },
      {
        heading: "Context is the difference between a good handoff and a bad one",
        body: "A handoff that includes full conversation history, customer data, and a summary of what's already been tried feels seamless. A handoff that just says \"customer needs help\" erodes trust immediately.",
      },
    ],
  },
  {
    slug: "the-real-cost-of-a-missed-call",
    title: "The Real Cost of a Missed Call for Service Businesses",
    excerpt:
      "A missed call isn't a zero. It's a customer who called your competitor next. Here's how to actually quantify it.",
    category: "Industry",
    date: "2026-04-20",
    readTime: "6 min read",
    author: { name: "Cadence Team", role: "Editorial", initials: "CT" },
    content: [
      {
        heading: "Missed calls don't show up on your P&L",
        body: "Unlike churn or refunds, a missed call never appears as a line item anywhere in your financials — which is exactly why it's so persistently underpriced by business owners.",
      },
      {
        heading: "A simple model",
        body: "Multiply your average missed-call rate by your average job value and close rate on inbound calls. For most service businesses, this number is in the tens of thousands of dollars annually — often more than the cost of fixing the problem entirely.",
      },
      {
        heading: "Emergency calls carry a multiplier",
        body: "After-hours and emergency calls typically convert at a higher rate and higher average ticket than daytime calls, which means missed after-hours coverage is disproportionately costly compared to missed daytime calls.",
      },
    ],
  },
  {
    slug: "rag-explained-for-business-leaders",
    title: "RAG Systems Explained for Business Leaders (No Jargon)",
    excerpt:
      "Retrieval-augmented generation sounds technical. The concept behind it is simple, and it's the reason AI answers can actually be trusted.",
    category: "Automation Strategy",
    date: "2026-04-05",
    readTime: "8 min read",
    author: { name: "Cadence Team", role: "Editorial", initials: "CT" },
    content: [
      {
        heading: "The hallucination problem",
        body: "General-purpose AI models are trained on public internet data, not your business. When asked a specific question about your policies or products, they'll often generate a plausible-sounding but incorrect answer.",
      },
      {
        heading: "RAG grounds answers in your data",
        body: "Retrieval-augmented generation solves this by first searching your actual documents for relevant information, then instructing the model to answer only using what it found — with a citation back to the source.",
      },
      {
        heading: "Why this matters for trust",
        body: "A support or internal AI system that can point to exactly where an answer came from is dramatically more trustworthy — and auditable — than one that simply asserts an answer with no source.",
      },
    ],
  },
  {
    slug: "5-signs-your-business-is-ready-for-ai-automation",
    title: "5 Signs Your Business Is Ready for AI Automation",
    excerpt:
      "Not every business is ready to automate on day one. Here are the signals that indicate it's the right time.",
    category: "Operations",
    date: "2026-03-14",
    readTime: "5 min read",
    author: { name: "Cadence Team", role: "Editorial", initials: "CT" },
    content: [
      {
        heading: "1. Your process is repeatable, even if it's not written down",
        body: "Automation works best on processes with a consistent shape, even if the exact steps live in someone's head rather than a formal SOP.",
      },
      {
        heading: "2. Volume is outpacing headcount",
        body: "If call volume, ticket volume, or lead volume is growing faster than you can hire, that gap is exactly what automation is built to close.",
      },
      {
        heading: "3. You can point to a specific bottleneck",
        body: "The clearest automation wins come from a specific, nameable bottleneck — a phone line, an inbox, a manual data-entry step — not a vague desire to \"use AI.\"",
      },
      {
        heading: "4. Your team is doing the same thing for every customer",
        body: "Repetition across customers or cases is a strong signal that a process can be automated without losing the personal touch that actually requires a human.",
      },
      {
        heading: "5. Leadership has bandwidth to define success",
        body: "The businesses that get the most from automation dedicate real time upfront to defining what good looks like — not just handing it off and hoping.",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
