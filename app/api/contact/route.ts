import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { buildContactEmail } from "@/lib/contact/email-template";
import { parseContactInput } from "@/lib/contact/validation";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const recentRequests = new Map<string, number[]>();

function getClientIp(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const timestamps = (recentRequests.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (timestamps.length >= RATE_LIMIT_MAX) {
    recentRequests.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  recentRequests.set(ip, timestamps);
  return false;
}

export async function POST(request: NextRequest) {
  try {
    if (isRateLimited(getClientIp(request))) {
      return NextResponse.json(
        { error: "Too many messages. Please try again in a few minutes." },
        { status: 429 },
      );
    }

    const contentLength = Number(request.headers.get("content-length") ?? "0");
    if (Number.isFinite(contentLength) && contentLength > 20_000) {
      return NextResponse.json({ error: "Message is too large." }, { status: 413 });
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    const parsed = parseContactInput(body);
    if (!parsed.ok) {
      return NextResponse.json({ error: parsed.error }, { status: 400 });
    }

    if (parsed.spam) {
      return NextResponse.json({ ok: true });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !toEmail || !fromEmail) {
      return NextResponse.json(
        { error: "Email is not configured. Please try again later." },
        { status: 500 },
      );
    }

    const { html, text, subject } = buildContactEmail(parsed.data);
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: parsed.data.email,
      subject,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send your message. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
