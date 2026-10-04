export type Threat = {
  slug: string;
  icon: string;
  name: string;
  what: string;
  warningSigns: string[];
  whatToDo: string;
  guideSlug: string;
};

export const threats: Threat[] = [
  {
    slug: "voice-clones",
    icon: "PhoneCall",
    name: "Voice-clone calls",
    what: "Scammers can copy someone's voice from a short clip posted online, then call pretending to be a grandchild, child, or boss who needs money right away.",
    warningSigns: [
      "An emergency that needs money now",
      "A request to keep it secret",
      "Payment by gift card, wire transfer, crypto, or a courier picking up cash",
    ],
    whatToDo: "Hang up and call the person back on a number you already know. Ask for your family safe word.",
    guideSlug: "how-to-spot-a-voice-clone-call",
  },
  {
    slug: "deepfakes",
    icon: "ScanFace",
    name: "Deepfake videos and photos",
    what: "AI can make convincing fake videos of real people, including celebrities, officials, or your own family, often to sell investments or ask for money.",
    warningSigns: [
      "A famous person promoting an investment or giveaway",
      "A video call where the person avoids normal questions",
      "Pressure to act before you can check",
    ],
    whatToDo: "Focus on what you're being asked to do, not how real it looks. Check through official channels before acting.",
    guideSlug: "deepfake-checklist",
  },
  {
    slug: "fake-ai-apps",
    icon: "Smartphone",
    name: "Fake AI apps",
    what: "Copycat apps and websites borrow the names of popular AI tools to collect your personal information, charge hidden fees, or install harmful software.",
    warningSigns: [
      "An app from an unfamiliar developer using a well-known name",
      "Requests for permissions it doesn't need",
      "Ads promising guaranteed money from AI",
    ],
    whatToDo: "Download apps only from the official app store page linked from the company's own website.",
    guideSlug: "ai-app-privacy-settings",
  },
];

export const sessionTypes = [
  {
    icon: "ShieldCheck",
    title: "Secure your phone",
    description:
      "Lock screen, updates, two-step verification, and spam call settings, set up together on your own device.",
  },
  {
    icon: "Sparkles",
    title: "Use AI tools safely",
    description:
      "Set up an AI assistant you'll actually use, with privacy settings checked and clear rules for what never to share.",
  },
  {
    icon: "Users",
    title: "Family scam plan",
    description:
      "Choose a safe word, agree on who to call, and make a simple plan your parents or kids can follow under pressure.",
  },
];

export const sessionSteps = [
  {
    title: "Book a time",
    description: "Pick a session and a time that suits you. Sessions are by video, so you can join from anywhere in the U.S.",
  },
  {
    title: "Tell us what you need",
    description: "A few short questions about your devices and worries. We never ask for passwords or account numbers.",
  },
  {
    title: "We do it together",
    description: "You share your screen and make every change yourself while we guide you. We never take control of your device.",
  },
  {
    title: "Keep a written plan",
    description: "You get a plain-English summary of what we set up and what to do if something suspicious happens.",
  },
];

/**
 * Starting prices are assumptions to test during the beta, not final pricing.
 * Membership and family plans open as a waitlist until the services behind them are ready.
 */
export const plans = [
  {
    id: "session",
    name: "1:1 session",
    price: "$99",
    priceSuffix: "per session",
    description: "One focused video session on the topic you choose.",
    features: [
      "About an hour, one-on-one by video",
      "Phone security, AI setup, or family scam plan",
      "Written summary afterward",
    ],
    cta: "Book a session",
    href: "/book-a-call",
    featured: true,
  },
  {
    id: "membership",
    name: "Membership",
    price: "$12",
    priceSuffix: "per month",
    description: "Ongoing help when something doesn't feel right.",
    features: [
      "Question line for safety questions",
      "Monthly scam alerts in plain English",
      "“Check this for me” for suspicious messages",
    ],
    cta: "Join the waitlist",
    href: "/contact?interest=membership",
  },
  {
    id: "family",
    name: "Family plan",
    price: "$29",
    priceSuffix: "per month",
    description: "Membership that covers parents and adult kids together.",
    features: [
      "Everything in Membership for your family",
      "Shared family scam plan",
      "One place for the whole family to ask",
    ],
    cta: "Join the waitlist",
    href: "/contact?interest=family",
  },
];

export const neverAsk = [
  "Your passwords, PINs, or verification codes",
  "Payment card or bank account numbers during a session",
  "Remote control of your phone or computer",
  "Gift cards, crypto, or wire transfers, ever",
];
