export type ReadingHubSlug =
  | "hieu-lai-dieu-quen"
  | "song-khoe-de-hieu"
  | "thay-doi-nho"
  | "cau-chuyen-thay-doi"
  | "goc-nhin-nhan-ai";

export type ReadingHubCard = {
  id: string;
  title: string;
  summary: string;
  href: string;
};

export type ReadingHubContent = {
  slug: ReadingHubSlug;
  title: string;
  heroKicker: string;
  description: string;
  cards: ReadingHubCard[];
};

export const readingHubs: Record<ReadingHubSlug, ReadingHubContent> = {
  "hieu-lai-dieu-quen": {
    slug: "hieu-lai-dieu-quen",
    title: "Hiểu Lại Điều Quen",
    heroKicker: "Lối đọc gợi mở",
    description:
      "Một không gian đọc chậm để nhìn rõ điều vốn quen thuộc. Bắt đầu từ góc nhìn, rồi mới đến thay đổi.",
    cards: [
      {
        id: "goi-y-1",
        title: "Vì sao điều quen thuộc vẫn khiến mình mệt?",
        summary: "Đi từ nhịp sống hằng ngày để nhận ra nguồn gốc của sự quá tải.",
        href: "/hieu-lai-dieu-quen#goi-y-1",
      },
      {
        id: "goi-y-2",
        title: "Sống chậm mà không tụt lại",
        summary: "Một cách nhìn lại nhịp sống để vừa bình tĩnh vừa hiệu quả.",
        href: "/hieu-lai-dieu-quen#goi-y-2",
      },
      {
        id: "goi-y-3",
        title: "Ba lớp của một thói quen: nghĩ, làm, lặp lại",
        summary: "Hiểu cấu trúc thói quen trước khi cố gắng thay đổi nó.",
        href: "/hieu-lai-dieu-quen#goi-y-3",
      },
    ],
  },
  "song-khoe-de-hieu": {
    slug: "song-khoe-de-hieu",
    title: "Sống Khỏe Dễ Hiểu",
    heroKicker: "Lối đọc rõ ràng",
    description:
      "Thông tin sức khỏe được viết gọn, sáng và dễ áp dụng. Ít thuật ngữ, nhiều điều có thể làm ngay.",
    cards: [
      {
        id: "goi-y-1",
        title: "Ngủ đủ là gì theo cách dễ hiểu nhất",
        summary: "Tóm tắt nguyên tắc quan trọng để cải thiện chất lượng giấc ngủ.",
        href: "/song-khoe-de-hieu#goi-y-1",
      },
      {
        id: "goi-y-2",
        title: "Ăn uống lành mạnh mà không cần quá nhiều quy tắc",
        summary: "Các nguyên tắc đơn giản để ăn bền vững và ít áp lực.",
        href: "/song-khoe-de-hieu#goi-y-2",
      },
      {
        id: "goi-y-3",
        title: "Vận động nhẹ mỗi ngày: bắt đầu từ đâu",
        summary: "Lộ trình dễ theo để cơ thể linh hoạt hơn sau một tuần.",
        href: "/song-khoe-de-hieu#goi-y-3",
      },
    ],
  },
  "thay-doi-nho": {
    slug: "thay-doi-nho",
    title: "Bắt Đầu Từ Những Thay Đổi Nhỏ",
    heroKicker: "Lối đọc vừa sức",
    description:
      "Đi từng bước nhỏ, đủ gần để bắt đầu ngay hôm nay. Không ép nhanh, ưu tiên sự đều đặn và thực tế.",
    cards: [
      {
        id: "goi-y-1",
        title: "Bảy ngày cho một thay đổi nhỏ",
        summary: "Chọn một việc đơn giản và duy trì theo nhịp thực tế.",
        href: "/thay-doi-nho#goi-y-1",
      },
      {
        id: "goi-y-2",
        title: "Khi thiếu động lực: bắt đầu bằng việc nhỏ nhất",
        summary: "Giảm ngưỡng bắt đầu để không bỏ cuộc giữa chừng.",
        href: "/thay-doi-nho#goi-y-2",
      },
      {
        id: "goi-y-3",
        title: "Theo dõi tiến bộ mà không tự gây áp lực",
        summary: "Đo lường bằng sự đều đặn thay vì hoàn hảo.",
        href: "/thay-doi-nho#goi-y-3",
      },
    ],
  },
  "cau-chuyen-thay-doi": {
    slug: "cau-chuyen-thay-doi",
    title: "Câu Chuyện Thay Đổi",
    heroKicker: "Lối đọc truyền cảm hứng",
    description:
      "Những hành trình thật giúp bạn thấy thay đổi bền vững là có thể. Đủ chân thành, đủ gần với đời sống.",
    cards: [
      {
        id: "goi-y-1",
        title: "Từ mất cân bằng đến nhịp sống ổn định",
        summary: "Hành trình thay đổi từng bước sau giai đoạn kiệt sức.",
        href: "/cau-chuyen-thay-doi#goi-y-1",
      },
      {
        id: "goi-y-2",
        title: "Không làm quá nhiều, chỉ làm đều",
        summary: "Câu chuyện giữ thói quen nhỏ trong cuộc sống bận rộn.",
        href: "/cau-chuyen-thay-doi#goi-y-2",
      },
      {
        id: "goi-y-3",
        title: "Khi một cộng đồng nhỏ giúp mình đi tiếp",
        summary: "Sức mạnh của việc có người đồng hành trong thay đổi lối sống.",
        href: "/cau-chuyen-thay-doi#goi-y-3",
      },
    ],
  },
  "goc-nhin-nhan-ai": {
    slug: "goc-nhin-nhan-ai",
    title: "Góc Nhìn Nhân Ái",
    heroKicker: "Lối đọc dịu dàng",
    description:
      "Một vùng đọc nuôi dưỡng sự tử tế và kết nối. Nhẹ nhàng, bao dung, không phán xét.",
    cards: [
      {
        id: "goi-y-1",
        title: "Tử tế với bản thân không phải là nuông chiều",
        summary: "Phân biệt sự dịu dàng lành mạnh và sự buông xuôi.",
        href: "/goc-nhin-nhan-ai#goi-y-1",
      },
      {
        id: "goi-y-2",
        title: "Lắng nghe người khác mà không đánh mất mình",
        summary: "Giữ ranh giới mềm trong giao tiếp và chăm sóc cảm xúc.",
        href: "/goc-nhin-nhan-ai#goi-y-2",
      },
      {
        id: "goi-y-3",
        title: "Sự bình an đến từ những cử chỉ nhỏ mỗi ngày",
        summary: "Nuôi lại cảm giác kết nối bằng các thực hành đơn giản.",
        href: "/goc-nhin-nhan-ai#goi-y-3",
      },
    ],
  },
};
