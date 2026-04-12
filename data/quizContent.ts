import type { QuizQuestion } from "@/data/quiz";

export const QUIZ_COPY = {
  sectionTitle: "Có một câu hỏi nhỏ dành cho bạn",
  sectionSubtitle:
    "Không cần trả lời thật nhanh. Chỉ cần chọn điều gần với mình nhất lúc này.",
  introNote: "7 câu hỏi ngắn, mỗi lần chỉ cần chọn một điều thấy gần với mình.",
  startButton: "Bắt đầu",
  progressLabel: "Câu hỏi",
  questionHint: "Cứ chọn điều gần với bạn nhất.",
  noRightWrong: "Không có đúng hay sai ở đây.",
  backButton: "Quay lại",
  nextButton: "Tiếp tục",
  finishButton: "Xem gợi ý đọc",
} as const;

const SOFT_OPTIONS: QuizQuestion["options"] = [
  { key: "A", label: "Một cách nhìn giúp mình hiểu chuyện gì đang diễn ra." },
  { key: "B", label: "Một lời giải thích rõ ràng để bớt rối hơn." },
  { key: "C", label: "Một bước nhỏ, đủ nhẹ để bắt đầu." },
  { key: "D", label: "Một câu chuyện thật để thấy mình không một mình." },
  { key: "E", label: "Một lời nhắc dịu dàng để nhìn mình và nhìn người nhẹ hơn." },
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    prompt: "Nếu hôm nay hơi mệt, điều nào có thể làm lòng nhẹ hơn một chút?",
    options: SOFT_OPTIONS,
  },
  {
    id: 2,
    prompt: "Khi đọc một điều mới, bạn mong nhận được cảm giác nào trước tiên?",
    options: SOFT_OPTIONS,
  },
  {
    id: 3,
    prompt: "Giữa nhiều điều đang diễn ra, điều nào nghe gần với bạn hơn cả?",
    options: SOFT_OPTIONS,
  },
  {
    id: 4,
    prompt: "Nếu bắt đầu từ hôm nay, cách nào khiến bạn thấy vừa sức nhất?",
    options: SOFT_OPTIONS,
  },
  {
    id: 5,
    prompt: "Khi muốn thay đổi nhưng chùn lại, điều gì thường giữ chân bạn?",
    options: SOFT_OPTIONS,
  },
  {
    id: 6,
    prompt: "Dạng bài viết nào thường ở lại với bạn lâu hơn sau khi đọc?",
    options: SOFT_OPTIONS,
  },
  {
    id: 7,
    prompt: "Ngay lúc này, bạn muốn bắt đầu bằng điều gì trước?",
    options: SOFT_OPTIONS,
  },
];
