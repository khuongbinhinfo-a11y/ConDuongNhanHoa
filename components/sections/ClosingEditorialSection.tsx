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
        <div className="relative overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(251,247,241,0.96),rgba(217,228,218,0.45))] px-6 py-12 shadow-[0_18px_40px_rgba(31,65,88,0.08)] lg:px-12 lg:py-16">
          <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[rgba(109,159,155,0.18)] blur-2xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-12 h-52 w-72 rounded-[60%_40%_52%_48%] bg-[radial-gradient(circle_at_40%_35%,rgba(31,65,88,0.14),rgba(31,65,88,0.03))]" />
          <div className="pointer-events-none absolute bottom-10 left-8 h-24 w-64 rounded-[100%] border border-[rgba(109,159,155,0.24)] opacity-70" />
          <div className="pointer-events-none absolute bottom-6 left-16 h-24 w-64 rounded-[100%] border border-[rgba(109,159,155,0.16)] opacity-55" />

          <div className="relative z-10 mx-auto max-w-[760px] text-center">
            {content.kicker ? (
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-teal)]">{content.kicker}</p>
            ) : null}
            <h2 className="mt-3 text-[clamp(1.7rem,2.8vw,2.4rem)] font-semibold leading-[1.3] text-[var(--color-text-strong)]">
              {content.title}
            </h2>
            <p className="mt-2 text-base font-medium text-[var(--color-navy)]">{content.subtitle}</p>
            <p className="mx-auto mt-4 max-w-[64ch] text-[0.98rem] text-[var(--color-text-muted)]">{content.description}</p>
            <div className="mt-8">
              <Button href={content.cta.href} variant="ghost" className="bg-[rgba(251,247,241,0.94)] px-6 py-3">
                {content.cta.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
