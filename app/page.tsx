import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ClosingEditorialSection } from "@/components/sections/ClosingEditorialSection";
import { EntryCardsEditorialSection } from "@/components/sections/EntryCardsEditorialSection";
import { FeaturedPathsSection } from "@/components/sections/FeaturedPathsSection";
import { HeroSectionEditorial } from "@/components/sections/HeroSectionEditorial";
import { WhyWeExistSection } from "@/components/sections/WhyWeExistSection";
import { homepageConfig } from "@/data/homepageConfig";
import { whySectionCopy } from "@/data/siteContent";
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
    primaryCtaHref: homepageConfig.hero.primaryCtaHref,
    noteHint: homepageText.hero.chatHint,
    image: {
      src: homepageConfig.hero.image.src,
      alt: homepageConfig.hero.image.alt[locale],
    },
  };

  const entryCards = homepageConfig.entryCards.map((item) => ({
    href: item.href,
    title: homepageText.entrySection.cards[item.key].title,
    description: homepageText.entrySection.cards[item.key].description,
    ctaLabel: homepageText.entrySection.cards[item.key].cta,
  }));

  const featuredContent = {
    title: homepageText.featuredSection.title,
    subtitle: homepageText.featuredSection.subtitle,
    cards: homepageConfig.featuredCards.map((item) => ({
      href: item.href,
      title: homepageText.featuredSection.cards[item.key].title,
      description: homepageText.featuredSection.cards[item.key].description,
      ctaLabel: homepageText.featuredSection.cards[item.key].cta,
    })),
  };

  const closingContent = {
    title: homepageText.endingSection.title,
    subtitle: homepageText.endingSection.subtitle,
    description: homepageText.endingSection.description,
    cta: {
      label: homepageText.endingSection.cta,
      href: homepageConfig.endingCtaHref,
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
        <EntryCardsEditorialSection title={homepageText.entrySection.title} cards={entryCards} />
        <FeaturedPathsSection content={featuredContent} />
        <WhyWeExistSection content={whySectionCopy[locale]} />
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
