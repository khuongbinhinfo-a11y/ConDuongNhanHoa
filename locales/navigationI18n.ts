import { brandI18n } from "@/locales/brandI18n";

export const navigationI18n = {
  vi: {
    brand: {
      name: brandI18n.vi.name,
      shortName: brandI18n.vi.shortName,
      tagline: "Nội dung thiện lành cho đời sống tích cực.",
    },
    nav: {
      home: "Trang chủ",
      nutrition: "Dinh dưỡng thiện lành",
      action: "Hành động thiện lành",
      speech: "Lời nói thiện lành",
      thought: "Suy nghĩ thiện lành",
      entertainment: "Giải trí thiện lành",
      about: "Giới thiệu",
    },
    navShort: {
      home: "Trang chủ",
      nutrition: "Dinh dưỡng",
      action: "Hành động",
      speech: "Lời nói",
      thought: "Suy nghĩ",
      entertainment: "Giải trí",
      about: "Giới thiệu",
    },
    companion: "Đồng hành",
    menuButton: "Menu",
    navAriaLabel: "Điều hướng chính",
    localeSwitchAriaLabel: "Chuyển ngôn ngữ",
  },
  en: {
    brand: {
      name: brandI18n.en.name,
      shortName: brandI18n.en.shortName,
      tagline: "Wholesome content for positive living.",
    },
    nav: {
      home: "Home",
      nutrition: "Wholesome Nutrition",
      action: "Wholesome Actions",
      speech: "Wholesome Speech",
      thought: "Wholesome Thoughts",
      entertainment: "Wholesome Entertainment",
      about: "About",
    },
    navShort: {
      home: "Home",
      nutrition: "Nutrition",
      action: "Actions",
      speech: "Speech",
      thought: "Thoughts",
      entertainment: "Entertainment",
      about: "About",
    },
    companion: "Walk With Us",
    menuButton: "Menu",
    navAriaLabel: "Primary navigation",
    localeSwitchAriaLabel: "Switch language",
  },
} as const;
