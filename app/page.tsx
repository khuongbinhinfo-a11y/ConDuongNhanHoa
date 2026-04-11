import { SiteHeader } from "@/components/layout/SiteHeader";
import { EntryCardsSection } from "@/components/sections/EntryCardsSection";
import { HeroSectionRefined } from "@/components/sections/HeroSectionRefined";
import { homepageData } from "@/data/homepageData";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-strong)]">
      <SiteHeader brandName={homepageData.brandName} links={homepageData.headerLinks} cta={homepageData.headerCta} />
      <main>
        <HeroSectionRefined content={homepageData.hero} />
        <EntryCardsSection title={homepageData.entrySection.title} cards={homepageData.entrySection.cards} />
      </main>
    </div>
  );
}
