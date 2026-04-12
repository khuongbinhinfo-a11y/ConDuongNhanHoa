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
    <section className="space-y-6 rounded-[28px] bg-[rgba(251,247,241,0.5)] px-4 py-5 lg:px-7 lg:py-7">
      <QuizProgressGentle currentStep={questionIndex + 1} totalSteps={totalQuestions} hint={hint} />

      <div className="max-w-[760px] space-y-3">
        <p className="inline-flex rounded-full bg-[rgba(217,228,218,0.36)] px-3 py-1 text-xs font-medium text-[var(--color-text-muted)]">
          {leadIn}
        </p>
        <h3 className="text-[clamp(1.28rem,2.1vw,1.75rem)] font-medium leading-[1.36] text-[var(--color-text-strong)]">
          {question.prompt}
        </h3>
        <p className="text-sm text-[var(--color-text-muted)]">{noRightWrongText}</p>

        <div className="flex flex-col items-start gap-3 pt-2">
          {question.options.map((option) => {
            const isActive = selectedOption === option.key;

            return (
              <button
                key={option.key}
                type="button"
                onClick={() => onChoose(option.key)}
                disabled={isAutoAdvancing}
                className={`group inline-flex max-w-full items-start gap-3 rounded-[22px] border px-4 py-3 text-left transition-all duration-200 sm:max-w-[88%] ${
                  isActive
                    ? "border-[rgba(109,159,155,0.42)] bg-[rgba(217,228,218,0.52)] shadow-[0_8px_14px_rgba(31,65,88,0.06)]"
                    : "border-[rgba(31,65,88,0.09)] bg-[rgba(251,247,241,0.82)] hover:-translate-y-0.5 hover:border-[rgba(109,159,155,0.28)] hover:bg-[rgba(251,247,241,0.98)] hover:shadow-[0_8px_14px_rgba(31,65,88,0.05)]"
                }`}
              >
                <span
                  className={`mt-2 inline-flex h-1.5 w-1.5 shrink-0 rounded-full ${
                    isActive
                      ? "bg-[var(--color-teal)] shadow-[0_0_0_4px_rgba(109,159,155,0.14)]"
                      : "bg-[rgba(31,65,88,0.2)]"
                  }`}
                  aria-hidden="true"
                />
                <span className="pt-[1px] text-[0.95rem] font-normal leading-[1.58] text-[var(--color-text-strong)]">
                  {option.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="pt-1">
        <button
          type="button"
          onClick={onBack}
          disabled={questionIndex === 0 || isAutoAdvancing}
          className="inline-flex items-center justify-center rounded-full px-1 py-1 text-xs font-medium text-[rgba(31,65,88,0.62)] transition-colors duration-200 hover:text-[var(--color-navy)] disabled:cursor-not-allowed disabled:opacity-35"
        >
          {backLabel}
        </button>
      </div>
    </section>
  );
}
