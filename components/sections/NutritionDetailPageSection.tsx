"use client";

/**
 * SOURCE-OF-TRUTH for detail pages under /dinh-duong-thien-lanh/*
 * Data: nutritionDetailPagesI18n[slug]
 * Renders: sua-va-nhung-dieu-thuong-duoc-tin, chat-dam-hieu-sao-cho-dung,
 *          suc-khoe-chuyen-hoa-va-bua-an-hang-ngay
 */

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { AppLocale } from "@/lib/locale";
import { getDirectImageForSlot } from "@/lib/getImageForSlot";
import {
  nutritionDetailPagesI18n,
  type NutritionDetailPageI18n,
} from "@/data/nutritionDetailPagesI18n";

type NutritionDetailPageSectionProps = {
  content: NutritionDetailPageI18n;
  locale: AppLocale;
};

const t = (text: Record<AppLocale, string>, locale: AppLocale) => text[locale];
const eyebrow = "text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-teal)]";

const DETAIL_READING_ORDER = [
  "sua-va-nhung-dieu-thuong-duoc-tin",
  "chat-dam-hieu-sao-cho-dung",
  "suc-khoe-chuyen-hoa-va-bua-an-hang-ngay",
  "ung-thu-va-nhung-cau-hoi-tu-ban-an",
] as const;

