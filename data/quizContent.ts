import type { QuizQuestion } from "@/data/quiz";

export const QUIZ_COPY = {
  sectionTitle: "Có một câu hỏi nhỏ dành cho bạn",
  sectionSubtitle: "Mình bắt đầu từ một vài điều nhỏ nhé.",
  introNote: "Chỉ cần đi từng chút thôi. Chọn điều gần với mình nhất lúc này.",
  introWhisper: "Không cần trả lời thật nhanh.",
  startButton: "Mình bắt đầu",
  progressHint: "Mỗi lựa chọn sẽ mở ra câu hỏi tiếp theo.",
  questionHint: "Chạm một lựa chọn để đi tiếp.",
  noRightWrong: "Không có đúng hay sai ở đây.",
  leadIns: [
    "Có một điều nhỏ muốn hỏi bạn.",
    "Nếu được chọn lúc này...",
    "Thử nghe mình một chút nhé.",
    "Cho mình hỏi thêm một điều nữa.",
    "Mình đi thêm một nhịp nhỏ nhé.",
    "Gần xong rồi, thêm một câu thôi.",
    "Và điều cuối cùng lúc này là gì?",
  ],
  backButton: "Quay lại",
} as const;

const SOFT_OPTIONS: QuizQuestion["options"] = [
  { key: "A", label: "Một cách nhìn để hiểu rõ chuyện gì đang diễn ra." },
  { key: "B", label: "Một lời giải thích rõ ràng để bớt rối hơn." },
  { key: "C", label: "Một bước nhỏ, đủ nhẹ để bắt đầu ngay." },
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
    prompt: "Khi vừa mở một bài viết mới, điều nào bạn mong có trước tiên?",
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
    prompt: "Khi muốn thay đổi nhưng chùn lại, điều gì thường giữ bạn lại lâu nhất?",
    options: SOFT_OPTIONS,
  },
  {
    id: 6,
    prompt: "Dạng nội dung nào thường ở lại với bạn lâu hơn sau khi đọc xong?",
    options: SOFT_OPTIONS,
  },
  {
    id: 7,
    prompt: "Ngay lúc này, điều nào có thể là điểm bắt đầu hợp hơn cho bạn?",
    options: SOFT_OPTIONS,
  },
];
