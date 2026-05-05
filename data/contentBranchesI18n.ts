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
  /** One small action the reader can do right now. */
  microAction?: LocalizedText;
  /** Per-cluster CTA label (overrides global openCluster label). */
  ctaLabel?: LocalizedText;
  href: string;
};

export type SevenDayPlanI18n = {
  title: LocalizedText;
  intro: LocalizedText;
  days: LocalizedText[];
  cta: LocalizedText;
};

export type SelfTrackingBlockI18n = {
  title: LocalizedText;
  text: LocalizedText;
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
  /** Optional 7-day starter plan block. */
  sevenDayPlan?: SevenDayPlanI18n;
  /** Optional lightweight self-tracking nudge block. */
  selfTrackingBlock?: SelfTrackingBlockI18n;
  /** Optional FAQ section rendered below selfTrackingBlock. */
  faqSection?: NutritionFaqSectionI18n;
  /** Optional seed / content-development ideas section. */
  seedSection?: NutritionSeedSectionI18n;
  relatedDirections: BranchDirectionI18n[];
  nutritionLanding?: NutritionLandingI18n;
  primaryCta: {
    label: LocalizedText;
    href: string;
  };
  secondaryCta?: {
    label: LocalizedText;
    href: string;
  };
};

export const contentBranchesI18n: Record<ContentBranchSlug, ContentBranchLandingI18n> = {
  // Dinh duong thien lanh: du lieu song duy nhat (da inline, khong con trong primaryBranchOverrides)
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
          href: "/dinh-duong-thien-lanh/kien-thuc-nen-tang",
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
          href: "/dinh-duong-thien-lanh/ung-thu-va-nhung-cau-hoi-tu-ban-an",
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
            id: "wth-kien-thuc-nen-tang",
            title: {
              vi: "Kiến thức nền tảng",
              en: "Foundational Knowledge",
            },
            story: {
              vi: "Phim không chỉ bàn về món ăn nào nên hay không nên ăn. Nó đặt lại cách con người tin vào một lời khuyên dinh dưỡng: niềm tin đó đến từ khoa học độc lập, thói quen xã hội, hay ảnh hưởng của quảng bá lặp lại nhiều năm?",
              en: "The film is not only about which foods should or should not be eaten. It reopens the question of how people come to trust nutrition advice: does that trust come from independent science, social habit, or years of repeated messaging?",
            },
            challengeQuestion: {
              vi: "Khi nghe một lời khuyên dinh dưỡng, điều gì giúp ta phân biệt giữa điều quen thuộc và điều thực sự đáng tin?",
              en: "When hearing nutrition advice, what helps us tell apart what is merely familiar from what is truly trustworthy?",
            },
            seedIdeas: [
              {
                vi: "Vì sao điều được lặp lại nhiều năm thường dễ bị xem là đúng?",
                en: "Why are ideas repeated for years so easily treated as true?",
              },
              {
                vi: "Một khuyến nghị dinh dưỡng phổ biến được hình thành như thế nào?",
                en: "How does a common nutrition recommendation take shape?",
              },
              {
                vi: "Khi nào thói quen xã hội đi trước bằng chứng?",
                en: "When does social habit run ahead of evidence?",
              },
              {
                vi: "Đọc một nội dung dinh dưỡng thì nên nhìn vào câu hỏi nào trước?",
                en: "What question should come first when reading a piece of nutrition content?",
              },
            ],
            href: "/dinh-duong-thien-lanh/kien-thuc-nen-tang",
            linkLabel: {
              vi: "Xem chuyên đề nền tảng",
              en: "View the foundational topic",
            },
          },
          {
            id: "wth-sua",
            title: {
              vi: "Sữa",
              en: "Milk",
            },
            story: {
              vi: "Phim đặt lại câu chuyện về sữa như một sản phẩm không chỉ được tiêu thụ vì giá trị dinh dưỡng, mà còn vì nó được nâng đỡ bởi giáo dục, quảng bá và các thông điệp quen thuộc từ rất sớm.",
              en: "The film revisits milk as a product consumed not only for its nutritional value, but also because it has long been upheld by education, promotion, and familiar messaging from an early age.",
            },
            challengeQuestion: {
              vi: "Niềm tin về sữa đang đến từ nhu cầu thực sự của cơ thể, hay từ một hệ thông tin đã quá quen thuộc?",
              en: "Does belief in milk come from the body’s actual needs, or from an information system that has become overly familiar?",
            },
            seedIdeas: [
              {
                vi: "Sữa đi từ thực phẩm thành niềm tin phổ biến bằng cách nào?",
                en: "How did milk move from being a food to becoming a widespread belief?",
              },
              {
                vi: "Vì sao quảng bá từ nhỏ có thể đi theo một người rất lâu?",
                en: "Why can early-life messaging stay with a person for so long?",
              },
              {
                vi: "Khi nào “uống sữa cho chắc” trở thành phản xạ thay vì lựa chọn có hiểu biết?",
                en: "When does “drink milk just to be safe” become a reflex instead of an informed choice?",
              },
              {
                vi: "Nếu bỏ sữa, điều gì làm nhiều người thấy thiếu an tâm?",
                en: "If someone stops drinking milk, what makes so many people feel uneasy?",
              },
            ],
            href: "/dinh-duong-thien-lanh/sua-va-nhung-dieu-thuong-duoc-tin",
            linkLabel: {
              vi: "Xem chuyên đề về sữa",
              en: "View the milk topic",
            },
          },
          {
            id: "wth-chat-dam",
            title: {
              vi: "Chất đạm",
              en: "Protein",
            },
            story: {
              vi: "Phim đi thẳng vào nỗi lo thiếu đạm mỗi khi giảm thịt, rồi dùng chính nỗi lo đó để đặt lại câu hỏi: cơ thể thật sự cần gì, và vì sao con người lại dễ sợ thiếu đạm hơn sợ mất cân bằng toàn bộ bữa ăn?",
              en: "The film goes straight to the fear of protein deficiency whenever meat is reduced, then uses that fear to reopen the question: what does the body truly need, and why are people quicker to fear low protein than an unbalanced overall diet?",
            },
            challengeQuestion: {
              vi: "Điều cơ thể cần là “rất nhiều đạm”, hay là một cách ăn đủ và cân đối mà ta đang hiểu chưa đúng?",
              en: "Does the body need “a lot of protein,” or does it need a balanced way of eating that we may still misunderstand?",
            },
            seedIdeas: [
              {
                vi: "Vì sao thiếu đạm luôn là nỗi sợ bật ra đầu tiên?",
                en: "Why is protein deficiency the first fear that appears?",
              },
              {
                vi: "Nỗi sợ này đến từ khoa học, marketing, hay thói quen văn hóa ăn uống?",
                en: "Does this fear come from science, marketing, or food culture?",
              },
              {
                vi: "Cơ thể cần đạm theo chất lượng, bối cảnh, hay chỉ theo con số?",
                en: "Does the body need protein by quality and context, or only by numbers?",
              },
              {
                vi: "Vì sao nguồn thực vật thường bị nghi ngờ trước khi được hiểu đúng?",
                en: "Why are plant sources so often doubted before they are properly understood?",
              },
            ],
            href: "/dinh-duong-thien-lanh/chat-dam-hieu-sao-cho-dung",
            linkLabel: {
              vi: "Xem chuyên đề về chất đạm",
              en: "View the protein topic",
            },
          },
          {
            id: "wth-suc-khoe-chuyen-hoa",
            title: {
              vi: "Sức khỏe chuyển hóa",
              en: "Metabolic Health",
            },
            story: {
              vi: "Phim nối các rối loạn chuyển hóa với cách con người ăn, mua thực phẩm, và sống trong một môi trường mà lựa chọn hằng ngày đã bị định hình từ trước nhiều hơn người ta tưởng.",
              en: "The film connects metabolic disorders with how people eat, buy food, and live within an environment where daily choices are shaped more in advance than most people realize.",
            },
            challengeQuestion: {
              vi: "Đái tháo đường, béo phì và rối loạn chuyển hóa có chỉ là lỗi lựa chọn cá nhân, hay còn là kết quả của cả một môi trường thực phẩm?",
              en: "Are diabetes, obesity, and metabolic disorders only personal-choice problems, or also the result of a larger food environment?",
            },
            seedIdeas: [
              {
                vi: "Đái tháo đường có chỉ là câu chuyện của đường?",
                en: "Is diabetes only a story about sugar?",
              },
              {
                vi: "Vì sao béo phì thường bị nhìn như lỗi của cá nhân?",
                en: "Why is obesity so often seen as an individual failure?",
              },
              {
                vi: "Một thói quen nhỏ lặp lại lâu năm có thể tạo tác động lớn đến đâu?",
                en: "How much impact can a small habit repeated over years really create?",
              },
              {
                vi: "Khi nói “ăn lành mạnh”, vì sao nhiều người vẫn rất khó làm thật?",
                en: "When people say “eat healthy,” why is it still so hard to do in practice?",
              },
            ],
            href: "/dinh-duong-thien-lanh/suc-khoe-chuyen-hoa-va-bua-an-hang-ngay",
            linkLabel: {
              vi: "Xem chuyên đề về chuyển hóa",
              en: "View the metabolic topic",
            },
          },
          {
            id: "wth-ung-thu-va-ban-an",
            title: {
              vi: "Ung thư và bàn ăn",
              en: "Cancer and the Table",
            },
            story: {
              vi: "Phim không biến ung thư thành một câu chuyện đơn giản của riêng thức ăn. Điều đáng giữ lại là cách nó buộc người xem nhìn lại mối liên hệ giữa thói quen ăn uống lâu dài, môi trường thực phẩm, và suy nghĩ “phải có một thủ phạm duy nhất”.",
              en: "The film does not reduce cancer to a simple story about food alone. What matters is how it pushes viewers to rethink the relationship between long-term eating habits, the food environment, and the urge to find a single culprit.",
            },
            challengeQuestion: {
              vi: "Khi nói về ung thư, vì sao con người thường muốn tìm một món ăn để đổ lỗi thay vì nhìn vào nguy cơ tích lũy dài hạn?",
              en: "When talking about cancer, why do people often want a single food to blame instead of looking at long-term accumulated risk?",
            },
            seedIdeas: [
              {
                vi: "Vì sao con người luôn muốn một thủ phạm duy nhất cho bệnh nặng?",
                en: "Why do people always want one single culprit for serious illness?",
              },
              {
                vi: "Một thói quen ăn uống nhỏ nhưng kéo dài nhiều năm có thể để lại điều gì?",
                en: "What can a small eating habit leave behind when it lasts for years?",
              },
              {
                vi: "Điều gì đang bị nói quá nhanh khi gắn thực phẩm với ung thư?",
                en: "What is being said too quickly when food is linked to cancer?",
              },
              {
                vi: "Vì sao cần nói về bàn ăn theo hướng nguy cơ tích lũy, không phải kết luận tuyệt đối?",
                en: "Why should the table be discussed through accumulated risk, not absolute conclusions?",
              },
            ],
            href: "/dinh-duong-thien-lanh/ung-thu-va-nhung-cau-hoi-tu-ban-an",
            linkLabel: {
              vi: "Xem chuyên đề về ung thư",
              en: "View the cancer topic",
            },
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
            href: "/dinh-duong-thien-lanh/ung-thu-va-nhung-cau-hoi-tu-ban-an",
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
          {
            id: "seed-thoi-quen-lap-lai-lau-ngay",
            title: { vi: "Thói quen ăn uống lặp lại lâu ngày ảnh hưởng đến sức khỏe dài hạn như thế nào?", en: "How Do Long-Repeated Eating Habits Shape Long-Term Health?" },
            lead: {
              vi: "Không phải bữa ăn nào cũng tạo ra tác động lớn ngay lập tức. Nhưng những gì lặp lại đủ lâu và đủ quen sẽ dần tạo nên nền tảng sức khỏe — hoặc nguy cơ — mà ta hiếm khi chú ý từ sớm.",
              en: "Not every meal creates an immediate large impact. But what repeats long enough and becomes familiar gradually shapes a health foundation — or a risk — that we rarely notice early enough.",
            },
            prompts: [
              { vi: "Thói quen nào trong bữa ăn hằng ngày đang lặp lại mà mình ít để ý nhất?", en: "Which daily eating habit repeats most without you noticing?" },
              { vi: "Vì sao điều bình thường lại khó trở thành đối tượng để xem xét lại?", en: "Why is something normal so difficult to subject to re-examination?" },
              { vi: "Một thay đổi nhỏ nhất có thể làm được ngay mà không cần thay đổi toàn bộ cách ăn là gì?", en: "What is the smallest change you could make right now without overhauling your whole diet?" },
            ],
            href: "/dinh-duong-thien-lanh/suc-khoe-chuyen-hoa-va-bua-an-hang-ngay",
          },
          {
            id: "seed-niem-tin-dinh-duong-can-thoi-gian",
            title: { vi: "Vì sao thay đổi niềm tin về dinh dưỡng cần thời gian và sự kiên nhẫn?", en: "Why Does Changing a Nutrition Belief Take Time and Patience?" },
            lead: {
              vi: "Một niềm tin được lặp lại đủ lâu sẽ cảm thấy như sự thật — dù nó chưa từng được kiểm chứng kỹ. Thay đổi niềm tin đó không chỉ là vấn đề thông tin, mà là quá trình xây dựng lại cách đọc.",
              en: "A belief repeated long enough begins to feel like truth — even if it was never carefully verified. Changing it is not only about information, but about rebuilding how you read.",
            },
            prompts: [
              { vi: "Niềm tin dinh dưỡng nào mình đang giữ mà chưa thực sự kiểm tra nguồn gốc?", en: "Which nutrition belief do you hold without ever truly checking where it came from?" },
              { vi: "Vì sao thông tin mới đôi khi không đủ để thay đổi hành vi?", en: "Why is new information sometimes not enough to change behavior?" },
              { vi: "Bước nào giúp chuyển từ biết đúng sang làm được?", en: "What step helps move from knowing what is right to actually doing it?" },
            ],
            href: "/dinh-duong-thien-lanh/kien-thuc-nen-tang",
          },
          {
            id: "seed-khi-nao-nen-nghi-ngo-mot-nghien-cuu",
            title: { vi: "Khi nào nên nghi ngờ một nghiên cứu dinh dưỡng?", en: "When should you question a nutrition study?" },
            lead: {
              vi: "Không phải mọi nghiên cứu được trích dẫn đều có cùng độ tin cậy. Có những dấu hiệu đơn giản giúp người đọc bắt đầu phân biệt — mà không cần là nhà khoa học.",
              en: "Not every cited study carries the same credibility. There are simple signals that help a reader start telling them apart — without needing to be a scientist.",
            },
            prompts: [
              { vi: "Quy mô và thời gian nghiên cứu nói lên điều gì?", en: "What does the scale and duration of a study tell you?" },
              { vi: "Ai tài trợ nghiên cứu và điều đó quan trọng ra sao?", en: "Who funded the study and how much does that matter?" },
              { vi: "Kết quả đang mô tả hay đang giải thích nguyên nhân?", en: "Is the result describing something or explaining a cause?" },
            ],
            href: "/dinh-duong-thien-lanh/kien-thuc-nen-tang",
          },
          {
            id: "seed-tu-so-benh-den-thay-doi-ben-vung",
            title: { vi: "Từ nỗi sợ bệnh đến thay đổi thói quen bền vững", en: "From fear of disease to lasting habit change" },
            lead: {
              vi: "Nỗi sợ bệnh thường là ngọn lửa bắt đầu. Nhưng nếu chỉ hành động từ nỗi sợ, thay đổi thường không kéo dài. Điều gì giúp chuyển từ 'tránh bị bệnh' sang 'chọn cách sống mình thật sự muốn'?",
              en: "Fear of disease is often the initial spark. But when action comes only from fear, change tends not to last. What helps shift from 'avoiding illness' to 'choosing a life you actually want'?",
            },
            prompts: [
              { vi: "Điều gì đang thúc đẩy thay đổi — nỗi sợ hay sự thấu hiểu?", en: "What is driving the change — fear or understanding?" },
              { vi: "Vì sao thay đổi từ bên trong thường bền hơn thay đổi từ áp lực ngoài?", en: "Why does change from inside usually last longer than change from outside pressure?" },
              { vi: "Bước nhỏ nào có thể làm mà không cần nỗi sợ làm nhiên liệu?", en: "Which small step can you take without needing fear as fuel?" },
            ],
            href: "/dinh-duong-thien-lanh/suc-khoe-chuyen-hoa-va-bua-an-hang-ngay",
          },
          {
            id: "seed-moi-truong-anh-huong-den-chon-lua-thuc-pham",
            title: { vi: "Môi trường xung quanh ảnh hưởng đến lựa chọn thực phẩm như thế nào?", en: "How does the surrounding environment shape food choices?" },
            lead: {
              vi: "Không phải mọi lựa chọn ăn uống đều xuất phát từ ý chí cá nhân. Môi trường — từ nhà bếp, siêu thị, quảng cáo đến cách nhóm bạn ăn — ảnh hưởng sâu hơn nhiều người nhận ra.",
              en: "Not every food choice comes from personal willpower. The environment — from the kitchen to the grocery store, advertising to how friends eat — influences far more than most people realize.",
            },
            prompts: [
              { vi: "Môi trường thực phẩm xung quanh đang khuyến khích điều gì?", en: "What is the food environment around you encouraging?" },
              { vi: "Một thay đổi nhỏ trong môi trường có thể thay đổi thói quen như thế nào?", en: "How can a small change in the environment shift a habit?" },
              { vi: "Khi nào ý chí không đủ để duy trì thay đổi một mình?", en: "When is willpower not enough to sustain change on its own?" },
            ],
            href: "/dinh-duong-thien-lanh/ung-thu-va-nhung-cau-hoi-tu-ban-an",
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
          {
            question: { vi: "Ăn thuần thực vật có thực sự đảm bảo đủ chất không?", en: "Does a fully plant-based diet truly cover all nutritional needs?" },
            answer: {
              vi: "Câu hỏi này không nên được trả lời bằng 'có' hoặc 'không' áp dụng cho tất cả mọi người. Điều quan trọng hơn là cách ăn tổng thể, mức đa dạng của thực phẩm, và nhu cầu thực tế của từng người trong từng bối cảnh sống. WTH không phải lộ trình dinh dưỡng — nó là điểm khởi đầu để đặt lại câu hỏi.",
              en: "This question should not be answered with a universal yes or no. What matters more is the overall eating pattern, food diversity, and each person's real needs in their specific context. WTH is not a nutrition guide — it is a starting point for reopening questions.",
            },
          },
          {
            question: { vi: "Vì sao nhiều người biết nên ăn lành mạnh hơn nhưng vẫn không làm được?", en: "Why do many people know they should eat better but still cannot?" },
            answer: {
              vi: "Hiểu biết và thay đổi thói quen là hai việc rất khác nhau. Hành vi ăn uống thường gắn sâu với ký ức, cảm xúc, môi trường sống và nhịp sinh hoạt lặp lại. Biết đúng mà không thay đổi được không phải là thiếu ý chí — đó là tín hiệu cho thấy cần nhìn rộng hơn vào toàn bộ bối cảnh.",
              en: "Knowledge and changing habits are two very different things. Eating behavior is often deeply tied to memory, emotion, environment, and repeated daily rhythms. Knowing the right thing but not being able to change is not a failure of willpower — it is a signal that the full context needs to be looked at more widely.",
            },
          },
          {
            question: { vi: "Làm sao đọc nhãn thực phẩm mà không bị choáng ngợp?", en: "How can you read food labels without feeling overwhelmed?" },
            answer: {
              vi: "Không cần đọc toàn bộ nhãn ngay từ đầu. Bắt đầu từ một tiêu chí: chú ý hai thành phần đầu tiên trong danh sách, vì chúng thường chiếm tỷ lệ lớn nhất. Tạo thói quen nhìn và hỏi một câu trước khi bỏ vào giỏ đã là bước tiến thật sự.",
              en: "You do not need to read the whole label right away. Start with one criterion: notice the first two ingredients in the list, as they usually make up the largest proportion. Building the habit of looking and asking one question before putting something in the basket is already a real step forward.",
            },
          },
          {
            question: { vi: "Khi thông tin dinh dưỡng từ bác sĩ và từ người nổi tiếng mâu thuẫn — tin ai?", en: "When nutrition advice from a doctor and from an influencer contradict — who to trust?" },
            answer: {
              vi: "Không phải chọn tin hoàn toàn bên nào. Bác sĩ thường nói từ bối cảnh lâm sàng với bệnh nhân cụ thể; người nổi tiếng thường nói từ trải nghiệm cá nhân được mở rộng ra. Điều quan trọng là nhận ra mỗi nguồn đang nói từ góc nhìn nào, và đặt câu hỏi: điều này áp dụng cho ai, trong hoàn cảnh nào?",
              en: "The goal is not to fully trust one side. Doctors usually speak from clinical context with specific patients; influencers usually speak from personal experience extended outward. The key is recognizing what angle each source is coming from, and asking: who does this apply to, and in what circumstances?",
            },
          },
        ],
      },
    },
    primaryCta: {
      label: { vi: "Xem các chủ đề chính", en: "Browse the main topics" },
      href: "/dinh-duong-thien-lanh/kien-thuc-nen-tang",
    },
  },
  "y-hoc-thien-lanh": {
    slug: "y-hoc-thien-lanh",
    title: { vi: "Y học thiện lành", en: "Wholesome Medicine" },
    heroKicker: { vi: "Nhánh Y học", en: "Medicine Branch" },
    description: {
      vi: "Cách tiếp cận sức khỏe lành mạnh, phòng ngừa và chăm sóc toàn diện.",
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
          vi: "Giữ Dinh dưỡng thiện lành như một điểm tựa gần đời sống để nhìn sức khỏe rõ hơn.",
          en: "Keep Wholesome Nutrition as a daily-life anchor for seeing health more clearly.",
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
  // Ung xu thien lanh: du lieu song duy nhat (da inline, khong con trong primaryBranchOverrides)
  "hanh-dong-thien-lanh": {
    slug: "hanh-dong-thien-lanh",
    title: {
      vi: "Sống tử tế hơn từ những điều rất nhỏ, bắt đầu ngay trong hôm nay",
      en: "Live more kindly through very small steps, starting today",
    },
    heroKicker: { vi: "Ứng xử thiện lành", en: "Wholesome Conduct" },
    description: {
      vi: "Ứng xử thiện lành không bắt đầu từ những lời nói lớn, mà từ cách ta dừng lại, hiểu mình rõ hơn, và chọn một phản hồi bớt làm đau người khác. Nhánh nội dung này đi theo hướng thực hành: mỗi chủ đề đều có một bước nhỏ có thể làm ngay, để sự tử tế không chỉ là điều đáng nghĩ mà là điều có thể sống được.",
      en: "Wholesome conduct does not begin with grand words, but with the moment we pause, understand ourselves more clearly, and choose a response that is a little less hurtful. Each topic here carries one small step you can take today — so that kindness is not just something to think about, but something to live.",
    },
    clusters: [
      {
        id: "hieu-minh-de-song-nhe-hon",
        title: { vi: "Hiểu mình để sống nhẹ hơn", en: "Understand Yourself More Gently" },
        summary: {
          vi: "Không phải lúc nào ta cũng phản ứng vì chuyện đang xảy ra. Nhiều khi ta phản ứng từ mệt mỏi, tổn thương cũ, hoặc thói quen phòng vệ đã đi theo quá lâu. Hiểu mình không làm ta yếu đi; nó giúp ta bớt làm khó người khác khi chính mình đang nặng.",
          en: "We do not always react to what is happening — often it is old fatigue, old hurt, or an old defensive habit. Understanding yourself does not make you weaker; it helps you be less hard on others when you are already carrying something heavy.",
        },
        prompt: {
          vi: "Khi bạn phản ứng mạnh gần đây, điều gì là vết chạm thật sự phía sau câu chuyện bề mặt?",
          en: "When you reacted strongly recently, what deeper trigger was underneath the surface event?",
        },
        microAction: {
          vi: "Dừng 90 giây, gọi tên cảm xúc đang có, rồi tự chốt một điều mình sẽ không làm khi đang mệt.",
          en: "Pause for 90 seconds, name what you are feeling, then decide one thing you will not do when you are tired.",
        },
        ctaLabel: { vi: "Thử bước này", en: "Try this step" },
        href: "/hanh-dong-thien-lanh#hieu-minh-de-song-nhe-hon",
      },
      {
        id: "ung-xu-trong-gia-dinh",
        title: { vi: "Ứng xử trong gia đình", en: "Conduct in Family Life" },
        summary: {
          vi: "Gia đình là nơi người ta dễ buông lời hơn bất cứ đâu, vì quá gần nên cũng dễ làm nhau đau. Ứng xử thiện lành trong gia đình không nằm ở việc lúc nào cũng mềm mỏng, mà ở chỗ biết nói thật mà không đổ lỗi, biết giữ ranh giới mà không hạ thấp nhau.",
          en: "Families are where we tend to say things we would not say anywhere else — closeness makes it easier to hurt. Wholesome conduct at home is not about always being soft, but about knowing how to speak honestly without blame, and how to hold a boundary without putting each other down.",
        },
        prompt: {
          vi: "Trong cuộc nói chuyện gần nhất ở nhà, bạn đã nói điều mình cần hay chỉ phản xạ để thắng câu đó?",
          en: "In your latest conversation at home, did you express what you needed or just react to win the moment?",
        },
        microAction: {
          vi: "Đổi một câu phản xạ trong hôm nay sang một câu không buộc tội, không dằn mặt.",
          en: "Replace one reflexive comment today with one that does not assign blame or put anyone on edge.",
        },
        ctaLabel: { vi: "Áp dụng hôm nay", en: "Apply today" },
        href: "/hanh-dong-thien-lanh#ung-xu-trong-gia-dinh",
      },
      {
        id: "loi-noi-va-giao-tiep",
        title: { vi: "Lời nói và cách giao tiếp", en: "Speech and Communication" },
        summary: {
          vi: "Không ít xung đột đến từ việc điều muốn nói và điều được nghe là hai thứ rất khác nhau. Học nói rõ hơn, chậm hơn, và ít phán xét hơn là một kỹ năng sống quan trọng. Một câu nói đúng lúc có thể giữ lại một mối quan hệ; một câu nói vội có thể phá hỏng nhiều ngày.",
          en: "A lot of conflict comes from the gap between what we mean and what gets heard. Learning to speak more clearly, more slowly, and with less judgment is a real life skill. The right word at the right moment can save a relationship; a careless one can cost many days.",
        },
        prompt: {
          vi: "Bạn muốn người kia hiểu điều gì nhất, và câu hiện tại của bạn có đang giúp điều đó xảy ra không?",
          en: "What is the one thing you want the other person to understand, and is your current wording helping that happen?",
        },
        microAction: {
          vi: "Dùng mẫu câu 3 bước: Quan sát → Cảm nhận → Nhu cầu khi nói về một việc dễ va chạm.",
          en: "Use the 3-step format — Observe → Feel → Need — when raising something that tends to create friction.",
        },
        ctaLabel: { vi: "Xem cách làm", en: "See how it works" },
        href: "/hanh-dong-thien-lanh#loi-noi-va-giao-tiep",
      },
      {
        id: "ra-ngoai-xa-hoi-voi-su-tu-te",
        title: { vi: "Ra ngoài xã hội với sự tử tế", en: "Bringing Kindness into Society" },
        summary: {
          vi: "Ứng xử thiện lành không chỉ dành cho người thân. Nó hiện ra trong cách ta xếp hàng, phản hồi người phục vụ, nói chuyện với người lạ, và giữ sự tôn trọng khi không ai biết mình là ai. Tử tế ngoài xã hội không phải để được khen, mà để không làm môi trường sống chung thêm nặng nề.",
          en: "Wholesome conduct is not only for those close to us. It shows up in how we queue, respond to a server, talk to a stranger, and stay respectful when no one knows who we are. Being kind in public is not for recognition — it is to keep shared life from becoming heavier than it needs to be.",
        },
        prompt: {
          vi: "Ở nơi công cộng, bạn có đang giữ được sự tôn trọng khi không ai biết mình là ai?",
          en: "In public spaces, can you keep respect even when no one knows who you are?",
        },
        microAction: {
          vi: "Làm một hành động tử tế nhỏ trong ngày mà không cần ai ghi nhận.",
          en: "Do one small act of kindness today that does not need to be noticed by anyone.",
        },
        ctaLabel: { vi: "Làm trong 5 phút", en: "Do it in 5 minutes" },
        href: "/hanh-dong-thien-lanh#ra-ngoai-xa-hoi-voi-su-tu-te",
      },
      {
        id: "nhung-tinh-huong-de-gap-trong-doi-song",
        title: { vi: "Những tình huống thường gặp", en: "Common Everyday Situations" },
        summary: {
          vi: "Ai cũng có lúc rơi vào những tình huống khó: bị hiểu lầm, bị nói nặng, bị chen lấn ranh giới, hoặc phải từ chối điều mình không muốn. Điều quan trọng không phải là lúc nào cũng xử lý đẹp, mà là có sẵn một vài kịch bản lành mạnh để không phản ứng theo quán tính cũ.",
          en: "Everyone runs into hard situations: being misunderstood, hearing something sharp, having a boundary pushed, or needing to say no. What matters is not handling it perfectly every time — it is having a few healthy responses ready so you do not fall back on old reflexes.",
        },
        prompt: {
          vi: "Tình huống nào trong tuần qua khiến bạn hối hận nhất về cách phản ứng, và bạn muốn đổi điều gì ở lần tới?",
          en: "Which situation this week left you most dissatisfied with your reaction, and what would you change next time?",
        },
        microAction: {
          vi: "Chọn một tình huống tuần này và tập trước một kịch bản phản hồi ngắn, rõ, không công kích.",
          en: "Pick a situation you faced this week and rehearse a short, clear, non-attacking response for next time.",
        },
        ctaLabel: { vi: "Thử tình huống này", en: "Try this situation" },
        href: "/hanh-dong-thien-lanh#nhung-tinh-huong-de-gap-trong-doi-song",
      },
      {
        id: "giu-ket-noi-khi-bat-dong",
        title: { vi: "Giữ kết nối khi không đồng ý", en: "Stay Connected While Disagreeing" },
        summary: {
          vi: "Không đồng ý không có nghĩa là phải rời xa nhau. Nhưng để bất đồng không trở thành rạn nứt, cần phân biệt rõ: tranh luận về điều đang thực sự xảy ra, thay vì trút ra những gì đã bị tích lũy từ lâu mà chưa nói. Một cuộc bất đồng được giữ trong khung kết nối thường kết thúc bằng hiểu biết, không phải bằng người thắng kẻ thua.",
          en: "Disagreement does not have to mean distance. But to keep a difference of opinion from becoming a rupture, it helps to be clear: argue about what is actually happening right now, rather than unloading what has been held back too long. A disagreement held within a frame of connection usually ends in understanding, not in winners and losers.",
        },
        prompt: {
          vi: "Lần gần nhất bạn không đồng ý với ai, bạn đang tranh luận về chủ đề đó hay về điều sâu hơn phía sau?",
          en: "The last time you disagreed with someone, were you arguing about that specific topic, or about something deeper that had been building underneath?",
        },
        microAction: {
          vi: "Chọn một bất đồng nhỏ và thử nói: 'Mình không đồng ý với điều này — nhưng mình vẫn muốn hiểu góc nhìn của bạn.'",
          en: "Pick one small disagreement and try saying: 'I don't agree with this — but I still want to understand your perspective.'",
        },
        ctaLabel: { vi: "Thử cách này", en: "Try this approach" },
        href: "/hanh-dong-thien-lanh#giu-ket-noi-khi-bat-dong",
      },
      {
        id: "biet-khi-nao-lui-buoc",
        title: { vi: "Biết lúc nào lùi bước là sức mạnh", en: "Knowing When Stepping Back Is Strength" },
        summary: {
          vi: "Lùi bước không phải thua. Đôi khi dừng lại đúng lúc giúp giữ được một mối quan hệ, giữ được phẩm giá của mình, và tránh leo thang không cần thiết. Khác nhau ở chỗ: lùi vì hiểu rõ mình muốn gì, không phải lùi vì sợ hoặc kiệt sức.",
          en: "Stepping back is not defeat. Sometimes pausing at the right moment preserves a relationship, preserves your dignity, and avoids unnecessary escalation. The difference is stepping back because you understand what you want — not because you are afraid or exhausted.",
        },
        prompt: {
          vi: "Lần gần nhất bạn lùi bước trong một xung đột, bạn đang chọn hay đang buông xuôi?",
          en: "The last time you stepped back from a conflict, were you making a choice or just giving in from exhaustion?",
        },
        microAction: {
          vi: "Trong một cuộc tranh luận hôm nay, thử nói: 'Mình cần dừng lại một chút — không phải để tránh, mà để nói rõ hơn khi bình tĩnh hơn.'",
          en: "In one disagreement today, try saying: 'I need to pause for a moment — not to avoid, but to speak more clearly when I am calmer.'",
        },
        ctaLabel: { vi: "Thử thực hành hôm nay", en: "Practice today" },
        href: "/hanh-dong-thien-lanh#biet-khi-nao-lui-buoc",
      },
      {
        id: "cam-on-va-noi-nho-dung-luc",
        title: { vi: "Nói lời nhớ và cảm ơn đúng lúc", en: "Saying 'I Miss You' and 'Thank You' at the Right Moment" },
        summary: {
          vi: "Người ta thường giữ lại lời nhớ và lời cảm ơn đến khi có dịp hoặc cảm thấy đủ chắc chắn mới nói. Nhưng đúng lúc thường là ngay lúc đó — trước khi người kia không còn cần nghe nữa, trước khi khoảng cách trở nên bình thường.",
          en: "People often hold back words of missing or gratitude until the right occasion or until they feel certain enough to say it. But the right moment is usually now — before the other person no longer needs to hear it, before the distance starts to feel normal.",
        },
        prompt: {
          vi: "Ai đó trong cuộc sống của bạn đang chờ nghe một điều bạn vẫn chưa nói — vì bận, vì ngại, hay vì chưa thấy cần thiết?",
          en: "Is there someone in your life still waiting to hear something you have not said yet — because you were busy, hesitant, or felt it was not necessary?",
        },
        microAction: {
          vi: "Chọn một người hôm nay và nói thật, ngắn gọn: 'Mình nhớ bạn' hoặc 'Cảm ơn vì điều bạn đã làm hôm đó.'",
          en: "Choose one person today and say simply and honestly: 'I have been thinking of you' or 'Thank you for what you did that day.'",
        },
        ctaLabel: { vi: "Làm ngay hôm nay", en: "Do it today" },
        href: "/hanh-dong-thien-lanh#cam-on-va-noi-nho-dung-luc",
      },
    ],
    documentaryBlock: {
      title: {
        vi: "Góc nhìn từ Giao tiếp phi bạo lực (NVC)",
        en: "A Perspective from Nonviolent Communication (NVC)",
      },
      description: {
        vi: "Nonviolent Communication của Marshall Rosenberg không dạy cách không tức giận. Nó dạy cách gọi tên được điều mình đang cần và nói ra theo cách không đẩy người kia vào thế phòng thủ. Góc nhìn này mở ra ba trục thực hành rất gần với đời sống hằng ngày.",
        en: "Marshall Rosenberg's Nonviolent Communication does not teach you to stop being angry. It teaches you to name what you need and express it in a way that does not put others on the defensive. This perspective opens three practical axes very close to everyday life.",
      },
      axes: [
        { vi: "Quan sát, không đánh giá", en: "Observe, do not evaluate" },
        { vi: "Cảm nhận, không đổ lỗi", en: "Feel, do not blame" },
        { vi: "Nhu cầu, không áp đặt yêu cầu", en: "Express need, do not impose demands" },
      ],
      href: "/hanh-dong-thien-lanh#goc-nhin-giao-tiep-phi-bao-luc",
    },
    sevenDayPlan: {
      title: { vi: "Bắt đầu trong 7 ngày", en: "Start in 7 Days" },
      intro: {
        vi: "Không cần thay đổi mọi thứ trong một lúc. Chỉ cần đi từng bước nhỏ, đủ rõ để làm được, đủ nhẹ để không bỏ giữa chừng.",
        en: "You do not need to change everything at once. Just take small steps that are clear enough to do and light enough to keep going.",
      },
      days: [
        {
          vi: "Ngày 1 — Quan sát một phản xạ quen thuộc của mình khi khó chịu.",
          en: "Day 1 — Notice one familiar reaction you have when you feel irritated.",
        },
        {
          vi: "Ngày 2 — Gọi tên cảm xúc trước khi trả lời một việc làm mình bực.",
          en: "Day 2 — Name your feeling before answering something that annoys you.",
        },
        {
          vi: "Ngày 3 — Đổi một câu nói trong gia đình theo hướng bớt đổ lỗi.",
          en: "Day 3 — Rephrase one sentence at home so it carries less blame.",
        },
        {
          vi: "Ngày 4 — Luyện nói một điều khó bằng mẫu câu: Quan sát → Cảm nhận → Nhu cầu.",
          en: "Day 4 — Practice one difficult sentence using: Observe → Feel → Need.",
        },
        {
          vi: "Ngày 5 — Thử giữ bình tĩnh trong một tình huống xã hội nhỏ: chờ đợi, xếp hàng, va chạm nhẹ.",
          en: "Day 5 — Stay calm in one small social moment: waiting, queuing, or a light bump into friction.",
        },
        {
          vi: "Ngày 6 — Làm một hành động tử tế không cần người khác biết.",
          en: "Day 6 — Do one kind act without needing anyone else to notice.",
        },
        {
          vi: "Ngày 7 — Tổng kết 3 điều mình đã làm được và 1 điều cần làm tốt hơn vào tuần sau.",
          en: "Day 7 — Review 3 things you did well and 1 thing to do better next week.",
        },
      ],
      cta: { vi: "Bắt đầu hôm nay", en: "Start today" },
    },
    selfTrackingBlock: {
      title: { vi: "Tự theo dõi rất nhẹ, không tự gây áp lực", en: "Track Gently, Without Pressure" },
      text: {
        vi: "Tuần này bạn đã giữ được bao nhiêu lần không phản ứng vội? Mục tiêu không phải là hoàn hảo, mà là tăng dần số lần bạn chọn được một cách ứng xử lành hơn.",
        en: "How many times this week did you keep yourself from reacting too quickly? The goal is not perfection, but gradually increasing how often you choose a healthier response.",
      },
    },
    faqSection: {
      title: { vi: "Câu hỏi dễ gặp", en: "Common Questions" },
      items: [
        {
          question: { vi: "Ứng xử thiện lành có nghĩa là không bao giờ tức giận không?", en: "Does wholesome conduct mean never getting angry?" },
          answer: {
            vi: "Không. Thiện lành không nằm ở chỗ không có cảm xúc tiêu cực. Tức giận là phản ứng hoàn toàn tự nhiên. Điều khác biệt là ta làm gì với cơn tức giận đó — để nó kiểm soát lời nói và hành động, hay dừng lại đủ để phản hồi theo cách ít gây tổn thương hơn.",
            en: "No. Wholesome conduct is not about having no negative emotions. Anger is completely natural. The difference is what we do with it — whether we let it control our words and actions, or pause long enough to respond in a less harmful way.",
          },
        },
        {
          question: { vi: "Vì sao nói điều thật mà không làm ai tổn thương lại khó vậy?", en: "Why is saying what is true without hurting others so difficult?" },
          answer: {
            vi: "Vì thật và lành ít khi tự nhiên đi cùng nhau. Ta đã quen nói nhanh, phòng vệ, hoặc dùng lời để thắng thay vì để được hiểu. Học nói thật mà không công kích là kỹ năng — không phải tính cách 'lành' bẩm sinh — và nó cần thực hành có ý thức.",
            en: "Because honest and kind rarely come naturally together. We are used to speaking quickly, defensively, or to win rather than to be understood. Learning to say what is true without attacking is a skill — not an inborn gentle personality — and it takes practiced, intentional effort.",
          },
        },
        {
          question: { vi: "Làm thế nào khi mình muốn thay đổi cách ứng xử nhưng người thân không?", en: "What to do when you want to change your conduct but those close to you do not?" },
          answer: {
            vi: "Thay đổi bao giờ cũng bắt đầu từ một bên. Nếu cách ứng xử của mình thật sự thay đổi theo hướng ít gây đau hơn — ít đổ lỗi hơn, ít leo thang hơn, nhiều lắng nghe hơn — môi trường xung quanh thường dần phản hồi theo, dù chậm và không đều.",
            en: "Change always starts from one side. If your conduct genuinely shifts toward less harm — less blame, less escalation, more listening — the environment around you usually responds over time, even if slowly and unevenly.",
          },
        },
        {
          question: { vi: "Khi nào nên nói và khi nào nên im lặng?", en: "When should you speak and when should you stay silent?" },
          answer: {
            vi: "Nói hoặc im lặng đều có thể là thiện lành, tùy thời điểm và mục đích. Câu hỏi tốt hơn là: nếu mình nói lúc này, điều đó giúp ích cho kết nối hay chỉ giải tỏa cho bản thân mình? Im lặng lắng nghe và im lặng né tránh là hai điều rất khác nhau.",
            en: "Both speaking and staying silent can be wholesome — it depends on timing and purpose. A better question is: if I say this now, does it help the connection or only relieve myself? Listening in silence and avoiding in silence are very different things.",
          },
        },
        {
          question: { vi: "Phản xạ cũ có thể thay đổi được không hay đã cố định?", en: "Can old reflexes be changed or are they fixed?" },
          answer: {
            vi: "Phản xạ theo thói quen có thể thay đổi, nhưng cần thời gian và lặp lại. Bước đầu không phải là ngăn phản xạ ngay trong lúc nó xảy ra, mà là nhận ra nó sau khi xảy ra. Nhận ra là đã đi trước một bước so với chạy theo phản xạ.",
            en: "Habitual reflexes can change, but it takes time and repetition. The first step is not to stop a reflex in the moment — it is to recognize it after it happens. Recognition is already one step ahead of following the reflex blindly.",
          },
        },
        {
          question: { vi: "Giữ bình tĩnh khi người kia đang xúc phạm — làm được không?", en: "Is it possible to stay calm when someone is being hurtful?" },
          answer: {
            vi: "Được, nhưng không phải bằng cách kìm nén hoàn toàn. Bình tĩnh không phải im lặng chịu đựng. Nó có thể bao gồm nói rõ: 'Mình cần dừng cuộc trò chuyện này lại cho đến khi cả hai ổn định hơn.' Đó vừa là bình tĩnh vừa là ranh giới rõ ràng.",
            en: "Yes — but not through complete suppression. Staying calm is not silent endurance. It can include saying clearly: 'I need to pause this conversation until both of us are steadier.' That is both calmness and a clear boundary at the same time.",
          },
        },
        {
          question: { vi: "Bắt đầu từ đâu nếu không biết mình đang ứng xử tệ ở điểm nào?", en: "Where to begin if you do not know where your conduct is failing?" },
          answer: {
            vi: "Bắt đầu bằng cách quan sát phản xạ, không phán xét. Dành một tuần chỉ để chú ý xem mình thường phản ứng vội nhất trong tình huống nào — với ai, trong hoàn cảnh nào, sau điều gì. Nhận ra trước, hiểu sau, rồi mới tìm cách sửa.",
            en: "Begin by observing reflexes without judgment. Spend one week simply noticing where you tend to react most quickly — with whom, in what circumstances, after what trigger. Recognize first, understand later, then find how to improve.",
          },
        },
      ],
    },
    seedSection: {
      title: { vi: "7 góc khai thác từ đời sống giao tiếp hằng ngày", en: "7 Content Angles from Everyday Communication Life" },
      description: {
        vi: "Mỗi câu hỏi dưới đây có thể mở ra một video ngắn, bài ngắn hoặc chuỗi nội dung bám sát những tình huống giao tiếp thực trong đời sống.",
        en: "Each question below can open into a short video, short article, or series of content tied closely to real communication situations in daily life.",
      },
      cards: [
        {
          id: "phan-xa-nao-dang-can-dung-lai",
          title: { vi: "Phản xạ giao tiếp nào đang cần dừng lại?", en: "Which communication reflex needs to stop?" },
          lead: {
            vi: "Nhiều câu nói gây tổn thương không xuất phát từ ý định xấu, mà từ những phản xạ cũ được lặp lại quá lâu đến mức tự nhiên như thở.",
            en: "Many hurtful words do not come from bad intentions but from old reflexes repeated so long they feel as natural as breathing.",
          },
          prompts: [
            { vi: "Phản xạ nào trong giao tiếp mình hay dùng nhất khi đang bực?", en: "Which communication reflex do you reach for most when you are upset?" },
            { vi: "Câu nói đó thật sự đang phục vụ điều gì?", en: "What is that sentence actually serving?" },
            { vi: "Nếu dừng lại 3 giây, mình sẽ nói khác thế nào?", en: "If you paused 3 seconds, what would you say differently?" },
          ],
          href: "/hanh-dong-thien-lanh#loi-noi-va-giao-tiep",
        },
        {
          id: "vi-sao-cach-noi-tao-ra-khac-biet",
          title: { vi: "Vì sao 'bạn làm tôi buồn' khác với 'tôi đang buồn vì điều này'?", en: "Why does 'you made me sad' differ from 'I am sad about this'?" },
          lead: {
            vi: "Một chữ thay đổi trọng tâm từ 'người kia gây ra' sang 'mình đang cảm nhận' — và sự khác biệt đó có thể thay đổi hoàn toàn chiều hướng của cuộc trò chuyện.",
            en: "A single word shifts the focus from 'the other person caused this' to 'I am experiencing this' — and that difference can completely change the direction of a conversation.",
          },
          prompts: [
            { vi: "Điều gì xảy ra khi ta đặt người kia vào thế phòng thủ ngay từ câu đầu?", en: "What happens when we put the other person on the defensive from the very first sentence?" },
            { vi: "Nói từ trải nghiệm của mình có khó hơn không?", en: "Is speaking from your own experience any harder?" },
            { vi: "Câu nào dễ dẫn đến đối thoại hơn — câu đổ lỗi hay câu chia sẻ?", en: "Which sentence leads more easily to dialogue — the blaming one or the sharing one?" },
          ],
        },
        {
          id: "binh-tinh-la-suc-manh-khong-phai-yeu-duoi",
          title: { vi: "Giữ bình tĩnh khi bị tổn thương không phải yếu đuối mà là sức mạnh", en: "Staying calm when hurt is strength, not weakness" },
          lead: {
            vi: "Nhiều người nhầm bình tĩnh với im lặng chịu đựng. Thật ra, giữ được sự điềm tĩnh trong cơn tổn thương là điều đòi hỏi nội lực, không phải nhún nhường.",
            en: "Many people confuse calmness with silent endurance. In reality, staying steady while being hurt requires inner strength — not submission.",
          },
          prompts: [
            { vi: "Bình tĩnh và nhún nhường khác nhau ở đâu?", en: "How does staying calm differ from giving in?" },
            { vi: "Khi nào im lặng là lựa chọn lành, khi nào là né tránh?", en: "When is silence a healthy choice and when is it avoidance?" },
            { vi: "Mình đang dùng bình tĩnh như bước đệm hay như bức tường?", en: "Are you using calm as a buffer or as a wall?" },
          ],
          href: "/hanh-dong-thien-lanh#hieu-minh-de-song-nhe-hon",
        },
        {
          id: "gia-dinh-ai-dung-ai-sai",
          title: { vi: "Trong gia đình: ai đúng ai sai, hay cả hai đều cần được nghe?", en: "In family conflict: who is right, or do both parties need to be heard?" },
          lead: {
            vi: "Phần lớn xung đột trong gia đình không phải tranh luận về sự thật khách quan. Nó thường là hai nhu cầu chưa được nói rõ đang va vào nhau.",
            en: "Most family conflict is not about objective truth. It is usually two unspoken needs colliding.",
          },
          prompts: [
            { vi: "Quan điểm của ai đang bị ngắt lời hoặc không được hoàn thành trong cuộc trò chuyện này?", en: "Whose perspective is being interrupted or left unfinished in this conversation?" },
            { vi: "Nếu không ai cần thắng lúc này, cuộc trò chuyện sẽ đi đến đâu?", en: "If no one needed to win right now, where might this conversation go?" },
            { vi: "Câu nào giúp mở ra để cả hai nói thêm được?", en: "What sentence would help open things up so both people can say more?" },
          ],
          href: "/hanh-dong-thien-lanh#ung-xu-trong-gia-dinh",
        },
        {
          id: "tu-te-ngoai-xa-hoi-bat-dau-tu-dieu-nho",
          title: { vi: "Sự tử tế ở nơi công cộng bắt đầu từ điều rất nhỏ", en: "Kindness in public starts with something very small" },
          lead: {
            vi: "Tử tế ngoài xã hội không phải để được khen. Nó là cách một người đã tập cho mình không để stress cá nhân đổ sang người không liên quan.",
            en: "Kindness in public is not for recognition. It is a way of training yourself not to let personal stress spill onto people who have nothing to do with it.",
          },
          prompts: [
            { vi: "Hành động nhỏ nào hôm nay mình có thể làm không cần ai biết?", en: "What is one small act today that can be done without anyone knowing?" },
            { vi: "Khi bực bội ở nơi công cộng, phản xạ đầu tiên của mình thường là gì?", en: "When frustrated in public, what is your usual first reflex?" },
            { vi: "Điều gì giúp mình giữ tôn trọng khi đang chịu nhiều áp lực?", en: "What helps you stay respectful when you are under pressure?" },
          ],
          href: "/hanh-dong-thien-lanh#ra-ngoai-xa-hoi-voi-su-tu-te",
        },
        {
          id: "giu-ket-noi-khi-khac-y-kien-voi-nguoi-than",
          title: { vi: "Bất đồng với người thân — giữ kết nối mà không mất mình", en: "Disagreeing with someone close — stay connected without losing yourself" },
          lead: {
            vi: "Bất đồng quan điểm không phải kẻ thù của mối quan hệ. Điều phá vỡ kết nối thường không phải sự khác biệt về ý kiến, mà là cách ta xử lý sự khác biệt đó trong lúc cảm xúc đang cao.",
            en: "Difference of opinion is not the enemy of a relationship. What breaks connection is usually not the disagreement itself, but how we handle it when emotions are running high.",
          },
          prompts: [
            { vi: "Mình có thể không đồng ý mà vẫn giữ tôn trọng không?", en: "Can you disagree while keeping respect?" },
            { vi: "Bất đồng nào cần được giải quyết và bất đồng nào mình có thể để yên?", en: "Which disagreements need resolution, and which can you leave alone?" },
            { vi: "Câu nào mở ra đối thoại thay vì đóng lại tranh luận?", en: "What sentence opens dialogue instead of closing down argument?" },
          ],
          href: "/hanh-dong-thien-lanh#giu-ket-noi-khi-bat-dong",
        },
        {
          id: "thu-thach-24-gio-khong-phan-xet",
          title: { vi: "Thử 24 giờ không phán xét — hành động có thể làm ngay hôm nay", en: "Try 24 hours without judgment — an action for today" },
          lead: {
            vi: "Phán xét nhanh là phản xạ rất con người. Nhưng dành 24 giờ để quan sát mà không kết luận ngay là một thực hành đủ khó và đủ thú vị để học thêm điều gì đó về cả mình lẫn người khác.",
            en: "Quick judgment is a very human reflex. But spending 24 hours observing without immediately concluding is a practice hard enough — and interesting enough — to reveal something about both yourself and others.",
          },
          prompts: [
            { vi: "Với ai hoặc trong tình huống nào mình hay phán xét nhanh nhất?", en: "With whom or in which situations do quick judgments appear most often for you?" },
            { vi: "Khi không phán xét ngay, điều gì mình có thể nhận ra thêm?", en: "When you do not judge immediately, what else might you notice?" },
            { vi: "Điều gì mình có thể học về mình sau 24 giờ ấy?", en: "What might you learn about yourself after those 24 hours?" },
          ],
        },
      ],
    },
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
          vi: "Đi tiếp sang cách chọn nội dung giải trí giúp giữ tinh thần sáng và lành.",
          en: "Continue into media choices that keep your attention clear and healthy.",
        },
        href: "/giai-tri-thien-lanh",
      },
      {
        title: { vi: "Đi tiếp bằng những bước nhỏ, không cần gấp", en: "Continue at Your Own Pace" },
        description: {
          vi: "Nếu bạn muốn đi sâu hơn, hãy chọn một hướng gần nhất với điều mình đang vướng.",
          en: "If you want to go deeper, pick whichever direction is closest to what you are working through.",
        },
        href: "/",
      },
      {
        title: { vi: "Sang Lời nói thiện lành", en: "Continue to Wholesome Speech" },
        description: {
          vi: "Từ cách ứng xử, đi sâu hơn vào cách nói — chọn từ, đặt câu, và nói thật mà không làm đau.",
          en: "From conduct, go deeper into speech — choosing words, framing sentences, and being honest without causing harm.",
        },
        href: "/loi-noi-thien-lanh",
      },
      {
        title: { vi: "Khám phá Suy nghĩ thiện lành", en: "Explore Wholesome Thoughts" },
        description: {
          vi: "Kết nối cách ứng xử bên ngoài với sự rõ ràng và ổn định của đời sống nội tâm.",
          en: "Connect outer conduct with the clarity and steadiness of inner life.",
        },
        href: "/suy-nghi-thien-lanh",
      },
    ],
    primaryCta: {
      label: { vi: "Áp dụng hôm nay", en: "Apply today" },
      href: "/hanh-dong-thien-lanh#hieu-minh-de-song-nhe-hon",
    },
    secondaryCta: {
      label: { vi: "Bắt đầu 7 ngày", en: "Start the 7-day plan" },
      href: "/hanh-dong-thien-lanh#bat-dau-trong-7-ngay",
    },
  },
  "loi-noi-thien-lanh": {
    slug: "loi-noi-thien-lanh",
    title: { vi: "Lời nói thiện lành", en: "Wholesome Speech" },
    heroKicker: { vi: "Nhánh tiếp theo", en: "Next Step Branch" },
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
        title: { vi: "Đi tiếp từ đây", en: "Continue from Here" },
        summary: {
          vi: "Gợi ý những hướng đọc tiếp theo theo từng bối cảnh quan hệ.",
          en: "Suggested next reading paths for different relationship contexts.",
        },
        href: "/loi-noi-thien-lanh#huong-mo-rong",
      },
    ],
    relatedDirections: [
      {
        title: { vi: "Bắt đầu từ Dinh dưỡng thiện lành", en: "Begin with Wholesome Nutrition" },
        description: {
          vi: "Bắt đầu từ Dinh dưỡng thiện lành nếu bạn muốn có một điểm tựa gần đời sống.",
          en: "Begin with Wholesome Nutrition if you want a starting point close to daily life.",
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
    heroKicker: { vi: "Nhánh tiếp theo", en: "Next Step Branch" },
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
        title: { vi: "Đi tiếp từ đây", en: "Continue from Here" },
        summary: {
          vi: "Gợi ý những chủ đề có thể đọc tiếp để nuôi đời sống nội tâm.",
          en: "Suggested themes to keep reading and nourish inner life.",
        },
        href: "/suy-nghi-thien-lanh#huong-mo-rong",
      },
    ],
    relatedDirections: [
      {
        title: { vi: "Bắt đầu từ Dinh dưỡng thiện lành", en: "Begin with Wholesome Nutrition" },
        description: {
          vi: "Dinh dưỡng thiện lành có thể là điểm bắt đầu gần đời sống để giữ nhịp rõ hơn.",
          en: "Wholesome Nutrition can be a daily-life starting point for a clearer rhythm.",
        },
        href: "/dinh-duong-thien-lanh",
      },
      {
        title: { vi: "Sang Giải trí thiện lành", en: "Continue to Wholesome Entertainment" },
        description: {
          vi: "Đi tiếp sang những thói quen tiêu thụ nội dung tích cực hơn.",
          en: "Continue into healthier media and entertainment habits.",
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
    heroKicker: { vi: "Nhánh tiếp theo", en: "Next Step Branch" },
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
        title: { vi: "Đi tiếp từ đây", en: "Continue from Here" },
        summary: {
          vi: "Gợi ý các nhóm nội dung giải trí có thể đọc tiếp theo nhu cầu thư giãn.",
          en: "Suggested entertainment groups to continue with based on your need for rest.",
        },
        href: "/giai-tri-thien-lanh#huong-mo-rong",
      },
    ],
    relatedDirections: [
      {
        title: { vi: "Bắt đầu từ Dinh dưỡng thiện lành", en: "Begin with Wholesome Nutrition" },
        description: {
          vi: "Dinh dưỡng thiện lành giúp giữ một điểm tựa rõ ràng cho nhịp sống và lựa chọn giải trí.",
          en: "Wholesome Nutrition helps keep a clear anchor for daily rhythm and entertainment choices.",
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
    heroKicker: { vi: "Nhánh tiếp theo", en: "Next Step Branch" },
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
          vi: "Đi tiếp từ tiếng cười sang các lựa chọn giải trí tích cực rộng hơn.",
          en: "Continue from wholesome laughter into broader positive media choices.",
        },
        href: "/giai-tri-thien-lanh",
      },
      {
        title: { vi: "Giữ nền bằng Dinh dưỡng thiện lành", en: "Keep your base in Wholesome Nutrition" },
        description: {
          vi: "Dinh dưỡng thiện lành giúp giữ nhịp sống ổn định khi tìm nội dung thư giãn.",
          en: "Wholesome Nutrition helps keep your daily rhythm steadier while choosing relaxing content.",
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
  // hanh-dong-thien-lanh: du lieu song duy nhat (da inline, khong con trong primaryBranchOverrides)
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
    heroKicker: { vi: "Nhánh Y học", en: "Medicine Branch" },
    description: {
      vi: "Góc nhìn sức khỏe gần đời sống, đi từ phòng ngừa đến chăm sóc với tinh thần nhân văn.",
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
          vi: "Giữ Dinh dưỡng thiện lành như một điểm tựa gần đời sống để nhìn sức khỏe rõ hơn.",
          en: "Keep Wholesome Nutrition as a daily-life anchor for seeing health more clearly.",
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
          vi: "Quay lại trang chủ để xem toàn bộ các hướng nội dung hiện có.",
          en: "Return home to review the available content directions.",
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
    heroKicker: { vi: "Nhánh tiếp theo", en: "Next Step Branch" },
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
    heroKicker: { vi: "Nhánh tiếp theo", en: "Next Step Branch" },
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
          vi: "Quay lại trang chủ để xem toàn bộ các hướng nội dung hiện có.",
          en: "Return home to review the available content directions.",
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
    heroKicker: { vi: "Nhánh tiếp theo", en: "Next Step Branch" },
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
          vi: "Đi tiếp từ tiếng cười sang các lựa chọn giải trí tích cực khác.",
          en: "Continue from laughter into broader wholesome entertainment choices.",
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

// Runtime: override data for giai-tri, y-hoc, loi-noi, suy-nghi, coi-vui-cuoi is applied here.
// Nutrition (dinh-duong-thien-lanh) and Conduct (hanh-dong-thien-lanh) are inline in the base record — no longer in overrides.
Object.assign(contentBranchesI18n, primaryBranchOverrides);
