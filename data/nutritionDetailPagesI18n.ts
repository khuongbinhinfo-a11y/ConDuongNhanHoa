import type { LocalizedText } from "@/data/contentBranchesI18n";

export type NutritionStoryCardI18n = {
  id: string;
  title: LocalizedText;
  lead: LocalizedText;
  bullets: LocalizedText[];
};

export type NutritionQuickQuestionI18n = {
  question: LocalizedText;
  answer: LocalizedText;
};

export type NutritionDetailPageI18n = {
  slug: string;
  parentTopicId: string;
  title: LocalizedText;
  heroBadge: LocalizedText;
  heroTitle: LocalizedText;
  heroDescription: LocalizedText;
  heroImageSlotId?: string;
  openingNoteTitle?: LocalizedText;
  openingNoteBody?: LocalizedText;
  filmStoryTitle: LocalizedText;
  filmStoryBody: LocalizedText;
  filmQuestionTitle: LocalizedText;
  filmQuestionBody: LocalizedText;
  storySectionTitle: LocalizedText;
  storySectionDescription?: LocalizedText;
  storyCards: NutritionStoryCardI18n[];
  quickQuestionSectionTitle: LocalizedText;
  quickQuestions: NutritionQuickQuestionI18n[];
  closingTitle: LocalizedText;
  closingBody: LocalizedText;
  primaryCtaLabel: LocalizedText;
  primaryCtaHref: string;
};

