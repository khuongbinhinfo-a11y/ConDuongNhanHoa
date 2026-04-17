import Link from "next/link";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Container } from "@/components/ui/Container";
import { getSiteChrome } from "@/lib/siteChrome";

const startPaths = [
  {
    title: "Hiểu lại điều quen",
    description: "Dành cho lúc muốn nhìn sâu hơn vào điều tưởng đã quá quen thuộc.",
    href: "/hieu-lai-dieu-quen",
  },
  {
    title: "Sống khỏe dễ hiểu",
    description: "Dành cho lúc cần nội dung ngắn gọn, rõ ràng và dễ áp dụng.",
    href: "/song-khoe-de-hieu",
  },
  {
    title: "Câu chuyện thay đổi",
    description: "Dành cho lúc cần cảm hứng thật từ những hành trình đời thường.",
    href: "/cau-chuyen-thay-doi",
  },
];

const nextMoves = [
  {
    title: "Làm quiz định hướng đọc",
    description: "Trả lời vài câu ngắn để hệ thống gợi phần nên đọc trước.",
    href: "/quiz",
    emphasized: true,
  },
  {
    title: "Bắt đầu bằng một thay đổi nhỏ",
    description: "Nếu muốn hành động ngay, vào thẳng cụm nội dung thay đổi nhỏ.",
    href: "/thay-doi-nho",
  },
  {
    title: "Đi từ góc nhìn nhân ái",
    description: "Khi cần một nhịp đọc dịu hơn, nhiều kết nối hơn.",
    href: "/goc-nhin-nhan-ai",
  },
];

export default function BatDauTuDauPage() {
  const locale = "vi";
  const siteChrome = getSiteChrome(locale);
  const navigationText = siteChrome.navigationText;

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-strong)]">
      <SiteHeader brandName={navigationText.brand.name} links={siteChrome.headerLinks} cta={siteChrome.headerCta} />

      <main className="py-10 lg:py-14">
        <Container>
          <div className="mx-auto max-w-[1080px] space-y-8">
            <section className="rounded-[24px] border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[0_16px_34px_rgba(36,76,99,0.08)] lg:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-teal)]">Bắt đầu từ đâu</p>
              <h1 className="mt-2 text-[clamp(1.9rem,3.6vw,3rem)] font-semibold leading-[1.2] text-[var(--color-text-strong)]">
                Chọn điểm bắt đầu rõ ràng cho thời điểm này
              </h1>
              <p className="mt-4 max-w-[68ch] text-base text-[var(--color-text-muted)] lg:text-lg">
                Trang này giúp bạn nhìn nhanh toàn bộ hướng đọc chính của website, rồi chọn một lối đi phù hợp trước khi đào sâu nội dung.
              </p>
            </section>

            <section className="rounded-[24px] border border-[var(--color-border)] bg-[rgba(251,247,241,0.78)] p-6 lg:p-8">
              <h2 className="text-[1.28rem] font-semibold leading-[1.35] text-[var(--color-text-strong)]">
                Ba lối vào chính để bắt đầu
              </h2>
              <div className="mt-5 grid gap-4 lg:grid-cols-3">
                {startPaths.map((item) => (
                  <article
                    key={item.href}
                    className="flex h-full flex-col rounded-[18px] border border-[var(--color-border)] bg-[rgba(251,248,242,0.9)] p-4"
                  >
                    <h3 className="text-lg font-semibold text-[var(--color-text-strong)]">{item.title}</h3>
                    <p className="mt-2 text-sm text-[var(--color-text-muted)]">{item.description}</p>
                    <Link
                      href={item.href}
                      className="mt-auto pt-4 text-sm font-semibold text-[var(--color-navy)] transition-colors hover:text-[#1f4256]"
                    >
                      Mở hướng đọc
                    </Link>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-[24px] border border-[var(--color-border)] bg-[rgba(245,239,230,0.66)] p-6 lg:p-8">
              <h2 className="text-[1.28rem] font-semibold leading-[1.35] text-[var(--color-text-strong)]">
                Bước tiếp theo để đi sâu hơn
              </h2>
              <div className="mt-5 grid gap-4 lg:grid-cols-3">
                {nextMoves.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-[18px] border p-4 transition-all duration-200 hover:-translate-y-0.5 ${
                      item.emphasized
                        ? "border-[rgba(31,65,88,0.18)] bg-[linear-gradient(145deg,rgba(31,65,88,0.96),rgba(45,96,110,0.82))] text-[#F5EFE6]"
                        : "border-[var(--color-border)] bg-[rgba(251,248,242,0.9)] text-[var(--color-text-strong)]"
                    }`}
                  >
                    <p className={`text-lg font-semibold ${item.emphasized ? "text-[#F5EFE6]" : "text-[var(--color-text-strong)]"}`}>
                      {item.title}
                    </p>
                    <p className={`mt-2 text-sm ${item.emphasized ? "text-[rgba(245,239,230,0.84)]" : "text-[var(--color-text-muted)]"}`}>
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </Container>
      </main>

      <SiteFooter
        brandName={navigationText.brand.name}
        brandTagline={siteChrome.footer.brandTagline}
        navHeading={siteChrome.footer.navHeading}
        navLinks={siteChrome.footer.navLinks}
        languageLabel={siteChrome.footer.languageLabel}
        note={siteChrome.footer.note}
        copyrightText={siteChrome.footer.copyrightText}
      />
    </div>
  );
}
