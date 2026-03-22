import { useState } from 'react';

const QuestionCard = ({ question, questionIndex, totalQuestions, selectedAnswer, onSelectAnswer, showResult, partType, optionsType }) => {
  const optionLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  const getOptionStyle = (optIndex) => {
    const isSelected = selectedAnswer === optIndex;
    const isCorrect = question.correct === optIndex;
    const hasAnswer = question.correct !== null;

    if (showResult && hasAnswer) {
      if (isCorrect) {
        return 'border-success bg-success/10 text-success';
      }
      if (isSelected && !isCorrect) {
        return 'border-danger bg-danger/10 text-danger';
      }
    }

    if (isSelected) {
      return 'border-primary bg-primary/15 text-primary-light ring-2 ring-primary/30';
    }

    return 'border-surface-lighter bg-surface-light/50 text-text-primary hover:border-primary/40 hover:bg-surface-light';
  };

  const getOptionIcon = (optIndex) => {
    const hasAnswer = question.correct !== null;
    if (!showResult || !hasAnswer) return null;

    if (question.correct === optIndex) {
      return (
        <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center shrink-0">
          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      );
    }

    if (selectedAnswer === optIndex) {
      return (
        <div className="w-6 h-6 rounded-full bg-danger flex items-center justify-center shrink-0">
          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="animate-fade-in-up">
      {/* Question header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm shrink-0">
          {question.id}
        </div>
        <div className="flex-1">
          <p className="text-text-primary font-medium text-base leading-relaxed">
            {question.question}
          </p>
        </div>
      </div>

      {/* Part type badge */}
      {partType && (
        <div className="mb-4 flex items-center gap-3">
          <span className="text-xs px-2 py-1 rounded-full bg-accent/15 text-accent font-medium inline-block">
            {partType === 'matching' ? '🔗 Matching' : partType === 'fill-in' ? '✏️ Fill-in' : '📝 Multiple Choice'}
          </span>
          {optionsType === 'image' && (
            <span className="text-xs px-2 py-1 rounded-full bg-purple-500/15 text-purple-400 font-medium inline-block">
              📸 Image Options
            </span>
          )}
        </div>
      )}

      {/* Options */}
      {optionsType === 'image' ? (
        <div className="grid grid-cols-3 gap-3 md:gap-4 mt-6">
          {question.options.map((option, optIndex) => (
            <button
              key={optIndex}
              onClick={() => !showResult && onSelectAnswer(optIndex)}
              disabled={showResult}
              className={`relative flex flex-col p-2.5 sm:p-4 rounded-xl border-2 transition-all duration-200 ${getOptionStyle(optIndex)} ${
                !showResult ? 'cursor-pointer active:scale-[0.98]' : 'cursor-default'
              }`}
            >
              {/* Image container */}
              <div className="w-full aspect-[3/2] bg-white rounded-lg flex items-center justify-center p-1 mb-3 shadow-inner overflow-hidden border border-surface-lighter">
                {typeof option === 'string' && option.startsWith('/') ? (
                  <img src={option} alt={`Option ${optionLabels[optIndex]}`} className="max-w-full max-h-[90%] object-contain mix-blend-multiply scale-110" />
                ) : (
                  <span className="text-sm font-medium text-text-muted text-center">{option}</span>
                )}
              </div>
              
              {/* Option label & Result */}
              <div className="w-full flex items-center justify-between">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                  selectedAnswer === optIndex
                    ? 'bg-primary text-white'
                    : 'bg-surface-lighter text-text-secondary'
                }`}>
                  {optionLabels[optIndex]}
                </div>
                
                {getOptionIcon(optIndex)}
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {question.options.map((option, optIndex) => (
            <button
              key={optIndex}
              onClick={() => !showResult && onSelectAnswer(optIndex)}
              disabled={showResult}
              className={`w-full flex items-center gap-3 p-3.5 rounded-xl border-2 transition-all duration-200 text-left ${getOptionStyle(optIndex)} ${
                !showResult ? 'cursor-pointer active:scale-[0.98]' : 'cursor-default'
              }`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 ${
                selectedAnswer === optIndex
                  ? 'bg-primary text-white'
                  : 'bg-surface-lighter text-text-secondary'
              }`}>
                {optionLabels[optIndex]}
              </div>
              <span className="flex-1 text-sm font-medium">{option}</span>
              {getOptionIcon(optIndex)}
            </button>
          ))}
        </div>
      )}

      {/* No answer notice */}
      {showResult && question.correct === null && (
        <div className="mt-3 p-3 rounded-xl bg-warning/10 border border-warning/30 text-warning text-sm flex items-center gap-2">
          <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <span>Đáp án chưa được cung cấp cho câu này</span>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
