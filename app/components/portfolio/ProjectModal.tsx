"use client";

import { useEffect } from "react";
import type { Project } from "./data";
import { ProjectMedia } from "./ProjectMedia";

type ProjectModalProps = {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
};

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <div
      className={`fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-6 ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        aria-label="Close project details"
        onClick={onClose}
        className={`absolute inset-0 bg-slate-950/50 backdrop-blur-[2px] transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className={`relative z-10 flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl transition-all duration-300 ease-out sm:rounded-2xl ${
          isOpen ? "translate-y-0 scale-100 opacity-100" : "translate-y-8 scale-95 opacity-0"
        }`}
      >
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-5">
          <ProjectMedia src={project.image} alt={project.name} />

          <h3 id="project-modal-title" className="mt-5 text-2xl font-bold text-slate-900 sm:text-3xl">
            {project.name}
          </h3>

          <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-600">{project.description}</p>

          {project.technologies.length > 0 ? (
            <div className="mt-6">
              <h4 className="text-base font-semibold text-slate-800">Technologies Used</h4>
              <ul className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2">
                {project.technologies.map((technology) => (
                  <li key={technology} className="text-sm font-medium text-slate-700">
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
              Live Demo
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
