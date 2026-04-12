import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export type EntryEditorialCard = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
};

type EntryCardsEditorialSectionProps = {
  title: string;
  eyebrow?: string;
  leadLabel?: string;
  cards: EntryEditorialCard[];
};

function OrganicIcon({ index }: { index: number }) {
  const shape = [
    "before:rotate-[18deg] after:rotate-[-16deg]",
    "before:rotate-[-14deg] after:rotate-[22deg]",
    "before:rotate-[28deg] after:rotate-[8deg]",
  ][index % 3];

  return (
    <span
      className={`relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[linear-gradient(155deg,rgba(252,250,246,0.92),rgba(220,232,221,0.65))] before:absolute before:h-4 before:w-2 before:rounded-full before:border before:border-[rgba(30,62,82,0.52)] before:border-b-0 before:border-l-0 after:absolute after:h-3 after:w-2 after:rounded-full after:bg-[rgba(115,154,150,0.72)] ${shape}`}
      aria-hidden="true"
    />
  );
}

export function EntryCardsEditorialSection({ title, eyebrow, leadLabel, cards }: EntryCardsEditorialSectionProps) {
  return (
    <section id="entry-cards" className="pb-16 pt-4 lg:pb-24">
      <Container>
        <SectionTitle title={title} eyebrow={eyebrow} className="mb-6 lg:mb-8" />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-12">
          {cards.map((card, index) => {
            const isLead = index === 0;
            return (
              <Card
                key={card.title}
                className={`flex h-full flex-col overflow-hidden ${
                  isLead
                    ? "md:col-span-2 xl:col-span-6 bg-[linear-gradient(155deg,rgba(220,232,221,0.72),rgba(252,250,246,0.96))] p-7 lg:p-8"
                    : "xl:col-span-3 bg-[linear-gradient(165deg,rgba(252,250,246,0.94),rgba(227,236,226,0.62))] p-6"
                } transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(31,65,88,0.10)]`}
              >
                <div
                  className={`pointer-events-none absolute -right-12 -top-10 h-36 w-36 rounded-[42%_58%_50%_50%] ${
                    isLead
                      ? "bg-[radial-gradient(circle_at_35%_35%,rgba(115,154,150,0.46),rgba(115,154,150,0.1))]"
                      : "bg-[radial-gradient(circle_at_35%_35%,rgba(220,232,221,0.92),rgba(217,228,218,0.24))]"
                  }`}
                />

                {isLead && leadLabel ? (
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-teal)]">
                    {leadLabel}
                  </p>
                ) : null}

                <OrganicIcon index={index} />
                <h3
                  className={`mt-4 font-semibold leading-[1.3] text-[var(--color-text-strong)] ${
                    isLead ? "text-[1.52rem]" : "text-[1.24rem]"
                  }`}
                >
                  {card.title}
                </h3>
                <p className={`mt-3 text-[var(--color-text-muted)] ${isLead ? "max-w-[50ch] text-[1rem]" : "text-sm"}`}>
                  {card.description}
                </p>

                <Link
                  href={card.href}
                  className="mt-auto pt-5 text-sm font-semibold text-[var(--color-navy)] transition-colors duration-200 hover:text-[#183447]"
                >
                  {card.ctaLabel}
                </Link>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
