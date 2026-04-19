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
    title: "Con Đường Thiện Lành được sắp lại theo ba hướng chính để người đọc dễ bắt đầu hơn.",
    description:
      "Trang chủ tập trung vào Dinh dưỡng thiện lành, Ứng xử thiện lành và Giải trí thiện lành. Cấu trúc này giúp việc bắt đầu rõ ràng hơn và theo dõi nội dung mạch lạc hơn.",
  },
  en: {
    eyebrow: "Platform Spirit",
    title: "The Wholesome Path now presents three clear pillars for easier guidance.",
    description:
      "The public structure highlights three pillars: Wholesome Nutrition, Wholesome Conduct, and Wholesome Entertainment. This arrangement makes it easier to begin and follow the reading flow with clarity.",
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
    languageLabel: "Ngôn ngữ",
    note: "Đi từ điều gần gũi, giữ nhịp đều, mở rộng bền vững.",
    copyrightNotice: "Đã đăng ký mọi quyền.",
  },
  en: {
    navHeading: "Navigation",
    supportHeading: "More",
    supportLinks: [
      { label: "About", href: "/gioi-thieu" },
      { label: "Wholesome Nutrition", href: "/dinh-duong-thien-lanh" },
    ],
    languageLabel: "Language",
    note: "Starting close, keeping steady, expanding sustainably.",
    copyrightNotice: "All rights reserved.",
  },
};
