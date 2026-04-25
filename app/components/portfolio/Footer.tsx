import type { ScrollToSection } from "./types";

type FooterProps = {
  scrollToSection: ScrollToSection;
};

export function Footer({ scrollToSection }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-8">
        <div className="grid items-center gap-6 md:grid-cols-3">
          <p className="text-sm font-medium text-slate-300">Full Stack Developer building scalable web applications.</p>

          <div className="flex justify-center gap-6 text-sm font-semibold">
            <button type="button" onClick={() => scrollToSection("about")} className="transition hover:text-sky-300">
              About
            </button>
            <button type="button" onClick={() => scrollToSection("portfolio")} className="transition hover:text-sky-300">
              Portfolio
            </button>
            <button type="button" onClick={() => scrollToSection("contact")} className="transition hover:text-sky-300">
              Contact
            </button>
          </div>

          <div className="flex items-center justify-start gap-3 md:justify-end">
            <a
              href="https://wa.me/923335321812"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="rounded-full border border-slate-700 p-2.5 text-slate-200 transition hover:border-sky-400 hover:text-sky-300"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M12.04 2.003C6.53 2.003 2.06 6.47 2.06 11.98c0 1.94.55 3.83 1.6 5.46L2 22l4.68-1.63a9.91 9.91 0 0 0 5.35 1.56h.01c5.5 0 9.97-4.47 9.97-9.98a9.93 9.93 0 0 0-2.92-7.06 9.92 9.92 0 0 0-7.05-2.92Zm0 18.25h-.01a8.24 8.24 0 0 1-4.2-1.16l-.3-.18-2.78.97.9-2.9-.2-.3a8.2 8.2 0 0 1-1.25-4.36c0-4.56 3.7-8.27 8.26-8.27a8.2 8.2 0 0 1 5.85 2.43 8.2 8.2 0 0 1 2.42 5.84c0 4.56-3.71 8.27-8.27 8.27Zm4.53-6.2c-.25-.13-1.48-.73-1.7-.82-.23-.08-.4-.12-.57.13-.17.25-.65.82-.8.99-.14.17-.29.2-.54.07-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.39-1.71-.15-.25-.02-.38.11-.51.12-.12.25-.29.38-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.57-1.37-.78-1.87-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.13.17 1.74 2.66 4.21 3.73.59.25 1.05.4 1.41.5.59.19 1.13.16 1.56.1.48-.07 1.48-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.46-.28Z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/mohsin-naqvi-0b88961b1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-slate-700 p-2.5 text-slate-200 transition hover:border-sky-400 hover:text-sky-300"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.13 1.44-2.13 2.93v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77A1.77 1.77 0 0 0 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46c.98 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-800 pt-4">
          <p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} Mohsin Naqvi. All rights reserved.</p>
          <p className="text-sm text-slate-300">
            Made with <span className="text-red-500">❤</span> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
