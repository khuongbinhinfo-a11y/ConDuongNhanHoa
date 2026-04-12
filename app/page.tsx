"use client";

import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ClosingEditorialSection } from "@/components/sections/ClosingEditorialSection";
import { EntryCardsEditorialSection } from "@/components/sections/EntryCardsEditorialSection";
import { FeaturedPathsSection } from "@/components/sections/FeaturedPathsSection";
import { HeroSectionEditorial } from "@/components/sections/HeroSectionEditorial";
import { homepageConfig } from "@/data/homepageConfig";
import { DEFAULT_LOCALE, LOCALE_STORAGE_KEY, isAppLocale, type AppLocale } from "@/lib/locale";
import { homepageTranslations } from "@/locales/homepage";
import { navigationTranslations } from "@/locales/navigation";

export default function HomePage() {
  const [locale, setLocale] = useState<AppLocale>(() => {
    if (typeof window === "undefined") {
      return DEFAULT_LOCALE;
    }
    const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    return isAppLocale(storedLocale) ? storedLocale : DEFAULT_LOCALE;
  });

  const navigationText = navigationTranslations[locale];
  const homepageText = homepageTranslations[locale];

  const headerLinks = useMemo(
    () =>
      homepageConfig.headerLinks.map((item) => ({
        href: item.href,
        label: navigationText.nav[item.key],
        shortLabel: navigationText.navShort[item.key],
      })),
    [navigationText],
  );

  const heroContent = useMemo(
    () => ({
      eyebrow: homepageText.hero.eyebrow,
      title: homepageText.hero.title,
      subtitle: homepageText.hero.subtitle,
      primaryCtaLabel: homepageText.hero.primaryCta,
      primaryCtaHref: homepageConfig.hero.primaryCtaHref,
      noteHint: homepageText.hero.chatHint,
      image: {
        src: homepageConfig.hero.image.src,
        alt: homepageConfig.hero.image.alt[locale],
      },
    }),
    [homepageText, locale],
  );

  const entryCards = useMemo(
    () =>
      homepageConfig.entryCards.map((item) => ({
        href: item.href,
        title: homepageText.entrySection.cards[item.key].title,
        description: homepageText.entrySection.cards[item.key].description,
        ctaLabel: homepageText.entrySection.cards[item.key].cta,
      })),
    [homepageText],
  );

  const featuredContent = useMemo(
    () => ({
      title: homepageText.featuredSection.title,
      subtitle: homepageText.featuredSection.subtitle,
      cards: homepageConfig.featuredCards.map((item) => ({
        href: item.href,
        title: homepageText.featuredSection.cards[item.key].title,
        description: homepageText.featuredSection.cards[item.key].description,
        ctaLabel: homepageText.featuredSection.cards[item.key].cta,
      })),
    }),
    [homepageText],
  );

  const closingContent = useMemo(
    () => ({
      title: homepageText.endingSection.title,
      subtitle: homepageText.endingSection.subtitle,
      description: homepageText.endingSection.description,
      cta: {
        label: homepageText.endingSection.cta,
        href: homepageConfig.endingCtaHref,
      },
    }),
    [homepageText],
  );

  const handleLocaleChange = (nextLocale: AppLocale) => {
    setLocale(nextLocale);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-strong)]">
      <SiteHeader
        brandName={navigationText.brand.name}
        links={headerLinks}
        cta={{ label: navigationText.companion, href: homepageConfig.headerCtaHref }}
        locale={locale}
        onLocaleChange={handleLocaleChange}
        menuButtonLabel={navigationText.menuButton}
        navAriaLabel={navigationText.navAriaLabel}
        localeSwitchAriaLabel={navigationText.localeSwitchAriaLabel}
      />
      <main>
        <HeroSectionEditorial content={heroContent} />
        <EntryCardsEditorialSection title={homepageText.entrySection.title} cards={entryCards} />
        <FeaturedPathsSection content={featuredContent} />
        <ClosingEditorialSection content={closingContent} />
      </main>
    </div>
  );
}
