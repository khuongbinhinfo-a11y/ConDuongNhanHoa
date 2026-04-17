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
    title: "Con Đường Thiện Lành đang được sắp lại theo 3 cây chính để rõ hướng và dễ bắt đầu hơn.",
    description:
      "Ngoài mặt website hiện tập trung 3 cây: Dinh dưỡng thiện lành, Ứng xử thiện lành và Giải trí thiện lành. Các nhánh cũ vẫn được giữ nguyên route và nội dung, chỉ tạm ẩn khỏi menu và homepage để tránh loãng.",
  },
  en: {
    eyebrow: "Platform Spirit",
    title: "The Wholesome Path is now surfaced through three clear pillars for easier guidance.",
    description:
      "The public structure now highlights three pillars: Wholesome Nutrition, Wholesome Conduct, and Wholesome Entertainment. Older branches are preserved with their existing routes and content, but hidden from navigation and homepage entry points for now.",
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
