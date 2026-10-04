import { NextResponse } from "next/server";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let payload: { email?: string; source?: string };

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = payload.email?.trim() ?? "";
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  // Connect an email provider here (e.g. Resend, Postmark, ConvertKit) using an
  // API key stored in an environment variable. Until then, signups are logged
  // server-side so they're visible in deployment logs.
  console.log("New checklist signup:", { email, source: payload.source ?? "unknown" });

  return NextResponse.json({ ok: true });
}
