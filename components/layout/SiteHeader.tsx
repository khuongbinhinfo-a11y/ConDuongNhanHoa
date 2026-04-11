"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { HeaderLink } from "@/data/homepageData";

type SiteHeaderProps = {
  brandName: string;
  links: HeaderLink[];
  cta: { label: string; href: string };
};

export function SiteHeader({ brandName, links, cta }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[rgba(246,241,232,0.84)] backdrop-blur-md">
      <Container>
        <div className="flex min-h-[74px] items-center justify-between gap-4 lg:min-h-[84px]">
          <Link href="/" className="text-base font-semibold tracking-[0.01em] text-[var(--color-navy)] lg:text-lg">
            {brandName}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-medium text-[var(--color-navy)] lg:hidden"
            aria-label="Mở menu"
            aria-expanded={open}
          >
            Menu
          </button>

          <div
            className={`absolute left-0 right-0 top-full border-b border-[var(--color-border)] bg-[rgba(251,248,242,0.97)] px-5 py-4 shadow-[0_16px_30px_rgba(36,76,99,0.12)] transition lg:static lg:block lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none ${
              open ? "visible opacity-100" : "invisible opacity-0 lg:visible lg:opacity-100"
            }`}
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-5">
              <nav aria-label="Điều hướng chính">
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
              <Button href={cta.href} className="self-start px-4 py-2 text-sm lg:self-auto">
                {cta.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
