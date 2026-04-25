export function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-2">
        <div className="space-y-5 rounded-2xl bg-slate-900 p-7 text-slate-100">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="text-slate-300">
            Feel free to reach out for opportunities, collaboration, or a quick hello.
          </p>
          <ul className="space-y-3 text-sm" role="list">
            <li>
              <a
                href="mailto:mohsin.ali.naqvi987@gmail.com"
                className="group flex items-center gap-3 rounded-xl border border-slate-700/60 bg-slate-800/50 p-3 transition hover:border-sky-500/50 hover:bg-slate-800"
              >
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-sky-500/30 bg-sky-500/10 text-sky-400"
                  aria-hidden
                >
                  <svg
                    className="h-7 w-7"
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
                  <p className="text-slate-100 group-hover:text-white">mohsin.ali.naqvi987@gmail.com</p>
                </div>
              </a>
            </li>
            <li>
              <a
                href="tel:+923335321812"
                className="group flex items-center gap-3 rounded-xl border border-slate-700/60 bg-slate-800/50 p-3 transition hover:border-emerald-500/50 hover:bg-slate-800"
              >
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                  aria-hidden
                >
                  <svg
                    className="h-7 w-7"
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
                  <p className="text-slate-100 group-hover:text-white">+92 333 5321812</p>
                </div>
              </a>
            </li>
            <li>
              <div className="flex items-center gap-3 rounded-xl border border-slate-700/60 bg-slate-800/50 p-3">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-400"
                  aria-hidden
                >
                  <svg
                    className="h-7 w-7"
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
                  <p className="text-slate-100">Rawalpindi, Pakistan</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <form className="rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-800">Get in Touch</h3>
          <div className="mt-6 space-y-4">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Name</span>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-500"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-500"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Message</span>
              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-500"
              />
            </label>
            <button
              type="submit"
              className="cursor-pointer rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
