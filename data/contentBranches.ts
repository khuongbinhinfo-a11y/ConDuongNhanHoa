/**
 * Legacy snapshot only.
 *
 * Runtime source-of-truth for branch landing content (including nutrition)
 * is `data/contentBranchesI18n.ts`.
 * Keep this file only for backward reference and avoid adding new runtime usages.
 */

export type ContentBranchSlug =
  | "dinh-duong-thien-lanh"
  | "hanh-dong-thien-lanh"
  | "loi-noi-thien-lanh"
  | "suy-nghi-thien-lanh"
  | "giai-tri-thien-lanh";

export type BranchCluster = {
  id: string;
  title: string;
  summary: string;
  href: string;
};

export type BranchDirection = {
  title: string;
  description: string;
  href: string;
};

export type ContentBranchLanding = {
  slug: ContentBranchSlug;
  title: string;
  heroKicker: string;
  description: string;
  clusters: BranchCluster[];
  relatedDirections: BranchDirection[];
  primaryCta: {
    label: string;
    href: string;
  };
};

/**
 * @deprecated Legacy snapshot only. Do not use for runtime UI.
 * Runtime source-of-truth is `contentBranchesI18n` in `data/contentBranchesI18n.ts`.
 */
export const contentBranches: Record<ContentBranchSlug, ContentBranchLanding> = {
  "dinh-duong-thien-lanh": {
    slug: "dinh-duong-thien-lanh",
    title: "Dinh dưỡng thiện lành",
    heroKicker: "Nhánh đi sâu giai đoạn đầu",
    description:
      "Quay về với dinh dưỡng từ gốc rễ: đi từ nền tảng hiểu biết, mở rộng qua phim tài liệu và góc nhìn, rồi vào chuyên đề và hành trình thực hành.",
    clusters: [
      {
        id: "tong-quan",
        title: "Tổng quan",
        summary: "Lộ trình tổng thể của nhánh Dinh dưỡng thiện lành và cách bắt đầu theo nhịp cá nhân.",
        href: "/dinh-duong-thien-lanh#tong-quan",
      },
      {
        id: "kien-thuc-nen-tang",
        title: "Kiến thức nền tảng",
        summary: "Các nguyên tắc nền cần nắm trước khi theo bất kỳ trường phái ăn uống nào.",
        href: "/dinh-duong-thien-lanh#kien-thuc-nen-tang",
      },
      {
        id: "phim-tai-lieu-goc-nhin",
        title: "Phim tài liệu / Góc nhìn",
        summary: "Nội dung tài liệu, trong đó What The Health được đặt đúng ngữ cảnh thuộc nhánh Dinh dưỡng.",
        href: "/dinh-duong-thien-lanh#phim-tai-lieu-goc-nhin",
      },
      {
        id: "bai-viet-chuyen-de",
        title: "Bài viết chuyên đề",
        summary: "Những chủ đề đi sâu theo vấn đề thực tế để đọc có hệ thống, không đọc rời rạc.",
        href: "/dinh-duong-thien-lanh#bai-viet-chuyen-de",
      },
      {
        id: "cau-hoi-thuong-gap",
        title: "Câu hỏi thường gặp",
        summary: "Tổng hợp câu hỏi phổ biến để người đọc có thể tự kiểm tra và đối chiếu nguồn.",
        href: "/dinh-duong-thien-lanh#cau-hoi-thuong-gap",
      },
      {
        id: "hanh-trinh-thuc-hanh",
        title: "Hành trình thực hành",
        summary: "Các bước nhỏ theo tuần để chuyển kiến thức thành thay đổi bền vững trong đời sống.",
        href: "/dinh-duong-thien-lanh#hanh-trinh-thuc-hanh",
      },
    ],
    relatedDirections: [
      {
        title: "What The Health trong phần Phim tài liệu",
        description: "Xem bộ phim như một góc nhìn để đối chiếu, không phải trục trung tâm của toàn site.",
        href: "/dinh-duong-thien-lanh#phim-tai-lieu-goc-nhin",
      },
      {
        title: "Đi tiếp sang Hành động thiện lành",
        description: "Khi đã có nền dinh dưỡng, chuyển sang nhánh hành động để giữ nhịp thực hành dài hạn.",
        href: "/hanh-dong-thien-lanh",
      },
      {
        title: "Xem toàn bộ 5 nhánh",
        description: "Quay lại trang chủ để thấy cách 5 nhánh liên kết thành một hệ nội dung thiện lành.",
        href: "/",
      },
    ],
    primaryCta: {
      label: "Xem Phim tài liệu / Góc nhìn",
      href: "/dinh-duong-thien-lanh#phim-tai-lieu-goc-nhin",
    },
  },
  "hanh-dong-thien-lanh": {
    slug: "hanh-dong-thien-lanh",
    title: "Hành động thiện lành",
    heroKicker: "Nhánh mở rộng",
    description:
      "Nhánh này định hướng các hành động nhỏ, đều và thực tế để nuôi lối sống tích cực trong công việc, gia đình và cộng đồng.",
    clusters: [
      {
        id: "dinh-huong",
        title: "Định hướng nhánh",
        summary: "Khung nội dung hành động thiện lành sẽ đi từ cá nhân đến tương tác xã hội.",
        href: "/hanh-dong-thien-lanh#dinh-huong",
      },
      {
        id: "thuc-hanh-nho",
        title: "Thực hành nhỏ mỗi ngày",
        summary: "Bắt đầu bằng các việc vừa sức để giữ được nhịp thay đổi thay vì cố làm thật nhiều.",
        href: "/hanh-dong-thien-lanh#thuc-hanh-nho",
      },
      {
        id: "mo-rong-sau",
        title: "Lộ trình mở rộng",
        summary: "Nội dung sâu sẽ được mở sau khi nhánh Dinh dưỡng hoàn thiện nền tảng.",
        href: "/hanh-dong-thien-lanh#mo-rong-sau",
      },
    ],
    relatedDirections: [
      {
        title: "Bắt đầu từ Dinh dưỡng thiện lành",
        description: "Nhánh đang đi sâu hiện tại, phù hợp để bắt đầu khi cần nền kiến thức rõ.",
        href: "/dinh-duong-thien-lanh",
      },
      {
        title: "Sang Lời nói thiện lành",
        description: "Mở rộng từ hành động sang giao tiếp để giữ sự nhất quán trong đời sống.",
        href: "/loi-noi-thien-lanh",
      },
      {
        title: "Về trang chủ",
        description: "Xem toàn bộ cấu trúc 5 nhánh và trọng tâm giai đoạn hiện tại.",
        href: "/",
      },
    ],
    primaryCta: {
      label: "Vào nhánh Dinh dưỡng thiện lành",
      href: "/dinh-duong-thien-lanh",
    },
  },
  "loi-noi-thien-lanh": {
    slug: "loi-noi-thien-lanh",
    title: "Lời nói thiện lành",
    heroKicker: "Nhánh mở rộng",
    description:
      "Nhánh này định hướng giao tiếp lành mạnh: rõ nghĩa, tử tế, giảm tổn thương và giữ được sự thật trong đối thoại.",
    clusters: [
      {
        id: "dinh-huong",
        title: "Định hướng nhánh",
        summary: "Khung nội dung sẽ đi từ tự nhận thức ngôn ngữ đến giao tiếp trong các mối quan hệ gần.",
        href: "/loi-noi-thien-lanh#dinh-huong",
      },
      {
        id: "nguyen-tac",
        title: "Nguyên tắc giao tiếp",
        summary: "Một số nguyên tắc nền giúp nói rõ mà vẫn giữ được tôn trọng và kết nối.",
        href: "/loi-noi-thien-lanh#nguyen-tac",
      },
      {
        id: "mo-rong-sau",
        title: "Lộ trình mở rộng",
        summary: "Nội dung đi sâu sẽ triển khai sau khi hoàn thiện giai đoạn tập trung hiện tại.",
        href: "/loi-noi-thien-lanh#mo-rong-sau",
      },
    ],
    relatedDirections: [
      {
        title: "Bắt đầu từ Dinh dưỡng thiện lành",
        description: "Đi từ nền tảng đang được đào sâu trước khi mở rộng sang các nhánh khác.",
        href: "/dinh-duong-thien-lanh",
      },
      {
        title: "Sang Suy nghĩ thiện lành",
        description: "Nối giao tiếp bên ngoài với nền tư duy bên trong để chuyển hóa ổn định hơn.",
        href: "/suy-nghi-thien-lanh",
      },
      {
        title: "Về trang chủ",
        description: "Xem toàn bộ định vị của nền tảng theo 5 nhánh nội dung.",
        href: "/",
      },
    ],
    primaryCta: {
      label: "Vào nhánh Dinh dưỡng thiện lành",
      href: "/dinh-duong-thien-lanh",
    },
  },
  "suy-nghi-thien-lanh": {
    slug: "suy-nghi-thien-lanh",
    title: "Suy nghĩ thiện lành",
    heroKicker: "Nhánh mở rộng",
    description:
      "Nhánh này định hướng nuôi tư duy lành mạnh để sống sáng hơn, vững hơn và ít bị cuốn vào cực đoan thông tin.",
    clusters: [
      {
        id: "dinh-huong",
        title: "Định hướng nhánh",
        summary: "Khung nội dung tập trung nhận diện mô thức nghĩ, lọc nhiễu và nuôi suy nghĩ có trách nhiệm.",
        href: "/suy-nghi-thien-lanh#dinh-huong",
      },
      {
        id: "thuc-hanh-tu-duy",
        title: "Thực hành tư duy",
        summary: "Các bước thực hành đơn giản để giữ bình tĩnh khi xử lý thông tin trái chiều.",
        href: "/suy-nghi-thien-lanh#thuc-hanh-tu-duy",
      },
      {
        id: "mo-rong-sau",
        title: "Lộ trình mở rộng",
        summary: "Nội dung chi tiết sẽ được cập nhật theo tiến độ mở rộng từng giai đoạn.",
        href: "/suy-nghi-thien-lanh#mo-rong-sau",
      },
    ],
    relatedDirections: [
      {
        title: "Bắt đầu từ Dinh dưỡng thiện lành",
        description: "Xây nền từ nhánh đang tập trung sâu để có điểm tựa thực tế.",
        href: "/dinh-duong-thien-lanh",
      },
      {
        title: "Sang Giải trí thiện lành",
        description: "Mở rộng sang thói quen tiêu thụ nội dung giúp tái tạo tinh thần tích cực.",
        href: "/giai-tri-thien-lanh",
      },
      {
        title: "Về trang chủ",
        description: "Xem lại cấu trúc tổng thể để chọn nhánh phù hợp nhất lúc này.",
        href: "/",
      },
    ],
    primaryCta: {
      label: "Vào nhánh Dinh dưỡng thiện lành",
      href: "/dinh-duong-thien-lanh",
    },
  },
  "giai-tri-thien-lanh": {
    slug: "giai-tri-thien-lanh",
    title: "Giải trí thiện lành",
    heroKicker: "Nhánh mở rộng",
    description:
      "Nhánh này định hướng lựa chọn giải trí có ích: giúp thư giãn, hồi phục và mở rộng nhận thức thay vì kéo dài quá tải.",
    clusters: [
      {
        id: "dinh-huong",
        title: "Định hướng nhánh",
        summary: "Khung nội dung sẽ tập trung tiêu chí chọn lọc giải trí lành mạnh trong đời sống số.",
        href: "/giai-tri-thien-lanh#dinh-huong",
      },
      {
        id: "bo-loc-noi-dung",
        title: "Bộ lọc nội dung",
        summary: "Gợi ý cách lọc nội dung để giữ năng lượng tích cực và giảm tiêu thụ thói quen thiếu chọn lọc.",
        href: "/giai-tri-thien-lanh#bo-loc-noi-dung",
      },
      {
        id: "mo-rong-sau",
        title: "Lộ trình mở rộng",
        summary: "Nội dung sâu sẽ mở theo giai đoạn sau khi nhánh Dinh dưỡng hoàn thiện đủ nền.",
        href: "/giai-tri-thien-lanh#mo-rong-sau",
      },
    ],
    relatedDirections: [
      {
        title: "Bắt đầu từ Dinh dưỡng thiện lành",
        description: "Đi từ nhánh trọng tâm để có nền hiểu biết trước khi mở rộng sang thói quen giải trí.",
        href: "/dinh-duong-thien-lanh",
      },
      {
        title: "Sang Hành động thiện lành",
        description: "Chuyển năng lượng phục hồi thành các hành động thiết thực trong đời sống thường ngày.",
        href: "/hanh-dong-thien-lanh",
      },
      {
        title: "Về trang chủ",
        description: "Xem toàn bộ 5 nhánh và chọn hướng đọc phù hợp nhất hiện tại.",
        href: "/",
      },
    ],
    primaryCta: {
      label: "Vào nhánh Dinh dưỡng thiện lành",
      href: "/dinh-duong-thien-lanh",
    },
  },
};

