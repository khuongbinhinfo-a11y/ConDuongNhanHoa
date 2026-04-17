import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { HeroContent } from "@/data/homepageData";

type HeroSectionRefinedProps = {
  content: HeroContent;
};

export function HeroSectionRefined({ content }: HeroSectionRefinedProps) {
  return (
    <section className="relative overflow-hidden py-14 lg:py-20">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-12">
          <div className="relative z-10 max-w-[620px]">
            <p className="mb-4 inline-flex rounded-full border border-[rgba(111,167,166,0.36)] bg-[rgba(220,232,221,0.42)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-teal)]">
              {content.eyebrow}
            </p>
            <h1 className="text-[clamp(2rem,4.7vw,4rem)] font-semibold leading-[1.12] text-[var(--color-text-strong)]">
              {content.title}
            </h1>
            <p className="mt-5 max-w-[56ch] text-base text-[var(--color-text-muted)] lg:text-lg">{content.subtitle}</p>

            <div className="mt-8 flex flex-wrap items-start gap-3 sm:items-center">
              <Button href={content.primaryCta.href}>Xem hướng bắt đầu</Button>
              <p className="hero-chat-bubble">
                <span className="hero-chat-bubble__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M6.75 8.75h10.5M6.75 12h6.2M12 18.25l-3.25 2.5v-2.5H7.5c-1.38 0-2.5-1.12-2.5-2.5V7.25c0-1.38 1.12-2.5 2.5-2.5h9c1.38 0 2.5 1.12 2.5 2.5v8.5c0 1.38-1.12 2.5-2.5 2.5H12Z" />
                  </svg>
                </span>
                Chưa biết bắt đầu từ đâu? Thử để web gợi một hướng phù hợp.
              </p>
            </div>
          </div>

          <div className="relative isolate rounded-[24px] border border-[var(--color-border)] bg-[var(--color-card)] p-2 shadow-[0_18px_40px_rgba(36,76,99,0.10)]">
            <div className="absolute -right-10 -top-10 -z-10 h-44 w-44 rounded-full bg-[rgba(111,167,166,0.22)] blur-2xl" />
            <div className="absolute -bottom-8 -left-8 -z-10 h-36 w-36 rounded-full bg-[rgba(220,232,221,0.55)] blur-2xl" />
            <div className="media-frame relative min-h-[320px] rounded-[20px] lg:min-h-[460px]">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="media-img-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
