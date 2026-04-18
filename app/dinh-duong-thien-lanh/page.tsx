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

function img(slotId: string): string | null {
  return imageManifest[slotId] ?? null;
}

/* ═══════════════════════════════════════════════════════════════════════════
   DATA — Band 2: 5 topic clusters
   ═══════════════════════════════════════════════════════════════════════════ */
const clusters: {
  id: string;
  title: L;
  summary: L;
  points: L[];
  question: L;
  imageSlot: string;
}[] = [
  {
    id: "kien-thuc-nen-tang",
    imageSlot: "dinh-duong.topic.kien-thuc-nen-tang",
    title: { vi: "Kiến thức nền tảng", en: "Foundational Knowledge" },
    summary: {
      vi: "Có những nguyên tắc dinh dưỡng cần hiểu trước khi theo bất kỳ cách ăn nào. Không phải để học thuộc, mà để nhận ra điều gì thật sự phù hợp với cơ thể và đời sống của mình.",
      en: "Some nutrition principles are worth understanding before following any eating approach — not to memorize, but to recognize what truly fits your body and life.",
    },
    points: [
      { vi: "Vì sao con người rất dễ tin một lời khuyên dinh dưỡng nghe quen?", en: "Why do people easily trust a nutrition tip that sounds familiar?" },
      { vi: "Một thói quen ăn uống được lặp lại lâu ngày mạnh hơn kiến thức ra sao?", en: "How does a long-repeated eating habit become stronger than knowledge?" },
      { vi: "Khi nào nên dừng lại để hỏi: mình tin điều này từ đâu?", en: "When should you stop and ask: where did this belief come from?" },
    ],
    question: {
      vi: "Bạn đang chọn cách ăn vì ai nói, hay vì mình thực sự hiểu?",
      en: "Are you eating a certain way because someone said so, or because you actually understand why?",
    },
  },
  {
    id: "sua-va-nhung-dieu-thuong-tin",
    imageSlot: "dinh-duong.topic.sua-va-nhung-dieu-thuong-tin",
    title: { vi: "Những điều thường được tin về sữa", en: "Common Beliefs About Milk" },
    summary: {
      vi: "Sữa là một thực phẩm đi cùng tuổi thơ, quảng bá và nhiều lớp niềm tin xã hội. Đọc để hiểu niềm tin đó hình thành ra sao trước khi giữ hay bỏ.",
      en: "Milk is a food that comes with childhood, marketing, and layers of social belief. Read to understand how those beliefs formed before deciding what to keep.",
    },
    points: [
      { vi: "Vì sao sữa luôn được gắn với hình ảnh thiết yếu?", en: "Why is milk always associated with the image of necessity?" },
      { vi: "Một niềm tin tập thể về sữa được nuôi lớn bằng cách nào?", en: "How was a collective belief about milk nurtured?" },
      { vi: "Điều gì khiến người ta thấy bất an nếu bỏ sữa?", en: "What makes people uneasy about giving up milk?" },
    ],
    question: {
      vi: "Sữa có thật sự cần thiết như nhiều người vẫn nghĩ?",
      en: "Is milk truly as essential as most people believe?",
    },
  },
  {
    id: "chat-dam-hang-ngay",
    imageSlot: "dinh-duong.topic.chat-dam-hang-ngay",
    title: { vi: "Chất đạm: hiểu sao cho đúng", en: "Protein: Understanding It Right" },
    summary: {
      vi: "Nỗi lo thiếu đạm thường xuất hiện rất sớm khi nói đến thay đổi cách ăn. Nhưng điều cơ thể thực sự cần và điều ta đang sợ đôi khi không phải là một.",
      en: "Protein deficiency worry often surfaces early when discussing dietary changes. But what the body truly needs and what we fear may not be the same thing.",
    },
    points: [
      { vi: "Vì sao câu hỏi thiếu đạm luôn xuất hiện đầu tiên?", en: "Why does the protein deficiency question always come first?" },
      { vi: "Nhu cầu đạm hằng ngày đang được hiểu theo cách nào?", en: "How is daily protein need currently understood?" },
      { vi: "Nỗi lo thiếu đạm đến từ cơ thể hay từ thói quen suy nghĩ?", en: "Does the protein worry come from the body or from thinking habits?" },
    ],
    question: {
      vi: "Vì sao nỗi lo thiếu đạm lại dễ xuất hiện đến vậy?",
      en: "Why does the protein deficiency worry appear so easily?",
    },
  },
  {
    id: "suc-khoe-chuyen-hoa",
    imageSlot: "dinh-duong.topic.dai-thao-duong-beo-phi-chuyen-hoa",
    title: { vi: "Sức khỏe chuyển hóa và bữa ăn hằng ngày", en: "Metabolic Health and Daily Eating" },
    summary: {
      vi: "Đái tháo đường, béo phì và rối loạn chuyển hóa không chỉ là câu chuyện của đường hay mỡ. Bữa ăn hằng ngày có liên kết với sức khỏe lâu dài sâu hơn nhiều người tưởng.",
      en: "Diabetes, obesity, and metabolic disorders aren't just about sugar or fat. Daily eating is connected to long-term health more deeply than most people realize.",
    },
    points: [
      { vi: "Đái tháo đường có chỉ là câu chuyện của đường?", en: "Is diabetes only a story about sugar?" },
      { vi: "Vì sao nhiều người chỉ nhìn vào món ăn mà quên cả lối sống?", en: "Why do many focus on the food but forget the lifestyle?" },
      { vi: "Điều gì tích lũy âm thầm qua nhiều năm trước khi cơ thể lên tiếng?", en: "What accumulates silently for years before the body speaks up?" },
    ],
    question: {
      vi: "Bữa ăn hằng ngày liên quan đến chuyển hóa sâu đến đâu?",
      en: "How deeply is daily eating connected to metabolic health?",
    },
  },
  {
    id: "ung-thu-va-bua-an",
    imageSlot: "dinh-duong.topic.ung-thu-va-goc-nhin-tu-bua-an",
    title: { vi: "Ung thư và những câu hỏi từ bàn ăn", en: "Cancer and the Questions at the Table" },
    summary: {
      vi: "Không phải bữa ăn nào cũng gây ung thư. Nhưng có những thói quen ăn uống hằng ngày tích lũy nguy cơ lâu dài mà rất ít người để ý từ sớm.",
      en: "Not every meal causes cancer. But some daily eating habits quietly accumulate long-term risk that very few notice early.",
    },
    points: [
      { vi: "Vì sao con người luôn muốn tìm một thủ phạm duy nhất cho bệnh nặng?", en: "Why do people always want to find a single culprit for serious illness?" },
      { vi: "Một thói quen nhỏ lặp lại lâu ngày có thể ảnh hưởng đến đâu?", en: "How far can a small habit repeated over years really reach?" },
      { vi: "Điều gì đang bị nói quá nhanh khi gắn thực phẩm với bệnh tật?", en: "What's being said too quickly when linking food to disease?" },
    ],
    question: {
      vi: "Bữa ăn hằng ngày có thể ảnh hưởng đến sức khỏe lâu dài ra sao?",
      en: "How can daily eating affect long-term health?",
    },
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   DATA — Band 3: Documentary editorial cards
   ═══════════════════════════════════════════════════════════════════════════ */
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
      vi: "Phim đặt lại câu chuyện về sữa như một sản phẩm được nâng đỡ bởi giáo dục, quảng bá và các khuyến nghị dinh dưỡng lặp đi lặp lại suốt nhiều năm.",
      en: "Films reframe milk as a product upheld by education, advertising, and nutrition recommendations repeated for years.",
    },
    question: {
      vi: "Liệu niềm tin về sữa có hoàn toàn đến từ bằng chứng độc lập, hay còn chịu ảnh hưởng của lợi ích ngành?",
      en: "Does the belief in milk come entirely from independent evidence, or is it also shaped by industry interests?",
    },
    clipSeeds: [
      { vi: "Sữa đi từ thực phẩm thành niềm tin quốc dân như thế nào?", en: "How did milk go from food to national belief?" },
      { vi: "Vì sao quảng bá thời thơ ấu có thể theo ta đến tuổi trưởng thành?", en: "Why can childhood advertising follow us into adulthood?" },
      { vi: "Khi nào một khuyến nghị dinh dưỡng trở thành điều không ai dám hỏi lại?", en: "When does a nutrition recommendation become something no one dares question?" },
    ],
    href: "/dinh-duong-thien-lanh#sua-va-nhung-dieu-thuong-tin",
    linkText: { vi: "Mở cụm về sữa", en: "Open the milk cluster" },
  },
  {
    id: "chat-dam",
    label: { vi: "Chất đạm", en: "Protein" },
    story: {
      vi: "Phim đi thẳng vào nỗi lo thiếu đạm khi giảm thịt, rồi dùng thực tế để đặt lại câu hỏi: điều cơ thể cần có đang bị hiểu rộng hơn mức cần thiết hay không?",
      en: "Films go straight to the protein deficiency fear when reducing meat, then use real-world evidence to question whether the body's needs are being overstated.",
    },
    question: {
      vi: "Cơ thể thực sự cần bao nhiêu đạm, và nguồn thực vật có đủ đáp ứng không?",
      en: "How much protein does the body actually need, and can plant sources truly meet that?",
    },
    clipSeeds: [
      { vi: "Vì sao thiếu đạm luôn là nỗi sợ đầu tiên?", en: "Why is protein deficiency always the first fear?" },
      { vi: "Nỗi sợ này được nuôi bởi thói quen hay khoa học?", en: "Is this fear nurtured by habit or science?" },
      { vi: "Điều gì khiến một người khó yên tâm khi nghe về cách ăn khác số đông?", en: "What makes people uneasy about eating differently from the majority?" },
    ],
    href: "/dinh-duong-thien-lanh#chat-dam-hang-ngay",
    linkText: { vi: "Mở cụm về chất đạm", en: "Open the protein cluster" },
  },
  {
    id: "chuyen-hoa",
    label: { vi: "Chuyển hóa · Béo phì · Ung thư", en: "Metabolism · Obesity · Cancer" },
    story: {
      vi: "Phim nối bệnh mãn tính với cách con người ăn, mua, tin và sống trong một hệ thực phẩm lớn hơn từng bữa ăn riêng lẻ.",
      en: "Films connect chronic disease with how people eat, buy, believe, and live within a food system larger than any single meal.",
    },
    question: {
      vi: "Bệnh chuyển hóa và ung thư là câu chuyện lựa chọn cá nhân, hay còn là hệ quả của một môi trường thực phẩm đã bị định hình từ trước?",
      en: "Are metabolic disease and cancer stories of personal choice, or also consequences of a pre-shaped food environment?",
    },
    clipSeeds: [
      { vi: "Đái tháo đường có chỉ là câu chuyện của đường?", en: "Is diabetes only a story about sugar?" },
      { vi: "Vì sao béo phì thường bị nhìn như lỗi cá nhân?", en: "Why is obesity often seen as a personal failure?" },
      { vi: "Khi nói đến ung thư, vì sao người ta luôn quay lại bàn ăn?", en: "When talking about cancer, why do people always return to the table?" },
    ],
    href: "/dinh-duong-thien-lanh#suc-khoe-chuyen-hoa",
    linkText: { vi: "Mở cụm về chuyển hóa", en: "Open the metabolic health cluster" },
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   DATA — Band 4: 6 editorial seed cards
   ═══════════════════════════════════════════════════════════════════════════ */
const seedCards: {
  title: L;
  lead: L;
  clips: L[];
}[] = [
  {
    title: { vi: "Sữa có thật sự cần thiết như nhiều người vẫn nghĩ?", en: "Is milk truly as essential as most people believe?" },
    lead: {
      vi: "Khi một thực phẩm đi cùng tuổi thơ và được nhắc lại suốt nhiều năm, con người rất khó tách nhu cầu thật khỏi niềm tin được tạo dựng.",
      en: "When a food accompanies childhood and is repeated for years, it becomes hard to separate real need from constructed belief.",
    },
    clips: [
      { vi: "Sữa là nhu cầu hay thói quen văn hóa?", en: "Is milk a need or a cultural habit?" },
      { vi: "Vì sao bỏ sữa lại làm nhiều người bất an?", en: "Why does giving up milk make so many people uneasy?" },
      { vi: "Một lời khuyên quen thuộc có thể sai ở đâu?", en: "Where can a familiar piece of advice go wrong?" },
    ],
  },
  {
    title: { vi: "Vì sao nỗi lo thiếu đạm luôn xuất hiện đầu tiên?", en: "Why does protein deficiency worry always appear first?" },
    lead: {
      vi: "Hầu như mọi cuộc trò chuyện về thay đổi cách ăn đều quay lại đúng một nỗi sợ: thiếu đạm. Nhưng nỗi sợ đó đến từ đâu?",
      en: "Nearly every conversation about changing eating habits returns to one fear: protein deficiency. But where does that fear come from?",
    },
    clips: [
      { vi: "Nỗi lo này xuất hiện từ kiến thức hay thói quen?", en: "Does this worry come from knowledge or habit?" },
      { vi: "Cơ thể cần đạm theo cách nào?", en: "How does the body actually need protein?" },
      { vi: "Vì sao người ta yên tâm với điều quen hơn điều đúng?", en: "Why do people feel safer with the familiar than the correct?" },
    ],
  },
  {
    title: { vi: "Đái tháo đường có chỉ là câu chuyện của đường?", en: "Is diabetes only a story about sugar?" },
    lead: {
      vi: "Nhiều người nhìn bệnh chuyển hóa qua một thủ phạm duy nhất. Nhưng thực tế thường rộng hơn một món ăn hoặc một chất riêng lẻ.",
      en: "Many view metabolic disease through a single culprit. But reality is often wider than one food or one substance.",
    },
    clips: [
      { vi: "Vì sao người ta thích một nguyên nhân đơn giản?", en: "Why do people prefer a simple cause?" },
      { vi: "Bữa ăn và lối sống liên kết với nhau thế nào?", en: "How are meals and lifestyle connected?" },
      { vi: "Điều gì tích lũy âm thầm trước khi xét nghiệm lên tiếng?", en: "What accumulates silently before test results speak up?" },
    ],
  },
  {
    title: { vi: "Bữa ăn hằng ngày có thể tác động sức khỏe lâu dài ra sao?", en: "How can daily eating affect long-term health?" },
    lead: {
      vi: "Sức khỏe dài hạn hiếm khi đổi bởi một bữa ăn. Nó thường được tạo bởi những điều lặp đi lặp lại quá lâu mà ta thấy là bình thường.",
      en: "Long-term health is rarely changed by a single meal. It's usually shaped by things repeated so long they feel normal.",
    },
    clips: [
      { vi: "Thói quen nhỏ tích lũy thành điều lớn ra sao?", en: "How do small habits accumulate into big things?" },
      { vi: "Vì sao cái quen lại dễ được xem là vô hại?", en: "Why is the familiar so easily seen as harmless?" },
      { vi: "Khi nào nên bắt đầu nhìn lại nhịp ăn mỗi ngày?", en: "When should you start reassessing your daily eating rhythm?" },
    ],
  },
  {
    title: { vi: "Khi nói về ung thư, vì sao người ta luôn quay lại bàn ăn?", en: "When talking about cancer, why do people always return to the table?" },
    lead: {
      vi: "Khi đối diện bệnh nặng, con người thường tìm một điểm gần gũi nhất để đặt câu hỏi. Bàn ăn là nơi gần nhất, lặp lại nhất, và cũng khó nhìn rõ nhất.",
      en: "Facing serious illness, people often look for the closest point to question. The table is nearest, most repeated, and hardest to see clearly.",
    },
    clips: [
      { vi: "Vì sao ai cũng muốn tìm một thủ phạm cụ thể?", en: "Why does everyone want to find a specific culprit?" },
      { vi: "Một thói quen lâu dài có thể ảnh hưởng thế nào?", en: "How can a long-term habit affect you?" },
      { vi: "Điều gì đang bị nói quá nhanh về thực phẩm và bệnh tật?", en: "What's being said too quickly about food and disease?" },
    ],
  },
  {
    title: { vi: "Một bộ phim tài liệu có thể làm thay đổi góc nhìn về dinh dưỡng như thế nào?", en: "How can a documentary genuinely shift the way you see nutrition?" },
    lead: {
      vi: "Phim không nhất thiết cho ta câu trả lời cuối cùng. Nhưng nó có thể buộc ta nhìn lại những điều mình đã tin quá lâu mà không hề kiểm tra.",
      en: "A film doesn't necessarily give you the final answer. But it can force you to re-examine beliefs you've held too long without checking.",
    },
    clips: [
      { vi: "Khi nào phim là điểm khởi đầu tốt?", en: "When is a film a good starting point?" },
      { vi: "Khi nào người xem bị cuốn vào kết luận quá nhanh?", en: "When do viewers get swept into conclusions too quickly?" },
      { vi: "Làm sao biến một luận điểm phim thành clip gần đời sống?", en: "How to turn a film's argument into a relatable clip?" },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   DATA — Band 5: FAQ
   ═══════════════════════════════════════════════════════════════════════════ */
const faqItems: { q: L; a: L }[] = [
  {
    q: { vi: "Có phải bỏ sữa là tốt hơn?", en: "Is it better to stop drinking milk?" },
    a: {
      vi: "Không nhất thiết. Điều quan trọng là hiểu vì sao mình đang uống — vì thói quen, vì quảng bá, hay vì cơ thể thật sự cần. Khi hiểu rồi, quyết định sẽ rõ hơn.",
      en: "Not necessarily. What matters is understanding why you drink it — habit, advertising, or genuine need. Once you understand, the decision becomes clearer.",
    },
  },
  {
    q: { vi: "Ăn ít thịt có dễ thiếu đạm không?", en: "Does eating less meat easily lead to protein deficiency?" },
    a: {
      vi: "Nhu cầu đạm hằng ngày thấp hơn nhiều người nghĩ, và có thể đáp ứng từ nhiều nguồn thực vật. Điều đáng hỏi là nỗi sợ thiếu đạm đến từ dữ liệu hay thói quen.",
      en: "Daily protein needs are lower than most think, and can be met by many plant sources. The real question is whether the fear comes from data or from habit.",
    },
  },
  {
    q: { vi: "Người có đường huyết cao nên bắt đầu nhìn từ đâu?", en: "Where should someone with high blood sugar start looking?" },
    a: {
      vi: "Không chỉ nhìn vào đường. Hãy nhìn vào cả bữa ăn, nhịp ăn, giấc ngủ và mức vận động. Đường huyết là một tín hiệu, nhưng nguyên nhân thường rộng hơn một chất.",
      en: "Don't just look at sugar. Consider your meals, eating rhythm, sleep, and activity. Blood sugar is a signal, but the cause is usually wider than one substance.",
    },
  },
  {
    q: { vi: "Bữa ăn ảnh hưởng nguy cơ lâu dài theo cách nào?", en: "How does eating affect long-term risk?" },
    a: {
      vi: "Không phải bữa ăn nào cũng gây bệnh. Nhưng những thói quen lặp lại hằng ngày tích lũy thành nền sức khỏe dài hạn — tốt hoặc xấu.",
      en: "Not every meal causes illness. But habits repeated daily accumulate into a long-term health foundation — for better or worse.",
    },
  },
  {
    q: { vi: "Khi xem phim tài liệu về dinh dưỡng, nên tin đến mức nào?", en: "How much should you trust a nutrition documentary?" },
    a: {
      vi: "Phim có thể mở ra góc nhìn mới, nhưng cũng thường đơn giản hóa. Dùng như điểm khởi đầu để đặt câu hỏi, không phải để kết luận ngay.",
      en: "A film can open new perspectives but often oversimplifies. Use it as a starting point for questions, not immediate conclusions.",
    },
  },
];

/* ═══════════════════════════════════════════════════════════════════════════ */

const eyebrow = "text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-teal)]";

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

      <main className="pb-20">
        <Container>
          <div className="mx-auto max-w-[1060px]">

            {/* ═══════════════════════════════════════════════════════
                BAND 1 — HERO (split layout: text left, image right)
            ═══════════════════════════════════════════════════════ */}
            <section className="pt-10 lg:pt-14">
              <div className={`grid items-center gap-8 ${heroSrc ? "lg:grid-cols-[1fr_auto]" : ""}`}>
                {/* Text column */}
                <div className="max-w-[580px]">
                  <p className={eyebrow}>
                    {locale === "vi" ? "Hiểu đúng trước, thay đổi sau" : "Understand first, then change"}
                  </p>
                  <h1 className="mt-3 text-[clamp(2.1rem,4.2vw,3.2rem)] font-semibold leading-[1.12] text-[var(--color-text-strong)]">
                    {locale === "vi" ? "Dinh dưỡng thiện lành" : "Wholesome Nutrition"}
                  </h1>
                  <p className="mt-5 text-[1.02rem] leading-[1.75] text-[var(--color-text-muted)]">
                    {locale === "vi"
                      ? "Dinh dưỡng không bắt đầu từ chế độ ăn, mà từ cách hiểu. Đây là nơi đặt lại những điều tưởng đã biết để nhìn rõ hơn trước khi chọn, trước khi tin, và trước khi lặp lại một thói quen mỗi ngày."
                      : "Nutrition doesn't begin with a diet — it begins with understanding. This is where you revisit what you thought you knew, so you can see more clearly before choosing, before believing, and before repeating a daily habit."}
                  </p>
                  <div className="mt-7">
                    <Link
                      href="#theo-chu-de"
                      className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-2.5 text-[0.88rem] font-semibold text-[var(--color-text-strong)] transition-colors hover:bg-[var(--color-primary-strong)]"
                    >
                      {locale === "vi" ? "Xem các chủ đề chính" : "Browse main topics"}
                    </Link>
                  </div>
                </div>

                {/* Hero image */}
                {heroSrc && (
                  <div className="relative hidden aspect-[4/3] w-[340px] overflow-hidden rounded-[14px] lg:block">
                    <Image
                      src={heroSrc}
                      alt={locale === "vi" ? "Dinh dưỡng thiện lành" : "Wholesome Nutrition"}
                      fill
                      priority
                      sizes="340px"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Intro strip */}
              <div className="mt-10 flex flex-wrap items-start gap-x-10 gap-y-4 border-t border-[var(--color-border)] pt-6">
                <p className="text-[0.82rem] font-semibold text-[var(--color-text-strong)]">
                  {locale === "vi" ? "Đọc trang này theo cách nào" : "How to read this page"}
                </p>
                <ul className="flex flex-wrap gap-x-8 gap-y-2">
                  {[
                    { vi: "Không kết luận tuyệt đối", en: "No absolute conclusions" },
                    { vi: "Bắt đầu từ câu hỏi gần đời sống", en: "Start from everyday questions" },
                    { vi: "Từ một ý có thể mở ra nhiều clip nhỏ", en: "One idea can open into many small clips" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[0.8rem] text-[var(--color-text-muted)]">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-[var(--color-teal)]" aria-hidden="true" />
                      {t(item, locale)}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                BAND 2 — 5 TOPIC CARDS (image + content)
            ═══════════════════════════════════════════════════════ */}
            <section id="theo-chu-de" className="mt-16 lg:mt-20">
              <p className={eyebrow}>{locale === "vi" ? "5 chủ đề chính" : "5 main topics"}</p>

              <div className="mt-6 space-y-5">
                {clusters.map((cluster) => {
                  const topicImg = img(cluster.imageSlot);
                  return (
                    <article
                      key={cluster.id}
                      id={cluster.id}
                      className="overflow-hidden rounded-[12px] border border-[var(--color-border)] bg-white"
                    >
                      <div className={`grid ${topicImg ? "lg:grid-cols-[280px_1fr]" : ""}`}>
                        {/* Image column */}
                        {topicImg && (
                          <div className="relative aspect-[16/10] lg:aspect-auto">
                            <Image
                              src={topicImg}
                              alt={t(cluster.title, locale)}
                              fill
                              sizes="(max-width: 1024px) 100vw, 280px"
                              className="object-cover"
                            />
                          </div>
                        )}

                        {/* Text column */}
                        <div className="p-6 lg:p-7">
                          <h2 className="text-[1.1rem] font-semibold leading-[1.3] text-[var(--color-text-strong)]">
                            {t(cluster.title, locale)}
                          </h2>
                          <p className="mt-3 max-w-[58ch] text-[0.92rem] leading-[1.7] text-[var(--color-text-muted)]">
                            {t(cluster.summary, locale)}
                          </p>

                          {/* 3 sub-points */}
                          <ul className="mt-4 space-y-2">
                            {cluster.points.map((pt, i) => (
                              <li key={i} className="flex gap-2.5 text-[0.84rem] leading-[1.55] text-[var(--color-text-muted)]">
                                <span className="mt-[3px] shrink-0 text-[var(--color-teal)]" aria-hidden="true">·</span>
                                {t(pt, locale)}
                              </li>
                            ))}
                          </ul>

                          {/* Closing question */}
                          <p className="mt-5 text-[0.86rem] italic text-[var(--color-navy)] opacity-70">
                            {t(cluster.question, locale)}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                BAND 3 — DOCUMENTARY (3 editorial cards)
            ═══════════════════════════════════════════════════════ */}
            <section id="goc-nhin-phim-tai-lieu" className="mt-16 lg:mt-20">
              <p className={eyebrow}>{locale === "vi" ? "Phim tài liệu" : "Documentary"}</p>
              <h2 className="mt-2 text-[1.35rem] font-semibold leading-[1.22] text-[var(--color-text-strong)] lg:text-[1.5rem]">
                {locale === "vi" ? "Góc nhìn mở ra từ phim tài liệu" : "Perspectives Opened by Documentary Film"}
              </h2>
              <p className="mt-3 max-w-[60ch] text-[0.9rem] leading-[1.7] text-[var(--color-text-muted)]">
                {locale === "vi"
                  ? "Phim có thể làm thay đổi cách nhìn — và cũng có thể đơn giản hóa thái quá. Dùng như điểm khởi đầu để đặt câu hỏi, không phải câu trả lời cuối cùng."
                  : "Films can shift your perspective — and can also oversimplify. Use them as starting points for questions, not final answers."}
              </p>

              <div className="mt-8 grid gap-5 lg:grid-cols-3">
                {docCards.map((card) => (
                  <div
                    key={card.id}
                    className="flex flex-col rounded-[12px] border border-[var(--color-border)] bg-[linear-gradient(160deg,rgba(191,221,226,0.1),rgba(255,255,255,0.55))] p-6"
                  >
                    <p className="text-[0.94rem] font-semibold text-[var(--color-text-strong)]">
                      {t(card.label, locale)}
                    </p>

                    <div className="mt-4">
                      <p className="text-[0.64rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-teal)]">
                        {locale === "vi" ? "Phim đang kể gì" : "What the film says"}
                      </p>
                      <p className="mt-1.5 text-[0.88rem] leading-[1.7] text-[var(--color-text-strong)]">
                        {t(card.story, locale)}
                      </p>
                    </div>

                    <div className="mt-4">
                      <p className="text-[0.64rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)] opacity-65">
                        {locale === "vi" ? "Câu hỏi phim đặt lại" : "The question it raises"}
                      </p>
                      <p className="mt-1.5 text-[0.86rem] italic leading-[1.65] text-[var(--color-text-muted)]">
                        {t(card.question, locale)}
                      </p>
                    </div>

                    <div className="mt-4">
                      <p className="text-[0.64rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-teal)] opacity-75">
                        {locale === "vi" ? "Tách ra clip nhỏ" : "Break into short clips"}
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
                      className="mt-auto pt-5 text-[0.8rem] font-medium text-[var(--color-navy)] opacity-60 transition-opacity hover:opacity-100"
                    >
                      {t(card.linkText, locale)}
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                BAND 4 — 6 EDITORIAL SEED CARDS
            ═══════════════════════════════════════════════════════ */}
            <section className="mt-16 lg:mt-20">
              <p className={eyebrow}>{locale === "vi" ? "Từ câu hỏi nhỏ đến clip ngắn" : "Small questions, short clips"}</p>
              <h2 className="mt-2 text-[1.35rem] font-semibold leading-[1.22] text-[var(--color-text-strong)] lg:text-[1.5rem]">
                {locale === "vi"
                  ? "Từ một câu hỏi nhỏ để mở thành clip ngắn"
                  : "From a small question into a short clip"}
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {seedCards.map((card, i) => (
                  <div
                    key={i}
                    className="flex flex-col rounded-[10px] border border-[var(--color-border)] bg-white p-5"
                  >
                    <h3 className="text-[0.92rem] font-semibold leading-[1.35] text-[var(--color-text-strong)]">
                      {t(card.title, locale)}
                    </h3>
                    <p className="mt-2.5 text-[0.84rem] leading-[1.65] text-[var(--color-text-muted)]">
                      {t(card.lead, locale)}
                    </p>
                    <ul className="mt-3 space-y-1">
                      {card.clips.map((clip, j) => (
                        <li key={j} className="flex gap-2 text-[0.78rem] leading-[1.5] text-[var(--color-text-muted)] opacity-80">
                          <span className="mt-[2px] shrink-0 text-[var(--color-teal)]" aria-hidden="true">·</span>
                          {t(clip, locale)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                BAND 5 — FAQ + CLOSING CTA
            ═══════════════════════════════════════════════════════ */}
            <section className="mt-16 lg:mt-20">
              <p className={eyebrow}>{locale === "vi" ? "Câu hỏi dễ gặp" : "Common Questions"}</p>

              <dl className="mt-5 space-y-6">
                {faqItems.map((item, i) => (
                  <div key={i}>
                    <dt className="text-[0.94rem] font-semibold leading-[1.4] text-[var(--color-text-strong)]">
                      {t(item.q, locale)}
                    </dt>
                    <dd className="mt-1.5 max-w-[62ch] text-[0.88rem] leading-[1.7] text-[var(--color-text-muted)]">
                      {t(item.a, locale)}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Closing CTA */}
              <div className="mt-12 border-t border-[var(--color-border)] pt-7">
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
