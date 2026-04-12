import { Container } from "@/components/ui/Container";

export type WhyWeExistContent = {
  eyebrow?: string;
  title: string;
  description: string;
};

type WhyWeExistSectionProps = {
  content: WhyWeExistContent;
};

export function WhyWeExistSection({ content }: WhyWeExistSectionProps) {
  return (
    <section className="pb-16 lg:pb-20">
      <Container>
        <div className="relative overflow-hidden rounded-[26px] border border-[rgba(31,65,88,0.18)] bg-[linear-gradient(155deg,rgba(31,65,88,0.98),rgba(30,68,88,0.94),rgba(45,96,110,0.86))] px-6 py-10 shadow-[0_20px_38px_rgba(31,65,88,0.16)] lg:px-10 lg:py-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[rgba(109,159,155,0.22)] blur-3xl" />
          <div className="pointer-events-none absolute -left-24 bottom-0 h-52 w-[420px] rounded-[100%] border border-[rgba(245,239,230,0.2)] opacity-55" />
          <div className="pointer-events-none absolute -left-4 bottom-3 h-40 w-[360px] rounded-[100%] border border-[rgba(245,239,230,0.14)] opacity-50" />

          <div className="relative z-10 mx-auto max-w-[760px] text-center">
            {content.eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[rgba(245,239,230,0.8)]">{content.eyebrow}</p>
            ) : null}
            <h2 className="mt-3 text-[clamp(1.7rem,2.8vw,2.35rem)] font-semibold leading-[1.3] text-[#F5EFE6]">
              {content.title}
            </h2>
            <p className="mx-auto mt-4 max-w-[64ch] text-[0.98rem] text-[rgba(245,239,230,0.78)]">{content.description}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
