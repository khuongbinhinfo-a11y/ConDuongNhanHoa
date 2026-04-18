import type { AppLocale } from "@/lib/locale";

export type ContentBranchSlug =
  | "dinh-duong-thien-lanh"
  | "y-hoc-thien-lanh"
  | "hanh-dong-thien-lanh"
  | "loi-noi-thien-lanh"
  | "suy-nghi-thien-lanh"
  | "giai-tri-thien-lanh"
  | "coi-vui-cuoi";

export type LocalizedText = Record<AppLocale, string>;

export type NutritionTopicCardI18n = {
  id: string;
  title: LocalizedText;
  summary: LocalizedText;
  bullets: LocalizedText[];
  question: LocalizedText;
  href: string;
  imageSlotId?: string;
};

export type NutritionWthCardI18n = {
  id: string;
  title: LocalizedText;
  story: LocalizedText;
  challengeQuestion: LocalizedText;
  seedIdeas: LocalizedText[];
  href: string;
  linkLabel: LocalizedText;
};

export type NutritionWthSectionI18n = {
  title: LocalizedText;
  description?: LocalizedText;
  cards: NutritionWthCardI18n[];
};

export type NutritionSeedCardI18n = {
  id: string;
  title: LocalizedText;
  lead: LocalizedText;
  prompts: LocalizedText[];
  href?: string;
};

export type NutritionSeedSectionI18n = {
  title: LocalizedText;
  description?: LocalizedText;
  cards: NutritionSeedCardI18n[];
};

export type NutritionFaqItemI18n = {
  question: LocalizedText;
  answer: LocalizedText;
};

export type NutritionFaqSectionI18n = {
  title: LocalizedText;
  items: NutritionFaqItemI18n[];
};

export type NutritionIntroStripI18n = {
  title: LocalizedText;
  items: LocalizedText[];
};

export type NutritionLandingI18n = {
  heroBadge: LocalizedText;
  heroTitle: LocalizedText;
  heroDescription: LocalizedText;
  heroPrimaryCtaLabel: LocalizedText;
  heroImageSlotId?: string;
  introStrip: NutritionIntroStripI18n;
  topics: NutritionTopicCardI18n[];
  wthSection: NutritionWthSectionI18n;
  seedSection: NutritionSeedSectionI18n;
  faqSection: NutritionFaqSectionI18n;
};

export type BranchClusterI18n = {
  id: string;
  title: LocalizedText;
  summary: LocalizedText;
  /** Optional open question shown below the summary to invite reflection. */
  prompt?: LocalizedText;
  href: string;
};

export type BranchDirectionI18n = {
  title: LocalizedText;
  description: LocalizedText;
  href: string;
};

/** A standalone documentary / perspective block that sits outside the topic cluster grid. */
export type DocumentaryBlockI18n = {
  title: LocalizedText;
  description: LocalizedText;
  /** Short axis labels the documentary block focuses on (e.g. "sữa", "chất đạm") */
  axes: LocalizedText[];
  href: string;
};

export type ContentBranchLandingI18n = {
  slug: ContentBranchSlug;
  title: LocalizedText;
  heroKicker: LocalizedText;
  description: LocalizedText;
  clusters: BranchClusterI18n[];
  /** Optional documentary / external-perspective block rendered below the cluster grid. */
  documentaryBlock?: DocumentaryBlockI18n;
  relatedDirections: BranchDirectionI18n[];
  nutritionLanding?: NutritionLandingI18n;
  primaryCta: {
    label: LocalizedText;
    href: string;
  };
};

