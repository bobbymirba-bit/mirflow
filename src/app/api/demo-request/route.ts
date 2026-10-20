import { NextResponse } from "next/server";
import { z } from "zod";

/**
 * Demo-agent requests. Log-only today.
 * To enable email delivery later, set RESEND_API_KEY and CONTACT_TO_EMAIL
 * (optionally CONTACT_FROM_EMAIL). When they are unset the request is only
 * logged and the visitor still gets a success response.
 */
const optional = (max: number) => z.string().trim().max(max).optional();

const schema = z.object({
  helpCenterUrl: z
    .string()
    .trim()
    .min(3)
    .max(500)
    .transform((v) => (/^https?:\/\//i.test(v) ? v : `https://${v}`))
    .pipe(z.string().url()),
  email: z.string().trim().email().max(254),
  company: optional(150),
  question: optional(1000),
  source: optional(50),
  websiteTrap: optional(200),
});

type Lead = Omit<z.infer<typeof schema>, "websiteTrap">;

async function deliver(lead: Lead): Promise<string> {
  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) return "log-only";
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL ?? "Mirflow <onboarding@resend.dev>",
        to: [CONTACT_TO_EMAIL],
        reply_to: lead.email,
        subject: `Demo agent request: ${lead.company || lead.helpCenterUrl}`,
        text: [
          `Help center: ${lead.helpCenterUrl}`,
          `Email: ${lead.email}`,
          `Company: ${lead.company || "-"}`,
          `Question / notes: ${lead.question || "-"}`,
          `Source: ${lead.source || "form"}`,
        ].join("\n"),
      }),
      signal: AbortSignal.timeout(10000),
    });
    return res.ok ? "sent" : `resend-${res.status}`;
  } catch {
    return "resend-error";
  }
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    const body = await request.text();
    if (body.length > 8000) return NextResponse.json({ error: "Request is too long." }, { status: 413 });
    payload = JSON.parse(body);
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }
  const parsed = schema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please enter a valid help-center URL and work email." }, { status: 400 });
  }
  const { websiteTrap, ...lead } = parsed.data;
  if (websiteTrap) return NextResponse.json({ ok: true });
  const delivery = await deliver(lead);
  console.log("[demo-request]", JSON.stringify({ at: new Date().toISOString(), ...lead, delivery }));
  // Never fail the visitor because email delivery isn't configured; the log is the record.
  return NextResponse.json({ ok: true });
}
