export type SectionId =
  | "home"
  | "about"
  | "portfolio"
  | "skills"
  | "resume"
  | "contact";

export type ScrollToSection = (sectionId: SectionId) => void;
