import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { AppLocale } from "@/lib/locale";
import type { ContentBranchLandingI18n } from "@/data/contentBranchesI18n";
import { getImageForSlotStrict } from "@/lib/getImageForSlot";
import type { SlotBranch } from "@/data/imageSlots";

type BranchLandingPageSectionProps = {
  content: ContentBranchLandingI18n;
  locale: AppLocale;
  labels: {
    relatedHeading: string;
    openCluster: string;
    backToHome: string;
  };
  /**
   * Branch image ID for automatic slot-based image resolution.
   * When provided, the hero image and cluster card images are resolved
   * from the image manifest using getImageForSlot.
   */
  branchId?: SlotBranch;
  /**
   * Explicit hero image override. When set, takes precedence over
   * the manifest-resolved image for this branch's hero slot.
   */
  heroImage?: { src: string; alt: string };
};

export function BranchLandingPageSection({
  content,
  locale,
  labels,
  branchId,
  heroImage: heroImageProp,
}: BranchLandingPageSectionProps) {
  // Resolve hero image: explicit prop > manifest > null
  const resolvedHeroSrc =
    heroImageProp?.src ??
    (branchId ? getImageForSlotStrict(`${branchId}.hero`) : null);
  const resolvedHeroAlt = heroImageProp?.alt ?? content.title[locale];

  return (
    <section className="py-10 lg:py-14">
      <Container>
        <div className="mx-auto max-w-[1060px]">
          <div className="rounded-[24px] border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[0_16px_34px_rgba(223,166,184,0.14)] lg:p-8">

            {/* Hero image — shown only when a real image is available */}
            {resolvedHeroSrc && (
              <div className="relative mb-6 aspect-[21/9] overflow-hidden rounded-[16px]">
                <Image
                  src={resolvedHeroSrc}
                  alt={resolvedHeroAlt}
                  fill
                  priority
                  sizes="(max-width: 1060px) 100vw, 1060px"
                  className="object-cover object-center"
                />
              </div>
            )}

            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-teal)]">{content.heroKicker[locale]}</p>
            <h1 className="mt-2 text-[clamp(1.9rem,3.6vw,3rem)] font-semibold text-[var(--color-text-strong)]">{content.title[locale]}</h1>
            <p className="mt-4 max-w-[68ch] text-base text-[var(--color-text-muted)] lg:text-lg">{content.description[locale]}</p>

            <div className="mt-7 grid gap-4 lg:grid-cols-3">
              {content.clusters.map((cluster) => {
                // Attempt to resolve a topic image for this cluster card
                const clusterImageSrc = branchId
                  ? getImageForSlotStrict(`${branchId}.topic.${cluster.id}`)
                  : null;

                return (
                <article
                  key={cluster.id}
                  id={cluster.id}
                  className="flex h-full flex-col rounded-[20px] border border-[var(--color-border)] bg-[rgba(255,253,253,0.94)] overflow-hidden"
                >
                  {/* Cluster image — shown only when a real image is available */}
                  {clusterImageSrc && (
                    <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden">
                      <Image
                        src={clusterImageSrc}
                        alt={cluster.title[locale]}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover object-center"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-4">
                    <h2 className="text-lg font-semibold leading-[1.32] text-[var(--color-text-strong)]">{cluster.title[locale]}</h2>
                    <p className="mt-2 text-sm text-[var(--color-text-muted)]">{cluster.summary[locale]}</p>
                    <Link
                      href={cluster.href}
                      className="mt-auto pt-4 text-sm font-semibold text-[var(--color-navy)] transition-colors hover:text-[var(--color-primary-strong)]"
                    >
                      {labels.openCluster}
                    </Link>
                  </div>
                </article>
                );
              })}
            </div>

            <section className="mt-8 rounded-[20px] border border-[var(--color-border)] bg-[linear-gradient(150deg,rgba(191,221,226,0.22),rgba(230,175,192,0.2))] p-5 lg:p-6">
              <h2 className="text-[1.16rem] font-semibold leading-[1.35] text-[var(--color-text-strong)]">{labels.relatedHeading}</h2>
              <div className="mt-4 grid gap-3 lg:grid-cols-3">
                {content.relatedDirections.map((item) => (
                  <Link
                    key={`${content.slug}-${item.href}`}
                    href={item.href}
                    className="group rounded-[16px] border border-[var(--color-border)] bg-[rgba(255,253,253,0.9)] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(223,166,184,0.68)]"
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
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text-strong)] shadow-[0_12px_26px_rgba(223,166,184,0.24)] transition-all duration-200 hover:bg-[var(--color-primary-strong)]"
              >
                {content.primaryCta.label[locale]}
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[rgba(255,253,253,0.94)] px-5 py-2.5 text-sm font-semibold text-[var(--color-navy)] transition-all duration-200 hover:bg-[rgba(191,221,226,0.3)]"
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
