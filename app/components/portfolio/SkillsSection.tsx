 "use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { skillsByCategory } from "./data";

export function SkillsSection() {
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [visibleCards, setVisibleCards] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = Number((entry.target as HTMLDivElement).dataset.cardIndex);
          const category = skillsByCategory[idx];
          if (!category) return;

          setVisibleCards((prev) => ({ ...prev, [category.title]: true }));
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.4,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <h2 className="section-title">Skills</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {skillsByCategory.map((category, cardIndex) => (
            <div
              key={category.title}
              ref={(node) => {
                cardRefs.current[cardIndex] = node;
              }}
              data-card-index={cardIndex}
              className={`rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all duration-500 ${
                visibleCards[category.title] ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${cardIndex * 100}ms` }}
            >
              <h3 className="mb-5 text-xl font-bold text-slate-800">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
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
                            width: visibleCards[category.title] ? `${skill.level}%` : "0%",
                            transitionDelay: `${skillIndex * 140}ms`,
                          } as CSSProperties
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
