import React from 'react';

const MultipleChoiceGroupCard = ({ group, answers, onSelectAnswer, showResult }) => {
  const { questions, example, description, partId } = group;
  const optionLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  const getOptionStyle = (q, optIndex) => {
    const answerKey = `${q.id}-${partId}`;
    const selectedAnswer = answers[answerKey];
    const isSelected = selectedAnswer === optIndex;
    const isCorrect = q.correct === optIndex;
    const hasAnswer = q.correct !== null;

    if (showResult && hasAnswer) {
      if (isCorrect) {
        return 'border-success bg-success/10 text-success';
      }
      if (isSelected && !isCorrect) {
        return 'border-danger bg-danger/10 text-danger';
      }
    }

    if (isSelected) {
      return 'border-primary bg-primary/10 text-primary ring-2 ring-primary/30';
    }

    return 'border-surface-lighter bg-surface-light/50 text-text-primary hover:border-primary/40 hover:bg-surface-light cursor-pointer active:scale-[0.98]';
  };

  const getOptionIcon = (q, optIndex) => {
    const answerKey = `${q.id}-${partId}`;
    const selectedAnswer = answers[answerKey];
    const hasAnswer = q.correct !== null;
    
    if (!showResult || !hasAnswer) return null;

    if (q.correct === optIndex) {
      return (
        <div className="w-5 h-5 rounded-full bg-success flex items-center justify-center shrink-0">
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      );
    }

    if (selectedAnswer === optIndex) {
      return (
        <div className="w-5 h-5 rounded-full bg-danger flex items-center justify-center shrink-0">
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="animate-fade-in-up">
      {/* Header / Intro */}
      <div className="mb-6 pb-4 border-b border-surface-lighter">
        <p className="text-text-primary font-medium text-base leading-relaxed mb-3">
          {description}
        </p>
        
        {/* Render Example if available */}
        {example && (
          <div className="bg-surface-light p-4 rounded-xl mt-4 border border-surface-lighter">
            <p className="font-semibold text-text-secondary text-sm mb-2">Example:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-between sm:items-center">
              <span className="font-medium text-text-primary">
                <span className="font-bold w-6 inline-block">0</span> {example.question}
              </span>
              <div className="flex gap-4">
                {example.options.map((opt, idx) => {
                  const isExCorrect = optionLabels[idx] === example.answer;
                  return (
                    <div key={idx} className="flex items-center gap-2">
                       <span className="font-medium uppercase text-sm text-text-secondary">{optionLabels[idx]}</span>
                       <span className={`text-sm ${isExCorrect ? 'font-bold text-text-primary underline' : 'text-text-muted'}`}>{opt}</span>
                       {isExCorrect && (
                          <div className="w-4 h-4 border border-text-primary rounded flex items-center justify-center text-xs font-bold px-1">✓</div>
                       )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Questions List vertically stacked */}
      <div className="space-y-8">
        {questions.map((q) => (
          <div key={q.id} className="group">
            <h3 className="font-semibold text-lg text-text-primary mb-3 flex items-start gap-2">
              <span className="bg-primary/10 text-primary w-7 h-7 flex items-center justify-center rounded-lg text-sm shrink-0 mt-0.5">{q.id}</span>
              {q.question}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {q.options.map((option, optIndex) => (
                <button
                  key={optIndex}
                  onClick={() => !showResult && onSelectAnswer(q.id, optIndex)}
                  disabled={showResult}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl border-2 transition-all duration-200 text-left ${getOptionStyle(q, optIndex)}`}
                >
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-sm shrink-0 ${
                    answers[`${q.id}-${partId}`] === optIndex
                      ? 'bg-primary text-white'
                      : 'bg-surface-lighter text-text-secondary'
                  }`}>
                    {optionLabels[optIndex]}
                  </div>
                  <span className="flex-1 text-sm font-medium">{option}</span>
                  {getOptionIcon(q, optIndex)}
                </button>
              ))}
            </div>
            
            {showResult && q.correct === null && (
               <div className="mt-2 text-xs text-warning">Chưa có đáp án chính thức cho câu này.</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleChoiceGroupCard;
