"use client";

import Link from "next/link";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Container } from "@/components/ui/Container";
import { useAppLocale } from "@/lib/useAppLocale";
import { getSiteChrome } from "@/lib/siteChrome";
import type { AppLocale } from "@/lib/locale";
// NOTE: This page is self-contained. It does not use BranchLandingPageSection
// so that it can follow a stricter editorial 4-band layout.

// ─── Helpers ───────────────────────────────────────────────────────────────
type L = Record<AppLocale, string>;
const t = (text: L, locale: AppLocale) => text[locale];

// ─── Band 2 data: 5 topic clusters ────────────────────────────────────────
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

// ─── Band 3 data: 3 documentary lenses ────────────────────────────────────
const docLenses: { id: string; label: L; story: L; question: L; href: string; linkText: L }[] = [
  {
    id: "sua",
    label: { vi: "Sữa", en: "Milk" },
    story: {
      vi: "Phim kể về cách ngành sữa định hình thông điệp rằng sữa là thiết yếu — qua giáo dục, quảng cáo và hướng dẫn dinh dưỡng quốc gia qua nhiều thập kỷ.",
      en: "Films trace how the dairy industry shaped the message that milk is essential — through education campaigns, advertising, and national nutrition guidelines over decades.",
    },
    question: {
      vi: "Liệu khuyến nghị về sữa có thực sự xuất phát từ bằng chứng khoa học độc lập, hay phần nào bị ảnh hưởng bởi lợi ích ngành?",
      en: "Do dairy recommendations truly reflect independent science, or are they partly shaped by industry interests?",
    },
    href: "/dinh-duong-thien-lanh#sua-va-nhung-dieu-thuong-tin",
    linkText: { vi: "Đọc cụm về sữa →", en: "Read the milk cluster →" },
  },
  {
    id: "chat-dam",
    label: { vi: "Chất đạm", en: "Protein" },
    story: {
      vi: "Phim theo dõi nỗi lo thiếu đạm khi giảm thịt — và hành trình của các vận động viên ăn thuần thực vật chứng minh điều ngược lại trên thực địa.",
      en: "Films follow the protein deficiency worry when cutting meat — and athletes on plant-based diets who prove otherwise in the field.",
    },
    question: {
      vi: "Cơ thể thực sự cần bao nhiêu đạm, và nguồn thực vật có đủ đáp ứng không?",
      en: "How much protein does the body actually need, and can plant sources truly meet that?",
    },
    href: "/dinh-duong-thien-lanh#chat-dam-hang-ngay",
    linkText: { vi: "Đọc cụm về chất đạm →", en: "Read the protein cluster →" },
  },
  {
    id: "chuyen-hoa",
    label: { vi: "Chuyển hóa · Béo phì · Ung thư", en: "Metabolism · Obesity · Cancer" },
    story: {
      vi: "Phim vạch ra sự gia tăng song song giữa bệnh mãn tính và thay đổi khẩu phần — từ đường, chất béo đến thực phẩm chế biến công nghiệp qua nhiều thập kỷ.",
      en: "Films map the parallel rise of chronic disease and dietary shifts — from sugar and fat to ultra-processed food across decades.",
    },
    question: {
      vi: "Bệnh chuyển hóa và ung thư là lựa chọn cá nhân, hay còn là vấn đề của hệ thống thực phẩm rộng hơn?",
      en: "Are metabolic disease and cancer personal choices, or also a question of the broader food system?",
    },
    href: "/dinh-duong-thien-lanh#suc-khoe-chuyen-hoa",
    linkText: { vi: "Đọc cụm về chuyển hóa →", en: "Read the metabolic health cluster →" },
  },
];

