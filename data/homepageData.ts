export type HeaderLink = {
  label: string;
  href: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  image: { src: string; alt: string };
};

export type EntryCardContent = {
  title: string;
  description: string;
  href: string;
};

import { homepageConfig } from "@/data/homepageConfig";
import { homepageTranslations } from "@/locales/homepage";
import { navigationTranslations } from "@/locales/navigation";

const navigationText = navigationTranslations.vi;
const homepageText = homepageTranslations.vi;

export const homepageData = {
  brandName: navigationText.brand.name,
  headerLinks: homepageConfig.headerLinks.map((item) => ({
    label: navigationText.nav[item.key],
    href: item.href,
  })) satisfies HeaderLink[],
  headerCta: { label: navigationText.companion, href: homepageConfig.headerCtaHref },
  hero: {
    eyebrow: homepageText.hero.eyebrow,
    title: homepageText.hero.title,
    subtitle: homepageText.hero.subtitle,
    primaryCta: { label: homepageText.hero.primaryCta, href: homepageConfig.hero.primaryCtaHref },
    secondaryCta: { label: homepageText.hero.primaryCta, href: homepageConfig.hero.primaryCtaHref },
    image: {
      src: homepageConfig.hero.image.src,
      alt: homepageConfig.hero.image.alt.vi,
    },
  } satisfies HeroContent,
  entrySection: {
    title: homepageText.entrySection.title,
    cards: homepageConfig.entryCards.map((item) => ({
      title: homepageText.entrySection.cards[item.key].title,
      description: homepageText.entrySection.cards[item.key].description,
      href: item.href,
    })) satisfies EntryCardContent[],
  },
};
