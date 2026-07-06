import { NextResponse } from "next/server";
import { site } from "@/lib/content";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  message?: string;
  projectType?: string;
  engagement?: string;
  budget?: string;
  hp_field?: string; // honeypot
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const clean = (v: unknown) => (typeof v === "string" ? v.trim() : "");

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Couldn't read that request." }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields. Humans never see it. Silently accept.
  if (clean(body.hp_field)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name);
  const email = clean(body.email);
  const message = clean(body.message);
  const projectType = clean(body.projectType);
  const engagement = clean(body.engagement);
  const budget = clean(body.budget);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Add your name, email, and a message." },
      { status: 422 },
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "That email address doesn't look right." }, { status: 422 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: "That message is a bit long — trim it down a little." }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || site.email;
  // Resend needs a verified domain here. Until yours is verified, its shared
  // sender (onboarding@resend.dev) works for delivery to your own inbox.
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

  if (!apiKey) {
    // Owner hasn't wired the key yet — tell the visitor to use direct email.
    return NextResponse.json(
      { error: "The form isn't connected yet. Email me directly and it'll reach me." },
      { status: 503 },
    );
  }

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    projectType ? `Project: ${projectType}` : null,
    engagement ? `Engagement: ${engagement}` : null,
    budget ? `Budget: ${budget}` : null,
    "",
    message,
  ].filter(Boolean);

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New inquiry — ${name}${projectType ? ` · ${projectType}` : ""}`,
        text: lines.join("\n"),
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("Resend error:", res.status, detail);
      return NextResponse.json(
        { error: "The message didn't send. Email me directly and it'll reach me." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "The message didn't send. Email me directly and it'll reach me." },
      { status: 500 },
    );
  }
}