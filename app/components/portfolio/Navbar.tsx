import type { ScrollToSection } from "./types";

type NavbarProps = {
  isMobileMenuOpen: boolean;
  onOpenMobileMenu: () => void;
  scrollToSection: ScrollToSection;
};

export function Navbar({
  isMobileMenuOpen,
  onOpenMobileMenu,
  scrollToSection,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="text-xl font-bold tracking-tight text-slate-800"
        >
          Mohsin
        </button>
        <div className="hidden flex-wrap items-center gap-3 text-sm font-medium text-slate-700 md:flex">
          <button type="button" onClick={() => scrollToSection("home")} className="nav-link">
            Home
          </button>
          <button type="button" onClick={() => scrollToSection("about")} className="nav-link">
            About
          </button>
          <button type="button" onClick={() => scrollToSection("portfolio")} className="nav-link">
            Portfolio
          </button>
          <button type="button" onClick={() => scrollToSection("skills")} className="nav-link">
            Skills
          </button>
          <button type="button" onClick={() => scrollToSection("resume")} className="nav-link">
            Resume
          </button>
          <button type="button" onClick={() => scrollToSection("contact")} className="nav-link">
            Contact
          </button>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={isMobileMenuOpen}
          onClick={onOpenMobileMenu}
          className="rounded-md border border-slate-300 p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
