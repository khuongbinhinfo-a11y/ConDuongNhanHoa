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
  disabled?: boolean;
};

function LogoMark({ compact = false }: { compact?: boolean }) {
  const wrapperClass = compact
    ? "inline-flex h-8 w-8 items-center justify-center rounded-[10px] border border-[rgba(30,62,82,0.12)] bg-[rgba(252,250,246,0.9)] shadow-[0_6px_12px_rgba(30,62,82,0.06)]"
    : "inline-flex h-9 w-9 items-center justify-center rounded-[12px] border border-[rgba(30,62,82,0.12)] bg-[rgba(252,250,246,0.9)] shadow-[0_8px_16px_rgba(30,62,82,0.06)]";

  const iconClass = compact ? "h-[0.95rem] w-[0.95rem]" : "h-[1.05rem] w-[1.05rem]";

  return (
    <span className={wrapperClass} aria-hidden="true">
      <svg viewBox="0 0 24 24" className={iconClass} fill="none">
        <path
          d="M4.9 12.6c2.6-2.5 5.3-3.2 8.2-2.1-1.5 2.7-4.3 3.4-8.2 2.1Z"
          fill="rgba(115,154,150,0.76)"
        />
        <path
          d="M19.1 11.6c-2.7 2.4-5.4 3.1-8.2 2.1 1.6-2.7 4.3-3.4 8.2-2.1Z"
          fill="rgba(30,62,82,0.73)"
        />
      </svg>
    </span>
  );
}

