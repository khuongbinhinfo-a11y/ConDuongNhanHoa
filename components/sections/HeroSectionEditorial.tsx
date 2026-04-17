import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export type HeroSectionEditorialContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  noteHint: string;
  image: {
    src: string;
    alt: string;
  };
};

type HeroSectionEditorialProps = {
  content: HeroSectionEditorialContent;
};

export function HeroSectionEditorial({ content }: HeroSectionEditorialProps) {
  return (
    <section className="hero-editorial relative overflow-hidden bg-[linear-gradient(180deg,rgba(255,253,253,0.92),rgba(255,253,253,0.64))] py-14 lg:py-20">
      <Container>
        <div className="grid items-center gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-14">
          <div className="relative z-10 max-w-[620px]">
            <p className="hero-editorial__eyebrow mb-4 inline-flex rounded-full border border-[rgba(223,166,184,0.42)] bg-[rgba(230,175,192,0.16)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.11em] text-[var(--color-navy)]">
              {content.eyebrow}
            </p>
            <h1 className="hero-editorial__title text-[clamp(2rem,4.8vw,4.08rem)] font-semibold leading-[1.08] text-[var(--color-text-strong)]">
              {content.title}
            </h1>
            <p className="hero-editorial__subtitle mt-5 max-w-[56ch] text-base text-[var(--color-text-muted)] lg:text-lg">
              {content.subtitle}
            </p>

            <div className="hero-editorial__cta-cluster mt-8 flex flex-wrap items-start gap-3.5 sm:items-center">
              <Button
                href={content.primaryCtaHref}
                className="hero-editorial__cta rounded-[14px] border border-[rgba(223,166,184,0.4)] px-5 py-3 text-[0.88rem] tracking-[0.01em] shadow-[0_12px_24px_rgba(223,166,184,0.24)] hover:shadow-[0_16px_28px_rgba(223,166,184,0.32)]"
              >
                <span className="hero-editorial__cta-label">{content.primaryCtaLabel}</span>
                <span className="hero-editorial__cta-mark" aria-hidden="true" />
              </Button>
              {content.secondaryCtaLabel && content.secondaryCtaHref ? (
                <Button
                  href={content.secondaryCtaHref}
                  variant="ghost"
                  className="rounded-[12px] border-[var(--color-border)] bg-[rgba(255,253,253,0.88)] px-4 py-2.5 text-[0.8rem] font-semibold shadow-none"
                >
                  {content.secondaryCtaLabel}
                </Button>
              ) : null}
              <p className="hero-note-hint">
                <span className="hero-note-hint__mark" aria-hidden="true" />
                <span>{content.noteHint}</span>
              </p>
            </div>
          </div>

          <div className="hero-editorial__media-shell relative isolate rounded-[26px] border border-[var(--color-border)] bg-[rgba(255,253,253,0.9)] p-[0.62rem] shadow-[0_18px_40px_rgba(223,166,184,0.18)]">
            <div className="absolute -right-11 -top-10 -z-10 h-44 w-44 rounded-full bg-[rgba(230,175,192,0.24)] blur-2xl" />
            <div className="absolute -bottom-10 -left-10 -z-10 h-38 w-38 rounded-full bg-[rgba(191,221,226,0.55)] blur-2xl" />
            <div className="hero-editorial__media-frame relative min-h-[328px] overflow-hidden rounded-[20px] lg:min-h-[468px]">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
              <div className="hero-editorial__media-fade absolute inset-x-0 bottom-0 h-24" aria-hidden="true" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
