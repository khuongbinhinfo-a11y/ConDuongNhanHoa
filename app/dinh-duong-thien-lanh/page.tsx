"use client";

import Link from "next/link";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Container } from "@/components/ui/Container";
import { useAppLocale } from "@/lib/useAppLocale";
import { getSiteChrome } from "@/lib/siteChrome";
import type { AppLocale } from "@/lib/locale";

// ─── Helpers ───────────────────────────────────────────────────────────────
type L = Record<AppLocale, string>;
function t(text: L, locale: AppLocale) {
  return text[locale];
}

// ─── Clusters ──────────────────────────────────────────────────────────────
const clusters: { id: string; title: L; summary: L; prompt: L; href: string }[] = [
  {
    id: "kien-thuc-nen-tang",
    title: { vi: "Kiến thức nền tảng", en: "Foundational Knowledge" },
    summary: {
      vi: "Có những nguyên tắc dinh dưỡng cần hiểu trước khi theo bất kỳ cách ăn nào. Không phải để học thuộc, mà để tự nhận ra điều phù hợp.",
      en: "Some nutrition principles are worth understanding before following any eating approach — not to memorize, but to recognize what fits.",
    },
    prompt: {
      vi: "Bạn đang chọn cách ăn vì ai nói, hay vì mình thực sự hiểu?",
      en: "Are you eating a certain way because someone said to, or because you actually understand why?",
    },
    href: "/dinh-duong-thien-lanh#kien-thuc-nen-tang",
  },
  {
    id: "sua-va-nhung-dieu-thuong-tin",
    title: { vi: "Những điều thường được tin về sữa", en: "Common Beliefs About Milk" },
    summary: {
      vi: "Sữa là thực phẩm được bảo vệ bởi nhiều lớp thông tin. Đọc để hiểu nguồn gốc của niềm tin đó trước khi giữ hay bỏ.",
      en: "Milk is a food protected by many layers of messaging. Read to understand where those beliefs come from before deciding what to keep.",
    },
    prompt: {
      vi: "Sữa có thật sự cần thiết như nhiều người vẫn nghĩ?",
      en: "Is milk as essential as many people believe?",
    },
    href: "/dinh-duong-thien-lanh#sua-va-nhung-dieu-thuong-tin",
  },
  {
    id: "chat-dam-hang-ngay",
    title: { vi: "Chất đạm: hiểu sao cho đúng", en: "Protein: Understanding It Right" },
    summary: {
      vi: "Nỗi lo thiếu đạm xuất hiện ngay khi nhắc đến ăn ít thịt. Nhưng cơ thể thực sự cần bao nhiêu, và từ đâu?",
      en: "Worry about protein deficiency surfaces the moment eating less meat is mentioned. But how much does the body actually need, and from where?",
    },
    prompt: {
      vi: "Vì sao nỗi lo thiếu đạm lại dễ xuất hiện đến vậy?",
      en: "Why does protein deficiency worry appear so easily?",
    },
    href: "/dinh-duong-thien-lanh#chat-dam-hang-ngay",
  },
  {
    id: "suc-khoe-chuyen-hoa",
    title: { vi: "Sức khỏe chuyển hóa và bữa ăn hằng ngày", en: "Metabolic Health and Daily Eating" },
    summary: {
      vi: "Đái tháo đường, béo phì, và rối loạn chuyển hóa không chỉ là câu chuyện của đường hay mỡ. Bữa ăn hằng ngày có liên kết chặt hơn nhiều người tưởng.",
      en: "Diabetes, obesity, and metabolic disorders aren't just about sugar or fat. Daily eating is connected more tightly than most people realize.",
    },
    prompt: {
      vi: "Đái tháo đường có chỉ là câu chuyện của đường?",
      en: "Is diabetes only a story about sugar?",
    },
    href: "/dinh-duong-thien-lanh#suc-khoe-chuyen-hoa",
  },
  {
    id: "ung-thu-va-bua-an",
    title: { vi: "Ung thư và những câu hỏi từ bàn ăn", en: "Cancer and the Questions at the Table" },
    summary: {
      vi: "Không phải bữa ăn nào cũng gây ung thư. Nhưng có những thói quen ăn uống hằng ngày tích lũy nguy cơ lâu dài mà ít ai để ý.",
      en: "Not every meal causes cancer. But some daily eating habits quietly accumulate long-term risk in ways most people don't notice.",
    },
    prompt: {
      vi: "Bữa ăn hằng ngày có thể ảnh hưởng đến sức khỏe lâu dài ra sao?",
      en: "How might daily eating affect long-term health?",
    },
    href: "/dinh-duong-thien-lanh#ung-thu-va-bua-an",
  },
];

