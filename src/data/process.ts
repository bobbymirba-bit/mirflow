export type ProcessStep = {
  step: number;
  title: string;
  body: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Audit & Blueprint",
    body: "We go through your current site, funnel, and channels and identify exactly where leads and revenue are leaking.",
  },
  {
    step: 2,
    title: "Full-Stack Deployment",
    body: "We rebuild your site, launch your campaigns, and wire up your AI voice agent and CRM — the full system, not one piece at a time.",
  },
  {
    step: 3,
    title: "Autopilot Growth",
    body: "You run the business. You review leads, calls, and revenue from your phone, and we keep the engine tuned.",
  },
];
