export type SlotKind = "hero" | "topic" | "post";
export type SlotBranch = "dinh-duong" | "ung-xu";

export type ImageSlot = {
  /** Unique identifier used as the key in imageManifest.generated.ts */
  id: string;
  branch: SlotBranch;
  kind: SlotKind;
  /** Path relative to /public — e.g. "images/dinh-duong/topics" */
  targetDir: string;
  /** Filename without extension — extension is preserved from the source file */
  targetBaseName: string;
  /**
   * The slot to try next when this slot has no image.
   * Empty string means "no explicit fallback; use branch hero".
   */
  fallbackSlotId: string;
};

/**
 * Master list of image slots, in the order the auto-assign script fills them.
 * Do NOT change the order — it determines which unassigned image gets which slot.
 */
export const imageSlots: ImageSlot[] = [
  // ─── Dinh dưỡng ──────────────────────────────────────────────────────────
  {
    id: "dinh-duong.hero",
    branch: "dinh-duong",
    kind: "hero",
    targetDir: "images/dinh-duong",
    targetBaseName: "hero-dinh-duong-thien-lanh",
    fallbackSlotId: "",
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

  // ─── Ứng xử ──────────────────────────────────────────────────────────────
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
];
