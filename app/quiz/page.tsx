import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ReadingOrientationQuiz } from "@/components/quiz/ReadingOrientationQuiz";
import { getSiteChrome } from "@/lib/siteChrome";

export default function QuizPage() {
  const locale = "vi";
  const siteChrome = getSiteChrome(locale);
  const navigationText = siteChrome.navigationText;

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-strong)]">
      <SiteHeader brandName={navigationText.brand.name} links={siteChrome.headerLinks} cta={siteChrome.headerCta} />
      <main>
        <ReadingOrientationQuiz />
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
