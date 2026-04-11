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

export function SiteHeader({
  brandName,
  links,
  cta,
  locale = "vi",
  onLocaleChange = () => {},
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

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-medium text-[var(--color-navy)] lg:hidden"
            aria-label={menuButtonLabel}
            aria-expanded={open}
          >
            {menuButtonLabel}
          </button>

          <div
            className={`absolute left-0 right-0 top-full border-b border-[var(--color-border)] bg-[rgba(251,247,241,0.97)] px-5 py-4 shadow-[0_16px_30px_rgba(31,65,88,0.12)] transition lg:static lg:block lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none ${
              open ? "visible opacity-100" : "invisible opacity-0 lg:visible lg:opacity-100"
            }`}
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-5">
              <nav aria-label={navAriaLabel}>
                <ul className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
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

              <div className="flex flex-wrap items-center gap-3">
                <div
                  className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[rgba(251,247,241,0.9)] px-1 py-0.5"
                  role="group"
                  aria-label={localeSwitchAriaLabel}
                >
                  {(["vi", "en"] as const).map((itemLocale, index) => {
                    const isActive = locale === itemLocale;
                    return (
                      <div key={itemLocale} className="flex items-center">
                        <button
                          type="button"
                          onClick={() => {
                            onLocaleChange(itemLocale);
                            setOpen(false);
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

                <Button href={cta.href} className="self-start px-4 py-2 text-sm lg:self-auto">
                  {cta.label}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
