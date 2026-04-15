import { homepageMainConfig } from "@/data/homepageConfigMain";
import { footerMainCopy } from "@/data/siteContentMain";
import type { AppLocale } from "@/lib/locale";
import { homepageMainTranslations } from "@/locales/homepageMain";
import { navigationMainTranslations } from "@/locales/navigationMain";

export type SiteHeaderLink = {
  href: string;
  label: string;
  shortLabel: string;
};

export function getSiteChrome(locale: AppLocale) {
  const navigationText = navigationMainTranslations[locale];
  const homepageText = homepageMainTranslations[locale];
  const footerText = footerMainCopy[locale];

  const headerLinks: SiteHeaderLink[] = homepageMainConfig.headerLinks.map((item) => ({
    href: item.href,
    label: navigationText.nav[item.key],
    shortLabel: navigationText.navShort[item.key],
  }));

  const headerCta = {
    label: navigationText.companion,
    href: homepageMainConfig.headerCtaHref,
  };

  const footer = {
    brandTagline: homepageText.brand.tagline,
    navHeading: footerText.navHeading,
    navLinks: headerLinks.map((item) => ({ label: item.label, href: item.href })),
    supportHeading: footerText.supportHeading,
    supportLinks: footerText.supportLinks,
    languageLabel: footerText.languageLabel,
    note: footerText.note,
    copyrightText: footerText.copyrightText,
  };

  return {
    navigationText,
    homepageText,
    headerLinks,
    headerCta,
    footer,
  };
}
