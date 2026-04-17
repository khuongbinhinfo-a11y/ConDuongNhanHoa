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
          "Con Đường Thiện Lành hiện tập trung ba hướng chính để người đọc dễ bắt đầu, đồng thời vẫn giữ nguyên các phần đã chuẩn bị trước đó.",
      },
      {
        title: "Xây nền từ gốc rễ",
        description:
          "Nội dung ưu tiên nền tảng hiểu biết, góc nhìn tài liệu, chuyên đề rõ nguồn và thực hành vừa sức thay vì theo trào lưu ngắn hạn.",
      },
      {
        title: "Mở rộng có trật tự",
        description:
          "Các phần đang ẩn khỏi menu vẫn được bảo toàn đầy đủ route, nội dung và locale để mở lại theo từng giai đoạn.",
      },
    ],
    startTitle: "Bắt đầu ở đâu?",
    startDescription:
      "Giai đoạn này bạn nên bắt đầu từ Dinh dưỡng thiện lành để nắm nền rõ nhất, rồi mở rộng dần sang các hướng khác.",
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
          "The Wholesome Path currently highlights three clear pillars, while preserving previously prepared areas in hidden mode.",
      },
      {
        title: "Build from the roots",
        description:
          "Content prioritizes foundational understanding, documentary perspectives, source-grounded topics, and practical routines over short trends.",
      },
      {
        title: "Expand with structure",
        description:
          "Hidden areas remain fully preserved with their routes, content, and locale keys so they can be brought back in later phases.",
      },
    ],
    startTitle: "Where should you begin?",
    startDescription:
      "In this phase, begin with Wholesome Nutrition to build a clear foundation before moving into the next directions.",
    primaryCta: "Enter Wholesome Nutrition",
  },
} as const;
