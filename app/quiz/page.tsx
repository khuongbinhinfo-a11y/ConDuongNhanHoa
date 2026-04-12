"use client";

import { useMemo, useState } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ReadingOrientationQuiz } from "@/components/quiz/ReadingOrientationQuiz";
import { homepageConfig } from "@/data/homepageConfig";
import { footerCopy } from "@/data/siteContent";
import { DEFAULT_LOCALE, LOCALE_STORAGE_KEY, isAppLocale, type AppLocale } from "@/lib/locale";
import { homepageTranslations } from "@/locales/homepage";
import { navigationTranslations } from "@/locales/navigation";

export default function QuizPage() {
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

  const handleLocaleChange = (nextLocale: AppLocale) => {
    setLocale(nextLocale);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
    }
  };

  const footerContent = useMemo(
    () => ({
      brandTagline: homepageText.brand.tagline,
      navLinks: headerLinks.map((item) => ({ label: item.label, href: item.href })),
      ...footerCopy[locale],
    }),
    [headerLinks, homepageText, locale],
  );

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
        <ReadingOrientationQuiz />
      </main>
      <SiteFooter
        brandName={navigationText.brand.name}
        brandTagline={footerContent.brandTagline}
        navHeading={footerContent.navHeading}
        navLinks={footerContent.navLinks}
        supportHeading={footerContent.supportHeading}
        supportLinks={footerContent.supportLinks}
        languageLabel={footerContent.languageLabel}
        note={footerContent.note}
        copyrightText={footerContent.copyrightText}
      />
    </div>
  );
}
