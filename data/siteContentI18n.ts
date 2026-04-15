import type { AppLocale } from "@/lib/locale";

type WhySectionCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

type FooterCopy = {
  navHeading: string;
  supportHeading: string;
  supportLinks: {
    label: string;
    href: string;
  }[];
  languageLabel: string;
  note: string;
  copyrightNotice: string;
};

export const whySectionI18n: Record<AppLocale, WhySectionCopy> = {
  vi: {
    eyebrow: "Tinh thần nền tảng",
    title: "Một nền tảng nội dung thiện lành, đi hẹp trước để đi sâu và đi chắc.",
    description:
      "Con Đường Thiện Lành phát triển theo 5 nhánh nội dung. Giai đoạn đầu ưu tiên đi sâu nhánh Dinh dưỡng thiện lành để giữ chất lượng, sau đó mở rộng đồng đều sang các nhánh còn lại.",
  },
  en: {
    eyebrow: "Platform Spirit",
    title: "A wholesome content platform that goes narrow first to go deeper and steadier.",
    description:
      "The Wholesome Path grows through five content branches. This phase focuses deeply on Wholesome Nutrition first, then expands across the remaining branches with the same quality bar.",
  },
};

export const footerI18n: Record<AppLocale, FooterCopy> = {
  vi: {
    navHeading: "Điều hướng",
    supportHeading: "Thông tin thêm",
    supportLinks: [
      { label: "Giới thiệu", href: "/gioi-thieu" },
      { label: "Dinh dưỡng thiện lành", href: "/dinh-duong-thien-lanh" },
    ],
    languageLabel: "Ngôn ngữ: Tiếng Việt | English",
    note: "Đi từ gốc rễ, giữ nhịp đều, mở rộng bền vững.",
    copyrightNotice: "Đã đăng ký mọi quyền.",
  },
  en: {
    navHeading: "Navigation",
    supportHeading: "More",
    supportLinks: [
      { label: "About", href: "/gioi-thieu" },
      { label: "Wholesome Nutrition", href: "/dinh-duong-thien-lanh" },
    ],
    languageLabel: "Language: Tiếng Việt | English",
    note: "Rooted first, steady pace, sustainable expansion.",
    copyrightNotice: "All rights reserved.",
  },
};

