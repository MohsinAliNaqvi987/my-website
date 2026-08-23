"use client";

import { useRef, useState } from "react";
import type { Project } from "./data";
import { ProjectMedia } from "./ProjectMedia";
import { ProjectModal } from "./ProjectModal";

type PortfolioSectionProps = {
  projectPlaceholders: Project[];
};

const CARD_DESCRIPTION_LIMIT = 92;

function getCardDescription(description: string) {
  const trimmed = description.replace(/\s+/g, " ").trim();
  if (trimmed.length <= CARD_DESCRIPTION_LIMIT) {
    return `${trimmed}...`;
  }

  return `${trimmed.slice(0, CARD_DESCRIPTION_LIMIT).trimEnd()}...`;
}

export function PortfolioSection({ projectPlaceholders }: PortfolioSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeTimeoutRef = useRef<number | null>(null);

  const openProjectModal = (project: Project) => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    setSelectedProject(project);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsModalOpen(true));
    });
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    closeTimeoutRef.current = window.setTimeout(() => {
      setSelectedProject(null);
      closeTimeoutRef.current = null;
    }, 300);
  };

  return (
    <section id="portfolio" className="section-padding">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <h2 className="section-title text-center">Portfolio</h2>
        <p className="section-text text-center">
          A collection of projects that showcase my skills and expertise
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectPlaceholders.map((project) => (
            <article
              key={project.id}
              role="button"
              tabIndex={0}
              onClick={() => openProjectModal(project)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openProjectModal(project);
                }
              }}
              className="cursor-pointer rounded-2xl border border-dashed border-slate-300 bg-white p-5 text-left shadow-sm transition hover:border-slate-400 hover:shadow-md"
            >
              <ProjectMedia src={project.image} alt={project.name} className="mb-4" />
              <h3 className="text-lg font-semibold text-slate-800">{project.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {getCardDescription(project.description)}
              </p>
            </article>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeProjectModal} />
    </section>
  );
}
