type QuizProgressGentleProps = {
  currentStep: number;
  totalSteps: number;
  label: string;
  hint: string;
};

export function QuizProgressGentle({ currentStep, totalSteps, label, hint }: QuizProgressGentleProps) {
  const progress = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between text-sm text-[var(--color-text-muted)]">
        <p>
          {label} {currentStep}/{totalSteps}
        </p>
        <p>{progress}%</p>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-[rgba(31,65,88,0.11)]">
        <div
          className="h-full rounded-full bg-[var(--color-teal)] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-xs text-[var(--color-text-muted)]">{hint}</p>
    </div>
  );
}
