import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { FeaturedPathsContent } from "@/data/homepageVisualContent";

type FeaturedPathsSectionProps = {
  content: FeaturedPathsContent;
};

export function FeaturedPathsSection({ content }: FeaturedPathsSectionProps) {
  return (
    <section className="pb-16 lg:pb-24">
      <Container>
        <div className="rounded-[26px] border border-[var(--color-border)] bg-[rgba(251,247,241,0.72)] p-6 lg:p-8">
          <div className="mx-auto max-w-[920px] text-center">
            <SectionTitle title={content.title} eyebrow={content.eyebrow} />
            <p className="mx-auto mt-4 max-w-[66ch] text-[0.98rem] text-[var(--color-text-muted)]">{content.subtitle}</p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {content.cards.map((card, index) => (
              <Card
                key={card.title}
                className={`flex h-full flex-col p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_15px_30px_rgba(31,65,88,0.09)] ${
                  index === 1 ? "bg-[rgba(217,228,218,0.32)]" : ""
                }`}
              >
                <h3 className="text-[1.2rem] font-semibold leading-[1.34] text-[var(--color-text-strong)]">{card.title}</h3>
                <p className="mt-3 text-sm text-[var(--color-text-muted)]">{card.description}</p>
                <Link
                  href={card.href}
                  className="mt-auto pt-5 text-sm font-semibold text-[var(--color-navy)] transition-colors duration-200 hover:text-[#183447]"
                >
                  {card.ctaLabel}
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
