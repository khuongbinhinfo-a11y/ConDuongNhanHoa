import { brandI18n } from "@/locales/brandI18n";

export const aboutI18n = {
  vi: {
    hero: {
      eyebrow: "Giới thiệu",
      title: brandI18n.vi.name,
      description:
        "Con Đường Thiện Lành là nơi gom những nội dung gần với đời sống: ăn uống, ứng xử và cách giữ tinh thần nhẹ hơn mỗi ngày.",
    },
    principlesTitle: "Định hướng vận hành",
    principles: [
      {
        title: "Bắt đầu từ điều gần đời sống",
        description:
          "Chúng tôi chọn những chủ đề sát với điều người đọc gặp mỗi ngày để việc bắt đầu tự nhiên hơn và bớt áp lực hơn.",
      },
      {
        title: "Đi từ hiểu đúng đến thực hành",
        description:
          "Nội dung được viết theo hướng rõ ràng, có căn cứ và đủ gần để người đọc thử áp dụng theo nhịp riêng của mình.",
      },
      {
        title: "Giữ nhịp đọc mạch lạc",
        description:
          "Mỗi hướng nội dung được sắp lại theo cấu trúc dễ theo dõi để người đọc chọn đúng phần phù hợp với lúc này.",
      },
    ],
    startTitle: "Bắt đầu ở đâu?",
    startDescription:
      "Bạn có thể bắt đầu từ Dinh dưỡng thiện lành nếu muốn nhìn rõ hơn những điều gần với đời sống hằng ngày, rồi đi tiếp sang hướng phù hợp với nhu cầu của mình.",
    primaryCta: "Vào Dinh dưỡng thiện lành",
  },
  en: {
    hero: {
      eyebrow: "About",
      title: brandI18n.en.name,
      description:
        "The Wholesome Path brings together content rooted in daily life: how we eat, how we relate, and how we keep a lighter inner rhythm.",
    },
    principlesTitle: "Operating Direction",
    principles: [
      {
        title: "Begin close to daily life",
        description:
          "We choose subjects that stay close to everyday life so readers can begin more naturally and with less pressure.",
      },
      {
        title: "Move from understanding to practice",
        description:
          "The writing aims to stay clear, grounded, and practical enough for readers to try in their own rhythm.",
      },
      {
        title: "Keep the reading flow clear",
        description:
          "Each direction is arranged with a consistent structure so readers can find the part that fits their present need.",
      },
    ],
    startTitle: "Where should you begin?",
    startDescription:
      "You can begin with Wholesome Nutrition if you want a clearer view of everyday habits first, then continue into the direction that fits your needs.",
    primaryCta: "Enter Wholesome Nutrition",
  },
} as const;
