export const hasUserAnswer = (value) => {
  if (value === undefined || value === null) return false;
  if (typeof value === "string") return value.trim() !== "";
  return true;
};

export const hasScorableAnswer = (question) =>
  question.correct !== null && question.correct !== undefined;

export const normalizeTextAnswer = (value) =>
  String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/[’]/g, "'")
    .replace(/\s+/g, " ");

export const isQuestionCorrect = (question, userAnswer) => {
  if (!hasScorableAnswer(question) || !hasUserAnswer(userAnswer)) return false;

  if (Array.isArray(question.correct)) {
    const normalized = normalizeTextAnswer(userAnswer);
    return question.correct.some(
      (candidate) => normalizeTextAnswer(candidate) === normalized
    );
  }

  if (typeof question.correct === "string") {
    return normalizeTextAnswer(question.correct) === normalizeTextAnswer(userAnswer);
  }

  return userAnswer === question.correct;
};

export const getDisplayCorrectAnswer = (question) => {
  if (question.displayCorrect !== undefined) return question.displayCorrect;
  if (Array.isArray(question.correct)) return question.correct[0] ?? "";
  return question.correct;
};
