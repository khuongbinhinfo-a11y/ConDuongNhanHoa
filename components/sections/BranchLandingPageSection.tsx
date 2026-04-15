import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { AppLocale } from "@/lib/locale";
import type { ContentBranchLandingI18n } from "@/data/contentBranchesI18n";

type BranchLandingPageSectionProps = {
  content: ContentBranchLandingI18n;
  locale: AppLocale;
  labels: {
    relatedHeading: string;
    openCluster: string;
    backToHome: string;
  };
};

export function BranchLandingPageSection({ content, locale, labels }: BranchLandingPageSectionProps) {
  return (
    <section className="py-10 lg:py-14">
      <Container>
        <div className="mx-auto max-w-[1060px]">
          <div className="rounded-[24px] border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[0_16px_34px_rgba(36,76,99,0.08)] lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-teal)]">{content.heroKicker[locale]}</p>
            <h1 className="mt-2 text-[clamp(1.9rem,3.6vw,3rem)] font-semibold text-[var(--color-text-strong)]">{content.title[locale]}</h1>
            <p className="mt-4 max-w-[68ch] text-base text-[var(--color-text-muted)] lg:text-lg">{content.description[locale]}</p>

            <div className="mt-7 grid gap-4 lg:grid-cols-3">
              {content.clusters.map((cluster) => (
                <article
                  key={cluster.id}
                  id={cluster.id}
                  className="flex h-full flex-col rounded-[20px] border border-[var(--color-border)] bg-[rgba(251,248,242,0.92)] p-4"
                >
                  <h2 className="text-lg font-semibold leading-[1.32] text-[var(--color-text-strong)]">{cluster.title[locale]}</h2>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">{cluster.summary[locale]}</p>
                  <Link
                    href={cluster.href}
                    className="mt-auto pt-4 text-sm font-semibold text-[var(--color-navy)] transition-colors hover:text-[#1f4256]"
                  >
                    {labels.openCluster}
                  </Link>
                </article>
              ))}
            </div>

            <section className="mt-8 rounded-[20px] border border-[var(--color-border)] bg-[rgba(245,239,230,0.62)] p-5 lg:p-6">
              <h2 className="text-[1.16rem] font-semibold leading-[1.35] text-[var(--color-text-strong)]">{labels.relatedHeading}</h2>
              <div className="mt-4 grid gap-3 lg:grid-cols-3">
                {content.relatedDirections.map((item) => (
                  <Link
                    key={`${content.slug}-${item.href}`}
                    href={item.href}
                    className="group rounded-[16px] border border-[var(--color-border)] bg-[rgba(251,248,242,0.88)] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(31,65,88,0.22)]"
                  >
                    <p className="text-base font-semibold text-[var(--color-text-strong)] transition-colors group-hover:text-[var(--color-navy)]">
                      {item.title[locale]}
                    </p>
                    <p className="mt-1.5 text-sm text-[var(--color-text-muted)]">{item.description[locale]}</p>
                  </Link>
                ))}
              </div>
            </section>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={content.primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-navy)] px-5 py-2.5 text-sm font-semibold text-[#F6F1E8] shadow-[0_12px_26px_rgba(36,76,99,0.20)] transition-all duration-200 hover:bg-[#1f4256]"
              >
                {content.primaryCta.label[locale]}
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[rgba(251,248,242,0.92)] px-5 py-2.5 text-sm font-semibold text-[var(--color-navy)] transition-all duration-200 hover:bg-[rgba(220,232,221,0.55)]"
              >
                {labels.backToHome}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
