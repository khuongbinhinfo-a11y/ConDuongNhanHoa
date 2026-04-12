import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { ReadingHubContent } from "@/data/readingHubs";

type ReadingHubPageSectionStructuredProps = {
  content: ReadingHubContent;
};

const relatedDirections: Record<
  ReadingHubContent["slug"],
  { title: string; description: string; href: string }[]
> = {
  "hieu-lai-dieu-quen": [
    {
      title: "Sống khỏe dễ hiểu",
      description: "Đi tiếp bằng nội dung rõ ràng, gần đời sống, dễ áp dụng hằng ngày.",
      href: "/song-khoe-de-hieu",
    },
    {
      title: "Bắt đầu từ thay đổi nhỏ",
      description: "Chuyển hiểu biết thành nhịp thực hành nhẹ và bền.",
      href: "/thay-doi-nho",
    },
    {
      title: "Bắt đầu từ đâu",
      description: "Xem lộ trình tổng quan khi muốn bắt đầu lại thật rõ.",
      href: "/bat-dau-tu-dau",
    },
  ],
  "song-khoe-de-hieu": [
    {
      title: "Hiểu lại điều quen",
      description: "Mở góc nhìn nền tảng trước khi chọn thay đổi cụ thể.",
      href: "/hieu-lai-dieu-quen",
    },
    {
      title: "Bắt đầu từ thay đổi nhỏ",
      description: "Giữ nhịp đều bằng các bước nhỏ, vừa sức.",
      href: "/thay-doi-nho",
    },
    {
      title: "Bắt đầu từ đâu",
      description: "Kết nối các hướng đọc thành một lộ trình mạch lạc.",
      href: "/bat-dau-tu-dau",
    },
  ],
  "thay-doi-nho": [
    {
      title: "Sống khỏe dễ hiểu",
      description: "Bổ sung nền kiến thức ngắn gọn để đi tiếp chắc hơn.",
      href: "/song-khoe-de-hieu",
    },
    {
      title: "Câu chuyện thay đổi",
      description: "Đọc hành trình thật để giữ động lực dài hơn.",
      href: "/cau-chuyen-thay-doi",
    },
    {
      title: "Bắt đầu từ đâu",
      description: "Dùng trang định hướng để chọn nhịp mới phù hợp.",
      href: "/bat-dau-tu-dau",
    },
  ],
  "cau-chuyen-thay-doi": [
    {
      title: "Bắt đầu từ thay đổi nhỏ",
      description: "Đổi cảm hứng thành hành động vừa sức mỗi ngày.",
      href: "/thay-doi-nho",
    },
    {
      title: "Góc nhìn nhân ái",
      description: "Nuôi thêm nền tảng kết nối và tử tế khi đổi thói quen.",
      href: "/goc-nhin-nhan-ai",
    },
    {
      title: "Bắt đầu từ đâu",
      description: "Xem lộ trình tổng quan để đi lại từ điểm xuất phát rõ ràng.",
      href: "/bat-dau-tu-dau",
    },
  ],
  "goc-nhin-nhan-ai": [
    {
      title: "Hiểu lại điều quen",
      description: "Nhìn sâu hơn vào điều quen thuộc để hiểu bản thân rõ hơn.",
      href: "/hieu-lai-dieu-quen",
    },
    {
      title: "Câu chuyện thay đổi",
      description: "Giữ cảm hứng bền bằng các hành trình chân thành từ đời thật.",
      href: "/cau-chuyen-thay-doi",
    },
    {
      title: "Bắt đầu từ đâu",
      description: "Xem lại bản đồ nội dung và chọn hướng đi gần mình nhất.",
      href: "/bat-dau-tu-dau",
    },
  ],
};

export function ReadingHubPageSectionStructured({ content }: ReadingHubPageSectionStructuredProps) {
  return (
    <section className="py-10 lg:py-14">
      <Container>
        <div className="mx-auto max-w-[1060px]">
          <div className="rounded-[24px] border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[0_16px_34px_rgba(36,76,99,0.08)] lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-teal)]">{content.heroKicker}</p>
            <h1 className="mt-2 text-[clamp(1.9rem,3.6vw,3rem)] font-semibold text-[var(--color-text-strong)]">{content.title}</h1>
            <p className="mt-4 max-w-[68ch] text-base text-[var(--color-text-muted)] lg:text-lg">{content.description}</p>

            <div className="mt-7 grid gap-4 lg:grid-cols-3">
              {content.cards.map((card) => (
                <article
                  key={card.id}
                  id={card.id}
                  className="flex h-full flex-col rounded-[20px] border border-[var(--color-border)] bg-[rgba(251,248,242,0.92)] p-4"
                >
                  <h2 className="text-lg font-semibold leading-[1.32] text-[var(--color-text-strong)]">{card.title}</h2>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">{card.summary}</p>
                  <Link
                    href={card.href}
                    className="mt-auto pt-4 text-sm font-semibold text-[var(--color-navy)] transition-colors hover:text-[#1f4256]"
                  >
                    Xem bài mẫu
                  </Link>
                </article>
              ))}
            </div>

            <section className="mt-8 rounded-[20px] border border-[var(--color-border)] bg-[rgba(245,239,230,0.62)] p-5 lg:p-6">
              <h2 className="text-[1.16rem] font-semibold leading-[1.35] text-[var(--color-text-strong)]">Đọc tiếp theo nhịp này</h2>
              <div className="mt-4 grid gap-3 lg:grid-cols-3">
                {relatedDirections[content.slug].map((item) => (
                  <Link
                    key={`${content.slug}-${item.href}`}
                    href={item.href}
                    className="group rounded-[16px] border border-[var(--color-border)] bg-[rgba(251,248,242,0.88)] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(31,65,88,0.22)]"
                  >
                    <p className="text-base font-semibold text-[var(--color-text-strong)] transition-colors group-hover:text-[var(--color-navy)]">
                      {item.title}
                    </p>
                    <p className="mt-1.5 text-sm text-[var(--color-text-muted)]">{item.description}</p>
                  </Link>
                ))}
              </div>
            </section>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/bat-dau-tu-dau"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-navy)] px-5 py-2.5 text-sm font-semibold text-[#F6F1E8] shadow-[0_12px_26px_rgba(36,76,99,0.20)] transition-all duration-200 hover:bg-[#1f4256]"
              >
                Xem lộ trình bắt đầu
              </Link>
              <Link
                href="/quiz"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[rgba(251,248,242,0.92)] px-5 py-2.5 text-sm font-semibold text-[var(--color-navy)] transition-all duration-200 hover:bg-[rgba(220,232,221,0.55)]"
              >
                Làm quiz định hướng
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[rgba(251,248,242,0.92)] px-5 py-2.5 text-sm font-semibold text-[var(--color-navy)] transition-all duration-200 hover:bg-[rgba(220,232,221,0.55)]"
              >
                Quay lại trang chủ
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
