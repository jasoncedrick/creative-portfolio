"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const projectTypes = [
  "Short-form ad creatives",
  "Personal brand content",
  "Social media management",
  "Localization & translation",
  "Full creative production",
  "Something else",
];

const engagements = [
  "Project-based",
  "Ongoing retainer",
  "Contract",
  "Freelance / ad-hoc",
  "Part-time",
  "Full-time",
];

const budgets = [
  "Under $500",
  "$500 – $1,500",
  "$1,500 – $5,000",
  "$5,000+",
  "Not sure yet",
];

const fieldClass =
  "w-full rounded-[10px] border border-[color:var(--color-border-strong)] bg-[color:var(--color-bg)] px-3.5 py-3 text-[14px] text-[color:var(--color-fg)] placeholder:text-[color:var(--color-fg-dim)] outline-none transition-colors focus:border-[color:var(--color-red)]";

const labelClass =
  "text-[11px] font-mono uppercase tracking-wider text-[color:var(--color-fg-faint)]";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Client-side guard so people get an answer without a round-trip.
    if (!data.name || !data.email || !data.message) {
      setStatus("error");
      setError("Add your name, email, and a short message so I can reply.");
      return;
    }

    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something broke on the way out.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "The message didn't send. Email me directly and it'll reach me.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="card p-8 flex flex-col items-start gap-3">
        <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[color:var(--color-red-dim)] text-[color:var(--color-red)]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="text-[20px] font-display font-semibold tracking-tight">Message sent.</h3>
        <p className="text-[15px] text-[color:var(--color-fg-muted)] max-w-[42ch]">
          I&apos;ll reply within 24 hours, every business day. Check your spam folder if you don&apos;t
          hear back — sometimes the first email lands there.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-[13px] font-mono text-[color:var(--color-fg-faint)] hover:text-[color:var(--color-fg)] transition-colors"
        >
          Send another →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card p-6 md:p-7 flex flex-col gap-5">
      {/* Honeypot — hidden from humans, catches bots. Named so autofill ignores it. */}
      <div aria-hidden className="absolute w-px h-px overflow-hidden -left-[9999px]">
        <label>
          Leave this empty
          <input type="text" name="hp_field" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="cf-name" className={labelClass}>Name</label>
          <input id="cf-name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={fieldClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="cf-email" className={labelClass}>Email</label>
          <input id="cf-email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={fieldClass} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="cf-type" className={labelClass}>What you need</label>
          <select id="cf-type" name="projectType" defaultValue="" className={`${fieldClass} appearance-none`}>
            <option value="" disabled>Select one</option>
            {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="cf-engagement" className={labelClass}>Engagement</label>
          <select id="cf-engagement" name="engagement" defaultValue="" className={`${fieldClass} appearance-none`}>
            <option value="" disabled>Select one</option>
            {engagements.map((e) => <option key={e} value={e}>{e}</option>)}
          </select>
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2 lg:col-span-1">
          <label htmlFor="cf-budget" className={labelClass}>Budget <span className="normal-case text-[color:var(--color-fg-dim)]">(optional)</span></label>
          <select id="cf-budget" name="budget" defaultValue="" className={`${fieldClass} appearance-none`}>
            <option value="" disabled>Select a range</option>
            {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="cf-message" className={labelClass}>The brief</label>
        <textarea id="cf-message" name="message" required rows={5} placeholder="What are you building, and what do you need from me?" className={`${fieldClass} resize-y min-h-[120px]`} />
      </div>

      {status === "error" && (
        <p role="alert" className="text-[13px] text-[color:var(--color-red)] font-mono">{error}</p>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <button type="submit" disabled={status === "submitting"} className="btn-primary text-[15px] px-6 py-3.5 disabled:opacity-60 disabled:cursor-not-allowed">
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>
        <p className="text-[12px] font-mono text-[color:var(--color-fg-dim)]">Reply within 24h · every business day</p>
      </div>
    </form>
  );
}
