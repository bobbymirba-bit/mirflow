export type GuideSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Guide = {
  slug: string;
  title: string;
  summary: string;
  readingMinutes: number;
  updated: string;
  sections: GuideSection[];
};

export const guides: Guide[] = [
  {
    slug: "how-to-spot-a-voice-clone-call",
    title: "How to spot a voice-clone scam call",
    summary:
      "A call sounds exactly like someone you love, and they need money now. Here's how to check before you act.",
    readingMinutes: 4,
    updated: "2026-10-04",
    sections: [
      {
        heading: "What a voice-clone scam is",
        paragraphs: [
          "AI tools can copy a person's voice from a short recording, such as a video posted on social media. Scammers use the copied voice to call family members, pretending to be in trouble.",
          "The voice can sound right. That's why the best defense isn't listening harder. It's checking in a way the scammer can't fake.",
        ],
      },
      {
        heading: "Warning signs",
        bullets: [
          "It's an emergency: an accident, an arrest, or being stranded somewhere.",
          "They need money right now and won't let you think.",
          "They ask you to keep it secret, especially from other family members.",
          "They want payment by gift card, wire transfer, cryptocurrency, payment app, or a courier collecting cash.",
          "A second person, such as a “lawyer” or “officer,” takes over the call.",
          "The caller ID looks right. Caller ID can be faked, so it doesn't prove anything.",
        ],
      },
      {
        heading: "What to do",
        bullets: [
          "Stay calm and say you'll call back. A real emergency can wait two minutes.",
          "Hang up and call the person directly on a number you already have saved.",
          "If you can't reach them, call another family member who can check.",
          "Ask for your family safe word. If the caller can't give it, treat that as a red flag.",
          "Never pay with gift cards, crypto, or wire transfers because someone on the phone told you to.",
        ],
      },
      {
        heading: "If you already paid",
        paragraphs: [
          "Call your bank or card company right away using the number on the back of your card. Then report it at ReportFraud.ftc.gov and ic3.gov. Acting quickly gives you the best chance of stopping a payment.",
        ],
      },
    ],
  },
  {
    slug: "deepfake-checklist",
    title: "A simple deepfake checklist",
    summary:
      "Fake videos and photos are getting harder to spot by eye. Use this checklist to decide what to trust.",
    readingMinutes: 4,
    updated: "2026-10-04",
    sections: [
      {
        heading: "Why looking closely isn't enough",
        paragraphs: [
          "Older advice said to look for blurry edges, odd blinking, or strange hands. Those clues still show up sometimes, but AI keeps improving, so a clean-looking video can still be fake.",
          "Instead of judging the pixels, judge the request. Ask what the video wants you to do, and check that through a source you trust.",
        ],
      },
      {
        heading: "The checklist",
        bullets: [
          "Where did it come from? Is it from the person's official account or website, or from an ad or a forwarded message?",
          "What does it want? Money, an investment, personal details, or a click are all reasons to slow down.",
          "Is there pressure? “Limited time,” “only today,” or “don't tell anyone” are classic scam signals.",
          "Can you confirm it elsewhere? Search for the claim along with the word “scam,” and check the official website directly.",
          "Is a celebrity promoting an investment or giveaway? Treat this as fake unless the celebrity's own official channels confirm it.",
          "On a video call, does the person avoid simple questions only they would know? End the call and reach them another way.",
        ],
      },
      {
        heading: "One rule to remember",
        paragraphs: [
          "Never send money or personal information because of a video or call alone. Confirm it first through a contact you already trust.",
        ],
      },
    ],
  },
  {
    slug: "family-safe-word",
    title: "Set up a family safe word",
    summary:
      "A simple word or question only your family knows can stop a voice-clone scam in seconds. Here's how to set one up.",
    readingMinutes: 3,
    updated: "2026-10-04",
    sections: [
      {
        heading: "What a safe word does",
        paragraphs: [
          "A safe word is a private word or phrase your family agrees on. If someone calls claiming to be family and asking for help or money, you ask for the word. A scammer with a cloned voice won't know it.",
        ],
      },
      {
        heading: "How to choose one",
        bullets: [
          "Pick something easy to remember but impossible to guess, and never posted online.",
          "Avoid pet names, birthdays, street names, or anything on social media.",
          "A short odd phrase works well, like two unrelated words.",
          "Agree on it in person or on a call, not by text or email.",
        ],
      },
      {
        heading: "How to use it",
        bullets: [
          "Ask for the word any time someone asks for money or urgent help by phone, text, or video.",
          "If the caller says they forgot it or gets angry, hang up and call them back on a number you know.",
          "Write the steps on a card by the phone for older parents: ask for the word, hang up, call back.",
          "Change the word if you think someone outside the family has learned it.",
        ],
      },
    ],
  },
  {
    slug: "ai-app-privacy-settings",
    title: "Privacy basics for AI chat apps",
    summary:
      "AI assistants are useful, but what you type can be stored. Here's what to check and what never to share.",
    readingMinutes: 5,
    updated: "2026-10-04",
    sections: [
      {
        heading: "Get the real app",
        bullets: [
          "Go to the company's official website and follow its link to the app store, instead of searching the store.",
          "Check the developer name matches the company you expect.",
          "Be wary of apps or ads promising free premium access, guaranteed income, or investment profits from AI.",
        ],
      },
      {
        heading: "Check your settings",
        paragraphs: [
          "Menu names change and vary between apps, so look for the data or privacy controls in your account settings. These are the questions to answer:",
        ],
        bullets: [
          "Can I stop my conversations from being used to improve the AI? Many apps offer this option.",
          "Is chat history saved, and can I delete it?",
          "Does the app have access to my microphone, camera, contacts, or location, and does it need it?",
          "Is two-step verification turned on for my account?",
        ],
      },
      {
        heading: "Never paste these into an AI chat",
        bullets: [
          "Passwords, PINs, or verification codes",
          "Social Security, bank, or card numbers",
          "Medical records or other people's private information",
          "Photos of IDs, checks, or tax documents",
        ],
      },
      {
        heading: "A good habit",
        paragraphs: [
          "Before you type, imagine your message being read by a stranger. If that would worry you, leave out the personal details. The AI can usually help just as well without them.",
        ],
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
