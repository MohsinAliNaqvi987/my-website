export type Skill = {
  name: string;
  level: number;
};

export type SkillCategory = {
  title: "Frontend" | "Backend" | "Tools" | "DevOps";
  skills: Skill[];
};

export type ResumeItem = {
  title: string;
  subtitle: string;
  timeline: string;
  detail: string;
};

export const skillsByCategory: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Vue.js", level: 75 },
      { name: "HTML & CSS", level: 85 },
      { name: "JavaScript / TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 75 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "NestJS", level: 75 },
      { name: "Node.js", level: 78 },
      { name: "Laravel", level: 75 },
      { name: "SQL", level: 85 },
      { name: "MongoDB", level: 75 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 80 },
      { name: "Postman", level: 85 },
      { name: "Docker", level: 65 },
      { name: "VS Code", level: 90 },
      { name: "Cursor", level: 85 }
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "CI/CD", level: 65 },
      { name: "Github Actions", level: 50 }
    ],
  },
];

export const projectPlaceholders = [
  "Project One",
  "Project Two",
  "Project Three",
];

export const education: ResumeItem[] = [
  {
    title: "Bachelor's Degree in Computer Science",
    subtitle: "COMSATS University Islamabad",
    timeline: "2016 - 2020",
    detail: "Graduated from COMSATS University Islamabad with a strong academic record, achieving a CGPA of 3.43.",
  },
  {
    title: "F.Sc. Pre-Engineering",
    subtitle: "Punjab College of Information Technology",
    timeline: "2014 - 2016",
    detail: "Passed and secured 78% marks.",
  },
  {
    title: "Matriculation",
    subtitle: "Prestige Public Secondary School",
    timeline: "2003 - 2014",
    detail: "Passed with distinction and secured 84% marks.",
  },
];

export const experience: ResumeItem[] = [
  {
    title: "Sr. Software Engineer",
    subtitle: "RockVille Technologies",
    timeline: "Jan 2025 - Present",
    detail: "Development of scalable web applications using Next.js, React, and NestJS. Designing and optimizing backend services for performance and reliability. Working closely with DevOps/NOC teams to support CI/CD workflows and Docker-based deployments, while ensuring best practices in code quality, system design, and maintainability. Contributing to the development of scalable web applications using Next.js, React, and NestJS. Designing and optimizing backend services to ensure high performance, reliability, and maintainability. Collaborating with DevOps/NOC teams to align on CI/CD workflows and Docker-based deployments, with a solid understanding of containerization practices. Supporting and mentoring junior developers while promoting best practices in code quality.",
  },
  {
    title: "Software Engineer",
    subtitle: "RockVille Technologies",
    timeline: "May 2022 - Dec 2024",
    detail: "Developed and maintained web applications using React, NestJS, Material UI, and MongoDB.",
  },
  {
    title: "Jr. Software Engineer",
    subtitle: "RockVille Technologies",
    timeline: "Feb 2021 - May 2022",
    detail: "Working on the development of web applications using Vue.js and Laravel.",
  },
  {
    title: "React Developer",
    subtitle: "SECTEM Technologies",
    timeline: "Oct 2020 - Jan 2021",
    detail: "Built dynamic React.js components with React Bootstrap, improving responsiveness and reducing load time.",
  },
];
