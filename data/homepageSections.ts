export type FeaturedReadingCard = {
  kicker: string;
  title: string;
  summary: string;
  href: string;
  ctaLabel: string;
};

export type FeaturedReadingSectionContent = {
  eyebrow: string;
  title: string;
  description: string;
  cards: FeaturedReadingCard[];
};

export type ClosingInvitationSectionContent = {
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
};

export const featuredReadingSectionData: FeaturedReadingSectionContent = {
  eyebrow: "Nội Dung Nổi Bật",
  title: "Một vài lối đọc đang được quan tâm",
  description: "Chọn một nhịp đọc gần với hiện tại của bạn để bắt đầu nhẹ nhàng hơn.",
  cards: [
    {
      kicker: "Hiểu lại điều quen",
      title: "Nhìn lại điều quen để hiểu điều đang làm mình mệt",
      summary: "Những góc nhìn chậm, rõ và đủ gần để thấy lại điều vốn tưởng đã hiểu.",
      href: "/hieu-lai-dieu-quen",
      ctaLabel: "Đọc hướng này",
    },
    {
      kicker: "Sống khỏe dễ hiểu",
      title: "Tự chăm mình bằng kiến thức rõ ràng, dễ áp dụng",
      summary: "Các nội dung ngắn gọn, thực tế và bám sát đời sống hàng ngày.",
      href: "/song-khoe-de-hieu",
      ctaLabel: "Xem bài gợi ý",
    },
    {
      kicker: "Thay đổi từng bước",
      title: "Bắt đầu bằng thay đổi nhỏ, đủ đều để thành nếp mới",
      summary: "Một vài bước khởi động vừa sức để đi tiếp mà không bị quá tải.",
      href: "/thay-doi-nho",
      ctaLabel: "Bắt đầu từ đây",
    },
  ],
};

export const closingInvitationSectionData: ClosingInvitationSectionContent = {
  title: "Đủ chậm để hiểu mình, đủ rõ để đi tiếp.",
  description:
    "Nếu bạn chưa chắc nên đọc từ đâu trước, hãy bắt đầu bằng một câu hỏi ngắn để web gợi ý hướng phù hợp.",
  cta: {
    label: "Làm quiz định hướng",
    href: "/bat-dau-tu-dau",
  },
};
