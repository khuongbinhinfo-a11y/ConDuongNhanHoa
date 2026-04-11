import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { ClosingInvitationSectionContent } from "@/data/homepageSections";

type ClosingInvitationSectionProps = {
  content: ClosingInvitationSectionContent;
};

export function ClosingInvitationSection({ content }: ClosingInvitationSectionProps) {
  return (
    <section className="pb-20 lg:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-[26px] border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(251,248,242,0.94),rgba(220,232,221,0.38))] px-6 py-12 shadow-[0_14px_34px_rgba(36,76,99,0.08)] lg:px-12 lg:py-14">
          <div className="pointer-events-none absolute -right-14 -top-16 h-52 w-52 rounded-full bg-[rgba(111,167,166,0.18)] blur-2xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-20 h-56 w-80 rounded-[58%_42%_54%_46%] bg-[radial-gradient(circle_at_35%_40%,rgba(36,76,99,0.12),rgba(36,76,99,0.02))]" />
          <div className="pointer-events-none absolute bottom-8 right-8 h-14 w-28 rounded-full border border-[rgba(111,167,166,0.26)] opacity-75" />

          <div className="relative z-10 mx-auto max-w-[760px] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-teal)]">Bước Kết Nhẹ</p>
            <h2 className="mt-3 text-[clamp(1.6rem,2.6vw,2.2rem)] font-semibold leading-[1.3] text-[var(--color-text-strong)]">
              {content.title}
            </h2>
            <p className="mx-auto mt-4 max-w-[62ch] text-[0.98rem] text-[var(--color-text-muted)]">{content.description}</p>
            <div className="mt-7">
              <Button href={content.cta.href} variant="ghost" className="bg-[rgba(251,248,242,0.95)] px-6 py-3">
                {content.cta.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
