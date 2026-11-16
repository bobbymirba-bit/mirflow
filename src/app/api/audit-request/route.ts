import { NextResponse } from "next/server";
import { z } from "zod";

const AUDIT_FROM = "Mirflow <leads@mirflow.online>";
const AUDIT_TO = "bobby@mirflow.online";

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .transform((value) => value.replace(/\0/g, ""))
    .optional()
    .or(z.literal(""));

const schema = z.object({
  name: z.string().trim().min(1).max(150).transform((value) => value.replace(/\0/g, "")),
  businessName: z.string().trim().min(1).max(150).transform((value) => value.replace(/\0/g, "")),
  email: z.string().trim().email().max(254),
  phone: optionalText(40),
  website: optionalText(500),
  bottleneck: z.string().trim().min(1).max(1000).transform((value) => value.replace(/\0/g, "")),
  websiteTrap: z.string().max(200).optional().or(z.literal("")),
});

function oneLine(value: string): string {
  return value.replace(/[\r\n]+/g, " ").replace(/\s+/g, " ").trim();
}

function validationMessage(error: z.ZodError): string {
  const issue = error.issues[0];
  const field = String(issue?.path[0] ?? "");
  if (field === "phone") return "Enter a valid phone number, or leave phone blank.";
  if (field === "website") return "Enter a valid website, or leave website blank.";
  if (field === "email") return "Enter a valid email address.";
  if (field === "bottleneck" && issue?.code === "too_big") {
    return "Keep the bottleneck to 1000 characters or fewer.";
  }
  return "Enter your name, business name, email, and the bottleneck you want reviewed.";
}

function normalizeWebsite(value: string): { url?: string; error?: string } {
  if (!value) return {};
  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  try {
    const url = new URL(withProtocol);
    if ((url.protocol !== "http:" && url.protocol !== "https:") || url.username || url.password) {
      return { error: "Enter a valid website, or leave website blank." };
    }
    if (!url.hostname.includes(".")) return { error: "Enter a valid website, or leave website blank." };
    return { url: url.toString() };
  } catch {
    return { error: "Enter a valid website, or leave website blank." };
  }
}

function normalizePhone(value: string): { phone?: string; error?: string } {
  if (!value) return {};
  if (!/^[0-9+().\-\s]{7,40}$/.test(value)) {
    return { error: "Enter a valid phone number, or leave phone blank." };
  }
  return { phone: value };
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    const body = await request.text();
    if (body.length > 8000) {
      return NextResponse.json({ error: "Request is too long." }, { status: 413 });
    }
    payload = JSON.parse(body);
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = schema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: validationMessage(parsed.error) }, { status: 400 });
  }

  const { websiteTrap, phone: rawPhone, website: rawWebsite, ...lead } = parsed.data;
  if (websiteTrap?.trim()) return NextResponse.json({ ok: true });

  const phoneResult = normalizePhone(rawPhone ?? "");
  if (phoneResult.error) return NextResponse.json({ error: phoneResult.error }, { status: 400 });
  const websiteResult = normalizeWebsite(rawWebsite ?? "");
  if (websiteResult.error) return NextResponse.json({ error: websiteResult.error }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return NextResponse.json(
      { error: "The audit form cannot send email right now. Email bobby@mirflow.online and Bobby will review it." },
      { status: 503 },
    );
  }

  const text = [
    `Name: ${oneLine(lead.name)}`,
    `Business: ${oneLine(lead.businessName)}`,
    `Email: ${lead.email}`,
    `Phone: ${phoneResult.phone || "-"}`,
    `Website: ${websiteResult.url || "-"}`,
    `Biggest bottleneck: ${lead.bottleneck}`,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: AUDIT_FROM,
        to: [AUDIT_TO],
        reply_to: lead.email,
        subject: `Digital audit request: ${oneLine(lead.businessName).slice(0, 120)}`,
        text,
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) {
      console.error("[audit-request] delivery failed", response.status);
      return NextResponse.json(
        { error: "We could not send your audit request. Email bobby@mirflow.online and Bobby will review it." },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch {
    console.error("[audit-request] delivery failed");
    return NextResponse.json(
      { error: "We could not send your audit request. Email bobby@mirflow.online and Bobby will review it." },
      { status: 502 },
    );
  }
}
