import Image from "next/image";
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
            <Link href="/" aria-label={brandName} className="inline-flex items-center text-[var(--color-navy)]">
              <Image
                src="/logo_CDTL/logo_CDTL.png"
                alt={brandName}
                width={1536}
                height={1024}
                className="h-[3.25rem] w-auto max-w-[240px] object-contain"
              />
            </Link>
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
