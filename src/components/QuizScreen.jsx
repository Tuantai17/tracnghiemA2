import { useState } from "react";
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

const GROUP_TYPES = new Set([
  "matching",
  "multiple-choice-group",
  "fill-in-group",
  "word-builder",
  "letter-gap-fill",
  "info-extract",
  "writing-task",
]);

const QuizScreen = ({ test, part, onGoBack, onGoHome }) => {
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

  const currentGroup = allGroups[currentIndex];
  const totalPages = allGroups.length;
  const currentAudio = currentGroup?.audio;
  const isSingleQuestion = !GROUP_TYPES.has(currentGroup?.partType);

  const handleSelectAnswerSingle = (optionIndex) => {
    setAnswers((previous) => ({
      ...previous,
      [`${currentGroup.id}-${currentGroup.partId}`]: optionIndex,
    }));
  };

  const handleSelectAnswerGroup = (questionId, value) => {
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
  };

  if (isFinished) {
    const allQuestionsFlat = [];

    allGroups.forEach((group) => {
      if (GROUP_TYPES.has(group.partType)) {
        allQuestionsFlat.push(
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
        allQuestionsFlat.push(group);
      }
    });

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
  const currentAnswerSingle = currentAnswerKey ? answers[currentAnswerKey] : undefined;
  const isLastPage = currentIndex === totalPages - 1;
  const answeredCount = Object.keys(answers).length;

  const renderCurrentCard = () => {
    switch (currentGroup.partType) {
      case "matching":
        return (
          <MatchingGroupCard
            group={currentGroup}
            answers={answers}
            onSelectAnswer={handleSelectAnswerGroup}
            showResult={false}
          />
        );
      case "multiple-choice-group":
        return (
          <MultipleChoiceGroupCard
            group={currentGroup}
            answers={answers}
            onSelectAnswer={handleSelectAnswerGroup}
            showResult={false}
          />
        );
      case "fill-in-group":
        return (
          <FillInGroupCard
            group={currentGroup}
            answers={answers}
            onSelectAnswer={handleSelectAnswerGroup}
            showResult={false}
          />
        );
      case "word-builder":
        return (
          <WordBuilderGroupCard
            group={currentGroup}
            answers={answers}
            onSelectAnswer={handleSelectAnswerGroup}
          />
        );
      case "letter-gap-fill":
        return (
          <LetterGapFillCard
            group={currentGroup}
            answers={answers}
            onSelectAnswer={handleSelectAnswerGroup}
          />
        );
      case "info-extract":
        return (
          <InfoExtractGroupCard
            group={currentGroup}
            answers={answers}
            onSelectAnswer={handleSelectAnswerGroup}
          />
        );
      case "writing-task":
        return (
          <WritingPromptCard
            group={currentGroup}
            answers={answers}
            onSelectAnswer={handleSelectAnswerGroup}
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
            showResult={false}
            partType={currentGroup.partType}
            optionsType={currentGroup.optionsType}
          />
        );
    }
  };

  return (
    <div className="animate-fade-in-up">
      <div className="flex items-center justify-between mb-4">
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

      <ProgressBar
        current={currentIndex + 1}
        total={totalPages}
        label={`Trang ${currentIndex + 1}/${totalPages} - Da tra loi: ${answeredCount}`}
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
            isAnswered = keys.every((key) => answers[key] !== undefined);
            label = `P${group.partId}`;
          } else {
            const key = `${group.id}-${group.partId}`;
            isAnswered = answers[key] !== undefined;
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

        {isLastPage ? (
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
