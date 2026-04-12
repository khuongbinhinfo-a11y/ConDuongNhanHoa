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
  const replyOffsets = ["", "quiz-reply--soft-right", "quiz-reply--near", "quiz-reply--wide-right", "quiz-reply--near"] as const;

  return (
    <section className="quiz-scene">
      <div className="quiz-scene__content space-y-6">
        <QuizProgressGentle currentStep={questionIndex + 1} totalSteps={totalQuestions} hint={hint} />

        <div className="quiz-chat-stream">
          <div className="quiz-message-row">
            <span className="quiz-message-dot" aria-hidden="true" />
            <p className="quiz-lead-bubble">{leadIn}</p>
          </div>

          <div className="quiz-message-row quiz-message-row--question">
            <h3 key={question.id} className="quiz-question-text">
              {question.prompt}
            </h3>
          </div>

          <p className="quiz-gentle-note">{noRightWrongText}</p>

          <div className="quiz-reply-list">
            {question.options.map((option, index) => {
              const isActive = selectedOption === option.key;
              const offsetClass = replyOffsets[index] ?? "";

              return (
                <button
                  key={option.key}
                  type="button"
                  onClick={() => onChoose(option.key)}
                  disabled={isAutoAdvancing}
                  className={`quiz-reply ${offsetClass} ${isActive ? "quiz-reply--active" : ""}`}
                >
                  <span className="quiz-reply__dot" aria-hidden="true" />
                  <span>{option.label}</span>
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
      </div>
    </section>
  );
}
