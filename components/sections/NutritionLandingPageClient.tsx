"use client";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { NutritionLandingPageSection } from "@/components/sections/NutritionLandingPageSection";
import { contentBranchesI18n } from "@/data/contentBranchesI18n";
import { useAppLocale } from "@/lib/useAppLocale";
import { getSiteChrome } from "@/lib/siteChrome";
import { commonI18n } from "@/locales/commonI18n";

export function NutritionLandingPageClient() {
  const { locale, handleLocaleChange } = useAppLocale();
  const siteChrome = getSiteChrome(locale);
  const nav = siteChrome.navigationText;
  const nutritionLanding = contentBranchesI18n["dinh-duong-thien-lanh"].nutritionLanding;

  if (!nutritionLanding) {
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
        <NutritionLandingPageSection
          content={nutritionLanding}
          locale={locale}
          labels={{
            backToHome: commonI18n[locale].cta.backToHome,
            openTopic: locale === "vi" ? "Xem chuyên đề" : "View topic",
          }}
        />
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
