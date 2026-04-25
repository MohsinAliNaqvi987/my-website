import type { CSSProperties, RefObject } from "react";
import type { Skill } from "./data";

type SkillsSectionProps = {
  sectionRef: RefObject<HTMLElement | null>;
  skills: Skill[];
  skillsAnimated: boolean;
};

export function SkillsSection({ sectionRef, skills, skillsAnimated }: SkillsSectionProps) {
  return (
    <section id="skills" ref={sectionRef} className="section-padding bg-white">
      <div className="mx-auto w-full max-w-4xl space-y-8">
        <h2 className="section-title">Skills</h2>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex items-center justify-between text-sm font-semibold text-slate-700">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-slate-200">
                <div
                  className="skill-fill"
                  style={
                    {
                      "--skill-level": `${skill.level}%`,
                      transitionDelay: `${index * 120}ms`,
                      width: skillsAnimated ? `${skill.level}%` : "0%",
                    } as CSSProperties
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
