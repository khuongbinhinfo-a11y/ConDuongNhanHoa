import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { EntryCardContent } from "@/data/homepage";

type EntryCardsSectionProps = {
  title: string;
  cards: EntryCardContent[];
};

function SoftIcon({ index }: { index: number }) {
  const leafShape = [
    "before:rotate-[20deg] after:rotate-[-18deg]",
    "before:rotate-[-16deg] after:rotate-[26deg]",
    "before:rotate-[34deg] after:rotate-[10deg]",
  ][index % 3];

  return (
    <span
      className={`relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[rgba(251,248,242,0.92)] before:absolute before:h-4 before:w-2 before:rounded-full before:border before:border-[rgba(36,76,99,0.55)] before:border-l-0 before:border-b-0 after:absolute after:h-3 after:w-2 after:rounded-full after:bg-[rgba(111,167,166,0.72)] ${leafShape}`}
      aria-hidden="true"
    />
  );
}

export function EntryCardsSection({ title, cards }: EntryCardsSectionProps) {
  return (
    <section id="entry-cards" className="pb-16 pt-4 lg:pb-24">
      <Container>
        <SectionTitle title={title} eyebrow="3 Lối Vào Chính" className="mb-6 lg:mb-8" />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => (
            <Card
              key={card.title}
              className="flex h-full flex-col p-6 hover:-translate-y-1 hover:shadow-[0_18px_32px_rgba(36,76,99,0.10)]"
            >
              <div
                className={`pointer-events-none absolute -right-14 -top-12 h-40 w-40 rounded-[44%_56%_48%_52%] ${
                  index === 0
                    ? "bg-[radial-gradient(circle_at_35%_35%,rgba(111,167,166,0.45),rgba(111,167,166,0.08))]"
                    : index === 1
                      ? "bg-[radial-gradient(circle_at_35%_35%,rgba(220,232,221,0.85),rgba(220,232,221,0.25))]"
                      : "bg-[radial-gradient(circle_at_35%_35%,rgba(36,76,99,0.24),rgba(36,76,99,0.06))]"
                }`}
              />

              <SoftIcon index={index} />
              <h3 className="mt-4 text-[1.38rem] font-semibold leading-[1.28] text-[var(--color-text-strong)]">{card.title}</h3>
              <p className="mt-3 text-sm text-[var(--color-text-muted)] lg:text-[0.98rem]">{card.description}</p>
              <a href={card.href} className="mt-auto pt-5 text-sm font-semibold text-[var(--color-navy)]">
                Xem thêm
              </a>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
