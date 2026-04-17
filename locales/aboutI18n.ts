import { brandI18n } from "@/locales/brandI18n";

export const aboutI18n = {
  vi: {
    hero: {
      eyebrow: "Giới thiệu nền tảng",
      title: brandI18n.vi.name,
      description:
        "Đây là nền tảng nội dung thiện lành cho đời sống tích cực. Chúng tôi chọn cách phát triển bền: đi sâu một nhánh trước, mở rộng các nhánh còn lại sau.",
    },
    principlesTitle: "Định hướng vận hành",
    principles: [
      {
        title: "Đi hẹp trước, đi sâu trước",
        description:
          "Con Đường Thiện Lành hiện surface 3 cây chính để người đọc dễ bắt đầu, đồng thời vẫn giữ nguyên các nhánh đã tạo ở trạng thái ẩn.",
      },
      {
        title: "Xây nền từ gốc rễ",
        description:
          "Nội dung ưu tiên nền tảng hiểu biết, góc nhìn tài liệu, chuyên đề rõ nguồn và thực hành vừa sức thay vì theo trào lưu ngắn hạn.",
      },
      {
        title: "Mở rộng có trật tự",
        description:
          "Các nhánh đang ẩn khỏi menu vẫn được bảo toàn đầy đủ route, nội dung và locale để mở rộng lại theo từng giai đoạn.",
      },
    ],
    startTitle: "Bắt đầu ở đâu?",
    startDescription:
      "Giai đoạn này bạn nên bắt đầu từ nhánh Dinh dưỡng thiện lành để nắm nền rõ nhất trước khi đi sang các nhánh mở rộng.",
    primaryCta: "Vào Dinh dưỡng thiện lành",
  },
  en: {
    hero: {
      eyebrow: "About the Platform",
      title: brandI18n.en.name,
      description:
        "This is a wholesome content platform for positive living. We grow sustainably: go deep into one branch first, then expand the rest.",
    },
    principlesTitle: "Operating Direction",
    principles: [
      {
        title: "Go narrow first, go deep first",
        description:
          "The Wholesome Path currently surfaces three pillars for clarity, while preserving previously created branches in hidden mode.",
      },
      {
        title: "Build from the roots",
        description:
          "Content prioritizes foundational understanding, documentary perspectives, source-grounded topics, and practical routines over short trends.",
      },
      {
        title: "Expand with structure",
        description:
          "Hidden branches remain fully preserved with their routes, content, and locale keys so they can be surfaced again in later phases.",
      },
    ],
    startTitle: "Where should you begin?",
    startDescription:
      "In this phase, begin with Wholesome Nutrition to build a clear foundation before moving into the expansion branches.",
    primaryCta: "Enter Wholesome Nutrition",
  },
} as const;
