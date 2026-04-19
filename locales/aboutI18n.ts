import { brandI18n } from "@/locales/brandI18n";

export const aboutI18n = {
  vi: {
    hero: {
      eyebrow: "Giới thiệu nền tảng",
      title: brandI18n.vi.name,
      description:
        "Đây là nền tảng nội dung thiện lành cho đời sống tích cực. Chúng tôi chọn cách phát triển bền: đi sâu một hướng trước, rồi mở rộng dần những hướng còn lại.",
    },
    principlesTitle: "Định hướng vận hành",
    principles: [
      {
        title: "Đi hẹp trước, đi sâu trước",
        description:
          "Con Đường Thiện Lành tập trung ba hướng chính để người đọc dễ bắt đầu và đi sâu theo lộ trình rõ ràng.",
      },
      {
        title: "Xây nền từ gốc rễ",
        description:
          "Nội dung ưu tiên nền tảng hiểu biết, góc nhìn tài liệu, chuyên đề rõ nguồn và thực hành vừa sức thay vì theo trào lưu ngắn hạn.",
      },
      {
        title: "Mở rộng có trật tự",
        description:
          "Mỗi hướng nội dung được phát triển theo cấu trúc nhất quán để người đọc theo dõi thuận tiện qua từng chặng.",
      },
    ],
    startTitle: "Bắt đầu ở đâu?",
    startDescription:
      "Bạn có thể bắt đầu từ Dinh dưỡng thiện lành để nắm nền rõ nhất, rồi mở rộng sang các hướng phù hợp với nhu cầu của mình.",
    primaryCta: "Vào Dinh dưỡng thiện lành",
  },
  en: {
    hero: {
      eyebrow: "About the Platform",
      title: brandI18n.en.name,
      description:
        "This is a wholesome content platform for positive living. We grow sustainably: go deep into one direction first, then expand the rest.",
    },
    principlesTitle: "Operating Direction",
    principles: [
      {
        title: "Go narrow first, go deep first",
        description:
          "The Wholesome Path focuses on three clear pillars so readers can begin easily and go deeper with a clear progression.",
      },
      {
        title: "Build from the roots",
        description:
          "Content prioritizes foundational understanding, documentary perspectives, source-grounded topics, and practical routines over short trends.",
      },
      {
        title: "Expand with structure",
        description:
          "Each direction is developed with a consistent structure so readers can follow the journey with less friction.",
      },
    ],
    startTitle: "Where should you begin?",
    startDescription:
      "You can begin with Wholesome Nutrition to build a clear foundation, then continue into the directions that fit your needs.",
    primaryCta: "Enter Wholesome Nutrition",
  },
} as const;
