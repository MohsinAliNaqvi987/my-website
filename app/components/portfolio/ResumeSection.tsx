import type { ResumeItem } from "./data";

type ResumeSectionProps = {
  education: ResumeItem[];
  experience: ResumeItem[];
};

export function ResumeSection({ education, experience }: ResumeSectionProps) {
  return (
    <section id="resume" className="section-padding">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-2">
        <div>
          <h2 className="section-title">Education</h2>
          <div className="mt-6 space-y-4">
            {education.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800">{item.title}</h3>
                <p className="text-sm font-medium text-sky-700">{item.subtitle}</p>
                <p className="mt-1 text-sm text-slate-500">{item.timeline}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
        <div>
          <h2 className="section-title">Work Experience</h2>
          <div className="mt-6 space-y-4">
            {experience.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800">{item.title}</h3>
                <p className="text-sm font-medium text-sky-700">{item.subtitle}</p>
                <p className="mt-1 text-sm text-slate-500">{item.timeline}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
