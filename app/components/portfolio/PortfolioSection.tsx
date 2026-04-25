type PortfolioSectionProps = {
  projectPlaceholders: string[];
};

export function PortfolioSection({ projectPlaceholders }: PortfolioSectionProps) {
  return (
    <section id="portfolio" className="section-padding">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <h2 className="section-title">Portfolio</h2>
        <p className="section-text max-w-3xl">
          This is a dedicated area for your project showcase. In the next phase, you can add
          project thumbnails, descriptions, and live/demo links inside these cards.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectPlaceholders.map((project) => (
            <article
              key={project}
              className="rounded-2xl border border-dashed border-slate-300 bg-white p-5 shadow-sm"
            >
              <div className="mb-4 flex aspect-[4/3] items-center justify-center rounded-xl bg-slate-100 text-sm font-medium text-slate-500">
                Project Image Placeholder
              </div>
              <h3 className="text-lg font-semibold text-slate-800">{project}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Add your project details here in phase two.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
