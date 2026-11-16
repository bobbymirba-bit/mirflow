import { NextResponse } from "next/server";
import { z } from "zod";

const shortText = z.string().trim().max(500).optional();
const schema = z.object({
  name: z.string().trim().min(1).max(150), email: z.string().trim().email().max(254),
  message: z.string().trim().min(1).max(4000), company: shortText, type: shortText,
  website: shortText, businessType: shortText, leadVolume: shortText, budget: shortText,
  timeline: shortText, tools: shortText, workflow: shortText, websiteTrap: z.string().max(200).optional(),
});

export async function POST(request: Request) {
  let payload: unknown;
  try {
    const body = await request.text();
    if (body.length > 16000) return NextResponse.json({ error: "Your message is too long." }, { status: 413 });
    payload = JSON.parse(body);
  } catch { return NextResponse.json({ error: "Invalid request body." }, { status: 400 }); }
  const parsed = schema.safeParse(payload);
  if (!parsed.success) return NextResponse.json({ error: "Please enter a name, valid email, and message within the allowed length." }, { status: 400 });
  if (parsed.data.websiteTrap) return NextResponse.json({ error: "Unable to submit this request." }, { status: 400 });
  const { RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL || !CONTACT_TO_EMAIL) return NextResponse.json({ error: "Online inquiries are temporarily unavailable. Please email us directly." }, { status: 503 });
  const contact = parsed.data;
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST", headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: CONTACT_FROM_EMAIL, to: [CONTACT_TO_EMAIL], reply_to: contact.email, subject: "Mirflow website inquiry", text: Object.entries(contact).filter(([key, value]) => key !== "websiteTrap" && value).map(([key, value]) => `${key}: ${value}`).join("\n\n") }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) throw new Error("Delivery rejected");
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ error: "We could not deliver your inquiry. Please try again or email us directly." }, { status: 502 }); }
}
