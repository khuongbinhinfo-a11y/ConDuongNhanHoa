import { ClosingInvitationSection } from "@/components/sections/ClosingInvitationSection";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { EntryCardsSection } from "@/components/sections/EntryCardsSection";
import { FeaturedReadingSection } from "@/components/sections/FeaturedReadingSection";
import { HeroSectionCalm } from "@/components/sections/HeroSectionCalm";
import { homepageData } from "@/data/homepageData";
import { closingInvitationSectionData, featuredReadingSectionData } from "@/data/homepageSections";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-strong)]">
      <SiteHeader brandName={homepageData.brandName} links={homepageData.headerLinks} cta={homepageData.headerCta} />
      <main>
        <HeroSectionCalm content={homepageData.hero} />
        <EntryCardsSection title={homepageData.entrySection.title} cards={homepageData.entrySection.cards} />
        <FeaturedReadingSection content={featuredReadingSectionData} />
        <ClosingInvitationSection content={closingInvitationSectionData} />
      </main>
    </div>
  );
}
