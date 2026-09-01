type ProjectStackBadgeProps = {
  label: string;
  className?: string;
};

export function ProjectStackBadge({ label, className = "" }: ProjectStackBadgeProps) {
  return (
    <p
      className={`mb-2 inline-block max-w-full truncate rounded-full bg-black px-2 py-0.5 text-[11px] font-semibold text-white sm:text-xs ${className}`}
    >
      {label}
    </p>
  );
}
