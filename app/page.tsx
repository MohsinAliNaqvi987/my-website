 "use client";

import { useState } from "react";
import { AboutSection } from "./components/portfolio/AboutSection";
import { ContactSection } from "./components/portfolio/ContactSection";
import { Footer } from "./components/portfolio/Footer";
import { HomeSection } from "./components/portfolio/HomeSection";
import { MobileMenu } from "./components/portfolio/MobileMenu";
import { Navbar } from "./components/portfolio/Navbar";
import { PortfolioSection } from "./components/portfolio/PortfolioSection";
import { ResumeSection } from "./components/portfolio/ResumeSection";
import { SkillsSection } from "./components/portfolio/SkillsSection";
import { education, experience, projectPlaceholders } from "./components/portfolio/data";
import type { SectionId } from "./components/portfolio/types";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: SectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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
        <SkillsSection />
        <ResumeSection education={education} experience={experience} />
        <ContactSection />
      </main>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}
