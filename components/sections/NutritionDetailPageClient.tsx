"use client";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { NutritionDetailPageSection } from "@/components/sections/NutritionDetailPageSection";
import { nutritionDetailPagesI18n } from "@/data/nutritionDetailPagesI18n";
import { useAppLocale } from "@/lib/useAppLocale";
import { getSiteChrome } from "@/lib/siteChrome";

type NutritionDetailPageClientProps = {
  slug: string;
};

export function NutritionDetailPageClient({ slug }: NutritionDetailPageClientProps) {
  const { locale, handleLocaleChange } = useAppLocale();
  const siteChrome = getSiteChrome(locale);
  const nav = siteChrome.navigationText;
  const content = nutritionDetailPagesI18n[slug];

  if (!content) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-strong)]">
      <SiteHeader
        brandName={nav.brand.name}
        brandShortName={nav.brand.shortName}
        links={siteChrome.headerLinks}
        cta={siteChrome.headerCta}
        locale={locale}
        onLocaleChange={handleLocaleChange}
        menuButtonLabel={nav.menuButton}
        navAriaLabel={nav.navAriaLabel}
        localeSwitchAriaLabel={nav.localeSwitchAriaLabel}
      />
      <main>
        <NutritionDetailPageSection content={content} locale={locale} />
      </main>
      <SiteFooter
        brandName={nav.brand.name}
        brandTagline={siteChrome.footer.brandTagline}
        navHeading={siteChrome.footer.navHeading}
        navLinks={siteChrome.footer.navLinks}
        languageLabel={siteChrome.footer.languageLabel}
        note={siteChrome.footer.note}
        copyrightText={siteChrome.footer.copyrightText}
      />
    </div>
  );
}
