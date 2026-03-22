const ResultScreen = ({ answers, questions, totalQuestions, onRestart, onGoHome, testTitle, partTitle }) => {
  const answeredQuestions = questions.filter(q => q.correct !== null);
  const correctCount = answeredQuestions.reduce((count, q) => {
    const userAnswer = answers[q.id];
    return userAnswer === q.correct ? count + 1 : count;
  }, 0);

  const totalWithAnswers = answeredQuestions.length;
  const scorePercent = totalWithAnswers > 0 ? Math.round((correctCount / totalWithAnswers) * 100) : 0;
  const totalAnswered = Object.keys(answers).length;

  const getGrade = () => {
    if (totalWithAnswers === 0) return { label: 'Chưa có đáp án', color: 'text-warning', emoji: '📝' };
    if (scorePercent >= 90) return { label: 'Xuất sắc!', color: 'text-success', emoji: '🏆' };
    if (scorePercent >= 70) return { label: 'Giỏi!', color: 'text-accent', emoji: '🌟' };
    if (scorePercent >= 50) return { label: 'Khá!', color: 'text-primary-light', emoji: '👍' };
    return { label: 'Cần cố gắng thêm', color: 'text-warning', emoji: '💪' };
  };

  const grade = getGrade();

  // Calculate circumference for SVG circle progress
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scorePercent / 100) * circumference;

  return (
    <div className="animate-scale-in">
      {/* Score Card */}
      <div className="glass-card p-6 sm:p-8 text-center mb-6">
        <div className="text-4xl mb-3">{grade.emoji}</div>
        <h2 className={`text-2xl font-bold mb-1 ${grade.color}`}>{grade.label}</h2>
        <p className="text-text-secondary text-sm mb-6">
          {testTitle} - {partTitle}
        </p>

        {/* Circular Progress */}
        <div className="flex justify-center mb-6">
          <div className="relative w-36 h-36">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 140 140">
              <circle
                cx="70"
                cy="70"
                r={radius}
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-surface-lighter"
              />
              <circle
                cx="70"
                cy="70"
                r={radius}
                stroke="url(#progressGradient)"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-1000 ease-out"
              />
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-text-primary">
                {totalWithAnswers > 0 ? `${scorePercent}%` : '—'}
              </span>
              <span className="text-xs text-text-muted">Điểm số</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-surface-light/50 rounded-xl p-3">
            <div className="text-2xl font-bold text-success">{correctCount}</div>
            <div className="text-xs text-text-muted">Đúng</div>
          </div>
          <div className="bg-surface-light/50 rounded-xl p-3">
            <div className="text-2xl font-bold text-danger">
              {totalWithAnswers > 0 ? totalAnswered - correctCount : 0}
            </div>
            <div className="text-xs text-text-muted">Sai</div>
          </div>
          <div className="bg-surface-light/50 rounded-xl p-3">
            <div className="text-2xl font-bold text-primary-light">{totalQuestions}</div>
            <div className="text-xs text-text-muted">Tổng câu</div>
          </div>
        </div>

        {totalWithAnswers === 0 && (
          <div className="p-3 rounded-xl bg-warning/10 border border-warning/20 text-warning text-sm mb-4">
            📌 Đáp án chưa được cung cấp. Bạn có thể xem lại câu trả lời phía dưới.
          </div>
        )}
      </div>

      {/* Answer Review */}
      <div className="glass-card p-5 mb-6">
        <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
          Xem đáp án
        </h3>

        <div className="space-y-3">
          {questions.map((q) => {
            const userAnswer = answers[q.id];
            const isCorrect = q.correct !== null && userAnswer === q.correct;
            const hasAnswer = q.correct !== null;
            const labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

            return (
              <div
                key={q.id}
                className={`flex items-start gap-3 p-3 rounded-xl border ${
                  !hasAnswer
                    ? 'border-surface-lighter bg-surface-light/30'
                    : isCorrect
                    ? 'border-success/30 bg-success/5'
                    : 'border-danger/30 bg-danger/5'
                }`}
              >
                {/* Status icon */}
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${
                  !hasAnswer
                    ? 'bg-surface-lighter text-text-muted'
                    : isCorrect
                    ? 'bg-success text-white'
                    : 'bg-danger text-white'
                }`}>
                  {q.id}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm text-text-secondary truncate mb-1">{q.question}</p>
                  <div className="flex items-center gap-2 text-xs flex-wrap">
                    <span className={`px-2 py-0.5 rounded-md ${
                      userAnswer !== undefined && userAnswer !== ''
                        ? 'bg-primary/20 text-primary-light'
                        : 'bg-surface-lighter text-text-muted'
                    }`}>
                      Bạn: {userAnswer !== undefined && userAnswer !== '' 
                             ? (q.options 
                                  ? (q.optionsType === 'image' ? labels[userAnswer] : `${labels[userAnswer]} - ${q.options[userAnswer]}`)
                                  : userAnswer) 
                             : 'Chưa trả lời'}
                    </span>
                    {hasAnswer && !isCorrect && (
                      <span className="px-2 py-0.5 rounded-md bg-success/20 text-success">
                        Đáp án: {q.options 
                                  ? (q.optionsType === 'image' ? labels[q.correct] : `${labels[q.correct]} - ${q.options[q.correct]}`)
                                  : q.correct}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3">
        <button
          onClick={onRestart}
          className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-semibold transition-all hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]"
        >
          🔄 Làm lại
        </button>
        <button
          onClick={onGoHome}
          className="flex-1 py-3.5 rounded-xl bg-surface-lighter text-text-primary font-semibold transition-all hover:bg-surface-light hover:scale-[1.02] active:scale-[0.98]"
        >
          🏠 Trang chủ
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;
