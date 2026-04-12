import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export type HeroSectionEditorialContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
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
    <section className="hero-editorial relative overflow-hidden py-14 lg:py-20">
      <Container>
        <div className="grid items-center gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-14">
          <div className="relative z-10 max-w-[620px]">
            <p className="hero-editorial__eyebrow mb-4 inline-flex rounded-full border border-[rgba(109,159,155,0.33)] bg-[rgba(217,228,218,0.46)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.11em] text-[var(--color-teal)]">
              {content.eyebrow}
            </p>
            <h1 className="hero-editorial__title text-[clamp(2rem,4.8vw,4.05rem)] font-semibold leading-[1.1] text-[var(--color-text-strong)]">
              {content.title}
            </h1>
            <p className="hero-editorial__subtitle mt-5 max-w-[58ch] text-base text-[var(--color-text-muted)] lg:text-lg">
              {content.subtitle}
            </p>

            <div className="hero-editorial__cta-cluster mt-8 flex flex-wrap items-start gap-3 sm:items-center">
              <Button
                href={content.primaryCtaHref}
                className="hero-editorial__cta rounded-[14px] border border-[rgba(245,239,230,0.34)] px-5 py-3 text-[0.88rem] tracking-[0.01em] shadow-[0_14px_28px_rgba(31,65,88,0.22)] hover:shadow-[0_18px_32px_rgba(31,65,88,0.28)]"
              >
                {content.primaryCtaLabel}
              </Button>
              <p className="hero-note-hint">
                <span className="hero-note-hint__mark" aria-hidden="true" />
                <span>{content.noteHint}</span>
              </p>
            </div>
          </div>

          <div className="hero-editorial__media-shell relative isolate rounded-[26px] border border-[rgba(31,65,88,0.1)] bg-[rgba(251,247,241,0.82)] p-[0.62rem] shadow-[0_22px_48px_rgba(31,65,88,0.12)]">
            <div className="absolute -right-11 -top-10 -z-10 h-44 w-44 rounded-full bg-[rgba(109,159,155,0.2)] blur-2xl" />
            <div className="absolute -bottom-10 -left-10 -z-10 h-38 w-38 rounded-full bg-[rgba(217,228,218,0.62)] blur-2xl" />
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
