export function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-2">
        <div className="space-y-5 rounded-2xl bg-slate-900 p-7 text-slate-100">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="text-slate-300">
            Feel free to reach out for opportunities, collaboration, or a quick hello.
          </p>
          <div className="space-y-3 text-sm">
            <p>
              <span className="font-semibold text-white">Email:</span> your-email@example.com
            </p>
            <p>
              <span className="font-semibold text-white">Phone:</span> +92 300 1234567
            </p>
            <p>
              <span className="font-semibold text-white">Address:</span> Your city, Pakistan
            </p>
          </div>
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
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
