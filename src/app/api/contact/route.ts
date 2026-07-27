import { NextResponse } from "next/server";

type ContactPayload = {
  type?: string;
  name?: string;
  email?: string;
  company?: string;
  website?: string;
  businessType?: string;
  leadVolume?: string;
  budget?: string;
  timeline?: string;
  tools?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, company, message } = payload;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  // Wire up an email/CRM provider here (e.g. Resend, Postmark, HubSpot) using an
  // API key stored in an environment variable. For now, the submission is logged
  // server-side so it's visible during development and in deployment logs.
  console.log("New website submission:", payload);

  return NextResponse.json({ ok: true });
}