// ─── Documentary cards ─────────────────────────────────────────────────────
const documentaryCards: {
  id: string;
  tag: L;
  story: L;
  question: L;
  href: string;
  linkText: L;
}[] = [
  {
    id: "sua",
    tag: { vi: "Sữa", en: "Milk" },
    story: {
      vi: "Phim kể về cách các tổ chức ngành sữa đã định hình thông điệp rằng sữa là thực phẩm thiết yếu — qua giáo dục, quảng cáo và các hướng dẫn dinh dưỡng quốc gia.",
      en: "Films trace how the dairy industry shaped the message that milk is essential — through education campaigns, advertising, and national nutrition guidelines.",
    },
    question: {
      vi: "Liệu khuyến nghị về sữa có thực sự xuất phát từ bằng chứng khoa học độc lập, hay phần nào bị ảnh hưởng bởi lợi ích ngành?",
      en: "Do dairy recommendations truly reflect independent science, or are they partly shaped by industry interests?",
    },
    href: "/dinh-duong-thien-lanh#sua-va-nhung-dieu-thuong-tin",
    linkText: {
      vi: "Đọc cụm: Những điều thường tin về sữa →",
      en: "Read cluster: Common beliefs about milk →",
    },
  },
  {
    id: "chat-dam",
    tag: { vi: "Chất đạm", en: "Protein" },
    story: {
      vi: "Phim kể về nỗi lo thiếu đạm khi ăn ít thịt — và hành trình của các vận động viên ăn thuần thực vật chứng minh điều ngược lại trên thực địa.",
      en: "Films follow the protein deficiency worry that comes with eating less meat — and athletes who prove the opposite on a plant-based approach.",
    },
    question: {
      vi: "Nhu cầu đạm thực sự của cơ thể là bao nhiêu, và nguồn thực vật có thực sự đủ đáp ứng không?",
      en: "How much protein does the body actually need, and can plant sources truly meet that need?",
    },
    href: "/dinh-duong-thien-lanh#chat-dam-hang-ngay",
    linkText: {
      vi: "Đọc cụm: Chất đạm — hiểu sao cho đúng →",
      en: "Read cluster: Protein — understanding it right →",
    },
  },
  {
    id: "chuyen-hoa",
    tag: { vi: "Chuyển hóa · Béo phì · Ung thư", en: "Metabolism · Obesity · Cancer" },
    story: {
      vi: "Phim kể về sự gia tăng song song giữa bệnh mãn tính và thay đổi trong khẩu phần — từ đường, chất béo đến thực phẩm chế biến công nghiệp qua nhiều thập kỷ.",
      en: "Films map the parallel rise of chronic disease and dietary shifts — from sugar and fat to ultra-processed food across decades.",
    },
    question: {
      vi: "Liệu bệnh chuyển hóa và ung thư có chủ yếu là lựa chọn cá nhân, hay còn là vấn đề của hệ thống thực phẩm rộng hơn?",
      en: "Are metabolic disease and cancer primarily personal choices, or also a question of the broader food system?",
    },
    href: "/dinh-duong-thien-lanh#suc-khoe-chuyen-hoa",
    linkText: {
      vi: "Đọc cụm: Sức khỏe chuyển hóa →",
      en: "Read cluster: Metabolic Health →",
    },
  },
];

