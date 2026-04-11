import { SiteHeader } from "@/components/layout/SiteHeader";
import { ReadingOrientationQuiz } from "@/components/quiz/ReadingOrientationQuiz";
import { homepageData } from "@/data/homepageData";

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-strong)]">
      <SiteHeader brandName={homepageData.brandName} links={homepageData.headerLinks} cta={homepageData.headerCta} />
      <main>
        <ReadingOrientationQuiz />
      </main>
    </div>
  );
}
