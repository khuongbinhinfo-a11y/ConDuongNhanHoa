type QuizIntroProps = {
  onStart: () => void;
  totalQuestions: number;
  note: string;
  startLabel: string;
};

export function QuizIntro({ onStart, totalQuestions, note, startLabel }: QuizIntroProps) {
  void note;
  void startLabel;

  return (
    <section className="rounded-[24px] border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[0_16px_34px_rgba(36,76,99,0.08)] lg:p-8">
      <div className="space-y-3 text-[var(--color-text-muted)]">
        <p className="text-base">
          Quiz này giúp bạn chọn lối đọc gần với nhu cầu hiện tại, không phải để dán nhãn bạn là ai.
        </p>
        <p className="text-base">
          Mỗi câu đều ngắn và thực tế. Bạn chỉ cần chọn phương án thấy gần với mình nhất ở thời điểm này.
        </p>
        <p className="quiz-soft-prompt text-sm">
          Có thể bắt đầu từ một điều gần với mình, vừa đủ và chân thật.
        </p>
      </div>

      <div className="mt-6 rounded-[18px] border border-[rgba(111,167,166,0.36)] bg-[rgba(220,232,221,0.42)] p-4">
        <p className="text-sm text-[var(--color-text-strong)]">
          {totalQuestions} câu hỏi • mỗi câu 1 lựa chọn • kết quả chỉ mang tính gợi mở
        </p>
      </div>

      <button
        type="button"
        onClick={onStart}
        className="calm-action calm-action--primary mt-6 inline-flex items-center justify-center rounded-full bg-[var(--color-navy)] px-5 py-2.5 text-sm font-semibold text-[#F6F1E8] shadow-[0_12px_26px_rgba(36,76,99,0.20)] transition-all duration-200 hover:bg-[#1f4256] hover:shadow-[0_16px_30px_rgba(36,76,99,0.28)]"
      >
        Bắt đầu {totalQuestions} câu hỏi
      </button>
    </section>
  );
}
