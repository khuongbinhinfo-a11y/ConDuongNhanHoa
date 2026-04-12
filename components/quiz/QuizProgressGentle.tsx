type QuizProgressGentleProps = {
  currentStep: number;
  totalSteps: number;
  hint: string;
};

export function QuizProgressGentle({ currentStep, totalSteps, hint }: QuizProgressGentleProps) {
  const progress = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="space-y-2.5">
      <div className="sr-only" aria-live="polite">
        Bước {currentStep} trên {totalSteps}
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-[rgba(31,65,88,0.11)]">
        <div
          className="h-full rounded-full bg-[var(--color-teal)] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex items-center gap-1.5">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <span
            key={`quiz-step-dot-${index}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index < currentStep ? "w-3.5 bg-[var(--color-teal)]" : "w-1.5 bg-[rgba(31,65,88,0.18)]"
            }`}
            aria-hidden="true"
          />
        ))}
      </div>
      <p className="text-xs text-[var(--color-text-muted)]">{hint}</p>
    </div>
  );
}
