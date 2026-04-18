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
   * Branch image ID for hero image resolution only.
   * Topic/post cards are text-first and never auto-fall back to hero.
   */
  branchId?: SlotBranch;
  /**
   * Explicit hero image override (takes precedence over manifest resolution).
   */
  heroImage?: { src: string; alt: string };
};

const cleanPublicText = (text: string): string => {
  return text
    .replace(/\b[Nn]hánh\b/g, (m) => (m[0] === "N" ? "Chuyên đề" : "chuyên đề"))
    .replace(/\b[Cc]ụm\b/g, (m) => (m[0] === "C" ? "Chuyên đề" : "chuyên đề"))
    .replace(/\b[Dd]emo\b/g, "")
    .replace(/\b[Dd]raft\b/g, "")
    .replace(/\bcoming\s+soon\b/gi, "")
    .replace(/\bseed\s+content\b/gi, "")
    .replace(/\bseed\s+data\b/gi, "")
    .replace(/\bplaceholder\s+content\b/gi, "")
    .replace(/\bpage\b/gi, "")
    .replace(/nhập nội dung tại đây/gi, "")
    .replace(/thêm nội dung sau/gi, "")
    .replace(/cập nhật sau/gi, "")
    .replace(/dữ liệu mẫu/gi, "")
    .replace(/nội dung mẫu/gi, "")
    .replace(/nội dung thử nghiệm/gi, "")
    .replace(/text tạm/gi, "")
    .replace(/mô tả tạm/gi, "")
    .replace(/hướng dẫn editor/gi, "")
    .replace(/hướng dẫn nhập liệu/gi, "")
    .replace(/đang biên soạn/gi, "")
    .replace(/sẽ cập nhật sau/gi, "")
    .replace(/đang phát triển/gi, "")
    .replace(/đang hoàn thiện/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim();
};

export function BranchLandingPageSection({
  content,
  locale,
  labels,
  branchId,
  heroImage: heroImageProp,
}: BranchLandingPageSectionProps) {
  // Resolve hero image: explicit prop > manifest > null.
  // No fallback to wellness placeholder — show nothing if no real image exists.
  const resolvedHeroSrc =
    heroImageProp?.src ??
    (branchId ? getImageForSlotStrict(`${branchId}.hero`) : null);
  const resolvedHeroAlt = heroImageProp?.alt ?? content.title[locale];

  return (
    <section className="py-10 lg:py-14">
      <Container>
        <div className="mx-auto max-w-[1060px] space-y-5">

          {/* ── Main card ─────────────────────────────────────────────── */}
          <div className="rounded-[24px] border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[0_12px_28px_rgba(90,154,108,0.08)] lg:p-8">

            {/* Hero image — shown only when a real image exists for this branch */}
            {resolvedHeroSrc && (
              <div className="media-frame relative mb-6 aspect-[21/9] rounded-[16px]">
                <Image
                  src={resolvedHeroSrc}
                  alt={resolvedHeroAlt}
                  fill
                  priority
                  sizes="(max-width: 1060px) 100vw, 1060px"
                  className="media-img-cover"
                />
              </div>
            )}

            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-teal)]">
              {cleanPublicText(content.heroKicker[locale])}
            </p>
            <h1 className="mt-2 text-[clamp(1.9rem,3.6vw,3rem)] font-semibold text-[var(--color-text-strong)]">
              {cleanPublicText(content.title[locale])}
            </h1>
            <p className="mt-4 max-w-[68ch] text-base text-[var(--color-text-muted)] lg:text-lg">
              {cleanPublicText(content.description[locale])}
            </p>

            {/* ── Topic cluster grid — text-first, no image fallback ── */}
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {content.clusters.map((cluster) => {
                // Only use a real manifest image — never fall back to branch hero
                const clusterImageSrc = branchId
                  ? getImageForSlotStrict(`${branchId}.topic.${cluster.id}`)
                  : null;

                return (
                  <article
                    key={cluster.id}
                    id={cluster.id}
                    className="group relative flex flex-col overflow-hidden rounded-[20px] border border-[var(--color-border)] bg-white"
                  >
                    {/* Pastel accent line at top */}
                    <div className="h-[3px] w-full bg-[linear-gradient(90deg,var(--color-sage),var(--color-mint))]" aria-hidden="true" />

                    {/* Image — only if one truly exists for this slot */}
                    {clusterImageSrc && (
                      <div className="media-frame relative aspect-[4/3] w-full shrink-0 rounded-t-[20px]">
                        <Image
                          src={clusterImageSrc}
                          alt={cluster.title[locale]}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="media-img-cover"
                        />
                      </div>
                    )}

                    <div className="flex flex-1 flex-col p-4">
                      <h2 className="text-[1.03rem] font-semibold leading-[1.32] text-[var(--color-text-strong)]">
                        {cleanPublicText(cluster.title[locale])}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                        {cleanPublicText(cluster.summary[locale])}
                      </p>

                      {/* Open question — if present */}
                      {cluster.prompt && (
                        <p className="mt-3 text-sm italic text-[var(--color-navy)] opacity-80">
                          {cleanPublicText(cluster.prompt[locale])}
                        </p>
                      )}

                      <Link
                        href={cluster.href}
                        className="mt-auto pt-4 text-sm font-semibold text-[var(--color-navy)] transition-colors hover:text-[var(--color-primary-strong)]"
                      >
                        {cleanPublicText(labels.openCluster)}
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* ── Documentary block — separate from cluster grid ──────── */}
            {content.documentaryBlock && (
              <div
                id={content.documentaryBlock.href.split("#")[1] ?? "goc-nhin-phim-tai-lieu"}
                className="mt-6 rounded-[20px] border border-[var(--color-border)] bg-[linear-gradient(135deg,var(--color-accent-light),var(--color-mint))] p-5 lg:p-6"
              >
                <h2 className="text-[1.12rem] font-semibold leading-[1.35] text-[var(--color-text-strong)]">
                  {cleanPublicText(content.documentaryBlock.title[locale])}
                </h2>
                <p className="mt-2 max-w-[72ch] text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {cleanPublicText(content.documentaryBlock.description[locale])}
                </p>

                {/* Focus axes */}
                {content.documentaryBlock.axes.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2" role="list" aria-label="Trục nội dung">
                    {content.documentaryBlock.axes.map((axis, i) => (
                      <li
                        key={i}
                        className="rounded-full border border-[rgba(191,221,226,0.55)] bg-white px-3 py-1 text-xs font-medium text-[var(--color-navy)]"
                      >
                        {cleanPublicText(axis[locale])}
                      </li>
                    ))}
                  </ul>
                )}

                <Link
                  href={content.documentaryBlock.href}
                  className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--color-navy)] transition-colors hover:text-[var(--color-primary-strong)]"
                >
                  {locale === "vi" ? "Xem góc nhìn này" : "Explore this perspective"} →
                </Link>
              </div>
            )}

            {/* ── Related directions ───────────────────────────────────── */}
            <section className="mt-6 rounded-[20px] border border-[var(--color-border)] bg-[linear-gradient(150deg,rgba(221,242,232,0.22),rgba(228,246,239,0.2))] p-5 lg:p-6">
              <h2 className="text-[1.08rem] font-semibold leading-[1.35] text-[var(--color-text-strong)]">
                {cleanPublicText(labels.relatedHeading)}
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {content.relatedDirections.map((item) => (
                  <Link
                    key={`${content.slug}-${item.href}`}
                    href={item.href}
                    className="group rounded-[16px] border border-[var(--color-border)] bg-[rgba(251,253,251,0.9)] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-sage)]"
                  >
                    <p className="text-sm font-semibold text-[var(--color-text-strong)] transition-colors group-hover:text-[var(--color-navy)]">
                      {cleanPublicText(item.title[locale])}
                    </p>
                    <p className="mt-1.5 text-xs text-[var(--color-text-muted)]">{cleanPublicText(item.description[locale])}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* ── CTAs ────────────────────────────────────────────────── */}
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={content.primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(90,154,108,0.18)] transition-all duration-200 hover:bg-[var(--color-primary-strong)]"
              >
                {cleanPublicText(content.primaryCta.label[locale])}
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[rgba(251,253,251,0.94)] px-5 py-2.5 text-sm font-semibold text-[var(--color-navy)] transition-all duration-200 hover:bg-[var(--color-accent-light)]"
              >
                {cleanPublicText(labels.backToHome)}
              </Link>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
