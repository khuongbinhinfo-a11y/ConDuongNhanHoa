"use client";

import { useMemo, useState } from "react";
import { QuizIntro } from "@/components/quiz/QuizIntro";
import { QuizQuestion } from "@/components/quiz/QuizQuestion";
import { QuizResult } from "@/components/quiz/QuizResult";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  QUIZ_SECTION,
  quizBranchProfiles,
  quizQuestions,
  type QuizBranchKey,
} from "@/data/quiz";
import { combineSuggestedArticles, resolveQuizResult, type QuizAnswers } from "@/lib/quizLogic";

type QuizStage = "intro" | "question" | "result";

const TOTAL_QUESTIONS = quizQuestions.length;

function makeEmptyAnswers(): QuizAnswers {
  return Array.from({ length: TOTAL_QUESTIONS }, () => null);
}

export function ReadingOrientationQuiz() {
  const [stage, setStage] = useState<QuizStage>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>(makeEmptyAnswers());

  const result = useMemo(() => resolveQuizResult(answers), [answers]);

  const primaryProfile = quizBranchProfiles[result.primaryBranch];
  const secondaryProfile = quizBranchProfiles[result.secondaryBranch];
  const suggestedArticles = useMemo(
    () => combineSuggestedArticles(primaryProfile, secondaryProfile),
    [primaryProfile, secondaryProfile]
  );

  const handleStart = () => {
    setAnswers(makeEmptyAnswers());
    setCurrentIndex(0);
    setStage("question");
  };

  const handleRestart = () => {
    setAnswers(makeEmptyAnswers());
    setCurrentIndex(0);
    setStage("intro");
  };

  const handleSelect = (choice: QuizBranchKey) => {
    setAnswers((previous) => {
      const next = [...previous];
      next[currentIndex] = choice;
      return next;
    });
  };

  const handleNext = () => {
    const hasChoice = Boolean(answers[currentIndex]);
    if (!hasChoice) {
      return;
    }

    if (currentIndex === TOTAL_QUESTIONS - 1) {
      setStage("result");
      return;
    }

    setCurrentIndex((previous) => previous + 1);
  };

  const handleBack = () => {
    if (currentIndex === 0) {
      return;
    }
    setCurrentIndex((previous) => previous - 1);
  };

  return (
    <section className="py-10 lg:py-14">
      <Container>
        <div className="mx-auto max-w-[980px]">
          <SectionTitle title={QUIZ_SECTION.title} />
          <p className="mt-3 max-w-[64ch] text-base text-[var(--color-text-muted)] lg:text-lg">
            {QUIZ_SECTION.subtitle}
          </p>

          <div
            key={stage === "question" ? `question-${currentIndex}` : stage}
            className="mt-7 motion-safe:animate-[quiz-step-in_.34s_ease]"
          >
            {stage === "intro" ? (
              <QuizIntro onStart={handleStart} totalQuestions={TOTAL_QUESTIONS} />
            ) : null}

            {stage === "question" ? (
              <QuizQuestion
                question={quizQuestions[currentIndex]}
                questionIndex={currentIndex}
                totalQuestions={TOTAL_QUESTIONS}
                selectedOption={answers[currentIndex]}
                onChoose={handleSelect}
                onBack={handleBack}
                onNext={handleNext}
              />
            ) : null}

            {stage === "result" ? (
              <QuizResult
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
