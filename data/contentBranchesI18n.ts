import type { AppLocale } from "@/lib/locale";

export type ContentBranchSlug =
  | "dinh-duong-thien-lanh"
  | "y-hoc-thien-lanh"
  | "hanh-dong-thien-lanh"
  | "loi-noi-thien-lanh"
  | "suy-nghi-thien-lanh"
  | "giai-tri-thien-lanh"
  | "coi-vui-cuoi";

type LocalizedText = Record<AppLocale, string>;

export type BranchClusterI18n = {
  id: string;
  title: LocalizedText;
  summary: LocalizedText;
  href: string;
};

export type BranchDirectionI18n = {
  title: LocalizedText;
  description: LocalizedText;
  href: string;
};

export type ContentBranchLandingI18n = {
  slug: ContentBranchSlug;
  title: LocalizedText;
  heroKicker: LocalizedText;
  description: LocalizedText;
  clusters: BranchClusterI18n[];
  relatedDirections: BranchDirectionI18n[];
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
      vi: "Nhánh đi sâu giai đoạn đầu",
      en: "Deep-focus branch in phase one",
    },
    description: {
      vi: "Quay về với dinh dưỡng từ gốc rễ.",
      en: "Returning to nutrition at its roots.",
    },
    clusters: [
      {
        id: "tong-quan",
        title: { vi: "Tổng quan", en: "Overview" },
        summary: {
          vi: "Bản đồ tổng thể của nhánh và cách bắt đầu theo nhịp phù hợp.",
          en: "The overall map of this branch and how to begin at a fitting pace.",
        },
        href: "/dinh-duong-thien-lanh#tong-quan",
      },
      {
        id: "kien-thuc-nen-tang",
        title: { vi: "Kiến thức nền tảng", en: "Foundational Knowledge" },
        summary: {
          vi: "Những nguyên tắc nền cần nắm trước khi áp dụng vào đời sống.",
          en: "Core principles to understand before applying them in daily life.",
        },
        href: "/dinh-duong-thien-lanh#kien-thuc-nen-tang",
      },
      {
        id: "phim-tai-lieu-goc-nhin",
        title: { vi: "Phim tài liệu / Góc nhìn", en: "Documentaries / Perspectives" },
        summary: {
          vi: "What The Health được đặt đúng tại cụm này như một góc nhìn để đối chiếu.",
          en: "What The Health sits in this cluster as one perspective for comparison.",
        },
        href: "/dinh-duong-thien-lanh#phim-tai-lieu-goc-nhin",
      },
      {
        id: "bai-viet-chuyen-de",
        title: { vi: "Bài viết chuyên đề", en: "Featured Topics" },
        summary: {
          vi: "Các chuyên đề đi sâu theo vấn đề thực tế, đọc có hệ thống.",
          en: "Deeper topic articles organized around real and practical concerns.",
        },
        href: "/dinh-duong-thien-lanh#bai-viet-chuyen-de",
      },
      {
        id: "cau-hoi-thuong-gap",
        title: { vi: "Câu hỏi thường gặp", en: "Frequently Asked Questions" },
        summary: {
          vi: "Các câu hỏi phổ biến để đối chiếu nguồn và làm rõ hiểu lầm thường gặp.",
          en: "Common questions to compare sources and clarify recurring misconceptions.",
        },
        href: "/dinh-duong-thien-lanh#cau-hoi-thuong-gap",
      },
      {
        id: "hanh-trinh-thuc-hanh",
        title: { vi: "Hành trình thực hành", en: "Practice Journey" },
        summary: {
          vi: "Những bước thực hành vừa sức để chuyển hiểu biết thành thay đổi bền hơn.",
          en: "Manageable actions that turn understanding into more sustainable change.",
        },
        href: "/dinh-duong-thien-lanh#hanh-trinh-thuc-hanh",
      },
    ],
    relatedDirections: [
      {
        title: {
          vi: "Xem cụm Phim tài liệu / Góc nhìn",
          en: "View the Documentaries / Perspectives cluster",
        },
        description: {
          vi: "Nơi tập hợp các góc nhìn tài liệu, bao gồm What The Health.",
          en: "A curated cluster of documentary viewpoints, including What The Health.",
        },
        href: "/dinh-duong-thien-lanh#phim-tai-lieu-goc-nhin",
      },
      {
        title: {
          vi: "Đi tiếp sang Hành động thiện lành",
          en: "Continue to Wholesome Actions",
        },
        description: {
          vi: "Khi đã có nền, chuyển sang nhánh hành động để giữ nhịp thực hành.",
          en: "After building foundations, move to action for steadier practice.",
        },
        href: "/hanh-dong-thien-lanh",
      },
      {
        title: {
          vi: "Xem toàn bộ 7 nhánh",
          en: "View all seven branches",
        },
        description: {
          vi: "Quay lại trang chủ để xem cách các nhánh liên kết thành một hệ nội dung.",
          en: "Return home to see how all branches connect into one system.",
        },
        href: "/",
      },
    ],
    primaryCta: {
      label: {
        vi: "Vào cụm Phim tài liệu / Góc nhìn",
        en: "Open Documentaries / Perspectives",
      },
      href: "/dinh-duong-thien-lanh#phim-tai-lieu-goc-nhin",
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
    heroKicker: { vi: "Cây chính đi sâu giai đoạn đầu", en: "Primary deep-focus pillar" },
    description: {
      vi: "Quay về với dinh dưỡng từ gốc rễ, đi từ nền tảng rõ ràng đến thực hành bền vững.",
      en: "Returning to nutrition at its roots, moving from clear foundations to sustainable practice.",
    },
    clusters: [
      {
        id: "kien-thuc-nen-tang",
        title: { vi: "Kiến thức nền tảng", en: "Foundational Knowledge" },
        summary: {
          vi: "Những nguyên lý cần nắm trước để đọc đúng, hiểu đúng và áp dụng có chọn lọc.",
          en: "Core principles to build first for better understanding and practical judgment.",
        },
        href: "/dinh-duong-thien-lanh#kien-thuc-nen-tang",
      },
      {
        id: "sua-va-nhung-dieu-thuong-tin",
        title: { vi: "Sữa và những điều thường tin", en: "Milk and Common Beliefs" },
        summary: {
          vi: "Đối chiếu các niềm tin phổ biến về sữa bằng góc nhìn cân bằng, rõ nguồn.",
          en: "A balanced, source-aware look at common beliefs surrounding milk.",
        },
        href: "/dinh-duong-thien-lanh#sua-va-nhung-dieu-thuong-tin",
      },
      {
        id: "chat-dam-hang-ngay",
        title: { vi: "Chất đạm hằng ngày", en: "Daily Protein" },
        summary: {
          vi: "Hiểu nhu cầu chất đạm theo nhịp sống thực tế và lựa chọn phù hợp từng hoàn cảnh.",
          en: "Understanding protein needs in practical daily life and choosing appropriately.",
        },
        href: "/dinh-duong-thien-lanh#chat-dam-hang-ngay",
      },
      {
        id: "dai-thao-duong-beo-phi-chuyen-hoa",
        title: { vi: "Đái tháo đường – béo phì – chuyển hóa", en: "Diabetes – Obesity – Metabolism" },
        summary: {
          vi: "Tổng quan các vấn đề chuyển hóa phổ biến và vai trò của bữa ăn hằng ngày.",
          en: "A practical overview of metabolic conditions and the role of daily meals.",
        },
        href: "/dinh-duong-thien-lanh#dai-thao-duong-beo-phi-chuyen-hoa",
      },
      {
        id: "ung-thu-va-goc-nhin-tu-bua-an",
        title: { vi: "Ung thư và góc nhìn từ bữa ăn", en: "Cancer and Meal-Based Perspectives" },
        summary: {
          vi: "Tiếp cận thận trọng, nhân văn và rõ nguồn khi đọc các nội dung dinh dưỡng liên quan ung thư.",
          en: "A careful, humane, source-aware approach to nutrition content related to cancer.",
        },
        href: "/dinh-duong-thien-lanh#ung-thu-va-goc-nhin-tu-bua-an",
      },
    ],
    relatedDirections: [
      {
        title: { vi: "Sang Ứng xử thiện lành", en: "Continue to Wholesome Conduct" },
        description: {
          vi: "Khi nền dinh dưỡng đã rõ hơn, mở rộng sang cách ứng xử trong đời sống thường ngày.",
          en: "After grounding nutrition, expand into practical conduct across daily life.",
        },
        href: "/hanh-dong-thien-lanh",
      },
      {
        title: { vi: "Sang Giải trí thiện lành", en: "Continue to Wholesome Entertainment" },
        description: {
          vi: "Giữ nhịp sống tích cực bằng các lựa chọn giải trí lành mạnh hơn.",
          en: "Support a healthier rhythm through positive and wholesome entertainment.",
        },
        href: "/giai-tri-thien-lanh",
      },
      {
        title: { vi: "Về trang chủ", en: "Back to Home" },
        description: {
          vi: "Xem đầy đủ 3 cây chính đang được ưu tiên ngoài mặt website.",
          en: "View the three primary pillars currently surfaced on the homepage.",
        },
        href: "/",
      },
    ],
    primaryCta: {
      label: { vi: "Khám phá Dinh dưỡng thiện lành", en: "Explore Wholesome Nutrition" },
      href: "/dinh-duong-thien-lanh#kien-thuc-nen-tang",
    },
  },
  "hanh-dong-thien-lanh": {
    slug: "hanh-dong-thien-lanh",
    title: { vi: "Ứng xử thiện lành", en: "Wholesome Conduct" },
    heroKicker: { vi: "Cây chính", en: "Primary pillar" },
    description: {
      vi: "Ứng xử thiện lành bắt đầu từ bản thân, lan ra gia đình, giao tiếp và đời sống xã hội.",
      en: "Wholesome conduct begins with self-awareness, then extends to family, communication, and social life.",
    },
    clusters: [
      {
        id: "ung-xu-voi-ban-than",
        title: { vi: "Ứng xử với bản thân", en: "Conduct with Yourself" },
        summary: {
          vi: "Giữ nhịp sống nội tâm cân bằng, tự trọng và tự chăm sóc đúng mực.",
          en: "Cultivating balanced self-respect, self-care, and inner steadiness.",
        },
        href: "/hanh-dong-thien-lanh#ung-xu-voi-ban-than",
      },
      {
        id: "ung-xu-trong-gia-dinh",
        title: { vi: "Ứng xử trong gia đình", en: "Conduct in Family Life" },
        summary: {
          vi: "Nuôi mối quan hệ gần gũi bằng lắng nghe, tôn trọng và trách nhiệm.",
          en: "Nurturing close relationships through listening, respect, and responsibility.",
        },
        href: "/hanh-dong-thien-lanh#ung-xu-trong-gia-dinh",
      },
      {
        id: "loi-noi-va-giao-tiep",
        title: { vi: "Lời nói và giao tiếp", en: "Speech and Communication" },
        summary: {
          vi: "Nói rõ mà vẫn tử tế, trao đổi thẳng nhưng không gây tổn thương.",
          en: "Communicating clearly and directly while preserving care and dignity.",
        },
        href: "/hanh-dong-thien-lanh#loi-noi-va-giao-tiep",
      },
      {
        id: "ung-xu-ngoai-xa-hoi",
        title: { vi: "Ứng xử ngoài xã hội", en: "Conduct in Society" },
        summary: {
          vi: "Giữ thái độ văn minh, công bằng và có trách nhiệm trong tương tác xã hội.",
          en: "Practicing civility, fairness, and responsibility in social interactions.",
        },
        href: "/hanh-dong-thien-lanh#ung-xu-ngoai-xa-hoi",
      },
      {
        id: "tinh-huong-thuong-gap",
        title: { vi: "Tình huống thường gặp", en: "Common Situations" },
        summary: {
          vi: "Gợi ý cách ứng xử cho những tình huống quen thuộc trong đời sống hàng ngày.",
          en: "Practical conduct cues for common real-life situations.",
        },
        href: "/hanh-dong-thien-lanh#tinh-huong-thuong-gap",
      },
    ],
    relatedDirections: [
      {
        title: { vi: "Giữ nền từ Dinh dưỡng thiện lành", en: "Keep your base in Wholesome Nutrition" },
        description: {
          vi: "Nền dinh dưỡng vững giúp các thay đổi về ứng xử dễ duy trì hơn.",
          en: "A stable nutrition foundation helps behavioral changes remain sustainable.",
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
      label: { vi: "Khám phá Ứng xử thiện lành", en: "Explore Wholesome Conduct" },
      href: "/hanh-dong-thien-lanh#ung-xu-voi-ban-than",
    },
  },
  "giai-tri-thien-lanh": {
    slug: "giai-tri-thien-lanh",
    title: { vi: "Giải trí thiện lành", en: "Wholesome Entertainment" },
    heroKicker: { vi: "Cây chính", en: "Primary pillar" },
    description: {
      vi: "Giải trí thiện lành giúp thư giãn, làm giàu cảm xúc tích cực và giữ môi trường nội dung sạch.",
      en: "Wholesome entertainment supports healthy relaxation and a cleaner media environment.",
    },
    clusters: [
      {
        id: "tin-dang-chu-y",
        title: { vi: "Tin đáng chú ý", en: "Noteworthy News" },
        summary: {
          vi: "Những tin cần theo dõi với góc nhìn bình tĩnh và chọn lọc.",
          en: "News worth following with calm, selective attention.",
        },
        href: "/giai-tri-thien-lanh#tin-dang-chu-y",
      },
      {
        id: "vui-cuoi",
        title: { vi: "Vui cười", en: "Laughter" },
        summary: {
          vi: "Khoảnh khắc thư giãn nhẹ nhàng, tích cực và không độc hại.",
          en: "Light, positive humor without harmful undertones.",
        },
        href: "/giai-tri-thien-lanh#vui-cuoi",
      },
      {
        id: "ky-thuat-thoi-hoang-kim",
        title: { vi: "Kỹ thuật thời hoàng kim", en: "Golden Age Technology" },
        summary: {
          vi: "Nội dung kỹ thuật mang tính giá trị bền, giúp học và nhớ lâu.",
          en: "Timeless technical content with enduring practical value.",
        },
        href: "/giai-tri-thien-lanh#ky-thuat-thoi-hoang-kim",
      },
      {
        id: "trang-suc-thoi-trang-my-pham",
        title: { vi: "Trang sức – Thời trang – Mỹ phẩm", en: "Jewelry – Fashion – Cosmetics" },
        summary: {
          vi: "Góc nhìn thẩm mỹ tích cực, vừa đẹp vừa tôn trọng sức khỏe và giá trị thật.",
          en: "Aesthetic content balancing beauty, well-being, and practical value.",
        },
        href: "/giai-tri-thien-lanh#trang-suc-thoi-trang-my-pham",
      },
      {
        id: "ve-dep-thien-nhien",
        title: { vi: "Vẻ đẹp thiên nhiên", en: "Beauty of Nature" },
        summary: {
          vi: "Không gian hình ảnh và câu chuyện thiên nhiên giúp phục hồi tinh thần.",
          en: "Nature-centered visuals and stories that restore attention and mood.",
        },
        href: "/giai-tri-thien-lanh#ve-dep-thien-nhien",
      },
      {
        id: "xu-so-than-tien-cua-tre-tho",
        title: { vi: "Xứ sở thần tiên của trẻ thơ", en: "Wonderland for Children" },
        summary: {
          vi: "Nội dung vui lành cho trẻ và gia đình, khơi trí tưởng tượng tích cực.",
          en: "Wholesome content for children and families with positive imagination.",
        },
        href: "/giai-tri-thien-lanh#xu-so-than-tien-cua-tre-tho",
      },
      {
        id: "tam-linh-va-doi-song",
        title: { vi: "Tâm linh và đời sống", en: "Spirituality and Daily Life" },
        summary: {
          vi: "Nội dung nuôi dưỡng đời sống tinh thần theo hướng tỉnh táo và nhân văn.",
          en: "Content that supports spiritual life with grounded, humane perspectives.",
        },
        href: "/giai-tri-thien-lanh#tam-linh-va-doi-song",
      },
    ],
    relatedDirections: [
      {
        title: { vi: "Quay về Dinh dưỡng thiện lành", en: "Back to Wholesome Nutrition" },
        description: {
          vi: "Giữ nền sức khỏe vững để việc giải trí tích cực có tác dụng dài hơn.",
          en: "Maintain a strong wellness base to make entertainment choices more meaningful.",
        },
        href: "/dinh-duong-thien-lanh",
      },
      {
        title: { vi: "Sang Ứng xử thiện lành", en: "Continue to Wholesome Conduct" },
        description: {
          vi: "Kết nối lựa chọn giải trí với cách sống và cách ứng xử hằng ngày.",
          en: "Connect entertainment habits with conduct and daily behavior.",
        },
        href: "/hanh-dong-thien-lanh",
      },
      {
        title: { vi: "Về trang chủ", en: "Back to Home" },
        description: {
          vi: "Xem đầy đủ 3 cây chính đang được surface ở homepage.",
          en: "Return to the homepage and review all three surfaced pillars.",
        },
        href: "/",
      },
    ],
    primaryCta: {
      label: { vi: "Khám phá Giải trí thiện lành", en: "Explore Wholesome Entertainment" },
      href: "/giai-tri-thien-lanh#tin-dang-chu-y",
    },
  },
};

Object.assign(contentBranchesI18n, primaryBranchOverrides);
