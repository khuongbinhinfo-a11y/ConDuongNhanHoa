import { homepageConfigI18n } from "@/data/homepageConfigI18n";
import { footerI18n } from "@/data/siteContentI18n";
import type { AppLocale } from "@/lib/locale";
import { homepageI18n } from "@/locales/homepageI18n";
import { navigationI18n } from "@/locales/navigationI18n";

export type SiteHeaderLink = {
  href: string;
  label: string;
  shortLabel: string;
};

export function getSiteChrome(locale: AppLocale) {
  const navigationText = navigationI18n[locale];
  const homepageText = homepageI18n[locale];
  const footerText = footerI18n[locale];

  const headerLinks: SiteHeaderLink[] = homepageConfigI18n.headerLinks.map((item) => ({
    href: item.href,
    label: navigationText.nav[item.key],
    shortLabel: navigationText.navShort[item.key],
  }));

  const headerCta = {
    label: navigationText.companion,
    href: homepageConfigI18n.headerCtaHref,
  };

  const footer = {
    brandTagline:
      locale === "vi"
        ? "Nội dung gần gũi cho đời sống tích cực và thực hành được."
        : "Wholesome content for positive and practical living.",
    navHeading: footerText.navHeading,
    navLinks: headerLinks.map((item) => ({ label: item.label, href: item.href })),
    languageLabel: footerText.languageLabel,
    note: footerText.note,
    copyrightText: `© 2026 ${navigationText.brand.name}. ${footerText.copyrightNotice}`,
  };

  return {
    navigationText,
    homepageText,
    headerLinks,
    headerCta,
    footer,
  };
}
