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
  copyrightText: string;
};

export const whySectionCopy: Record<AppLocale, WhySectionCopy> = {
  vi: {
    eyebrow: "Vì sao chúng tôi ở đây",
    title: "Một nền tảng để đọc chậm, hiểu đúng, và thay đổi theo nhịp bền.",
    description:
      "Chúng tôi xây website này để giúp bạn bắt đầu từ điều gần nhất với mình: hiểu lại điều quen, chăm sóc sức khỏe rõ ràng hơn, và đi tiếp bằng những thay đổi đủ thực tế.",
  },
  en: {
    eyebrow: "Why We Are Here",
    title: "A place to read more slowly, understand more clearly, and change at a sustainable pace.",
    description:
      "This platform exists to help you start from what feels closest right now: rethinking the familiar, understanding well-being with clarity, and moving forward through practical small changes.",
  },
};

export const footerCopy: Record<AppLocale, FooterCopy> = {
  vi: {
    navHeading: "Điều hướng",
    supportHeading: "Hỗ trợ",
    supportLinks: [
      { label: "Bắt đầu từ đâu", href: "/bat-dau-tu-dau" },
      { label: "Quiz định hướng đọc", href: "/quiz" },
      { label: "Góc nhìn nhân ái", href: "/goc-nhin-nhan-ai" },
    ],
    languageLabel: "Ngôn ngữ: Tiếng Việt (giai đoạn hiện tại)",
    note: "Không cần đi nhanh. Chỉ cần đi đúng nhịp của mình.",
    copyrightText: "© 2026 Con Đường Nhân Hòa. All rights reserved.",
  },
  en: {
    navHeading: "Navigation",
    supportHeading: "Support",
    supportLinks: [
      { label: "Where to Begin", href: "/bat-dau-tu-dau" },
      { label: "Reading Orientation Quiz", href: "/quiz" },
      { label: "A Compassionate Perspective", href: "/goc-nhin-nhan-ai" },
    ],
    languageLabel: "Language: Vietnamese | English",
    note: "You do not need to move fast. You only need your own pace.",
    copyrightText: "© 2026 The Path of Human Harmony. All rights reserved.",
  },
};
