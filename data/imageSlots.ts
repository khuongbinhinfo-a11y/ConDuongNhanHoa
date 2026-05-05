export type SlotKind = "hero" | "topic" | "post" | "section";
export type SlotBranch =
  | "dinh-duong"
  | "ung-xu"
  | "y-hoc"
  | "hanh-dong"
  | "loi-noi"
  | "suy-nghi"
  | "giai-tri"
  | "coi-vui-cuoi";

export type ImageSlot = {
  /** Unique identifier used as the key in imageManifest.generated.ts */
  id: string;
  branch: SlotBranch;
  kind: SlotKind;
  /** Path relative to /public â€” e.g. "images/dinh-duong/topics" */
  targetDir: string;
  /** Filename without extension â€” extension is preserved from the source file */
  targetBaseName: string;
  /**
   * The slot to try next when this slot has no image.
   * Empty string means "no explicit fallback; use branch hero".
   */
  fallbackSlotId: string;
};
/**
 * Master list of image slots, in the order the auto-assign script fills them.
 * Do NOT change the order â€” it determines which unassigned image gets which slot.
 */
export const imageSlots: ImageSlot[] = [
  // â”€â”€â”€ Dinh dÆ°á»¡ng â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "dinh-duong.hero",
    branch: "dinh-duong",
    kind: "hero",
    targetDir: "images/dinh-duong",
    targetBaseName: "hero-dinh-duong-thien-lanh",
    fallbackSlotId: "",
  },
  {
    id: "dinh-duong.hero.landing",
    branch: "dinh-duong",
    kind: "hero",
    targetDir: "images/dinh-duong",
    targetBaseName: "hero-landing-nutrition",
    fallbackSlotId: "dinh-duong.hero",
  },
  {
    id: "dinh-duong.hero.sua-wth",
    branch: "dinh-duong",
    kind: "hero",
    targetDir: "images/dinh-duong",
    targetBaseName: "hero-sua-wth",
    fallbackSlotId: "dinh-duong.hero",
  },
  {
    id: "dinh-duong.hero.chat-dam-wth",
    branch: "dinh-duong",
    kind: "hero",
    targetDir: "images/dinh-duong",
    targetBaseName: "hero-chat-dam-wth",
    fallbackSlotId: "dinh-duong.topic.chat-dam-hang-ngay",
  },
  {
    id: "dinh-duong.hero.chuyen-hoa-wth",
    branch: "dinh-duong",
    kind: "hero",
    targetDir: "images/dinh-duong",
    targetBaseName: "hero-chuyen-hoa-wth",
    fallbackSlotId: "dinh-duong.topic.dai-thao-duong-beo-phi-chuyen-hoa",
  },
  {
    id: "dinh-duong.hero.ung-thu-va-bua-an-wth",
    branch: "dinh-duong",
    kind: "hero",
    targetDir: "images/dinh-duong",
    targetBaseName: "hero-ung-thu-va-bua-an-wth",
    fallbackSlotId: "dinh-duong.topic.ung-thu-va-goc-nhin-tu-bua-an",
  },
  {
    id: "dinh-duong.topic.kien-thuc-nen-tang",
    branch: "dinh-duong",
    kind: "topic",
    targetDir: "images/dinh-duong/topics",
    targetBaseName: "topic-kien-thuc-nen-tang",
    fallbackSlotId: "dinh-duong.hero",
  },
  {
    id: "dinh-duong.topic.sua-va-nhung-dieu-thuong-tin",
    branch: "dinh-duong",
    kind: "topic",
    targetDir: "images/dinh-duong/topics",
    targetBaseName: "topic-sua-va-nhung-dieu-thuong-tin",
    fallbackSlotId: "dinh-duong.hero",
  },
  {
    id: "dinh-duong.topic.chat-dam-hang-ngay",
    branch: "dinh-duong",
    kind: "topic",
    targetDir: "images/dinh-duong/topics",
    targetBaseName: "topic-chat-dam-hang-ngay",
    fallbackSlotId: "dinh-duong.hero",
  },
  {
    id: "dinh-duong.topic.dai-thao-duong-beo-phi-chuyen-hoa",
    branch: "dinh-duong",
    kind: "topic",
    targetDir: "images/dinh-duong/topics",
    targetBaseName: "topic-dai-thao-duong-beo-phi-chuyen-hoa",
    fallbackSlotId: "dinh-duong.hero",
  },
  {
    id: "dinh-duong.topic.ung-thu-va-goc-nhin-tu-bua-an",
    branch: "dinh-duong",
    kind: "topic",
    targetDir: "images/dinh-duong/topics",
    targetBaseName: "topic-ung-thu-va-goc-nhin-tu-bua-an",
    fallbackSlotId: "dinh-duong.hero",
  },
  {
    id: "dinh-duong.post.01",
    branch: "dinh-duong",
    kind: "post",
    targetDir: "images/dinh-duong/posts",
    targetBaseName: "post-dinh-duong-01",
    fallbackSlotId: "dinh-duong.hero",
  },
  {
    id: "dinh-duong.post.02",
    branch: "dinh-duong",
    kind: "post",
    targetDir: "images/dinh-duong/posts",
    targetBaseName: "post-dinh-duong-02",
    fallbackSlotId: "dinh-duong.hero",
  },
  {
    id: "dinh-duong.post.03",
    branch: "dinh-duong",
    kind: "post",
    targetDir: "images/dinh-duong/posts",
    targetBaseName: "post-dinh-duong-03",
    fallbackSlotId: "dinh-duong.hero",
  },

  // â”€â”€â”€ á»¨ng xá»­ â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "ung-xu.hero",
    branch: "ung-xu",
    kind: "hero",
    targetDir: "images/ung-xu",
    targetBaseName: "hero-ung-xu-thien-lanh",
    fallbackSlotId: "",
  },
  {
    id: "ung-xu.topic.hieu-minh-de-song-nhe-hon",
    branch: "ung-xu",
    kind: "topic",
    targetDir: "images/ung-xu/topics",
    targetBaseName: "topic-hieu-minh-de-song-nhe-hon",
    fallbackSlotId: "ung-xu.hero",
  },
  {
    id: "ung-xu.topic.ung-xu-trong-gia-dinh",
    branch: "ung-xu",
    kind: "topic",
    targetDir: "images/ung-xu/topics",
    targetBaseName: "topic-ung-xu-trong-gia-dinh",
    fallbackSlotId: "ung-xu.hero",
  },
  {
    id: "ung-xu.topic.loi-noi-va-giao-tiep",
    branch: "ung-xu",
    kind: "topic",
    targetDir: "images/ung-xu/topics",
    targetBaseName: "topic-loi-noi-va-giao-tiep",
    fallbackSlotId: "ung-xu.hero",
  },
  {
    id: "ung-xu.topic.ra-ngoai-xa-hoi-voi-su-tu-te",
    branch: "ung-xu",
    kind: "topic",
    targetDir: "images/ung-xu/topics",
    targetBaseName: "topic-ra-ngoai-xa-hoi-voi-su-tu-te",
    fallbackSlotId: "ung-xu.hero",
  },
  {
    id: "ung-xu.topic.nhung-tinh-huong-de-gap-trong-doi-song",
    branch: "ung-xu",
    kind: "topic",
    targetDir: "images/ung-xu/topics",
    targetBaseName: "topic-nhung-tinh-huong-de-gap-trong-doi-song",
    fallbackSlotId: "ung-xu.hero",
  },
  {
    id: "ung-xu.post.01",
    branch: "ung-xu",
    kind: "post",
    targetDir: "images/ung-xu/posts",
    targetBaseName: "post-ung-xu-01",
    fallbackSlotId: "ung-xu.hero",
  },
  {
    id: "ung-xu.post.02",
    branch: "ung-xu",
    kind: "post",
    targetDir: "images/ung-xu/posts",
    targetBaseName: "post-ung-xu-02",
    fallbackSlotId: "ung-xu.hero",
  },
  {
    id: "ung-xu.post.03",
    branch: "ung-xu",
    kind: "post",
    targetDir: "images/ung-xu/posts",
    targetBaseName: "post-ung-xu-03",
    fallbackSlotId: "ung-xu.hero",
  },

  // \u2500\u2500\u2500 Y h\u1ecdc thi\u1ec7n l\u00e0nh \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  {
    id: "y-hoc.hero",
    branch: "y-hoc",
    kind: "hero",
    targetDir: "images/y-hoc",
    targetBaseName: "hero-y-hoc-thien-lanh",
    fallbackSlotId: "",
  },

  // \u2500\u2500\u2500 H\u00e0nh \u0111\u1ed9ng thi\u1ec7n l\u00e0nh \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  {
    id: "hanh-dong.hero",
    branch: "hanh-dong",
    kind: "hero",
    targetDir: "images/hanh-dong",
    targetBaseName: "hero-hanh-dong-thien-lanh",
    fallbackSlotId: "ung-xu.hero",
  },
  {
    id: "hanh-dong.fallback",
    branch: "hanh-dong",
    kind: "hero",
    targetDir: "images/hanh-dong",
    targetBaseName: "fallback-hanh-dong-thien-lanh",
    fallbackSlotId: "ung-xu.hero",
  },
  {
    id: "hanh-dong.topic.hieu-minh-de-song-nhe-hon",
    branch: "hanh-dong",
    kind: "topic",
    targetDir: "images/hanh-dong/topics",
    targetBaseName: "topic-hieu-minh-song-nhe",
    fallbackSlotId: "ung-xu.topic.hieu-minh-de-song-nhe-hon",
  },
  {
    id: "hanh-dong.topic.ung-xu-trong-gia-dinh",
    branch: "hanh-dong",
    kind: "topic",
    targetDir: "images/hanh-dong/topics",
    targetBaseName: "topic-ung-xu-trong-gia-dinh",
    fallbackSlotId: "ung-xu.hero",
  },
  {
    id: "hanh-dong.topic.loi-noi-va-giao-tiep",
    branch: "hanh-dong",
    kind: "topic",
    targetDir: "images/hanh-dong/topics",
    targetBaseName: "topic-loi-noi-va-giao-tiep",
    fallbackSlotId: "ung-xu.topic.loi-noi-va-giao-tiep",
  },
  {
    id: "hanh-dong.topic.ra-ngoai-xa-hoi-voi-su-tu-te",
    branch: "hanh-dong",
    kind: "topic",
    targetDir: "images/hanh-dong/topics",
    targetBaseName: "topic-tu-te-ngoai-xa-hoi",
    fallbackSlotId: "ung-xu.hero",
  },
  {
    id: "hanh-dong.topic.nhung-tinh-huong-de-gap-trong-doi-song",
    branch: "hanh-dong",
    kind: "topic",
    targetDir: "images/hanh-dong/topics",
    targetBaseName: "topic-tinh-huong-thuong-gap",
    fallbackSlotId: "ung-xu.topic.nhung-tinh-huong-de-gap-trong-doi-song",
  },
  {
    id: "hanh-dong.section.bat-dau-trong-7-ngay",
    branch: "hanh-dong",
    kind: "section",
    targetDir: "images/hanh-dong/sections",
    targetBaseName: "section-bat-dau-trong-7-ngay",
    fallbackSlotId: "hanh-dong.hero",
  },
  {
    id: "hanh-dong.topic.giu-ket-noi-khi-bat-dong",
    branch: "hanh-dong",
    kind: "topic",
    targetDir: "images/hanh-dong/topics",
    targetBaseName: "topic-giu-ket-noi-khi-bat-dong",
    fallbackSlotId: "hanh-dong.fallback",
  },
  {
    id: "hanh-dong.topic.biet-khi-nao-lui-buoc",
    branch: "hanh-dong",
    kind: "topic",
    targetDir: "images/hanh-dong/topics",
    targetBaseName: "topic-biet-khi-nao-lui-buoc",
    fallbackSlotId: "hanh-dong.fallback",
  },
  {
    id: "hanh-dong.topic.cam-on-va-noi-nho-dung-luc",
    branch: "hanh-dong",
    kind: "topic",
    targetDir: "images/hanh-dong/topics",
    targetBaseName: "topic-cam-on-va-noi-nho-dung-luc",
    fallbackSlotId: "hanh-dong.fallback",
  },

  // \u2500\u2500\u2500 L\u1eddi n\u00f3i thi\u1ec7n l\u00e0nh \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  {
    id: "loi-noi.hero",
    branch: "loi-noi",
    kind: "hero",
    targetDir: "images/loi-noi",
    targetBaseName: "hero-loi-noi-thien-lanh",
    fallbackSlotId: "",
  },

  // \u2500\u2500\u2500 Suy ngh\u0129 thi\u1ec7n l\u00e0nh \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  {
    id: "suy-nghi.hero",
    branch: "suy-nghi",
    kind: "hero",
    targetDir: "images/suy-nghi",
    targetBaseName: "hero-suy-nghi-thien-lanh",
    fallbackSlotId: "",
  },

  // \u2500\u2500\u2500 Gi\u1ea3i tr\u00ed thi\u1ec7n l\u00e0nh \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  {
    id: "giai-tri.hero",
    branch: "giai-tri",
    kind: "hero",
    targetDir: "images/giai-tri",
    targetBaseName: "hero-giai-tri-thien-lanh",
    fallbackSlotId: "",
  },

  // \u2500\u2500\u2500 C\u01b0\u1eddi vui c\u01b0\u1eddi \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  {
    id: "coi-vui-cuoi.hero",
    branch: "coi-vui-cuoi",
    kind: "hero",
    targetDir: "images/coi-vui-cuoi",
    targetBaseName: "hero-coi-vui-cuoi",
    fallbackSlotId: "",
  },
];
