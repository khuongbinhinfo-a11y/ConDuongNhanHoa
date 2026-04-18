"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { AppLocale } from "@/lib/locale";

type SiteHeaderProps = {
  brandName: string;
  brandShortName?: string;
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

function LocaleSwitcher({
  locale,
  onChange,
  ariaLabel,
  onSelect,
  compact = false,
  disabled = false,
}: LocaleSwitcherProps) {
  const wrapperClass = compact
    ? "inline-flex items-center rounded-[10px] border border-[var(--color-border)] bg-[rgba(251,253,251,0.92)] p-[2px] shadow-[0_3px_10px_rgba(90,154,108,0.08)]"
    : "inline-flex items-center rounded-[11px] border border-[var(--color-border)] bg-[rgba(251,253,251,0.94)] p-[2px] shadow-[0_4px_12px_rgba(90,154,108,0.1)]";

  const activeClass = compact
    ? "bg-[var(--color-mint)] text-[var(--color-text-strong)]"
    : "bg-[var(--color-mint)] text-[var(--color-text-strong)]";

  const idleClass = compact
    ? "text-[var(--color-text-muted)] hover:text-[var(--color-navy)]"
    : "text-[var(--color-text-muted)] hover:text-[var(--color-navy)]";

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
              <span className="mx-0.5 h-3 w-px bg-[var(--color-sage)]" aria-hidden="true" />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export function SiteHeader({
  brandName,
  brandShortName,
  links,
  cta,
  locale = "vi",
  onLocaleChange,
  menuButtonLabel = "Menu",
  navAriaLabel = "Primary navigation",
  localeSwitchAriaLabel = "Switch language",
}: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const localeInteractive = Boolean(onLocaleChange);
  const brandAlt = brandShortName ?? brandName;
  const desktopNav = links.map((item) => ({
    href: item.href,
    label: item.shortLabel ?? item.label,
  }));

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(252,254,251,0.97),rgba(248,252,248,0.92))] backdrop-blur-md">
      <Container>
        <div className="hidden min-h-[110px] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-6 lg:grid xl:gap-8">
          <Link href="/" aria-label={brandName} className="inline-flex shrink-0 items-center gap-2.5 py-1 text-[var(--color-navy)]">
            <Image
              src="/logo_CDTL/logo_CDTL.png"
              alt={brandAlt}
              width={1536}
              height={1024}
              priority
              className="h-[8rem] w-auto object-contain"
            />
            <span className="text-[1.18rem] font-semibold tracking-[0.01em] text-[var(--color-text-strong)]">{brandName}</span>
          </Link>

          <nav aria-label={navAriaLabel} className="justify-self-center">
            <ul className="flex flex-nowrap items-center gap-1 xl:gap-2">
              {desktopNav.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`inline-flex whitespace-nowrap rounded-[9px] px-2.5 py-1.5 text-[0.78rem] font-medium tracking-[0.01em] transition-colors xl:px-3 xl:text-[0.82rem] ${
                        isActive
                          ? "bg-[var(--color-mint)] font-semibold text-[var(--color-navy)] shadow-[0_1px_3px_rgba(90,154,108,0.12)]"
                          : "text-[var(--color-text-muted)] hover:bg-[var(--color-accent-light)] hover:text-[var(--color-navy)]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
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
              className="rounded-[12px] border border-[rgba(90,154,108,0.35)] bg-[var(--color-primary)] px-3.5 py-[0.54rem] text-[0.76rem] font-semibold tracking-[0.02em] text-white shadow-[0_4px_10px_rgba(90,154,108,0.18)] hover:bg-[var(--color-primary-strong)] hover:shadow-[0_6px_14px_rgba(90,154,108,0.24)]"
            >
              {cta.label}
            </Button>
          </div>
        </div>

        <div className="relative flex min-h-[82px] items-center justify-between gap-3.5 lg:hidden">
          <Link href="/" aria-label={brandName} className="inline-flex min-w-0 items-center gap-2 py-0.5 text-[var(--color-navy)]">
            <Image
              src="/logo_CDTL/logo_CDTL.png"
              alt={brandAlt}
              width={1536}
              height={1024}
              priority
              className="h-[6rem] w-auto object-contain"
            />
            <span className="text-[1.08rem] font-semibold tracking-[0.01em] text-[var(--color-text-strong)]">{brandName}</span>
          </Link>

          <div className="relative">
            <button
              type="button"
              onClick={() => setOpen((current) => !current)}
              className="inline-flex items-center justify-center rounded-[11px] border border-[var(--color-border)] bg-[rgba(251,253,251,0.92)] px-3.5 py-[0.58rem] text-[0.82rem] font-medium text-[var(--color-navy)] shadow-[0_4px_12px_rgba(90,154,108,0.1)] backdrop-blur-sm"
              aria-label={menuButtonLabel}
              aria-expanded={open}
            >
              {menuButtonLabel}
            </button>

            <div
              className={`absolute right-0 top-[calc(100%+0.55rem)] z-50 w-[min(308px,calc(100vw-1.25rem))] origin-top-right rounded-[17px] border border-[var(--color-border)] bg-white p-3.5 shadow-[0_12px_32px_rgba(36,52,71,0.1)] transition duration-200 motion-safe:transition-[opacity,transform] ${
                open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1.5 opacity-0"
              }`}
            >
              <div className="mb-3 border-b border-[var(--color-border)] pb-3">
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
                  {links.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className={`block rounded-[11px] px-3 py-2.5 text-[0.92rem] font-medium transition-colors ${
                            isActive
                              ? "bg-[var(--color-accent-light)] font-semibold text-[var(--color-navy)] border-l-[3px] border-l-[var(--color-teal)]"
                              : "text-[var(--color-navy)] hover:bg-[var(--color-accent-light)]"
                          }`}
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <Link
                href={cta.href}
                className="calm-cta calm-cta--primary mt-3 inline-flex w-full justify-center rounded-[12px] bg-[var(--color-primary)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_4px_12px_rgba(90,154,108,0.2)] transition-all duration-200 hover:bg-[var(--color-primary-strong)] hover:shadow-[0_6px_16px_rgba(90,154,108,0.28)]"
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
