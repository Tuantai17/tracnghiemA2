import { useState, useCallback } from 'react';
import AudioPlayer from './AudioPlayer';
import QuestionCard from './QuestionCard';
import ProgressBar from './ProgressBar';
import ResultScreen from './ResultScreen';
import MatchingGroupCard from './MatchingGroupCard';
import MultipleChoiceGroupCard from './MultipleChoiceGroupCard';
import FillInGroupCard from './FillInGroupCard';

const QuizScreen = ({ test, part, onGoBack, onGoHome }) => {
  // Map questions into pages (groups)
  // For normal mixed parts, each question is a page.
  // For matching, multiple-choice-group, or fill-in-group part, the whole part is a SINGLE page.
  const allGroups = [];
  const sourceChunks = part === 'all' ? test.parts : [part];
  
  sourceChunks.forEach(p => {
    if (p.type === 'matching' || p.type === 'multiple-choice-group' || p.type === 'fill-in-group') {
      allGroups.push({
        isMatchingGroup: p.type === 'matching',
        isMultipleChoiceGroup: p.type === 'multiple-choice-group',
        isFillInGroup: p.type === 'fill-in-group',
        partId: p.id,
        partTitle: p.title,
        audio: p.audio,
        partType: p.type,
        matchingData: p.matchingData,
        fillInData: p.fillInData,
        example: p.example,
        questions: p.questions,
        description: p.description
      });
    } else {
      p.questions.forEach(q => {
        allGroups.push({
           ...q,
           partId: p.id,
           partTitle: p.title,
           audio: p.audio,
           partType: p.type,
           optionsType: p.optionsType || q.optionsType
        });
      });
    }
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const currentGroup = allGroups[currentIndex];
  const totalPages = allGroups.length; 

  // Track audio
  const currentAudio = currentGroup?.audio;

  // Xử lý chọn đáp án câu Trắc nghiệm
  const handleSelectAnswerSingle = useCallback((optIndex) => {
    setAnswers((prev) => ({
      ...prev,
      [currentGroup.id + '-' + currentGroup.partId]: optIndex,
    }));
  }, [currentGroup]);

  // Xử lý chọn đáp án câu Nhóm (Matching / MCQ Group / Fill-in Group)
  const handleSelectAnswerGroup = useCallback((questionId, value) => {
    setAnswers((prev) => {
      const newAnswers = { ...prev };
      if (value === undefined || value === null || value === '') {
        delete newAnswers[`${questionId}-${currentGroup.partId}`];
      } else {
        newAnswers[`${questionId}-${currentGroup.partId}`] = value;
      }
      return newAnswers;
    });
  }, [currentGroup]);

  const handleNext = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    setShowResult(true);
    setIsFinished(true);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setAnswers({});
    setShowResult(false);
    setIsFinished(false);
  };

  const answerKeySingle = currentGroup && !currentGroup.isMatchingGroup && !currentGroup.isMultipleChoiceGroup && !currentGroup.isFillInGroup ? `${currentGroup.id}-${currentGroup.partId}` : null;
  const currentAnswerSingle = answerKeySingle ? answers[answerKeySingle] : undefined;
  const isLastPage = currentIndex === totalPages - 1;
  const answeredCount = Object.keys(answers).length;

  if (isFinished) {
    // Để tương thích với ResultScreen, ta cần flattened questions.
    const allQuestionsFlat = [];
    allGroups.forEach(g => {
       if (g.isMatchingGroup) {
          allQuestionsFlat.push(...g.questions.map(q => ({...q, partId: g.partId, partTitle: g.partTitle, partType: g.partType, options: g.matchingData.options})));
       } else if (g.isMultipleChoiceGroup || g.isFillInGroup) {
          allQuestionsFlat.push(...g.questions.map(q => ({...q, partId: g.partId, partTitle: g.partTitle, partType: g.partType})));
       } else {
          allQuestionsFlat.push(g);
       }
    });

    const mappedAnswers = {};
    allQuestionsFlat.forEach((q) => {
      const key = `${q.id}-${q.partId}`;
      if (answers[key] !== undefined) {
        mappedAnswers[q.id] = answers[key];
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
        partTitle={part === 'all' ? 'Tất cả Parts' : part.title}
      />
    );
  }

  return (
    <div className="animate-fade-in-up">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onGoBack}
          className="flex items-center gap-1.5 text-text-secondary hover:text-text-primary transition-colors group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium">Quay lại</span>
        </button>

        <div className="text-right">
          <p className="text-xs text-text-muted">{test.title}</p>
          <p className="text-sm font-semibold text-primary-light">
            {currentGroup.partTitle}
          </p>
        </div>
      </div>

      {/* Progress */}
      <ProgressBar
         current={currentIndex + 1}
         total={totalPages}
         label={`Trang ${currentIndex + 1}/${totalPages} • Đã trả lời: ${answeredCount}`}
      />

      {/* Audio Player */}
      <AudioPlayer src={currentAudio} />

      {/* Question / Group */}
      <div className="glass-card p-5 mb-6" key={currentGroup.isMatchingGroup || currentGroup.isMultipleChoiceGroup || currentGroup.isFillInGroup ? `group-${currentGroup.partId}` : `${currentGroup.id}-${currentGroup.partId}`}>
        {currentGroup.isMatchingGroup ? (
          <MatchingGroupCard 
            group={currentGroup}
            answers={answers}
            onSelectAnswer={handleSelectAnswerGroup}
            showResult={false}
          />
        ) : currentGroup.isMultipleChoiceGroup ? (
          <MultipleChoiceGroupCard 
            group={currentGroup}
            answers={answers}
            onSelectAnswer={handleSelectAnswerGroup}
            showResult={false}
          />
        ) : currentGroup.isFillInGroup ? (
          <FillInGroupCard 
            group={currentGroup}
            answers={answers}
            onSelectAnswer={handleSelectAnswerGroup}
            showResult={false}
          />
        ) : (
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
        )}
      </div>

      {/* Base Navigation Mini dots */}
      <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
        {allGroups.map((g, idx) => {
          const isCurrent = idx === currentIndex;
          let isAnswered = false;
          let label = "";

          if (g.isMatchingGroup || g.isMultipleChoiceGroup || g.isFillInGroup) {
             // Group is answered if ALL questions are answered
             const keys = g.questions.map(q => `${q.id}-${g.partId}`);
             isAnswered = keys.every(k => answers[k] !== undefined);
             label = `Part ${g.partId}`; // Or "11-15"
          } else {
             const key = `${g.id}-${g.partId}`;
             isAnswered = answers[key] !== undefined;
             label = g.id;
          }

          return (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`min-w-8 h-8 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center ${
                isCurrent
                  ? 'bg-primary text-white scale-110 shadow-lg shadow-primary/30'
                  : isAnswered
                  ? 'bg-primary/20 text-primary-light hover:bg-primary/30'
                  : 'bg-surface-lighter text-text-muted hover:bg-surface-light'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-3">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`flex-1 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
            currentIndex === 0
              ? 'bg-surface-lighter text-text-muted cursor-not-allowed'
              : 'bg-surface-lighter text-text-primary hover:bg-surface-light hover:scale-[1.02] active:scale-[0.98]'
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Trước
        </button>

        {isLastPage ? (
          <button
            onClick={handleSubmit}
            className="flex-1 py-3 rounded-xl bg-linear-to-r from-success to-emerald-600 text-white font-semibold transition-all hover:shadow-lg hover:shadow-success/30 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
          >
            ✅ Nộp bài
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="flex-1 py-3 rounded-xl bg-linear-to-r from-primary to-primary-dark text-white font-semibold transition-all hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
          >
            Tiếp
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