// ─── Seed questions ────────────────────────────────────────────────────────
const seedQuestions: L[] = [
  {
    vi: "Sữa có thật sự cần thiết như nhiều người vẫn nghĩ?",
    en: "Is milk as essential as most people still believe?",
  },
  {
    vi: "Vì sao nỗi lo thiếu đạm luôn xuất hiện đầu tiên?",
    en: "Why does protein deficiency worry always surface first?",
  },
  {
    vi: "Đái tháo đường có chỉ là câu chuyện của đường?",
    en: "Is diabetes only a story about sugar?",
  },
  {
    vi: "Bữa ăn hằng ngày tác động sức khỏe lâu dài ra sao?",
    en: "How does daily eating shape long-term health?",
  },
  {
    vi: "Khi nói về ung thư, vì sao người ta luôn quay lại bàn ăn?",
    en: "When talking about cancer, why does conversation always return to the table?",
  },
  {
    vi: "Một bộ phim tài liệu có thể làm đổi góc nhìn mà vẫn cần đọc chậm như thế nào?",
    en: "How can a documentary shift a perspective while still asking you to read slowly?",
  },
];

// ─── FAQ ───────────────────────────────────────────────────────────────────
const faqItems: { q: L; a: L }[] = [
  {
    q: {
      vi: "Trang này có đưa ra chế độ ăn cụ thể không?",
      en: "Does this page recommend a specific diet?",
    },
    a: {
      vi: "Không. Trang này không kê toa hay gợi ý khẩu phần. Mục tiêu là giúp bạn đặt câu hỏi đúng trước khi chọn.",
      en: "No. This page doesn't prescribe menus or portion sizes. The goal is to help you ask better questions before choosing.",
    },
  },
  {
    q: {
      vi: "Có cần xem phim tài liệu mới hiểu nội dung không?",
      en: "Do I need to watch the documentaries to understand the content?",
    },
    a: {
      vi: "Không cần. Mỗi cụm nội dung đứng độc lập. Phim tài liệu chỉ là một góc nhìn mở thêm, không bắt buộc.",
      en: "Not at all. Each cluster stands on its own. Documentaries are an optional additional lens.",
    },
  },
  {
    q: {
      vi: "Thông tin ở đây có được kiểm chứng không?",
      en: "Is the information here verified?",
    },
    a: {
      vi: "Các nội dung được trình bày theo hướng mở câu hỏi, không phải chốt kết luận tuyệt đối. Nguồn tham khảo được ghi chú khi có thể.",
      en: "Content is framed to open questions, not close them with absolute conclusions. References are noted where possible.",
    },
  },
  {
    q: {
      vi: "Tôi nên bắt đầu từ cụm nào?",
      en: "Which cluster should I start with?",
    },
    a: {
      vi: "Bắt đầu từ câu hỏi gần nhất với cuộc sống bạn hiện tại — sữa, đạm, đường, hay ung thư. Không có thứ tự bắt buộc.",
      en: "Start with whichever question is closest to your daily life right now — milk, protein, sugar, or cancer. There's no required order.",
    },
  },
  {
    q: {
      vi: "Clip/bài từ trang này sẽ trình bày theo cách nào?",
      en: "How will clips or articles from this page be structured?",
    },
    a: {
      vi: "Mỗi clip bắt đầu từ một câu hỏi nhỏ trong bữa ăn hằng ngày, đi chậm vào bằng chứng, và không kết luận tuyệt đối.",
      en: "Each clip begins with a small question from daily eating, moves slowly into evidence, and doesn't close with absolute conclusions.",
    },
  },
];

// ─── Related directions ────────────────────────────────────────────────────
const relatedDirections: { title: L; href: string }[] = [
  { title: { vi: "Hành động thiện lành", en: "Wholesome Conduct" }, href: "/hanh-dong-thien-lanh" },
  { title: { vi: "Giải trí thiện lành", en: "Wholesome Entertainment" }, href: "/giai-tri-thien-lanh" },
  { title: { vi: "Y học thiện lành", en: "Wholesome Medicine" }, href: "/y-hoc-thien-lanh" },
  { title: { vi: "Góc nhìn nhân ái", en: "Compassionate Perspectives" }, href: "/goc-nhin-nhan-ai" },
];

