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
          <p
            className="home-reveal inline-block rounded-full bg-black px-4 py-1 text-sm font-semibold text-white"
            style={{ animationDelay: "0ms" }}
          >
            Welcome to my portfolio
          </p>
          <h1
            className="home-reveal text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl"
            style={{ animationDelay: "90ms" }}
          >
            Hi, I&apos;m Mohsin Naqvi.
          </h1>
          <h3 className="home-reveal text-2xl font-bold" style={{ animationDelay: "180ms" }}>
            Full Stack MERN Developer
          </h3>
          <p
            className="home-reveal max-w-xl text-lg leading-8 text-slate-700"
            style={{ animationDelay: "270ms" }}
          >
            I build modern and responsive web experiences with a focus on clean design,
            performance, and user-friendly interfaces.
          </p>
          <div
            className="home-reveal flex flex-wrap items-center gap-3"
            style={{ animationDelay: "360ms" }}
          >
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
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
        <div className="home-reveal-image flex justify-center md:justify-end" style={{ animationDelay: "180ms" }}>
          <Image
            src="/profile.jpg"
            alt="Portrait of Mohsin Naqvi"
            width={1086}
            height={1448}
            priority
            className="h-auto w-64 object-contain sm:w-72 md:w-80"
          />
        </div>
      </div>
    </section>
  );
}