function LocaleSwitcher({
  locale,
  onChange,
  ariaLabel,
  onSelect,
  compact = false,
  disabled = false,
}: LocaleSwitcherProps) {
  const wrapperClass = compact
    ? "inline-flex items-center rounded-[10px] border border-[rgba(30,62,82,0.12)] bg-[rgba(252,250,246,0.88)] p-[2px] shadow-[0_3px_10px_rgba(30,62,82,0.05)]"
    : "inline-flex items-center rounded-[11px] border border-[rgba(30,62,82,0.12)] bg-[rgba(252,250,246,0.9)] p-[2px] shadow-[0_4px_12px_rgba(30,62,82,0.05)]";

  const activeClass = compact
    ? "bg-[rgba(30,62,82,0.11)] text-[var(--color-navy)]"
    : "bg-[rgba(30,62,82,0.11)] text-[var(--color-navy)]";

  const idleClass = compact
    ? "text-[rgba(39,54,64,0.65)] hover:text-[var(--color-navy)]"
    : "text-[rgba(39,54,64,0.66)] hover:text-[var(--color-navy)]";

  return (
    <div className={wrapperClass} role="group" aria-label={ariaLabel}>
      {(["vi", "en"] as const).map((itemLocale, index) => {
        const isActive = locale === itemLocale;

        return (
          <div key={itemLocale} className="flex items-center">
            <button
              type="button"
              onClick={
                disabled
                  ? undefined
                  : () => {
                      onChange(itemLocale);
                      onSelect?.();
                    }
              }
              className={`rounded-[8px] px-2.5 py-[0.34rem] text-[0.66rem] font-semibold uppercase tracking-[0.08em] transition-colors ${
                isActive ? activeClass : idleClass
              } ${disabled ? "cursor-default" : ""}`}
              aria-pressed={isActive}
              disabled={disabled}
            >
              {itemLocale}
            </button>
            {index === 0 ? (
              <span className="mx-0.5 h-3 w-px bg-[rgba(30,62,82,0.16)]" aria-hidden="true" />
            ) : null}
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
  const localeInteractive = Boolean(onLocaleChange);
  const desktopNav = links.map((item) => ({
    href: item.href,
    label: item.shortLabel ?? item.label,
  }));

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[rgba(248,244,236,0.9)] backdrop-blur-md">
      <Container>
        <div className="hidden min-h-[84px] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-6 lg:grid xl:gap-8">
          <Link href="/" className="inline-flex items-center gap-3 text-[var(--color-navy)]">
            <LogoMark />
            <span className="max-w-[220px] truncate text-[0.95rem] font-semibold tracking-[0.01em]">{brandName}</span>
          </Link>

          <nav aria-label={navAriaLabel} className="justify-self-center">
            <ul className="flex flex-nowrap items-center gap-0.5 xl:gap-1.5">
              {desktopNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex whitespace-nowrap rounded-[9px] px-2.5 py-1.5 text-[0.82rem] font-medium tracking-[0.01em] text-[rgba(39,54,64,0.79)] transition-colors hover:bg-[rgba(252,250,246,0.95)] hover:text-[var(--color-navy)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="inline-flex items-center justify-self-end gap-2.5">
            <LocaleSwitcher
              locale={locale}
              onChange={(nextLocale) => onLocaleChange?.(nextLocale)}
              ariaLabel={localeSwitchAriaLabel}
              compact
              disabled={!localeInteractive}
            />

            <Button
              href={cta.href}
              className="rounded-[12px] border border-[rgba(248,244,236,0.35)] px-3.5 py-[0.56rem] text-[0.76rem] font-semibold tracking-[0.02em] shadow-[0_8px_14px_rgba(30,62,82,0.15)] hover:shadow-[0_10px_18px_rgba(30,62,82,0.19)]"
            >
              {cta.label}
            </Button>
          </div>
        </div>

        <div className="relative flex min-h-[70px] items-center justify-between gap-3.5 lg:hidden">
          <Link href="/" className="inline-flex min-w-0 items-center gap-2.5 text-[var(--color-navy)]">
            <LogoMark compact />
            <span className="truncate text-[0.88rem] font-semibold tracking-[0.01em]">{brandName}</span>
          </Link>

          <div className="relative">
            <button
              type="button"
              onClick={() => setOpen((current) => !current)}
              className="inline-flex items-center justify-center rounded-[11px] border border-[rgba(30,62,82,0.1)] bg-[rgba(252,250,246,0.88)] px-3.5 py-[0.58rem] text-[0.82rem] font-medium text-[var(--color-navy)] shadow-[0_6px_14px_rgba(30,62,82,0.08)] backdrop-blur-sm"
              aria-label={menuButtonLabel}
              aria-expanded={open}
            >
              {menuButtonLabel}
            </button>

            <div
              className={`absolute right-0 top-[calc(100%+0.55rem)] z-50 w-[min(308px,calc(100vw-1.25rem))] origin-top-right rounded-[17px] border border-[rgba(30,62,82,0.1)] bg-[rgba(252,250,246,0.97)] p-3.5 shadow-[0_16px_30px_rgba(30,62,82,0.12)] backdrop-blur-sm transition duration-200 motion-safe:transition-[opacity,transform] ${
                open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1.5 opacity-0"
              }`}
            >
              <div className="mb-3 border-b border-[rgba(30,62,82,0.1)] pb-3">
                <LocaleSwitcher
                  locale={locale}
                  onChange={(nextLocale) => onLocaleChange?.(nextLocale)}
                  ariaLabel={localeSwitchAriaLabel}
                  onSelect={() => setOpen(false)}
                  disabled={!localeInteractive}
                />
              </div>

              <nav aria-label={navAriaLabel}>
                <ul className="flex flex-col gap-1.5">
                  {links.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="block rounded-[11px] px-3 py-2.5 text-[0.92rem] font-medium text-[var(--color-text-muted)] transition-colors hover:bg-[rgba(217,228,218,0.42)] hover:text-[var(--color-navy)]"
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
                className="calm-cta calm-cta--primary mt-3 inline-flex w-full justify-center rounded-[12px] bg-[var(--color-navy)] px-4 py-2.5 text-sm font-semibold text-[#F8F4EC] shadow-[0_10px_20px_rgba(30,62,82,0.16)] transition-all duration-200 hover:bg-[#23485f] hover:shadow-[0_12px_22px_rgba(30,62,82,0.2)]"
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