export const contentBranchesI18n: Record<ContentBranchSlug, ContentBranchLandingI18n> = {
  "dinh-duong-thien-lanh": {
    slug: "dinh-duong-thien-lanh",
    title: {
      vi: "Dinh dưỡng thiện lành",
      en: "Wholesome Nutrition",
    },
    heroKicker: {
      vi: "Hiểu đúng trước, thay đổi sau",
      en: "Understand first, then change",
    },
    description: {
      vi: "Dinh dưỡng không bắt đầu từ chế độ ăn mà từ cách hiểu. Đây là nơi đặt lại những điều tưởng đã biết để nhìn rõ hơn trước khi chọn.",
      en: "Nutrition doesn't begin with a diet — it begins with understanding. This is where you revisit what you thought you knew, so you can choose more clearly.",
    },
    clusters: [
      {
        id: "kien-thuc-nen-tang",
        title: { vi: "Kiến thức nền tảng", en: "Foundational Knowledge" },
        summary: {
          vi: "Có những nguyên tắc dinh dưỡng cần hiểu trước khi theo bất kỳ cách ăn nào. Không phải để học thuộc, mà để tự nhận ra điều phù hợp.",
          en: "Some nutrition principles are worth understanding before following any eating approach — not to memorize, but to recognize what fits.",
        },
        prompt: {
          vi: "Bạn đang chọn cách ăn vì ai nói, hay vì mình thực sự hiểu?",
          en: "Are you eating a certain way because someone said to, or because you actually understand why?",
        },
        href: "/dinh-duong-thien-lanh#kien-thuc-nen-tang",
      },
      {
        id: "sua-va-nhung-dieu-thuong-tin",
        title: { vi: "Những điều thường được tin về sữa", en: "Common Beliefs About Milk" },
        summary: {
          vi: "Sữa là thực phẩm được bảo vệ bởi nhiều lớp thông tin. Đọc để hiểu nguồn gốc của niềm tin đó trước khi giữ hay bỏ.",
          en: "Milk is a food protected by many layers of messaging. Read to understand where those beliefs come from before deciding what to keep.",
        },
        prompt: {
          vi: "Sữa có thật sự cần thiết như nhiều người vẫn nghĩ?",
          en: "Is milk as essential as many people believe?",
        },
        href: "/dinh-duong-thien-lanh#sua-va-nhung-dieu-thuong-tin",
      },
      {
        id: "chat-dam-hang-ngay",
        title: { vi: "Chất đạm: hiểu sao cho đúng", en: "Protein: Understanding It Right" },
        summary: {
          vi: "Nỗi lo thiếu đạm xuất hiện ngay khi nhắc đến ăn ít thịt. Nhưng cơ thể thực sự cần bao nhiêu, và từ đâu?",
          en: "Worry about protein deficiency surfaces the moment eating less meat is mentioned. But how much does the body actually need, and from where?",
        },
        prompt: {
          vi: "Vì sao nỗi lo thiếu đạm lại dễ xuất hiện đến vậy?",
          en: "Why does protein deficiency worry appear so easily?",
        },
        href: "/dinh-duong-thien-lanh#chat-dam-hang-ngay",
      },
      {
        id: "suc-khoe-chuyen-hoa",
        title: { vi: "Sức khỏe chuyển hóa và bữa ăn hằng ngày", en: "Metabolic Health and Daily Eating" },
        summary: {
          vi: "Đái tháo đường, béo phì, và rối loạn chuyển hóa không chỉ là câu chuyện của đường hay mỡ. Bữa ăn hằng ngày có liên kết chặt hơn nhiều người tưởng.",
          en: "Diabetes, obesity, and metabolic disorders aren't just about sugar or fat. Daily eating is connected more tightly than most people realize.",
        },
        prompt: {
          vi: "Đái tháo đường có chỉ là câu chuyện của đường?",
          en: "Is diabetes only a story about sugar?",
        },
        href: "/dinh-duong-thien-lanh#suc-khoe-chuyen-hoa",
      },
      {
        id: "ung-thu-va-bua-an",
        title: { vi: "Ung thư và những câu hỏi từ bàn ăn", en: "Cancer and the Questions at the Table" },
        summary: {
          vi: "Không phải bữa ăn nào cũng gây ung thư. Nhưng có những thói quen ăn uống hằng ngày tích lũy nguy cơ lâu dài mà ít ai để ý.",
          en: "Not every meal causes cancer. But some daily eating habits quietly accumulate long-term risk in ways most people don't notice.",
        },
        prompt: {
          vi: "Bữa ăn hằng ngày có thể ảnh hưởng đến sức khỏe lâu dài ra sao?",
          en: "How might daily eating affect long-term health?",
        },
        href: "/dinh-duong-thien-lanh#ung-thu-va-bua-an",
      },
    ],
    documentaryBlock: {
      title: {
        vi: "Góc nhìn mở ra từ phim tài liệu",
        en: "Perspectives Opened by Documentary Film",
      },
      description: {
        vi: "Một số phim tài liệu về dinh dưỡng có thể làm thay đổi cách nhìn — và cũng có thể đơn giản hóa thái quá. Đặt trong ngữ cảnh đúng, chúng là điểm khởi đầu để đặt câu hỏi, không phải câu trả lời cuối cùng.",
        en: "Some nutrition documentaries can shift your perspective — and some can oversimplify. Placed in the right context, they're starting points for questions, not final answers.",
      },
      axes: [
        { vi: "Sữa và niềm tin phổ biến", en: "Milk and common beliefs" },
        { vi: "Chất đạm từ nguồn nào", en: "Protein and its sources" },
        { vi: "Đái tháo đường, béo phì và ung thư", en: "Diabetes, obesity and cancer" },
      ],
      href: "/dinh-duong-thien-lanh#goc-nhin-phim-tai-lieu",
    },
    relatedDirections: [
      {
        title: {
          vi: "Ứng xử thiện lành",
          en: "Wholesome Conduct",
        },
        description: {
          vi: "Từ bữa ăn đến cách sống — ứng xử với bản thân và người xung quanh cũng cần được nhìn lại.",
          en: "From the table to daily life — how we treat ourselves and others also deserves a second look.",
        },
        href: "/",
      },
      {
        title: {
          vi: "Giải trí thiện lành",
          en: "Wholesome Entertainment",
        },
        description: {
          vi: "Nội dung nhẹ nhàng, có chọn lọc — để thư giãn mà vẫn nuôi dưỡng.",
          en: "Light, curated content — restful without being empty.",
        },
        href: "/giai-tri-thien-lanh",
      },
      {
        title: {
          vi: "Trở về trang chủ",
          en: "Back to home",
        },
        description: {
          vi: "Xem lại bản đồ nội dung và chọn hướng tiếp theo phù hợp với mình.",
          en: "Review the content map and choose your next direction.",
        },
        href: "/",
      },
    ],
    primaryCta: {
      label: {
        vi: "Xem góc nhìn từ phim tài liệu",
        en: "View documentary perspectives",
      },
      href: "/dinh-duong-thien-lanh#goc-nhin-phim-tai-lieu",
    },
  },
  "y-hoc-thien-lanh": {
    slug: "y-hoc-thien-lanh",
    title: { vi: "Y học thiện lành", en: "Wholesome Medicine" },
    heroKicker: { vi: "Nhánh mở rộng ưu tiên", en: "Guided expansion branch" },
    description: {
      vi: "Góc nhìn sức khỏe lành mạnh, phòng ngừa và chăm sóc từ nền tảng.",
      en: "A grounded approach to health, prevention, and well-being.",
    },
    clusters: [
      {
        id: "tong-quan",
        title: { vi: "Tổng quan", en: "Overview" },
        summary: {
          vi: "Bản đồ khởi đầu cho nhánh Y học thiện lành trong hệ nội dung chung.",
          en: "A starting map for Wholesome Medicine within the broader content system.",
        },
        href: "/y-hoc-thien-lanh#tong-quan",
      },
      {
        id: "kien-thuc-suc-khoe-nen-tang",
        title: { vi: "Kiến thức sức khỏe nền tảng", en: "Foundational Health Knowledge" },
        summary: {
          vi: "Các kiến thức nền cần nắm trước khi đi vào tranh luận hoặc tự áp dụng.",
          en: "Core health knowledge to build first before deeper debates or self-application.",
        },
        href: "/y-hoc-thien-lanh#kien-thuc-suc-khoe-nen-tang",
      },
      {
        id: "phong-ngua",
        title: { vi: "Phòng ngừa", en: "Prevention" },
        summary: {
          vi: "Gợi ý các hướng phòng ngừa thực tế, đi từ lối sống hằng ngày.",
          en: "Practical prevention directions rooted in everyday living habits.",
        },
        href: "/y-hoc-thien-lanh#phong-ngua",
      },
      {
        id: "loi-song-va-benh-tat",
        title: { vi: "Lối sống và bệnh tật", en: "Lifestyle and Disease" },
        summary: {
          vi: "Kết nối giữa lựa chọn sống, môi trường sống và nguy cơ bệnh tật.",
          en: "Connections between daily lifestyle, living context, and disease risk.",
        },
        href: "/y-hoc-thien-lanh#loi-song-va-benh-tat",
      },
      {
        id: "goc-nhin-y-hoc-nhan-van",
        title: { vi: "Góc nhìn y học nhân văn", en: "Humane Medical Perspectives" },
        summary: {
          vi: "Giữ chiều sâu con người trong tiếp cận y học và chăm sóc sức khỏe.",
          en: "Preserving human depth in medical thinking and care approaches.",
        },
        href: "/y-hoc-thien-lanh#goc-nhin-y-hoc-nhan-van",
      },
      {
        id: "phan-tich-va-tai-lieu-nen",
        title: { vi: "Phân tích / Tài liệu nền", en: "Analysis / Core References" },
        summary: {
          vi: "Các bài phân tích và tài liệu nền để đọc có hệ thống, rõ nguồn.",
          en: "Analytical pieces and core references for structured, source-aware reading.",
        },
        href: "/y-hoc-thien-lanh#phan-tich-va-tai-lieu-nen",
      },
      {
        id: "hoi-dap-suc-khoe-pho-thong",
        title: { vi: "Hỏi đáp sức khỏe phổ thông", en: "General Health Q&A" },
        summary: {
          vi: "Những câu hỏi thường gặp cần câu trả lời rõ, gọn và dễ áp dụng.",
          en: "Common health questions answered clearly, concisely, and practically.",
        },
        href: "/y-hoc-thien-lanh#hoi-dap-suc-khoe-pho-thong",
      },
    ],
    relatedDirections: [
      {
        title: { vi: "Bắt đầu từ Dinh dưỡng thiện lành", en: "Begin with Wholesome Nutrition" },
        description: {
          vi: "Giữ nhánh Dinh dưỡng là điểm tựa nền trước khi mở rộng góc nhìn y học.",
          en: "Keep Nutrition as the foundational anchor before expanding into medicine.",
        },
        href: "/dinh-duong-thien-lanh",
      },
      {
        title: { vi: "Tiếp sang Hành động thiện lành", en: "Continue to Wholesome Actions" },
        description: {
          vi: "Chuyển hiểu biết y học thành các hành động vừa sức trong đời sống.",
          en: "Translate medical understanding into practical daily actions.",
        },
        href: "/hanh-dong-thien-lanh",
      },
      {
        title: { vi: "Xem toàn bộ 7 nhánh", en: "View all seven branches" },
        description: {
          vi: "Quay lại trang chủ để theo dõi toàn bộ bản đồ nội dung hiện tại.",
          en: "Return home to review the full content map.",
        },
        href: "/",
      },
    ],
    primaryCta: {
      label: { vi: "Về trang chủ", en: "Back to Home" },
      href: "/",
    },
  },
  "hanh-dong-thien-lanh": {
    slug: "hanh-dong-thien-lanh",
    title: { vi: "Hành động thiện lành", en: "Wholesome Actions" },
    heroKicker: { vi: "Nhánh mở rộng", en: "Expansion branch" },
    description: {
      vi: "Nuôi dưỡng những hành động tích cực, tử tế và thiết thực.",
      en: "Cultivating positive, kind, and practical actions.",
    },
    clusters: [
      {
        id: "tong-quan",
        title: { vi: "Tổng quan", en: "Overview" },
        summary: {
          vi: "Khung nội dung hành động thiện lành theo nhịp cá nhân và cộng đồng.",
          en: "A practical framework for wholesome actions in personal and social life.",
        },
        href: "/hanh-dong-thien-lanh#tong-quan",
      },
      {
        id: "thuc-hanh-nho",
        title: { vi: "Thực hành nhỏ", en: "Small Practices" },
        summary: {
          vi: "Những hành động vừa sức, đủ nhỏ để bắt đầu và giữ đều.",
          en: "Manageable actions that are small enough to begin and sustain.",
        },
        href: "/hanh-dong-thien-lanh#thuc-hanh-nho",
      },
      {
        id: "huong-mo-rong",
        title: { vi: "Hướng mở rộng", en: "Expansion Direction" },
        summary: {
          vi: "Định hướng phát triển sâu hơn cho các nhóm hành động theo bối cảnh sống.",
          en: "Future deep-dive directions for action pathways across life contexts.",
        },
        href: "/hanh-dong-thien-lanh#huong-mo-rong",
      },
    ],
    relatedDirections: [
      {
        title: { vi: "Bắt đầu từ Dinh dưỡng thiện lành", en: "Begin with Wholesome Nutrition" },
        description: {
          vi: "Nhánh trọng tâm hiện tại để xây nền hiểu biết trước.",
          en: "The current focus branch to build your foundation first.",
        },
        href: "/dinh-duong-thien-lanh",
      },
      {
        title: { vi: "Sang Lời nói thiện lành", en: "Continue to Wholesome Speech" },
        description: {
          vi: "Mở rộng từ hành động sang giao tiếp để giữ nhịp sống nhất quán.",
          en: "Expand from action into communication for a more coherent rhythm.",
        },
        href: "/loi-noi-thien-lanh",
      },
      {
        title: { vi: "Về trang chủ", en: "Back to Home" },
        description: {
          vi: "Xem toàn bộ cấu trúc 7 nhánh để chọn hướng phù hợp.",
          en: "Review the five-branch structure to choose your direction.",
        },
        href: "/",
      },
    ],
    primaryCta: {
      label: { vi: "Vào nhánh Dinh dưỡng thiện lành", en: "Go to Wholesome Nutrition" },
      href: "/dinh-duong-thien-lanh",
    },
  },
  "loi-noi-thien-lanh": {
    slug: "loi-noi-thien-lanh",
    title: { vi: "Lời nói thiện lành", en: "Wholesome Speech" },
    heroKicker: { vi: "Nhánh mở rộng", en: "Expansion branch" },
    description: {
      vi: "Xây dựng giao tiếp tích cực, chân thành và có trách nhiệm.",
      en: "Building communication that is constructive, sincere, and responsible.",
    },
    clusters: [
      {
        id: "tong-quan",
        title: { vi: "Tổng quan", en: "Overview" },
        summary: {
          vi: "Định hướng chung cho một cách nói rõ, tử tế và giảm tổn thương.",
          en: "A shared direction for clear, kind, and less harmful communication.",
        },
        href: "/loi-noi-thien-lanh#tong-quan",
      },
      {
        id: "nguyen-tac-giao-tiep",
        title: { vi: "Nguyên tắc giao tiếp", en: "Communication Principles" },
        summary: {
          vi: "Những nguyên tắc nền để nói thật mà vẫn giữ kết nối.",
          en: "Foundational principles for speaking honestly while preserving connection.",
        },
        href: "/loi-noi-thien-lanh#nguyen-tac-giao-tiep",
      },
      {
        id: "huong-mo-rong",
        title: { vi: "Hướng mở rộng", en: "Expansion Direction" },
        summary: {
          vi: "Khung phát triển sâu hơn theo từng bối cảnh quan hệ.",
          en: "Future deepening paths for different relationship contexts.",
        },
        href: "/loi-noi-thien-lanh#huong-mo-rong",
      },
    ],
    relatedDirections: [
      {
        title: { vi: "Bắt đầu từ Dinh dưỡng thiện lành", en: "Begin with Wholesome Nutrition" },
        description: {
          vi: "Đi từ nhánh trọng tâm để có nền trước khi mở rộng.",
          en: "Start from the focus branch to build foundations before expanding.",
        },
        href: "/dinh-duong-thien-lanh",
      },
      {
        title: { vi: "Sang Suy nghĩ thiện lành", en: "Continue to Wholesome Thoughts" },
        description: {
          vi: "Kết nối lời nói bên ngoài với sự rõ ràng bên trong.",
          en: "Connect outer speech with inner clarity and steadiness.",
        },
        href: "/suy-nghi-thien-lanh",
      },
      {
        title: { vi: "Về trang chủ", en: "Back to Home" },
        description: {
          vi: "Xem toàn bộ hệ nội dung và điều hướng liên hoàn.",
          en: "View the full content system and connected directions.",
        },
        href: "/",
      },
    ],
    primaryCta: {
      label: { vi: "Vào nhánh Dinh dưỡng thiện lành", en: "Go to Wholesome Nutrition" },
      href: "/dinh-duong-thien-lanh",
    },
  },
  "suy-nghi-thien-lanh": {
    slug: "suy-nghi-thien-lanh",
    title: { vi: "Suy nghĩ thiện lành", en: "Wholesome Thoughts" },
    heroKicker: { vi: "Nhánh mở rộng", en: "Expansion branch" },
    description: {
      vi: "Nuôi dưỡng nhận thức sáng rõ và đời sống nội tâm cân bằng.",
      en: "Cultivating clarity, balance, and healthy inner awareness.",
    },
    clusters: [
      {
        id: "tong-quan",
        title: { vi: "Tổng quan", en: "Overview" },
        summary: {
          vi: "Khung nội dung để nuôi nhận thức rõ hơn trong đời sống hằng ngày.",
          en: "A framework for nurturing clearer awareness in daily life.",
        },
        href: "/suy-nghi-thien-lanh#tong-quan",
      },
      {
        id: "thuc-hanh-tu-duy",
        title: { vi: "Thực hành tư duy", en: "Thinking Practices" },
        summary: {
          vi: "Các bước ngắn giúp giữ bình tĩnh và sáng rõ trước nhiễu thông tin.",
          en: "Short practices for calm and clarity in high-noise environments.",
        },
        href: "/suy-nghi-thien-lanh#thuc-hanh-tu-duy",
      },
      {
        id: "huong-mo-rong",
        title: { vi: "Hướng mở rộng", en: "Expansion Direction" },
        summary: {
          vi: "Định hướng triển khai sâu hơn cho các cụm nội dung nội tâm.",
          en: "Future directions for deeper inner-life content clusters.",
        },
        href: "/suy-nghi-thien-lanh#huong-mo-rong",
      },
    ],
    relatedDirections: [
      {
        title: { vi: "Bắt đầu từ Dinh dưỡng thiện lành", en: "Begin with Wholesome Nutrition" },
        description: {
          vi: "Xây nền từ nhánh trọng tâm trước khi mở rộng.",
          en: "Build from the focus branch before expanding outward.",
        },
        href: "/dinh-duong-thien-lanh",
      },
      {
        title: { vi: "Sang Giải trí thiện lành", en: "Continue to Wholesome Entertainment" },
        description: {
          vi: "Mở rộng sang thói quen tiêu thụ nội dung tích cực hơn.",
          en: "Extend into healthier media and entertainment habits.",
        },
        href: "/giai-tri-thien-lanh",
      },
      {
        title: { vi: "Về trang chủ", en: "Back to Home" },
        description: {
          vi: "Xem lại bản đồ điều hướng toàn website.",
          en: "Return to the full website navigation map.",
        },
        href: "/",
      },
    ],
    primaryCta: {
      label: { vi: "Vào nhánh Dinh dưỡng thiện lành", en: "Go to Wholesome Nutrition" },
      href: "/dinh-duong-thien-lanh",
    },
  },
  "giai-tri-thien-lanh": {
    slug: "giai-tri-thien-lanh",
    title: { vi: "Giải trí thiện lành", en: "Wholesome Entertainment" },
    heroKicker: { vi: "Nhánh mở rộng", en: "Expansion branch" },
    description: {
      vi: "Chọn lọc nội dung giải trí có giá trị tích cực và lành mạnh.",
      en: "Curating entertainment with positive and wholesome value.",
    },
    clusters: [
      {
        id: "tong-quan",
        title: { vi: "Tổng quan", en: "Overview" },
        summary: {
          vi: "Định hướng lựa chọn giải trí giúp giữ nhịp tinh thần lành mạnh.",
          en: "Guidance for entertainment choices that support a healthier rhythm.",
        },
        href: "/giai-tri-thien-lanh#tong-quan",
      },
      {
        id: "bo-loc-noi-dung",
        title: { vi: "Bộ lọc nội dung", en: "Content Filter" },
        summary: {
          vi: "Các tiêu chí lọc nội dung để giảm quá tải và giữ sự sáng rõ.",
          en: "Filtering criteria to reduce overload and preserve mental clarity.",
        },
        href: "/giai-tri-thien-lanh#bo-loc-noi-dung",
      },
      {
        id: "huong-mo-rong",
        title: { vi: "Hướng mở rộng", en: "Expansion Direction" },
        summary: {
          vi: "Định hướng mở rộng sâu hơn theo từng nhóm nội dung giải trí.",
          en: "Future deep-dive directions across curated entertainment groups.",
        },
        href: "/giai-tri-thien-lanh#huong-mo-rong",
      },
    ],
    relatedDirections: [
      {
        title: { vi: "Bắt đầu từ Dinh dưỡng thiện lành", en: "Begin with Wholesome Nutrition" },
        description: {
          vi: "Đi từ nhánh trọng tâm để có nền trước khi mở rộng thói quen giải trí.",
          en: "Start from the focus branch before expanding entertainment habits.",
        },
        href: "/dinh-duong-thien-lanh",
      },
      {
        title: { vi: "Sang Hành động thiện lành", en: "Continue to Wholesome Actions" },
        description: {
          vi: "Chuyển năng lượng phục hồi thành hành động tích cực mỗi ngày.",
          en: "Turn restored energy into positive daily actions.",
        },
        href: "/hanh-dong-thien-lanh",
      },
      {
        title: { vi: "Về trang chủ", en: "Back to Home" },
        description: {
          vi: "Xem toàn bộ 7 nhánh để chọn hướng đọc phù hợp nhất.",
          en: "View all seven branches and choose the path that fits best.",
        },
        href: "/",
      },
    ],
    primaryCta: {
      label: { vi: "Vào nhánh Dinh dưỡng thiện lành", en: "Go to Wholesome Nutrition" },
      href: "/dinh-duong-thien-lanh",
    },
  },
  "coi-vui-cuoi": {
    slug: "coi-vui-cuoi",
    title: { vi: "Cõi vui cười", en: "Joyful Laughter" },
    heroKicker: { vi: "Nhánh mở rộng", en: "Expansion branch" },
    description: {
      vi: "Không gian tiếng cười nhẹ nhàng, tích cực và không độc hại.",
      en: "A space for light, positive, and wholesome humor.",
    },
    clusters: [
      {
        id: "tong-quan",
        title: { vi: "Tổng quan", en: "Overview" },
        summary: {
          vi: "Định hướng nhánh tiếng cười lành mạnh trong hệ nội dung thiện lành.",
          en: "The guiding frame for wholesome laughter in the broader platform.",
        },
        href: "/coi-vui-cuoi#tong-quan",
      },
      {
        id: "chuyen-vui-nhe-nhang",
        title: { vi: "Chuyện vui nhẹ nhàng", en: "Gentle Light Stories" },
        summary: {
          vi: "Những mẩu chuyện vui vừa đủ để thư giãn mà không gây tổn thương.",
          en: "Short moments of humor that relax without causing harm.",
        },
        href: "/coi-vui-cuoi#chuyen-vui-nhe-nhang",
      },
      {
        id: "mau-vui-tich-cuc",
        title: { vi: "Mẩu vui tích cực", en: "Positive Humor Snippets" },
        summary: {
          vi: "Các nội dung vui sáng, giúp nâng tinh thần và giữ năng lượng nhẹ.",
          en: "Positive snippets that lift mood while staying emotionally light.",
        },
        href: "/coi-vui-cuoi#mau-vui-tich-cuc",
      },
      {
        id: "thu-gian-sach",
        title: { vi: "Thư giãn sạch", en: "Clean Relaxation" },
        summary: {
          vi: "Gợi ý nhịp thư giãn không độc hại, không mỉa mai, không gây quá tải.",
          en: "Relaxation patterns that avoid toxicity, ridicule, and overload.",
        },
        href: "/coi-vui-cuoi#thu-gian-sach",
      },
      {
        id: "tieng-cuoi-khong-doc-hai",
        title: { vi: "Tiếng cười không độc hại", en: "Non-toxic Laughter" },
        summary: {
          vi: "Xây bộ lọc để chọn tiếng cười tích cực và tránh nội dung gây tổn thương.",
          en: "Build a filter for constructive humor and avoid harmful mockery.",
        },
        href: "/coi-vui-cuoi#tieng-cuoi-khong-doc-hai",
      },
      {
        id: "vui-khong-gieu-cot-xau",
        title: { vi: "Vui không giễu cợt xấu", en: "Humor Without Cruel Ridicule" },
        summary: {
          vi: "Định hướng nội dung vui lành mạnh, không đặt niềm vui trên tổn thương người khác.",
          en: "Humor that stays kind and avoids turning others into targets.",
        },
        href: "/coi-vui-cuoi#vui-khong-gieu-cot-xau",
      },
    ],
    relatedDirections: [
      {
        title: { vi: "Sang nhánh Giải trí thiện lành", en: "Continue to Wholesome Entertainment" },
        description: {
          vi: "Mở rộng từ tiếng cười sang các lựa chọn giải trí tích cực rộng hơn.",
          en: "Expand from wholesome laughter into broader positive media choices.",
        },
        href: "/giai-tri-thien-lanh",
      },
      {
        title: { vi: "Giữ nền bằng Dinh dưỡng thiện lành", en: "Keep your base in Wholesome Nutrition" },
        description: {
          vi: "Nhánh trọng tâm giúp giữ nhịp nền vững khi mở rộng sang nội dung thư giãn.",
          en: "The current focus branch helps keep your foundation steady while you expand.",
        },
        href: "/dinh-duong-thien-lanh",
      },
      {
        title: { vi: "Về trang chủ", en: "Back to Home" },
        description: {
          vi: "Xem toàn bộ 7 nhánh và chọn hướng tiếp theo phù hợp.",
          en: "View all seven branches and choose your next direction.",
        },
        href: "/",
      },
    ],
    primaryCta: {
      label: { vi: "Khám phá các nhánh nội dung", en: "Explore content branches" },
      href: "/",
    },
  },
};

