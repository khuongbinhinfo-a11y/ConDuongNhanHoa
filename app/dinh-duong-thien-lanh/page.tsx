"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Container } from "@/components/ui/Container";
import { useAppLocale } from "@/lib/useAppLocale";
import { getSiteChrome } from "@/lib/siteChrome";
import type { AppLocale } from "@/lib/locale";
import { imageManifest } from "@/data/imageManifest.generated";

type L = Record<AppLocale, string>;
const t = (text: L, locale: AppLocale) => text[locale];

/* Direct image lookup — returns the path only if the exact slot exists in the
   generated manifest (no fallback to hero). */
function img(slotId: string): string | null {
  return imageManifest[slotId] ?? null;
}

// ─── Topic cluster data ────────────────────────────────────────────────────
const clusters: {
  id: string;
  title: L;
  summary: L;
  prompt: L;
  clipSeeds: L[];
  href: string;
  /** Manifest slot id — may differ from topic id */
  imageSlot: string;
}[] = [
  {
    id: "kien-thuc-nen-tang",
    imageSlot: "dinh-duong.topic.kien-thuc-nen-tang",
    title: { vi: "Kiến thức nền tảng", en: "Foundational Knowledge" },
    summary: {
      vi: "Có những nguyên tắc dinh dưỡng cần hiểu trước khi theo bất kỳ cách ăn nào. Không phải để học thuộc, mà để tự nhận ra điều phù hợp.",
      en: "Some nutrition principles are worth understanding before following any eating approach — not to memorize, but to recognize what fits.",
    },
    prompt: {
      vi: "Bạn đang chọn cách ăn vì ai nói, hay vì mình thực sự hiểu?",
      en: "Are you eating a certain way because someone said to, or because you actually understand why?",
    },
    clipSeeds: [
      { vi: "Calo-rí là gì và tại sao không nên đếm một cách máy móc", en: "What are calories and why rigid counting backfires" },
      { vi: "Chất xơ, vi chất, khoáng chất — ba thứ thường bị bỏ quên", en: "Fiber, micronutrients, minerals — three things often overlooked" },
      { vi: "Dinh dưỡng nền tảng khác gì với chế độ ăn kiêng?", en: "How does foundational nutrition differ from dieting?" },
    ],
    href: "/dinh-duong-thien-lanh#kien-thuc-nen-tang",
  },
  {
    id: "sua-va-nhung-dieu-thuong-tin",
    imageSlot: "dinh-duong.topic.sua-va-nhung-dieu-thuong-tin",
    title: { vi: "Những điều thường được tin về sữa", en: "Common Beliefs About Milk" },
    summary: {
      vi: "Sữa là thực phẩm được bảo vệ bởi nhiều lớp thông tin. Đọc để hiểu nguồn gốc của niềm tin đó trước khi giữ hay bỏ.",
      en: "Milk is a food protected by many layers of messaging. Read to understand where those beliefs come from before deciding what to keep.",
    },
    prompt: {
      vi: "Sữa có thật sự cần thiết như nhiều người vẫn nghĩ?",
      en: "Is milk as essential as many people believe?",
    },
    clipSeeds: [
      { vi: "Canxi từ sữa hay canxi từ thực vật — đâu mới đủ?", en: "Calcium from dairy vs. plants — which is enough?" },
      { vi: "Ngành sữa và câu chuyện truyền thông kéo dài nhiều thập kỷ", en: "The dairy industry and decades of messaging" },
      { vi: "Trẻ em có thực sự cần sữa bò để phát triển?", en: "Do children actually need cow's milk to grow?" },
    ],
    href: "/dinh-duong-thien-lanh#sua-va-nhung-dieu-thuong-tin",
  },
  {
    id: "chat-dam-hang-ngay",
    imageSlot: "dinh-duong.topic.chat-dam-hang-ngay",
    title: { vi: "Chất đạm: hiểu sao cho đúng", en: "Protein: Understanding It Right" },
    summary: {
      vi: "Nỗi lo thiếu đạm xuất hiện ngay khi nhắc đến ăn ít thịt. Nhưng cơ thể thực sự cần bao nhiêu, và từ đâu?",
      en: "Worry about protein deficiency surfaces the moment eating less meat is mentioned. But how much does the body actually need, and from where?",
    },
    prompt: {
      vi: "Vì sao nỗi lo thiếu đạm lại dễ xuất hiện đến vậy?",
      en: "Why does protein deficiency worry appear so easily?",
    },
    clipSeeds: [
      { vi: "Lượng đạm khuyến nghị vs. lượng đạm thực tế người Việt ăn mỗi ngày", en: "Recommended protein vs. what Vietnamese actually eat daily" },
      { vi: "Đạm thực vật có đủ axit amin thiết yếu không?", en: "Does plant protein provide all essential amino acids?" },
      { vi: "Vận động viên ăn thuần thực vật — khoa học nói gì?", en: "Plant-based athletes — what does the science say?" },
    ],
    href: "/dinh-duong-thien-lanh#chat-dam-hang-ngay",
  },
  {
    id: "suc-khoe-chuyen-hoa",
    imageSlot: "dinh-duong.topic.dai-thao-duong-beo-phi-chuyen-hoa",
    title: { vi: "Sức khỏe chuyển hóa và bữa ăn hằng ngày", en: "Metabolic Health and Daily Eating" },
    summary: {
      vi: "Đái tháo đường, béo phì, và rối loạn chuyển hóa không chỉ là câu chuyện của đường hay mỡ. Bữa ăn hằng ngày có liên kết chặt hơn nhiều người tưởng.",
      en: "Diabetes, obesity, and metabolic disorders aren't just about sugar or fat. Daily eating is connected more tightly than most people realize.",
    },
    prompt: {
      vi: "Đái tháo đường có chỉ là câu chuyện của đường?",
      en: "Is diabetes only a story about sugar?",
    },
    clipSeeds: [
      { vi: "Mỡ nội tạng — đo sao và nguy hiểm đến đâu?", en: "Visceral fat — how is it measured and how dangerous is it?" },
      { vi: "Kháng insulin là gì và bắt đầu từ lúc nào?", en: "What is insulin resistance and when does it start?" },
      { vi: "Bữa ăn trắng (cơm, bánh mì, phở) tác động gì đến đường huyết?", en: "How do 'white meals' (rice, bread, pho) affect blood sugar?" },
    ],
    href: "/dinh-duong-thien-lanh#suc-khoe-chuyen-hoa",
  },
  {
    id: "ung-thu-va-bua-an",
    imageSlot: "dinh-duong.topic.ung-thu-va-goc-nhin-tu-bua-an",
    title: { vi: "Ung thư và những câu hỏi từ bàn ăn", en: "Cancer and the Questions at the Table" },
    summary: {
      vi: "Không phải bữa ăn nào cũng gây ung thư. Nhưng có những thói quen ăn uống hằng ngày tích lũy nguy cơ lâu dài mà ít ai để ý.",
      en: "Not every meal causes cancer. But some daily eating habits quietly accumulate long-term risk in ways most people don't notice.",
    },
    prompt: {
      vi: "Bữa ăn hằng ngày có thể ảnh hưởng đến sức khỏe lâu dài ra sao?",
      en: "How might daily eating affect long-term health?",
    },
    clipSeeds: [
      { vi: "Thịt đỏ và thịt chế biến — phân loại của WHO nói gì?", en: "Red and processed meat — what does the WHO classification say?" },
      { vi: "Ung thư đại trực tràng và thói quen ăn uống tại Việt Nam", en: "Colorectal cancer and eating habits in Vietnam" },
      { vi: "Chất chống oxy hóa từ thực phẩm — thực hư ra sao?", en: "Food antioxidants — truth and myth" },
    ],
    href: "/dinh-duong-thien-lanh#ung-thu-va-bua-an",
  },
];

