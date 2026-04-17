export type HeaderLinkI18nKey =
  | "home"
  | "nutrition"
  | "medicine"
  | "action"
  | "speech"
  | "thought"
  | "entertainment"
  | "laughter"
  | "about";

export type EntryCardI18nKey =
  | "nutrition"
  | "medicine"
  | "action"
  | "speech"
  | "thought"
  | "entertainment"
  | "laughter";
export type FocusCardI18nKey = "foundation" | "documentary" | "practice";
export type NutritionFeaturedCardI18nKey = "foundationalReads" | "documentaryViews" | "specializedTopics";
export type ExpansionCardI18nKey = "medicine" | "action" | "speech" | "thought" | "entertainment" | "laughter";

export const homepageConfigI18n = {
  headerLinks: [
    { key: "home", href: "/" },
    { key: "nutrition", href: "/dinh-duong-thien-lanh" },
    { key: "action", href: "/hanh-dong-thien-lanh" },
    { key: "entertainment", href: "/giai-tri-thien-lanh" },
    { key: "about", href: "/gioi-thieu" },
  ] as const satisfies ReadonlyArray<{ key: HeaderLinkI18nKey; href: string }>,

  headerCtaHref: "/dinh-duong-thien-lanh",

  hero: {
    primaryCtaHref: "/dinh-duong-thien-lanh",
    secondaryCtaHref: "/#entry-cards",
    image: {
      src: "/images/hero-wellness.jpg",
      alt: {
        vi: "Bàn ăn lành mạnh với rau củ tươi trong ánh sáng tự nhiên",
        en: "A wholesome table setting with fresh vegetables in natural light",
      },
    },
  },

  entryCards: [
    { key: "nutrition", href: "/dinh-duong-thien-lanh" },
    { key: "action", href: "/hanh-dong-thien-lanh" },
    { key: "entertainment", href: "/giai-tri-thien-lanh" },
  ] as const satisfies ReadonlyArray<{ key: EntryCardI18nKey; href: string }>,

  focusCards: [
    { key: "foundation", href: "/dinh-duong-thien-lanh#kien-thuc-nen-tang" },
    { key: "documentary", href: "/dinh-duong-thien-lanh#phim-tai-lieu-goc-nhin" },
    { key: "practice", href: "/dinh-duong-thien-lanh#hanh-trinh-thuc-hanh" },
  ] as const satisfies ReadonlyArray<{ key: FocusCardI18nKey; href: string }>,

  nutritionFeaturedCards: [
    { key: "foundationalReads", href: "/dinh-duong-thien-lanh#kien-thuc-nen-tang" },
    { key: "documentaryViews", href: "/dinh-duong-thien-lanh#phim-tai-lieu-goc-nhin" },
    { key: "specializedTopics", href: "/dinh-duong-thien-lanh#bai-viet-chuyen-de" },
  ] as const satisfies ReadonlyArray<{ key: NutritionFeaturedCardI18nKey; href: string }>,

  expansionCards: [
    { key: "medicine", href: "/y-hoc-thien-lanh" },
    { key: "action", href: "/hanh-dong-thien-lanh" },
    { key: "speech", href: "/loi-noi-thien-lanh" },
    { key: "thought", href: "/suy-nghi-thien-lanh" },
    { key: "entertainment", href: "/giai-tri-thien-lanh" },
    { key: "laughter", href: "/coi-vui-cuoi" },
  ] as const satisfies ReadonlyArray<{ key: ExpansionCardI18nKey; href: string }>,

  endingCtaHref: "/dinh-duong-thien-lanh",
} as const;
