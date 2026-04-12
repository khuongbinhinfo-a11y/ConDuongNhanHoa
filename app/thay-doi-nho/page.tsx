import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ReadingHubPageSectionStructured } from "@/components/sections/ReadingHubPageSectionStructured";
import { homepageData } from "@/data/homepageData";
import { footerCopy } from "@/data/siteContent";
import { readingHubs } from "@/data/readingHubs";
import { homepageTranslations } from "@/locales/homepage";
import { navigationTranslations } from "@/locales/navigation";

export default function ThayDoiNhoPage() {
  const navigationText = navigationTranslations.vi;
  const homepageText = homepageTranslations.vi;
  const footerText = footerCopy.vi;

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-strong)]">
      <SiteHeader brandName={navigationText.brand.name} links={homepageData.headerLinks} cta={homepageData.headerCta} />
      <main>
        <ReadingHubPageSectionStructured content={readingHubs["thay-doi-nho"]} />
      </main>
      <SiteFooter
        brandName={navigationText.brand.name}
        brandTagline={homepageText.brand.tagline}
        navHeading={footerText.navHeading}
        navLinks={homepageData.headerLinks}
        supportHeading={footerText.supportHeading}
        supportLinks={footerText.supportLinks}
        languageLabel={footerText.languageLabel}
        note={footerText.note}
        copyrightText={footerText.copyrightText}
      />
    </div>
  );
}