// ─── Documentary editorial cards ───────────────────────────────────────────
const docCards: {
  id: string;
  label: L;
  story: L;
  question: L;
  clipSeeds: L[];
  href: string;
  linkText: L;
}[] = [
  {
    id: "sua",
    label: { vi: "Sữa", en: "Milk" },
    story: {
      vi: "Phim kể về cách ngành sữa định hình thông điệp rằng sữa là thiết yếu — qua giáo dục, quảng cáo và hướng dẫn dinh dưỡng quốc gia qua nhiều thập kỷ.",
      en: "Films trace how the dairy industry shaped the message that milk is essential — through education, advertising, and national nutrition guidelines over decades.",
    },
    question: {
      vi: "Liệu khuyến nghị về sữa có thực sự xuất phát từ bằng chứng khoa học độc lập, hay phần nào bị ảnh hưởng bởi lợi ích ngành?",
      en: "Do dairy recommendations truly reflect independent science, or are they partly shaped by industry interests?",
    },
    clipSeeds: [
      { vi: "Sữa trong trường học: chương trình dinh dưỡng hay chiến dịch thương mại?", en: "Milk in schools: nutrition program or commercial campaign?" },
      { vi: "Loãng xương và sữa — mối liên hệ có thật sự đơn giản?", en: "Osteoporosis and milk — is the connection really that simple?" },
      { vi: "Các quốc gia bỏ khuyến nghị sữa — vì sao?", en: "Countries dropping dairy guidelines — why?" },
    ],
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
    clipSeeds: [
      { vi: "0.8g/kg cân nặng — con số có thực sự chính xác?", en: "0.8g/kg body weight — is this really accurate?" },
      { vi: "Kết hợp đạm thực vật — có cần phải 'bổ sung' trong cùng bữa?", en: "Combining plant proteins — must they be in the same meal?" },
      { vi: "Ngành thịt và protein: thông điệp marketing hay khoa học?", en: "The meat industry and protein: marketing message or science?" },
    ],
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
    clipSeeds: [
      { vi: "Thực phẩm siêu chế biến (ultra-processed) — vì sao ngày càng phổ biến?", en: "Ultra-processed food — why is it so widespread?" },
      { vi: "Đường ẩn trong thực phẩm hằng ngày: nước mắm, bánh mì, sữa đặc", en: "Hidden sugar in everyday food: fish sauce, bread, condensed milk" },
      { vi: "Chỉ số đường huyết cao — có liên quan đến nguy cơ ung thư?", en: "High glycemic index — is there a cancer risk connection?" },
    ],
    href: "/dinh-duong-thien-lanh#suc-khoe-chuyen-hoa",
    linkText: { vi: "Đọc cụm về chuyển hóa →", en: "Read the metabolic health cluster →" },
  },
];