const parseSlugFromHref = (href: string): string | null => {
  const match = href.match(/\/dinh-duong-thien-lanh\/([^/?#]+)/);
  return match?.[1] ?? null;
};

const shorten = (text: string, max = 130): string => {
  if (text.length <= max) {
    return text;
  }
  return `${text.slice(0, max - 1).trimEnd()}...`;
};

export function NutritionDetailPageSection({ content, locale }: NutritionDetailPageSectionProps) {
  const heroSrc = content.heroImageSlotId
    ? getDirectImageForSlot(content.heroImageSlotId)
    : null;

  const suggestedSlug = parseSlugFromHref(content.primaryCtaHref);
  const relatedSlugs = [suggestedSlug, ...DETAIL_READING_ORDER]
    .filter((slug, index, list): slug is string => Boolean(slug) && list.indexOf(slug) === index)
    .filter((slug) => slug !== content.slug && nutritionDetailPagesI18n[slug])
    .slice(0, 3);

  const relatedItems = relatedSlugs.map((slug) => nutritionDetailPagesI18n[slug]);

  return (
    <section className="pb-20 pt-10 lg:pb-24 lg:pt-14">
      <Container>
        <div className="mx-auto max-w-[1020px] space-y-14 lg:space-y-18">
          {/* Breadcrumb */}
          <nav className="text-[0.8rem] text-[var(--color-text-muted)]">
            <Link href="/dinh-duong-thien-lanh" className="transition-colors hover:text-[var(--color-navy)]">
              ← {locale === "vi" ? "Dinh dưỡng thiện lành" : "Wholesome Nutrition"}
            </Link>
          </nav>

          <section className="-mt-6">
            <div className={`grid items-start gap-8 ${heroSrc ? "lg:grid-cols-[1fr_360px]" : ""}`}>
              <div className="max-w-[620px]">
                <p className={eyebrow}>{t(content.heroBadge, locale)}</p>
                <h1 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.12] text-[var(--color-text-strong)]">
                  {t(content.heroTitle, locale)}
                </h1>
                <p className="mt-5 text-[1rem] leading-[1.75] text-[var(--color-text-muted)]">
                  {t(content.heroDescription, locale)}
                </p>
                <div className="mt-7">
                  <Link
                    href={content.primaryCtaHref}
                    className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-2.5 text-[0.88rem] font-semibold text-white transition-colors hover:bg-[var(--color-primary-strong)]"
                  >
                    {t(content.primaryCtaLabel, locale)}
                  </Link>
                </div>
              </div>

              {heroSrc && (
                <div className="relative hidden aspect-[5/4] overflow-hidden rounded-[14px] lg:block">
                  <Image
                    src={heroSrc}
                    alt={t(content.heroTitle, locale)}
                    fill
                    priority
                    sizes="360px"
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </section>

          {(content.openingNoteTitle || content.openingNoteBody) && (
            <section className="rounded-[12px] border-l-[3px] border-l-[var(--color-teal)] border border-[var(--color-border)] bg-[var(--color-accent-light)] px-6 py-5 shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
              {content.openingNoteTitle && (
                <h2 className="text-[1rem] font-semibold text-[var(--color-text-strong)]">
                  {t(content.openingNoteTitle, locale)}
                </h2>
              )}
              {content.openingNoteBody && (
                <p className="mt-3 max-w-[74ch] text-[0.92rem] leading-[1.75] text-[var(--color-text-muted)]">
                  {t(content.openingNoteBody, locale)}
                </p>
              )}
            </section>
          )}

          <section className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-[12px] border border-[var(--color-border)] bg-white p-6">
              <p className={eyebrow}>{t(content.filmStoryTitle, locale)}</p>
              <p className="mt-3 text-[0.94rem] leading-[1.75] text-[var(--color-text-strong)]">
                {t(content.filmStoryBody, locale)}
              </p>
            </article>
            <article className="rounded-[12px] border border-[var(--color-border)] bg-[var(--color-mint)] p-6">
              <p className={eyebrow}>{t(content.filmQuestionTitle, locale)}</p>
              <p className="mt-3 text-[0.94rem] leading-[1.75] text-[var(--color-text-muted)] italic">
                {t(content.filmQuestionBody, locale)}
              </p>
            </article>
          </section>

          <section>
            <p className={eyebrow}>{locale === "vi" ? "Hướng triển khai nội dung" : "Content Development Directions"}</p>
            <h2 className="mt-2 text-[1.35rem] font-semibold leading-[1.22] text-[var(--color-text-strong)] lg:text-[1.5rem]">
              {t(content.storySectionTitle, locale)}
            </h2>
            {content.storySectionDescription && (
              <p className="mt-3 max-w-[68ch] text-[0.9rem] leading-[1.7] text-[var(--color-text-muted)]">
                {t(content.storySectionDescription, locale)}
              </p>
            )}

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {content.storyCards.map((card) => (
                <article key={card.id} className="flex flex-col rounded-[12px] border border-[var(--color-border)] bg-white p-5 shadow-[0_1px_4px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_2px_8px_rgba(0,0,0,0.07)]">
                  <h3 className="text-[0.96rem] font-semibold leading-[1.35] text-[var(--color-text-strong)]">
                    {t(card.title, locale)}
                  </h3>
                  <p className="mt-3 text-[0.85rem] leading-[1.7] text-[var(--color-text-muted)]">
                    {t(card.lead, locale)}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {card.bullets.map((bullet, index) => (
                      <li key={index} className="flex gap-2 text-[0.8rem] leading-[1.55] text-[var(--color-text-muted)]">
                        <span className="mt-[2px] shrink-0 text-[var(--color-teal)]" aria-hidden="true">·</span>
                        {t(bullet, locale)}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section>
            <p className={eyebrow}>{t(content.quickQuestionSectionTitle, locale)}</p>
            <dl className="mt-5 space-y-6 rounded-[12px] border border-[var(--color-border)] bg-white p-6 shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
              {content.quickQuestions.map((item, index) => (
                <div key={index}>
                  <dt className="text-[0.95rem] font-semibold leading-[1.4] text-[var(--color-text-strong)]">
                    {t(item.question, locale)}
                  </dt>
                  <dd className="mt-1.5 text-[0.88rem] leading-[1.7] text-[var(--color-text-muted)]">
                    {t(item.answer, locale)}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="border-t border-[var(--color-border)] pt-8">
            <h2 className="text-[1.15rem] font-semibold text-[var(--color-text-strong)]">
              {t(content.closingTitle, locale)}
            </h2>
            <p className="mt-3 max-w-[66ch] text-[0.92rem] leading-[1.75] text-[var(--color-text-muted)]">
              {t(content.closingBody, locale)}
            </p>
            <div className="mt-6">
              <Link
                href={content.primaryCtaHref}
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-2.5 text-[0.88rem] font-semibold text-white transition-colors hover:bg-[var(--color-primary-strong)]"
              >
                {t(content.primaryCtaLabel, locale)}
              </Link>
            </div>
          </section>

          {relatedItems.length > 0 && (
            <section className="border-t border-[var(--color-border)] pt-8">
              <p className={eyebrow}>{locale === "vi" ? "Đọc tiếp" : "Continue Reading"}</p>
              <h2 className="mt-2 text-[1.2rem] font-semibold leading-[1.28] text-[var(--color-text-strong)]">
                {locale === "vi"
                  ? "Các bài viết liên quan"
                  : "Related Nutrition Articles"}
              </h2>
              <div className="mt-5 grid gap-4 lg:grid-cols-3">
                {relatedItems.map((item) => (
                  <article
                    key={item.slug}
                    className="flex h-full flex-col rounded-[12px] border border-[var(--color-border)] bg-white p-5 shadow-[0_1px_4px_rgba(0,0,0,0.04)]"
                  >
                    <h3 className="text-[0.96rem] font-semibold leading-[1.35] text-[var(--color-text-strong)]">
                      {t(item.heroTitle, locale)}
                    </h3>
                    <p className="mt-2 text-[0.84rem] leading-[1.65] text-[var(--color-text-muted)]">
                      {shorten(t(item.heroDescription, locale))}
                    </p>
                    <Link
                      href={`/dinh-duong-thien-lanh/${item.slug}`}
                      className="mt-auto pt-4 text-[0.82rem] font-medium text-[var(--color-navy)] opacity-80 transition-opacity hover:opacity-100"
                    >
                      {locale === "vi" ? "Mở bài viết" : "Open article"} →
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>
      </Container>
    </section>
  );
}