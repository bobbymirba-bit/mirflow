import { Globe2, Megaphone, Workflow, type LucideIcon } from "lucide-react";

/** The three connection lines already on the homepage. */
export const flowStages: { title: string; detail: string; icon: LucideIcon }[] = [
  { title: "Show up", detail: "Website and social content", icon: Globe2 },
  { title: "Reach the right people", detail: "LinkedIn outreach, paid ads, and AI creative", icon: Megaphone },
  { title: "Follow through", detail: "AI receptionist, lead routing, and follow-up", icon: Workflow },
];

/** Channel names already used on the services page. */
export const managedChannels = [
  "Websites",
  "Instagram",
  "TikTok",
  "LinkedIn",
  "Facebook",
  "Google Maps",
  "Paid ads",
  "Email",
  "SMS",
  "AI voice receptionist",
];
