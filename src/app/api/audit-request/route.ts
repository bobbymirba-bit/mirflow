import { NextResponse } from "next/server";
import { z } from "zod";

import { callTextConsent } from "@/lib/lead-copy";

/**
 * Free digital audit requests.
 * Reuses the Resend env already set for this project:
 * RESEND_API_KEY and CONTACT_FROM_EMAIL (verified sender leads@mirflow.online).
 * Delivery goes only to bobby@mirflow.online. Unconfigured or failed delivery
 * is an error, and personal details are not written to logs.
 */

const LEAD_TO = "bobby@mirflow.online";
const FROM_FALLBACK = "Mirflow <leads@mirflow.online>";
const VALIDATION_ERROR =
  "Check your name, business name, and phone number, and agree to a call or text. Email can be left blank.";

const optionalText = z.string().trim().max(200).optional().or(z.literal(""));

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  businessName: z.string().trim().min(1).max(120),
  phone: z.string().trim().min(7).max(40),
  email: z.string().trim().max(254).optional().or(z.literal("")),
  smsConsent: z.literal(true),
  source: z.string().trim().max(40).optional().or(z.literal("")),
  websiteTrap: z.string().max(200).optional().or(z.literal("")),
  utm_source: optionalText,
  utm_medium: optionalText,
  utm_campaign: optionalText,
  utm_term: optionalText,
  utm_content: optionalText,
});

function oneLine(value: string | undefined): string {
  return (value ?? "").replace(/[\r\n]+/g, " ").replace(/[\u0000-\u001F\u007F]/g, "").trim();
}

function phoneDigits(value: string): string {
  return value.replace(/\D/g, "");
}

function validPhone(value: string): boolean {
  const digits = phoneDigits(value);
  return digits.length >= 10 && digits.length <= 15 && !/^(\d)\1+$/.test(digits);
}

function validEmail(value: string | undefined): boolean {
  if (!value) return true;
  return z.email().safeParse(value).success;
}

function hasLink(value: string): boolean {
  return /https?:\/\//i.test(value) || /\bwww\./i.test(value);
}

function field(label: string, value: string | undefined): string {
  const cleaned = oneLine(value);
  return `${label}: ${cleaned || "-"}`;
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    const body = await request.text();
    if (body.length > 8000) {
      return NextResponse.json({ error: "That request is too long." }, { status: 413 });
    }
    payload = JSON.parse(body);
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = schema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: VALIDATION_ERROR }, { status: 400 });
  }

  const lead = parsed.data;
  if (lead.websiteTrap?.trim()) {
    return NextResponse.json({ error: "Unable to submit this request." }, { status: 400 });
  }

  const email = oneLine(lead.email) || undefined;
  if (!validPhone(lead.phone) || !validEmail(email) || hasLink(lead.name) || hasLink(lead.businessName)) {
    return NextResponse.json({ error: VALIDATION_ERROR }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return NextResponse.json(
      { error: "The form is not available right now. Email bobby@mirflow.online instead." },
      { status: 503 },
    );
  }

  const from = process.env.CONTACT_FROM_EMAIL?.trim() || FROM_FALLBACK;
  const text = [
    field("Name", lead.name),
    field("Business", lead.businessName),
    field("Phone", lead.phone),
    field("Email", email),
    "SMS/call consent: yes",
    field("Consent wording", callTextConsent),
    field("Source", lead.source || "form"),
    field("UTM source", lead.utm_source),
    field("UTM medium", lead.utm_medium),
    field("UTM campaign", lead.utm_campaign),
    field("UTM term", lead.utm_term),
    field("UTM content", lead.utm_content),
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [LEAD_TO],
        ...(email ? { reply_to: email } : {}),
        subject: `New lead: ${oneLine(lead.businessName).slice(0, 80)}`,
        text,
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) {
      console.error("[audit-request] Resend rejected the message", response.status);
      return NextResponse.json(
        { error: "We could not send your request. Try again, or email bobby@mirflow.online." },
        { status: 502 },
      );
    }
  } catch {
    console.error("[audit-request] Resend request failed");
    return NextResponse.json(
      { error: "We could not send your request. Try again, or email bobby@mirflow.online." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
