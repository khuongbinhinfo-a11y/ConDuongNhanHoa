"use client";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { BranchLandingPageSection } from "@/components/sections/BranchLandingPageSection";
import { contentBranchesI18n } from "@/data/contentBranchesI18n";
import { useAppLocale } from "@/lib/useAppLocale";
import { getSiteChrome } from "@/lib/siteChrome";
import { commonI18n } from "@/locales/commonI18n";

export default function CoiVuiCuoiPage() {
  const { locale, handleLocaleChange } = useAppLocale();
  const siteChrome = getSiteChrome(locale);
  const navigationText = siteChrome.navigationText;

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-strong)]">
      <SiteHeader
        brandName={navigationText.brand.name}
        brandShortName={navigationText.brand.shortName}
        links={siteChrome.headerLinks}
        cta={siteChrome.headerCta}
        locale={locale}
        onLocaleChange={handleLocaleChange}
        menuButtonLabel={navigationText.menuButton}
        navAriaLabel={navigationText.navAriaLabel}
        localeSwitchAriaLabel={navigationText.localeSwitchAriaLabel}
      />
      <main>
        <BranchLandingPageSection
           branchId="coi-vui-cuoi"
           content={contentBranchesI18n["coi-vui-cuoi"]}
          locale={locale}
          labels={{
            relatedHeading: commonI18n[locale].articles.suggestedDirection,
            openCluster: commonI18n[locale].cta.openCluster,
            backToHome: commonI18n[locale].cta.backToHome,
          }}
        />
      </main>
      <SiteFooter
        brandName={navigationText.brand.name}
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
