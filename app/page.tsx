"use client";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ClosingEditorialSection } from "@/components/sections/ClosingEditorialSection";
import { HeroSectionEditorial } from "@/components/sections/HeroSectionEditorial";
import { SpotlightSection } from "@/components/sections/SpotlightSection";
import { ThreeBranchesSection } from "@/components/sections/ThreeBranchesSection";
import { homepageConfigI18n } from "@/data/homepageConfigI18n";
import { useAppLocale } from "@/lib/useAppLocale";
import { getSiteChrome } from "@/lib/siteChrome";
import { getImageForSlot } from "@/lib/getImageForSlot";

export default function HomePage() {
  const { locale, handleLocaleChange } = useAppLocale();
  const siteChrome = getSiteChrome(locale);

  const navigationText = siteChrome.navigationText;
  const homepageText = siteChrome.homepageText;

  const headerLinks = siteChrome.headerLinks;

  const heroContent = {
    eyebrow: homepageText.hero.eyebrow,
    title: homepageText.hero.title,
    subtitle: homepageText.hero.subtitle,
    primaryCtaLabel: homepageText.hero.primaryCta,
    primaryCtaHref: homepageConfigI18n.hero.primaryCtaHref,
    secondaryCtaLabel: homepageText.hero.secondaryCta,
    secondaryCtaHref: homepageConfigI18n.hero.secondaryCtaHref,
    noteHint: homepageText.hero.chatHint,
    image: {
      src: getImageForSlot("dinh-duong.hero") ?? homepageConfigI18n.hero.image.src,
      alt: homepageConfigI18n.hero.image.alt[locale],
    },
  };

  /* ── Three branches section ─────────────────────────────────── */
  const branchCards =
    locale === "vi"
      ? [
          {
            title: "Dinh dưỡng thiện lành",
            description:
              "Quay về với dinh dưỡng từ gốc rễ, để hiểu đúng trước khi thay đổi.",
            highlights: [
              "Những điều thường được tin về sữa",
              "Chất đạm: hiểu sao cho đúng",
              "Sức khỏe chuyển hóa và bữa ăn hằng ngày",
            ],
            href: "/dinh-duong-thien-lanh",
            ctaLabel: "Khám phá thêm",
          },
          {
            title: "Ứng xử thiện lành",
            description:
              "Nuôi dưỡng cách ứng xử tử tế, sáng rõ và thực tế trong từng mối quan hệ.",
            highlights: [
              "Hiểu mình để sống nhẹ hơn",
              "Ứng xử trong gia đình",
              "Lời nói và cách giao tiếp",
            ],
            href: "/hanh-dong-thien-lanh",
            ctaLabel: "Khám phá thêm",
          },
          {
            title: "Giải trí thiện lành",
            description:
              "Chọn lọc nội dung giải trí tích cực để thư giãn mà vẫn nuôi dưỡng tinh thần.",
            highlights: [
              "Tin đáng chú ý",
              "Vui cười nhẹ nhàng",
              "Vẻ đẹp thiên nhiên",
            ],
            href: "/giai-tri-thien-lanh",
            ctaLabel: "Khám phá thêm",
          },
        ]
      : [
          {
            title: "Wholesome Nutrition",
            description:
              "Returning to nutrition at its roots, so understanding can come before change.",
            highlights: [
              "What many people believe about milk",
              "Protein: understanding it more clearly",
              "Metabolic health and daily meals",
            ],
            href: "/dinh-duong-thien-lanh",
            ctaLabel: "Explore more",
          },
          {
            title: "Wholesome Conduct",
            description:
              "Cultivating thoughtful and kind conduct across everyday relationships.",
            highlights: [
              "Understanding yourself more gently",
              "Conduct in family life",
              "Speech and communication",
            ],
            href: "/hanh-dong-thien-lanh",
            ctaLabel: "Explore more",
          },
          {
            title: "Wholesome Entertainment",
            description:
              "Choosing positive entertainment that relaxes while still nourishing attention.",
            highlights: [
              "Noteworthy stories",
              "Light-hearted laughter",
              "Beauty of nature",
            ],
            href: "/giai-tri-thien-lanh",
            ctaLabel: "Explore more",
          },
        ];

  /* ── Dinh dưỡng spotlight ───────────────────────────────────── */
  const nutritionSpotlight =
    locale === "vi"
      ? {
          title: "Đi sâu trước với Dinh dưỡng thiện lành",
          description:
            "Một hướng nội dung gần gũi nhưng dễ bị chi phối bởi thói quen, quảng bá và những điều được lặp lại quá lâu.",
          topics: [
            { title: "Những điều thường được tin về sữa" },
            { title: "Chất đạm: hiểu sao cho đúng" },
            { title: "Sức khỏe chuyển hóa và bữa ăn hằng ngày" },
            { title: "Ung thư và những câu hỏi từ bàn ăn" },
          ],
          ctaLabel: "Xem toàn bộ chủ đề dinh dưỡng",
          ctaHref: "/dinh-duong-thien-lanh",
        }
      : {
          title: "Going deeper with Wholesome Nutrition",
          description:
            "A topic close to daily life, yet easily influenced by habits, marketing, and ideas repeated for too long.",
          topics: [
            { title: "What many people believe about milk" },
            { title: "Protein: understanding it more clearly" },
            { title: "Metabolic health and daily meals" },
            { title: "Cancer and questions from the dining table" },
          ],
          ctaLabel: "View all nutrition topics",
          ctaHref: "/dinh-duong-thien-lanh",
        };

  /* ── Ứng xử spotlight ──────────────────────────────────────── */
  const conductSpotlight =
    locale === "vi"
      ? {
          title: "Nhìn lại cách sống cùng người khác",
          description:
            "Không bắt đầu từ những lời dạy cứng, mà từ những va chạm rất thường gặp trong đời sống mỗi ngày.",
          topics: [
            { title: "Hiểu mình để sống nhẹ hơn" },
            { title: "Ứng xử trong gia đình" },
            { title: "Lời nói và cách giao tiếp" },
            { title: "Ra ngoài xã hội với sự tử tế" },
          ],
          ctaLabel: "Xem toàn bộ chủ đề ứng xử",
          ctaHref: "/hanh-dong-thien-lanh",
        }
      : {
          title: "Reflecting on how we live with others",
          description:
            "Not starting from rigid lessons, but from the everyday friction most of us encounter.",
          topics: [
            { title: "Understanding yourself more gently" },
            { title: "Conduct in family life" },
            { title: "Speech and communication" },
            { title: "Showing kindness in society" },
          ],
          ctaLabel: "View all conduct topics",
          ctaHref: "/hanh-dong-thien-lanh",
        };

  const closingContent = {
    title: homepageText.endingSection.title,
    subtitle: homepageText.endingSection.subtitle,
    description: homepageText.endingSection.description,
    cta: {
      label: homepageText.endingSection.cta,
      href: homepageConfigI18n.endingCtaHref,
    },
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-strong)]">
      <SiteHeader
        brandName={navigationText.brand.name}
        brandShortName={navigationText.brand.shortName}
        links={headerLinks}
        cta={siteChrome.headerCta}
        locale={locale}
        onLocaleChange={handleLocaleChange}
        menuButtonLabel={navigationText.menuButton}
        navAriaLabel={navigationText.navAriaLabel}
        localeSwitchAriaLabel={navigationText.localeSwitchAriaLabel}
      />
      <main>
        <HeroSectionEditorial content={heroContent} />
        <ThreeBranchesSection
          heading={homepageText.entrySection.title}
          cards={branchCards}
        />
        <SpotlightSection {...nutritionSpotlight} />
        <SpotlightSection {...conductSpotlight} />
        <ClosingEditorialSection content={closingContent} />
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
