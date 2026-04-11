import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { FeaturedReadingSectionContent } from "@/data/homepageSections";

type FeaturedReadingSectionProps = {
  content: FeaturedReadingSectionContent;
};

export function FeaturedReadingSection({ content }: FeaturedReadingSectionProps) {
  return (
    <section className="pb-16 lg:pb-24">
      <Container>
        <div className="mx-auto max-w-[980px] text-center">
          <SectionTitle title={content.title} eyebrow={content.eyebrow} />
          <p className="mx-auto mt-4 max-w-[64ch] text-[0.98rem] text-[var(--color-text-muted)]">{content.description}</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {content.cards.map((card) => (
            <Card
              key={card.title}
              className="flex h-full flex-col p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_15px_28px_rgba(36,76,99,0.09)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-teal)]">{card.kicker}</p>
              <h3 className="mt-3 text-[1.2rem] font-semibold leading-[1.34] text-[var(--color-text-strong)]">{card.title}</h3>
              <p className="mt-3 text-sm text-[var(--color-text-muted)]">{card.summary}</p>

              <Link
                href={card.href}
                className="mt-auto pt-5 text-sm font-semibold text-[var(--color-navy)] transition-colors duration-200 hover:text-[#1f4256]"
              >
                {card.ctaLabel}
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
