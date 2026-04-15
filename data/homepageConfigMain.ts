export type HeaderLinkMainKey =
  | "home"
  | "nutrition"
  | "medicine"
  | "action"
  | "speech"
  | "thought"
  | "entertainment"
  | "laughter"
  | "about";

export type EntryCardMainKey = "nutrition" | "medicine" | "action" | "speech" | "thought" | "entertainment" | "laughter";
export type FocusCardMainKey = "foundation" | "documentary" | "practice";
export type NutritionFeaturedCardMainKey = "foundationalReads" | "documentaryViews" | "specializedTopics";
export type ExpansionCardMainKey = "medicine" | "action" | "speech" | "thought" | "entertainment" | "laughter";

export const homepageMainConfig = {
  headerLinks: [
    { key: "home", href: "/" },
    { key: "nutrition", href: "/dinh-duong-thien-lanh" },
    { key: "medicine", href: "/y-hoc-thien-lanh" },
    { key: "action", href: "/hanh-dong-thien-lanh" },
    { key: "speech", href: "/loi-noi-thien-lanh" },
    { key: "thought", href: "/suy-nghi-thien-lanh" },
    { key: "entertainment", href: "/giai-tri-thien-lanh" },
    { key: "laughter", href: "/coi-vui-cuoi" },
    { key: "about", href: "/gioi-thieu" },
  ] as const satisfies ReadonlyArray<{ key: HeaderLinkMainKey; href: string }>,

  headerCtaHref: "/dinh-duong-thien-lanh",

  hero: {
    primaryCtaHref: "/dinh-duong-thien-lanh",
    secondaryCtaHref: "/#entry-cards",
    image: {
      src: "/images/hero-wellness.jpg",
      alt: {
        vi: "Bàn ăn lành mạnh với rau củ tươi dưới ánh sáng tự nhiên",
        en: "A wholesome table setting with fresh vegetables in natural light",
      },
    },
  },

  entryCards: [
    { key: "nutrition", href: "/dinh-duong-thien-lanh" },
    { key: "medicine", href: "/y-hoc-thien-lanh" },
    { key: "action", href: "/hanh-dong-thien-lanh" },
    { key: "speech", href: "/loi-noi-thien-lanh" },
    { key: "thought", href: "/suy-nghi-thien-lanh" },
    { key: "entertainment", href: "/giai-tri-thien-lanh" },
    { key: "laughter", href: "/coi-vui-cuoi" },
  ] as const satisfies ReadonlyArray<{ key: EntryCardMainKey; href: string }>,

  focusCards: [
    { key: "foundation", href: "/dinh-duong-thien-lanh#kien-thuc-nen-tang" },
    { key: "documentary", href: "/dinh-duong-thien-lanh#phim-tai-lieu-goc-nhin" },
    { key: "practice", href: "/dinh-duong-thien-lanh#hanh-trinh-thuc-hanh" },
  ] as const satisfies ReadonlyArray<{ key: FocusCardMainKey; href: string }>,

  nutritionFeaturedCards: [
    { key: "foundationalReads", href: "/dinh-duong-thien-lanh#kien-thuc-nen-tang" },
    { key: "documentaryViews", href: "/dinh-duong-thien-lanh#phim-tai-lieu-goc-nhin" },
    { key: "specializedTopics", href: "/dinh-duong-thien-lanh#bai-viet-chuyen-de" },
  ] as const satisfies ReadonlyArray<{ key: NutritionFeaturedCardMainKey; href: string }>,

  expansionCards: [
    { key: "medicine", href: "/y-hoc-thien-lanh" },
    { key: "action", href: "/hanh-dong-thien-lanh" },
    { key: "speech", href: "/loi-noi-thien-lanh" },
    { key: "thought", href: "/suy-nghi-thien-lanh" },
    { key: "entertainment", href: "/giai-tri-thien-lanh" },
    { key: "laughter", href: "/coi-vui-cuoi" },
  ] as const satisfies ReadonlyArray<{ key: ExpansionCardMainKey; href: string }>,

  endingCtaHref: "/dinh-duong-thien-lanh",
} as const;
