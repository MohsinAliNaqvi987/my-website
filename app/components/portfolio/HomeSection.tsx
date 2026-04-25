import Image from "next/image";
import type { ScrollToSection } from "./types";

type HomeSectionProps = {
  scrollToSection: ScrollToSection;
};

export function HomeSection({ scrollToSection }: HomeSectionProps) {
  return (
    <section id="home" className="section-padding">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <p className="inline-block rounded-full bg-sky-100 px-4 py-1 text-sm font-semibold text-sky-700">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
            Hi, I&apos;m Mohsin Naqvi.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-slate-700">
            I build modern and responsive web experiences with a focus on clean design,
            performance, and user-friendly interfaces.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Get In Touch
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-500 hover:bg-slate-100"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="profile-ring">
            <Image
              src="/profile.png"
              alt="Portrait of Mohsin Ali"
              width={320}
              height={320}
              priority
              className="h-72 w-72 rounded-full object-cover sm:h-80 sm:w-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
