"use client";

import { FormEvent, useState } from "react";
import { useInViewOnce } from "./useInViewOnce";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");
  const { ref: detailsRef, isVisible: detailsVisible } = useInViewOnce<HTMLDivElement>(0.25);
  const { ref: formRef, isVisible: formVisible } = useInViewOnce<HTMLFormElement>(0.25);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "submitting") return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          company_url: formData.get("company_url"),
        }),
      });

      const payload = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!response.ok) {
        setStatus("error");
        setFeedback(payload?.error ?? "Failed to send your message. Please try again.");
        return;
      }

      form.reset();
      setStatus("success");
      setFeedback("Thanks — your message has been sent.");
    } catch {
      setStatus("error");
      setFeedback("Failed to send your message. Please try again.");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <section id="contact" className="section-padding reveal-clip">
      <div className="mx-auto grid w-full max-w-6xl gap-10 max-[400px]:gap-6 lg:grid-cols-2">
        <div
          ref={detailsRef}
          className={`slide-in slide-from-left space-y-5 rounded-2xl bg-slate-900 p-7 text-slate-100 max-[400px]:space-y-4 max-[400px]:p-4 ${
            detailsVisible ? "is-visible" : ""
          }`}
        >
          <h2 className="text-3xl font-bold max-[400px]:text-2xl">Contact</h2>
          <p className="text-slate-300 max-[400px]:text-sm max-[400px]:leading-6">
            Feel free to reach out for opportunities, collaboration, or a quick hello.
          </p>
          <ul className="space-y-3 text-sm max-[400px]:space-y-2.5" role="list">
            <li>
              <a
                href="mailto:mohsin.ali.naqvi987@gmail.com"
                className="group flex items-center gap-3 rounded-xl border border-slate-700/60 bg-slate-800/50 p-3 transition hover:border-sky-500/50 hover:bg-slate-800 max-[400px]:gap-2.5 max-[400px]:p-2.5"
              >
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-sky-500/30 bg-sky-500/10 text-sky-400 max-[400px]:h-10 max-[400px]:w-10"
                  aria-hidden
                >
                  <svg
                    className="h-7 w-7 max-[400px]:h-5 max-[400px]:w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16a2 2 0 0 1 2 2v0a1.9 1.9 0 0 0-.1.6L12 12.2 2.1 6.6A1.9 1.9 0 0 0 2 6V6a2 2 0 0 1 2-2Z" />
                    <path d="M2 7v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7" />
                    <path d="m2 6 7.1 4.2a2 2 0 0 0 1.8 0L22 6" />
                  </svg>
                </span>
                <div className="min-w-0 text-left">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Email</p>
                  <p className="break-words text-slate-100 group-hover:text-white max-[400px]:text-xs">
                    mohsin.ali.naqvi987@gmail.com
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a
                href="tel:+923335321812"
                className="group flex items-center gap-3 rounded-xl border border-slate-700/60 bg-slate-800/50 p-3 transition hover:border-emerald-500/50 hover:bg-slate-800 max-[400px]:gap-2.5 max-[400px]:p-2.5"
              >
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 max-[400px]:h-10 max-[400px]:w-10"
                  aria-hidden
                >
                  <svg
                    className="h-7 w-7 max-[400px]:h-5 max-[400px]:w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3 4.1 2 2 0 0 1 5 2h3a1 1 0 0 1 1 .8c.1.6.3 1.1.4 1.6a1 1 0 0 1-.1 1l-1.1 1.1a1 1 0 0 0 0 1.4A15 15 0 0 0 12 18a1 1 0 0 0 1.4 0l1.1-1.1a1 1 0 0 1 1-.1c.5.1 1 .3 1.6.4a1 1 0 0 1 .8 1.2Z" />
                  </svg>
                </span>
                <div className="min-w-0 text-left">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Phone</p>
                  <p className="text-slate-100 group-hover:text-white max-[400px]:text-xs">
                    +92 333 5321812
                  </p>
                </div>
              </a>
            </li>
            <li>
              <div className="flex items-center gap-3 rounded-xl border border-slate-700/60 bg-slate-800/50 p-3 max-[400px]:gap-2.5 max-[400px]:p-2.5">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-400 max-[400px]:h-10 max-[400px]:w-10"
                  aria-hidden
                >
                  <svg
                    className="h-7 w-7 max-[400px]:h-5 max-[400px]:w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 21s7-4.3 7-10.5A7 7 0 0 0 5 10.5C5 16.7 12 21 12 21Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                <div className="min-w-0 text-left">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Address</p>
                  <p className="text-slate-100 max-[400px]:text-xs">Rawalpindi, Pakistan</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={`slide-in slide-from-right relative rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm max-[400px]:p-4 ${
            formVisible ? "is-visible" : ""
          }`}
        >
          <h3 className="text-2xl font-bold text-slate-800 max-[400px]:text-xl">Get in Touch</h3>
          <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
            <label>
              Company URL
              <input type="text" name="company_url" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <div className="mt-6 space-y-4 max-[400px]:mt-4 max-[400px]:space-y-3">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Name</span>
              <input
                type="text"
                name="name"
                required
                minLength={2}
                maxLength={80}
                placeholder="Your name"
                autoComplete="name"
                disabled={isSubmitting}
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-500 disabled:opacity-60 max-[400px]:px-3 max-[400px]:py-2.5"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
              <input
                type="email"
                name="email"
                required
                maxLength={254}
                placeholder="you@example.com"
                autoComplete="email"
                disabled={isSubmitting}
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-500 disabled:opacity-60 max-[400px]:px-3 max-[400px]:py-2.5"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Message</span>
              <textarea
                name="message"
                rows={5}
                required
                minLength={10}
                maxLength={5000}
                placeholder="Write your message..."
                disabled={isSubmitting}
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-500 disabled:opacity-60 max-[400px]:px-3 max-[400px]:py-2.5"
              />
            </label>
            {feedback ? (
              <p
                role="status"
                aria-live="polite"
                className={
                  status === "success"
                    ? "rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800 max-[400px]:px-3 max-[400px]:py-2.5 max-[400px]:text-xs"
                    : "rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800 max-[400px]:px-3 max-[400px]:py-2.5 max-[400px]:text-xs"
                }
              >
                {feedback}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
              className="cursor-pointer rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60 max-[400px]:w-full max-[400px]:px-5 max-[400px]:py-2.5"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
