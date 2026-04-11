type QuizProgressProps = {
  currentStep: number;
  totalSteps: number;
};

export function QuizProgress({ currentStep, totalSteps }: QuizProgressProps) {
  const progress = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm text-[var(--color-text-muted)]">
        <p>
          Bước {currentStep}/{totalSteps}
        </p>
        <p>{progress}%</p>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-[rgba(36,76,99,0.12)]">
        <div
          className="h-full rounded-full bg-[var(--color-navy)] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