// ─── 3 follow-up questions ─────────────────────────────────────────────────
const followUp: L[] = [
  { vi: "Sữa có thật sự cần thiết như nhiều người vẫn nghĩ?", en: "Is milk as essential as most people still believe?" },
  { vi: "Bữa ăn hằng ngày có thể tác động sức khỏe lâu dài ra sao?", en: "How can daily eating affect long-term health?" },
  { vi: "Một bộ phim tài liệu có thể làm thay đổi góc nhìn về dinh dưỡng như thế nào?", en: "How can a nutrition documentary genuinely shift the way you see food?" },
];

const eyebrow = "text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-teal)]";

// ─── Page ──────────────────────────────────────────────────────────────────
export default function DinhDuongThienLanhPage() {
  const { locale, handleLocaleChange } = useAppLocale();
  const siteChrome = getSiteChrome(locale);
  const nav = siteChrome.navigationText;
  const heroSrc = img("dinh-duong.hero");

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

      <main className="pb-24">

        {/* ══════════════════════════════════════════════════════════
            HERO — with image
        ══════════════════════════════════════════════════════════ */}
        {heroSrc && (
          <div className="relative w-full aspect-[21/8] max-h-[360px] overflow-hidden">
            <Image
              src={heroSrc}
              alt={locale === "vi" ? "Dinh dưỡng thiện lành" : "Wholesome Nutrition"}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent" />
          </div>
        )}

        <Container>
          <div className="mx-auto max-w-[980px]">

            {/* Hero text */}
            <section className={heroSrc ? "-mt-16 relative z-10" : "pt-12 lg:pt-16"}>
              <p className={eyebrow}>
                {locale === "vi" ? "Hiểu đúng trước, thay đổi sau" : "Understand first, then change"}
              </p>
              <h1 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.15] text-[var(--color-text-strong)]">
                {locale === "vi" ? "Dinh dưỡng thiện lành" : "Wholesome Nutrition"}
              </h1>
              <p className="mt-4 max-w-[60ch] text-[1rem] leading-[1.75] text-[var(--color-text-muted)]">
                {locale === "vi"
                  ? "Dinh dưỡng không bắt đầu từ chế độ ăn mà từ cách hiểu. Đây là nơi đặt lại những điều tưởng đã biết — để nhìn rõ hơn trước khi chọn."
                  : "Nutrition doesn't begin with a diet — it begins with understanding. This is where you revisit what you thought you knew, so you can choose more clearly."}
              </p>
              <div className="mt-6">
                <Link
                  href="#theo-chu-de"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-2.5 text-[0.88rem] font-semibold text-[var(--color-text-strong)] transition-colors hover:bg-[var(--color-primary-strong)]"
                >
                  {locale === "vi" ? "Xem nội dung" : "Browse content"}
                </Link>
              </div>
            </section>

            {/* ══════════════════════════════════════════════════════════
                5 TOPIC CARDS — with images + clip seeds
            ══════════════════════════════════════════════════════════ */}
            <section id="theo-chu-de" className="mt-16 lg:mt-20">
              <p className={eyebrow}>{locale === "vi" ? "Nội dung theo chủ đề" : "Topics"}</p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {clusters.map((cluster) => {
                  const topicImg = img(cluster.imageSlot);
                  return (
                    <article
                      key={cluster.id}
                      id={cluster.id}
                      className="flex flex-col overflow-hidden rounded-[16px] border border-[var(--color-border)] bg-white"
                    >
                      {/* Image — only if exact slot has a real file */}
                      {topicImg && (
                        <div className="relative aspect-[16/9] w-full shrink-0">
                          <Image
                            src={topicImg}
                            alt={t(cluster.title, locale)}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover"
                          />
                        </div>
                      )}

                      <div className="flex flex-1 flex-col p-5">
                        <h2 className="text-[1.05rem] font-semibold leading-[1.3] text-[var(--color-text-strong)]">
                          {t(cluster.title, locale)}
                        </h2>

                        <p className="mt-3 text-[0.9rem] leading-[1.7] text-[var(--color-text-muted)]">
                          {t(cluster.summary, locale)}
                        </p>

                        {/* Clip seeds */}
                        <ul className="mt-4 space-y-1.5">
                          {cluster.clipSeeds.map((seed, i) => (
                            <li key={i} className="flex gap-2 text-[0.82rem] leading-[1.5] text-[var(--color-text-muted)]">
                              <span className="mt-[2px] shrink-0 text-[var(--color-teal)]" aria-hidden="true">·</span>
                              {t(seed, locale)}
                            </li>
                          ))}
                        </ul>

                        {/* Prompt question */}
                        <p className="mt-4 text-[0.84rem] italic text-[var(--color-navy)] opacity-75">
                          {t(cluster.prompt, locale)}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            {/* ══════════════════════════════════════════════════════════
                DOCUMENTARY — 3 editorial cards with clip seeds
            ══════════════════════════════════════════════════════════ */}
            <section id="goc-nhin-phim-tai-lieu" className="mt-16 lg:mt-20">
              <p className={eyebrow}>{locale === "vi" ? "Phim tài liệu" : "Documentary"}</p>
              <h2 className="mt-2 text-[1.3rem] font-semibold leading-[1.25] text-[var(--color-text-strong)] lg:text-[1.45rem]">
                {locale === "vi" ? "Góc nhìn mở ra từ phim tài liệu" : "Perspectives Opened by Documentary Film"}
              </h2>
              <p className="mt-3 max-w-[60ch] text-[0.9rem] leading-relaxed text-[var(--color-text-muted)]">
                {locale === "vi"
                  ? "Phim có thể làm thay đổi cách nhìn — và cũng có thể đơn giản hóa thái quá. Dùng như điểm khởi đầu để đặt câu hỏi, không phải câu trả lời cuối cùng."
                  : "Films can shift your perspective — and can also oversimplify. Use them as starting points for questions, not final answers."}
              </p>

              <div className="mt-8 grid gap-5 lg:grid-cols-3">
                {docCards.map((card) => (
                  <div
                    key={card.id}
                    className="flex flex-col rounded-[16px] border border-[var(--color-border)] bg-[linear-gradient(160deg,rgba(191,221,226,0.12),rgba(255,255,255,0.6))] p-6"
                  >
                    <p className="text-[0.92rem] font-semibold text-[var(--color-text-strong)]">
                      {t(card.label, locale)}
                    </p>

                    {/* What the film says */}
                    <div className="mt-4">
                      <p className="text-[0.64rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-teal)]">
                        {locale === "vi" ? "Phim đang kể gì" : "What the film says"}
                      </p>
                      <p className="mt-1.5 text-[0.88rem] leading-[1.7] text-[var(--color-text-strong)]">
                        {t(card.story, locale)}
                      </p>
                    </div>

                    {/* Question it raises */}
                    <div className="mt-4">
                      <p className="text-[0.64rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)] opacity-60">
                        {locale === "vi" ? "Câu hỏi phim đặt lại" : "The question it raises"}
                      </p>
                      <p className="mt-1.5 text-[0.85rem] italic leading-[1.65] text-[var(--color-text-muted)]">
                        {t(card.question, locale)}
                      </p>
                    </div>

                    {/* Clip seeds */}
                    <div className="mt-4">
                      <p className="text-[0.64rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-sage)]">
                        {locale === "vi" ? "Có thể phát triển thành" : "Could become"}
                      </p>
                      <ul className="mt-1.5 space-y-1">
                        {card.clipSeeds.map((seed, i) => (
                          <li key={i} className="flex gap-2 text-[0.8rem] leading-[1.5] text-[var(--color-text-muted)]">
                            <span className="mt-[2px] shrink-0 text-[var(--color-teal)]" aria-hidden="true">·</span>
                            {t(seed, locale)}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={card.href}
                      className="mt-auto pt-5 text-[0.8rem] font-medium text-[var(--color-navy)] opacity-65 transition-opacity hover:opacity-100"
                    >
                      {t(card.linkText, locale)}
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            {/* ══════════════════════════════════════════════════════════
                FOLLOW-UP — 3 reflective questions
            ══════════════════════════════════════════════════════════ */}
            <section className="mt-16 lg:mt-20 border-t border-[var(--color-border)] pt-10">
              <p className={eyebrow}>{locale === "vi" ? "Câu hỏi để suy nghĩ thêm" : "Questions to sit with"}</p>
              <ul className="mt-5 space-y-4" role="list">
                {followUp.map((q, i) => (
                  <li key={i} className="text-[0.96rem] font-medium leading-[1.6] text-[var(--color-text-strong)]">
                    {t(q, locale)}
                  </li>
                ))}
              </ul>

              {/* Closing — single home link */}
              <div className="mt-10">
                <Link
                  href="/"
                  className="text-[0.86rem] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-navy)]"
                >
                  ← {locale === "vi" ? "Trang chủ" : "Home"}
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
