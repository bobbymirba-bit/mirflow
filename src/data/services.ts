export type ServiceCategory =
  | "Conversational & Voice AI"
  | "Sales & Revenue"
  | "Customer Experience"
  | "CRM & Business Systems"
  | "Documents & Knowledge"
  | "Workflow & Platform Automation"
  | "Marketing & Content"
  | "Finance & Operations"
  | "Advanced AI Systems";

export type Service = {
  slug: string;
  name: string;
  category: ServiceCategory;
  icon: string;
  tagline: string;
  description: string;
  businessValue: string;
  roiStat: { value: string; label: string };
  useCases: string[];
  workflow: { title: string; description: string }[];
  industries: string[];
};

export const serviceCategories: ServiceCategory[] = [
  "Conversational & Voice AI",
  "Sales & Revenue",
  "Customer Experience",
  "CRM & Business Systems",
  "Documents & Knowledge",
  "Workflow & Platform Automation",
  "Marketing & Content",
  "Finance & Operations",
  "Advanced AI Systems",
];

export const services: Service[] = [
  // Conversational & Voice AI
  {
    slug: "ai-chatbots",
    name: "AI Chatbots",
    category: "Conversational & Voice AI",
    icon: "MessageSquare",
    tagline: "Answer every website visitor instantly, in your brand voice.",
    description:
      "Cadence deploys a chatbot trained on your product, pricing, and policies that resolves questions, qualifies leads, and routes conversations to the right team member in real time.",
    businessValue:
      "Website visitors expect an answer within seconds. A trained chatbot captures leads that would otherwise bounce, and removes repetitive Tier-1 questions from your support queue.",
    roiStat: { value: "3.4x", label: "increase in captured leads" },
    useCases: [
      "Qualify inbound leads before they reach sales",
      "Answer product and pricing questions 24/7",
      "Deflect repetitive support tickets",
      "Collect contact info and book meetings automatically",
    ],
    workflow: [
      { title: "Ingest", description: "Cadence indexes your site, docs, and FAQs into a live knowledge base." },
      { title: "Converse", description: "The assistant answers in your tone of voice, citing your source content." },
      { title: "Qualify", description: "Structured questions capture intent, budget, and timeline." },
      { title: "Route", description: "Hot leads are pushed to your CRM or a rep's calendar instantly." },
    ],
    industries: ["ecommerce", "real-estate", "professional-services", "cleaning-companies"],
  },
  {
    slug: "voice-ai",
    name: "Voice AI",
    category: "Conversational & Voice AI",
    icon: "Phone",
    tagline: "A phone agent that sounds human and never misses a call.",
    description:
      "Cadence Voice AI answers inbound calls, understands natural speech, and completes tasks like booking, triage, and FAQ resolution with latency low enough to feel like a real conversation.",
    businessValue:
      "Every missed call is a missed job or lost patient. Voice AI guarantees coverage during peak hours, after hours, and on holidays without the cost of a 24/7 call center.",
    roiStat: { value: "100%", label: "call answer rate" },
    useCases: [
      "Answer emergency and after-hours service calls",
      "Triage urgency and route to on-call staff",
      "Book, reschedule, and confirm appointments by phone",
      "Handle high call volume during marketing campaigns",
    ],
    workflow: [
      { title: "Answer", description: "Calls are picked up in under one second with a natural greeting." },
      { title: "Understand", description: "Real-time speech recognition captures intent and key details." },
      { title: "Act", description: "The agent books, transfers, or resolves the request live on the call." },
      { title: "Log", description: "A transcript and summary is pushed to your CRM automatically." },
    ],
    industries: ["hvac", "plumbing", "restaurants", "healthcare"],
  },
  {
    slug: "ai-receptionists",
    name: "AI Receptionists",
    category: "Conversational & Voice AI",
    icon: "Headset",
    tagline: "A front desk that never takes a break.",
    description:
      "Cadence acts as a virtual receptionist across phone, text, and chat — greeting callers, scheduling visits, and answering common questions exactly like your best front-desk hire.",
    businessValue:
      "Front-desk staff are frequently pulled away to help clients in person. An AI receptionist ensures no call goes unanswered, protecting revenue without adding payroll.",
    roiStat: { value: "9 hrs", label: "saved per week per location" },
    useCases: [
      "Greet and route callers across departments",
      "Answer hours, location, and policy questions",
      "Book and confirm appointments in your calendar",
      "Take messages and escalate urgent requests instantly",
    ],
    workflow: [
      { title: "Configure", description: "We map your call flows, hours, and escalation rules." },
      { title: "Deploy", description: "The receptionist goes live on your existing phone number." },
      { title: "Handle", description: "Calls are greeted, answered, and booked without hold times." },
      { title: "Escalate", description: "Complex or urgent calls are transferred to a human seamlessly." },
    ],
    industries: ["med-spas", "dentists", "law-firms", "healthcare"],
  },
  {
    slug: "inbound-sales-ai",
    name: "Inbound Sales AI",
    category: "Conversational & Voice AI",
    icon: "PhoneIncoming",
    tagline: "Convert inbound interest before it goes cold.",
    description:
      "Cadence responds to every inbound sales inquiry within seconds across chat, phone, and SMS, qualifying budget and intent before handing a warm, ready-to-close lead to your reps.",
    businessValue:
      "Speed to lead is the single biggest predictor of close rate. Automating the first response guarantees every inbound inquiry gets engaged while interest is highest.",
    roiStat: { value: "5x", label: "faster first response" },
    useCases: [
      "Respond to demo requests and contact-form fills instantly",
      "Qualify budget, authority, need, and timeline",
      "Book qualified meetings directly onto rep calendars",
      "Nurture leads that aren't sales-ready yet",
    ],
    workflow: [
      { title: "Detect", description: "New inbound inquiries trigger an instant automated response." },
      { title: "Qualify", description: "Conversational questions surface fit and readiness to buy." },
      { title: "Book", description: "Qualified leads are scheduled directly with the right rep." },
      { title: "Nurture", description: "Unqualified leads enter an automated nurture sequence." },
    ],
    industries: ["real-estate", "professional-services", "insurance", "financial-advisors"],
  },
  {
    slug: "ai-assistants",
    name: "AI Assistants",
    category: "Conversational & Voice AI",
    icon: "Bot",
    tagline: "A personal assistant for every operator on your team.",
    description:
      "Cadence builds custom AI assistants that draft emails, prep meeting briefs, manage task lists, and answer internal questions — accessible from Slack, Teams, or a private web app.",
    businessValue:
      "Knowledge workers spend hours a week on repetitive coordination tasks. A dedicated AI assistant reclaims that time for higher-value work.",
    roiStat: { value: "6 hrs", label: "reclaimed per employee weekly" },
    useCases: [
      "Draft and summarize emails and documents",
      "Prepare meeting briefs from CRM and calendar data",
      "Answer internal policy and process questions",
      "Manage and prioritize daily task lists",
    ],
    workflow: [
      { title: "Connect", description: "The assistant connects to your calendar, inbox, and internal tools." },
      { title: "Learn", description: "It ingests your processes, tone, and preferences." },
      { title: "Assist", description: "Team members interact with it daily via chat or Slack." },
      { title: "Improve", description: "Feedback loops continuously refine its responses." },
    ],
    industries: ["professional-services", "financial-advisors", "law-firms", "construction"],
  },
  {
    slug: "ai-employees",
    name: "AI Employees",
    category: "Conversational & Voice AI",
    icon: "UserRound",
    tagline: "A named, dedicated AI teammate with its own workflows.",
    description:
      "Cadence deploys role-specific AI employees — like an SDR, support agent, or ops coordinator — that own an end-to-end process rather than a single task, complete with reporting and oversight.",
    businessValue:
      "Instead of stitching together point tools, businesses get a single accountable digital worker that executes a full job function reliably, at a fraction of the cost of a hire.",
    roiStat: { value: "70%", label: "lower cost than a full-time hire" },
    useCases: [
      "Digital SDR that prospects and books meetings",
      "Digital support agent that owns Tier-1 and Tier-2 tickets",
      "Digital ops coordinator that manages scheduling and reporting",
      "Digital bookkeeper that reconciles transactions weekly",
    ],
    workflow: [
      { title: "Define", description: "We scope the role, KPIs, and tools the AI employee will own." },
      { title: "Train", description: "The employee is trained on your processes and edge cases." },
      { title: "Deploy", description: "It begins executing its role with human oversight." },
      { title: "Report", description: "Weekly performance dashboards track output and quality." },
    ],
    industries: ["ecommerce", "professional-services", "real-estate", "insurance"],
  },

  // Sales & Revenue
  {
    slug: "outbound-ai",
    name: "Outbound AI",
    category: "Sales & Revenue",
    icon: "PhoneOutgoing",
    tagline: "Prospecting and follow-up that never stops working.",
    description:
      "Cadence runs outbound calling and messaging campaigns that reach cold and warm leads, handle objections with a natural voice, and book meetings directly onto your team's calendar.",
    businessValue:
      "Outbound is a volume game constrained by rep capacity. Automating first-touch outreach multiplies pipeline without multiplying headcount.",
    roiStat: { value: "4x", label: "more meetings booked per rep" },
    useCases: [
      "Call cold and warm lead lists at scale",
      "Follow up on quotes and proposals automatically",
      "Re-engage dormant leads in your CRM",
      "Confirm and remind before scheduled appointments",
    ],
    workflow: [
      { title: "Segment", description: "Lead lists are prioritized by fit and recency." },
      { title: "Reach", description: "The AI calls or messages using a natural, on-brand script." },
      { title: "Handle", description: "Objections and questions are answered conversationally." },
      { title: "Convert", description: "Interested leads are booked directly onto a rep's calendar." },
    ],
    industries: ["roofing", "insurance", "real-estate", "financial-advisors"],
  },
  {
    slug: "lead-qualification",
    name: "Lead Qualification",
    category: "Sales & Revenue",
    icon: "ListChecks",
    tagline: "Only talk to leads worth talking to.",
    description:
      "Cadence scores and qualifies every inbound lead against your ideal customer profile using conversational forms, call analysis, and CRM signals — before a rep spends a minute on it.",
    businessValue:
      "Sales teams waste enormous time on leads that were never going to close. Automated qualification protects rep time for opportunities that matter.",
    roiStat: { value: "38%", label: "increase in rep close rate" },
    useCases: [
      "Score inbound leads against ICP criteria automatically",
      "Ask qualifying questions via chat, form, or phone",
      "Flag high-intent leads for immediate follow-up",
      "Route disqualified leads to nurture instead of sales",
    ],
    workflow: [
      { title: "Capture", description: "Lead data is captured from forms, calls, or chat." },
      { title: "Score", description: "Signals are scored against your ideal customer profile." },
      { title: "Route", description: "Qualified leads go to sales; others go to nurture." },
      { title: "Track", description: "Conversion rates by source are reported automatically." },
    ],
    industries: ["law-firms", "roofing", "real-estate", "insurance"],
  },
  {
    slug: "appointment-booking",
    name: "Appointment Booking",
    category: "Sales & Revenue",
    icon: "CalendarCheck",
    tagline: "Booking, confirmations, and reminders on autopilot.",
    description:
      "Cadence manages your entire scheduling flow — checking real-time availability, booking directly into your calendar, and sending confirmations and reminders to cut no-shows.",
    businessValue:
      "Back-and-forth scheduling costs hours weekly and causes drop-off before a booking is even confirmed. Automated booking removes friction at the exact moment intent is highest.",
    roiStat: { value: "24%", label: "fewer no-shows" },
    useCases: [
      "Book appointments directly by chat, voice, or SMS",
      "Send automated confirmations and reminders",
      "Handle rescheduling and cancellations without staff time",
      "Sync availability across multiple calendars and locations",
    ],
    workflow: [
      { title: "Check", description: "Real-time availability is pulled from your calendar system." },
      { title: "Book", description: "The customer picks a slot without any back-and-forth." },
      { title: "Confirm", description: "Automated confirmations reduce day-of confusion." },
      { title: "Remind", description: "Scheduled reminders cut no-shows before they happen." },
    ],
    industries: ["dentists", "med-spas", "hvac", "restaurants"],
  },
  {
    slug: "cold-outreach",
    name: "Cold Outreach",
    category: "Sales & Revenue",
    icon: "Send",
    tagline: "Personalized outbound sequences at scale.",
    description:
      "Cadence researches prospects, personalizes multi-channel sequences across email and LinkedIn, and adapts messaging based on engagement — without sounding automated.",
    businessValue:
      "Generic outreach gets ignored. Personalization at scale was previously impossible without a large SDR team; Cadence makes it a repeatable system.",
    roiStat: { value: "3.1x", label: "higher reply rate" },
    useCases: [
      "Build and enrich targeted prospect lists",
      "Personalize opening lines using researched signals",
      "Run multi-step, multi-channel sequences",
      "Auto-pause sequences when a reply is detected",
    ],
    workflow: [
      { title: "Research", description: "Prospect data is enriched from public and CRM sources." },
      { title: "Personalize", description: "Each message references a specific, relevant detail." },
      { title: "Sequence", description: "Multi-touch cadences run across email and LinkedIn." },
      { title: "Adapt", description: "Replies pause automation and route to the right rep." },
    ],
    industries: ["professional-services", "manufacturing", "logistics", "construction"],
  },
  {
    slug: "proposal-generation",
    name: "Proposal Generation",
    category: "Sales & Revenue",
    icon: "FileSignature",
    tagline: "From call to signed proposal in minutes.",
    description:
      "Cadence auto-generates branded, accurate proposals and quotes from call notes or intake forms, cutting turnaround time from days to minutes.",
    businessValue:
      "Slow proposals lose deals to faster competitors. Automating generation lets reps send a polished quote while interest is still high.",
    roiStat: { value: "68%", label: "faster proposal turnaround" },
    useCases: [
      "Generate quotes automatically from intake data",
      "Apply your pricing rules and approved templates",
      "Send for e-signature with automated follow-up",
      "Track opens and engagement on sent proposals",
    ],
    workflow: [
      { title: "Capture", description: "Job details are captured from a call, form, or site visit." },
      { title: "Generate", description: "A branded proposal is created using your pricing logic." },
      { title: "Send", description: "The proposal is delivered with e-signature built in." },
      { title: "Follow up", description: "Automated reminders nudge prospects to sign." },
    ],
    industries: ["roofing", "construction", "professional-services", "insurance"],
  },
  {
    slug: "sales-automation",
    name: "Sales Automation",
    category: "Sales & Revenue",
    icon: "TrendingUp",
    tagline: "Remove the busywork between pipeline stages.",
    description:
      "Cadence automates the administrative work between sales stages — data entry, task creation, follow-up sequencing, and deal-risk alerts — so reps spend their time selling.",
    businessValue:
      "Reps spend up to a third of their time on non-selling admin. Automating pipeline mechanics directly increases selling time and forecast accuracy.",
    roiStat: { value: "31%", label: "more selling time per rep" },
    useCases: [
      "Auto-log calls, emails, and notes to the CRM",
      "Trigger follow-up tasks based on deal stage",
      "Flag stalled deals for manager attention",
      "Auto-update forecast categories from deal activity",
    ],
    workflow: [
      { title: "Capture", description: "Every touchpoint is logged automatically to the CRM." },
      { title: "Trigger", description: "Stage changes create the right next-step tasks." },
      { title: "Alert", description: "Stalled or at-risk deals are flagged automatically." },
      { title: "Forecast", description: "Pipeline reporting updates in real time." },
    ],
    industries: ["manufacturing", "logistics", "professional-services", "real-estate"],
  },

  // Customer Experience
  {
    slug: "customer-support-ai",
    name: "Customer Support",
    category: "Customer Experience",
    icon: "LifeBuoy",
    tagline: "Resolve tickets instantly, escalate what matters.",
    description:
      "Cadence resolves common support requests instantly across chat and email, using your help docs and order data, while intelligently escalating complex cases to human agents.",
    businessValue:
      "The majority of support volume is repetitive. Automating resolution cuts response time to seconds and lets your team focus on high-value, relationship-driving conversations.",
    roiStat: { value: "68%", label: "of tickets resolved without a human" },
    useCases: [
      "Resolve order-status and account questions instantly",
      "Answer product and troubleshooting questions",
      "Process simple refunds and exchanges automatically",
      "Escalate complex or sensitive tickets with full context",
    ],
    workflow: [
      { title: "Classify", description: "Incoming tickets are categorized by intent and urgency." },
      { title: "Resolve", description: "Common requests are answered using your knowledge base." },
      { title: "Act", description: "The agent can issue refunds or updates within your rules." },
      { title: "Escalate", description: "Complex tickets are handed to a human with full context." },
    ],
    industries: ["ecommerce", "logistics", "healthcare", "insurance"],
  },
  {
    slug: "internal-knowledge-bases",
    name: "Internal Knowledge Bases",
    category: "Documents & Knowledge",
    icon: "BookOpen",
    tagline: "Every employee gets an instant answer, sourced correctly.",
    description:
      "Cadence turns your scattered docs, wikis, and Slack threads into a searchable AI knowledge base that answers employee questions with citations back to the source.",
    businessValue:
      "Employees lose hours weekly hunting for information across tools. A unified, AI-searchable knowledge base collapses that time to seconds.",
    roiStat: { value: "50%", label: "less time spent searching for answers" },
    useCases: [
      "Answer HR and policy questions instantly",
      "Surface the right SOP for a given task",
      "Onboard new hires with self-serve Q&A",
      "Keep answers current as source documents change",
    ],
    workflow: [
      { title: "Ingest", description: "Docs, wikis, and chat history are indexed securely." },
      { title: "Organize", description: "Content is structured and deduplicated automatically." },
      { title: "Answer", description: "Employees ask questions in plain language and get sourced answers." },
      { title: "Maintain", description: "The index updates automatically as documents change." },
    ],
    industries: ["professional-services", "law-firms", "manufacturing", "healthcare"],
  },
  {
    slug: "review-automation",
    name: "Review Automation",
    category: "Customer Experience",
    icon: "Star",
    tagline: "Turn happy customers into public proof.",
    description:
      "Cadence automatically requests reviews at the right moment after service completion, routes unhappy customers to private feedback, and helps respond to reviews at scale.",
    businessValue:
      "Review volume and rating directly influence local search ranking and conversion. Automating requests compounds review growth without manual chasing.",
    roiStat: { value: "3.1x", label: "more reviews collected" },
    useCases: [
      "Request reviews automatically after job completion",
      "Route negative feedback privately before it's public",
      "Draft on-brand responses to incoming reviews",
      "Track rating trends across locations",
    ],
    workflow: [
      { title: "Trigger", description: "A review request fires automatically after service completion." },
      { title: "Filter", description: "Unhappy customers are routed to private feedback first." },
      { title: "Publish", description: "Happy customers are guided to leave a public review." },
      { title: "Respond", description: "Draft responses are generated for every incoming review." },
    ],
    industries: ["plumbing", "auto-detailers", "restaurants", "cleaning-companies"],
  },
  {
    slug: "sms-automation",
    name: "SMS Automation",
    category: "Customer Experience",
    icon: "MessageCircle",
    tagline: "The channel with the highest open rate, fully automated.",
    description:
      "Cadence sends and responds to text messages for booking, reminders, quotes, and updates — the channel customers actually read, with a 98% open rate.",
    businessValue:
      "SMS consistently outperforms email in open and response rate. Automating two-way texting captures conversions that would otherwise be missed.",
    roiStat: { value: "98%", label: "message open rate" },
    useCases: [
      "Send appointment reminders and confirmations",
      "Follow up on quotes and abandoned bookings",
      "Answer customer questions by text in real time",
      "Notify customers of order or job status changes",
    ],
    workflow: [
      { title: "Trigger", description: "An event — booking, quote, or status change — fires a message." },
      { title: "Personalize", description: "Messages reference the customer's specific context." },
      { title: "Respond", description: "Incoming replies are understood and answered automatically." },
      { title: "Escalate", description: "Complex replies are routed to a human instantly." },
    ],
    industries: ["hvac", "plumbing", "auto-detailers", "cleaning-companies"],
  },
  {
    slug: "email-automation",
    name: "Email Automation",
    category: "Customer Experience",
    icon: "Mail",
    tagline: "Inboxes that answer themselves.",
    description:
      "Cadence drafts and sends replies to common email inquiries, triages incoming messages by intent, and keeps nurture sequences running without manual sends.",
    businessValue:
      "Shared inboxes become a bottleneck as volume grows. Automating triage and response keeps reply times fast without adding support headcount.",
    roiStat: { value: "72%", label: "faster average reply time" },
    useCases: [
      "Auto-respond to common inquiries with accurate answers",
      "Triage and label incoming email by intent",
      "Run automated nurture and re-engagement sequences",
      "Draft replies for agent review on sensitive threads",
    ],
    workflow: [
      { title: "Triage", description: "Incoming email is classified by intent and priority." },
      { title: "Draft", description: "A response is generated using your knowledge base and tone." },
      { title: "Send or review", description: "Routine replies send automatically; sensitive ones await approval." },
      { title: "Nurture", description: "Ongoing sequences keep leads warm automatically." },
    ],
    industries: ["ecommerce", "insurance", "professional-services", "real-estate"],
  },

  // CRM & Business Systems
  {
    slug: "crm-automation",
    name: "CRM Automation",
    category: "CRM & Business Systems",
    icon: "Database",
    tagline: "A CRM that updates itself.",
    description:
      "Cadence keeps your CRM current automatically — logging calls, updating deal stages, enriching contact records, and triggering workflows without manual data entry.",
    businessValue:
      "CRMs are only as valuable as the data inside them. Automating entry improves forecast accuracy and frees reps from the most-hated part of the job.",
    roiStat: { value: "5 hrs", label: "saved per rep weekly" },
    useCases: [
      "Auto-log calls, emails, and meeting notes",
      "Enrich contact and company records automatically",
      "Update deal stages based on activity signals",
      "Trigger workflows when records meet defined criteria",
    ],
    workflow: [
      { title: "Sync", description: "Cadence connects to your CRM and communication tools." },
      { title: "Capture", description: "Every interaction is logged without manual entry." },
      { title: "Enrich", description: "Records are automatically completed with missing data." },
      { title: "Trigger", description: "Workflows fire automatically based on record changes." },
    ],
    industries: ["real-estate", "insurance", "professional-services", "manufacturing"],
  },
  {
    slug: "calendar-automation",
    name: "Calendar Automation",
    category: "CRM & Business Systems",
    icon: "CalendarClock",
    tagline: "Scheduling that respects everyone's time.",
    description:
      "Cadence coordinates meeting scheduling across internal and external calendars, finds optimal times automatically, and handles reschedules without email back-and-forth.",
    businessValue:
      "Manual scheduling costs knowledge workers hours weekly. Automated coordination eliminates the back-and-forth entirely.",
    roiStat: { value: "4 hrs", label: "saved per employee weekly" },
    useCases: [
      "Coordinate multi-party meeting scheduling automatically",
      "Suggest optimal times based on real availability",
      "Handle reschedules and cancellations end-to-end",
      "Sync across multiple calendar systems and time zones",
    ],
    workflow: [
      { title: "Request", description: "A meeting request comes in via email or chat." },
      { title: "Coordinate", description: "Availability is checked across all attendees automatically." },
      { title: "Confirm", description: "An invite is sent once a time is agreed upon." },
      { title: "Adjust", description: "Changes are handled automatically without manual coordination." },
    ],
    industries: ["financial-advisors", "professional-services", "law-firms", "construction"],
  },
  {
    slug: "meeting-notes",
    name: "Meeting Notes",
    category: "CRM & Business Systems",
    icon: "NotebookPen",
    tagline: "Every meeting, summarized and actioned automatically.",
    description:
      "Cadence joins calls, transcribes discussion, and delivers a structured summary with action items pushed directly into your CRM or task manager.",
    businessValue:
      "Manual note-taking splits attention and loses detail. Automated capture ensures nothing falls through the cracks after a call ends.",
    roiStat: { value: "100%", label: "of meetings auto-summarized" },
    useCases: [
      "Transcribe and summarize sales and client calls",
      "Extract action items and owners automatically",
      "Push summaries directly into CRM deal records",
      "Search past meeting history in natural language",
    ],
    workflow: [
      { title: "Join", description: "The assistant joins the call as a silent participant." },
      { title: "Transcribe", description: "Discussion is transcribed and speaker-tagged in real time." },
      { title: "Summarize", description: "Key points and decisions are distilled automatically." },
      { title: "Action", description: "Follow-up tasks are created and assigned instantly." },
    ],
    industries: ["financial-advisors", "law-firms", "professional-services", "real-estate"],
  },
  {
    slug: "api-integrations",
    name: "API Integrations",
    category: "CRM & Business Systems",
    icon: "Plug",
    tagline: "Connect every tool in your stack, reliably.",
    description:
      "Cadence builds and maintains custom integrations between your CRM, calendar, billing, and internal systems so data flows automatically without manual exports.",
    businessValue:
      "Disconnected tools force manual data transfer and create errors. Reliable integrations turn your stack into a single connected system.",
    roiStat: { value: "100%", label: "data consistency across systems" },
    useCases: [
      "Sync leads and customers across CRM and marketing tools",
      "Connect scheduling systems to billing and invoicing",
      "Push data between internal tools and external partners",
      "Build custom webhooks for real-time system triggers",
    ],
    workflow: [
      { title: "Map", description: "We document your current systems and desired data flow." },
      { title: "Build", description: "Custom integrations are developed and tested against your data." },
      { title: "Deploy", description: "Systems begin syncing automatically in real time." },
      { title: "Monitor", description: "Integration health is monitored and alerts on failure." },
    ],
    industries: ["manufacturing", "logistics", "ecommerce", "professional-services"],
  },

  // Documents & Knowledge
  {
    slug: "document-processing",
    name: "Document Processing",
    category: "Documents & Knowledge",
    icon: "FileText",
    tagline: "Turn any document into structured, usable data.",
    description:
      "Cadence extracts and structures data from contracts, forms, and PDFs automatically, feeding it directly into your downstream systems without manual re-keying.",
    businessValue:
      "Manual document handling is slow and error-prone. Automated processing turns unstructured paperwork into a real-time data source.",
    roiStat: { value: "4x", label: "faster document turnaround" },
    useCases: [
      "Extract data from intake forms and applications",
      "Process contracts and flag key terms for review",
      "Digitize paper forms and handwritten documents",
      "Route documents to the correct workflow automatically",
    ],
    workflow: [
      { title: "Capture", description: "Documents are received via upload, email, or scan." },
      { title: "Extract", description: "Key fields and clauses are extracted automatically." },
      { title: "Validate", description: "Extracted data is checked against business rules." },
      { title: "Deliver", description: "Structured data is pushed into your system of record." },
    ],
    industries: ["law-firms", "insurance", "healthcare", "logistics"],
  },
  {
    slug: "pdf-extraction",
    name: "PDF Extraction",
    category: "Documents & Knowledge",
    icon: "FileScan",
    tagline: "Pull structured fields from any PDF, instantly.",
    description:
      "Cadence extracts tables, line items, and key fields from invoices, statements, and reports — even from scanned or inconsistently formatted PDFs.",
    businessValue:
      "PDFs remain the most common format for business documents, yet the hardest to automate. Reliable extraction eliminates manual transcription entirely.",
    roiStat: { value: "99.2%", label: "extraction accuracy" },
    useCases: [
      "Extract line items from vendor invoices",
      "Pull data from bank and financial statements",
      "Digitize reports for downstream analytics",
      "Process shipping and customs documentation",
    ],
    workflow: [
      { title: "Upload", description: "PDFs are received via email, folder, or API." },
      { title: "Parse", description: "Layout-aware models extract tables and fields." },
      { title: "Verify", description: "Low-confidence extractions are flagged for review." },
      { title: "Export", description: "Structured data is delivered to your target system." },
    ],
    industries: ["logistics", "insurance", "manufacturing", "financial-advisors"],
  },
  {
    slug: "ocr",
    name: "OCR",
    category: "Documents & Knowledge",
    icon: "ScanLine",
    tagline: "Convert scans and images into searchable text.",
    description:
      "Cadence applies advanced optical character recognition to scanned documents, handwriting, and images — making them searchable, structured, and usable by downstream automations.",
    businessValue:
      "Paper archives and scanned records lock up valuable information. OCR unlocks that data for search, compliance, and automation.",
    roiStat: { value: "10x", label: "faster archive digitization" },
    useCases: [
      "Digitize physical archives and paper records",
      "Make scanned contracts full-text searchable",
      "Extract data from handwritten forms",
      "Feed downstream document processing pipelines",
    ],
    workflow: [
      { title: "Scan", description: "Physical or image-based documents are ingested." },
      { title: "Recognize", description: "Text and structure are extracted with high accuracy." },
      { title: "Index", description: "Content becomes fully searchable and structured." },
      { title: "Integrate", description: "Output feeds directly into other Cadence workflows." },
    ],
    industries: ["law-firms", "healthcare", "insurance", "manufacturing"],
  },
  {
    slug: "rag-systems",
    name: "RAG Systems",
    category: "Documents & Knowledge",
    icon: "Search",
    tagline: "Answers grounded in your own data, never hallucinated.",
    description:
      "Cadence builds retrieval-augmented generation systems that ground AI responses in your proprietary documents, ensuring accurate, citable answers instead of generic AI guesses.",
    businessValue:
      "Generic AI models don't know your business. RAG systems combine the reasoning of large language models with the accuracy of your verified internal data.",
    roiStat: { value: "94%", label: "answer accuracy vs. source docs" },
    useCases: [
      "Ground customer support answers in product docs",
      "Power internal Q&A over policy and compliance documents",
      "Enable analysts to query proprietary research",
      "Build domain-specific assistants for regulated industries",
    ],
    workflow: [
      { title: "Ingest", description: "Documents are chunked and embedded into a vector index." },
      { title: "Retrieve", description: "Relevant passages are retrieved for each query in real time." },
      { title: "Generate", description: "The model answers using only retrieved, verified context." },
      { title: "Cite", description: "Every answer includes a citation back to the source." },
    ],
    industries: ["law-firms", "healthcare", "financial-advisors", "professional-services"],
  },
  {
    slug: "vector-databases",
    name: "Vector Databases",
    category: "Documents & Knowledge",
    icon: "Boxes",
    tagline: "The infrastructure behind every AI knowledge system.",
    description:
      "Cadence designs and manages the vector database infrastructure that powers semantic search, RAG, and recommendation systems at production scale.",
    businessValue:
      "Search and retrieval quality determines whether an AI system feels magical or useless. Proper vector infrastructure is the foundation of reliable AI applications.",
    roiStat: { value: "<100ms", label: "average retrieval latency" },
    useCases: [
      "Power semantic search across large document sets",
      "Enable similarity-based product or content recommendations",
      "Support multi-tenant RAG applications securely",
      "Scale retrieval infrastructure as data volume grows",
    ],
    workflow: [
      { title: "Architect", description: "We design a schema suited to your data and query patterns." },
      { title: "Embed", description: "Content is converted into vector representations." },
      { title: "Index", description: "Vectors are indexed for fast, accurate retrieval." },
      { title: "Scale", description: "Infrastructure is monitored and scaled with usage." },
    ],
    industries: ["professional-services", "healthcare", "ecommerce", "manufacturing"],
  },

  // Workflow & Platform Automation
  {
    slug: "workflow-automation",
    name: "Workflow Automation",
    category: "Workflow & Platform Automation",
    icon: "Workflow",
    tagline: "Multi-step processes that run themselves.",
    description:
      "Cadence maps your manual, multi-step business processes and automates them end-to-end — connecting tools, applying business logic, and handling exceptions gracefully.",
    businessValue:
      "Every manual handoff between systems is a source of delay and error. End-to-end automation compresses cycle time and removes human bottlenecks.",
    roiStat: { value: "31%", label: "reduction in process cycle time" },
    useCases: [
      "Automate multi-step approval and onboarding processes",
      "Connect disparate tools into a single automated flow",
      "Apply conditional business logic without manual review",
      "Handle exceptions with automatic escalation rules",
    ],
    workflow: [
      { title: "Map", description: "We document the current manual process end-to-end." },
      { title: "Design", description: "The workflow is rebuilt with automation and clear logic." },
      { title: "Automate", description: "Systems are connected and the process runs automatically." },
      { title: "Monitor", description: "Exceptions are flagged and routed for human review." },
    ],
    industries: ["construction", "logistics", "manufacturing", "insurance"],
  },
  {
    slug: "slack-automation",
    name: "Slack Automation",
    category: "Workflow & Platform Automation",
    icon: "Slack",
    tagline: "Turn Slack into an execution layer, not just chat.",
    description:
      "Cadence builds Slack-native bots and workflows that answer questions, trigger approvals, and surface alerts directly where your team already works.",
    businessValue:
      "Context-switching between tools kills productivity. Bringing automation directly into Slack keeps teams in flow.",
    roiStat: { value: "3 hrs", label: "saved per employee weekly" },
    useCases: [
      "Answer internal questions directly in Slack channels",
      "Trigger approvals and notifications automatically",
      "Surface real-time alerts from connected systems",
      "Run standups and status updates without meetings",
    ],
    workflow: [
      { title: "Install", description: "The Cadence app is installed into your workspace." },
      { title: "Configure", description: "Channels, triggers, and permissions are set up." },
      { title: "Automate", description: "Bots respond to questions and run workflows in real time." },
      { title: "Extend", description: "New automations are added as needs evolve." },
    ],
    industries: ["professional-services", "manufacturing", "logistics", "ecommerce"],
  },
  {
    slug: "teams-automation",
    name: "Teams Automation",
    category: "Workflow & Platform Automation",
    icon: "Users",
    tagline: "Automation built for Microsoft Teams environments.",
    description:
      "Cadence brings the same automation capabilities to Microsoft Teams — bots, approvals, and alerts — for organizations standardized on the Microsoft ecosystem.",
    businessValue:
      "Enterprise teams often can't adopt new chat tools. Native Teams automation delivers the same efficiency gains within existing IT policy.",
    roiStat: { value: "3 hrs", label: "saved per employee weekly" },
    useCases: [
      "Answer internal questions inside Teams channels",
      "Automate approvals within existing M365 workflows",
      "Surface alerts from CRM, ERP, or ticketing systems",
      "Integrate with SharePoint and Outlook automatically",
    ],
    workflow: [
      { title: "Provision", description: "The bot is registered within your Microsoft tenant." },
      { title: "Configure", description: "Workflows are mapped to your existing M365 tools." },
      { title: "Automate", description: "Teams becomes the interface for daily automation." },
      { title: "Govern", description: "Access and permissions follow your existing IT policy." },
    ],
    industries: ["manufacturing", "insurance", "financial-advisors", "construction"],
  },
  {
    slug: "custom-gpts",
    name: "Custom GPTs",
    category: "Workflow & Platform Automation",
    icon: "Sparkles",
    tagline: "Purpose-built AI models for a single job.",
    description:
      "Cadence fine-tunes and configures custom GPT-style models scoped to a specific task — support, sales, or internal ops — so responses are accurate, on-brand, and fast.",
    businessValue:
      "General-purpose AI models are unreliable for specialized business tasks. A narrowly scoped custom model performs dramatically better on the job it's built for.",
    roiStat: { value: "2.3x", label: "improvement in response accuracy" },
    useCases: [
      "Build a support GPT trained only on your product",
      "Create a sales GPT that follows your exact playbook",
      "Deploy an internal GPT scoped to HR or IT policy",
      "Package a GPT as a product feature for customers",
    ],
    workflow: [
      { title: "Scope", description: "We define the exact task and guardrails for the model." },
      { title: "Train", description: "The model is configured with your data and examples." },
      { title: "Test", description: "Outputs are evaluated against real scenarios." },
      { title: "Deploy", description: "The GPT ships into your product or internal tools." },
    ],
    industries: ["ecommerce", "professional-services", "healthcare", "manufacturing"],
  },

  // Marketing & Content
  {
    slug: "marketing-automation",
    name: "Marketing Automation",
    category: "Marketing & Content",
    icon: "Megaphone",
    tagline: "Campaigns that run and optimize themselves.",
    description:
      "Cadence automates campaign execution — segmentation, send timing, and follow-up — across email and SMS, continuously optimizing based on engagement data.",
    businessValue:
      "Manual campaign management doesn't scale with list size or channel count. Automation keeps every segment engaged without added marketing headcount.",
    roiStat: { value: "27%", label: "increase in campaign engagement" },
    useCases: [
      "Segment audiences automatically by behavior",
      "Trigger campaigns based on lifecycle events",
      "Optimize send times and content per segment",
      "Report on campaign performance in real time",
    ],
    workflow: [
      { title: "Segment", description: "Audiences are grouped by behavior and lifecycle stage." },
      { title: "Trigger", description: "Campaigns fire automatically based on defined events." },
      { title: "Optimize", description: "Send time and content are tuned using engagement data." },
      { title: "Report", description: "Performance is tracked and surfaced automatically." },
    ],
    industries: ["ecommerce", "real-estate", "restaurants", "professional-services"],
  },
  {
    slug: "content-generation",
    name: "Content Generation",
    category: "Marketing & Content",
    icon: "PenTool",
    tagline: "On-brand content at the speed of your roadmap.",
    description:
      "Cadence generates first-draft blog posts, ad copy, and product descriptions trained on your brand voice, giving marketing teams a running start on every piece of content.",
    businessValue:
      "Content bottlenecks slow down marketing velocity. AI-assisted drafting compresses production time while keeping a human in the loop for quality and accuracy.",
    roiStat: { value: "3x", label: "faster content production" },
    useCases: [
      "Draft blog posts and long-form content",
      "Generate ad copy variations for testing",
      "Write product descriptions at catalog scale",
      "Repurpose long-form content into social formats",
    ],
    workflow: [
      { title: "Brief", description: "Content goals and brand guidelines are defined." },
      { title: "Draft", description: "First-draft content is generated for review." },
      { title: "Refine", description: "A human editor polishes tone and accuracy." },
      { title: "Publish", description: "Approved content is scheduled and distributed." },
    ],
    industries: ["ecommerce", "professional-services", "real-estate", "restaurants"],
  },
  {
    slug: "social-media-automation",
    name: "Social Media Automation",
    category: "Marketing & Content",
    icon: "Share2",
    tagline: "Consistent posting without the daily lift.",
    description:
      "Cadence plans, drafts, and schedules social content across platforms, and can auto-respond to common comments and DMs to keep engagement high.",
    businessValue:
      "Inconsistent posting is one of the biggest drivers of stalled social growth. Automating the pipeline keeps a consistent presence without daily manual work.",
    roiStat: { value: "4x", label: "more consistent posting cadence" },
    useCases: [
      "Plan and schedule a content calendar automatically",
      "Draft platform-specific captions and copy",
      "Auto-respond to common comments and DMs",
      "Report on engagement and growth trends",
    ],
    workflow: [
      { title: "Plan", description: "A content calendar is generated from your themes." },
      { title: "Draft", description: "Platform-specific posts are created automatically." },
      { title: "Schedule", description: "Content is queued and published on schedule." },
      { title: "Engage", description: "Common interactions are handled automatically." },
    ],
    industries: ["restaurants", "auto-detailers", "med-spas", "ecommerce"],
  },

  // Finance & Operations
  {
    slug: "invoice-automation",
    name: "Invoice Automation",
    category: "Finance & Operations",
    icon: "Receipt",
    tagline: "Invoicing and collections without the chasing.",
    description:
      "Cadence generates, sends, and follows up on invoices automatically, matching payments and flagging overdue accounts without manual bookkeeping work.",
    businessValue:
      "Delayed invoicing directly delays cash flow. Automating generation and follow-up shortens days-sales-outstanding significantly.",
    roiStat: { value: "9 days", label: "reduction in DSO" },
    useCases: [
      "Generate invoices automatically from completed jobs",
      "Send automated payment reminders before and after due dates",
      "Match incoming payments to open invoices",
      "Flag overdue accounts for collections follow-up",
    ],
    workflow: [
      { title: "Generate", description: "Invoices are created automatically from job or order data." },
      { title: "Send", description: "Invoices are delivered with a clear payment link." },
      { title: "Remind", description: "Automated reminders follow up before and after due dates." },
      { title: "Reconcile", description: "Payments are matched and reconciled automatically." },
    ],
    industries: ["construction", "hvac", "professional-services", "logistics"],
  },
  {
    slug: "bookkeeping-automation",
    name: "Bookkeeping Automation",
    category: "Finance & Operations",
    icon: "Calculator",
    tagline: "Books that close themselves every month.",
    description:
      "Cadence categorizes transactions, reconciles accounts, and prepares month-end reporting automatically, integrated directly with your accounting software.",
    businessValue:
      "Manual bookkeeping is slow, error-prone, and often delayed until month-end crunch. Automation keeps books continuously accurate and audit-ready.",
    roiStat: { value: "15 hrs", label: "saved per month" },
    useCases: [
      "Categorize transactions automatically by rule and history",
      "Reconcile bank and credit card accounts continuously",
      "Prepare month-end close reporting packages",
      "Flag anomalies and duplicate transactions",
    ],
    workflow: [
      { title: "Connect", description: "Bank feeds and accounting software are connected securely." },
      { title: "Categorize", description: "Transactions are classified automatically using learned rules." },
      { title: "Reconcile", description: "Accounts are matched and discrepancies flagged." },
      { title: "Report", description: "Close-ready reports are generated automatically." },
    ],
    industries: ["professional-services", "construction", "ecommerce", "manufacturing"],
  },
  {
    slug: "reporting",
    name: "Reporting",
    category: "Finance & Operations",
    icon: "FileBarChart",
    tagline: "Every report, generated on schedule, automatically.",
    description:
      "Cadence pulls data from across your systems to generate recurring reports — financial, operational, or client-facing — without a spreadsheet ever being touched manually.",
    businessValue:
      "Recurring reporting consumes hours of analyst time each month. Automating generation frees that time for actual analysis and decision-making.",
    roiStat: { value: "12 hrs", label: "saved per month" },
    useCases: [
      "Generate recurring financial and operational reports",
      "Build client-facing performance reports automatically",
      "Distribute reports on a defined schedule",
      "Standardize reporting formats across teams",
    ],
    workflow: [
      { title: "Connect", description: "Data sources are connected across your tool stack." },
      { title: "Template", description: "Report structure and branding are defined once." },
      { title: "Generate", description: "Reports are populated automatically on schedule." },
      { title: "Distribute", description: "Finished reports are delivered to the right recipients." },
    ],
    industries: ["financial-advisors", "professional-services", "manufacturing", "construction"],
  },
  {
    slug: "analytics",
    name: "Analytics",
    category: "Finance & Operations",
    icon: "BarChart3",
    tagline: "Understand what's actually driving your business.",
    description:
      "Cadence unifies data across marketing, sales, and operations into a single analytics layer, surfacing the metrics that actually explain performance changes.",
    businessValue:
      "Fragmented data across tools makes it impossible to see the full picture. A unified analytics layer turns raw data into clear, actionable decisions.",
    roiStat: { value: "1", label: "source of truth across teams" },
    useCases: [
      "Unify marketing, sales, and product data",
      "Build real-time dashboards for leadership",
      "Identify drivers behind revenue or churn changes",
      "Automate weekly performance digest emails",
    ],
    workflow: [
      { title: "Unify", description: "Data from every system is centralized into one model." },
      { title: "Model", description: "Metrics and definitions are standardized across teams." },
      { title: "Visualize", description: "Dashboards surface trends and anomalies automatically." },
      { title: "Alert", description: "Significant changes trigger automatic notifications." },
    ],
    industries: ["ecommerce", "manufacturing", "logistics", "professional-services"],
  },
  {
    slug: "forecasting",
    name: "Forecasting",
    category: "Finance & Operations",
    icon: "LineChart",
    tagline: "Plan ahead with models, not guesswork.",
    description:
      "Cadence builds demand, revenue, and cash-flow forecasting models trained on your historical data, continuously updated as new data arrives.",
    businessValue:
      "Spreadsheet-based forecasts go stale immediately and rarely account for seasonality or leading indicators. Model-based forecasting improves planning accuracy significantly.",
    roiStat: { value: "23%", label: "improvement in forecast accuracy" },
    useCases: [
      "Forecast demand and inventory needs",
      "Project revenue and cash flow scenarios",
      "Model the impact of pricing or staffing changes",
      "Flag forecast deviations as they emerge",
    ],
    workflow: [
      { title: "Model", description: "Historical data trains a forecasting model specific to your business." },
      { title: "Predict", description: "Forward-looking projections are generated automatically." },
      { title: "Monitor", description: "Actuals are compared against forecast continuously." },
      { title: "Refine", description: "The model retrains as new data improves accuracy." },
    ],
    industries: ["manufacturing", "ecommerce", "logistics", "construction"],
  },
  {
    slug: "business-intelligence",
    name: "Business Intelligence",
    category: "Finance & Operations",
    icon: "PieChart",
    tagline: "Executive-ready insight, always current.",
    description:
      "Cadence builds BI systems that give leadership a live view of the metrics that matter, replacing static slide decks with always-current dashboards.",
    businessValue:
      "Leadership decisions are often made on outdated data. Live BI systems keep every stakeholder aligned on the same current numbers.",
    roiStat: { value: "100%", label: "real-time visibility across teams" },
    useCases: [
      "Build executive dashboards across departments",
      "Standardize KPI definitions company-wide",
      "Replace manual board-deck data pulls",
      "Give managers self-serve access to their metrics",
    ],
    workflow: [
      { title: "Define", description: "Key metrics and definitions are agreed upon company-wide." },
      { title: "Connect", description: "Source systems are connected into the BI layer." },
      { title: "Build", description: "Dashboards are built for each stakeholder group." },
      { title: "Maintain", description: "Dashboards update automatically as data flows in." },
    ],
    industries: ["manufacturing", "logistics", "ecommerce", "financial-advisors"],
  },
  {
    slug: "ai-dashboards",
    name: "AI Dashboards",
    category: "Finance & Operations",
    icon: "LayoutDashboard",
    tagline: "Ask your data questions in plain English.",
    description:
      "Cadence builds conversational dashboards where any team member can ask a question in natural language and get an accurate chart or answer, no SQL required.",
    businessValue:
      "Most employees can't write queries, so they wait on analysts for simple answers. Conversational dashboards make data self-service for everyone.",
    roiStat: { value: "80%", label: "fewer ad hoc analyst requests" },
    useCases: [
      "Let managers ask questions about their team's metrics",
      "Generate charts on demand without a BI ticket",
      "Summarize trends in plain language automatically",
      "Reduce analyst time spent on repetitive requests",
    ],
    workflow: [
      { title: "Connect", description: "The dashboard connects to your data warehouse securely." },
      { title: "Ask", description: "Users type a question in plain language." },
      { title: "Generate", description: "A chart or answer is generated automatically." },
      { title: "Verify", description: "Underlying data and logic are always visible for trust." },
    ],
    industries: ["ecommerce", "manufacturing", "financial-advisors", "logistics"],
  },

  // Advanced AI Systems
  {
    slug: "custom-ai-applications",
    name: "Custom AI Applications",
    category: "Advanced AI Systems",
    icon: "AppWindow",
    tagline: "A bespoke AI product built around your workflow.",
    description:
      "When off-the-shelf tools don't fit, Cadence designs and ships a fully custom AI application — internal tool or customer-facing product — built for your exact process.",
    businessValue:
      "Unique processes deserve purpose-built software. Custom AI applications deliver a competitive advantage that generic tools can't replicate.",
    roiStat: { value: "100%", label: "fit to your exact workflow" },
    useCases: [
      "Build an internal tool for a unique operational process",
      "Ship an AI-powered feature inside your own product",
      "Create a client-facing portal powered by automation",
      "Replace a costly, ill-fitting legacy system",
    ],
    workflow: [
      { title: "Discover", description: "We map requirements, edge cases, and success metrics." },
      { title: "Design", description: "Architecture and interface are designed around your workflow." },
      { title: "Build", description: "The application is built, tested, and iterated with your team." },
      { title: "Operate", description: "We support and evolve the system post-launch." },
    ],
    industries: ["manufacturing", "logistics", "healthcare", "professional-services"],
  },
  {
    slug: "computer-vision",
    name: "Computer Vision",
    category: "Advanced AI Systems",
    icon: "Camera",
    tagline: "See and act on visual data at scale.",
    description:
      "Cadence builds computer vision systems for quality inspection, inventory counting, and safety monitoring — processing images and video far faster than manual review.",
    businessValue:
      "Manual visual inspection doesn't scale and is inconsistent between reviewers. Computer vision applies a consistent standard at a fraction of the cost.",
    roiStat: { value: "17%", label: "reduction in defect escape rate" },
    useCases: [
      "Automate quality inspection on production lines",
      "Count and track inventory from camera feeds",
      "Monitor safety compliance on job sites",
      "Detect anomalies in visual data at scale",
    ],
    workflow: [
      { title: "Capture", description: "Cameras or existing footage feed the vision system." },
      { title: "Detect", description: "Models identify defects, objects, or conditions of interest." },
      { title: "Alert", description: "Exceptions trigger real-time alerts to the right team." },
      { title: "Improve", description: "Models are retrained as new data is captured." },
    ],
    industries: ["manufacturing", "construction", "logistics", "ecommerce"],
  },
  {
    slug: "agentic-ai",
    name: "Agentic AI",
    category: "Advanced AI Systems",
    icon: "Cpu",
    tagline: "AI that plans, acts, and completes tasks autonomously.",
    description:
      "Cadence builds agentic systems that can independently break down a goal into steps, use tools and APIs, and complete multi-step tasks with minimal human input.",
    businessValue:
      "Traditional automation only handles predefined paths. Agentic AI adapts to novel situations, handling a far broader range of tasks reliably.",
    roiStat: { value: "10x", label: "broader task coverage than rules-based automation" },
    useCases: [
      "Autonomously research and compile reports",
      "Complete multi-step processes across several tools",
      "Handle novel customer requests outside a script",
      "Continuously monitor systems and take corrective action",
    ],
    workflow: [
      { title: "Define", description: "Goals, tools, and guardrails are scoped clearly." },
      { title: "Plan", description: "The agent breaks the goal into an executable plan." },
      { title: "Act", description: "It uses connected tools and APIs to complete each step." },
      { title: "Review", description: "Outcomes are logged and available for human oversight." },
    ],
    industries: ["professional-services", "ecommerce", "logistics", "financial-advisors"],
  },
  {
    slug: "multi-agent-systems",
    name: "Multi-Agent Systems",
    category: "Advanced AI Systems",
    icon: "Network",
    tagline: "A coordinated team of specialized AI agents.",
    description:
      "Cadence architects multi-agent systems where specialized agents — research, drafting, validation, execution — collaborate to complete complex business processes end-to-end.",
    businessValue:
      "Complex workflows often exceed what a single AI agent can reliably handle. Coordinated multi-agent systems divide work the way a specialized team would.",
    roiStat: { value: "45%", label: "faster complex process completion" },
    useCases: [
      "Coordinate research, drafting, and review agents for content",
      "Run end-to-end lead-to-close sales processes autonomously",
      "Orchestrate document review, extraction, and filing",
      "Manage multi-step operational workflows with checks and balances",
    ],
    workflow: [
      { title: "Architect", description: "Agent roles and responsibilities are defined." },
      { title: "Coordinate", description: "A orchestration layer manages handoffs between agents." },
      { title: "Execute", description: "Agents complete their specialized part of the process." },
      { title: "Validate", description: "A review agent checks output quality before completion." },
    ],
    industries: ["professional-services", "manufacturing", "logistics", "law-firms"],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory) {
  return services.filter((service) => service.category === category);
}

export function getServicesForIndustry(industrySlug: string) {
  return services.filter((service) => service.industries.includes(industrySlug));
}

export function getRelatedServices(slug: string, count = 3) {
  const service = getServiceBySlug(slug);
  if (!service) return [];
  return services
    .filter((s) => s.slug !== slug && s.category === service.category)
    .slice(0, count);
}
