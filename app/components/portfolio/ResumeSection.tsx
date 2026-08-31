"use client";

import type { ResumeItem } from "./data";
import { useInViewOnce } from "./useInViewOnce";

type ResumeSectionProps = {
  education: ResumeItem[];
  experience: ResumeItem[];
};

type TimelineColors = {
  rail: string;
  dotBorder: string;
  dotFill: string;
  dotRing: string;
};

type SlideFrom = "left" | "right";

function TimelineCard({
  item,
  colors,
  isFirst,
  isLast,
  from,
  delayMs,
}: {
  item: ResumeItem;
  colors: TimelineColors;
  isFirst: boolean;
  isLast: boolean;
  from: SlideFrom;
  delayMs: number;
}) {
  const { ref, isVisible } = useInViewOnce<HTMLLIElement>(0.35);

  return (
    <li ref={ref} className="relative pb-4 pl-10 last:pb-0">
      {!isFirst && (
        <span
          className={`pointer-events-none absolute left-[15px] top-0 z-0 w-0.5 -translate-x-1/2 ${colors.rail}`}
          style={{ height: "1.5rem" }}
          aria-hidden
        />
      )}
      {!isLast && (
        <span
          className={`pointer-events-none absolute left-[15px] top-[1.5rem] bottom-0 z-0 w-0.5 -translate-x-1/2 ${colors.rail}`}
          aria-hidden
        />
      )}
      <span
        className={`pointer-events-none absolute left-[15px] top-6 z-[1] h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 ${colors.dotBorder} ${colors.dotFill} shadow-sm ${colors.dotRing}`}
        aria-hidden
      />
      <article
        className={`slide-in rounded-xl border border-slate-200 bg-white p-5 shadow-sm ${
          from === "left" ? "slide-from-left" : "slide-from-right"
        } ${isVisible ? "is-visible" : ""}`}
        style={{ transitionDelay: `${delayMs}ms` }}
      >
        <h3 className="text-lg font-semibold text-slate-800">{item.title}</h3>
        <p className="text-sm font-medium text-sky-700">{item.subtitle}</p>
        <p className="mt-1 text-sm text-slate-500">{item.timeline}</p>
        <p className="mt-3 text-sm leading-6 text-slate-600">{item.detail}</p>
      </article>
    </li>
  );
}

const experienceTimeline: TimelineColors = {
  rail: "bg-gradient-to-b from-sky-400 via-sky-300 to-slate-200",
  dotBorder: "border-sky-500",
  dotFill: "bg-white",
  dotRing: "ring-2 ring-sky-200/80",
};

const educationTimeline: TimelineColors = {
  rail: "bg-gradient-to-b from-violet-400 via-violet-300 to-slate-200",
  dotBorder: "border-violet-500",
  dotFill: "bg-white",
  dotRing: "ring-2 ring-violet-200/80",
};

export function ResumeSection({ education, experience }: ResumeSectionProps) {
  return (
    <section id="resume" className="section-padding reveal-clip bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-2">
        <div>
          <h2 className="section-title">Experience</h2>
          <ol className="relative mt-6 list-none p-0">
            {experience.map((item, index) => (
              <TimelineCard
                key={item.title}
                item={item}
                colors={experienceTimeline}
                isFirst={index === 0}
                isLast={index === experience.length - 1}
                from="left"
                delayMs={index * 120}
              />
            ))}
          </ol>
        </div>
        <div>
          <h2 className="section-title">Education</h2>
          <ol className="relative mt-6 list-none p-0">
            {education.map((item, index) => (
              <TimelineCard
                key={item.title}
                item={item}
                colors={educationTimeline}
                isFirst={index === 0}
                isLast={index === education.length - 1}
                from="right"
                delayMs={index * 120}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
