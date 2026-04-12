export type HeaderLinkKey =
  | "home"
  | "rethink"
  | "wellness"
  | "stories"
  | "startHere"
  | "compassion";

export type EntryCardKey = "rethink" | "wellness" | "smallSteps";
export type FeaturedCardKey = "first" | "second" | "third";

export const homepageConfig = {
  headerLinks: [
    { key: "home", href: "/" },
    { key: "rethink", href: "/hieu-lai-dieu-quen" },
    { key: "wellness", href: "/song-khoe-de-hieu" },
    { key: "stories", href: "/cau-chuyen-thay-doi" },
    { key: "startHere", href: "/bat-dau-tu-dau" },
    { key: "compassion", href: "/goc-nhin-nhan-ai" },
  ] as const satisfies ReadonlyArray<{ key: HeaderLinkKey; href: string }>,

  headerCtaHref: "/bat-dau-tu-dau",

  hero: {
    primaryCtaHref: "/bat-dau-tu-dau",
    image: {
      src: "/images/hero-wellness.jpg",
      alt: {
        vi: "Người phụ nữ ngắm nhìn thiên nhiên trong buổi sáng yên tĩnh",
        en: "A woman looking at nature in a calm morning",
      },
    },
  },

  entryCards: [
    { key: "rethink", href: "/hieu-lai-dieu-quen" },
    { key: "wellness", href: "/song-khoe-de-hieu" },
    { key: "smallSteps", href: "/thay-doi-nho" },
  ] as const satisfies ReadonlyArray<{ key: EntryCardKey; href: string }>,

  featuredCards: [
    { key: "first", href: "/hieu-lai-dieu-quen" },
    { key: "second", href: "/song-khoe-de-hieu" },
    { key: "third", href: "/thay-doi-nho" },
  ] as const satisfies ReadonlyArray<{ key: FeaturedCardKey; href: string }>,

  endingCtaHref: "/bat-dau-tu-dau",
} as const;
