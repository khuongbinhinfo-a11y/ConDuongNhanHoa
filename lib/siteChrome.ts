import { homepageConfig } from "@/data/homepageConfig";
import { footerCopy } from "@/data/siteContent";
import type { AppLocale } from "@/lib/locale";
import { homepageTranslations } from "@/locales/homepage";
import { navigationTranslations } from "@/locales/navigation";

export type SiteHeaderLink = {
  href: string;
  label: string;
  shortLabel: string;
};

export function getSiteChrome(locale: AppLocale) {
  const navigationText = navigationTranslations[locale];
  const homepageText = homepageTranslations[locale];
  const footerText = footerCopy[locale];

  const headerLinks: SiteHeaderLink[] = homepageConfig.headerLinks.map((item) => ({
    href: item.href,
    label: navigationText.nav[item.key],
    shortLabel: navigationText.navShort[item.key],
  }));

  const headerCta = {
    label: navigationText.companion,
    href: homepageConfig.headerCtaHref,
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

