import Link from "next/link";
import { Container } from "@/components/ui/Container";

type FooterLink = {
  label: string;
  href: string;
};

type SiteFooterProps = {
  brandName: string;
  brandTagline: string;
  navHeading: string;
  navLinks: FooterLink[];
  supportHeading: string;
  supportLinks: FooterLink[];
  languageLabel: string;
  note: string;
  copyrightText: string;
};

export function SiteFooter({
  brandName,
  brandTagline,
  navHeading,
  navLinks,
  supportHeading,
  supportLinks,
  languageLabel,
  note,
  copyrightText,
}: SiteFooterProps) {
  return (
    <footer className="mt-2 border-t border-[var(--color-border)] bg-[rgba(245,239,230,0.9)]">
      <Container>
        <div className="grid gap-8 py-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-10">
          <div className="max-w-[360px] space-y-3">
            <div className="inline-flex items-center gap-3 text-[var(--color-navy)]">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-[12px] border border-[rgba(31,65,88,0.14)] bg-[rgba(251,247,241,0.8)] shadow-[0_8px_14px_rgba(31,65,88,0.06)]">
                <svg viewBox="0 0 24 24" className="h-[1.02rem] w-[1.02rem]" fill="none" aria-hidden="true">
                  <path d="M5.4 12.4c2.9-2.8 5.8-3.5 8.8-2.2-1.7 2.9-4.7 3.6-8.8 2.2Z" fill="rgba(109,159,155,0.74)" />
                  <path d="M18.6 11.5c-2.9 2.7-5.8 3.4-8.8 2.2 1.7-2.9 4.7-3.7 8.8-2.2Z" fill="rgba(31,65,88,0.7)" />
                  <path d="M6.8 18.1c3.4 1 6.8 1 10.2 0" stroke="rgba(31,65,88,0.48)" strokeWidth="1.25" strokeLinecap="round" />
                </svg>
              </span>
              <p className="text-[0.96rem] font-semibold tracking-[0.01em]">{brandName}</p>
            </div>
            <p className="text-sm text-[var(--color-text-muted)]">{brandTagline}</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-teal)]">{navHeading}</p>
            <ul className="mt-3 space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-navy)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-teal)]">{supportHeading}</p>
            <ul className="mt-3 space-y-2.5">
              {supportLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-navy)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-[var(--color-text-muted)]">{languageLabel}</p>
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">{note}</p>
          </div>
        </div>

        <div className="border-t border-[rgba(31,65,88,0.1)] py-4">
          <p className="text-xs text-[var(--color-text-muted)]">{copyrightText}</p>
        </div>
      </Container>
    </footer>
  );
}
