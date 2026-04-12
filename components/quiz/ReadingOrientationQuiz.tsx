"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { QuizIntroGentle } from "@/components/quiz/QuizIntroGentle";
import { QuizQuestionGentle } from "@/components/quiz/QuizQuestionGentle";
import { QuizResultGentle } from "@/components/quiz/QuizResultGentle";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { quizBranchProfiles, type QuizBranchKey } from "@/data/quiz";
import { QUIZ_COPY, quizQuestions } from "@/data/quizContent";
import { combineSuggestedArticles, resolveQuizResult, type QuizAnswers } from "@/lib/quizLogic";

type QuizStage = "intro" | "question" | "result";

const TOTAL_QUESTIONS = quizQuestions.length;
const AUTO_ADVANCE_DELAY_MS = 220;

function makeEmptyAnswers(): QuizAnswers {
  return Array.from({ length: TOTAL_QUESTIONS }, () => null);
}

export function ReadingOrientationQuiz() {
  const [stage, setStage] = useState<QuizStage>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>(makeEmptyAnswers());
  const [isAutoAdvancing, setIsAutoAdvancing] = useState(false);
  const autoAdvanceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const result = useMemo(() => resolveQuizResult(answers), [answers]);

  const primaryProfile = quizBranchProfiles[result.primaryBranch];
  const secondaryProfile = quizBranchProfiles[result.secondaryBranch];
  const suggestedArticles = useMemo(
    () => combineSuggestedArticles(primaryProfile, secondaryProfile),
    [primaryProfile, secondaryProfile]
  );

  const clearAutoAdvanceTimer = () => {
    if (autoAdvanceRef.current) {
      clearTimeout(autoAdvanceRef.current);
      autoAdvanceRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      clearAutoAdvanceTimer();
    };
  }, []);

  const handleStart = () => {
    clearAutoAdvanceTimer();
    setAnswers(makeEmptyAnswers());
    setCurrentIndex(0);
    setIsAutoAdvancing(false);
    setStage("question");
  };

  const handleRestart = () => {
    clearAutoAdvanceTimer();
    setAnswers(makeEmptyAnswers());
    setCurrentIndex(0);
    setIsAutoAdvancing(false);
    setStage("intro");
  };

  const handleSelect = (choice: QuizBranchKey) => {
    if (isAutoAdvancing) {
      return;
    }

    clearAutoAdvanceTimer();
    setIsAutoAdvancing(true);

    const indexAtSelection = currentIndex;

    setAnswers((previous) => {
      const next = [...previous];
      next[indexAtSelection] = choice;
      return next;
    });

    const advanceToNext = () => {
      if (indexAtSelection >= TOTAL_QUESTIONS - 1) {
        setIsAutoAdvancing(false);
        setStage("result");
        return;
      }
      setCurrentIndex(indexAtSelection + 1);
      setIsAutoAdvancing(false);
    };

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      advanceToNext();
      return;
    }

    autoAdvanceRef.current = setTimeout(advanceToNext, AUTO_ADVANCE_DELAY_MS);
  };

  const handleBack = () => {
    clearAutoAdvanceTimer();

    if (currentIndex === 0) {
      setIsAutoAdvancing(false);
      return;
    }

    setIsAutoAdvancing(false);
    setCurrentIndex((previous) => previous - 1);
  };

  return (
    <section className="py-10 lg:py-14">
      <Container>
        <div className="mx-auto max-w-[980px]">
          <SectionTitle title={QUIZ_COPY.sectionTitle} />
          <p className="mt-3 max-w-[64ch] text-base text-[var(--color-text-muted)] lg:text-lg">
            {QUIZ_COPY.sectionSubtitle}
          </p>

          <div
            key={stage === "question" ? `question-${currentIndex}` : stage}
            className="mt-7 motion-safe:animate-[quiz-step-in_.34s_ease]"
          >
            {stage === "intro" ? (
              <QuizIntroGentle
                onStart={handleStart}
                note={QUIZ_COPY.introNote}
                whisper={QUIZ_COPY.introWhisper}
                progressHint={QUIZ_COPY.progressHint}
                startLabel={QUIZ_COPY.startButton}
              />
            ) : null}

            {stage === "question" ? (
              <QuizQuestionGentle
                question={quizQuestions[currentIndex]}
                questionIndex={currentIndex}
                totalQuestions={TOTAL_QUESTIONS}
                selectedOption={answers[currentIndex]}
                leadIn={QUIZ_COPY.leadIns[currentIndex] ?? QUIZ_COPY.leadIns[QUIZ_COPY.leadIns.length - 1]}
                hint={QUIZ_COPY.questionHint}
                noRightWrongText={QUIZ_COPY.noRightWrong}
                isAutoAdvancing={isAutoAdvancing}
                onChoose={handleSelect}
                onBack={handleBack}
                backLabel={QUIZ_COPY.backButton}
              />
            ) : null}

            {stage === "result" ? (
              <QuizResultGentle
                primaryProfile={primaryProfile}
                secondaryProfile={secondaryProfile}
                articles={suggestedArticles}
                onRestart={handleRestart}
              />
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
