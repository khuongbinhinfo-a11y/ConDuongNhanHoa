"use client";

/**
 * SOURCE-OF-TRUTH for landing page /dinh-duong-thien-lanh
 * Data: contentBranchesI18n["dinh-duong-thien-lanh"].nutritionLanding
 * Do NOT use BranchLandingPageSection for this branch.
 */

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { NutritionLandingI18n } from "@/data/contentBranchesI18n";
import type { AppLocale } from "@/lib/locale";
import { getDirectImageForSlot } from "@/lib/getImageForSlot";

type NutritionLandingPageSectionProps = {
  content: NutritionLandingI18n;
  locale: AppLocale;
  labels: {
    backToHome: string;
    openTopic: string;
  };
};

const t = (text: Record<AppLocale, string>, locale: AppLocale) => text[locale];
const eyebrow = "text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-teal)]";

export function NutritionLandingPageSection({
  content,
  locale,
  labels,
}: NutritionLandingPageSectionProps) {
  const heroSrc = content.heroImageSlotId
    ? getDirectImageForSlot(content.heroImageSlotId)
    : null;

  /* Resolve the dedicated landing hero SVG */
  const landingHeroSrc = getDirectImageForSlot("dinh-duong.hero.landing") ?? heroSrc;

  return (
    <section className="pb-20 pt-6 lg:pb-24 lg:pt-8">
      <Container>
        <div className="mx-auto max-w-[1120px] space-y-16 lg:space-y-20">
          {/* ═══ HERO — 2-column layout ═══ */}
          <section>
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              {/* Left column — text */}
              <div className="order-2 max-w-[540px] lg:order-1">
                <p className={eyebrow}>{t(content.heroBadge, locale)}</p>
                <h1 className="mt-3 text-[clamp(2rem,4vw,2.9rem)] font-semibold leading-[1.14] text-[var(--color-text-strong)]">
                  {t(content.heroTitle, locale)}
                </h1>
                <p className="mt-4 text-[1rem] leading-[1.75] text-[var(--color-text-muted)]">
                  {t(content.heroDescription, locale)}
                </p>
                <div className="mt-6">
                  <Link
                    href="#theo-chu-de"
                    className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-7 py-2.5 text-[0.88rem] font-semibold text-white shadow-[0_2px_8px_rgba(90,154,108,0.18)] transition-all hover:bg-[var(--color-primary-strong)] hover:shadow-[0_4px_14px_rgba(90,154,108,0.22)]"
                  >
                    {t(content.heroPrimaryCtaLabel, locale)}
                  </Link>
                </div>
              </div>

              {/* Right column — hero image */}
              {landingHeroSrc && (
                <div className="order-1 lg:order-2">
                  <div className="relative mx-auto aspect-[16/10] w-full max-w-[520px] overflow-hidden rounded-2xl bg-[var(--color-accent-light)] shadow-[0_4px_24px_rgba(36,58,47,0.07)]">
                    <Image
                      src={landingHeroSrc}
                      alt={t(content.heroTitle, locale)}
                      fill
                      priority
                      sizes="(max-width: 1024px) 92vw, 520px"
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* ─── Reading principles strip ─── */}
            <div className="mt-8 rounded-xl bg-[var(--color-accent-light)] px-5 py-4 sm:mt-10 sm:px-6 sm:py-5">
              <div className="grid gap-3 sm:grid-cols-3 sm:gap-5">
                {content.introStrip.items.map((item, index) => {
                  const icons = ["✦", "◎", "→"];
                  return (
                    <div key={index} className="flex items-start gap-2.5">
                      <span className="mt-[2px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[0.65rem] text-[var(--color-primary)] shadow-[0_1px_3px_rgba(90,154,108,0.1)]" aria-hidden="true">
                        {icons[index] ?? "·"}
                      </span>
                      <span className="text-[0.8rem] leading-[1.55] text-[var(--color-text-muted)]">
                        {t(item, locale)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="theo-chu-de">
            <p className={eyebrow}>{locale === "vi" ? "5 chủ đề trọng tâm" : "Five Key Topics"}</p>
            <div className="mt-6 grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-3">
              {content.topics.map((topic) => {
                const topicImageSrc = topic.imageSlotId
                  ? getDirectImageForSlot(topic.imageSlotId)
                  : null;

                return (
                  <article
                    key={topic.id}
                    id={topic.id}
                    className="flex h-full flex-col overflow-hidden rounded-[12px] border border-[var(--color-border)] bg-white"
                  >
                    {topicImageSrc && (
                      <div className="relative aspect-[16/10] w-full shrink-0">
                        <Image
                          src={topicImageSrc}
                          alt={t(topic.title, locale)}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                    )}

                    <div className="flex flex-1 flex-col p-5">
                      <h2 className="text-[1.02rem] font-semibold leading-[1.3] text-[var(--color-text-strong)]">
                        {t(topic.title, locale)}
                      </h2>
                      <p className="mt-3 text-[0.9rem] leading-[1.7] text-[var(--color-text-muted)]">
                        {t(topic.summary, locale)}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {topic.bullets.map((bullet, index) => (
                          <li key={index} className="flex gap-2.5 text-[0.82rem] leading-[1.55] text-[var(--color-text-muted)]">
                            <span className="mt-[3px] shrink-0 text-[var(--color-teal)]" aria-hidden="true">·</span>
                            {t(bullet, locale)}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-5 text-[0.84rem] italic text-[var(--color-navy)] opacity-75">
                        {t(topic.question, locale)}
                      </p>
                      <Link
                        href={topic.href}
                        className="mt-auto pt-5 text-[0.8rem] font-medium text-[var(--color-navy)] opacity-65 transition-opacity hover:opacity-100"
                      >
                        {labels.openTopic}
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section>
            <p className={eyebrow}>{locale === "vi" ? "Góc nhìn từ WTH" : "Perspectives from WTH"}</p>
            <h2 className="mt-2 text-[1.35rem] font-semibold leading-[1.22] text-[var(--color-text-strong)] lg:text-[1.5rem]">
              {t(content.wthSection.title, locale)}
            </h2>
            {content.wthSection.description && (
              <p className="mt-3 max-w-[68ch] text-[0.9rem] leading-[1.7] text-[var(--color-text-muted)]">
                {t(content.wthSection.description, locale)}
              </p>
            )}

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {content.wthSection.cards.map((card, cardIndex) => (
                <article
                  key={card.id}
                  className="flex flex-col rounded-[14px] border border-[var(--color-border)] bg-white p-6 shadow-[0_2px_12px_rgba(36,52,71,0.04)]"
                >
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-mint)] text-[0.72rem] font-bold text-[var(--color-teal)]">
                    {String(cardIndex + 1).padStart(2, "0")}
                  </div>

                  <h3 className="text-[1rem] font-semibold leading-[1.3] text-[var(--color-text-strong)]">
                    {t(card.title, locale)}
                  </h3>

                  <p className="mt-3 text-[0.86rem] leading-[1.7] text-[var(--color-text-muted)]">
                    {t(card.story, locale)}
                  </p>

                  <p className="mt-3 border-l-2 border-[var(--color-sage)] pl-3 text-[0.84rem] italic leading-[1.6] text-[var(--color-text-muted)] opacity-85">
                    {t(card.challengeQuestion, locale)}
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {card.seedIdeas.slice(0, 3).map((idea, index) => (
                      <li key={index} className="flex gap-2 text-[0.78rem] leading-[1.5] text-[var(--color-text-muted)]">
                        <span className="mt-[2px] shrink-0 text-[var(--color-teal)]" aria-hidden="true">·</span>
                        {t(idea, locale)}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={card.href}
                    className="mt-auto pt-5 text-[0.82rem] font-medium text-[var(--color-navy)] transition-opacity hover:opacity-80"
                  >
                    {t(card.linkLabel, locale)} →
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section>
            <p className={eyebrow}>{locale === "vi" ? "Gợi ý triển khai nội dung" : "Content Development Ideas"}</p>
            <h2 className="mt-2 text-[1.35rem] font-semibold leading-[1.22] text-[var(--color-text-strong)] lg:text-[1.5rem]">
              {t(content.seedSection.title, locale)}
            </h2>
            {content.seedSection.description && (
              <p className="mt-3 max-w-[68ch] text-[0.9rem] leading-[1.7] text-[var(--color-text-muted)]">
                {t(content.seedSection.description, locale)}
              </p>
            )}

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {content.seedSection.cards.map((card) => (
                <article key={card.id} className="flex flex-col rounded-[10px] border border-[var(--color-border)] bg-white px-5 py-4">
                  <h3 className="text-[0.88rem] font-semibold leading-[1.35] text-[var(--color-text-strong)]">
                    {t(card.title, locale)}
                  </h3>
                  <p className="mt-2 text-[0.82rem] leading-[1.6] text-[var(--color-text-muted)]">
                    {t(card.lead, locale)}
                  </p>
                  <ul className="mt-2.5 space-y-1">
                    {card.prompts.map((prompt, index) => (
                      <li key={index} className="flex gap-2 text-[0.76rem] leading-[1.5] text-[var(--color-text-muted)] opacity-80">
                        <span className="mt-[2px] shrink-0 text-[var(--color-teal)]" aria-hidden="true">·</span>
                        {t(prompt, locale)}
                      </li>
                    ))}
                  </ul>
                  {card.href && (
                    <Link
                      href={card.href}
                      className="mt-auto pt-4 text-[0.78rem] font-medium text-[var(--color-navy)] opacity-65 transition-opacity hover:opacity-100"
                    >
                      {locale === "vi" ? "Xem chuyên đề liên quan" : "View related topic"}
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section>
            <p className={eyebrow}>{t(content.faqSection.title, locale)}</p>
            <dl className="mt-5 space-y-6">
              {content.faqSection.items.map((item, index) => (
                <div key={index}>
                  <dt className="text-[0.94rem] font-semibold leading-[1.4] text-[var(--color-text-strong)]">
                    {t(item.question, locale)}
                  </dt>
                  <dd className="mt-1.5 max-w-[62ch] text-[0.88rem] leading-[1.7] text-[var(--color-text-muted)]">
                    {t(item.answer, locale)}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-12 border-t border-[var(--color-border)] pt-7">
              <Link
                href="/"
                className="text-[0.86rem] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-navy)]"
              >
                ← {labels.backToHome}
              </Link>
            </div>
          </section>
        </div>
      </Container>
    </section>
  );
}