const primaryBranchOverrides: Partial<Record<ContentBranchSlug, ContentBranchLandingI18n>> = {
  "dinh-duong-thien-lanh": {
    slug: "dinh-duong-thien-lanh",
    title: { vi: "Dinh dưỡng thiện lành", en: "Wholesome Nutrition" },
    heroKicker: { vi: "Hiểu đúng trước, thay đổi sau", en: "Understand first, then change" },
    description: {
      vi: "Dinh dưỡng không bắt đầu từ chế độ ăn mà từ cách hiểu. Đây là nơi đặt lại những điều tưởng đã biết để nhìn rõ hơn trước khi chọn, trước khi tin, và trước khi lặp lại một thói quen mỗi ngày.",
      en: "Nutrition does not begin with a diet but with understanding. This is where familiar beliefs are revisited before choosing, believing, and repeating a daily habit.",
    },
    clusters: [
      {
        id: "kien-thuc-nen-tang",
        title: { vi: "Kiến thức nền tảng", en: "Foundational Knowledge" },
        summary: {
          vi: "Có những nguyên tắc dinh dưỡng cần hiểu trước khi theo bất kỳ cách ăn nào. Không phải để học thuộc, mà để nhận ra điều gì thật sự phù hợp với cơ thể và đời sống của mình.",
          en: "Some nutrition principles are worth understanding before following any eating approach, not to memorize them, but to recognize what truly fits your body and your life.",
        },
        prompt: {
          vi: "Bạn đang chọn cách ăn vì ai nói, hay vì mình thực sự hiểu?",
          en: "Are you choosing the way you eat because someone said so, or because you genuinely understand it?",
        },
        href: "/dinh-duong-thien-lanh/kien-thuc-nen-tang",
      },
      {
        id: "sua-va-nhung-dieu-thuong-duoc-tin",
        title: { vi: "Những điều thường được tin về sữa", en: "Common Beliefs About Milk" },
        summary: {
          vi: "Sữa là một thực phẩm đi cùng tuổi thơ, quảng bá và nhiều lớp niềm tin xã hội. Đọc để hiểu niềm tin đó hình thành ra sao trước khi giữ hay bỏ.",
          en: "Milk is a food bound up with childhood, advertising, and layers of social belief. Read to understand how that belief formed before deciding to keep or leave it.",
        },
        prompt: {
          vi: "Sữa có thật sự cần thiết như nhiều người vẫn nghĩ?",
          en: "Is milk truly as necessary as many people think?",
        },
        href: "/dinh-duong-thien-lanh/sua-va-nhung-dieu-thuong-duoc-tin",
      },
      {
        id: "chat-dam-hieu-sao-cho-dung",
        title: { vi: "Chất đạm: hiểu sao cho đúng", en: "Protein: Understanding It Right" },
        summary: {
          vi: "Nỗi lo thiếu đạm thường xuất hiện rất sớm khi nói đến thay đổi cách ăn. Nhưng điều cơ thể thực sự cần và điều ta đang sợ đôi khi không phải là một.",
          en: "Worry about protein deficiency often appears very early when people talk about changing how they eat. But what the body really needs and what we fear are not always the same thing.",
        },
        prompt: {
          vi: "Vì sao nỗi lo thiếu đạm lại dễ xuất hiện đến vậy?",
          en: "Why does the fear of protein deficiency appear so easily?",
        },
        href: "/dinh-duong-thien-lanh/chat-dam-hieu-sao-cho-dung",
      },
      {
        id: "suc-khoe-chuyen-hoa-va-bua-an-hang-ngay",
        title: { vi: "Sức khỏe chuyển hóa và bữa ăn hằng ngày", en: "Metabolic Health and Daily Eating" },
        summary: {
          vi: "Đái tháo đường, béo phì và rối loạn chuyển hóa không chỉ là câu chuyện của đường hay mỡ. Bữa ăn hằng ngày có liên kết với sức khỏe lâu dài sâu hơn nhiều người tưởng.",
          en: "Diabetes, obesity, and metabolic disorders are not only stories of sugar or fat. Daily eating is linked to long-term health more deeply than many people realize.",
        },
        prompt: {
          vi: "Bữa ăn hằng ngày liên quan đến chuyển hóa sâu đến đâu?",
          en: "How deeply is daily eating connected to metabolism?",
        },
        href: "/dinh-duong-thien-lanh/suc-khoe-chuyen-hoa-va-bua-an-hang-ngay",
      },
      {
        id: "ung-thu-va-nhung-cau-hoi-tu-ban-an",
        title: { vi: "Ung thư và những câu hỏi từ bàn ăn", en: "Cancer and the Questions at the Table" },
        summary: {
          vi: "Không phải bữa ăn nào cũng gây ung thư. Nhưng có những thói quen ăn uống hằng ngày tích lũy nguy cơ lâu dài mà rất ít người để ý từ sớm.",
          en: "Not every meal causes cancer. But some everyday eating habits accumulate long-term risk in ways few people notice early.",
        },
        prompt: {
          vi: "Bữa ăn hằng ngày có thể ảnh hưởng đến sức khỏe lâu dài ra sao?",
          en: "How can daily meals affect long-term health?",
        },
        href: "/dinh-duong-thien-lanh/ung-thu-va-nhung-cau-hoi-tu-ban-an",
      },
    ],
    relatedDirections: [],
    nutritionLanding: {
      heroBadge: { vi: "Hiểu đúng trước, thay đổi sau", en: "Understand first, then change" },
      heroTitle: { vi: "Dinh dưỡng thiện lành", en: "Wholesome Nutrition" },
      heroDescription: {
        vi: "Dinh dưỡng không bắt đầu từ chế độ ăn mà từ cách hiểu. Đây là nơi đặt lại những điều tưởng đã biết để nhìn rõ hơn trước khi chọn, trước khi tin, và trước khi lặp lại một thói quen mỗi ngày.",
        en: "Nutrition does not begin with a diet but with understanding. This is where familiar beliefs are revisited before choosing, believing, and repeating a daily habit.",
      },
      heroPrimaryCtaLabel: { vi: "Xem các chủ đề chính", en: "Browse the main topics" },
      heroImageSlotId: "dinh-duong.hero",
      introStrip: {
        title: { vi: "Định hướng tiếp cận", en: "Reading approach" },
        items: [
          { vi: "Không kết luận tuyệt đối", en: "Do not jump to absolute conclusions" },
          { vi: "Bắt đầu từ câu hỏi gần đời sống", en: "Start from questions close to daily life" },
          { vi: "Từ một ý có thể mở ra nhiều nội dung hữu ích", en: "One idea can open into many useful content pieces" },
        ],
      },
      topics: [
        {
          id: "kien-thuc-nen-tang",
          title: { vi: "Kiến thức nền tảng", en: "Foundational Knowledge" },
          summary: {
            vi: "Có những nguyên tắc dinh dưỡng cần hiểu trước khi theo bất kỳ cách ăn nào. Không phải để học thuộc, mà để nhận ra điều gì thật sự phù hợp với cơ thể và đời sống của mình.",
            en: "Some nutrition principles are worth understanding before following any eating approach, not to memorize them, but to recognize what truly fits your body and your life.",
          },
          bullets: [
            { vi: "Vì sao con người rất dễ tin một lời khuyên dinh dưỡng nghe quen?", en: "Why do people so easily trust nutrition advice that sounds familiar?" },
            { vi: "Một thói quen ăn uống lặp lại lâu ngày mạnh hơn kiến thức ra sao?", en: "How can a habit repeated for years outweigh knowledge?" },
            { vi: "Khi nào nên dừng lại để hỏi: mình tin điều này từ đâu?", en: "When should you stop and ask: where did this belief come from?" },
          ],
          question: {
            vi: "Bạn đang chọn cách ăn vì ai nói, hay vì mình thực sự hiểu?",
            en: "Are you choosing the way you eat because someone said so, or because you genuinely understand it?",
          },
          href: "/dinh-duong-thien-lanh#kien-thuc-nen-tang",
          imageSlotId: "dinh-duong.topic.kien-thuc-nen-tang",
        },
        {
          id: "sua-va-nhung-dieu-thuong-duoc-tin",
          title: { vi: "Những điều thường được tin về sữa", en: "Common Beliefs About Milk" },
          summary: {
            vi: "Sữa là một thực phẩm đi cùng tuổi thơ, quảng bá và nhiều lớp niềm tin xã hội. Đọc để hiểu niềm tin đó hình thành ra sao trước khi giữ hay bỏ.",
            en: "Milk is a food bound up with childhood, advertising, and layers of social belief. Read to understand how that belief formed before deciding to keep or leave it.",
          },
          bullets: [
            { vi: "Vì sao sữa luôn được gắn với hình ảnh thiết yếu?", en: "Why is milk always attached to the idea of necessity?" },
            { vi: "Một niềm tin tập thể về sữa được nuôi lớn bằng cách nào?", en: "How is a collective belief about milk built and sustained?" },
            { vi: "Điều gì khiến người ta thấy bất an nếu bỏ sữa?", en: "What makes people uneasy about leaving milk behind?" },
          ],
          question: {
            vi: "Sữa có thật sự cần thiết như nhiều người vẫn nghĩ?",
            en: "Is milk truly as necessary as many people think?",
          },
          href: "/dinh-duong-thien-lanh/sua-va-nhung-dieu-thuong-duoc-tin",
          imageSlotId: "dinh-duong.topic.sua-va-nhung-dieu-thuong-tin",
        },
        {
          id: "chat-dam-hieu-sao-cho-dung",
          title: { vi: "Chất đạm: hiểu sao cho đúng", en: "Protein: Understanding It Right" },
          summary: {
            vi: "Nỗi lo thiếu đạm thường xuất hiện rất sớm khi nói đến thay đổi cách ăn. Nhưng điều cơ thể thực sự cần và điều ta đang sợ đôi khi không phải là một.",
            en: "Worry about protein deficiency often appears very early when people talk about changing how they eat. But what the body really needs and what we fear are not always the same thing.",
          },
          bullets: [
            { vi: "Vì sao câu hỏi thiếu đạm luôn xuất hiện đầu tiên?", en: "Why does the protein deficiency question always appear first?" },
            { vi: "Nhu cầu đạm hằng ngày đang được hiểu theo cách nào?", en: "How is daily protein need being understood right now?" },
            { vi: "Nỗi lo thiếu đạm đến từ cơ thể hay từ thói quen suy nghĩ?", en: "Does the fear of missing protein come from the body or from habitual thinking?" },
          ],
          question: {
            vi: "Vì sao nỗi lo thiếu đạm lại dễ xuất hiện đến vậy?",
            en: "Why does the fear of protein deficiency appear so easily?",
          },
          href: "/dinh-duong-thien-lanh/chat-dam-hieu-sao-cho-dung",
          imageSlotId: "dinh-duong.topic.chat-dam-hang-ngay",
        },
        {
          id: "suc-khoe-chuyen-hoa-va-bua-an-hang-ngay",
          title: { vi: "Sức khỏe chuyển hóa và bữa ăn hằng ngày", en: "Metabolic Health and Daily Eating" },
          summary: {
            vi: "Đái tháo đường, béo phì và rối loạn chuyển hóa không chỉ là câu chuyện của đường hay mỡ. Bữa ăn hằng ngày có liên kết với sức khỏe lâu dài sâu hơn nhiều người tưởng.",
            en: "Diabetes, obesity, and metabolic disorders are not only stories of sugar or fat. Daily eating is linked to long-term health more deeply than many people realize.",
          },
          bullets: [
            { vi: "Đái tháo đường có chỉ là câu chuyện của đường?", en: "Is diabetes only a story about sugar?" },
            { vi: "Vì sao nhiều người chỉ nhìn vào món ăn mà quên cả lối sống?", en: "Why do so many people look only at the meal and forget the broader lifestyle?" },
            { vi: "Điều gì tích lũy âm thầm qua nhiều năm trước khi cơ thể lên tiếng?", en: "What builds up quietly over years before the body speaks?" },
          ],
          question: {
            vi: "Bữa ăn hằng ngày liên quan đến chuyển hóa sâu đến đâu?",
            en: "How deeply is daily eating connected to metabolic health?",
          },
          href: "/dinh-duong-thien-lanh/suc-khoe-chuyen-hoa-va-bua-an-hang-ngay",
          imageSlotId: "dinh-duong.topic.dai-thao-duong-beo-phi-chuyen-hoa",
        },
        {
          id: "ung-thu-va-nhung-cau-hoi-tu-ban-an",
          title: { vi: "Ung thư và những câu hỏi từ bàn ăn", en: "Cancer and the Questions at the Table" },
          summary: {
            vi: "Không phải bữa ăn nào cũng gây ung thư. Nhưng có những thói quen ăn uống hằng ngày tích lũy nguy cơ lâu dài mà rất ít người để ý từ sớm.",
            en: "Not every meal causes cancer. But some everyday eating habits accumulate long-term risk in ways few people notice early.",
          },
          bullets: [
            { vi: "Vì sao con người luôn muốn tìm một thủ phạm duy nhất cho bệnh nặng?", en: "Why do people always want a single culprit for serious illness?" },
            { vi: "Một thói quen nhỏ lặp lại lâu ngày có thể ảnh hưởng đến đâu?", en: "How far can a small habit repeated for years really reach?" },
            { vi: "Điều gì đang bị nói quá nhanh khi gắn thực phẩm với bệnh tật?", en: "What is being said too quickly when food is linked to disease?" },
          ],
          question: {
            vi: "Bữa ăn hằng ngày có thể ảnh hưởng đến sức khỏe lâu dài ra sao?",
            en: "How can daily meals affect long-term health?",
          },
          href: "/dinh-duong-thien-lanh#ung-thu-va-nhung-cau-hoi-tu-ban-an",
          imageSlotId: "dinh-duong.topic.ung-thu-va-goc-nhin-tu-bua-an",
        },
      ],
      wthSection: {
        title: { vi: "Góc nhìn mở ra từ phim WTH", en: "Perspectives Opened by WTH" },
        description: {
          vi: "Không dùng bộ phim như một câu trả lời cuối cùng. Chỉ dùng nó như điểm khởi đầu để nhìn lại những điều đã quá quen và tách ra các ý nhỏ có thể phát triển thành clip.",
          en: "Do not treat the film as a final answer. Use it as a starting point to revisit familiar beliefs and separate them into smaller ideas that can become clips.",
        },
        cards: [
          {
            id: "wth-sua",
            title: { vi: "Sữa", en: "Milk" },
            story: {
              vi: "Phim đặt lại câu chuyện về sữa như một sản phẩm được nâng đỡ bởi giáo dục, quảng bá và các khuyến nghị dinh dưỡng lặp đi lặp lại suốt nhiều năm.",
              en: "The film revisits milk as a product upheld by education, advertising, and nutrition recommendations repeated for years.",
            },
            challengeQuestion: {
              vi: "Liệu niềm tin về sữa có hoàn toàn đến từ bằng chứng độc lập, hay còn chịu ảnh hưởng của lợi ích ngành?",
              en: "Does belief in milk come entirely from independent evidence, or is it also shaped by industry interests?",
            },
            seedIdeas: [
              { vi: "Sữa đi từ thực phẩm thành niềm tin quốc dân như thế nào?", en: "How did milk move from food to a national belief?" },
              { vi: "Vì sao quảng bá thời thơ ấu có thể theo ta đến tuổi trưởng thành?", en: "Why can childhood advertising follow us into adulthood?" },
              { vi: "Khi nào một khuyến nghị dinh dưỡng trở thành điều không ai dám hỏi lại?", en: "When does a nutrition recommendation become something no one dares question?" },
              { vi: "Vì sao nhiều người cảm thấy thiếu an tâm nếu bỏ sữa?", en: "Why do many people feel less secure if they stop drinking milk?" },
            ],
            href: "/dinh-duong-thien-lanh/sua-va-nhung-dieu-thuong-duoc-tin",
            linkLabel: { vi: "Xem chuyên đề về sữa", en: "View the milk topic" },
          },
          {
            id: "wth-chat-dam",
            title: { vi: "Chất đạm", en: "Protein" },
            story: {
              vi: "Phim đi thẳng vào nỗi lo thiếu đạm khi giảm thịt, rồi dùng thực tế để đặt lại câu hỏi: điều cơ thể cần có đang bị hiểu rộng hơn mức cần thiết hay không?",
              en: "The film goes straight into the fear of protein deficiency when reducing meat, then uses real examples to ask whether the body’s needs are being overstated.",
            },
            challengeQuestion: {
              vi: "Cơ thể thực sự cần bao nhiêu đạm, và nguồn thực vật có đủ đáp ứng không?",
              en: "How much protein does the body truly need, and can plant sources meet that need?",
            },
            seedIdeas: [
              { vi: "Vì sao thiếu đạm luôn là nỗi sợ đầu tiên?", en: "Why is protein deficiency always the first fear?" },
              { vi: "Nỗi sợ này được nuôi bởi thói quen hay khoa học?", en: "Is this fear sustained by habit or by science?" },
              { vi: "Điều gì khiến một người khó yên tâm khi nghe về cách ăn khác số đông?", en: "What makes someone uneasy when hearing about eating differently from the majority?" },
              { vi: "Cơ thể cần đạm theo cách nào chứ không chỉ theo số lượng?", en: "How does the body need protein, not just how much?" },
            ],
            href: "/dinh-duong-thien-lanh/chat-dam-hieu-sao-cho-dung",
            linkLabel: { vi: "Xem chuyên đề về chất đạm", en: "View the protein topic" },
          },
          {
            id: "wth-chuyen-hoa-beo-phi-ung-thu",
            title: { vi: "Chuyển hóa · Béo phì · Ung thư", en: "Metabolism · Obesity · Cancer" },
            story: {
              vi: "Phim nối bệnh mãn tính với cách con người ăn, mua, tin và sống trong một hệ thực phẩm lớn hơn từng bữa ăn riêng lẻ.",
              en: "The film connects chronic disease with how people eat, buy, believe, and live inside a food system larger than any single meal.",
            },
            challengeQuestion: {
              vi: "Bệnh chuyển hóa và ung thư là câu chuyện lựa chọn cá nhân, hay còn là hệ quả của một môi trường thực phẩm đã bị định hình từ trước?",
              en: "Are metabolic disease and cancer only matters of personal choice, or also consequences of a food environment already shaped in advance?",
            },
            seedIdeas: [
              { vi: "Đái tháo đường có chỉ là câu chuyện của đường?", en: "Is diabetes only a story about sugar?" },
              { vi: "Vì sao béo phì thường bị nhìn như lỗi cá nhân?", en: "Why is obesity so often seen as a personal failure?" },
              { vi: "Một thói quen nhỏ lặp lại lâu ngày có thể ảnh hưởng lớn đến đâu?", en: "How far can a small habit repeated for years really reach?" },
              { vi: "Khi nói đến ung thư, vì sao người ta luôn quay lại bàn ăn?", en: "When talking about cancer, why do people keep returning to the table?" },
            ],
            href: "/dinh-duong-thien-lanh/suc-khoe-chuyen-hoa-va-bua-an-hang-ngay",
            linkLabel: { vi: "Xem chuyên đề về chuyển hóa", en: "View the metabolic topic" },
          },
        ],
      },
      seedSection: {
        title: { vi: "Từ một câu hỏi để mở ra nội dung ngắn", en: "From a Question to Short-Form Content" },
        description: {
          vi: "Mỗi câu hỏi dưới đây có thể mở ra một video ngắn, một bài ngắn, hoặc một chuỗi nội dung nhỏ bám đúng tinh thần của phim.",
          en: "Each question below can open into a short video, a short article, or a small content series that stays close to the film’s spirit.",
        },
        cards: [
          {
            id: "seed-sua-can-thiet",
            title: { vi: "Sữa có thật sự cần thiết như nhiều người vẫn nghĩ?", en: "Is Milk Really as Necessary as Many People Think?" },
            lead: {
              vi: "Khi một thực phẩm đi cùng tuổi thơ và được nhắc lại suốt nhiều năm, con người rất khó tách nhu cầu thật khỏi niềm tin được tạo dựng.",
              en: "When a food is woven into childhood and repeated for years, it becomes hard to separate real need from an inherited belief.",
            },
            prompts: [
              { vi: "Sữa là nhu cầu hay thói quen văn hóa?", en: "Is milk a need or a cultural habit?" },
              { vi: "Vì sao bỏ sữa lại làm nhiều người bất an?", en: "Why does leaving milk behind make so many people uneasy?" },
              { vi: "Một lời khuyên quen thuộc có thể sai ở đâu?", en: "Where can a familiar recommendation go wrong?" },
            ],
            href: "/dinh-duong-thien-lanh/sua-va-nhung-dieu-thuong-duoc-tin",
          },
          {
            id: "seed-thieu-dam-dau-tien",
            title: { vi: "Vì sao nỗi lo thiếu đạm luôn xuất hiện đầu tiên?", en: "Why Does Fear of Protein Deficiency Appear First?" },
            lead: {
              vi: "Hầu như mọi cuộc trò chuyện về thay đổi cách ăn đều quay lại đúng một nỗi sợ: thiếu đạm. Nhưng nỗi sợ đó đến từ đâu?",
              en: "Nearly every conversation about changing how we eat circles back to one fear: protein deficiency. But where does that fear come from?",
            },
            prompts: [
              { vi: "Nỗi lo này xuất hiện từ kiến thức hay thói quen?", en: "Does this fear come from knowledge or from habit?" },
              { vi: "Cơ thể cần đạm theo cách nào?", en: "In what way does the body actually need protein?" },
              { vi: "Vì sao người ta yên tâm với điều quen hơn điều đúng?", en: "Why do people feel safer with what is familiar than with what is right?" },
            ],
            href: "/dinh-duong-thien-lanh/chat-dam-hieu-sao-cho-dung",
          },
          {
            id: "seed-dai-thao-duong-la-duong",
            title: { vi: "Đái tháo đường có chỉ là câu chuyện của đường?", en: "Is Diabetes Only a Story About Sugar?" },
            lead: {
              vi: "Nhiều người nhìn bệnh chuyển hóa qua một thủ phạm duy nhất. Nhưng thực tế thường rộng hơn một món ăn hoặc một chất riêng lẻ.",
              en: "Many people see metabolic disease through a single culprit. But reality is usually wider than one food or one isolated substance.",
            },
            prompts: [
              { vi: "Vì sao người ta thích một nguyên nhân đơn giản?", en: "Why do people prefer a simple cause?" },
              { vi: "Bữa ăn và lối sống liên kết với nhau thế nào?", en: "How are meals and lifestyle tied together?" },
              { vi: "Điều gì tích lũy âm thầm trước khi xét nghiệm lên tiếng?", en: "What accumulates quietly before a lab result finally speaks?" },
            ],
            href: "/dinh-duong-thien-lanh/suc-khoe-chuyen-hoa-va-bua-an-hang-ngay",
          },
          {
            id: "seed-bua-an-tac-dong-lau-dai",
            title: { vi: "Bữa ăn hằng ngày có thể tác động sức khỏe lâu dài ra sao?", en: "How Can Daily Meals Shape Long-Term Health?" },
            lead: {
              vi: "Sức khỏe dài hạn hiếm khi đổi bởi một bữa ăn. Nó thường được tạo bởi những điều lặp đi lặp lại quá lâu mà ta thấy là bình thường.",
              en: "Long-term health is rarely changed by one meal. It is usually shaped by things repeated for so long that they start to feel normal.",
            },
            prompts: [
              { vi: "Thói quen nhỏ tích lũy thành điều lớn ra sao?", en: "How do small habits accumulate into something much larger?" },
              { vi: "Vì sao cái quen lại dễ được xem là vô hại?", en: "Why is the familiar so easily seen as harmless?" },
              { vi: "Khi nào nên bắt đầu nhìn lại nhịp ăn mỗi ngày?", en: "When should someone begin to look again at their daily eating rhythm?" },
            ],
            href: "/dinh-duong-thien-lanh/suc-khoe-chuyen-hoa-va-bua-an-hang-ngay",
          },
          {
            id: "seed-ung-thu-ban-an",
            title: { vi: "Khi nói về ung thư, vì sao người ta luôn quay lại bàn ăn?", en: "Why Do People Return to the Table When Talking About Cancer?" },
            lead: {
              vi: "Khi đối diện bệnh nặng, con người thường tìm một điểm gần gũi nhất để đặt câu hỏi. Bàn ăn là nơi gần nhất, lặp lại nhất, và cũng khó nhìn rõ nhất.",
              en: "When facing a serious illness, people often look for the nearest point to question. The table is the nearest, the most repeated, and also the hardest to see clearly.",
            },
            prompts: [
              { vi: "Vì sao ai cũng muốn tìm một thủ phạm cụ thể?", en: "Why does everyone want a specific culprit?" },
              { vi: "Một thói quen lâu dài có thể ảnh hưởng thế nào?", en: "How can a long-term habit affect health?" },
              { vi: "Điều gì đang bị nói quá nhanh về thực phẩm và bệnh tật?", en: "What is being said too quickly about food and disease?" },
            ],
            href: "/dinh-duong-thien-lanh/suc-khoe-chuyen-hoa-va-bua-an-hang-ngay",
          },
          {
            id: "seed-phim-thay-doi-goc-nhin",
            title: { vi: "Một bộ phim tài liệu có thể làm thay đổi góc nhìn về dinh dưỡng như thế nào?", en: "How Can a Documentary Change the Way You See Nutrition?" },
            lead: {
              vi: "Phim không nhất thiết cho ta câu trả lời cuối cùng. Nhưng nó có thể buộc ta nhìn lại những điều mình đã tin quá lâu mà không hề kiểm tra.",
              en: "A film does not have to give a final answer. But it can force us to revisit beliefs we have held for too long without examining them.",
            },
            prompts: [
              { vi: "Khi nào phim là điểm khởi đầu tốt?", en: "When is a film a good starting point?" },
              { vi: "Khi nào người xem bị cuốn vào kết luận quá nhanh?", en: "When does a viewer get pulled into a conclusion too quickly?" },
              { vi: "Làm sao biến một luận điểm phim thành clip gần đời sống?", en: "How can a film argument become a short clip close to daily life?" },
            ],
          },
        ],
      },
      faqSection: {
        title: { vi: "Câu hỏi dễ gặp", en: "Common Questions" },
        items: [
          {
            question: { vi: "Có phải bỏ sữa là tốt hơn?", en: "Is stopping milk automatically better?" },
            answer: {
              vi: "Không nên biến câu hỏi này thành đúng hoặc sai tuyệt đối. Điều cần nhìn trước là cơ thể, thói quen, mục đích và cách mình đang hiểu về vai trò của sữa trong đời sống hằng ngày.",
              en: "This question should not be turned into an absolute right-or-wrong answer. What matters first is the body, the habit, the purpose, and how you currently understand the role of milk in daily life.",
            },
          },
          {
            question: { vi: "Ăn ít thịt có dễ thiếu đạm không?", en: "Does eating less meat easily lead to protein deficiency?" },
            answer: {
              vi: "Nỗi lo thiếu đạm là điều rất thường gặp, nhưng không phải cứ giảm thịt là thiếu ngay. Cần nhìn cách ăn tổng thể, nhu cầu thực tế của cơ thể và sự đa dạng của nguồn thực phẩm.",
              en: "Fear of protein deficiency is common, but eating less meat does not automatically mean you become deficient. The whole eating pattern, real bodily needs, and food diversity matter more.",
            },
          },
          {
            question: { vi: "Người có đường huyết cao nên bắt đầu nhìn từ đâu?", en: "Where should someone with high blood sugar begin looking?" },
            answer: {
              vi: "Không nên chỉ nhìn vào một món ăn hay một chất duy nhất. Cần nhìn rộng hơn vào nhịp ăn, thói quen lặp lại, vận động, giấc ngủ và những gì đang diễn ra mỗi ngày.",
              en: "It is not enough to look at one food or one isolated substance. A wider view of eating rhythm, repeated habits, movement, sleep, and everyday life is needed.",
            },
          },
          {
            question: { vi: "Bữa ăn ảnh hưởng nguy cơ lâu dài theo cách nào?", en: "How do meals influence long-term risk?" },
            answer: {
              vi: "Ảnh hưởng dài hạn thường không đến từ một bữa đơn lẻ mà từ điều lặp lại quá lâu. Khi một thói quen trở thành bình thường, nó cũng dễ trở thành thứ ít bị đặt lại câu hỏi nhất.",
              en: "Long-term impact usually does not come from a single meal but from what is repeated for too long. Once a habit becomes normal, it also becomes the thing least likely to be questioned.",
            },
          },
          {
            question: { vi: "Khi xem phim tài liệu về dinh dưỡng, nên tin đến mức nào?", en: "How far should you trust a nutrition documentary?" },
            answer: {
              vi: "Phim có thể là điểm khởi đầu tốt để mở ra câu hỏi mới, nhưng không nên biến nó thành kết luận cuối cùng. Cách tốt hơn là dùng phim để soi lại điều mình tin và tiếp tục đọc chậm hơn.",
              en: "A documentary can be a good starting point for new questions, but it should not become the final conclusion. It works better as a way to re-examine beliefs and then keep reading more carefully.",
            },
          },
        ],
      },
    },
    primaryCta: {
      label: { vi: "Xem các chủ đề chính", en: "Browse the main topics" },
      href: "/dinh-duong-thien-lanh#kien-thuc-nen-tang",
    },
  },
  "hanh-dong-thien-lanh": {
    slug: "hanh-dong-thien-lanh",
    title: { vi: "Ứng xử thiện lành", en: "Wholesome Conduct" },
    heroKicker: { vi: "Hướng nội dung chính", en: "Primary direction" },
    description: {
      vi: "Một lối đi giúp ứng xử tử tế với bản thân, gia đình và xã hội theo nhịp sống thực tế.",
      en: "A reading path for kinder conduct with yourself, family, and society.",
    },
    clusters: [
      {
        id: "ung-xu-voi-ban-than",
        title: { vi: "Hiểu mình để sống nhẹ hơn", en: "Understand Yourself More Gently" },
        summary: {
          vi: "Nếu hôm nay hơi mệt, điều gì có thể làm lòng nhẹ hơn một chút?",
          en: "When today feels heavy, what can make your inner pace a little lighter?",
        },
        href: "/hanh-dong-thien-lanh#ung-xu-voi-ban-than",
      },
      {
        id: "ung-xu-trong-gia-dinh",
        title: { vi: "Ứng xử trong gia đình", en: "Conduct in Family Life" },
        summary: {
          vi: "Trong gia đình, điều gì dễ làm tổn thương nhau nhất và có thể làm khác đi ra sao?",
          en: "In family life, what hurts most often, and how can we respond differently?",
        },
        href: "/hanh-dong-thien-lanh#ung-xu-trong-gia-dinh",
      },
      {
        id: "loi-noi-va-giao-tiep",
        title: { vi: "Lời nói và cách giao tiếp", en: "Speech and Communication" },
        summary: {
          vi: "Làm sao để nói điều đúng mà không làm người khác đau?",
          en: "How can we speak truthfully without causing unnecessary pain?",
        },
        href: "/hanh-dong-thien-lanh#loi-noi-va-giao-tiep",
      },
      {
        id: "ung-xu-ngoai-xa-hoi",
        title: { vi: "Ra ngoài xã hội với sự tử tế", en: "Bringing Kindness into Society" },
        summary: {
          vi: "Sự tử tế ngoài xã hội bắt đầu từ những việc rất nhỏ nào?",
          en: "Which small actions can make public life kinder every day?",
        },
        href: "/hanh-dong-thien-lanh#ung-xu-ngoai-xa-hoi",
      },
      {
        id: "tinh-huong-thuong-gap",
        title: { vi: "Những tình huống thường gặp", en: "Common Everyday Situations" },
        summary: {
          vi: "Gợi ý cách xử lý cho các tình huống quen thuộc, để giữ bình tĩnh và tôn trọng nhau.",
          en: "Practical prompts for familiar situations, with calm and mutual respect.",
        },
        href: "/hanh-dong-thien-lanh#tinh-huong-thuong-gap",
      },
    ],
    relatedDirections: [
      {
        title: { vi: "Giữ nền từ Dinh dưỡng thiện lành", en: "Keep your base in Wholesome Nutrition" },
        description: {
          vi: "Nền dinh dưỡng rõ ràng giúp các thay đổi trong cách ứng xử dễ duy trì hơn.",
          en: "A clear nutrition foundation helps conduct changes stay more sustainable.",
        },
        href: "/dinh-duong-thien-lanh",
      },
      {
        title: { vi: "Sang Giải trí thiện lành", en: "Continue to Wholesome Entertainment" },
        description: {
          vi: "Mở rộng sang cách chọn nội dung giải trí giúp giữ tinh thần sáng và lành.",
          en: "Extend into media choices that keep your attention clear and healthy.",
        },
        href: "/giai-tri-thien-lanh",
      },
      {
        title: { vi: "Về trang chủ", en: "Back to Home" },
        description: {
          vi: "Xem lại 3 cây chính để chọn hướng phù hợp nhất hiện tại.",
          en: "Return to the three main pillars and choose what fits now.",
        },
        href: "/",
      },
    ],
    primaryCta: {
      label: { vi: "Mở ra từ đây", en: "Begin Here" },
      href: "/hanh-dong-thien-lanh#ung-xu-voi-ban-than",
    },
  },
  "giai-tri-thien-lanh": {
    slug: "giai-tri-thien-lanh",
    title: { vi: "Giải trí thiện lành", en: "Wholesome Entertainment" },
    heroKicker: { vi: "Hướng nội dung chính", en: "Primary direction" },
    description: {
      vi: "Một không gian giải trí nhẹ, sạch và có chiều sâu để tinh thần được thả lỏng đúng cách.",
      en: "A calmer entertainment space that supports rest, clarity, and positive attention.",
    },
    clusters: [
      {
        id: "tin-dang-chu-y",
        title: { vi: "Tin đáng chú ý", en: "Noteworthy News" },
        summary: {
          vi: "Những điều đáng để dừng lại đọc, không cần quá ồn ào.",
          en: "Stories worth pausing for, without the need for noise.",
        },
        href: "/giai-tri-thien-lanh#tin-dang-chu-y",
      },
      {
        id: "vui-cuoi",
        title: { vi: "Vui cười", en: "Laughter" },
        summary: {
          vi: "Sự nhẹ nhàng giúp tinh thần được thả lỏng hơn, nhưng vẫn giữ sự tử tế.",
          en: "Gentle humor that helps you unwind while keeping kindness intact.",
        },
        href: "/giai-tri-thien-lanh#vui-cuoi",
      },
      {
        id: "ky-thuat-thoi-hoang-kim",
        title: { vi: "Kỹ thuật thời hoàng kim", en: "Golden Age Technology" },
        summary: {
          vi: "Những giá trị kỹ thuật đẹp và đáng nhớ theo thời gian.",
          en: "Technical ideas and stories with timeless value.",
        },
        href: "/giai-tri-thien-lanh#ky-thuat-thoi-hoang-kim",
      },
      {
        id: "trang-suc-thoi-trang-my-pham",
        title: { vi: "Trang sức – Thời trang – Mỹ phẩm", en: "Jewelry – Fashion – Cosmetics" },
        summary: {
          vi: "Một góc thẩm mỹ tích cực, tôn trọng vẻ đẹp và sức khỏe.",
          en: "An aesthetic corner that balances beauty and well-being.",
        },
        href: "/giai-tri-thien-lanh#trang-suc-thoi-trang-my-pham",
      },
      {
        id: "ve-dep-thien-nhien",
        title: { vi: "Vẻ đẹp thiên nhiên", en: "Beauty of Nature" },
        summary: {
          vi: "Nơi cái đẹp giúp con người dịu lại và phục hồi năng lượng.",
          en: "Where beauty helps us settle and restore energy.",
        },
        href: "/giai-tri-thien-lanh#ve-dep-thien-nhien",
      },
      {
        id: "xu-so-than-tien-cua-tre-tho",
        title: { vi: "Xứ sở thần tiên của trẻ thơ", en: "Wonderland for Children" },
        summary: {
          vi: "Một góc nhìn trong trẻo, giàu tưởng tượng cho trẻ em và gia đình.",
          en: "A clearer and imaginative space for children and families.",
        },
        href: "/giai-tri-thien-lanh#xu-so-than-tien-cua-tre-tho",
      },
      {
        id: "tam-linh-va-doi-song",
        title: { vi: "Tâm linh và đời sống", en: "Spirituality and Daily Life" },
        summary: {
          vi: "Những suy ngẫm chạm đến chiều sâu bên trong, theo nhịp sống thực tế.",
          en: "Reflections that open inner depth while staying grounded in everyday life.",
        },
        href: "/giai-tri-thien-lanh#tam-linh-va-doi-song",
      },
    ],
    relatedDirections: [
      {
        title: { vi: "Quay về Dinh dưỡng thiện lành", en: "Back to Wholesome Nutrition" },
        description: {
          vi: "Giữ nền sức khỏe vững để việc thư giãn có chất lượng và bền hơn.",
          en: "A strong wellness base helps entertainment choices become steadier and healthier.",
        },
        href: "/dinh-duong-thien-lanh",
      },
      {
        title: { vi: "Sang Ứng xử thiện lành", en: "Continue to Wholesome Conduct" },
        description: {
          vi: "Giữ nhịp giải trí lành mạnh để hỗ trợ cách sống và cách ứng xử tử tế.",
          en: "Healthy media habits can reinforce kinder daily conduct.",
        },
        href: "/hanh-dong-thien-lanh",
      },
      {
        title: { vi: "Về trang chủ", en: "Back to Home" },
        description: {
          vi: "Quay lại trang chủ để xem toàn bộ hướng nội dung đang mở.",
          en: "Return home to review all active content directions.",
        },
        href: "/",
      },
    ],
    primaryCta: {
      label: { vi: "Mở ra từ đây", en: "Begin Here" },
      href: "/giai-tri-thien-lanh#tin-dang-chu-y",
    },
  },
  "y-hoc-thien-lanh": {
    slug: "y-hoc-thien-lanh",
    title: { vi: "Y học thiện lành", en: "Wholesome Medicine" },
    heroKicker: { vi: "Hướng mở rộng", en: "Expansion direction" },
    description: {
      vi: "Góc nhìn sức khỏe nền tảng, đi từ phòng ngừa đến chăm sóc với tinh thần nhân văn.",
      en: "A humane health perspective, from prevention to practical care.",
    },
    clusters: [
      {
        id: "kien-thuc-suc-khoe-nen-tang",
        title: { vi: "Kiến thức sức khỏe nền tảng", en: "Foundational Health Knowledge" },
        summary: {
          vi: "Làm rõ những điều căn bản để bớt rối trước khi đi vào thông tin chuyên sâu.",
          en: "Clarify the basics first, then move into deeper health content with more confidence.",
        },
        href: "/y-hoc-thien-lanh#kien-thuc-suc-khoe-nen-tang",
      },
      {
        id: "phong-ngua",
        title: { vi: "Phòng ngừa", en: "Prevention" },
        summary: {
          vi: "Những cách chăm sóc sớm giúp giảm rủi ro và giữ chất lượng sống lâu dài.",
          en: "Early care practices that reduce risk and support long-term quality of life.",
        },
        href: "/y-hoc-thien-lanh#phong-ngua",
      },
      {
        id: "hoi-dap-suc-khoe-pho-thong",
        title: { vi: "Hỏi đáp sức khỏe phổ thông", en: "General Health Q&A" },
        summary: {
          vi: "Các câu hỏi gần đời sống, được trả lời ngắn gọn, dễ hiểu và có căn cứ.",
          en: "Everyday health questions answered clearly, concisely, and with grounded context.",
        },
        href: "/y-hoc-thien-lanh#hoi-dap-suc-khoe-pho-thong",
      },
    ],
    relatedDirections: [
      {
        title: { vi: "Bắt đầu từ Dinh dưỡng thiện lành", en: "Begin with Wholesome Nutrition" },
        description: {
          vi: "Giữ nền dinh dưỡng rõ ràng trước khi mở rộng thêm góc nhìn sức khỏe.",
          en: "Keep a clear nutrition base before broadening into wider health perspectives.",
        },
        href: "/dinh-duong-thien-lanh",
      },
      {
        title: { vi: "Sang Ứng xử thiện lành", en: "Continue to Wholesome Conduct" },
        description: {
          vi: "Khi hiểu rõ sức khỏe hơn, việc ứng xử với bản thân và người thân cũng nhẹ hơn.",
          en: "As health understanding deepens, daily conduct with self and others often improves too.",
        },
        href: "/hanh-dong-thien-lanh",
      },
      {
        title: { vi: "Về trang chủ", en: "Back to Home" },
        description: {
          vi: "Quay lại trang chủ để xem các hướng nội dung đang được ưu tiên.",
          en: "Return home to review the content directions currently prioritized.",
        },
        href: "/",
      },
    ],
    primaryCta: {
      label: { vi: "Khám phá thêm", en: "Explore More" },
      href: "/",
    },
  },
  "loi-noi-thien-lanh": {
    slug: "loi-noi-thien-lanh",
    title: { vi: "Lời nói thiện lành", en: "Wholesome Speech" },
    heroKicker: { vi: "Hướng mở rộng", en: "Expansion direction" },
    description: {
      vi: "Giữ lời nói rõ ràng, tử tế và có trách nhiệm để giảm tổn thương trong giao tiếp.",
      en: "A communication direction centered on clarity, kindness, and responsibility.",
    },
    clusters: [
      {
        id: "nguyen-tac-giao-tiep",
        title: { vi: "Nguyên tắc giao tiếp", en: "Communication Principles" },
        summary: {
          vi: "Những nguyên tắc giúp nói thật mà vẫn giữ kết nối.",
          en: "Principles for speaking honestly while preserving connection.",
        },
        href: "/loi-noi-thien-lanh#nguyen-tac-giao-tiep",
      },
      {
        id: "thuc-hanh-doi-thoai",
        title: { vi: "Thực hành đối thoại", en: "Dialogue Practice" },
        summary: {
          vi: "Gợi ý cách trao đổi thẳng thắn nhưng không làm người khác bị đẩy vào thế phòng vệ.",
          en: "Practical ways to speak directly without pushing others into defensiveness.",
        },
        href: "/loi-noi-thien-lanh#thuc-hanh-doi-thoai",
      },
      {
        id: "tinh-huong-thuong-gap",
        title: { vi: "Tình huống thường gặp", en: "Common Situations" },
        summary: {
          vi: "Cách nói khi bất đồng, khi góp ý, khi cần giữ ranh giới.",
          en: "How to communicate in disagreement, feedback, and boundary-setting moments.",
        },
        href: "/loi-noi-thien-lanh#tinh-huong-thuong-gap",
      },
    ],
    relatedDirections: [
      {
        title: { vi: "Giữ nền từ Dinh dưỡng thiện lành", en: "Keep your base in Wholesome Nutrition" },
        description: {
          vi: "Một nền sống khỏe rõ ràng giúp giao tiếp bình tĩnh và sáng hơn.",
          en: "A steady wellness foundation often supports calmer and clearer communication.",
        },
        href: "/dinh-duong-thien-lanh",
      },
      {
        title: { vi: "Sang Ứng xử thiện lành", en: "Continue to Wholesome Conduct" },
        description: {
          vi: "Nối lời nói với hành động để cách sống nhất quán hơn.",
          en: "Connect speech with action for a more coherent way of living.",
        },
        href: "/hanh-dong-thien-lanh",
      },
      {
        title: { vi: "Về trang chủ", en: "Back to Home" },
        description: {
          vi: "Quay lại trang chủ để chọn hướng đọc tiếp theo.",
          en: "Return home and choose your next reading direction.",
        },
        href: "/",
      },
    ],
    primaryCta: {
      label: { vi: "Khám phá thêm", en: "Explore More" },
      href: "/",
    },
  },
  "suy-nghi-thien-lanh": {
    slug: "suy-nghi-thien-lanh",
    title: { vi: "Suy nghĩ thiện lành", en: "Wholesome Thoughts" },
    heroKicker: { vi: "Hướng mở rộng", en: "Expansion direction" },
    description: {
      vi: "Nuôi dưỡng nhận thức sáng rõ để giữ đời sống nội tâm cân bằng hơn mỗi ngày.",
      en: "Cultivating clearer awareness for a steadier and more balanced inner life.",
    },
    clusters: [
      {
        id: "thuc-hanh-tu-duy",
        title: { vi: "Thực hành tư duy", en: "Thinking Practices" },
        summary: {
          vi: "Những bước nhỏ giúp bớt cuốn theo nhiễu thông tin và phản ứng vội.",
          en: "Small practices that reduce noise-driven reactions and rushed conclusions.",
        },
        href: "/suy-nghi-thien-lanh#thuc-hanh-tu-duy",
      },
      {
        id: "can-bang-noi-tam",
        title: { vi: "Cân bằng nội tâm", en: "Inner Balance" },
        summary: {
          vi: "Giữ một nhịp sống bên trong vừa sáng vừa dịu, đủ để đi đường dài.",
          en: "Building an inner rhythm that stays both clear and gentle over time.",
        },
        href: "/suy-nghi-thien-lanh#can-bang-noi-tam",
      },
      {
        id: "goc-nhin-thuc-te",
        title: { vi: "Góc nhìn thực tế", en: "Grounded Perspective" },
        summary: {
          vi: "Nhìn vấn đề gần với đời sống thật để bớt cực đoan và bớt mệt.",
          en: "A grounded lens that keeps thinking practical, humane, and less extreme.",
        },
        href: "/suy-nghi-thien-lanh#goc-nhin-thuc-te",
      },
    ],
    relatedDirections: [
      {
        title: { vi: "Bắt đầu từ Dinh dưỡng thiện lành", en: "Begin with Wholesome Nutrition" },
        description: {
          vi: "Nền dinh dưỡng tốt thường giúp tinh thần sáng hơn và ổn định hơn.",
          en: "A healthy nutrition base often supports clearer and steadier thinking.",
        },
        href: "/dinh-duong-thien-lanh",
      },
      {
        title: { vi: "Sang Giải trí thiện lành", en: "Continue to Wholesome Entertainment" },
        description: {
          vi: "Nội dung giải trí phù hợp giúp đầu óc nghỉ ngơi mà không rơi vào quá tải.",
          en: "The right entertainment can rest the mind without adding overload.",
        },
        href: "/giai-tri-thien-lanh",
      },
      {
        title: { vi: "Về trang chủ", en: "Back to Home" },
        description: {
          vi: "Quay lại trang chủ để xem các hướng nội dung đang mở.",
          en: "Return home to review the currently active content directions.",
        },
        href: "/",
      },
    ],
    primaryCta: {
      label: { vi: "Khám phá thêm", en: "Explore More" },
      href: "/",
    },
  },
  "coi-vui-cuoi": {
    slug: "coi-vui-cuoi",
    title: { vi: "Cõi vui cười", en: "Joyful Laughter" },
    heroKicker: { vi: "Hướng mở rộng", en: "Expansion direction" },
    description: {
      vi: "Một không gian tiếng cười nhẹ, tích cực và không độc hại.",
      en: "A space for light, positive, and wholesome laughter.",
    },
    clusters: [
      {
        id: "chuyen-vui-nhe-nhang",
        title: { vi: "Chuyện vui nhẹ nhàng", en: "Gentle Light Stories" },
        summary: {
          vi: "Những mẩu chuyện đủ vui để thư giãn mà không đặt ai vào thế bị tổn thương.",
          en: "Stories that are light enough to relax without turning anyone into a target.",
        },
        href: "/coi-vui-cuoi#chuyen-vui-nhe-nhang",
      },
      {
        id: "thu-gian-sach",
        title: { vi: "Thư giãn sạch", en: "Clean Relaxation" },
        summary: {
          vi: "Giữ sự vui vẻ trong giới hạn văn minh, không mỉa mai và không độc hại.",
          en: "A gentle style of humor that stays civil, kind, and non-toxic.",
        },
        href: "/coi-vui-cuoi#thu-gian-sach",
      },
      {
        id: "vui-khong-gieu-cot-xau",
        title: { vi: "Vui không giễu cợt xấu", en: "Humor Without Cruel Ridicule" },
        summary: {
          vi: "Niềm vui vẫn có thể tròn đầy mà không cần dựa trên tổn thương của người khác.",
          en: "Humor can still feel full and warm without relying on someone else's pain.",
        },
        href: "/coi-vui-cuoi#vui-khong-gieu-cot-xau",
      },
    ],
    relatedDirections: [
      {
        title: { vi: "Sang Giải trí thiện lành", en: "Continue to Wholesome Entertainment" },
        description: {
          vi: "Mở rộng từ tiếng cười sang các lựa chọn giải trí tích cực khác.",
          en: "Expand from laughter into broader wholesome entertainment choices.",
        },
        href: "/giai-tri-thien-lanh",
      },
      {
        title: { vi: "Giữ nền từ Dinh dưỡng thiện lành", en: "Keep your base in Wholesome Nutrition" },
        description: {
          vi: "Nền sống khỏe giúp nhịp thư giãn trở nên nhẹ và bền hơn.",
          en: "A healthy base helps your relaxation rhythm stay gentle and sustainable.",
        },
        href: "/dinh-duong-thien-lanh",
      },
      {
        title: { vi: "Về trang chủ", en: "Back to Home" },
        description: {
          vi: "Quay lại trang chủ để chọn hướng đọc tiếp theo.",
          en: "Return home and choose your next reading direction.",
        },
        href: "/",
      },
    ],
    primaryCta: {
      label: { vi: "Khám phá thêm", en: "Explore More" },
      href: "/",
    },
  },
};

Object.assign(contentBranchesI18n, primaryBranchOverrides);
