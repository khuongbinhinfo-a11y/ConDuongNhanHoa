import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export type FeaturedPathItem = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
};

export type FeaturedPathsContent = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  cards: FeaturedPathItem[];
};

type FeaturedPathsSectionProps = {
  content: FeaturedPathsContent;
};

export function FeaturedPathsSection({ content }: FeaturedPathsSectionProps) {
  const [featuredCard, ...supportCards] = content.cards;

  return (
    <section className="pb-16 lg:pb-24">
      <Container>
        <div className="rounded-[26px] border border-[var(--color-border)] bg-[rgba(251,247,241,0.76)] p-6 shadow-[0_16px_30px_rgba(31,65,88,0.07)] lg:p-8">
          <div className="mx-auto max-w-[920px] text-center">
            <SectionTitle title={content.title} eyebrow={content.eyebrow} />
            <p className="mx-auto mt-4 max-w-[66ch] text-[0.98rem] text-[var(--color-text-muted)]">{content.subtitle}</p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-12">
            {featuredCard ? (
              <Card
                key={featuredCard.title}
                className="lg:col-span-7 lg:row-span-2 flex h-full flex-col rounded-[24px] border-[rgba(31,65,88,0.24)] bg-[linear-gradient(145deg,rgba(31,65,88,0.96),rgba(31,65,88,0.9),rgba(109,159,155,0.42))] p-7 text-[#F5EFE6] shadow-[0_20px_36px_rgba(31,65,88,0.2)] transition-all duration-200 hover:-translate-y-0.5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[rgba(245,239,230,0.8)]">Lối đọc được gợi ý nhiều</p>
                <h3 className="mt-3 text-[1.42rem] font-semibold leading-[1.34] text-[#F5EFE6]">{featuredCard.title}</h3>
                <p className="mt-3 max-w-[54ch] text-sm text-[rgba(245,239,230,0.84)]">{featuredCard.description}</p>
                <Link
                  href={featuredCard.href}
                  className="calm-action calm-action--primary mt-auto inline-flex self-start rounded-full bg-[rgba(245,239,230,0.96)] px-5 py-2.5 text-sm font-semibold text-[var(--color-navy)] shadow-[0_10px_18px_rgba(11,22,30,0.2)] transition-all duration-200 hover:bg-[#f7f1e9]"
                >
                  {featuredCard.ctaLabel}
                </Link>
              </Card>
            ) : null}

            <div className="grid gap-4 lg:col-span-5">
              {supportCards.map((card) => (
                <Card
                  key={card.title}
                  className="flex h-full flex-col p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_15px_30px_rgba(31,65,88,0.09)]"
                >
                  <h3 className="text-[1.16rem] font-semibold leading-[1.34] text-[var(--color-text-strong)]">{card.title}</h3>
                  <p className="mt-3 text-sm text-[var(--color-text-muted)]">{card.description}</p>
                  <Link
                    href={card.href}
                    className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-[var(--color-navy)] transition-colors duration-200 hover:text-[#183447]"
                  >
                    {card.ctaLabel}
                    <span aria-hidden="true">›</span>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
