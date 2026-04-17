import Link from "next/link";
import { Container } from "@/components/ui/Container";

export type BranchCard = {
  title: string;
  description: string;
  highlights: string[];
  href: string;
  ctaLabel: string;
};

type ThreeBranchesSectionProps = {
  heading: string;
  cards: BranchCard[];
};

const accentColors = [
  "bg-[rgba(230,175,192,0.55)]",
  "bg-[rgba(191,221,226,0.6)]",
  "bg-[rgba(199,227,232,0.55)]",
];

export function ThreeBranchesSection({ heading, cards }: ThreeBranchesSectionProps) {
  return (
    <section id="entry-cards" className="pb-14 pt-2 lg:pb-20">
      <Container>
        <h2 className="mb-6 text-center text-[clamp(1.4rem,2.4vw,1.9rem)] font-semibold text-[var(--color-text-strong)] lg:mb-8">
          {heading}
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {cards.map((card, index) => (
            <article
              key={card.title}
              className="relative flex flex-col overflow-hidden rounded-[22px] border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[0_10px_26px_rgba(223,166,184,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(223,166,184,0.18)]"
            >
              {/* Accent bar */}
              <div className={`absolute inset-x-0 top-0 h-[3px] ${accentColors[index % 3]}`} aria-hidden="true" />

              <h3 className="mt-1 text-[1.15rem] font-semibold leading-[1.3] text-[var(--color-text-strong)]">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {card.description}
              </p>

              <ul className="mt-4 space-y-2 border-t border-[var(--color-border)] pt-4">
                {card.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[var(--color-text-strong)]">
                    <span className="mt-[0.38rem] h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--color-primary)]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href={card.href}
                className="mt-auto pt-5 text-sm font-semibold text-[var(--color-navy)] transition-colors hover:text-[var(--color-primary-strong)]"
              >
                {card.ctaLabel} →
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
