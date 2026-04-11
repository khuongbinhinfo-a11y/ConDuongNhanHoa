import {
  BRANCH_ORDER,
  type QuizArticle,
  type QuizBranchKey,
  type QuizBranchProfile,
} from "@/data/quiz";

export type QuizAnswers = Array<QuizBranchKey | null>;

export type QuizResult = {
  primaryBranch: QuizBranchKey;
  secondaryBranch: QuizBranchKey;
  scores: Record<QuizBranchKey, number>;
};

type TailPriority = {
  countInTail: Record<QuizBranchKey, number>;
  lastSeenTailIndex: Record<QuizBranchKey, number>;
};

function makeEmptyScoreMap(): Record<QuizBranchKey, number> {
  return { A: 0, B: 0, C: 0, D: 0, E: 0 };
}

function buildTailPriority(answers: QuizAnswers): TailPriority {
  const countInTail = makeEmptyScoreMap();
  const lastSeenTailIndex: Record<QuizBranchKey, number> = { A: -1, B: -1, C: -1, D: -1, E: -1 };

  answers.slice(4, 7).forEach((answer, tailIndex) => {
    if (!answer) {
      return;
    }
    countInTail[answer] += 1;
    lastSeenTailIndex[answer] = tailIndex;
  });

  return { countInTail, lastSeenTailIndex };
}

export function calculateBranchScores(answers: QuizAnswers): Record<QuizBranchKey, number> {
  const scores = makeEmptyScoreMap();

  answers.forEach((answer) => {
    if (!answer) {
      return;
    }
    scores[answer] += 1;
  });

  return scores;
}

function compareBranchPriority(
  left: QuizBranchKey,
  right: QuizBranchKey,
  scores: Record<QuizBranchKey, number>,
  tailPriority: TailPriority
): number {
  if (scores[left] !== scores[right]) {
    return scores[right] - scores[left];
  }

  if (tailPriority.countInTail[left] !== tailPriority.countInTail[right]) {
    return tailPriority.countInTail[right] - tailPriority.countInTail[left];
  }

  if (tailPriority.lastSeenTailIndex[left] !== tailPriority.lastSeenTailIndex[right]) {
    return tailPriority.lastSeenTailIndex[right] - tailPriority.lastSeenTailIndex[left];
  }

  return BRANCH_ORDER.indexOf(left) - BRANCH_ORDER.indexOf(right);
}

export function resolveQuizResult(answers: QuizAnswers): QuizResult {
  const scores = calculateBranchScores(answers);
  const tailPriority = buildTailPriority(answers);

  const ranked = [...BRANCH_ORDER].sort((left, right) =>
    compareBranchPriority(left, right, scores, tailPriority)
  );

  const primaryBranch = ranked[0];
  const secondaryBranch = ranked.find((branch) => branch !== primaryBranch) ?? ranked[1];

  return { primaryBranch, secondaryBranch, scores };
}

export function combineSuggestedArticles(
  primaryProfile: QuizBranchProfile,
  secondaryProfile: QuizBranchProfile
): QuizArticle[] {
  const combined: QuizArticle[] = [];
  const seen = new Set<string>();

  const addArticles = (articles: QuizArticle[]) => {
    articles.forEach((article) => {
      const key = `${article.href}-${article.title}`;
      if (seen.has(key) || combined.length >= 3) {
        return;
      }
      seen.add(key);
      combined.push(article);
    });
  };

  addArticles(primaryProfile.suggestedArticles.slice(0, 2));
  addArticles(secondaryProfile.suggestedArticles);
  addArticles(primaryProfile.suggestedArticles);

  return combined.slice(0, 3);
}
