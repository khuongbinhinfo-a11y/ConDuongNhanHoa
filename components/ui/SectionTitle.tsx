type SectionTitleProps = {
  title: string;
  eyebrow?: string;
  className?: string;
};

export function SectionTitle({ title, eyebrow, className = "" }: SectionTitleProps) {
  return (
    <header className={className}>
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-teal)]">{eyebrow}</p>
      ) : null}
      <h2 className="text-[clamp(1.7rem,2.6vw,2.4rem)] font-semibold text-[var(--color-text-strong)]">{title}</h2>
    </header>
  );
}
