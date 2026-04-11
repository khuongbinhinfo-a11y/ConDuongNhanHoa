import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { EntryCardContent } from "@/data/homepageData";

type EntryCardsEditorialSectionProps = {
  title: string;
  cards: EntryCardContent[];
};

function OrganicIcon({ index }: { index: number }) {
  const shape = [
    "before:rotate-[18deg] after:rotate-[-16deg]",
    "before:rotate-[-14deg] after:rotate-[22deg]",
    "before:rotate-[28deg] after:rotate-[8deg]",
  ][index % 3];

  return (
    <span
      className={`relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[rgba(251,247,241,0.92)] before:absolute before:h-4 before:w-2 before:rounded-full before:border before:border-[rgba(31,65,88,0.54)] before:border-b-0 before:border-l-0 after:absolute after:h-3 after:w-2 after:rounded-full after:bg-[rgba(109,159,155,0.66)] ${shape}`}
      aria-hidden="true"
    />
  );
}

export function EntryCardsEditorialSection({ title, cards }: EntryCardsEditorialSectionProps) {
  return (
    <section id="entry-cards" className="pb-16 pt-4 lg:pb-24">
      <Container>
        <SectionTitle title={title} eyebrow="Lối vào chính" className="mb-6 lg:mb-8" />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-12">
          {cards.map((card, index) => {
            const isLead = index === 0;
            return (
              <Card
                key={card.title}
                className={`flex h-full flex-col overflow-hidden ${
                  isLead
                    ? "md:col-span-2 xl:col-span-6 bg-[linear-gradient(155deg,rgba(217,228,218,0.58),rgba(251,247,241,0.96))] p-7 lg:p-8"
                    : "xl:col-span-3 p-6"
                } transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(31,65,88,0.10)]`}
              >
                <div
                  className={`pointer-events-none absolute -right-12 -top-10 h-36 w-36 rounded-[42%_58%_50%_50%] ${
                    isLead
                      ? "bg-[radial-gradient(circle_at_35%_35%,rgba(109,159,155,0.44),rgba(109,159,155,0.08))]"
                      : "bg-[radial-gradient(circle_at_35%_35%,rgba(217,228,218,0.88),rgba(217,228,218,0.2))]"
                  }`}
                />

                {isLead ? (
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-teal)]">
                    Gợi ý bắt đầu
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
                  Xem thêm
                </Link>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
