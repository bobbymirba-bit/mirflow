export type CapabilitySlug =
  | "ai-strategy"
  | "ai-automation"
  | "ai-security"
  | "ai-tax"
  | "ai-product-leadership";

export type Capability = {
  slug: CapabilitySlug;
  /** Short label used in navigation and cards. */
  label: string;
  /** Full service name used in page headings and structured data. */
  name: string;
  icon: string;
  headline: string;
  /** One or two sentences for capability cards. */
  summary: string;
  /** Hero paragraph on the capability page. */
  intro: string;
  metaTitle: string;
  metaDescription: string;
  offerings: { title: string; description: string }[];
  examples?: { heading: string; items: string[] };
  process: { title: string; description: string }[];
  deliverables: string[];
  idealFor: string[];
  /** Scope note for services that support, but do not replace, professional review. */
  guardrail?: { title: string; body: string };
  faqs: { question: string; answer: string }[];
  cta: { title: string; description: string };
};

export const capabilities: Capability[] = [
  {
    slug: "ai-strategy",
    label: "AI Strategy",
    name: "AI Strategy & Implementation",
    icon: "Compass",
    headline: "Turn AI ambition into a plan your team can fund and deliver.",
    summary:
      "Readiness assessments, prioritized use cases, and roadmaps that account for your data, systems, and risk. We also lead the implementation.",
    intro:
      "Most AI initiatives stall somewhere between the pilot and production. We help leadership teams decide where AI should create value and what it will take to get there. Then we help them deliver it without creating new operational or data risk.",
    metaTitle: "AI Strategy, Roadmaps & Copilot Implementation",
    metaDescription:
      "AI readiness assessments, use-case prioritization, AI roadmaps, copilot rollout, and implementation leadership for finance-heavy and operations-driven businesses.",
    offerings: [
      {
        title: "AI readiness assessments",
        description:
          "A structured review of your workflows, data, systems, skills, and governance. It shows where AI can be deployed now and what needs to change first.",
      },
      {
        title: "Use-case prioritization",
        description:
          "We score candidate use cases on value, feasibility, data sensitivity, and risk, so investment goes to the ones most likely to pay back.",
      },
      {
        title: "AI roadmaps",
        description:
          "A sequenced plan with owners, dependencies, budget ranges, and decision points. It's built for a leadership team to act on, not as a slide of possibilities.",
      },
      {
        title: "Data and systems planning",
        description:
          "Practical guidance on the data access, integrations, and platform choices each use case needs, including where sensitive data should and should not flow.",
      },
      {
        title: "Copilot evaluation and rollout",
        description:
          "Evaluate, pilot, and roll out enterprise copilots and assistants with clear usage policies, access boundaries, and adoption measures.",
      },
      {
        title: "Implementation leadership",
        description:
          "Hands-on leadership through build and rollout: vendor selection, delivery oversight, change management, and measuring results against the business case.",
      },
    ],
    process: [
      {
        title: "Discover",
        description:
          "Interviews with leadership and process owners, plus a review of current systems, data, and AI usage, including informal tools already in use.",
      },
      {
        title: "Assess",
        description:
          "Readiness scoring across data, technology, people, and governance, with the gaps that would block deployment made explicit.",
      },
      {
        title: "Prioritize",
        description:
          "A ranked use-case portfolio weighed on value, effort, and risk, agreed with the people who will own the outcomes.",
      },
      {
        title: "Plan",
        description:
          "A phased roadmap with budget ranges, success metrics, and the controls each phase needs before it goes live.",
      },
      {
        title: "Lead delivery",
        description:
          "We stay involved through implementation so the plan survives contact with real systems, vendors, and teams.",
      },
    ],
    deliverables: [
      "AI readiness scorecard",
      "Prioritized use-case portfolio",
      "Phased roadmap with budget ranges",
      "Data and integration requirements",
      "Risk and governance considerations per use case",
      "Success metrics and a review cadence",
    ],
    idealFor: [
      "Leadership teams being asked for an AI plan who want one they can defend",
      "Finance and operations leaders evaluating copilots and automation vendors",
      "Organizations with scattered pilots that have not reached production",
    ],
    faqs: [
      {
        question: "How long does an AI readiness assessment take?",
        answer:
          "Scope depends on the size of the organization and the number of functions involved. A focused assessment of one or two functions usually takes a few weeks. We confirm the timeline and deliverables in writing before work begins.",
      },
      {
        question: "Are you tied to a particular AI vendor or platform?",
        answer:
          "No. Our recommendations are vendor-neutral. We'll recommend the tools you already license when they fit, and say so plainly when they don't.",
      },
      {
        question: "Do you only advise, or do you also implement?",
        answer:
          "Both. Many clients start with strategy and continue with Mirflow for automation, security, or product leadership, so the plan and the delivery stay connected.",
      },
    ],
    cta: {
      title: "Start with a clear view of where AI fits.",
      description:
        "An AI Assessment gives your leadership team a prioritized view of opportunities, readiness gaps, and the first steps worth funding.",
    },
  },
  {
    slug: "ai-automation",
    label: "AI Automation",
    name: "AI Automation for Business Workflows",
    icon: "Workflow",
    headline: "Automate the work that slows finance and operations teams down.",
    summary:
      "Workflow automation, AI agents, and copilots that connect to the systems you already run, with human approval wherever judgment matters.",
    intro:
      "We design and build automation around real processes: intake, extraction, reconciliation, routing, follow-up, and reporting. Each workflow has a clear owner, exception handling, and review steps, so your team stays in control of the outcome.",
    metaTitle: "AI Workflow Automation, Agents & Copilots",
    metaDescription:
      "AI workflow automation, agents, and copilots for finance and operations teams, with document extraction, human-in-the-loop approvals, and integrations with your existing systems.",
    offerings: [
      {
        title: "Workflow automation",
        description:
          "End-to-end automation of repeatable processes, designed around how work actually moves through your team, including the exceptions.",
      },
      {
        title: "AI agents and copilots",
        description:
          "Task-specific agents and internal assistants that can look up, draft, reconcile, and route work within clearly defined permissions.",
      },
      {
        title: "Finance and operations automation",
        description:
          "Support for accounts payable and receivable, close, vendor management, order operations, and reporting, so the team spends less time re-keying data.",
      },
      {
        title: "Document and data extraction",
        description:
          "Structured extraction from invoices, contracts, statements, forms, and email, with confidence scoring and validation against source systems.",
      },
      {
        title: "Human-in-the-loop approvals",
        description:
          "Review queues, approval thresholds, and escalation rules, so people make the decisions that carry financial, legal, or customer risk.",
      },
      {
        title: "Integrations with existing systems",
        description:
          "Connections to your ERP, accounting, CRM, document storage, and collaboration tools using their supported APIs, so there's no rip-and-replace.",
      },
    ],
    examples: {
      heading: "Workflows we commonly automate",
      items: [
        "Invoice intake, data capture, and coding suggestions for review",
        "Vendor onboarding and document collection",
        "Month-end close checklists and draft variance commentary",
        "Order, billing, and customer exception handling",
        "Policy and contract Q&A over internal documents",
        "Recurring report assembly from ERP, CRM, and spreadsheet data",
      ],
    },
    process: [
      {
        title: "Map",
        description:
          "Document the current workflow, volumes, systems, exceptions, and who owns each decision.",
      },
      {
        title: "Design",
        description:
          "Define what the system automates and what it hands to people, plus the data and access each step needs.",
      },
      {
        title: "Build",
        description:
          "Configure models, prompts, integrations, and validation rules against representative data in a controlled environment.",
      },
      {
        title: "Pilot",
        description:
          "Run alongside the existing process with human review on every output, measuring accuracy and time saved.",
      },
      {
        title: "Scale and monitor",
        description:
          "Expand coverage as results hold up, with ongoing monitoring, logging, and a clear path to roll back.",
      },
    ],
    deliverables: [
      "Current-state and target-state workflow maps",
      "Automation design with review and approval points",
      "Working, integrated automation in your environment",
      "Exception handling and escalation runbook",
      "Accuracy, volume, and time-saved reporting",
      "Handover documentation and admin training",
    ],
    idealFor: [
      "Finance teams handling high volumes of invoices, statements, or reconciliations",
      "Operations teams stuck re-keying data between systems",
      "Leaders who want automation with audit trails, not shadow AI tools",
    ],
    faqs: [
      {
        question: "Will automation replace our team's judgment?",
        answer:
          "No. We automate the repetitive work around a decision, like gathering, extracting, checking, and drafting, and route the decision itself to the right person. Approval thresholds are set by you.",
      },
      {
        question: "What happens when the AI is not confident?",
        answer:
          "Low-confidence results and anything outside defined rules are routed to a review queue with context attached, instead of being processed automatically.",
      },
      {
        question: "Do we need to change our core systems?",
        answer:
          "Usually not. We integrate with the ERP, accounting, CRM, and document tools you already use through their supported interfaces.",
      },
    ],
    cta: {
      title: "Find the workflow worth automating first.",
      description:
        "We'll review your highest-volume processes and identify where automation can save time without adding risk.",
    },
  },
  {
    slug: "ai-security",
    label: "AI Security",
    name: "AI Security, Governance & Risk",
    icon: "ShieldCheck",
    headline: "Adopt AI without losing control of your data, access, or accountability.",
    summary:
      "Governance, privacy, access control, and risk assessments that make AI safer to deploy and easier to explain to auditors, customers, and your board.",
    intro:
      "AI changes how data moves through a business. Employees paste sensitive information into public tools, agents act with broad permissions, and vendors train on data they shouldn't keep. We help you put practical controls in place so AI adoption can move forward with clear accountability.",
    metaTitle: "AI Security, Governance, Privacy & Risk Management",
    metaDescription:
      "AI governance, privacy and data protection, access control, prompt-injection and data-leak protection, vendor risk assessments, and audit readiness for businesses adopting AI.",
    offerings: [
      {
        title: "AI governance",
        description:
          "Acceptable-use policies, decision rights, use-case review processes, and an AI inventory, sized for your organization rather than copied from a template.",
      },
      {
        title: "Privacy and data protection",
        description:
          "Data classification, flow mapping, and retention rules for AI systems, designed to keep sensitive financial, customer, and employee data where it belongs.",
      },
      {
        title: "Access control and identity",
        description:
          "Least-privilege access for users, agents, and integrations, tied to your identity provider and reviewed on a schedule.",
      },
      {
        title: "Prompt-injection and data-leak protection",
        description:
          "Input and output controls, tool permission limits, and testing designed to reduce the risk of manipulated prompts and unintended data exposure.",
      },
      {
        title: "Model and vendor risk assessments",
        description:
          "Structured review of AI vendors and models: data handling, training use, sub-processors, security posture, and contractual terms.",
      },
      {
        title: "Monitoring, auditability, and compliance readiness",
        description:
          "Logging, review trails, and evidence collection that help you answer how an AI-assisted outcome was produced and who approved it.",
      },
    ],
    process: [
      {
        title: "Inventory",
        description:
          "Identify the AI tools, models, agents, and vendors in use, both sanctioned and informal, and what data each one touches.",
      },
      {
        title: "Assess risk",
        description:
          "Evaluate each use against data sensitivity, access, vendor terms, and business impact to find the gaps that matter most.",
      },
      {
        title: "Define controls",
        description:
          "Agree on policies, technical controls, and review steps that match your risk tolerance and regulatory context.",
      },
      {
        title: "Implement",
        description:
          "Configure access, logging, data protections, and guardrails with your IT and security teams.",
      },
      {
        title: "Monitor",
        description:
          "Ongoing review of usage, incidents, and new tools, so governance keeps pace as adoption grows.",
      },
    ],
    deliverables: [
      "AI inventory and data-flow map",
      "AI acceptable-use policy and governance model",
      "Risk register with prioritized remediation",
      "Vendor and model assessment reports",
      "Access, logging, and guardrail configuration",
      "Control mapping to support audit preparation",
    ],
    idealFor: [
      "Companies handling financial, customer, or employee data in AI workflows",
      "Security and IT leaders asked to enable AI without a governance model in place",
      "Teams preparing for customer security reviews, audits, or board questions about AI",
    ],
    guardrail: {
      title: "What this work does, and doesn't, do",
      body: "Our security and governance work is designed to reduce risk and help you prepare for audits, customer reviews, and regulatory expectations. It doesn't replace legal counsel, and Mirflow doesn't certify compliance. Where frameworks such as the NIST AI Risk Management Framework, ISO/IEC 42001, SOC 2, GDPR, or CCPA apply, we help you map controls and gather evidence for review by your auditors and legal advisors.",
    },
    faqs: [
      {
        question: "Can you guarantee our AI systems are secure or compliant?",
        answer:
          "No responsible provider can guarantee that. We help you reduce risk with practical controls, testing, and monitoring, and we help you prepare documentation and evidence for your auditors and legal advisors, who make compliance determinations.",
      },
      {
        question: "Do you work with our existing security team?",
        answer:
          "Yes. We work alongside your IT, security, legal, and compliance teams and fit into your existing identity, logging, and risk processes rather than creating parallel ones.",
      },
      {
        question: "We already use AI tools informally. Where should we start?",
        answer:
          "Start with an inventory. Knowing which tools are in use and what data they touch is the fastest way to find your largest risks and set sensible policy.",
      },
    ],
    cta: {
      title: "Know where AI touches your sensitive data.",
      description:
        "An AI Assessment includes a first look at your AI usage, data exposure, and the governance steps that matter most.",
    },
  },
  {
    slug: "ai-tax",
    label: "AI Tax",
    name: "AI for Tax Operations",
    icon: "Landmark",
    headline: "Give tax teams more time for judgment and less for paperwork.",
    summary:
      "AI-assisted document processing, research support, and indirect tax workflows, designed so qualified professionals review the decisions that matter.",
    intro:
      "Tax work is document-heavy, deadline-driven, and unforgiving of errors, which makes it a strong fit for carefully designed AI. We help tax teams and firms automate collection, extraction, classification, and preparation work. Qualified professionals stay responsible for every determination.",
    metaTitle: "AI for Tax Operations & Tax Workflow Automation",
    metaDescription:
      "AI-powered tax document processing, research assistance, sales tax, VAT and GST workflow support, tax data classification, and audit preparation, with human review for high-risk decisions.",
    offerings: [
      {
        title: "Tax document processing",
        description:
          "Collect, sort, and extract data from returns, forms, statements, invoices, and certificates, with validation checks and source links for reviewers.",
      },
      {
        title: "Tax research assistance",
        description:
          "Research assistants that search and summarize sources with citations, helping professionals find relevant material faster. Professionals still verify every conclusion.",
      },
      {
        title: "Sales tax, VAT, and GST workflow support",
        description:
          "Help with exemption certificate management, transaction review, nexus and registration tracking, and preparing data for filing in your tax engine.",
      },
      {
        title: "Tax data classification",
        description:
          "Suggested classification of transactions, products, and accounts against your tax mapping, with confidence scores and reviewer sign-off.",
      },
      {
        title: "Reporting and audit preparation",
        description:
          "Assemble workpapers, reconciliations, and supporting documentation into organized, traceable packages that help prepare for review and audit.",
      },
      {
        title: "Human review for high-risk tax decisions",
        description:
          "Thresholds and review queues route uncertain, high-value, or judgment-based items to qualified professionals before anything is filed or relied on.",
      },
    ],
    examples: {
      heading: "Where tax teams typically start",
      items: [
        "Organizer and source-document intake during busy season",
        "Exemption and resale certificate collection and validation",
        "Transaction tax-code review before filing",
        "Notice and correspondence triage",
        "Workpaper assembly and tie-out support",
        "Internal research Q&A over approved sources",
      ],
    },
    process: [
      {
        title: "Review the workflow",
        description:
          "Walk through current tax processes, systems, volumes, deadlines, and where errors or delays usually occur.",
      },
      {
        title: "Set review rules",
        description:
          "Agree with your tax leaders on what AI may assist with and the thresholds that always require professional review.",
      },
      {
        title: "Build and validate",
        description:
          "Configure extraction, classification, and research tools, and test them against historical, already-reviewed data.",
      },
      {
        title: "Pilot with review",
        description:
          "Run in parallel with your existing process during a defined period, with every output reviewed and measured.",
      },
      {
        title: "Operate",
        description:
          "Expand to more workflows as accuracy holds, with logging and documentation to support internal and external review.",
      },
    ],
    deliverables: [
      "Tax workflow assessment and automation plan",
      "Document intake and extraction pipeline",
      "Classification models aligned to your tax mapping",
      "Review queues and approval thresholds",
      "Audit trail and supporting-document packaging",
      "Accuracy and cycle-time reporting",
    ],
    idealFor: [
      "In-house tax departments at multi-entity or multi-jurisdiction businesses",
      "Accounting and tax firms managing seasonal document volume",
      "Finance teams handling sales tax, VAT, or GST with limited headcount",
    ],
    guardrail: {
      title: "Professional review stays in charge",
      body: "Mirflow is a technology and operations partner, not a CPA firm, law firm, or tax advisor. Our systems are designed to support tax professionals. They don't provide tax, legal, or accounting advice, and they don't replace professional judgment. Tax positions, determinations, and filings remain the responsibility of your team and your advisors.",
    },
    faqs: [
      {
        question: "Does Mirflow give tax advice or prepare returns?",
        answer:
          "No. We build and operate systems that help your tax professionals work faster and more consistently. Determinations, positions, and filings remain with your team and advisors.",
      },
      {
        question: "How do you handle confidential taxpayer data?",
        answer:
          "We design each deployment around your data-handling requirements, with scoped access, defined retention, logging, and approved vendors. Your team reviews and approves the data flows before anything goes live.",
      },
      {
        question: "Can this work with our existing tax software?",
        answer:
          "Generally, yes. We aim to prepare cleaner, better-organized data for the tax engines and preparation tools you already use, not replace them.",
      },
    ],
    cta: {
      title: "Reduce the manual load on your tax team.",
      description:
        "We'll look at your tax workflows and point out where AI can help, along with where professional review should stay firmly in place.",
    },
  },
  {
    slug: "ai-product-leadership",
    label: "AI Product Leadership",
    name: "AI Product Leadership & Fractional CPO",
    icon: "Layers",
    headline: "Senior product leadership for companies building with AI.",
    summary:
      "Fractional Chief Product Officer support to set AI product strategy, validate demand, and build a product organization that ships.",
    intro:
      "Adding AI to a product is easy to demo and hard to get right. It raises new questions about value, accuracy, cost, trust, and differentiation. We provide experienced product leadership to help you decide what to build, prove it matters to customers, and set up your team to deliver it.",
    metaTitle: "Fractional CPO & AI Product Leadership",
    metaDescription:
      "Fractional Chief Product Officer services, AI product strategy, product discovery and roadmaps, customer validation, AI feature design, and product operating models.",
    offerings: [
      {
        title: "Fractional Chief Product Officer",
        description:
          "Part-time executive product leadership: setting direction, aligning stakeholders, and coaching the team, without a full-time executive hire.",
      },
      {
        title: "AI product strategy",
        description:
          "Where AI creates durable value in your product, how it affects pricing and positioning, and what not to build.",
      },
      {
        title: "Product discovery and roadmap development",
        description:
          "Structured discovery that turns customer problems and business goals into a focused, evidence-based roadmap.",
      },
      {
        title: "Customer and market validation",
        description:
          "Interviews, prototypes, and experiments that test demand and willingness to pay before significant engineering investment.",
      },
      {
        title: "AI feature design",
        description:
          "Design for accuracy, transparency, and human control: how users review, correct, and trust AI output inside your product.",
      },
      {
        title: "Product operating models and delivery leadership",
        description:
          "Team structure, rituals, metrics, and product-engineering collaboration that help good strategy turn into shipped product.",
      },
    ],
    examples: {
      heading: "Common engagement models",
      items: [
        "Fractional CPO, typically one to three days per week",
        "Focused AI product strategy sprint",
        "Interim product leadership through an executive hire",
        "Discovery and validation for a new AI product line",
      ],
    },
    process: [
      {
        title: "Diagnose",
        description:
          "Assess product strategy, roadmap, team, and customer evidence to find the constraints that matter most.",
      },
      {
        title: "Align",
        description:
          "Agree on product goals, priorities, and decision rights with founders, executives, and the board.",
      },
      {
        title: "Validate",
        description:
          "Test the riskiest assumptions with customers before committing significant build capacity.",
      },
      {
        title: "Lead",
        description:
          "Guide roadmap, design, and delivery decisions week to week alongside your team.",
      },
      {
        title: "Build capability",
        description:
          "Hire, coach, and set up the operating model so product leadership lasts beyond the engagement.",
      },
    ],
    deliverables: [
      "Product strategy and AI opportunity assessment",
      "Validated, prioritized roadmap",
      "Customer research and validation findings",
      "AI feature specifications and design principles",
      "Product operating model and metrics",
      "Hiring plan and support for product leadership roles",
    ],
    idealFor: [
      "Software and data companies adding AI to an existing product",
      "Founders and CEOs who need senior product leadership before a full-time CPO",
      "Product teams with strong engineering but an unclear AI roadmap",
    ],
    faqs: [
      {
        question: "What does a fractional CPO actually do?",
        answer:
          "A fractional CPO provides the product leadership a full-time executive would: setting strategy, owning the roadmap, aligning stakeholders, and developing the team. The time commitment is matched to your stage.",
      },
      {
        question: "How long do engagements usually last?",
        answer:
          "Fractional engagements often run for several months, with regular checkpoints. Strategy sprints are shorter and end with a defined set of deliverables.",
      },
      {
        question: "Can you help us hire a full-time product leader?",
        answer:
          "Yes. Many engagements include defining the role, supporting the search, and handing over to the permanent hire.",
      },
    ],
    cta: {
      title: "Get experienced product leadership for your AI roadmap.",
      description:
        "Tell us where your product stands. We'll recommend the right level of support, from a focused sprint to fractional CPO leadership.",
    },
  },
];

export function getCapability(slug: CapabilitySlug): Capability {
  const capability = capabilities.find((item) => item.slug === slug);
  if (!capability) throw new Error(`Unknown capability: ${slug}`);
  return capability;
}
