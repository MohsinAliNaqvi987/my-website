 "use client";

import { useEffect, useRef, useState } from "react";
import { AboutSection } from "./components/portfolio/AboutSection";
import { ContactSection } from "./components/portfolio/ContactSection";
import { Footer } from "./components/portfolio/Footer";
import { HomeSection } from "./components/portfolio/HomeSection";
import { MobileMenu } from "./components/portfolio/MobileMenu";
import { Navbar } from "./components/portfolio/Navbar";
import { PortfolioSection } from "./components/portfolio/PortfolioSection";
import { ResumeSection } from "./components/portfolio/ResumeSection";
import { SkillsSection } from "./components/portfolio/SkillsSection";
import { education, experience, projectPlaceholders, skills } from "./components/portfolio/data";
import type { SectionId } from "./components/portfolio/types";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [skillsAnimated, setSkillsAnimated] = useState(false);
  const skillsSectionRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (sectionId: SectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const sectionElement = skillsSectionRef.current;
    if (!sectionElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          // Delay state flip to next paint so width transitions animate visibly.
          requestAnimationFrame(() => {
            requestAnimationFrame(() => setSkillsAnimated(true));
          });
          observer.disconnect();
        }
      },
      {
        // Trigger when most of the section is actually visible.
        threshold: 0.7,
      }
    );

    observer.observe(sectionElement);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f8fc] text-slate-900">
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        scrollToSection={scrollToSection}
      />
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        closeMobileMenu={closeMobileMenu}
        scrollToSection={scrollToSection}
      />

      <main>
        <HomeSection scrollToSection={scrollToSection} />
        <AboutSection />
        <PortfolioSection projectPlaceholders={projectPlaceholders} />
        <SkillsSection sectionRef={skillsSectionRef} skills={skills} skillsAnimated={skillsAnimated} />
        <ResumeSection education={education} experience={experience} />
        <ContactSection />
      </main>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}
