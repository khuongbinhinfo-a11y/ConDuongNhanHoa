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
    { label: "Hiểu lại điều quen", href: "#" },
    { label: "Sống khỏe dễ hiểu", href: "#" },
    { label: "Câu chuyện thay đổi", href: "#" },
    { label: "Bắt đầu từ đâu", href: "/quiz" },
    { label: "Góc nhìn nhân ái", href: "#" },
  ] satisfies HeaderLink[],
  headerCta: { label: "Đồng hành", href: "#" },
  hero: {
    eyebrow: "Editorial Wellness",
    title: "Hiểu lại để sống tốt hơn",
    subtitle:
      "Nhìn sâu điều quen, sống khỏe từ hiểu biết, bắt đầu thay đổi từ những điều nhỏ.",
    primaryCta: { label: "Khám phá ngay", href: "#" },
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
        href: "#",
      },
      {
        title: "Sống Khỏe Dễ Hiểu",
        description: "Nội dung đơn giản, rõ ràng, gần với đời sống thường ngày.",
        href: "#",
      },
      {
        title: "Bắt Đầu Từ Những Thay Đổi Nhỏ",
        description: "Những bước nhỏ, dễ làm, đủ thực tế để bắt đầu ngay.",
        href: "#",
      },
    ] satisfies EntryCardContent[],
  },
};
