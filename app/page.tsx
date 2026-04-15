"use client";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ClosingEditorialSection } from "@/components/sections/ClosingEditorialSection";
import { EntryCardsEditorialSection } from "@/components/sections/EntryCardsEditorialSection";
import { FeaturedPathsSectionI18n } from "@/components/sections/FeaturedPathsSectionI18n";
import { HeroSectionEditorial } from "@/components/sections/HeroSectionEditorial";
import { WhyWeExistSection } from "@/components/sections/WhyWeExistSection";
import { homepageConfigI18n } from "@/data/homepageConfigI18n";
import { whySectionI18n } from "@/data/siteContentI18n";
import { useAppLocale } from "@/lib/useAppLocale";
import { getSiteChrome } from "@/lib/siteChrome";
import { commonI18n } from "@/locales/commonI18n";

export default function HomePage() {
  const { locale, handleLocaleChange } = useAppLocale();
  const siteChrome = getSiteChrome(locale);

  const navigationText = siteChrome.navigationText;
  const homepageText = siteChrome.homepageText;

  const headerLinks = siteChrome.headerLinks;

  const heroContent = {
    eyebrow: homepageText.hero.eyebrow,
    title: homepageText.hero.title,
    subtitle: `${homepageText.hero.subtitle} ${homepageText.hero.emphasis}`,
    primaryCtaLabel: homepageText.hero.primaryCta,
    primaryCtaHref: homepageConfigI18n.hero.primaryCtaHref,
    secondaryCtaLabel: homepageText.hero.secondaryCta,
    secondaryCtaHref: homepageConfigI18n.hero.secondaryCtaHref,
    noteHint: homepageText.hero.chatHint,
    image: {
      src: homepageConfigI18n.hero.image.src,
      alt: homepageConfigI18n.hero.image.alt[locale],
    },
  };

  const entryCards = homepageConfigI18n.entryCards.map((item) => ({
    href: item.href,
    title: homepageText.entrySection.cards[item.key].title,
    description: homepageText.entrySection.cards[item.key].description,
    ctaLabel: homepageText.entrySection.cards[item.key].cta,
  }));

  const focusContent = {
    title: homepageText.focusSection.title,
    subtitle: homepageText.focusSection.subtitle,
    cards: homepageConfigI18n.focusCards.map((item) => ({
      href: item.href,
      title: homepageText.focusSection.cards[item.key].title,
      description: homepageText.focusSection.cards[item.key].description,
      ctaLabel: homepageText.focusSection.cards[item.key].cta,
    })),
  };

  const nutritionFeaturedContent = {
    title: homepageText.nutritionFeaturedSection.title,
    subtitle: homepageText.nutritionFeaturedSection.subtitle,
    cards: homepageConfigI18n.nutritionFeaturedCards.map((item) => ({
      href: item.href,
      title: homepageText.nutritionFeaturedSection.cards[item.key].title,
      description: homepageText.nutritionFeaturedSection.cards[item.key].description,
      ctaLabel: homepageText.nutritionFeaturedSection.cards[item.key].cta,
    })),
  };

  const expansionContent = {
    title: homepageText.expansionSection.title,
    subtitle: homepageText.expansionSection.subtitle,
    cards: homepageConfigI18n.expansionCards.map((item) => ({
      href: item.href,
      title: homepageText.expansionSection.cards[item.key].title,
      description: homepageText.expansionSection.cards[item.key].description,
      ctaLabel: homepageText.expansionSection.cards[item.key].cta,
    })),
  };

  const closingContent = {
    title: homepageText.endingSection.title,
    subtitle: homepageText.endingSection.subtitle,
    description: homepageText.endingSection.description,
    cta: {
      label: homepageText.endingSection.cta,
      href: homepageConfigI18n.endingCtaHref,
    },
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-strong)]">
      <SiteHeader
        brandName={navigationText.brand.name}
        links={headerLinks}
        cta={siteChrome.headerCta}
        locale={locale}
        onLocaleChange={handleLocaleChange}
        menuButtonLabel={navigationText.menuButton}
        navAriaLabel={navigationText.navAriaLabel}
        localeSwitchAriaLabel={navigationText.localeSwitchAriaLabel}
      />
      <main>
        <HeroSectionEditorial content={heroContent} />
        <WhyWeExistSection content={whySectionI18n[locale]} />
        <EntryCardsEditorialSection
          title={homepageText.entrySection.title}
          leadLabel={homepageText.entrySection.leadLabel}
          cards={entryCards}
        />
        <FeaturedPathsSectionI18n
          content={{
            ...focusContent,
            featuredTagLabel: commonI18n[locale].articles.featuredGuide,
          }}
        />
        <FeaturedPathsSectionI18n
          content={{
            ...nutritionFeaturedContent,
            featuredTagLabel: commonI18n[locale].articles.featuredGuide,
          }}
        />
        <FeaturedPathsSectionI18n
          content={{
            ...expansionContent,
            featuredTagLabel: commonI18n[locale].articles.featuredGuide,
          }}
        />
        <ClosingEditorialSection content={closingContent} />
      </main>
      <SiteFooter
        brandName={navigationText.brand.name}
        brandTagline={siteChrome.footer.brandTagline}
        navHeading={siteChrome.footer.navHeading}
        navLinks={siteChrome.footer.navLinks}
        supportHeading={siteChrome.footer.supportHeading}
        supportLinks={siteChrome.footer.supportLinks}
        languageLabel={siteChrome.footer.languageLabel}
        note={siteChrome.footer.note}
        copyrightText={siteChrome.footer.copyrightText}
      />
    </div>
  );
}
