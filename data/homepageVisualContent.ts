export type FeaturedPathCard = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
};

export type FeaturedPathsContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  cards: FeaturedPathCard[];
};

export type ClosingEditorialContent = {
  kicker: string;
  title: string;
  subtitle: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
};

export const featuredPathsContent: FeaturedPathsContent = {
  eyebrow: "Lối đọc nổi bật",
  title: "Bắt đầu từ những gì dễ chạm nhất",
  subtitle: "Một vài hướng đọc giúp bạn vào nhịp nhẹ hơn nếu chưa biết bắt đầu từ đâu.",
  cards: [
    {
      title: "Điều quen nhưng đáng để nhìn lại",
      description: "Những điều tưởng như bình thường đôi khi lại là điểm cần hiểu sâu hơn.",
      href: "/hieu-lai-dieu-quen",
      ctaLabel: "Đọc tiếp",
    },
    {
      title: "Sống khỏe theo cách dễ hiểu hơn",
      description: "Các bài viết ngắn, sáng và thực tế để giảm cảm giác quá tải thông tin.",
      href: "/song-khoe-de-hieu",
      ctaLabel: "Đọc tiếp",
    },
    {
      title: "Thay đổi nhỏ nhưng đi được lâu",
      description: "Bắt đầu từ bước vừa sức để giữ được nhịp thay đổi bền hơn.",
      href: "/thay-doi-nho",
      ctaLabel: "Đọc tiếp",
    },
  ],
};

export const closingEditorialContent: ClosingEditorialContent = {
  kicker: "Điểm dừng nhẹ",
  title: "Không cần thay đổi thật nhiều.",
  subtitle: "Chỉ cần bắt đầu đúng nhịp.",
  description: "Một lối đi phù hợp thường bắt đầu từ điều đang chạm tới mình nhất lúc này.",
  cta: {
    label: "Xem hướng bắt đầu",
    href: "/bat-dau-tu-dau",
  },
};
