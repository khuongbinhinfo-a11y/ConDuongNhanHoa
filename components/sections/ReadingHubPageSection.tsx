import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { ReadingHubContent } from "@/data/readingHubs";

type ReadingHubPageSectionProps = {
  content: ReadingHubContent;
};

export function ReadingHubPageSection({ content }: ReadingHubPageSectionProps) {
  return (
    <section className="py-10 lg:py-14">
      <Container>
        <div className="mx-auto max-w-[1060px]">
          <div className="rounded-[24px] border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[0_16px_34px_rgba(36,76,99,0.08)] lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-teal)]">
              {content.heroKicker}
            </p>
            <h1 className="mt-2 text-[clamp(1.9rem,3.6vw,3rem)] font-semibold text-[var(--color-text-strong)]">
              {content.title}
            </h1>
            <p className="mt-4 max-w-[68ch] text-base text-[var(--color-text-muted)] lg:text-lg">
              {content.description}
            </p>

            <div className="mt-7 grid gap-4 lg:grid-cols-3">
              {content.cards.map((card) => (
                <article
                  key={card.id}
                  id={card.id}
                  className="flex h-full flex-col rounded-[20px] border border-[var(--color-border)] bg-[rgba(251,248,242,0.92)] p-4"
                >
                  <h2 className="text-lg font-semibold leading-[1.32] text-[var(--color-text-strong)]">
                    {card.title}
                  </h2>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">{card.summary}</p>
                  <Link
                    href={card.href}
                    className="mt-auto pt-4 text-sm font-semibold text-[var(--color-navy)] transition-colors hover:text-[#1f4256]"
                  >
                    Xem bài mẫu
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-navy)] px-5 py-2.5 text-sm font-semibold text-[#F6F1E8] shadow-[0_12px_26px_rgba(36,76,99,0.20)] transition-all duration-200 hover:bg-[#1f4256]"
              >
                Quay lại trang chủ
              </Link>
              <Link
                href="/quiz"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[rgba(251,248,242,0.92)] px-5 py-2.5 text-sm font-semibold text-[var(--color-navy)] transition-all duration-200 hover:bg-[rgba(220,232,221,0.55)]"
              >
                Làm lại quiz định hướng
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
