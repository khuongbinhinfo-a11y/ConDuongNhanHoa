export type HeaderLink = {
  label: string;
  href: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  image: { src: string; alt: string };
};

export type EntryCardContent = {
  title: string;
  description: string;
  href: string;
};

export const homepageData = {
  brandName: "Con Đường Nhân Hòa",
  headerLinks: [
    { label: "Trang chủ", href: "/" },
    { label: "Hiểu lại điều quen", href: "/hieu-lai-dieu-quen" },
    { label: "Sống khỏe dễ hiểu", href: "/song-khoe-de-hieu" },
    { label: "Câu chuyện thay đổi", href: "/cau-chuyen-thay-doi" },
    { label: "Bắt đầu từ đâu", href: "/quiz" },
    { label: "Góc nhìn nhân ái", href: "/goc-nhin-nhan-ai" },
  ] satisfies HeaderLink[],
  headerCta: { label: "Đồng hành", href: "/quiz" },
  hero: {
    eyebrow: "Editorial Wellness",
    title: "Hiểu lại để sống tốt hơn",
    subtitle:
      "Nhìn sâu điều quen, sống khỏe từ hiểu biết, bắt đầu thay đổi từ những điều nhỏ.",
    primaryCta: { label: "Khám phá ngay", href: "/quiz" },
    secondaryCta: { label: "Xem hướng bắt đầu", href: "/quiz" },
    image: {
      src: "/images/hero-wellness.jpg",
      alt: "Người phụ nữ ngắm nhìn thiên nhiên trong buổi sáng yên tĩnh",
    },
  } satisfies HeroContent,
  entrySection: {
    title: "Bắt đầu từ điều phù hợp nhất",
    cards: [
      {
        title: "Hiểu Lại Điều Quen",
        description: "Mở lại những điều vốn quá quen để nhìn rõ hơn điều thật sự quan trọng.",
        href: "/hieu-lai-dieu-quen",
      },
      {
        title: "Sống Khỏe Dễ Hiểu",
        description: "Nội dung đơn giản, rõ ràng, gần với đời sống thường ngày.",
        href: "/song-khoe-de-hieu",
      },
      {
        title: "Bắt Đầu Từ Những Thay Đổi Nhỏ",
        description: "Những bước nhỏ, dễ làm, đủ thực tế để bắt đầu ngay.",
        href: "/thay-doi-nho",
      },
    ] satisfies EntryCardContent[],
  },
};
