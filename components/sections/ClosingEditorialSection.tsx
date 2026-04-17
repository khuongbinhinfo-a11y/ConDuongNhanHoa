import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export type ClosingEditorialContent = {
  kicker?: string;
  title: string;
  subtitle: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
};

type ClosingEditorialSectionProps = {
  content: ClosingEditorialContent;
};

export function ClosingEditorialSection({ content }: ClosingEditorialSectionProps) {
  return (
    <section className="pb-20 lg:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[linear-gradient(150deg,rgba(255,253,253,0.98),rgba(230,175,192,0.2),rgba(191,221,226,0.26))] px-6 py-12 shadow-[0_22px_42px_rgba(223,166,184,0.2)] lg:px-12 lg:py-16">
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[rgba(230,175,192,0.26)] blur-3xl" />
          <div className="pointer-events-none absolute -left-10 bottom-4 h-52 w-[440px] rounded-[100%] border border-[rgba(191,221,226,0.44)] opacity-55" />
          <div className="pointer-events-none absolute -left-3 bottom-0 h-44 w-[420px] rounded-[100%] border border-[rgba(230,175,192,0.32)] opacity-45" />
          <div className="pointer-events-none absolute right-8 top-8 h-36 w-36 rounded-[58%_42%_65%_35%] bg-[radial-gradient(circle_at_30%_30%,rgba(230,175,192,0.26),rgba(230,175,192,0.04))]" />

          <div className="relative z-10 mx-auto max-w-[760px] text-center">
            {content.kicker ? (
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-navy)]">{content.kicker}</p>
            ) : null}
            <h2 className="mt-3 text-[clamp(1.7rem,2.8vw,2.4rem)] font-semibold leading-[1.3] text-[var(--color-text-strong)]">
              {content.title}
            </h2>
            <p className="mt-2 text-base font-medium text-[var(--color-navy)]">{content.subtitle}</p>
            <p className="mx-auto mt-4 max-w-[64ch] text-[0.98rem] text-[var(--color-text-muted)]">{content.description}</p>
            <div className="mt-8">
              <Button
                href={content.cta.href}
                className="bg-[var(--color-primary)] px-6 py-3 text-[var(--color-text-strong)] hover:bg-[var(--color-primary-strong)] hover:text-[var(--color-text-strong)]"
              >
                {content.cta.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
