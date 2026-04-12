import type { QuizBranchKey, QuizQuestion as QuizQuestionType } from "@/data/quiz";
import { QuizProgressGentle } from "@/components/quiz/QuizProgressGentle";

type QuizQuestionGentleProps = {
  question: QuizQuestionType;
  questionIndex: number;
  totalQuestions: number;
  selectedOption: QuizBranchKey | null;
  leadIn: string;
  hint: string;
  noRightWrongText: string;
  isAutoAdvancing: boolean;
  onChoose: (choice: QuizBranchKey) => void;
  onBack: () => void;
  backLabel: string;
};

export function QuizQuestionGentle({
  question,
  questionIndex,
  totalQuestions,
  selectedOption,
  leadIn,
  hint,
  noRightWrongText,
  isAutoAdvancing,
  onChoose,
  onBack,
  backLabel,
}: QuizQuestionGentleProps) {
  return (
    <section className="space-y-6 rounded-[24px] border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[0_16px_34px_rgba(36,76,99,0.08)] lg:p-8">
      <QuizProgressGentle currentStep={questionIndex + 1} totalSteps={totalQuestions} hint={hint} />

      <div className="space-y-4">
        <p className="text-xs font-medium tracking-[0.02em] text-[var(--color-text-muted)]">{leadIn}</p>
        <h3 className="text-[clamp(1.35rem,2.3vw,1.9rem)] font-semibold leading-[1.32] text-[var(--color-text-strong)]">
          {question.prompt}
        </h3>
        <p className="text-sm text-[var(--color-text-muted)]">{noRightWrongText}</p>

        <div className="grid gap-3">
          {question.options.map((option) => {
            const isActive = selectedOption === option.key;

            return (
              <button
                key={option.key}
                type="button"
                onClick={() => onChoose(option.key)}
                disabled={isAutoAdvancing}
                className={`group flex w-full items-start gap-3 rounded-[22px] border px-4 py-3.5 text-left transition-all duration-200 ${
                  isActive
                    ? "border-[rgba(109,159,155,0.48)] bg-[rgba(217,228,218,0.5)] shadow-[0_10px_18px_rgba(31,65,88,0.08)]"
                    : "border-[rgba(31,65,88,0.11)] bg-[rgba(251,247,241,0.94)] hover:-translate-y-0.5 hover:border-[rgba(31,65,88,0.18)] hover:shadow-[0_8px_16px_rgba(31,65,88,0.06)]"
                }`}
              >
                <span
                  className={`mt-1 inline-flex h-2 w-2 rounded-full ${
                    isActive
                      ? "bg-[var(--color-teal)] shadow-[0_0_0_4px_rgba(109,159,155,0.18)]"
                      : "bg-[rgba(31,65,88,0.24)]"
                  }`}
                  aria-hidden="true"
                />
                <span className="pt-[1px] text-[0.98rem] font-medium leading-[1.56] text-[var(--color-text-strong)]">
                  {option.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onBack}
          disabled={questionIndex === 0 || isAutoAdvancing}
          className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[rgba(251,247,241,0.9)] px-5 py-2.5 text-sm font-semibold text-[var(--color-navy)] transition-all duration-200 hover:bg-[rgba(217,228,218,0.48)] disabled:cursor-not-allowed disabled:opacity-45"
        >
          {backLabel}
        </button>
      </div>
    </section>
  );
}
