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
        <div className="flex min-h-[74px] items-center justify-between gap-4 lg:min-h-[84px]">
          <Link href="/" className="text-base font-semibold tracking-[0.01em] text-[var(--color-navy)] lg:text-lg">
            {brandName}
          </Link>

          <div className="flex items-center gap-2 lg:hidden">
            {onLocaleChange ? (
              <LocaleSwitcher locale={locale} onChange={onLocaleChange} ariaLabel={localeSwitchAriaLabel} />
            ) : null}
            <button
              type="button"
              onClick={() => setOpen((current) => !current)}
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-medium text-[var(--color-navy)]"
              aria-label={menuButtonLabel}
              aria-expanded={open}
            >
              {menuButtonLabel}
            </button>
          </div>

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
        </div>

        <div
          className={`absolute left-0 right-0 top-full border-b border-[var(--color-border)] bg-[rgba(251,247,241,0.97)] px-5 py-4 shadow-[0_16px_30px_rgba(31,65,88,0.12)] transition lg:hidden ${
            open ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4">
            <nav aria-label={navAriaLabel}>
              <ul className="flex flex-col gap-3">
                {links.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-navy)]"
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
              className="calm-cta calm-cta--primary inline-flex self-start rounded-full bg-[var(--color-navy)] px-4 py-2 text-sm font-semibold text-[#F6F1E8] shadow-[0_12px_26px_rgba(36,76,99,0.20)] transition-all duration-200 hover:bg-[#1f4256] hover:shadow-[0_16px_30px_rgba(36,76,99,0.28)]"
              onClick={() => setOpen(false)}
            >
              {cta.label}
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
