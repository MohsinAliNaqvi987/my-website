"use client";

import type { IconType } from "react-icons";
import { FaDatabase } from "react-icons/fa6";
import { LuWorkflow } from "react-icons/lu";
import {
  SiDocker,
  SiFirebase,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { useInViewOnce } from "./useInViewOnce";

type Technology = {
  name: string;
  icon: IconType;
  color: string;
};

/* Ordered along a full stack workflow: frontend, backend, languages, data, then delivery.
   Brand hex values are official except where they fail contrast on white (JavaScript's
   #F7DF1E) or clash with the theme (Next.js and Vercel black, matched to slate-900). */
const technologies: Technology[] = [
  { name: "React.js", icon: SiReact, color: "#087EA4" },
  { name: "Next.js", icon: SiNextdotjs, color: "#0F172A" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
  { name: "JavaScript", icon: SiJavascript, color: "#CA8A04" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "SQL", icon: FaDatabase, color: "#475569" },
  { name: "Firebase", icon: SiFirebase, color: "#DD2C00" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "CI/CD", icon: LuWorkflow, color: "#6366F1" },
  { name: "Vercel", icon: SiVercel, color: "#0F172A" },
  { name: "Git", icon: SiGit, color: "#F05032" },
];

/* Flex rather than grid so the final short row stays centred: 14 cards never divide
   evenly into the column counts below. Each width subtracts its share of the row gap
   plus a few px of slack, so sub-pixel rounding can't push a card onto the next row. */
const cardWidth =
  "w-[calc(50%_-_0.4rem)] sm:w-[calc(33.333%_-_0.7rem)] md:w-[calc(25%_-_0.8rem)] lg:w-[calc(20%_-_0.85rem)]";

export function TechnologiesSection() {
  const { ref, isVisible } = useInViewOnce<HTMLUListElement>(0.15);

  return (
    <section id="technologies" className="section-padding">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <h2 className="section-title text-center">Technologies</h2>
        <ul ref={ref} className="flex flex-wrap justify-center gap-3 sm:gap-4" role="list">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <li
                key={tech.name}
                className={`${cardWidth} transition-all duration-500 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                } motion-reduce:transition-none`}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="group flex h-full cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0 max-[400px]:gap-2 max-[400px]:p-3">
                  <Icon
                    aria-hidden="true"
                    style={{ color: tech.color }}
                    className="h-8 w-8 transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100 sm:h-9 sm:w-9 max-[400px]:h-6 max-[400px]:w-6"
                  />
                  <span className="text-sm font-semibold text-slate-700 max-[400px]:text-xs">
                    {tech.name}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Duplicates the cards above, so it is hidden from assistive tech rather than read twice. */}
        <div
          className="overflow-hidden rounded-full border border-slate-200 bg-white py-2 sm:py-2.5"
          aria-hidden="true"
        >
          <div className="tech-marquee">
            <div className="tech-marquee-track">
              {[0, 1].map((copy) => (
                <ul key={copy} className="flex shrink-0 items-center">
                  {technologies.map((tech) => {
                    const Icon = tech.icon;

                    return (
                      <li key={tech.name} className="flex shrink-0 items-center gap-1.5 sm:gap-2">
                        <Icon
                          style={{ color: tech.color }}
                          className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                        />
                        <span className="whitespace-nowrap text-[11px] font-medium text-slate-600 sm:text-xs">
                          {tech.name}
                        </span>
                        <span className="mx-3 h-3 w-px shrink-0 bg-slate-200 sm:mx-4" />
                      </li>
                    );
                  })}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
