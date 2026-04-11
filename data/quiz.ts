export type QuizBranchKey = "A" | "B" | "C" | "D" | "E";

export type QuizOption = {
  key: QuizBranchKey;
  label: string;
};

export type QuizQuestion = {
  id: number;
  prompt: string;
  options: QuizOption[];
};

export type QuizArticle = {
  title: string;
  summary: string;
  href: string;
};

export type QuizBranchProfile = {
  key: QuizBranchKey;
  label: string;
  sectionHref: string;
  resultTitle: string;
  leadLines: string[];
  suggestedArticles: QuizArticle[];
};

export const QUIZ_SECTION = {
  title: "Bắt đầu từ điều gần với bạn",
  subtitle: "Trả lời vài câu hỏi ngắn để web gợi đúng phần nên đọc trước. Không có đúng sai.",
};

export const BRANCH_ORDER: QuizBranchKey[] = ["A", "B", "C", "D", "E"];

export const BRANCH_LABELS: Record<QuizBranchKey, string> = {
  A: "Hiểu lại điều quen",
  B: "Sống khỏe dễ hiểu",
  C: "Bắt đầu từ những thay đổi nhỏ",
  D: "Câu chuyện thay đổi",
  E: "Góc nhìn nhân ái",
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    prompt: "Khi bắt đầu một ngày hơi mệt, điều bạn muốn có trước tiên là gì?",
    options: [
      { key: "A", label: "Một góc nhìn giúp hiểu lại điều đang diễn ra." },
      { key: "B", label: "Một giải thích rõ ràng để biết cơ thể đang cần gì." },
      { key: "C", label: "Một bước thật nhỏ để làm ngay mà không áp lực." },
      { key: "D", label: "Một câu chuyện thật để thấy mình không đơn độc." },
      { key: "E", label: "Một lời nhắc dịu dàng về cách nhìn người và nhìn mình." },
    ],
  },
  {
    id: 2,
    prompt: "Khi đọc nội dung về sức khỏe, điều nào khiến bạn thấy dễ tiếp nhận nhất?",
    options: [
      { key: "A", label: "Phân tích gốc rễ của một thói quen quen thuộc." },
      { key: "B", label: "Ngôn ngữ đơn giản, dễ hiểu, có thể áp dụng ngay." },
      { key: "C", label: "Danh sách hành động ngắn, ít bước, làm được trong ngày." },
      { key: "D", label: "Hành trình thay đổi của một người gần với đời thật." },
      { key: "E", label: "Góc nhìn nhân văn, nhẹ nhàng, không phán xét." },
    ],
  },
  {
    id: 3,
    prompt: "Điều gì thường làm bạn muốn quay lại đọc tiếp một chủ đề?",
    options: [
      { key: "A", label: "Nội dung mở ra cách hiểu mới cho điều vốn quen." },
      { key: "B", label: "Bài viết rõ ràng, ít thuật ngữ, dễ theo dõi." },
      { key: "C", label: "Có gợi ý từng bước nhỏ để bắt đầu dần dần." },
      { key: "D", label: "Có câu chuyện thực tế với cảm xúc chân thành." },
      { key: "E", label: "Có chiều sâu về sự tử tế và kết nối giữa người với người." },
    ],
  },
  {
    id: 4,
    prompt: "Khi hơi bối rối trước quá nhiều lời khuyên, bạn thường cần gì nhất?",
    options: [
      { key: "A", label: "Dừng lại để hiểu vì sao mình đang làm như vậy." },
      { key: "B", label: "Một phiên bản dễ hiểu của thông tin cần thiết." },
      { key: "C", label: "Một thay đổi nhỏ, rõ ràng để bắt đầu lại." },
      { key: "D", label: "Một câu chuyện truyền cảm hứng nhưng vẫn thực tế." },
      { key: "E", label: "Một góc nhìn bao dung để bớt căng thẳng với bản thân." },
    ],
  },
  {
    id: 5,
    prompt: "Trong tuần này, điều bạn muốn cải thiện trước là gì?",
    options: [
      { key: "A", label: "Hiểu lại nhịp sống hiện tại và điều đang khiến mình hụt hơi." },
      { key: "B", label: "Nắm các nguyên tắc sống khỏe theo cách đơn giản." },
      { key: "C", label: "Chọn một thói quen nhỏ và duy trì đều đặn." },
      { key: "D", label: "Đọc chuyện thay đổi thật để có thêm động lực." },
      { key: "E", label: "Nuôi lại cảm giác kết nối và nhân ái trong sinh hoạt thường ngày." },
    ],
  },
  {
    id: 6,
    prompt: "Nếu chỉ chọn một hướng để bắt đầu trong 7 ngày tới, bạn nghiêng về gì?",
    options: [
      { key: "A", label: "Quan sát lại suy nghĩ và thói quen quen thuộc." },
      { key: "B", label: "Ưu tiên các kiến thức sức khỏe dễ hiểu và thực tế." },
      { key: "C", label: "Thực hành từng thay đổi nhỏ, vừa sức." },
      { key: "D", label: "Lấy cảm hứng từ những câu chuyện đã đi qua khó khăn." },
      { key: "E", label: "Đọc các góc nhìn nuôi dưỡng sự tử tế và bình an." },
    ],
  },
  {
    id: 7,
    prompt: "Sau khi đọc xong một bài hay, bạn mong điều gì ở bước tiếp theo?",
    options: [
      { key: "A", label: "Có thêm cách nhìn mới để sống chậm và rõ hơn." },
      { key: "B", label: "Biết nên làm gì cho sức khỏe mà không rối." },
      { key: "C", label: "Có một hành động nhỏ để bắt đầu ngay hôm nay." },
      { key: "D", label: "Có thêm niềm tin rằng thay đổi bền vững là có thật." },
      { key: "E", label: "Giữ được một tâm thế ấm áp với mình và với người khác." },
    ],
  },
];

