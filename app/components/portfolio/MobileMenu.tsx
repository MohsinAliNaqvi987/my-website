import type { ScrollToSection } from "./types";

type MobileMenuProps = {
  isMobileMenuOpen: boolean;
  closeMobileMenu: () => void;
  scrollToSection: ScrollToSection;
};

const mobileLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "skills", label: "Skills" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
] as const;

export function MobileMenu({
  isMobileMenuOpen,
  closeMobileMenu,
  scrollToSection,
}: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-[60] md:hidden ${
        isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!isMobileMenuOpen}
    >
      <button
        type="button"
        aria-label="Close menu overlay"
        onClick={closeMobileMenu}
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0"
        }`}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-72 bg-white p-6 shadow-2xl transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <p className="text-lg font-bold text-slate-900">Menu</p>
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMobileMenu}
            className="rounded-md border border-slate-300 p-2 text-slate-700 transition hover:bg-slate-100"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-2 text-base font-semibold text-slate-800">
          {mobileLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => {
                scrollToSection(link.id);
                closeMobileMenu();
              }}
              className="rounded-lg px-3 py-2 text-left transition hover:bg-slate-100"
            >
              {link.label}
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
}