// ─── Reading guide items ───────────────────────────────────────────────────
const readingGuide: { heading: L; body: L }[] = [
  {
    heading: { vi: "Không kết luận tuyệt đối", en: "No absolute conclusions" },
    body: {
      vi: "Mỗi chủ đề được trình bày như một không gian câu hỏi, không phải câu trả lời đóng. Bạn đọc để hiểu rõ hơn, không phải để được mách nước.",
      en: "Each topic is presented as a question space, not a closed answer. You read to understand more clearly, not to be told what to do.",
    },
  },
  {
    heading: { vi: "Bắt đầu từ câu hỏi gần đời sống", en: "Start from questions close to daily life" },
    body: {
      vi: "Chọn cụm gần nhất với bữa ăn hoặc lo lắng hiện tại của bạn. Không cần đọc theo thứ tự — bất kỳ điểm vào nào cũng đúng.",
      en: "Pick the cluster closest to your current meals or concerns. No need to read in order — any entry point works.",
    },
  },
  {
    heading: { vi: "Từ một ý có thể mở thành nhiều clip nhỏ", en: "One idea can open into many short clips" },
    body: {
      vi: "Mỗi câu hỏi trong phần Seed Ideas là một hạt nhân cho clip hoặc bài tiếp theo — không phải nội dung đầy đủ, mà là điểm khởi đầu.",
      en: "Each seed question is the nucleus for a future clip or article — not a finished piece, but a starting point.",
    },
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────
export default function DinhDuongThienLanhPage() {
  const { locale, handleLocaleChange } = useAppLocale();
  const siteChrome = getSiteChrome(locale);
  const navigationText = siteChrome.navigationText;

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-strong)]">
      <SiteHeader
        brandName={navigationText.brand.name}
        brandShortName={navigationText.brand.shortName}
        links={siteChrome.headerLinks}
        cta={siteChrome.headerCta}
        locale={locale}
        onLocaleChange={handleLocaleChange}
        menuButtonLabel={navigationText.menuButton}
        navAriaLabel={navigationText.navAriaLabel}
        localeSwitchAriaLabel={navigationText.localeSwitchAriaLabel}
      />

      <main className="pb-20">
        <Container>
          <div className="mx-auto max-w-[1060px] space-y-6 pt-10 lg:pt-14">

            {/* ── 1. Hero ─────────────────────────────────────────────── */}
            <div className="rounded-[24px] border border-[var(--color-border)] bg-[var(--color-card)] p-7 shadow-[0_16px_34px_rgba(191,221,226,0.18)] lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-teal)]">
                {locale === "vi" ? "Hiểu đúng trước, thay đổi sau" : "Understand first, then change"}
              </p>
              <h1 className="mt-2 text-[clamp(2rem,3.8vw,3.1rem)] font-semibold leading-[1.18] text-[var(--color-text-strong)]">
                {locale === "vi" ? "Dinh dưỡng thiện lành" : "Wholesome Nutrition"}
              </h1>
              <p className="mt-4 max-w-[66ch] text-base leading-relaxed text-[var(--color-text-muted)] lg:text-[1.07rem]">
                {locale === "vi"
                  ? "Dinh dưỡng không bắt đầu từ chế độ ăn mà từ cách hiểu. Đây là nơi đặt lại những điều tưởng đã biết để nhìn rõ hơn trước khi chọn."
                  : "Nutrition doesn't begin with a diet — it begins with understanding. This is where you revisit what you thought you knew, so you can choose more clearly."}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="#noi-dung-theo-chu-de"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text-strong)] shadow-[0_10px_22px_rgba(191,221,226,0.3)] transition-all duration-200 hover:bg-[var(--color-primary-strong)]"
                >
                  {locale === "vi" ? "Xem nội dung theo chủ đề" : "Browse topics"}
                </Link>
                <Link
                  href="#goc-nhin-phim-tai-lieu"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[rgba(255,253,253,0.94)] px-5 py-2.5 text-sm font-semibold text-[var(--color-navy)] transition-all duration-200 hover:bg-[rgba(191,221,226,0.22)]"
                >
                  {locale === "vi" ? "Góc nhìn từ phim tài liệu" : "Documentary perspectives"}
                </Link>
              </div>
            </div>

            {/* ── 2. Reading guide (NEW) ───────────────────────────────── */}
            <div className="rounded-[20px] border border-[rgba(191,221,226,0.5)] bg-[linear-gradient(135deg,rgba(191,221,226,0.12),rgba(255,253,253,0))] p-6 lg:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-teal)]">
                {locale === "vi" ? "Hướng dẫn đọc" : "Reading guide"}
              </p>
              <h2 className="mt-1.5 text-[1.18rem] font-semibold text-[var(--color-text-strong)]">
                {locale === "vi" ? "Đọc trang này theo cách nào" : "How to read this page"}
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {readingGuide.map((item, i) => (
                  <div key={i} className="flex gap-3.5">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(191,221,226,0.4)] text-[0.68rem] font-bold text-[var(--color-navy)]">
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-[0.93rem] font-semibold text-[var(--color-text-strong)]">
                        {t(item.heading, locale)}
                      </p>
                      <p className="mt-1 text-[0.84rem] leading-relaxed text-[var(--color-text-muted)]">
                        {t(item.body, locale)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── 3. Cluster grid ──────────────────────────────────────── */}
            <div id="noi-dung-theo-chu-de">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-teal)]">
                {locale === "vi" ? "Nội dung theo chủ đề" : "Topics"}
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {clusters.map((cluster) => (
                  <article
                    key={cluster.id}
                    id={cluster.id}
                    className="group flex flex-col rounded-[20px] border border-[rgba(191,221,226,0.4)] bg-white overflow-hidden"
                  >
                    {/* Accent bar */}
                    <div className="h-[3px] w-full bg-[linear-gradient(90deg,rgba(191,221,226,0.8),rgba(230,175,192,0.5))]" aria-hidden="true" />
                    <div className="flex flex-1 flex-col p-5">
                      <h2 className="text-[1.02rem] font-semibold leading-[1.3] text-[var(--color-text-strong)]">
                        {t(cluster.title, locale)}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                        {t(cluster.summary, locale)}
                      </p>
                      <p className="mt-3 text-[0.84rem] italic text-[var(--color-navy)] opacity-85">
                        {t(cluster.prompt, locale)}
                      </p>
                      <Link
                        href={cluster.href}
                        className="mt-auto pt-5 text-sm font-semibold text-[var(--color-navy)] transition-colors hover:opacity-75"
                      >
                        {locale === "vi" ? "Mở cụm này →" : "Open cluster →"}
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* ── 4. Documentary section (UPGRADED) ───────────────────── */}
            <div
              id="goc-nhin-phim-tai-lieu"
              className="rounded-[24px] border border-[rgba(191,221,226,0.5)] bg-[linear-gradient(150deg,rgba(191,221,226,0.14),rgba(230,175,192,0.08))] p-6 lg:p-10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-teal)]">
                {locale === "vi" ? "Phim tài liệu" : "Documentary"}
              </p>
              <h2 className="mt-1.5 text-[1.3rem] font-semibold text-[var(--color-text-strong)] lg:text-[1.45rem]">
                {locale === "vi" ? "Góc nhìn mở ra từ phim tài liệu" : "Perspectives Opened by Documentary Film"}
              </h2>
              <p className="mt-3 max-w-[66ch] text-sm leading-relaxed text-[var(--color-text-muted)]">
                {locale === "vi"
                  ? "Một số phim tài liệu về dinh dưỡng có thể làm thay đổi cách nhìn — và cũng có thể đơn giản hóa thái quá. Đặt trong ngữ cảnh đúng, chúng là điểm khởi đầu để đặt câu hỏi, không phải câu trả lời cuối cùng."
                  : "Some nutrition documentaries can shift your perspective — and some can oversimplify. Placed in the right context, they're starting points for questions, not final answers."}
              </p>

              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                {documentaryCards.map((card) => (
                  <div
                    key={card.id}
                    className="flex flex-col rounded-[18px] border border-[rgba(191,221,226,0.55)] bg-white p-5 shadow-[0_4px_16px_rgba(191,221,226,0.14)]"
                  >
                    {/* Tag */}
                    <span className="inline-block self-start rounded-full border border-[rgba(191,221,226,0.7)] bg-[rgba(191,221,226,0.18)] px-3 py-0.5 text-[0.72rem] font-semibold text-[var(--color-navy)]">
                      {t(card.tag, locale)}
                    </span>

                    {/* Story */}
                    <div className="mt-4">
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-[var(--color-teal)]">
                        {locale === "vi" ? "Phim đang kể gì" : "What the film says"}
                      </p>
                      <p className="mt-1.5 text-[0.9rem] leading-relaxed text-[var(--color-text-strong)]">
                        {t(card.story, locale)}
                      </p>
                    </div>

                    {/* Question */}
                    <div className="mt-4">
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-[rgba(191,150,165,0.9)]">
                        {locale === "vi" ? "Phim đang đặt lại câu hỏi gì" : "What the film questions"}
                      </p>
                      <p className="mt-1.5 text-[0.88rem] italic leading-relaxed text-[var(--color-text-muted)]">
                        {t(card.question, locale)}
                      </p>
                    </div>

                    {/* Link */}
                    <Link
                      href={card.href}
                      className="mt-auto pt-4 text-[0.84rem] font-semibold text-[var(--color-navy)] transition-opacity hover:opacity-70"
                    >
                      {t(card.linkText, locale)}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* ── 5. Seed questions (NEW) ──────────────────────────────── */}
            <div>
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-teal)]">
                {locale === "vi" ? "Ý tưởng nội dung" : "Content seeds"}
              </p>
              <h2 className="mb-5 text-[1.18rem] font-semibold text-[var(--color-text-strong)]">
                {locale === "vi"
                  ? "Từ một câu hỏi nhỏ để mở thành clip ngắn"
                  : "From a small question into a short clip"}
              </h2>
              <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
                {seedQuestions.map((q, i) => (
                  <div
                    key={i}
                    className="flex gap-4 rounded-[18px] border border-[var(--color-border)] bg-[var(--color-card)] p-5"
                  >
                    <span className="mt-0.5 shrink-0 font-mono text-[1.05rem] font-bold text-[rgba(191,221,226,0.9)] tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[0.94rem] font-medium leading-[1.45] text-[var(--color-text-strong)]">
                      {t(q, locale)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── 6. FAQ (NEW) ─────────────────────────────────────────── */}
            <div className="rounded-[20px] border border-[var(--color-border)] bg-[var(--color-card)] p-6 lg:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-teal)]">
                {locale === "vi" ? "Câu hỏi dễ gặp" : "Common questions"}
              </p>
              <h2 className="mt-1.5 text-[1.18rem] font-semibold text-[var(--color-text-strong)]">
                {locale === "vi" ? "Câu hỏi dễ gặp" : "Common questions"}
              </h2>
              <dl className="mt-5 space-y-5">
                {faqItems.map((item, i) => (
                  <div key={i} className="border-t border-[var(--color-border)] pt-5 first:border-t-0 first:pt-0">
                    <dt className="text-[0.96rem] font-semibold text-[var(--color-text-strong)]">
                      {t(item.q, locale)}
                    </dt>
                    <dd className="mt-1.5 text-[0.9rem] leading-relaxed text-[var(--color-text-muted)]">
                      {t(item.a, locale)}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* ── 7. Related directions (bottom, light) ────────────────── */}
            <div className="border-t border-[var(--color-border)] pt-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-teal)]">
                {locale === "vi" ? "Hướng liên quan" : "Related directions"}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {relatedDirections.map((dir) => (
                  <Link
                    key={dir.href}
                    href={dir.href}
                    className="rounded-full border border-[var(--color-border)] bg-[rgba(255,253,253,0.9)] px-4 py-2 text-[0.85rem] font-medium text-[var(--color-navy)] transition-all duration-200 hover:border-[rgba(191,221,226,0.7)] hover:bg-[rgba(191,221,226,0.18)]"
                  >
                    {t(dir.title, locale)}
                  </Link>
                ))}
                <Link
                  href="/"
                  className="rounded-full border border-[var(--color-border)] bg-[rgba(255,253,253,0.9)] px-4 py-2 text-[0.85rem] font-medium text-[var(--color-text-muted)] transition-all duration-200 hover:border-[rgba(191,221,226,0.7)] hover:text-[var(--color-navy)]"
                >
                  {locale === "vi" ? "← Trang chủ" : "← Home"}
                </Link>
              </div>
            </div>

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
