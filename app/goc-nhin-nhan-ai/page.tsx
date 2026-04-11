import { SiteHeader } from "@/components/layout/SiteHeader";
import { ReadingHubPageSection } from "@/components/sections/ReadingHubPageSection";
import { homepageData } from "@/data/homepageData";
import { readingHubs } from "@/data/readingHubs";

export default function GocNhinNhanAiPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-strong)]">
      <SiteHeader brandName={homepageData.brandName} links={homepageData.headerLinks} cta={homepageData.headerCta} />
      <main>
        <ReadingHubPageSection content={readingHubs["goc-nhin-nhan-ai"]} />
      </main>
    </div>
  );
}
