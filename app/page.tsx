import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ClosingEditorialSection } from "@/components/sections/ClosingEditorialSection";
import { EntryCardsEditorialSection } from "@/components/sections/EntryCardsEditorialSection";
import { FeaturedPathsSection } from "@/components/sections/FeaturedPathsSection";
import { HeroSectionEditorial } from "@/components/sections/HeroSectionEditorial";
import { WhyWeExistSection } from "@/components/sections/WhyWeExistSection";
import { homepageMainConfig } from "@/data/homepageConfigMain";
import { whySectionMainCopy } from "@/data/siteContentMain";
import { getSiteChrome } from "@/lib/siteChrome";

export default function HomePage() {
  const locale = "vi";
  const siteChrome = getSiteChrome(locale);

  const navigationText = siteChrome.navigationText;
  const homepageText = siteChrome.homepageText;

  const headerLinks = siteChrome.headerLinks;

  const heroContent = {
    eyebrow: homepageText.hero.eyebrow,
    title: homepageText.hero.title,
    subtitle: homepageText.hero.subtitle,
    primaryCtaLabel: homepageText.hero.primaryCta,
    primaryCtaHref: homepageMainConfig.hero.primaryCtaHref,
    secondaryCtaLabel: homepageText.hero.secondaryCta,
    secondaryCtaHref: homepageMainConfig.hero.secondaryCtaHref,
    noteHint: homepageText.hero.chatHint,
    image: {
      src: homepageMainConfig.hero.image.src,
      alt: homepageMainConfig.hero.image.alt[locale],
    },
  };

  const entryCards = homepageMainConfig.entryCards.map((item) => ({
    href: item.href,
    title: homepageText.entrySection.cards[item.key].title,
    description: homepageText.entrySection.cards[item.key].description,
    ctaLabel: homepageText.entrySection.cards[item.key].cta,
  }));

  const focusContent = {
    title: homepageText.focusSection.title,
    subtitle: homepageText.focusSection.subtitle,
    cards: homepageMainConfig.focusCards.map((item) => ({
      href: item.href,
      title: homepageText.focusSection.cards[item.key].title,
      description: homepageText.focusSection.cards[item.key].description,
      ctaLabel: homepageText.focusSection.cards[item.key].cta,
    })),
  };

  const nutritionFeaturedContent = {
    title: homepageText.nutritionFeaturedSection.title,
    subtitle: homepageText.nutritionFeaturedSection.subtitle,
    cards: homepageMainConfig.nutritionFeaturedCards.map((item) => ({
      href: item.href,
      title: homepageText.nutritionFeaturedSection.cards[item.key].title,
      description: homepageText.nutritionFeaturedSection.cards[item.key].description,
      ctaLabel: homepageText.nutritionFeaturedSection.cards[item.key].cta,
    })),
  };

  const expansionContent = {
    title: homepageText.expansionSection.title,
    subtitle: homepageText.expansionSection.subtitle,
    cards: homepageMainConfig.expansionCards.map((item) => ({
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
      href: homepageMainConfig.endingCtaHref,
    },
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-strong)]">
      <SiteHeader
        brandName={navigationText.brand.name}
        links={headerLinks}
        cta={siteChrome.headerCta}
      />
      <main>
        <HeroSectionEditorial content={heroContent} />
        <WhyWeExistSection content={whySectionMainCopy[locale]} />
        <EntryCardsEditorialSection
          title={homepageText.entrySection.title}
          leadLabel="Nhánh ưu tiên giai đoạn đầu"
          cards={entryCards}
        />
        <FeaturedPathsSection content={focusContent} />
        <FeaturedPathsSection content={nutritionFeaturedContent} />
        <FeaturedPathsSection content={expansionContent} />
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
