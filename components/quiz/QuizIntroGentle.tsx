type QuizIntroGentleProps = {
  onStart: () => void;
  note: string;
  whisper: string;
  progressHint: string;
  startLabel: string;
};

export function QuizIntroGentle({ onStart, note, whisper, progressHint, startLabel }: QuizIntroGentleProps) {
  return (
    <section className="rounded-[24px] border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[0_16px_34px_rgba(36,76,99,0.08)] lg:p-8">
      <div className="space-y-3 text-[var(--color-text-muted)]">
        <p className="text-base">{note}</p>
        <p className="quiz-soft-prompt text-sm">{whisper}</p>
      </div>

      <div className="mt-6 rounded-[18px] border border-[rgba(109,159,155,0.34)] bg-[rgba(217,228,218,0.42)] p-4">
        <p className="text-sm text-[var(--color-text-strong)]">{progressHint}</p>
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
