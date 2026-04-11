import { Header } from "@/components/layout/Header";
import { EntryCardsSection } from "@/components/sections/EntryCardsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { homepageData } from "@/data/homepage";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-strong)]">
      <Header brandName={homepageData.brandName} links={homepageData.headerLinks} cta={homepageData.headerCta} />
      <main>
        <HeroSection content={homepageData.hero} />
        <EntryCardsSection title={homepageData.entrySection.title} cards={homepageData.entrySection.cards} />
      </main>
    </div>
  );
}
