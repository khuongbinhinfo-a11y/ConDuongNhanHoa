"use client";

import Link from "next/link";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Container } from "@/components/ui/Container";
import { useAppLocale } from "@/lib/useAppLocale";
import { getSiteChrome } from "@/lib/siteChrome";
import { aboutI18n } from "@/locales/aboutI18n";
import { commonI18n } from "@/locales/commonI18n";

export default function GioiThieuPage() {
  const { locale, handleLocaleChange } = useAppLocale();
  const siteChrome = getSiteChrome(locale);
  const navigationText = siteChrome.navigationText;
  const aboutText = aboutI18n[locale];
  const commonText = commonI18n[locale];

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-strong)]">
      <SiteHeader
        brandName={navigationText.brand.name}
        brandShortName={navigationText.brand.shortName}
        links={siteChrome.headerLinks}
        cta={siteChrome.headerCta}
        locale={locale}
        onLocaleChange={handleLocaleChange}
        menuButtonLabel={navigationText.menuButton}
        navAriaLabel={navigationText.navAriaLabel}
        localeSwitchAriaLabel={navigationText.localeSwitchAriaLabel}
      />

      <main className="py-10 lg:py-14">
        <Container>
          <div className="mx-auto max-w-[1060px] space-y-8">
            <section className="rounded-[24px] border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[0_16px_34px_rgba(36,76,99,0.08)] lg:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-teal)]">{aboutText.hero.eyebrow}</p>
              <h1 className="mt-2 text-[clamp(1.9rem,3.6vw,3rem)] font-semibold text-[var(--color-text-strong)]">
                {aboutText.hero.title}
              </h1>
              <p className="mt-4 max-w-[68ch] text-base text-[var(--color-text-muted)] lg:text-lg">{aboutText.hero.description}</p>
            </section>

            <section className="rounded-[24px] border border-[var(--color-border)] bg-[rgba(251,247,241,0.78)] p-6 lg:p-8">
              <h2 className="text-[1.28rem] font-semibold leading-[1.35] text-[var(--color-text-strong)]">{aboutText.principlesTitle}</h2>
              <div className="mt-5 grid gap-4 lg:grid-cols-3">
                {aboutText.principles.map((item) => (
                  <article key={item.title} className="rounded-[18px] border border-[var(--color-border)] bg-[rgba(251,248,242,0.9)] p-4">
                    <h3 className="text-lg font-semibold text-[var(--color-text-strong)]">{item.title}</h3>
                    <p className="mt-2 text-sm text-[var(--color-text-muted)]">{item.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-[24px] border border-[var(--color-border)] bg-[rgba(245,239,230,0.66)] p-6 lg:p-8">
              <h2 className="text-[1.28rem] font-semibold leading-[1.35] text-[var(--color-text-strong)]">{aboutText.startTitle}</h2>
              <p className="mt-2 max-w-[64ch] text-[0.98rem] text-[var(--color-text-muted)]">{aboutText.startDescription}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/dinh-duong-thien-lanh"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-navy)] px-5 py-2.5 text-sm font-semibold text-[#F6F1E8] shadow-[0_12px_26px_rgba(36,76,99,0.2)] transition-all duration-200 hover:bg-[#1f4256]"
                >
                  {aboutText.primaryCta}
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[rgba(251,248,242,0.92)] px-5 py-2.5 text-sm font-semibold text-[var(--color-navy)] transition-all duration-200 hover:bg-[rgba(220,232,221,0.55)]"
                >
                  {commonText.cta.backToHome}
                </Link>
              </div>
            </section>
          </div>
        </Container>
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
