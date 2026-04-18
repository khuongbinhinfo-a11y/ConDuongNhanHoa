import Link from "next/link";
import { Container } from "@/components/ui/Container";

export type SpotlightTopic = {
  title: string;
};

type SpotlightSectionProps = {
  title: string;
  description: string;
  topics: SpotlightTopic[];
  ctaLabel: string;
  ctaHref: string;
};

export function SpotlightSection({ title, description, topics, ctaLabel, ctaHref }: SpotlightSectionProps) {
  return (
    <section className="py-10 lg:py-14">
      <Container>
        <div className="mx-auto max-w-[860px] overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-[linear-gradient(155deg,rgba(252,254,251,0.98),rgba(228,246,239,0.14),rgba(221,242,232,0.18))] p-6 shadow-[0_10px_26px_rgba(90,154,108,0.08)] lg:p-8">
          <h2 className="text-[clamp(1.25rem,2.2vw,1.6rem)] font-semibold leading-[1.35] text-[var(--color-text-strong)]">
            {title}
          </h2>
          <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-[var(--color-text-muted)]">
            {description}
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {topics.map((topic, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-[14px] border border-[var(--color-border)] bg-[rgba(252,254,251,0.85)] p-3.5"
              >
                <span className="mt-[0.35rem] h-[6px] w-[6px] shrink-0 rounded-full bg-[var(--color-primary)]" aria-hidden="true" />
                <p className="text-sm font-medium leading-[1.4] text-[var(--color-text-strong)]">{topic.title}</p>
              </div>
            ))}
          </div>

          <Link
            href={ctaHref}
            className="mt-5 inline-flex items-center text-sm font-semibold text-[var(--color-navy)] transition-colors hover:text-[var(--color-primary-strong)]"
          >
            {ctaLabel} →
          </Link>
        </div>
      </Container>
    </section>
  );
}
