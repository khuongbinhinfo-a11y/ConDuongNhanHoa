"use client";

import { useEffect, useMemo, useState } from "react";

type QuizIntroGentleProps = {
  onStart: () => void;
  note: string;
  whisper: string;
  progressHint: string;
  startLabel: string;
};

const QUIZ_INTRO_MOOD_IMAGES = [
  "/images/quiz-nature-photo.jpg",
  "/images/quiz-mood-leaf.svg",
  "/images/quiz-mood-window.svg",
  "/images/quiz-mood-water.svg",
  "/images/quiz-mood-desk.svg",
  "/images/quiz-nature-mood.svg",
] as const;

export function QuizIntroGentle({ onStart, note, whisper, progressHint, startLabel }: QuizIntroGentleProps) {
  const [activeMoodIndex, setActiveMoodIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      setReduceMotion(mediaQuery.matches);
    };

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const stepDuration = typeof window !== "undefined" && window.matchMedia("(max-width: 640px)").matches ? 7000 : 6200;
    const intervalId = window.setInterval(() => {
      setActiveMoodIndex((previous) => (previous + 1) % QUIZ_INTRO_MOOD_IMAGES.length);
    }, stepDuration);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [reduceMotion]);

  const moodFrames = useMemo(() => QUIZ_INTRO_MOOD_IMAGES, []);

  return (
    <section className="quiz-shell-surface quiz-intro-scene rounded-[30px] bg-[rgba(251,247,241,0.48)] px-4 py-5 lg:px-7 lg:py-7">
      <div className="quiz-intro-head">
        <div className="quiz-intro-copy max-w-[660px] space-y-3 text-[var(--color-text-muted)]">
          <p className="text-base text-[var(--color-text-strong)]">{note}</p>
          <p className="quiz-soft-prompt text-sm">{whisper}</p>
        </div>

        <div className="quiz-intro-controls mt-6 flex flex-wrap items-center gap-3 lg:mt-0">
          <div className="inline-flex rounded-full bg-[rgba(217,228,218,0.5)] px-4 py-2">
            <p className="text-sm text-[var(--color-text-muted)]">{progressHint}</p>
          </div>

          <button
            type="button"
            onClick={onStart}
            className="calm-action calm-action--primary inline-flex items-center justify-center rounded-[14px] bg-[var(--color-navy)] px-5 py-2.5 text-sm font-semibold text-[#F6F1E8] shadow-[0_12px_26px_rgba(36,76,99,0.20)] transition-all duration-200 hover:bg-[#1f4256] hover:shadow-[0_16px_30px_rgba(36,76,99,0.28)]"
          >
            {startLabel}
          </button>
        </div>
      </div>

      <div className="quiz-intro-media mt-5" aria-hidden="true">
        <div className="quiz-intro-media__stack">
          {moodFrames.map((source, index) => (
            <div
              key={source}
              className={`quiz-intro-media__frame ${index === activeMoodIndex ? "is-active" : ""}`}
              style={{ backgroundImage: `url("${source}")` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
