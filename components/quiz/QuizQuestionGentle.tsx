import type { QuizBranchKey, QuizQuestion as QuizQuestionType } from "@/data/quiz";
import { QuizProgressGentle } from "@/components/quiz/QuizProgressGentle";

type QuizQuestionGentleProps = {
  question: QuizQuestionType;
  questionIndex: number;
  totalQuestions: number;
  selectedOption: QuizBranchKey | null;
  onChoose: (choice: QuizBranchKey) => void;
  onNext: () => void;
  onBack: () => void;
  progressLabel: string;
  hint: string;
  noRightWrongText: string;
  backLabel: string;
  nextLabel: string;
  finishLabel: string;
};

export function QuizQuestionGentle({
  question,
  questionIndex,
  totalQuestions,
  selectedOption,
  onChoose,
  onNext,
  onBack,
  progressLabel,
  hint,
  noRightWrongText,
  backLabel,
  nextLabel,
  finishLabel,
}: QuizQuestionGentleProps) {
  const isLastStep = questionIndex === totalQuestions - 1;

  return (
    <section className="space-y-6 rounded-[24px] border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[0_16px_34px_rgba(36,76,99,0.08)] lg:p-8">
      <QuizProgressGentle currentStep={questionIndex + 1} totalSteps={totalQuestions} label={progressLabel} hint={hint} />

      <div className="space-y-4">
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
                className={`group flex w-full items-start gap-3 rounded-[20px] border px-4 py-3.5 text-left transition-all duration-200 ${
                  isActive
                    ? "border-[rgba(109,159,155,0.44)] bg-[rgba(217,228,218,0.44)] shadow-[0_8px_16px_rgba(31,65,88,0.07)]"
                    : "border-[rgba(31,65,88,0.12)] bg-[rgba(251,247,241,0.94)] hover:-translate-y-0.5 hover:border-[rgba(31,65,88,0.2)] hover:shadow-[0_10px_18px_rgba(31,65,88,0.06)]"
                }`}
              >
                <span
                  className={`mt-0.5 inline-flex min-w-6 items-center justify-center rounded-full border px-1.5 py-0.5 text-[0.62rem] font-medium uppercase tracking-[0.08em] ${
                    isActive
                      ? "border-[rgba(31,65,88,0.24)] bg-[rgba(31,65,88,0.08)] text-[var(--color-navy)]"
                      : "border-[rgba(31,65,88,0.14)] bg-[rgba(251,247,241,0.9)] text-[var(--color-text-muted)]"
                  }`}
                  aria-hidden="true"
                >
                  {option.key}
                </span>
                <span className="pt-0.5 text-[0.99rem] leading-[1.58] text-[var(--color-text-strong)]">{option.label}</span>
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
          className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[rgba(251,247,241,0.9)] px-5 py-2.5 text-sm font-semibold text-[var(--color-navy)] transition-all duration-200 hover:bg-[rgba(217,228,218,0.48)] disabled:cursor-not-allowed disabled:opacity-45"
        >
          {backLabel}
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!selectedOption}
          className="calm-action calm-action--primary inline-flex items-center justify-center rounded-full bg-[var(--color-navy)] px-5 py-2.5 text-sm font-semibold text-[#F6F1E8] shadow-[0_12px_24px_rgba(31,65,88,0.2)] transition-all duration-200 hover:bg-[#1c3c52] hover:shadow-[0_15px_28px_rgba(31,65,88,0.25)] disabled:cursor-not-allowed disabled:opacity-45"
        >
          {isLastStep ? finishLabel : nextLabel}
        </button>
      </div>
    </section>
  );
}
