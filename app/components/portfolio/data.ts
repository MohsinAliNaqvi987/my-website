export type Skill = {
  name: string;
  level: number;
};

export type ResumeItem = {
  title: string;
  subtitle: string;
  timeline: string;
  detail: string;
};

export const skills: Skill[] = [
  { name: "React / Next.js", level: 85 },
  { name: "HTML & CSS", level: 95 },
  { name: "JavaScript / TypeScript", level: 88 },
  { name: "Tailwind CSS", level: 90 },
  { name: "NestJS", level: 75 },
  { name: "Node.js", level: 78 },
  { name: "SQL", level: 85 },
  { name: "MongoDB", level: 75 },
  { name: "Docker", level: 65 },
  { name: "Git", level: 80 },
  { name: "CI/CD", level: 65 },
];

export const projectPlaceholders = [
  "Project One",
  "Project Two",
  "Project Three",
];

export const education: ResumeItem[] = [
  {
    title: "Bachelor's Degree in Computer Science",
    subtitle: "Your University Name",
    timeline: "2018 - 2022",
    detail: "Add your degree details, achievements, and relevant coursework here.",
  },
];

export const experience: ResumeItem[] = [
  {
    title: "Frontend Developer",
    subtitle: "Your Company Name",
    timeline: "2022 - Present",
    detail: "Add your responsibilities, impact, and notable results here.",
  },
];