export const nutritionDetailPagesI18n: Record<string, NutritionDetailPageI18n> = {
  "sua-va-nhung-dieu-thuong-duoc-tin": {
    slug: "sua-va-nhung-dieu-thuong-duoc-tin",
    parentTopicId: "sua-va-nhung-dieu-thuong-duoc-tin",
    title: { vi: "Những điều thường được tin về sữa", en: "Common Beliefs About Milk" },
    heroBadge: { vi: "Góc nhìn từ WTH · Sữa", en: "Perspective from WTH · Milk" },
    heroTitle: { vi: "Sữa và những điều thường được tin", en: "Milk and the Things Commonly Believed" },
    heroDescription: {
      vi: "Từ góc nhìn của WTH, sữa không chỉ là một thực phẩm. Nó còn là một niềm tin được lặp lại qua tuổi thơ, quảng bá, trường học và những khuyến nghị dinh dưỡng quen thuộc đến mức rất ít người còn muốn hỏi lại.",
      en: "From the perspective of WTH, milk is not only a food. It is also a belief repeated through childhood, advertising, schools, and familiar nutrition recommendations until very few people still want to question it.",
    },
    heroImageSlotId: "dinh-duong.hero.sua-wth",
    openingNoteTitle: { vi: "Cách tiếp cận nội dung này", en: "How to approach this content" },
    openingNoteBody: {
      vi: "Nội dung dưới đây không nhằm kết luận sữa là tốt hay xấu theo một đáp án tuyệt đối. Mục tiêu là nhìn lại niềm tin quanh sữa: nó đến từ đâu, được củng cố ra sao, và vì sao nhiều người cảm thấy bất an khi phải đặt lại câu hỏi.",
      en: "This page does not aim to conclude that milk is good or bad with one absolute answer. The goal is to revisit the beliefs around milk: where they come from, how they are reinforced, and why so many people feel uneasy when they have to question them.",
    },
    filmStoryTitle: { vi: "Phim đang kể gì", en: "What the film is saying" },
    filmStoryBody: {
      vi: "WTH đặt lại câu chuyện về sữa như một sản phẩm được chống đỡ không chỉ bởi nhu cầu ăn uống, mà còn bởi quảng bá, giáo dục và các khuyến nghị dinh dưỡng lặp đi lặp lại suốt nhiều năm. Điều bộ phim làm không phải là phủ nhận mọi giá trị của sữa, mà là buộc người xem nhìn lại vì sao niềm tin quanh sữa lại bền đến vậy.",
      en: "WTH revisits milk as a product sustained not only by nutritional need, but also by advertising, education, and dietary recommendations repeated over many years. The film does not deny all value in milk; it pushes the viewer to reconsider why beliefs around milk have become so durable.",
    },
    filmQuestionTitle: { vi: "Phim đang đặt lại câu hỏi gì", en: "What question the film reopens" },
    filmQuestionBody: {
      vi: "Niềm tin về sữa có hoàn toàn đến từ bằng chứng độc lập, hay còn được nuôi lớn bởi lợi ích ngành, thói quen xã hội và ký ức tuổi thơ? Khi một thực phẩm đã quá quen, liệu con người còn đủ khoảng cách để nhìn lại nó như một lựa chọn, thay vì một điều hiển nhiên?",
      en: "Does belief in milk come entirely from independent evidence, or is it also enlarged by industry interests, social habits, and childhood memory? When a food becomes too familiar, can people still step back enough to see it as a choice rather than as something self-evident?",
    },
    storySectionTitle: { vi: "Hướng triển khai nội dung", en: "Content development directions" },
    storySectionDescription: {
      vi: "Các chủ đề dưới đây không phải kết luận cuối cùng. Đây là những hướng nhỏ có thể mở thành bài ngắn hoặc chuỗi nội dung tiếp theo.",
      en: "The topics below are not final conclusions. They are smaller paths that can become short pieces or follow-up content series.",
    },
    storyCards: [
      {
        id: "sua-niem-tin-xa-hoi",
        title: { vi: "Sữa đi từ thực phẩm thành niềm tin xã hội như thế nào?", en: "How Does Milk Move From Food to Social Belief?" },
        lead: {
          vi: "Một thực phẩm trở thành điều “phải có” không chỉ nhờ giá trị dinh dưỡng. Nó còn cần sự lặp lại qua trường học, quảng bá, gia đình và cảm giác an tâm tập thể.",
          en: "A food does not become something people feel they must have through nutrition alone. It also needs repetition through school, advertising, family, and a shared sense of security.",
        },
        bullets: [
          { vi: "Vì sao những điều được dạy từ nhỏ lại khó bị đặt lại câu hỏi?", en: "Why are things learned in childhood so difficult to question later?" },
          { vi: "Quảng bá có thể biến một lựa chọn thành chuẩn mực ra sao?", en: "How can advertising turn one option into a social norm?" },
          { vi: "Khi cả xã hội cùng tin một điều, cá nhân còn dám nghi ngờ không?", en: "When an entire society believes something, does the individual still dare to doubt it?" },
        ],
      },
      {
        id: "quang-ba-tuoi-tho",
        title: { vi: "Vì sao quảng bá tuổi thơ có thể theo ta đến tuổi trưởng thành?", en: "Why Can Childhood Promotion Follow Us into Adulthood?" },
        lead: {
          vi: "Nhiều niềm tin ăn uống không bắt đầu từ nghiên cứu mình tự đọc, mà từ hình ảnh tuổi thơ được lặp lại đủ lâu để thành phản xạ.",
          en: "Many beliefs about food do not begin with research we read ourselves, but with childhood images repeated long enough to become reflexes.",
        },
        bullets: [
          { vi: "Một ký ức an toàn thời nhỏ ảnh hưởng đến lựa chọn khi lớn lên như thế nào?", en: "How does a feeling of childhood safety shape choices in adulthood?" },
          { vi: "Vì sao càng quen thuộc, con người càng ít kiểm tra lại?", en: "Why do people check less as something becomes more familiar?" },
          { vi: "Một thông điệp lặp nhiều năm có thể mạnh hơn dữ liệu mới ra sao?", en: "How can a message repeated for years outweigh newer data?" },
        ],
      },
      {
        id: "khuyen-nghi-khong-ai-hoi-lai",
        title: { vi: "Khi nào một khuyến nghị dinh dưỡng trở thành điều không ai dám hỏi lại?", en: "When Does a Nutrition Recommendation Become Untouchable?" },
        lead: {
          vi: "Có những lời khuyên được lặp lại quá lâu đến mức chúng không còn được nhìn như khuyến nghị, mà như chân lý.",
          en: "Some recommendations are repeated so long that they stop being seen as recommendations and start being treated like truths.",
        },
        bullets: [
          { vi: "Điều gì khiến người ta tin một khuyến nghị chỉ vì nó quen?", en: "What makes people trust a recommendation simply because it feels familiar?" },
          { vi: "Khi nào khuyến nghị và lợi ích ngành bắt đầu chồng lên nhau?", en: "When do recommendations and industry interests start overlapping?" },
          { vi: "Một lời khuyên phổ biến có luôn đồng nghĩa với lời khuyên phù hợp không?", en: "Does popular advice always mean suitable advice?" },
        ],
      },
      {
        id: "bo-sua-bat-an",
        title: { vi: "Vì sao nhiều người thấy bất an nếu bỏ sữa?", en: "Why Do Many People Feel Uneasy About Leaving Milk Behind?" },
        lead: {
          vi: "Cảm giác bất an khi bỏ một thực phẩm quen thuộc đôi khi không đến từ cơ thể, mà từ nỗi sợ mình đang đi ngược lại điều đã được dạy từ lâu.",
          en: "The unease of leaving a familiar food sometimes does not come from the body, but from the fear of going against what was taught for years.",
        },
        bullets: [
          { vi: "Nỗi bất an này đến từ nhu cầu thật hay từ ký ức tập thể?", en: "Does this unease come from real need or from collective memory?" },
          { vi: "Điều gì làm con người sợ thiếu dù chưa thật sự hiểu mình đang thiếu gì?", en: "What makes people fear lack before they even understand what might be lacking?" },
          { vi: "Vì sao một sự thay đổi nhỏ trong bữa ăn lại tạo cảm giác mất an toàn lớn?", en: "Why can a small dietary change trigger such a large sense of insecurity?" },
        ],
      },
      {
        id: "sua-la-lua-chon-hay-mac-dinh",
        title: { vi: "Sữa là một lựa chọn hay một mặc định?", en: "Is Milk a Choice or a Default?" },
        lead: {
          vi: "Khi một thứ hiện diện đủ lâu trong đời sống, con người dễ ngừng xem nó là lựa chọn. Từ đó, việc tiếp tục dùng hay ngừng dùng cũng ít được suy nghĩ thật sự.",
          en: "When something stays in life long enough, people stop seeing it as a choice. From there, both continuing and stopping can happen without real thought.",
        },
        bullets: [
          { vi: "Điều gì khiến một thực phẩm trở thành mặc định?", en: "What turns a food into a default?" },
          { vi: "Khi nào mình đang chọn chủ động, và khi nào chỉ đang lặp lại?", en: "When are we choosing actively, and when are we only repeating?" },
          { vi: "Một lựa chọn ăn uống có thể được nhìn lại từ đâu?", en: "From where can an eating choice be revisited?" },
        ],
      },
      {
        id: "doc-phim-de-doc-niem-tin",
        title: { vi: "Xem phim để soi lại niềm tin, không phải để tin thêm một cực khác", en: "Watch the Film to Revisit Belief, Not to Trade One Extreme for Another" },
        lead: {
          vi: "WTH có thể tạo tác động mạnh, nhưng giá trị thật nằm ở chỗ nó mở ra câu hỏi. Nếu xem phim chỉ để chuyển từ một niềm tin cũ sang một niềm tin mới, thì mình vẫn chưa đọc chậm đủ.",
          en: "WTH can hit hard, but its real value lies in opening questions. If the film only moves us from one belief to another, we have still not read slowly enough.",
        },
        bullets: [
          { vi: "Khi nào phim là điểm khởi đầu tốt?", en: "When is a film a good starting point?" },
          { vi: "Khi nào người xem bị cuốn vào kết luận quá nhanh?", en: "When does a viewer get pulled into a conclusion too quickly?" },
          { vi: "Làm sao biến một luận điểm thành cuộc đối thoại chậm hơn với chính mình?", en: "How can an argument become a slower conversation with ourselves?" },
        ],
      },
    ],
    quickQuestionSectionTitle: { vi: "Câu hỏi dễ gặp", en: "Common Questions" },
    quickQuestions: [
      {
        question: { vi: "Sữa có thật sự cần thiết như nhiều người vẫn nghĩ?", en: "Is milk really as necessary as many people think?" },
        answer: {
          vi: "Câu hỏi này không nên trả lời bằng một chữ có hoặc không cho tất cả mọi người. Điều quan trọng hơn là nhìn lại: vì sao mình tin sữa cần thiết, niềm tin đó dựa trên điều gì, và nó có còn phù hợp với cơ thể cũng như đời sống hiện tại hay không.",
          en: "This is not a question that should be answered with one universal yes or no. What matters more is revisiting why we believe milk is necessary, what that belief rests on, and whether it still fits the body and present life.",
        },
      },
      {
        question: { vi: "Bỏ sữa có đồng nghĩa với thiếu chất không?", en: "Does leaving milk behind automatically mean deficiency?" },
        answer: {
          vi: "Nỗi lo thiếu chất thường xuất hiện rất nhanh vì sữa đã gắn với hình ảnh “thiết yếu” quá lâu. Nhưng điều cần nhìn là toàn bộ cách ăn, chứ không phải chỉ một thực phẩm đơn lẻ.",
          en: "The fear of deficiency appears quickly because milk has been tied to the idea of being essential for so long. But what needs attention is the whole pattern of eating, not one isolated food.",
        },
      },
      {
        question: { vi: "Xem WTH về sữa thì nên tin đến mức nào?", en: "How far should someone trust WTH on milk?" },
        answer: {
          vi: "Nên dùng phim như một điểm khởi đầu để hỏi lại niềm tin cũ, không nên biến nó thành kết luận cuối cùng. Giá trị thật của phim là mở câu hỏi, không phải đóng câu hỏi.",
          en: "The film should be used as a starting point for revisiting older beliefs, not as a final conclusion. Its real value is to open questions, not to close them.",
        },
      },
    ],
    closingTitle: { vi: "Đi tiếp từ đây", en: "Continue from here" },
    closingBody: {
      vi: "Sau khi nhìn lại câu chuyện về sữa, bước tiếp theo hợp lý là quay về câu hỏi lớn hơn: điều cơ thể thật sự cần là gì, và vì sao nỗi lo thiếu đạm luôn đến quá sớm.",
      en: "After revisiting the story around milk, the next logical step is the bigger question: what does the body truly need, and why does fear around protein appear so early?",
    },
    primaryCtaLabel: { vi: "Sang trục Chất đạm", en: "Continue to the Protein Axis" },
    primaryCtaHref: "/dinh-duong-thien-lanh/chat-dam-hieu-sao-cho-dung",
  },
  "chat-dam-hieu-sao-cho-dung": {
    slug: "chat-dam-hieu-sao-cho-dung",
    parentTopicId: "chat-dam-hang-ngay",
    title: { vi: "Chất đạm: hiểu sao cho đúng", en: "Protein: Understanding It Right" },
    heroBadge: { vi: "Góc nhìn từ WTH · Chất đạm", en: "Perspective from WTH · Protein" },
    heroTitle: { vi: "Chất đạm và nỗi lo thiếu luôn đến quá sớm", en: "Protein and the Fear That Arrives Too Early" },
    heroDescription: {
      vi: "Trong hầu hết mọi cuộc trò chuyện về thay đổi cách ăn, câu hỏi thiếu đạm thường xuất hiện đầu tiên. WTH chạm đúng nỗi sợ đó, không phải để phủ nhận vai trò của đạm, mà để hỏi lại: điều cơ thể thật sự cần đang được hiểu như thế nào?",
      en: "In most conversations about changing the way we eat, fear of protein deficiency appears first. WTH touches that fear directly, not to deny the role of protein, but to ask again: how are the body’s actual needs being understood?",
    },
    heroImageSlotId: "dinh-duong.topic.chat-dam-hang-ngay",
    openingNoteTitle: { vi: "Cách tiếp cận nội dung này", en: "How to approach this content" },
    openingNoteBody: {
      vi: "Nội dung dưới đây không nhằm chứng minh một chế độ ăn là đúng tuyệt đối. Góc nhìn từ WTH được dùng để nhìn lại nỗi sợ thiếu đạm: nỗi sợ đó đến từ cơ thể, từ thói quen, hay từ cách xã hội đã dạy mình phải lo?",
      en: "This page is not trying to prove one eating pattern is absolutely correct. It uses the perspective opened by WTH to revisit fear around protein: does that fear come from the body, from habit, or from the way society taught us to worry?",
    },
    filmStoryTitle: { vi: "Phim đang kể gì", en: "What the film is saying" },
    filmStoryBody: {
      vi: "WTH đi thẳng vào nỗi lo thiếu đạm khi giảm thịt, rồi dùng hình ảnh, dữ kiện và câu chuyện của những người ăn thuần thực vật để đặt lại một điều rất quen: có phải điều cơ thể cần đang bị hiểu rộng hơn mức cần thiết hay không?",
      en: "WTH goes straight into fear around protein deficiency when reducing meat, then uses imagery, data, and the stories of plant-based eaters to revisit a familiar idea: are the body’s needs being understood more broadly than necessary?",
    },
    filmQuestionTitle: { vi: "Phim đang đặt lại câu hỏi gì", en: "What question the film reopens" },
    filmQuestionBody: {
      vi: "Cơ thể thực sự cần bao nhiêu đạm? Nguồn thực vật có đủ đáp ứng không? Và vì sao con người lại rất dễ hoảng khi chỉ cần ai đó gợi ý ăn ít thịt hơn?",
      en: "How much protein does the body truly need? Can plant sources meet that need? And why do people become anxious so quickly when someone merely suggests eating less meat?",
    },
    storySectionTitle: { vi: "Hướng triển khai nội dung", en: "Content development directions" },
    storySectionDescription: {
      vi: "Các hướng dưới đây nên được nhìn như điểm khởi đầu để phát triển bài ngắn và chuỗi giải thích dễ hiểu.",
      en: "The directions below should be seen as starting points for short articles and accessible explanation series.",
    },
    storyCards: [
      {
        id: "noi-so-dau-tien",
        title: { vi: "Vì sao thiếu đạm luôn là nỗi sợ đầu tiên?", en: "Why Is Protein Deficiency the First Fear?" },
        lead: {
          vi: "Có những nỗi sợ xuất hiện nhanh đến mức giống phản xạ. Với dinh dưỡng, thiếu đạm là một trong những phản xạ mạnh nhất.",
          en: "Some fears appear so quickly that they feel like reflexes. In nutrition, fear of protein deficiency is one of the strongest examples.",
        },
        bullets: [
          { vi: "Nỗi sợ này bắt đầu từ trải nghiệm cơ thể hay từ lời nhắc đi nhắc lại?", en: "Does this fear begin with bodily experience or with messages repeated over and over?" },
          { vi: "Vì sao người ta dễ lo thiếu trước cả khi hiểu nhu cầu thật?", en: "Why do people worry about lack before understanding actual need?" },
          { vi: "Khi một nỗi sợ quá quen, nó có còn được kiểm tra lại không?", en: "When a fear becomes familiar, is it still being checked at all?" },
        ],
      },
      {
        id: "co-the-can-bao-nhieu",
        title: { vi: "Cơ thể thật sự cần bao nhiêu đạm?", en: "How Much Protein Does the Body Really Need?" },
        lead: {
          vi: "Câu hỏi không chỉ là con số. Điều quan trọng hơn là cách nhu cầu đạm được hiểu, được áp dụng và được phóng đại trong đời sống hằng ngày.",
          en: "The question is not only about a number. More important is how protein need is understood, applied, and sometimes inflated in daily life.",
        },
        bullets: [
          { vi: "Một con số tổng quát có đủ cho mọi người không?", en: "Is one general number enough for everyone?" },
          { vi: "Nhu cầu đạm gắn với hoàn cảnh sống như thế nào?", en: "How is protein need shaped by living context?" },
          { vi: "Khi nào một nhu cầu thật bị biến thành nỗi sợ quá mức?", en: "When does a real need get turned into an exaggerated fear?" },
        ],
      },
      {
        id: "dam-thoi-quen-hay-khoa-hoc",
        title: { vi: "Nỗi lo thiếu đạm được nuôi bởi thói quen hay bởi khoa học?", en: "Is Fear Around Protein Sustained by Habit or by Science?" },
        lead: {
          vi: "Không phải mọi lo lắng đều vô căn cứ. Nhưng cũng không phải mọi điều nghe có vẻ khoa học đều đang được hiểu đúng đến nơi đến chốn.",
          en: "Not every concern is baseless. But not everything that sounds scientific is actually being understood with enough depth.",
        },
        bullets: [
          { vi: "Điều gì làm người ta tin một nỗi lo chỉ vì ai cũng đang lo?", en: "What makes people believe a fear simply because everyone else is afraid too?" },
          { vi: "Khi nào ngôn ngữ khoa học bị dùng để củng cố một thói quen?", en: "When does scientific language get used to reinforce a habit?" },
          { vi: "Làm sao phân biệt giữa nhu cầu thật và nỗi sợ quen thuộc?", en: "How can we tell the difference between real need and familiar fear?" },
        ],
      },
      {
        id: "nguon-dam-khac-so-dong",
        title: { vi: "Vì sao nhiều người khó yên tâm khi nghe về nguồn đạm khác số đông?", en: "Why Do So Many People Distrust Unfamiliar Protein Sources?" },
        lead: {
          vi: "Khi một nguồn thực phẩm đã gắn với hình ảnh sức mạnh và đủ đầy, những lựa chọn khác thường bị nhìn bằng ánh mắt nghi ngờ trước khi được hiểu.",
          en: "When one food source is tied to strength and sufficiency, alternative sources are often viewed with suspicion before they are even understood.",
        },
        bullets: [
          { vi: "Vì sao điều quen dễ tạo cảm giác an toàn hơn?", en: "Why does the familiar feel safer so easily?" },
          { vi: "Một nguồn thực phẩm lạ có bị đánh giá thấp chỉ vì không quen không?", en: "Can an unfamiliar food source be underrated simply because it is unfamiliar?" },
          { vi: "Con người có đang đánh giá dinh dưỡng bằng cảm giác hơn là hiểu biết?", en: "Are people judging nutrition more by feeling than by understanding?" },
        ],
      },
      {
        id: "khong-chi-la-so-luong",
        title: { vi: "Cơ thể cần đạm theo cách nào chứ không chỉ theo số lượng?", en: "In What Way Does the Body Need Protein, Not Only How Much?" },
        lead: {
          vi: "Nói về đạm mà chỉ chăm chăm vào con số dễ làm người ta quên mất bối cảnh sống, tổng thể bữa ăn và khả năng duy trì lâu dài.",
          en: "Talking about protein through numbers alone makes it easy to forget living context, the whole meal pattern, and whether an approach is sustainable.",
        },
        bullets: [
          { vi: "Số lượng có phải là toàn bộ câu chuyện?", en: "Is quantity the whole story?" },
          { vi: "Vì sao cách ăn tổng thể quan trọng hơn một chỉ số đơn lẻ?", en: "Why does the whole pattern of eating matter more than a single metric?" },
          { vi: "Khi nào việc theo số khiến con người bỏ quên cảm nhận thật của cơ thể?", en: "When does chasing numbers make people ignore the body’s actual signals?" },
        ],
      },
      {
        id: "tu-so-hai-den-doc-cham",
        title: { vi: "Từ nỗi sợ thiếu đạm đến khả năng đọc chậm hơn", en: "From Fear of Deficiency to a Slower Way of Reading" },
        lead: {
          vi: "Giá trị lớn nhất của WTH không phải ở chỗ xóa sạch mọi nỗi lo. Nó nằm ở chỗ buộc người xem chậm lại để kiểm tra xem nỗi lo đó có thực sự được hiểu đúng hay chưa.",
          en: "The real value of WTH is not that it erases every fear. It forces viewers to slow down and ask whether the fear itself has been understood properly.",
        },
        bullets: [
          { vi: "Khi nào nỗi sợ khiến mình ra quyết định vội?", en: "When does fear push us into rushed decisions?" },
          { vi: "Đọc chậm hơn có thể thay đổi cách chọn bữa ăn ra sao?", en: "How can slowing down change the way we choose meals?" },
          { vi: "Một câu hỏi tốt giúp mình bình tĩnh hơn thế nào?", en: "How can one good question make us calmer?" },
        ],
      },
    ],
    quickQuestionSectionTitle: { vi: "Câu hỏi dễ gặp", en: "Common Questions" },
    quickQuestions: [
      {
        question: { vi: "Ăn ít thịt có dễ thiếu đạm không?", en: "Does eating less meat easily lead to protein deficiency?" },
        answer: {
          vi: "Đây là nỗi lo rất thường gặp, nhưng không thể trả lời bằng phản xạ. Điều cần nhìn là cách ăn tổng thể, mức đa dạng của thực phẩm và nhu cầu thực tế của từng người.",
          en: "This is a very common fear, but it should not be answered by reflex. What matters is the overall eating pattern, food diversity, and each person’s real needs.",
        },
      },
      {
        question: { vi: "WTH có đang nói đạm không quan trọng?", en: "Is WTH saying that protein does not matter?" },
        answer: {
          vi: "Không. Góc nhìn đúng là phim đang buộc người xem hỏi lại cách mình hiểu về đạm, chứ không phủ nhận vai trò của đạm.",
          en: "No. The stronger reading is that the film pushes people to question how they understand protein, not to deny its role.",
        },
      },
      {
        question: { vi: "Nên bắt đầu đọc về đạm từ đâu?", en: "Where should someone begin when reading about protein?" },
        answer: {
          vi: "Nên bắt đầu từ câu hỏi đơn giản nhất: điều mình đang sợ có thật sự đến từ cơ thể, hay đến từ một nỗi lo được lặp lại quá lâu?",
          en: "A good place to begin is with the simplest question: does the fear come from the body, or from an anxiety repeated for too long?",
        },
      },
    ],
    closingTitle: { vi: "Đi tiếp từ đây", en: "Continue from here" },
    closingBody: {
      vi: "Khi đã nhìn lại nỗi lo thiếu đạm, bước tiếp theo là quay sang câu chuyện rộng hơn: đái tháo đường, béo phì và sức khỏe chuyển hóa có thật sự chỉ là câu chuyện của đường, mỡ hay ý chí cá nhân hay không.",
      en: "Once fear around protein has been revisited, the next step is a wider story: are diabetes, obesity, and metabolic health really only about sugar, fat, or personal willpower?",
    },
    primaryCtaLabel: { vi: "Sang trục Chuyển hóa", en: "Continue to the Metabolic Axis" },
    primaryCtaHref: "/dinh-duong-thien-lanh/suc-khoe-chuyen-hoa-va-bua-an-hang-ngay",
  },
  "suc-khoe-chuyen-hoa-va-bua-an-hang-ngay": {
    slug: "suc-khoe-chuyen-hoa-va-bua-an-hang-ngay",
    parentTopicId: "suc-khoe-chuyen-hoa",
    title: { vi: "Sức khỏe chuyển hóa và bữa ăn hằng ngày", en: "Metabolic Health and Daily Eating" },
    heroBadge: { vi: "Góc nhìn từ WTH · Chuyển hóa", en: "Perspective from WTH · Metabolism" },
    heroTitle: { vi: "Bữa ăn hằng ngày và những gì tích lũy âm thầm", en: "Daily Meals and What Quietly Accumulates" },
    heroDescription: {
      vi: "Đái tháo đường, béo phì và rối loạn chuyển hóa thường bị kể như câu chuyện của một thủ phạm duy nhất. WTH buộc người xem nhìn rộng hơn: bữa ăn, thói quen, môi trường thực phẩm và nhịp sống đang đan vào nhau như thế nào.",
      en: "Diabetes, obesity, and metabolic disorders are often told as the story of one single culprit. WTH forces the viewer to look wider: how meals, habits, the food environment, and life rhythms intertwine.",
    },
    heroImageSlotId: "dinh-duong.topic.dai-thao-duong-beo-phi-chuyen-hoa",
    openingNoteTitle: { vi: "Cách tiếp cận nội dung này", en: "How to approach this content" },
    openingNoteBody: {
      vi: "Nội dung dưới đây không tìm một thủ phạm duy nhất cho bệnh chuyển hóa. Mục tiêu là mở ra một cách nhìn rộng hơn: điều gì đang tích lũy quá lâu trong đời sống thường ngày mà mình ít khi nhận ra?",
      en: "This page is not searching for one single culprit behind metabolic disease. It opens a wider frame: what has been accumulating too long in ordinary life without being noticed?",
    },
    filmStoryTitle: { vi: "Phim đang kể gì", en: "What the film is saying" },
    filmStoryBody: {
      vi: "WTH nối bệnh mãn tính với cách con người ăn, mua, tin và sống trong một hệ thực phẩm lớn hơn từng bữa ăn riêng lẻ. Điều phim làm là kéo câu chuyện ra khỏi từng món ăn đơn lẻ để đặt nó vào nhịp sống lặp lại hằng ngày.",
      en: "WTH connects chronic disease with the ways people eat, buy, believe, and live inside a food system larger than isolated meals. The film pulls the story out of single dishes and places it into repeated daily rhythms.",
    },
    filmQuestionTitle: { vi: "Phim đang đặt lại câu hỏi gì", en: "What question the film reopens" },
    filmQuestionBody: {
      vi: "Đái tháo đường, béo phì và các vấn đề chuyển hóa là câu chuyện của lựa chọn cá nhân, hay còn là hệ quả của một môi trường thực phẩm đã được định hình từ trước? Và nếu vậy, mình nên bắt đầu nhìn lại từ đâu?",
      en: "Are diabetes, obesity, and metabolic problems stories of individual choice alone, or are they also the result of a food environment shaped long before personal choice enters the picture? If so, where should we begin looking again?",
    },
    storySectionTitle: { vi: "Hướng triển khai nội dung", en: "Content development directions" },
    storySectionDescription: {
      vi: "Các chủ đề dưới đây có thể phát triển thành bài ngắn hoặc chuỗi nội dung đi từ gần đến sâu.",
      en: "The topics below can grow into short pieces or content series that move from the familiar into the deeper layers.",
    },
    storyCards: [
      {
        id: "khong-chi-la-duong",
        title: { vi: "Đái tháo đường có chỉ là câu chuyện của đường?", en: "Is Diabetes Only a Story About Sugar?" },
        lead: {
          vi: "Khi một vấn đề phức tạp được kể bằng một thủ phạm duy nhất, con người sẽ thấy dễ hiểu hơn. Nhưng sự dễ hiểu đó đôi khi che mất bức tranh lớn hơn.",
          en: "When a complex problem is told through one culprit alone, it becomes easier to understand. But that ease can also hide the larger picture.",
        },
        bullets: [
          { vi: "Vì sao người ta luôn muốn tìm một nguyên nhân đơn giản?", en: "Why do people always want a simple cause?" },
          { vi: "Một cách nhìn quá gọn có thể làm sai điều gì?", en: "What can be distorted by an overly tidy explanation?" },
          { vi: "Điều gì bị bỏ sót khi chỉ nhìn vào một chất?", en: "What gets left out when we look at only one substance?" },
        ],
      },
      {
        id: "beo-phi-loi-ca-nhan",
        title: { vi: "Vì sao béo phì thường bị nhìn như lỗi cá nhân?", en: "Why Is Obesity So Often Framed as Personal Failure?" },
        lead: {
          vi: "Một khi vấn đề sức khỏe bị quy hoàn toàn về ý chí cá nhân, người ta sẽ bỏ qua vai trò của môi trường sống, quảng bá thực phẩm và nhịp sinh hoạt bị bào mòn lâu ngày.",
          en: "Once a health problem is reduced entirely to individual willpower, the roles of living environment, food marketing, and worn-down routines quickly disappear from view.",
        },
        bullets: [
          { vi: "Khi nào phán xét cá nhân làm mờ đi bối cảnh thật?", en: "When does personal judgment blur the real context?" },
          { vi: "Môi trường thực phẩm tác động đến lựa chọn hàng ngày ra sao?", en: "How does the food environment shape everyday choice?" },
          { vi: "Một thói quen bị định hình từ ngoài vào có còn hoàn toàn là lựa chọn cá nhân không?", en: "If a habit is formed from outside pressures, is it still entirely a personal choice?" },
        ],
      },
      {
        id: "tich-luy-am-tham",
        title: { vi: "Điều gì tích lũy âm thầm trước khi cơ thể lên tiếng?", en: "What Accumulates Quietly Before the Body Speaks?" },
        lead: {
          vi: "Sức khỏe dài hạn hiếm khi đổi bởi một bữa ăn. Nó thường được tạo nên bởi những điều lặp lại quá lâu mà mình xem là bình thường.",
          en: "Long-term health rarely changes because of one meal. It is more often shaped by things repeated so long that they come to feel normal.",
        },
        bullets: [
          { vi: "Vì sao điều quen lại dễ được xem là vô hại?", en: "Why is the familiar so easily mistaken for harmless?" },
          { vi: "Một nhịp sống lệch lâu ngày ảnh hưởng sâu đến đâu?", en: "How deeply can a misaligned daily rhythm shape health over time?" },
          { vi: "Khi nào những điều nhỏ bắt đầu cộng dồn thành vấn đề lớn?", en: "When do small things begin to add up into larger problems?" },
        ],
      },
      {
        id: "bua-an-va-loi-song",
        title: { vi: "Vì sao nhiều người chỉ nhìn vào món ăn mà quên cả lối sống?", en: "Why Do So Many People Look at the Meal but Forget the Lifestyle?" },
        lead: {
          vi: "Một món ăn riêng lẻ dễ bị soi hơn cả một nhịp sống. Nhưng điều ảnh hưởng lâu dài lại thường nằm ở tổng thể.",
          en: "A single dish is easier to inspect than an entire rhythm of life. But long-term impact usually lives in the whole pattern.",
        },
        bullets: [
          { vi: "Vì sao con người thích sửa một món hơn là sửa cả nhịp sống?", en: "Why do people prefer changing one meal over changing a whole life rhythm?" },
          { vi: "Bữa ăn, giấc ngủ, vận động và stress liên kết với nhau thế nào?", en: "How are meals, sleep, movement, and stress linked together?" },
          { vi: "Điều gì khiến giải pháp đơn giản luôn hấp dẫn hơn giải pháp đúng?", en: "Why is the simple fix always more attractive than the right one?" },
        ],
      },
      {
        id: "he-thuc-pham-lon-hon-bua-an",
        title: { vi: "Hệ thực phẩm lớn hơn từng bữa ăn riêng lẻ như thế nào?", en: "How Is the Food System Bigger Than Any Single Meal?" },
        lead: {
          vi: "Một người không chọn bữa ăn trong khoảng trống. Họ chọn trong môi trường quảng bá, thói quen gia đình, giá cả, sự tiện lợi và cả nhịp sống bị ép nhanh.",
          en: "No one chooses meals in a vacuum. Choices happen inside advertising, family habits, pricing, convenience, and a life rhythm pushed to move too fast.",
        },
        bullets: [
          { vi: "Một lựa chọn cá nhân chịu tác động từ môi trường đến đâu?", en: "How far is personal choice shaped by the surrounding environment?" },
          { vi: "Vì sao thực phẩm tiện và quen lại dễ thắng thực phẩm cần suy nghĩ?", en: "Why do convenient and familiar foods beat foods that ask for more thought?" },
          { vi: "Khi nào câu chuyện sức khỏe phải được nhìn như câu chuyện hệ thống?", en: "When must a health story be seen as a systems story?" },
        ],
      },
      {
        id: "doc-wth-de-mo-rong-cau-hoi",
        title: { vi: "Đọc WTH để mở rộng câu hỏi, không để chốt vội câu trả lời", en: "Read WTH to Widen the Question, Not to Rush the Answer" },
        lead: {
          vi: "Giá trị lớn nhất của bộ phim ở trục này là nó khiến người xem khó tiếp tục nhìn bệnh chuyển hóa bằng một câu chuyện quá gọn.",
          en: "The strongest value of the film on this axis is that it makes it harder to keep seeing metabolic disease through one overly tidy story.",
        },
        bullets: [
          { vi: "Khi nào phim giúp mình nhìn rộng hơn?", en: "When does the film help us see more widely?" },
          { vi: "Khi nào phim dễ bị dùng như một cực khẳng định mới?", en: "When can the film be misused as a new certainty?" },
          { vi: "Làm sao biến góc nhìn từ phim thành nội dung gần với đời sống hằng ngày?", en: "How can the film’s perspective become content that stays close to daily life?" },
        ],
      },
    ],
    quickQuestionSectionTitle: { vi: "Câu hỏi dễ gặp", en: "Common Questions" },
    quickQuestions: [
      {
        question: { vi: "Người có đường huyết cao nên bắt đầu nhìn từ đâu?", en: "Where should someone with high blood sugar start looking?" },
        answer: {
          vi: "Không nên chỉ nhìn vào một món ăn hay một chất duy nhất. Điểm bắt đầu tốt hơn là nhìn tổng thể nhịp ăn, thói quen lặp lại, giấc ngủ, vận động và những gì đang tích lũy mỗi ngày.",
          en: "It is not enough to look at one food or one isolated substance. A better beginning is the whole pattern of meals, repeated habits, sleep, movement, and what is building up each day.",
        },
      },
      {
        question: { vi: "Bữa ăn ảnh hưởng nguy cơ lâu dài theo cách nào?", en: "How Do Meals Shape Long-Term Risk?" },
        answer: {
          vi: "Ảnh hưởng dài hạn thường đến từ điều được lặp lại quá lâu chứ không phải một bữa đơn lẻ. Điều khó nhất là những thói quen ấy thường trông rất bình thường nên ít bị đặt lại câu hỏi.",
          en: "Long-term impact usually comes from what is repeated too long rather than from a single meal. The hardest part is that such habits often look normal and so escape re-examination.",
        },
      },
      {
        question: { vi: "WTH có đang đơn giản hóa bệnh chuyển hóa không?", en: "Is WTH Oversimplifying Metabolic Disease?" },
        answer: {
          vi: "Phim có góc nhìn mạnh, nên người xem càng cần đọc chậm hơn. Cách đúng là dùng nó để mở rộng câu hỏi về bữa ăn và môi trường sống, chứ không biến nó thành một kết luận đóng.",
          en: "The film has a strong point of view, which is exactly why the viewer should read more slowly. Its best use is to widen questions about meals and living conditions, not to become a closed conclusion.",
        },
      },
    ],
    closingTitle: { vi: "Đi tiếp từ đây", en: "Continue from here" },
    closingBody: {
      vi: "Khi đã nhìn lại sức khỏe chuyển hóa, bước tiếp theo là quay sang câu chuyện rộng hơn: ung thư và những nguy cơ tích lũy lâu dài còn gắn với những thói quen ăn uống nào khác ngoài đường và mỡ.",
      en: "Once metabolic health has been revisited, the next step is a wider story: cancer and what other eating habits are linked to long-term accumulated risk beyond sugar and fat.",
    },
    primaryCtaLabel: { vi: "Sang Ung thư và bàn ăn", en: "Continue to Cancer and the Table" },
    primaryCtaHref: "/dinh-duong-thien-lanh/ung-thu-va-nhung-cau-hoi-tu-ban-an",
  },
  "ung-thu-va-nhung-cau-hoi-tu-ban-an": {
    slug: "ung-thu-va-nhung-cau-hoi-tu-ban-an",
    parentTopicId: "ung-thu-va-nhung-cau-hoi-tu-ban-an",
    title: { vi: "Ung thư và những câu hỏi từ bàn ăn", en: "Cancer and the Questions at the Table" },
    heroBadge: { vi: "Góc nhìn từ WTH · Bàn ăn và nguy cơ dài hạn", en: "Perspective from WTH · The Table and Long-Term Risk" },
    heroTitle: { vi: "Ung thư và những câu hỏi bắt đầu từ bữa ăn hằng ngày", en: "Cancer and the Questions That Begin with Daily Meals" },
    heroDescription: {
      vi: "Khi nói đến ung thư, con người thường muốn tìm một nguyên nhân thật rõ. Nhưng từ góc nhìn của WTH, điều đáng nhìn kỹ hơn không nằm ở một món ăn đơn lẻ, mà ở những thói quen lặp lại quá lâu, quá quen, và ít khi được đặt lại câu hỏi.",
      en: "When it comes to cancer, people usually want to find a clear cause. But from the perspective of WTH, what deserves closer attention is not a single food, but habits repeated too long, too familiar, and seldom questioned again.",
    },
    heroImageSlotId: "dinh-duong.topic.ung-thu-va-goc-nhin-tu-bua-an",
    openingNoteTitle: { vi: "Cách tiếp cận nội dung này", en: "How to approach this content" },
    openingNoteBody: {
      vi: "Nội dung dưới đây không nhằm đơn giản hóa ung thư thành câu chuyện của riêng bàn ăn. Mục tiêu là nhìn lại cách con người đặt câu hỏi về bữa ăn, thói quen và nguy cơ tích lũy lâu dài, thay vì vội tìm một thủ phạm duy nhất.",
      en: "This content does not aim to reduce cancer to a story only about food. The goal is to revisit how people ask questions about meals, habits, and accumulated long-term risk, rather than rush to find a single culprit.",
    },
    filmStoryTitle: { vi: "Phim đang kể gì", en: "What the film is saying" },
    filmStoryBody: {
      vi: "WTH không kể ung thư như hệ quả của một bữa ăn duy nhất. Điều bộ phim làm là nối câu chuyện bệnh nặng với lối sống, hệ thực phẩm, thói quen tiêu dùng và những điều con người lặp lại đủ lâu để xem chúng là bình thường.",
      en: "WTH does not tell cancer as the result of a single meal. What the film does is connect serious disease with lifestyle, the food system, consumption habits, and things people repeat long enough to see as normal.",
    },
    filmQuestionTitle: { vi: "Phim đang đặt lại câu hỏi gì", en: "What question the film reopens" },
    filmQuestionBody: {
      vi: "Khi nói đến ung thư, vì sao con người luôn muốn chốt vào một nguyên nhân thật cụ thể? Và nếu nguy cơ dài hạn thường hình thành từ những điều tích lũy âm thầm, thì mình nên bắt đầu nhìn lại từ đâu trong chính bữa ăn hằng ngày?",
      en: "When it comes to cancer, why do people always want to fix on one specific cause? And if long-term risk usually forms from quietly accumulating things, where should we begin looking again in our own daily meals?",
    },
    storySectionTitle: { vi: "Hướng triển khai nội dung", en: "Content development directions" },
    storySectionDescription: {
      vi: "Các hướng dưới đây phù hợp để phát triển thành video ngắn, bài ngắn hoặc chuỗi nội dung tiếp theo, đi từ câu hỏi gần gũi đến góc nhìn dài hạn hơn.",
      en: "The directions below are suitable for developing into short videos, short articles, or follow-up content series, moving from familiar questions to a longer view.",
    },
    storyCards: [
      {
        id: "tim-thu-pham-duy-nhat",
        title: { vi: "Vì sao con người luôn muốn tìm một thủ phạm duy nhất?", en: "Why Do People Always Want to Find One Single Culprit?" },
        lead: {
          vi: "Khi đối diện bệnh nặng, con người thường cảm thấy dễ chịu hơn nếu có thể chỉ vào một nguyên nhân rõ ràng. Nhưng chính nhu cầu muốn chốt nhanh ấy đôi khi lại làm mình nhìn sai bức tranh lớn hơn.",
          en: "When facing serious illness, people usually feel more comfortable if they can point to one clear cause. But the very need to settle quickly sometimes makes people miss the bigger picture.",
        },
        bullets: [
          { vi: "Vì sao một nguyên nhân đơn giản luôn hấp dẫn hơn một quá trình tích lũy dài?", en: "Why is a simple cause always more attractive than a long accumulation process?" },
          { vi: "Điều gì bị bỏ sót khi mọi câu hỏi đều dồn vào một món ăn hoặc một chất?", en: "What is overlooked when every question narrows down to one food or one substance?" },
          { vi: "Khi nào sự đơn giản hóa làm mình hiểu sai câu chuyện sức khỏe?", en: "When does oversimplification lead to misunderstanding health?" },
        ],
      },
      {
        id: "thoi-quen-lap-lai-lau-ngay",
        title: { vi: "Một thói quen nhỏ lặp lại lâu ngày có thể ảnh hưởng đến đâu?", en: "How Far Can a Small Habit Repeated for Years Really Reach?" },
        lead: {
          vi: "Điều tạo ra nguy cơ dài hạn thường không gây ồn ào ngay từ đầu. Chính những điều lặp lại đủ lâu và quá quen thuộc mới là thứ khó nhìn ra nhất.",
          en: "What creates long-term risk usually makes no noise at first. It is the things repeated long enough and become too familiar that are hardest to see.",
        },
        bullets: [
          { vi: "Vì sao cái quen lại dễ được xem là vô hại?", en: "Why does familiarity so easily look harmless?" },
          { vi: "Một hành vi nhỏ cộng dồn theo năm tháng thay đổi điều gì?", en: "What does a small behavior accumulate into over months and years?" },
          { vi: "Khi nào nên nhìn bữa ăn như một nhịp sống, không chỉ là từng bữa riêng lẻ?", en: "When should meals be seen as a life rhythm, not just as isolated events?" },
        ],
      },
      {
        id: "ban-an-la-noi-gan-nhat",
        title: { vi: "Vì sao bàn ăn luôn là nơi đầu tiên bị đặt câu hỏi?", en: "Why Is the Table Always the First Place Questions Land?" },
        lead: {
          vi: "Bàn ăn gần nhất, lặp lại nhiều nhất, và vì thế cũng là nơi con người dễ quay lại nhất khi muốn tìm lời giải cho sức khỏe lâu dài.",
          en: "The table is nearest, repeated most often, and so it is also where people most easily turn when looking for solutions to long-term health.",
        },
        bullets: [
          { vi: "Điều gì khiến bữa ăn trở thành nơi gánh nhiều nghi ngờ nhất?", en: "What makes meals shoulder so much suspicion?" },
          { vi: "Gần gũi có đồng nghĩa với quyết định tất cả không?", en: "Does closeness mean having all the answers?" },
          { vi: "Làm sao nhìn bàn ăn đúng vai trò của nó mà không phóng đại?", en: "How can we see its actual role without overdoing it?" },
        ],
      },
      {
        id: "noi-qua-nhanh-ve-thuc-pham",
        title: { vi: "Điều gì đang bị nói quá nhanh khi gắn thực phẩm với bệnh tật?", en: "What Is Being Said Too Quickly When Food Gets Linked to Disease?" },
        lead: {
          vi: "Khi một thông điệp được kể theo kiểu dứt khoát, nó rất dễ lan đi. Nhưng với những vấn đề dài hạn, sự dứt khoát quá nhanh thường làm mất đi phần cần được đọc chậm hơn.",
          en: "When a message is told with finality, it spreads easily. But for long-term issues, too-quick certainty often loses the part that needs to be read more slowly.",
        },
        bullets: [
          { vi: "Vì sao thông điệp mạnh thường dễ được nhớ hơn thông điệp thận trọng?", en: "Why is a strong message easier to remember than a careful one?" },
          { vi: "Khi nào cách nói chắc nịch làm người nghe hiểu sai?", en: "When does certainty cause listeners to misunderstand?" },
          { vi: "Làm sao giữ được sự cẩn trọng mà nội dung vẫn đủ rõ để tiếp cận?", en: "How do we stay careful while keeping ideas clear enough to reach people?" },
        ],
      },
      {
        id: "he-thuc-pham-va-nguy-co",
        title: { vi: "Nguy cơ dài hạn chỉ đến từ lựa chọn cá nhân hay còn từ môi trường thực phẩm?", en: "Does Long-Term Risk Come Only from Personal Choice or Also from the Food Environment?" },
        lead: {
          vi: "Một người không ăn trong khoảng trống. Họ ăn trong quảng bá, trong nhịp sống, trong sự tiện lợi, trong giá cả và trong những gì đã được bình thường hóa.",
          en: "A person does not eat in a void. They eat inside advertising, inside daily rhythm, inside convenience, inside pricing, and inside what has been made normal.",
        },
        bullets: [
          { vi: "Môi trường thực phẩm đang dẫn dắt lựa chọn hằng ngày ra sao?", en: "How does the food environment shape everyday choice?" },
          { vi: "Khi nào một lựa chọn cá nhân thực ra đã bị định hình từ trước?", en: "When is a personal choice already shaped in advance?" },
          { vi: "Vì sao câu chuyện nguy cơ dài hạn cần được nhìn rộng hơn từng món ăn?", en: "Why must the long-term risk story be wider than any single dish?" },
        ],
      },
      {
        id: "doc-wth-de-mo-rong-cau-hoi",
        title: { vi: "Đọc WTH để mở rộng câu hỏi, không để chốt vội câu trả lời", en: "Read WTH to Widen Questions, Not to Settle Answers Too Fast" },
        lead: {
          vi: "Giá trị lớn nhất của WTH không nằm ở chỗ cho một kết luận cuối cùng. Nó nằm ở chỗ buộc người xem chậm lại để kiểm tra xem những niềm tin đó có thực sự được hiểu đúng hay chưa.",
          en: "The film's greatest value is not giving a final answer. It lies in forcing viewers to slow down and check whether these beliefs have been truly understood.",
        },
        bullets: [
          { vi: "Khi nào phim là điểm khởi đầu tốt cho nội dung sức khỏe?", en: "When is a film a good starting point for health content?" },
          { vi: "Khi nào người xem bị cuốn vào kết luận quá nhanh?", en: "When does a viewer get pulled into conclusions too quickly?" },
          { vi: "Làm sao biến một góc nhìn từ phim thành nội dung gần đời sống mà vẫn thận trọng?", en: "How can we turn a film perspective into life-close content while staying careful?" },
        ],
      },
    ],
    quickQuestionSectionTitle: { vi: "Câu hỏi dễ gặp", en: "Common Questions" },
    quickQuestions: [
      {
        question: { vi: "Có phải cứ nói đến ung thư là phải quay lại bàn ăn?", en: "Do we always have to return to the table when talking about cancer?" },
        answer: {
          vi: "Bàn ăn là một nơi rất gần với đời sống nên thường bị hỏi đầu tiên. Nhưng cách nhìn đúng là xem nó như một phần của lối sống và thói quen tích lũy lâu dài, không phải một lời giải đơn độc cho mọi câu hỏi.",
          en: "The table is so close to daily life that it is usually asked first. But the right way is to see it as part of lifestyle and accumulated habits over time, not as the sole solution to every question.",
        },
      },
      {
        question: { vi: "Một món ăn riêng lẻ có quyết định nguy cơ ung thư không?", en: "Does One Food Solely Determine Cancer Risk?" },
        answer: {
          vi: "Rất hiếm khi câu chuyện bệnh nặng nằm trọn trong một món ăn đơn lẻ. Điều cần nhìn hơn là nhịp ăn, thói quen lặp lại và môi trường sống đang tạo ra những lựa chọn ấy như thế nào.",
          en: "Very rarely does a serious disease story fit entirely into one food. What matters more is the eating rhythm, repeated habits, and how the living environment creates those choices.",
        },
      },
      {
        question: { vi: "Khi đọc nội dung về ung thư và thực phẩm, nên giữ thái độ nào?", en: "What Attitude Should We Have When Reading About Cancer and Food?" },
        answer: {
          vi: "Nên giữ sự cẩn trọng và tránh nhu cầu chốt quá nhanh vào một thủ phạm. Cách đọc tốt hơn là đi chậm, nhìn rộng và kiểm tra xem điều gì đang được nói quá chắc tay.",
          en: "Keep care and avoid rushing to blame one culprit. A better way is to go slowly, look widely, and check what is being said too confidently.",
        },
      },
    ],
    closingTitle: { vi: "Đi tiếp từ đây", en: "Continue from here" },
    closingBody: {
      vi: "Sau chuyên đề này, hướng hợp lý tiếp theo là quay lại phần Kiến thức nền tảng để làm rõ vì sao con người rất dễ tin vào những điều quen thuộc về ăn uống trước cả khi thật sự hiểu chúng.",
      en: "After this page, the logical next step is to return to the Foundational Knowledge section to understand why people so easily believe familiar things about food before truly understanding them.",
    },
    primaryCtaLabel: { vi: "Sang Kiến thức nền tảng", en: "Continue to Foundational Knowledge" },
    primaryCtaHref: "/dinh-duong-thien-lanh",
  },
};

export const nutritionDetailPageSlugs = Object.keys(nutritionDetailPagesI18n);