import React from 'react';

const MatchingGroupCard = ({ group, answers, onSelectAnswer, showResult }) => {
  const { matchingData, questions, partTitle } = group;
  
  return (
    <div className="animate-fade-in-up">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1">
          <p className="text-text-primary font-medium text-base leading-relaxed">
            {group.description || "Match the following items."}
          </p>
        </div>
      </div>

      {/* Part type badge */}
      <div className="mb-6 flex items-center gap-3">
        <span className="text-xs px-2 py-1 rounded-full bg-accent/15 text-accent font-medium inline-block">
          🔗 Matching
        </span>
      </div>

      {/* Two columns layout: People | Places */}
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 justify-center bg-surface-light/30 p-4 sm:p-6 rounded-xl border border-surface-lighter">
        {/* Left Column */}
        <div className="flex-1 max-w-xs">
          <h3 className="font-bold text-lg mb-4 text-text-primary border-b border-surface-lighter pb-2">{matchingData.leftHeading}</h3>
          <ul className="space-y-4">
            {matchingData.example && (
              <li className="flex justify-between items-center text-text-secondary">
                <span>
                  <span className="font-bold w-8 inline-block">0</span>
                  {matchingData.example.question}
                </span>
                <span className="font-bold border border-text-secondary/30 w-8 h-8 flex items-center justify-center rounded bg-surface/50">
                  {matchingData.example.answer}
                </span>
              </li>
            )}
            
            {questions.map(q => (
              <li key={q.id} className="flex justify-between items-center text-text-primary font-medium">
                <span>
                  <span className="font-bold w-8 inline-block">{q.id}</span>
                  {q.question}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Separator */}
        <div className="hidden sm:block w-px bg-surface-lighter"></div>

        {/* Right Column */}
        <div className="flex-1 max-w-xs">
          <h3 className="font-bold text-lg mb-4 text-text-primary border-b border-surface-lighter pb-2">{matchingData.rightHeading}</h3>
          <ul className="space-y-3">
            {matchingData.options.map((opt, idx) => (
              <li key={idx} className="flex gap-3 text-base text-text-primary">
                <span className="font-bold text-primary-light">{String.fromCharCode(65 + idx)}</span>
                <span className="font-medium">{opt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Answer Inputs at the bottom */}
      <div className="mt-8 bg-surface-light/20 p-5 rounded-xl border border-surface-lighter">
        <p className="text-sm font-semibold text-center text-text-secondary mb-4 uppercase tracking-wider">Điền đáp án của bạn</p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {questions.map(q => {
            const answerKey = `${q.id}-${group.partId}`;
            const selectedIdx = answers[answerKey];
            const isCorrect = showResult && q.correct !== null && q.correct === selectedIdx;
            const isWrong = showResult && q.correct !== null && selectedIdx !== undefined && q.correct !== selectedIdx;
            const hasAnswer = q.correct !== null;

            return (
              <div key={q.id} className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-text-primary text-lg">{q.id}</span>
                  <div className="relative">
                    <select
                      disabled={showResult}
                      value={selectedIdx !== undefined ? selectedIdx : ''}
                      onChange={(e) => {
                        const val = e.target.value;
                        onSelectAnswer(q.id, val === '' ? undefined : parseInt(val));
                      }}
                      className={`w-14 h-12 appearance-none text-center font-bold text-lg rounded-xl border-2 transition-all outline-none cursor-pointer ${
                         showResult 
                          ? (isCorrect 
                              ? 'border-success bg-success/10 text-success' 
                              : (isWrong ? 'border-danger bg-danger/10 text-danger' : 'border-surface-lighter bg-surface-light text-text-muted'))
                          : (selectedIdx !== undefined 
                              ? 'border-primary bg-primary/10 text-primary ring-2 ring-primary/20' 
                              : 'border-surface-lighter bg-surface hover:border-primary/50 text-text-primary')
                      }`}
                      style={{ paddingLeft: '0.5rem' /* tweak to center select text when no arrow is shown */ }}
                    >
                      <option value=""></option>
                      {matchingData.options.map((_, idx) => (
                        <option key={idx} value={idx}>{String.fromCharCode(65 + idx)}</option>
                      ))}
                    </select>

                    {/* Result Icons */}
                    {showResult && hasAnswer && (
                       <div className="absolute -top-2 -right-2">
                         {isCorrect && (
                           <div className="w-5 h-5 rounded-full bg-success flex items-center justify-center shadow-sm">
                             <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                               <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                             </svg>
                           </div>
                         )}
                         {isWrong && (
                           <div className="w-5 h-5 rounded-full bg-danger flex items-center justify-center shadow-sm">
                             <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                             </svg>
                           </div>
                         )}
                       </div>
                    )}
                  </div>
                </div>
                
                {/* Show correct answer if missed/wrong */}
                {showResult && hasAnswer && !isCorrect && (
                  <div className="text-xs font-bold text-success mt-1">
                    Đáp án: {String.fromCharCode(65 + q.correct)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default MatchingGroupCard;
