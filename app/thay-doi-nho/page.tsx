import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ReadingHubPageSectionStructured } from "@/components/sections/ReadingHubPageSectionStructured";
import { readingHubs } from "@/data/readingHubs";
import { getSiteChrome } from "@/lib/siteChrome";

export default function ThayDoiNhoPage() {
  const locale = "vi";
  const siteChrome = getSiteChrome(locale);
  const navigationText = siteChrome.navigationText;

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-strong)]">
      <SiteHeader brandName={navigationText.brand.name} links={siteChrome.headerLinks} cta={siteChrome.headerCta} />
      <main>
        <ReadingHubPageSectionStructured content={readingHubs["thay-doi-nho"]} />
      </main>
      <SiteFooter
        brandName={navigationText.brand.name}
        brandTagline={siteChrome.footer.brandTagline}
        navHeading={siteChrome.footer.navHeading}
        navLinks={siteChrome.footer.navLinks}
        languageLabel={siteChrome.footer.languageLabel}
        note={siteChrome.footer.note}
        copyrightText={siteChrome.footer.copyrightText}
      />
    </div>
  );
}
