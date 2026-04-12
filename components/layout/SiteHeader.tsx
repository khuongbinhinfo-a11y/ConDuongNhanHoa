"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { AppLocale } from "@/lib/locale";

type SiteHeaderProps = {
  brandName: string;
  links: { label: string; href: string }[];
  cta: { label: string; href: string };
  locale?: AppLocale;
  onLocaleChange?: (locale: AppLocale) => void;
  menuButtonLabel?: string;
  navAriaLabel?: string;
  localeSwitchAriaLabel?: string;
};

type LocaleSwitcherProps = {
  locale: AppLocale;
  onChange: (locale: AppLocale) => void;
  ariaLabel: string;
  onSelect?: () => void;
};

function LocaleSwitcher({ locale, onChange, ariaLabel, onSelect }: LocaleSwitcherProps) {
  return (
    <div
      className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[rgba(251,247,241,0.9)] px-1 py-0.5"
      role="group"
      aria-label={ariaLabel}
    >
      {(["vi", "en"] as const).map((itemLocale, index) => {
        const isActive = locale === itemLocale;

        return (
          <div key={itemLocale} className="flex items-center">
            <button
              type="button"
              onClick={() => {
                onChange(itemLocale);
                onSelect?.();
              }}
              className={`rounded-full px-2 py-1 text-xs font-semibold uppercase tracking-[0.06em] transition-colors ${
                isActive
                  ? "bg-[rgba(31,65,88,0.12)] text-[var(--color-navy)]"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-navy)]"
              }`}
              aria-pressed={isActive}
            >
              {itemLocale}
            </button>
            {index === 0 ? <span className="mx-0.5 h-3.5 w-px bg-[var(--color-border)]" aria-hidden="true" /> : null}
          </div>
        );
      })}
    </div>
  );
}

export function SiteHeader({
  brandName,
  links,
  cta,
  locale = "vi",
  onLocaleChange,
  menuButtonLabel = "Menu",
  navAriaLabel = "Primary navigation",
  localeSwitchAriaLabel = "Switch language",
}: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[rgba(245,239,230,0.84)] backdrop-blur-md">
      <Container>
        <div className="relative flex min-h-[74px] items-center justify-between gap-4 lg:min-h-[84px]">
          <Link href="/" className="text-base font-semibold tracking-[0.01em] text-[var(--color-navy)] lg:text-lg">
            {brandName}
          </Link>

          <div className="hidden items-center gap-4 lg:flex">
            <nav aria-label={navAriaLabel}>
              <ul className="flex items-center gap-4">
                {links.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-navy)]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {onLocaleChange ? (
              <LocaleSwitcher locale={locale} onChange={onLocaleChange} ariaLabel={localeSwitchAriaLabel} />
            ) : null}

            <Button href={cta.href} className="px-4 py-2 text-sm">
              {cta.label}
            </Button>
          </div>

          <div className="relative lg:hidden">
            <button
              type="button"
              onClick={() => setOpen((current) => !current)}
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[rgba(251,247,241,0.85)] px-4 py-2 text-sm font-medium text-[var(--color-navy)] shadow-[0_8px_18px_rgba(31,65,88,0.08)] backdrop-blur-sm"
              aria-label={menuButtonLabel}
              aria-expanded={open}
            >
              {menuButtonLabel}
            </button>

            <div
              className={`absolute right-0 top-[calc(100%+0.6rem)] z-50 w-[min(320px,92vw)] origin-top-right rounded-[18px] border border-[rgba(31,65,88,0.14)] bg-[rgba(250,244,236,0.96)] p-4 shadow-[0_22px_38px_rgba(31,65,88,0.16)] backdrop-blur-sm transition duration-200 motion-safe:transition-[opacity,transform] ${
                open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1.5 opacity-0"
              }`}
            >
              {onLocaleChange ? (
                <div className="mb-3 border-b border-[var(--color-border)] pb-3">
                  <LocaleSwitcher
                    locale={locale}
                    onChange={onLocaleChange}
                    ariaLabel={localeSwitchAriaLabel}
                    onSelect={() => setOpen(false)}
                  />
                </div>
              ) : null}

              <nav aria-label={navAriaLabel}>
                <ul className="flex flex-col gap-2.5">
                  {links.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="block rounded-[10px] px-2.5 py-2 text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:bg-[rgba(217,228,218,0.4)] hover:text-[var(--color-navy)]"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <Link
                href={cta.href}
                className="calm-cta calm-cta--primary mt-4 inline-flex rounded-full bg-[var(--color-navy)] px-4 py-2 text-sm font-semibold text-[#F6F1E8] shadow-[0_12px_24px_rgba(31,65,88,0.2)] transition-all duration-200 hover:bg-[#1f4256] hover:shadow-[0_15px_28px_rgba(31,65,88,0.24)]"
                onClick={() => setOpen(false)}
              >
                {cta.label}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
