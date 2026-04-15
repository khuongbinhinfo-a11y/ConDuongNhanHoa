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
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(248,244,236,0.95),rgba(248,244,236,0.86))] backdrop-blur-md">
      <Container>
        <div className="hidden min-h-[88px] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-6 lg:grid xl:gap-8">
          <Link href="/" aria-label={brandName} className="inline-flex shrink-0 items-center py-1 text-[var(--color-navy)]">
            <Image
              src="/logo_CDTL/logo_CDTL.png"
              alt={brandAlt}
              width={1536}
              height={1024}
              priority
              className="h-12 w-auto max-w-[190px] object-contain"
            />
          </Link>

          <nav aria-label={navAriaLabel} className="justify-self-center">
            <ul className="flex flex-nowrap items-center gap-1.5 xl:gap-2.5">
              {desktopNav.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`inline-flex whitespace-nowrap rounded-[9px] px-3 py-1.5 text-[0.84rem] font-medium tracking-[0.01em] transition-colors ${
                        isActive
                          ? "bg-[rgba(220,232,221,0.68)] text-[var(--color-navy)]"
                          : "text-[rgba(39,54,64,0.79)] hover:bg-[rgba(217,228,218,0.55)] hover:text-[var(--color-navy)]"
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
              className="rounded-[12px] border border-[rgba(248,244,236,0.42)] bg-[rgba(30,62,82,0.9)] px-3.5 py-[0.54rem] text-[0.76rem] font-semibold tracking-[0.02em] shadow-[0_7px_12px_rgba(30,62,82,0.12)] hover:bg-[#23495f] hover:shadow-[0_9px_15px_rgba(30,62,82,0.16)]"
            >
              {cta.label}
            </Button>
          </div>
        </div>

        <div className="relative flex min-h-[70px] items-center justify-between gap-3.5 lg:hidden">
          <Link href="/" aria-label={brandName} className="inline-flex min-w-0 items-center py-0.5 text-[var(--color-navy)]">
            <Image
              src="/logo_CDTL/logo_CDTL.png"
              alt={brandAlt}
              width={1536}
              height={1024}
              priority
              className="h-9 w-auto max-w-[150px] object-contain"
            />
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
              className={`absolute right-0 top-[calc(100%+0.55rem)] z-50 w-[min(308px,calc(100vw-1.25rem))] origin-top-right rounded-[17px] border border-[rgba(30,62,82,0.1)] bg-[linear-gradient(170deg,rgba(252,250,246,0.98),rgba(227,236,226,0.65))] p-3.5 shadow-[0_16px_30px_rgba(30,62,82,0.12)] backdrop-blur-sm transition duration-200 motion-safe:transition-[opacity,transform] ${
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
                  {links.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className={`block rounded-[11px] px-3 py-2.5 text-[0.92rem] font-medium transition-colors ${
                            isActive
                              ? "bg-[rgba(220,232,221,0.68)] text-[var(--color-navy)]"
                              : "text-[var(--color-text-muted)] hover:bg-[rgba(217,228,218,0.55)] hover:text-[var(--color-navy)]"
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
                className="calm-cta calm-cta--primary mt-3 inline-flex w-full justify-center rounded-[12px] bg-[rgba(30,62,82,0.9)] px-4 py-2.5 text-sm font-semibold text-[#F8F4EC] shadow-[0_8px_16px_rgba(30,62,82,0.14)] transition-all duration-200 hover:bg-[#23495f] hover:shadow-[0_10px_18px_rgba(30,62,82,0.18)]"
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