// ─── Band 4 data: 6 seed questions ────────────────────────────────────────
const seeds: L[] = [
  { vi: "Sữa có thật sự cần thiết như nhiều người vẫn nghĩ?", en: "Is milk as essential as most people still believe?" },
  { vi: "Vì sao nỗi lo thiếu đạm luôn xuất hiện đầu tiên?", en: "Why does protein deficiency worry always surface first?" },
  { vi: "Đái tháo đường có chỉ là câu chuyện của đường?", en: "Is diabetes only a story about sugar?" },
  { vi: "Bữa ăn hằng ngày có thể tác động sức khỏe lâu dài ra sao?", en: "How can daily eating affect long-term health?" },
  { vi: "Khi nói về ung thư, vì sao người ta luôn quay lại bàn ăn?", en: "When talking about cancer, why does the conversation always return to the table?" },
  { vi: "Một bộ phim tài liệu có thể làm thay đổi góc nhìn về dinh dưỡng như thế nào?", en: "How can a nutrition documentary genuinely shift the way you see food?" },
];

// ─── Shared micro styles ───────────────────────────────────────────────────
const eyebrow = "text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-teal)]";

// ─── Page ──────────────────────────────────────────────────────────────────
export default function DinhDuongThienLanhPage() {
  const { locale, handleLocaleChange } = useAppLocale();
  const siteChrome = getSiteChrome(locale);
  const nav = siteChrome.navigationText;

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-strong)]">
      <SiteHeader
        brandName={nav.brand.name}
        brandShortName={nav.brand.shortName}
        links={siteChrome.headerLinks}
        cta={siteChrome.headerCta}
        locale={locale}
        onLocaleChange={handleLocaleChange}
        menuButtonLabel={nav.menuButton}
        navAriaLabel={nav.navAriaLabel}
        localeSwitchAriaLabel={nav.localeSwitchAriaLabel}
      />

      <main className="pb-28">
        <Container>
          {/* ────────────────────────────────────────────────────────────
              Content column — narrower for editorial reading register
          ──────────────────────────────────────────────────────────── */}
          <div className="mx-auto max-w-[860px] pt-12 lg:pt-16">

            {/* ══════════════════════════════════════════════════════════
                BAND 1 — HERO
                Clean text opening. No card box. Reading guide inline.
            ══════════════════════════════════════════════════════════ */}
            <section aria-label={locale === "vi" ? "Giới thiệu" : "Introduction"}>
              <p className={eyebrow}>
                {locale === "vi" ? "Hiểu đúng trước, thay đổi sau" : "Understand first, then change"}
              </p>

              <h1 className="mt-3 text-[clamp(2.1rem,4.2vw,3.2rem)] font-semibold leading-[1.15] text-[var(--color-text-strong)]">
                {locale === "vi" ? "Dinh dưỡng thiện lành" : "Wholesome Nutrition"}
              </h1>

              <p className="mt-5 max-w-[58ch] text-[1.03rem] leading-[1.75] text-[var(--color-text-muted)]">
                {locale === "vi"
                  ? "Dinh dưỡng không bắt đầu từ chế độ ăn mà từ cách hiểu. Đây là nơi đặt lại những điều tưởng đã biết — để nhìn rõ hơn trước khi chọn."
                  : "Nutrition doesn't begin with a diet — it begins with understanding. This is where you revisit what you thought you knew, so you can choose more clearly."}
              </p>

              <div className="mt-7">
                <Link
                  href="#theo-chu-de"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-2.5 text-[0.88rem] font-semibold text-[var(--color-text-strong)] transition-colors hover:bg-[var(--color-primary-strong)]"
                >
                  {locale === "vi" ? "Xem nội dung" : "Browse content"}
                </Link>
              </div>

              {/* Reading guide strip — 3 items, inline below CTA */}
              <div className="mt-10 border-t border-[var(--color-border)] pt-7 grid gap-6 sm:grid-cols-3">
                {([
                  {
                    heading: { vi: "Không kết luận tuyệt đối", en: "No absolute conclusions" },
                    body: { vi: "Mỗi chủ đề là không gian câu hỏi, không phải câu trả lời đóng.", en: "Each topic is a space for questions, not a closed answer." },
                  },
                  {
                    heading: { vi: "Bắt đầu từ điều gần đời sống", en: "Start close to daily life" },
                    body: { vi: "Chọn cụm gần bữa ăn của bạn nhất. Không cần đọc theo thứ tự.", en: "Pick the cluster closest to your meals. No required order." },
                  },
                  {
                    heading: { vi: "Một ý mở ra nhiều clip nhỏ", en: "One idea, many short clips" },
                    body: { vi: "Câu hỏi seed là hạt nhân nội dung — điểm khởi đầu, không phải đầy đủ.", en: "Seed questions are content nuclei — starting points, not finished pieces." },
                  },
                ] as { heading: L; body: L }[]).map((item, i) => (
                  <div key={i}>
                    <p className="text-[0.88rem] font-semibold text-[var(--color-text-strong)]">
                      {t(item.heading, locale)}
                    </p>
                    <p className="mt-1 text-[0.82rem] leading-relaxed text-[var(--color-text-muted)]">
                      {t(item.body, locale)}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* ══════════════════════════════════════════════════════════
                BAND 2 — 5 TOPIC CLUSTERS
                List-style, no box shells. Dividers only.
            ══════════════════════════════════════════════════════════ */}
            <section id="theo-chu-de" className="mt-20 lg:mt-24" aria-label={locale === "vi" ? "Chủ đề" : "Topics"}>
              <p className={eyebrow}>{locale === "vi" ? "Nội dung theo chủ đề" : "Topics"}</p>

              <ol className="mt-6 divide-y divide-[var(--color-border)]" role="list">
                {clusters.map((cluster) => (
                  <li key={cluster.id} id={cluster.id} className="py-7 group">
                    <div className="flex items-start justify-between gap-6">
                      <div className="min-w-0">
                        <h2 className="text-[1.07rem] font-semibold leading-[1.3] text-[var(--color-text-strong)]">
                          {t(cluster.title, locale)}
                        </h2>
                        <p className="mt-3 max-w-[60ch] text-[0.93rem] leading-[1.7] text-[var(--color-text-muted)]">
                          {t(cluster.summary, locale)}
                        </p>
                        <p className="mt-3 text-[0.86rem] italic text-[var(--color-navy)] opacity-90">
                          {t(cluster.prompt, locale)}
                        </p>
                      </div>
                      <Link
                        href={cluster.href}
                        className="mt-1 shrink-0 text-[0.82rem] font-semibold text-[var(--color-navy)] opacity-75 transition-opacity hover:opacity-100 whitespace-nowrap"
                        aria-label={`${locale === "vi" ? "Mở" : "Open"}: ${t(cluster.title, locale)}`}
                      >
                        {locale === "vi" ? "Mở →" : "Open →"}
                      </Link>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* ══════════════════════════════════════════════════════════
                BAND 3 — DOCUMENTARY LENSES
                One tinted section with 3 columns. No nested white boxes.
            ══════════════════════════════════════════════════════════ */}
            <section
              id="goc-nhin-phim-tai-lieu"
              className="mt-20 lg:mt-24 rounded-[18px] bg-[linear-gradient(145deg,rgba(191,221,226,0.18),rgba(230,175,192,0.09))] px-8 py-10 lg:px-12 lg:py-12"
              aria-label={locale === "vi" ? "Góc nhìn từ phim tài liệu" : "Documentary perspectives"}
            >
              <p className={eyebrow}>{locale === "vi" ? "Phim tài liệu" : "Documentary"}</p>
              <h2 className="mt-2 text-[1.35rem] font-semibold leading-[1.25] text-[var(--color-text-strong)] lg:text-[1.5rem]">
                {locale === "vi" ? "Góc nhìn mở ra từ phim tài liệu" : "Perspectives Opened by Documentary Film"}
              </h2>
              <p className="mt-3 max-w-[58ch] text-[0.9rem] leading-relaxed text-[var(--color-text-muted)]">
                {locale === "vi"
                  ? "Phim có thể làm thay đổi cách nhìn — và cũng có thể đơn giản hóa thái quá. Dùng như điểm khởi đầu để đặt câu hỏi, không phải câu trả lời cuối cùng."
                  : "Films can shift your perspective — and can also oversimplify. Use them as starting points for questions, not final answers."}
              </p>

              {/* 3-column layout — dividers instead of nested cards */}
              <div className="mt-9 grid gap-0 divide-y divide-[rgba(191,221,226,0.4)] lg:grid-cols-3 lg:divide-y-0 lg:divide-x">
                {docLenses.map((lens, i) => (
                  <div
                    key={lens.id}
                    className={`py-7 lg:py-0 ${i === 0 ? "lg:pr-8" : i === 1 ? "lg:px-8" : "lg:pl-8"}`}
                  >
                    <p className="text-[0.84rem] font-semibold text-[var(--color-text-strong)]">
                      {t(lens.label, locale)}
                    </p>

                    <div className="mt-4">
                      <p className="text-[0.67rem] font-semibold uppercase tracking-[0.11em] text-[var(--color-teal)]">
                        {locale === "vi" ? "Phim đang kể gì" : "What the film says"}
                      </p>
                      <p className="mt-1.5 text-[0.88rem] leading-[1.65] text-[var(--color-text-strong)]">
                        {t(lens.story, locale)}
                      </p>
                    </div>

                    <div className="mt-4">
                      <p className="text-[0.67rem] font-semibold uppercase tracking-[0.11em] text-[var(--color-text-muted)] opacity-70">
                        {locale === "vi" ? "Câu hỏi phim đặt lại" : "The question the film raises"}
                      </p>
                      <p className="mt-1.5 text-[0.84rem] italic leading-[1.65] text-[var(--color-text-muted)]">
                        {t(lens.question, locale)}
                      </p>
                    </div>

                    <Link
                      href={lens.href}
                      className="mt-5 inline-block text-[0.82rem] font-semibold text-[var(--color-navy)] opacity-80 transition-opacity hover:opacity-100"
                    >
                      {t(lens.linkText, locale)}
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            {/* ══════════════════════════════════════════════════════════
                BAND 4 — 6 SEED QUESTIONS + CLOSING CTA
                2-column numbered list. Text-only. Low, even cards.
            ══════════════════════════════════════════════════════════ */}
            <section className="mt-20 lg:mt-24" aria-label={locale === "vi" ? "Câu hỏi nội dung" : "Content seed questions"}>
              <p className={eyebrow}>{locale === "vi" ? "Từ câu hỏi nhỏ đến clip ngắn" : "Small questions, short clips"}</p>
              <h2 className="mt-2 text-[1.35rem] font-semibold leading-[1.25] text-[var(--color-text-strong)] lg:text-[1.5rem]">
                {locale === "vi"
                  ? "Từ một câu hỏi nhỏ để mở thành clip ngắn"
                  : "From a small question into a short clip"}
              </h2>

              {/* 2-col numbered list */}
              <ol className="mt-8 grid gap-x-12 sm:grid-cols-2" role="list">
                {seeds.map((q, i) => (
                  <li
                    key={i}
                    className={`flex gap-4 border-b border-[var(--color-border)] py-5 ${
                      /* Remove bottom border from the last item in each column */
                      i === seeds.length - 1 || i === seeds.length - 2
                        ? "sm:border-b-0"
                        : ""
                    } ${i === seeds.length - 1 ? "border-b-0" : ""}`}
                  >
                    <span className="mt-0.5 shrink-0 font-mono text-[0.95rem] font-semibold leading-none text-[rgba(191,221,226,0.85)] tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[0.93rem] font-medium leading-[1.55] text-[var(--color-text-strong)]">
                      {t(q, locale)}
                    </p>
                  </li>
                ))}
              </ol>

              {/* Closing — 2 soft text links only */}
              <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[var(--color-border)] pt-7">
                <Link
                  href="/"
                  className="text-[0.86rem] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-navy)]"
                >
                  ← {locale === "vi" ? "Trang chủ" : "Home"}
                </Link>
                <Link
                  href="/y-hoc-thien-lanh"
                  className="text-[0.86rem] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-navy)]"
                >
                  {locale === "vi" ? "Y học thiện lành →" : "Wholesome Medicine →"}
                </Link>
              </div>
            </section>

          </div>
        </Container>
      </main>

      <SiteFooter
        brandName={nav.brand.name}
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
