"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { AppLocale } from "@/lib/locale";

type SiteHeaderProps = {
  brandName: string;
  links: { label: string; shortLabel?: string; href: string }[];
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
  compact?: boolean;
};

function LocaleSwitcher({ locale, onChange, ariaLabel, onSelect, compact = false }: LocaleSwitcherProps) {
  const wrapperClass = compact
    ? "inline-flex items-center rounded-[12px] border border-[rgba(31,65,88,0.14)] bg-[rgba(251,247,241,0.72)] px-1 py-0.5 backdrop-blur-sm"
    : "inline-flex items-center rounded-full border border-[var(--color-border)] bg-[rgba(251,247,241,0.9)] px-1 py-0.5";

  const activeClass = compact
    ? "bg-[rgba(31,65,88,0.1)] text-[var(--color-navy)]"
    : "bg-[rgba(31,65,88,0.12)] text-[var(--color-navy)]";

  const idleClass = compact
    ? "text-[rgba(42,54,64,0.64)] hover:text-[var(--color-navy)]"
    : "text-[var(--color-text-muted)] hover:text-[var(--color-navy)]";

  return (
    <div className={wrapperClass} role="group" aria-label={ariaLabel}>
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
              className={`rounded-[8px] px-2 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.09em] transition-colors ${
                isActive ? activeClass : idleClass
              }`}
              aria-pressed={isActive}
            >
              {itemLocale}
            </button>
            {index === 0 ? <span className="mx-0.5 h-3 w-px bg-[var(--color-border)]" aria-hidden="true" /> : null}
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
        <div className="hidden min-h-[90px] grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)_minmax(0,1fr)] items-center gap-6 lg:grid">
          <Link href="/" className="inline-flex items-center gap-3.5 justify-self-start text-[var(--color-navy)]">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-[14px] border border-[rgba(31,65,88,0.14)] bg-[rgba(251,247,241,0.78)] shadow-[0_8px_16px_rgba(31,65,88,0.07)]">
              <svg viewBox="0 0 24 24" className="h-[1.08rem] w-[1.08rem]" fill="none" aria-hidden="true">
                <path
                  d="M5.4 12.4c2.9-2.8 5.8-3.5 8.8-2.2-1.7 2.9-4.7 3.6-8.8 2.2Z"
                  fill="rgba(109,159,155,0.74)"
                />
                <path
                  d="M18.6 11.5c-2.9 2.7-5.8 3.4-8.8 2.2 1.7-2.9 4.7-3.7 8.8-2.2Z"
                  fill="rgba(31,65,88,0.7)"
                />
                <path d="M6.8 18.1c3.4 1 6.8 1 10.2 0" stroke="rgba(31,65,88,0.48)" strokeWidth="1.25" strokeLinecap="round" />
              </svg>
            </span>
            <span className="block max-w-[236px] leading-[1.18]">
              <span className="block text-[0.96rem] font-semibold tracking-[0.012em]">{brandName}</span>
              <span className="mt-[0.18rem] block text-[0.63rem] font-medium uppercase tracking-[0.12em] text-[rgba(42,54,64,0.55)]">
                editorial wellness
              </span>
            </span>
          </Link>

          <nav
            aria-label={navAriaLabel}
            className="justify-self-center rounded-[16px] border border-[rgba(31,65,88,0.08)] bg-[rgba(251,247,241,0.56)] px-2 py-1.5 backdrop-blur-sm"
          >
            <ul className="flex items-center gap-0.5 xl:gap-1">
              {links.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex whitespace-nowrap rounded-[10px] px-2.5 py-[0.42rem] text-[0.82rem] font-medium tracking-[0.01em] text-[rgba(42,54,64,0.76)] transition-colors hover:bg-[rgba(217,228,218,0.46)] hover:text-[var(--color-navy)]"
                  >
                    {item.shortLabel ?? item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="inline-flex items-center justify-self-end gap-2">
            {onLocaleChange ? (
              <LocaleSwitcher locale={locale} onChange={onLocaleChange} ariaLabel={localeSwitchAriaLabel} compact />
            ) : null}

            <Button
              href={cta.href}
              className="rounded-[14px] border border-[rgba(245,239,230,0.22)] px-3.5 py-2 text-[0.77rem] font-semibold tracking-[0.02em] shadow-[0_8px_16px_rgba(31,65,88,0.15)] hover:shadow-[0_11px_20px_rgba(31,65,88,0.2)]"
            >
              {cta.label}
            </Button>
          </div>
        </div>

        <div className="relative flex min-h-[74px] items-center justify-between gap-4 lg:hidden">
          <Link href="/" className="inline-flex items-center gap-2.5 text-[var(--color-navy)]">
            <span className="inline-flex h-[2.125rem] w-[2.125rem] items-center justify-center rounded-[12px] border border-[rgba(31,65,88,0.14)] bg-[rgba(251,247,241,0.78)] shadow-[0_6px_12px_rgba(31,65,88,0.06)]">
              <svg viewBox="0 0 24 24" className="h-[1.125rem] w-[1.125rem]" fill="none" aria-hidden="true">
                <path d="M6.7 15.8c2.1-3.5 4.5-5.1 7.1-4.8-.8 3-3 4.6-7.1 4.8Z" fill="rgba(109,159,155,0.75)" />
                <path d="M17.3 8.1c-2.6 1.9-4.2 4.4-4.7 7.7 2.8-1.3 4.3-3.9 4.7-7.7Z" fill="rgba(31,65,88,0.7)" />
              </svg>
            </span>
            <span className="text-sm font-semibold tracking-[0.01em]">{brandName}</span>
          </Link>

          <div className="relative">
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
