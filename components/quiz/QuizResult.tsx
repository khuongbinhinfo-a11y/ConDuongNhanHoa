import Link from "next/link";
import type { QuizArticle, QuizBranchProfile } from "@/data/quiz";

type QuizResultProps = {
  primaryProfile: QuizBranchProfile;
  secondaryProfile: QuizBranchProfile;
  articles: QuizArticle[];
  onRestart: () => void;
};

export function QuizResult({
  primaryProfile,
  secondaryProfile,
  articles,
  onRestart,
}: QuizResultProps) {
  return (
    <section className="rounded-[24px] border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[0_16px_34px_rgba(36,76,99,0.08)] lg:p-8">
      <h3 className="text-[clamp(1.5rem,2.5vw,2.1rem)] font-semibold leading-[1.25] text-[var(--color-text-strong)]">
        {primaryProfile.resultTitle}
      </h3>

      <div className="mt-4 space-y-2 text-[var(--color-text-muted)]">
        {primaryProfile.leadLines.map((line) => (
          <p key={line} className="text-base">
            {line}
          </p>
        ))}
      </div>

      <div className="mt-6 grid gap-3 lg:grid-cols-2">
        <div className="rounded-[18px] border border-[var(--color-border)] bg-[rgba(220,232,221,0.46)] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-teal)]">
            Hướng nên đọc trước
          </p>
          <p className="mt-1 text-lg font-semibold text-[var(--color-text-strong)]">{primaryProfile.label}</p>
        </div>
        <div className="rounded-[18px] border border-[var(--color-border)] bg-[rgba(251,248,242,0.92)] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-teal)]">
            Hướng nên đọc tiếp
          </p>
          <p className="mt-1 text-lg font-semibold text-[var(--color-text-strong)]">{secondaryProfile.label}</p>
        </div>
      </div>

      <div id="goi-y-bai-viet" className="mt-7 space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-teal)]">3 bài gợi ý</p>
        <ul className="grid gap-3">
          {articles.map((article) => (
            <li
              key={article.href}
              className="rounded-[16px] border border-[var(--color-border)] bg-[rgba(251,248,242,0.92)] p-4"
            >
              <Link
                href={article.href}
                className="text-base font-semibold text-[var(--color-text-strong)] transition-colors hover:text-[var(--color-navy)]"
              >
                {article.title}
              </Link>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">{article.summary}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        <Link
          href={primaryProfile.sectionHref}
          className="inline-flex items-center justify-center rounded-full bg-[var(--color-navy)] px-5 py-2.5 text-sm font-semibold text-[#F6F1E8] shadow-[0_12px_26px_rgba(36,76,99,0.20)] transition-all duration-200 hover:bg-[#1f4256] hover:shadow-[0_16px_30px_rgba(36,76,99,0.28)]"
        >
          Đọc phần phù hợp nhất
        </Link>
        <a
          href="#goi-y-bai-viet"
          className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[rgba(251,248,242,0.92)] px-5 py-2.5 text-sm font-semibold text-[var(--color-navy)] transition-all duration-200 hover:bg-[rgba(220,232,221,0.55)]"
        >
          Xem 3 bài gợi ý
        </a>
        <button
          type="button"
          onClick={onRestart}
          className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-transparent px-5 py-2.5 text-sm font-semibold text-[var(--color-navy)] transition-all duration-200 hover:bg-[rgba(220,232,221,0.4)]"
        >
          Làm lại để chọn hướng khác
        </button>
      </div>
    </section>
  );
}
