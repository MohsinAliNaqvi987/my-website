"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectMediaProps = {
  src: string;
  alt: string;
  className?: string;
  zoomOnHover?: boolean;
};

export function ProjectMedia({ src, alt, className = "", zoomOnHover = true }: ProjectMediaProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex aspect-[4/3] items-center justify-center rounded-xl bg-slate-100 text-sm font-medium text-slate-500 ${className}`}
      >
        Project Image Placeholder
      </div>
    );
  }

  return (
    <div
      className={`relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 ${
        zoomOnHover ? "group" : ""
      } ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className={`object-cover ${
          zoomOnHover
            ? "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-[1.05] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            : ""
        }`}
        onError={() => setHasError(true)}
      />
    </div>
  );
}
