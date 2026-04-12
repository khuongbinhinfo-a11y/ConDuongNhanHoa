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
        <div className="relative overflow-hidden rounded-[28px] border border-[rgba(31,65,88,0.2)] bg-[linear-gradient(150deg,rgba(31,65,88,0.98),rgba(33,70,90,0.95),rgba(45,92,108,0.88))] px-6 py-12 shadow-[0_22px_42px_rgba(31,65,88,0.18)] lg:px-12 lg:py-16">
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[rgba(109,159,155,0.22)] blur-3xl" />
          <div className="pointer-events-none absolute -left-10 bottom-4 h-52 w-[440px] rounded-[100%] border border-[rgba(245,239,230,0.24)] opacity-55" />
          <div className="pointer-events-none absolute -left-3 bottom-0 h-44 w-[420px] rounded-[100%] border border-[rgba(245,239,230,0.16)] opacity-45" />
          <div className="pointer-events-none absolute right-8 top-8 h-36 w-36 rounded-[58%_42%_65%_35%] bg-[radial-gradient(circle_at_30%_30%,rgba(245,239,230,0.26),rgba(245,239,230,0.03))]" />

          <div className="relative z-10 mx-auto max-w-[760px] text-center">
            {content.kicker ? (
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[rgba(245,239,230,0.82)]">{content.kicker}</p>
            ) : null}
            <h2 className="mt-3 text-[clamp(1.7rem,2.8vw,2.4rem)] font-semibold leading-[1.3] text-[#F5EFE6]">
              {content.title}
            </h2>
            <p className="mt-2 text-base font-medium text-[rgba(245,239,230,0.9)]">{content.subtitle}</p>
            <p className="mx-auto mt-4 max-w-[64ch] text-[0.98rem] text-[rgba(245,239,230,0.76)]">{content.description}</p>
            <div className="mt-8">
              <Button
                href={content.cta.href}
                className="bg-[rgba(245,239,230,0.97)] px-6 py-3 text-[var(--color-navy)] hover:bg-[rgba(247,242,233,0.98)] hover:text-[var(--color-navy)]"
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
