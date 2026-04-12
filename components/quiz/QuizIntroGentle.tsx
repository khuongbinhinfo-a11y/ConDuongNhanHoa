type QuizIntroGentleProps = {
  onStart: () => void;
  note: string;
  whisper: string;
  progressHint: string;
  startLabel: string;
};

export function QuizIntroGentle({ onStart, note, whisper, progressHint, startLabel }: QuizIntroGentleProps) {
  return (
    <section className="rounded-[28px] bg-[rgba(251,247,241,0.48)] px-4 py-5 lg:px-7 lg:py-7">
      <div className="max-w-[680px] space-y-3 text-[var(--color-text-muted)]">
        <p className="text-base text-[var(--color-text-strong)]">{note}</p>
        <p className="quiz-soft-prompt text-sm">{whisper}</p>
      </div>

      <div className="mt-6 inline-flex rounded-full bg-[rgba(217,228,218,0.42)] px-4 py-2">
        <p className="text-sm text-[var(--color-text-muted)]">{progressHint}</p>
      </div>

      <button
        type="button"
        onClick={onStart}
        className="calm-action calm-action--primary mt-6 inline-flex items-center justify-center rounded-full bg-[var(--color-navy)] px-5 py-2.5 text-sm font-semibold text-[#F6F1E8] shadow-[0_12px_26px_rgba(36,76,99,0.20)] transition-all duration-200 hover:bg-[#1f4256] hover:shadow-[0_16px_30px_rgba(36,76,99,0.28)]"
      >
        {startLabel}
      </button>
    </section>
  );
}
