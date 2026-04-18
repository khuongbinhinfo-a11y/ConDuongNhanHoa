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
  languageLabel: string;
  note: string;
  copyrightText: string;
};

export function SiteFooter({
  brandName,
  brandTagline,
  navHeading,
  navLinks,
  languageLabel,
  note,
  copyrightText,
}: SiteFooterProps) {
  return (
    <footer className="mt-2 border-t border-[var(--color-border)] bg-[rgba(255,253,253,0.94)]">
      <Container>
        <div className="grid gap-8 py-10 sm:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-10">
          {/* Brand column */}
          <div className="max-w-[340px] space-y-2.5">
            <Link href="/" aria-label={brandName} className="inline-flex items-center gap-2 text-[var(--color-navy)]">
              <Image
                src="/logo_CDTL/logo_CDTL.png"
                alt={brandName}
                width={1536}
                height={1024}
                className="h-[4rem] w-auto object-contain"
              />
              <span className="text-[1.02rem] font-semibold text-[var(--color-text-strong)]">{brandName}</span>
            </Link>
            <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{brandTagline}</p>
          </div>

          {/* Navigation column */}
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


        </div>

        <div className="border-t border-[var(--color-border)] py-4">
          <p className="text-xs text-[var(--color-text-muted)]">{note}</p>
          <p className="mt-1 text-xs text-[var(--color-text-muted)]">{copyrightText}</p>
        </div>
      </Container>
    </footer>
  );
}
