type QuizProgressGentleProps = {
  currentStep: number;
  totalSteps: number;
  hint: string;
};

export function QuizProgressGentle({ currentStep, totalSteps, hint }: QuizProgressGentleProps) {
  const progress = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="space-y-2">
      <div className="sr-only" aria-live="polite">
        Bước {currentStep} trên {totalSteps}
      </div>
      <div className="h-px overflow-hidden rounded-full bg-[rgba(31,65,88,0.08)]">
        <div
          className="h-full rounded-full bg-[rgba(109,159,155,0.58)] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-xs text-[var(--color-text-muted)]">{hint}</p>
    </div>
  );
}
