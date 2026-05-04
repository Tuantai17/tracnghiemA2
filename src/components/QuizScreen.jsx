import { useMemo, useState } from "react";
import AudioPlayer from "./AudioPlayer";
import FillInGroupCard from "./FillInGroupCard";
import InfoExtractGroupCard from "./InfoExtractGroupCard";
import LetterGapFillCard from "./LetterGapFillCard";
import MatchingGroupCard from "./MatchingGroupCard";
import MultipleChoiceGroupCard from "./MultipleChoiceGroupCard";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import ResultScreen from "./ResultScreen";
import WordBuilderGroupCard from "./WordBuilderGroupCard";
import WritingPromptCard from "./WritingPromptCard";
import { getDisplayCorrectAnswer, hasScorableAnswer } from "../utils/answerUtils";

const GROUP_TYPES = new Set([
  "matching",
  "multiple-choice-group",
  "fill-in-group",
  "word-builder",
  "letter-gap-fill",
  "info-extract",
  "writing-task",
]);

const EyeIcon = ({ off = false, className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12 18 18.75 12 18.75 2.25 12 2.25 12Z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75A3.75 3.75 0 1 0 12 8.25a3.75 3.75 0 0 0 0 7.5Z" />
    {off && <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />}
  </svg>
);

const QuizScreen = ({ test, part, onGoBack, onGoHome, previewMode = false }) => {
  const sourceParts = part === "all" ? test.parts : [part];
  const allGroups = [];

  sourceParts.forEach((sourcePart) => {
    if (GROUP_TYPES.has(sourcePart.type)) {
      allGroups.push({
        partId: sourcePart.id,
        partTitle: sourcePart.title,
        partType: sourcePart.type,
        audio: sourcePart.audio,
        description: sourcePart.description,
        questions: sourcePart.questions,
        matchingData: sourcePart.matchingData,
        fillInData: sourcePart.fillInData,
        passage: sourcePart.passage,
        example: sourcePart.example,
        letterData: sourcePart.letterData,
        infoData: sourcePart.infoData,
        writingData: sourcePart.writingData,
      });
      return;
    }

    sourcePart.questions.forEach((question) => {
      allGroups.push({
        ...question,
        partId: sourcePart.id,
        partTitle: sourcePart.title,
        audio: sourcePart.audio,
        partType: sourcePart.type,
        optionsType: sourcePart.optionsType || question.optionsType,
      });
    });
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [revealAnswers, setRevealAnswers] = useState(false);

  const allQuestionsFlat = useMemo(() => {
    const questions = [];

    allGroups.forEach((group) => {
      if (GROUP_TYPES.has(group.partType)) {
        questions.push(
          ...group.questions.map((question) => ({
            ...question,
            partId: group.partId,
            partTitle: group.partTitle,
            partType: group.partType,
            options:
              group.partType === "matching"
                ? group.matchingData.options
                : question.options,
          }))
        );
      } else {
        questions.push(group);
      }
    });

    return questions;
  }, [allGroups]);

  const previewAnswers = useMemo(() => {
    return allQuestionsFlat.reduce((result, question) => {
      if (!hasScorableAnswer(question)) return result;
      result[`${question.id}-${question.partId}`] = getDisplayCorrectAnswer(question);
      return result;
    }, {});
  }, [allQuestionsFlat]);

  const shouldShowAnswers = previewMode || revealAnswers;
  const effectiveAnswers = previewMode ? previewAnswers : answers;
  const currentGroup = allGroups[currentIndex];
  const totalPages = allGroups.length;
  const currentAudio = currentGroup?.audio;
  const isSingleQuestion = !GROUP_TYPES.has(currentGroup?.partType);

  const handleSelectAnswerSingle = (optionIndex) => {
    if (previewMode) return;

    setAnswers((previous) => ({
      ...previous,
      [`${currentGroup.id}-${currentGroup.partId}`]: optionIndex,
    }));
  };

  const handleSelectAnswerGroup = (questionId, value) => {
    if (previewMode) return;

    setAnswers((previous) => {
      const nextAnswers = { ...previous };
      const answerKey = `${questionId}-${currentGroup.partId}`;

      if (value === undefined || value === null || value === "") {
        delete nextAnswers[answerKey];
      } else {
        nextAnswers[answerKey] = value;
      }

      return nextAnswers;
    });
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setAnswers({});
    setIsFinished(false);
    setRevealAnswers(false);
  };

  if (!previewMode && isFinished) {
    const mappedAnswers = {};
    allQuestionsFlat.forEach((question) => {
      const answerKey = `${question.id}-${question.partId}`;
      if (answers[answerKey] !== undefined) {
        mappedAnswers[question.id] = answers[answerKey];
      }
    });

    return (
      <ResultScreen
        answers={mappedAnswers}
        questions={allQuestionsFlat}
        totalQuestions={allQuestionsFlat.length}
        onRestart={handleRestart}
        onGoHome={onGoHome}
        testTitle={test.title}
        partTitle={part === "all" ? "Tat ca Parts" : part.title}
      />
    );
  }

  const currentAnswerKey = isSingleQuestion ? `${currentGroup.id}-${currentGroup.partId}` : null;
  const currentAnswerSingle = currentAnswerKey ? effectiveAnswers[currentAnswerKey] : undefined;
  const isLastPage = currentIndex === totalPages - 1;
  const answeredCount = Object.keys(effectiveAnswers).length;
  const availableAnswerCount = Object.keys(previewAnswers).length;

  const renderCurrentCard = () => {
    switch (currentGroup.partType) {
      case "matching":
        return (
          <MatchingGroupCard
            group={currentGroup}
            answers={shouldShowAnswers ? previewAnswers : effectiveAnswers}
            onSelectAnswer={handleSelectAnswerGroup}
            showResult={shouldShowAnswers}
          />
        );
      case "multiple-choice-group":
        return (
          <MultipleChoiceGroupCard
            group={currentGroup}
            answers={shouldShowAnswers ? { ...effectiveAnswers, ...previewAnswers } : effectiveAnswers}
            onSelectAnswer={handleSelectAnswerGroup}
            showResult={shouldShowAnswers}
          />
        );
      case "fill-in-group":
        return (
          <FillInGroupCard
            group={currentGroup}
            answers={shouldShowAnswers ? { ...effectiveAnswers, ...previewAnswers } : effectiveAnswers}
            onSelectAnswer={handleSelectAnswerGroup}
            showResult={shouldShowAnswers}
          />
        );
      case "word-builder":
        return (
          <WordBuilderGroupCard
            group={currentGroup}
            answers={shouldShowAnswers ? previewAnswers : effectiveAnswers}
            onSelectAnswer={handleSelectAnswerGroup}
            showResult={shouldShowAnswers}
          />
        );
      case "letter-gap-fill":
        return (
          <LetterGapFillCard
            group={currentGroup}
            answers={shouldShowAnswers ? previewAnswers : effectiveAnswers}
            onSelectAnswer={handleSelectAnswerGroup}
            showResult={shouldShowAnswers}
          />
        );
      case "info-extract":
        return (
          <InfoExtractGroupCard
            group={currentGroup}
            answers={shouldShowAnswers ? previewAnswers : effectiveAnswers}
            onSelectAnswer={handleSelectAnswerGroup}
            showResult={shouldShowAnswers}
          />
        );
      case "writing-task":
        return (
          <WritingPromptCard
            group={currentGroup}
            answers={shouldShowAnswers ? previewAnswers : effectiveAnswers}
            onSelectAnswer={handleSelectAnswerGroup}
            showResult={shouldShowAnswers}
          />
        );
      default:
        return (
          <QuestionCard
            question={currentGroup}
            questionIndex={currentIndex}
            totalQuestions={totalPages}
            selectedAnswer={currentAnswerSingle}
            onSelectAnswer={handleSelectAnswerSingle}
            showResult={shouldShowAnswers}
            partType={currentGroup.partType}
            optionsType={currentGroup.optionsType}
          />
        );
    }
  };

  return (
    <div className="animate-fade-in-up">
      <div className="flex items-center justify-between mb-4 gap-3">
        <button
          onClick={onGoBack}
          className="flex items-center gap-1.5 text-text-secondary hover:text-text-primary transition-colors group"
        >
          <svg
            className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium">Quay lai</span>
        </button>

        <div className="text-right">
          <p className="text-xs text-text-muted">{test.title}</p>
          <p className="text-sm font-semibold text-primary-light">{currentGroup.partTitle}</p>
        </div>
      </div>

      {previewMode ? (
        <div className="preview-mode-banner mb-4">
          <div>
            <p className="preview-mode-banner__eyebrow">Che do xem truoc</p>
            <h2 className="preview-mode-banner__title">Dang hien dap an mau cua bai test</h2>
            <p className="preview-mode-banner__text">
              Ban co the xem dap an tung phan truoc khi lam bai. Neu muon tu lam, quay lai va bam "Lam bai".
            </p>
          </div>
          <div className="preview-mode-banner__badge">{availableAnswerCount} dap an hien san</div>
        </div>
      ) : (
        <div className="answer-toggle-shell mb-4">
          <div>
            <p className="answer-toggle-shell__eyebrow">Tro giup linh hoat</p>
            <h2 className="answer-toggle-shell__title">An hoac hien dap an ngay trong luc lam bai</h2>
            <p className="answer-toggle-shell__text">
              Toggle nay chi anh huong giao dien hien thi. Cac dap an ban da chon van duoc giu nguyen de tiep tuc lam bai.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setRevealAnswers((value) => !value)}
            className={`answer-toggle-button ${revealAnswers ? "answer-toggle-button--active" : ""}`}
          >
            <EyeIcon off={!revealAnswers} />
            <span>{revealAnswers ? "An dap an" : "Hien dap an"}</span>
          </button>
        </div>
      )}

      <ProgressBar
        current={currentIndex + 1}
        total={totalPages}
        label={
          previewMode
            ? `Xem truoc ${currentIndex + 1}/${totalPages} - Dap an hien thi: ${availableAnswerCount}`
            : shouldShowAnswers
            ? `Trang ${currentIndex + 1}/${totalPages} - Dang hien dap an: ${availableAnswerCount}`
            : `Trang ${currentIndex + 1}/${totalPages} - Da tra loi: ${answeredCount}`
        }
      />

      {currentAudio && <AudioPlayer key={currentAudio} src={currentAudio} />}

      <div
        className="glass-card p-5 mb-6"
        key={isSingleQuestion ? `${currentGroup.id}-${currentGroup.partId}` : `group-${currentGroup.partId}`}
      >
        {renderCurrentCard()}
      </div>

      <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
        {allGroups.map((group, index) => {
          const isCurrent = index === currentIndex;
          let isAnswered = false;
          let label = "";

          if (GROUP_TYPES.has(group.partType)) {
            const keys = group.questions.map((question) => `${question.id}-${group.partId}`);
            isAnswered = shouldShowAnswers
              ? keys.every((key) => previewAnswers[key] !== undefined)
              : keys.every((key) => effectiveAnswers[key] !== undefined);
            label = `P${group.partId}`;
          } else {
            const key = `${group.id}-${group.partId}`;
            isAnswered = shouldShowAnswers ? previewAnswers[key] !== undefined : effectiveAnswers[key] !== undefined;
            label = group.id;
          }

          return (
            <button
              key={`${group.partId}-${index}`}
              onClick={() => setCurrentIndex(index)}
              className={`min-w-8 h-8 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center ${
                isCurrent
                  ? "bg-primary text-white scale-110 shadow-lg shadow-primary/30"
                  : isAnswered
                  ? "bg-primary/20 text-primary-light hover:bg-primary/30"
                  : "bg-surface-lighter text-text-muted hover:bg-surface-light"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => setCurrentIndex((value) => Math.max(0, value - 1))}
          disabled={currentIndex === 0}
          className={`flex-1 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
            currentIndex === 0
              ? "bg-surface-lighter text-text-muted cursor-not-allowed"
              : "bg-surface-lighter text-text-primary hover:bg-surface-light hover:scale-[1.02] active:scale-[0.98]"
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Truoc
        </button>

        {previewMode ? (
          <button
            onClick={onGoBack}
            className="flex-1 py-3 rounded-xl bg-linear-to-r from-accent to-primary text-white font-semibold transition-all hover:shadow-lg hover:shadow-accent/30 hover:scale-[1.02] active:scale-[0.98]"
          >
            Quay lai danh sach
          </button>
        ) : isLastPage ? (
          <button
            onClick={() => setIsFinished(true)}
            className="flex-1 py-3 rounded-xl bg-linear-to-r from-success to-emerald-600 text-white font-semibold transition-all hover:shadow-lg hover:shadow-success/30 hover:scale-[1.02] active:scale-[0.98]"
          >
            Nop bai
          </button>
        ) : (
          <button
            onClick={() => setCurrentIndex((value) => Math.min(totalPages - 1, value + 1))}
            className="flex-1 py-3 rounded-xl bg-linear-to-r from-primary to-primary-dark text-white font-semibold transition-all hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
          >
            Tiep
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizScreen;
