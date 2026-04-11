import { SiteHeader } from "@/components/layout/SiteHeader";
import { ClosingEditorialSection } from "@/components/sections/ClosingEditorialSection";
import { EntryCardsEditorialSection } from "@/components/sections/EntryCardsEditorialSection";
import { FeaturedPathsSection } from "@/components/sections/FeaturedPathsSection";
import { HeroSectionEditorial } from "@/components/sections/HeroSectionEditorial";
import { homepageData } from "@/data/homepageData";
import { closingEditorialContent, featuredPathsContent } from "@/data/homepageVisualContent";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-strong)]">
      <SiteHeader brandName={homepageData.brandName} links={homepageData.headerLinks} cta={homepageData.headerCta} />
      <main>
        <HeroSectionEditorial content={homepageData.hero} />
        <EntryCardsEditorialSection title={homepageData.entrySection.title} cards={homepageData.entrySection.cards} />
        <FeaturedPathsSection content={featuredPathsContent} />
        <ClosingEditorialSection content={closingEditorialContent} />
      </main>
    </div>
  );
}
