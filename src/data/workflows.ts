export const workflows = [
  { id: "finance", number: "01", title: "Invoice & finance operations", pain: "Invoices arrive in an inbox. Your team becomes the integration.", solution: "Extract key fields, check for missing information, and prepare records for approval in your existing finance tools.", control: "Your team approves every payment.", metric: "Minutes per invoice · exception rate" },
  { id: "documents", number: "02", title: "Client document intake", pain: "The work cannot start until someone chases the paperwork.", solution: "Organize incoming documents, flag missing items, and draft follow-ups for accounting and professional services teams.", control: "Sensitive documents stay within approved systems.", metric: "Time to complete intake · follow-up effort" },
  { id: "reporting", number: "03", title: "Reporting & operational handoffs", pain: "Every report starts with another round of copying and pasting.", solution: "Bring approved sources together, prepare a draft summary, and route exceptions to the person who can resolve them.", control: "A named owner reviews the final output.", metric: "Report preparation time · corrections required" },
];

export const assessmentDeliverables = [
  ["A map of the work", "The steps, systems, handoffs, and bottleneck in one workflow."],
  ["A practical business case", "A baseline and a way to measure time saved, quality, and operating cost."],
  ["Clear boundaries", "What AI can handle, what needs approval, and what should stay manual."],
  ["A scoped first project", "A build, buy, or skip recommendation with dependencies and next steps."],
];
