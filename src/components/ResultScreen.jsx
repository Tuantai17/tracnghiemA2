import {
  getDisplayCorrectAnswer,
  hasScorableAnswer,
  hasUserAnswer,
  isQuestionCorrect,
} from "../utils/answerUtils";

const ResultScreen = ({
  answers,
  questions,
  totalQuestions,
  onRestart,
  onGoHome,
  testTitle,
  partTitle,
}) => {
  const scorableQuestions = questions.filter(hasScorableAnswer);
  const answeredScorableQuestions = scorableQuestions.filter((question) =>
    hasUserAnswer(answers[question.id])
  );
  const correctCount = scorableQuestions.reduce((count, question) => {
    return isQuestionCorrect(question, answers[question.id]) ? count + 1 : count;
  }, 0);

  const wrongCount = answeredScorableQuestions.length - correctCount;
  const totalWithAnswers = scorableQuestions.length;
  const scorePercent =
    totalWithAnswers > 0 ? Math.round((correctCount / totalWithAnswers) * 100) : 0;

  const getGrade = () => {
    if (totalWithAnswers === 0) return { label: "Chua co dap an", color: "text-warning", icon: "?" };
    if (scorePercent >= 90) return { label: "Xuat sac", color: "text-success", icon: "A+" };
    if (scorePercent >= 70) return { label: "Gioi", color: "text-accent", icon: "A" };
    if (scorePercent >= 50) return { label: "Kha", color: "text-primary-light", icon: "B" };
    return { label: "Can co gang them", color: "text-warning", icon: "C" };
  };

  const grade = getGrade();
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scorePercent / 100) * circumference;
  const optionLabels = ["A", "B", "C", "D", "E", "F", "G", "H"];

  return (
    <div className="animate-scale-in">
      <div className="glass-card p-6 sm:p-8 text-center mb-6">
        <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-2xl font-bold text-primary-light">
          {grade.icon}
        </div>
        <h2 className={`text-2xl font-bold mb-1 ${grade.color}`}>{grade.label}</h2>
        <p className="text-text-secondary text-sm mb-6">
          {testTitle} - {partTitle}
        </p>

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
                {totalWithAnswers > 0 ? `${scorePercent}%` : "-"}
              </span>
              <span className="text-xs text-text-muted">Diem so</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-surface-light/50 rounded-xl p-3">
            <div className="text-2xl font-bold text-success">{correctCount}</div>
            <div className="text-xs text-text-muted">Dung</div>
          </div>
          <div className="bg-surface-light/50 rounded-xl p-3">
            <div className="text-2xl font-bold text-danger">{wrongCount}</div>
            <div className="text-xs text-text-muted">Sai</div>
          </div>
          <div className="bg-surface-light/50 rounded-xl p-3">
            <div className="text-2xl font-bold text-primary-light">{totalQuestions}</div>
            <div className="text-xs text-text-muted">Tong cau</div>
          </div>
        </div>

        {!scorableQuestions.length && (
          <div className="p-3 rounded-xl bg-warning/10 border border-warning/20 text-warning text-sm mb-4">
            Chua co dap an cham tu dong cho phan nay.
          </div>
        )}
      </div>

      <div className="glass-card p-5 mb-6">
        <h3 className="text-lg font-bold text-text-primary mb-4">Xem dap an</h3>

        <div className="space-y-3">
          {questions.map((question) => {
            const userAnswer = answers[question.id];
            const hasOfficialAnswer = hasScorableAnswer(question);
            const isCorrect = isQuestionCorrect(question, userAnswer);

            const renderUserAnswer = () => {
              if (!hasUserAnswer(userAnswer)) return "Chua tra loi";
              if (question.options && typeof userAnswer === "number") {
                return `${optionLabels[userAnswer]} - ${question.options[userAnswer]}`;
              }
              return String(userAnswer);
            };

            const renderCorrectAnswer = () => {
              const correctValue = getDisplayCorrectAnswer(question);

              if (question.options && typeof correctValue === "number") {
                return `${optionLabels[correctValue]} - ${question.options[correctValue]}`;
              }

              return String(correctValue ?? "");
            };

            return (
              <div
                key={question.id}
                className={`flex items-start gap-3 p-3 rounded-xl border ${
                  !hasOfficialAnswer
                    ? "border-surface-lighter bg-surface-light/30"
                    : isCorrect
                    ? "border-success/30 bg-success/5"
                    : "border-danger/30 bg-danger/5"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${
                    !hasOfficialAnswer
                      ? "bg-surface-lighter text-text-muted"
                      : isCorrect
                      ? "bg-success text-white"
                      : "bg-danger text-white"
                  }`}
                >
                  {question.id}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm text-text-secondary mb-1">{question.question}</p>
                  <div className="flex items-center gap-2 text-xs flex-wrap">
                    <span
                      className={`px-2 py-0.5 rounded-md ${
                        hasUserAnswer(userAnswer)
                          ? "bg-primary/20 text-primary-light"
                          : "bg-surface-lighter text-text-muted"
                      }`}
                    >
                      Ban: {renderUserAnswer()}
                    </span>

                    {hasOfficialAnswer && !isCorrect && (
                      <span className="px-2 py-0.5 rounded-md bg-success/20 text-success">
                        Dap an: {renderCorrectAnswer()}
                      </span>
                    )}

                    {!hasOfficialAnswer && (
                      <span className="px-2 py-0.5 rounded-md bg-warning/20 text-warning">
                        Khong cham tu dong
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onRestart}
          className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-semibold transition-all hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]"
        >
          Lam lai
        </button>
        <button
          onClick={onGoHome}
          className="flex-1 py-3.5 rounded-xl bg-surface-lighter text-text-primary font-semibold transition-all hover:bg-surface-light hover:scale-[1.02] active:scale-[0.98]"
        >
          Trang chu
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;
