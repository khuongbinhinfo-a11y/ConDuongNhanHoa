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
      "Trang chủ hiện tập trung vào Dinh dưỡng thiện lành, Ứng xử thiện lành và Giải trí thiện lành. Những phần đã chuẩn bị trước đó vẫn được giữ nguyên đường dẫn và nội dung, chỉ tạm ẩn khỏi menu để giữ trải nghiệm gọn hơn.",
  },
  en: {
    eyebrow: "Platform Spirit",
    title: "The Wholesome Path now presents three clear pillars for easier guidance.",
    description:
      "The public structure now highlights three pillars: Wholesome Nutrition, Wholesome Conduct, and Wholesome Entertainment. Other prepared areas are still preserved with their routes and content, but kept out of the main entry flow for now.",
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
