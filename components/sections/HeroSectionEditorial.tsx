import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { HeroContent } from "@/data/homepageData";

type HeroSectionEditorialProps = {
  content: HeroContent;
};

export function HeroSectionEditorial({ content }: HeroSectionEditorialProps) {
  return (
    <section className="relative overflow-hidden py-14 lg:py-20">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-12">
          <div className="relative z-10 max-w-[620px]">
            <p className="mb-4 inline-flex rounded-full border border-[rgba(109,159,155,0.35)] bg-[rgba(217,228,218,0.46)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-teal)]">
              {content.eyebrow}
            </p>
            <h1 className="text-[clamp(2rem,4.7vw,4rem)] font-semibold leading-[1.12] text-[var(--color-text-strong)]">
              {content.title}
            </h1>
            <p className="mt-5 max-w-[56ch] text-base text-[var(--color-text-muted)] lg:text-lg">{content.subtitle}</p>

            <div className="mt-8 flex flex-wrap items-start gap-3 sm:items-center">
              <Button href={content.primaryCta.href}>Xem hướng bắt đầu</Button>
              <p className="hero-note-hint">Bắt đầu từ một điều gần với mình.</p>
            </div>
          </div>

          <div className="relative isolate rounded-[24px] border border-[var(--color-border)] bg-[var(--color-card)] p-2 shadow-[0_18px_42px_rgba(31,65,88,0.10)]">
            <div className="absolute -right-10 -top-10 -z-10 h-44 w-44 rounded-full bg-[rgba(109,159,155,0.2)] blur-2xl" />
            <div className="absolute -bottom-8 -left-8 -z-10 h-36 w-36 rounded-full bg-[rgba(217,228,218,0.6)] blur-2xl" />
            <div className="relative min-h-[320px] overflow-hidden rounded-[20px] lg:min-h-[460px]">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
