import type { QuizQuestion } from "@/data/quiz";

export const QUIZ_COPY = {
  sectionTitle: "Có một câu hỏi nhỏ dành cho bạn",
  sectionSubtitle: "Mình bắt đầu từ một vài điều nhỏ nhé.",
  introNote: "Chỉ cần đi từng chút thôi. Chọn điều gần với mình nhất lúc này.",
  introWhisper: "Không cần trả lời thật nhanh.",
  startButton: "Mình bắt đầu",
  progressHint: "Mình sẽ hỏi thật ngắn thôi.",
  questionHint: "Mình ở đây, cứ đi chậm thôi.",
  noRightWrong: "Chọn như một lời đáp nhẹ là đủ.",
  leadIns: [
    "Mình hỏi khẽ một điều thôi.",
    "Ừ, mình đi theo cảm giác lúc này nhé.",
    "Mình dừng lại cùng bạn một chút.",
    "Còn một góc nhỏ nữa.",
    "Mình đi chậm thêm một nhịp thôi.",
    "Có vẻ hướng gần hơn đang hiện ra.",
    "Chọn thật nhẹ ở câu này thôi.",
  ],
  backButton: "Lùi lại một chút",
} as const;

const SOFT_OPTIONS: QuizQuestion["options"] = [
  { key: "A", label: "Mình muốn hiểu rõ hơn chuyện đang diễn ra." },
  { key: "B", label: "Mình cần một lời giải thích rõ để bớt rối." },
  { key: "C", label: "Mình muốn một bước nhỏ, đủ nhẹ để làm ngay." },
  { key: "D", label: "Mình muốn nghe một câu chuyện thật, để thấy không chỉ có mình." },
  { key: "E", label: "Mình cần một lời nhắc dịu hơn cho mình và cho người khác." },
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    prompt: "Nếu hôm nay hơi mệt, điều gì có thể làm lòng mình nhẹ hơn một chút?",
    options: SOFT_OPTIONS,
  },
  {
    id: 2,
    prompt: "Khi mở một bài viết mới, mình mong nó nâng đỡ mình theo cách nào?",
    options: SOFT_OPTIONS,
  },
  {
    id: 3,
    prompt: "Giữa nhiều điều đang diễn ra, điều nào đang gần với lòng mình hơn?",
    options: SOFT_OPTIONS,
  },
  {
    id: 4,
    prompt: "Nếu chỉ bắt đầu rất nhẹ từ hôm nay, mình muốn bắt đầu kiểu nào?",
    options: SOFT_OPTIONS,
  },
  {
    id: 5,
    prompt: "Khi muốn thay đổi mà vẫn chùn lại, điều gì hay giữ mình ở đó?",
    options: SOFT_OPTIONS,
  },
  {
    id: 6,
    prompt: "Sau khi đọc xong, điều gì thường còn ở lại với mình?",
    options: SOFT_OPTIONS,
  },
  {
    id: 7,
    prompt: "Ngay lúc này, đâu là một điểm bắt đầu đủ gần?",
    options: SOFT_OPTIONS,
  },
];
