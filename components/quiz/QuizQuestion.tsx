import type { QuizBranchKey, QuizQuestion as QuizQuestionType } from "@/data/quiz";
import { QuizProgress } from "@/components/quiz/QuizProgress";

type QuizQuestionProps = {
  question: QuizQuestionType;
  questionIndex: number;
  totalQuestions: number;
  selectedOption: QuizBranchKey | null;
  onChoose: (choice: QuizBranchKey) => void;
  onNext: () => void;
  onBack: () => void;
};

export function QuizQuestion({
  question,
  questionIndex,
  totalQuestions,
  selectedOption,
  onChoose,
  onNext,
  onBack,
}: QuizQuestionProps) {
  const isLastStep = questionIndex === totalQuestions - 1;

  return (
    <section className="space-y-6 rounded-[24px] border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[0_16px_34px_rgba(36,76,99,0.08)] lg:p-8">
      <QuizProgress currentStep={questionIndex + 1} totalSteps={totalQuestions} />

      <div className="space-y-4">
        <h3 className="text-[clamp(1.35rem,2.3vw,1.9rem)] font-semibold leading-[1.3] text-[var(--color-text-strong)]">
          {question.prompt}
        </h3>

        <div className="grid gap-3">
          {question.options.map((option) => {
            const isActive = selectedOption === option.key;

            return (
              <button
                key={option.key}
                type="button"
                onClick={() => onChoose(option.key)}
                className={`group flex w-full items-start gap-3 rounded-[18px] border px-4 py-4 text-left transition-all duration-200 ${
                  isActive
                    ? "border-[rgba(36,76,99,0.35)] bg-[rgba(220,232,221,0.56)] shadow-[0_10px_20px_rgba(36,76,99,0.08)]"
                    : "border-[var(--color-border)] bg-[rgba(251,248,242,0.95)] hover:-translate-y-0.5 hover:border-[rgba(36,76,99,0.2)] hover:shadow-[0_10px_18px_rgba(36,76,99,0.06)]"
                }`}
              >
                <span
                  className={`inline-flex h-8 min-w-8 items-center justify-center rounded-full border text-xs font-semibold ${
                    isActive
                      ? "border-[rgba(36,76,99,0.45)] bg-[var(--color-navy)] text-[#F6F1E8]"
                      : "border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-navy)]"
                  }`}
                >
                  {option.key}
                </span>
                <span className="pt-0.5 text-[0.98rem] text-[var(--color-text-strong)]">{option.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onBack}
          disabled={questionIndex === 0}
          className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[rgba(251,248,242,0.92)] px-5 py-2.5 text-sm font-semibold text-[var(--color-navy)] transition-all duration-200 hover:bg-[rgba(220,232,221,0.55)] disabled:cursor-not-allowed disabled:opacity-45"
        >
          Quay lại
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!selectedOption}
          className="inline-flex items-center justify-center rounded-full bg-[var(--color-navy)] px-5 py-2.5 text-sm font-semibold text-[#F6F1E8] shadow-[0_12px_26px_rgba(36,76,99,0.20)] transition-all duration-200 hover:bg-[#1f4256] hover:shadow-[0_16px_30px_rgba(36,76,99,0.28)] disabled:cursor-not-allowed disabled:opacity-45"
        >
          {isLastStep ? "Xem gợi ý đọc" : "Tiếp tục"}
        </button>
      </div>
    </section>
  );
}