export const quizBranchProfiles: Record<QuizBranchKey, QuizBranchProfile> = {
  A: {
    key: "A",
    label: BRANCH_LABELS.A,
    sectionHref: "/hieu-lai-dieu-quen",
    resultTitle: "Một nhịp đọc để nhìn lại điều quen",
    leadLines: [
      "Có vẻ lúc này bạn đang cần một khoảng dừng để hiểu lại điều vốn quá quen.",
      "Dường như khi nhìn rõ căn nguyên, bạn sẽ thấy nhẹ hơn trước những áp lực thường ngày.",
      "Có thể phù hợp hơn nếu bắt đầu từ các bài viết giúp soi lại góc nhìn sống và thói quen.",
      "Từ nền tảng đó, những thay đổi về sức khỏe và tinh thần sẽ tự nhiên hơn.",
    ],
    suggestedArticles: [
      {
        title: "Vì sao điều quen thuộc vẫn khiến mình mệt?",
        summary: "Đi từ nhịp sống hằng ngày để nhận ra nguồn gốc của sự quá tải.",
        href: "/hieu-lai-dieu-quen/vi-sao-dieu-quen-van-met",
      },
      {
        title: "Sống chậm mà không tụt lại",
        summary: "Một cách nhìn lại nhịp sống để vừa bình tĩnh vừa hiệu quả.",
        href: "/hieu-lai-dieu-quen/song-cham-khong-tut-lai",
      },
      {
        title: "Ba lớp của một thói quen: nghĩ, làm, lặp lại",
        summary: "Hiểu cấu trúc thói quen trước khi cố gắng thay đổi nó.",
        href: "/hieu-lai-dieu-quen/ba-lop-cua-thoi-quen",
      },
    ],
  },
  B: {
    key: "B",
    label: BRANCH_LABELS.B,
    sectionHref: "/song-khoe-de-hieu",
    resultTitle: "Một hướng đọc rõ ràng và dễ áp dụng",
    leadLines: [
      "Có vẻ bạn hợp với những nội dung ngắn gọn, dễ hiểu và đi thẳng vào điều cần làm.",
      "Dường như khi thông tin được trình bày rõ ràng, bạn sẽ bớt lo và dễ bắt đầu hơn.",
      "Có thể phù hợp hơn nếu đọc trước các bài giải thích nền tảng sức khỏe theo ngôn ngữ gần gũi.",
      "Từ đó, bạn sẽ chọn được hướng thực hành phù hợp với đời sống hiện tại.",
    ],
    suggestedArticles: [
      {
        title: "Ngủ đủ là gì theo cách dễ hiểu nhất",
        summary: "Tóm tắt những nguyên tắc quan trọng để cải thiện chất lượng giấc ngủ.",
        href: "/song-khoe-de-hieu/ngu-du-la-gi",
      },
      {
        title: "Ăn uống lành mạnh mà không cần quá nhiều quy tắc",
        summary: "Các nguyên tắc đơn giản để ăn vừa đủ, bền vững, ít áp lực.",
        href: "/song-khoe-de-hieu/an-uong-lanh-manh-de-hieu",
      },
      {
        title: "Vận động nhẹ mỗi ngày: bắt đầu từ đâu",
        summary: "Một lộ trình dễ theo để cơ thể linh hoạt hơn sau 1 tuần.",
        href: "/song-khoe-de-hieu/van-dong-nhe-moi-ngay",
      },
    ],
  },
  C: {
    key: "C",
    label: BRANCH_LABELS.C,
    sectionHref: "/thay-doi-nho",
    resultTitle: "Một lối đi nhỏ nhưng chắc để bắt đầu",
    leadLines: [
      "Có vẻ bạn đang cần một hướng tiếp cận nhẹ nhàng: ít bước, dễ làm, duy trì được.",
      "Dường như các thay đổi lớn không cần đến ngay lúc này; điều quan trọng là bắt đầu đúng nhịp.",
      "Có thể phù hợp hơn nếu ưu tiên những bài viết về thói quen nhỏ trong bối cảnh đời sống thật.",
      "Đi từng bước vừa sức thường tạo ra chuyển biến bền hơn bạn nghĩ.",
    ],
    suggestedArticles: [
      {
        title: "Bảy ngày cho một thay đổi nhỏ",
        summary: "Chọn một việc đơn giản và duy trì theo nhịp thực tế.",
        href: "/thay-doi-nho/bay-ngay-mot-thay-doi",
      },
      {
        title: "Khi thiếu động lực: bắt đầu bằng việc nhỏ nhất",
        summary: "Cách giảm ngưỡng bắt đầu để không bỏ cuộc giữa chừng.",
        href: "/thay-doi-nho/bat-dau-bang-viec-nho-nhat",
      },
      {
        title: "Theo dõi tiến bộ mà không tự gây áp lực",
        summary: "Đo lường bằng sự đều đặn thay vì hoàn hảo.",
        href: "/thay-doi-nho/theo-doi-tien-bo-nhe-nhang",
      },
    ],
  },
  D: {
    key: "D",
    label: BRANCH_LABELS.D,
    sectionHref: "/cau-chuyen-thay-doi",
    resultTitle: "Một hướng đọc được nâng đỡ bằng câu chuyện thật",
    leadLines: [
      "Có vẻ bạn dễ được tiếp thêm sức khi thấy hành trình thay đổi của người thật, việc thật.",
      "Dường như những trải nghiệm chân thành giúp bạn tin rằng thay đổi bền vững là khả thi.",
      "Có thể phù hợp hơn nếu bắt đầu từ các câu chuyện đã đi qua giai đoạn chông chênh giống mình.",
      "Từ đó, bạn sẽ tìm ra nhịp riêng thay vì cố gắng theo khuôn mẫu.",
    ],
    suggestedArticles: [
      {
        title: "Từ mất cân bằng đến nhịp sống ổn định",
        summary: "Một hành trình thay đổi từng bước sau giai đoạn kiệt sức.",
        href: "/cau-chuyen-thay-doi/tu-mat-can-bang-den-on-dinh",
      },
      {
        title: "Không làm quá nhiều, chỉ làm đều",
        summary: "Câu chuyện giữ thói quen nhỏ trong cuộc sống bận rộn.",
        href: "/cau-chuyen-thay-doi/chi-lam-deu",
      },
      {
        title: "Khi một cộng đồng nhỏ giúp mình đi tiếp",
        summary: "Sức mạnh của việc có người đồng hành trong thay đổi lối sống.",
        href: "/cau-chuyen-thay-doi/cong-dong-nho-dong-hanh",
      },
    ],
  },
  E: {
    key: "E",
    label: BRANCH_LABELS.E,
    sectionHref: "/goc-nhin-nhan-ai",
    resultTitle: "Một hướng đọc giàu sự tử tế và chiều sâu",
    leadLines: [
      "Có vẻ bạn đang tìm một không gian đọc chậm, giàu sự thấu cảm và nhân ái.",
      "Dường như khi được nhìn bằng ánh mắt dịu dàng, bạn sẽ dễ mở lòng với thay đổi hơn.",
      "Có thể phù hợp hơn nếu bắt đầu từ các bài viết nuôi dưỡng kết nối với bản thân và với người khác.",
      "Từ cảm giác an toàn đó, việc điều chỉnh thói quen sẽ bền và tự nhiên hơn.",
    ],
    suggestedArticles: [
      {
        title: "Tử tế với bản thân không phải là nuông chiều",
        summary: "Phân biệt sự dịu dàng lành mạnh và sự buông xuôi.",
        href: "/goc-nhin-nhan-ai/tu-te-voi-ban-than",
      },
      {
        title: "Lắng nghe người khác mà không đánh mất mình",
        summary: "Giữ ranh giới mềm trong giao tiếp và chăm sóc cảm xúc.",
        href: "/goc-nhin-nhan-ai/lang-nghe-khong-danh-mat-minh",
      },
      {
        title: "Sự bình an đến từ những cử chỉ nhỏ mỗi ngày",
        summary: "Nuôi lại cảm giác kết nối bằng các thực hành đơn giản.",
        href: "/goc-nhin-nhan-ai/binh-an-tu-cu-chi-nho",
      },
    ],
  },
};
