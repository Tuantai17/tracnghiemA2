import React from "react";

const MatchingGroupCard = ({ group, answers, onSelectAnswer, showResult }) => {
  const { matchingData, questions } = group;

  return (
    <div className="animate-fade-in-up">
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1">
          <p className="text-text-primary font-medium text-base leading-relaxed">
            {group.description || "Match the following items."}
          </p>
        </div>
      </div>

      <div className="mb-6 flex items-center gap-3">
        <span className="text-xs px-2 py-1 rounded-full bg-accent/15 text-accent font-medium inline-block">
          Matching
        </span>
      </div>

      <div className="flex flex-col gap-6 rounded-2xl border border-zinc-200 bg-white p-5 text-zinc-800 shadow-[10px_10px_0_rgba(15,23,42,0.16)] sm:p-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr] lg:gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-zinc-200 pb-2">
              {matchingData.leftHeading}
            </h3>

            <ul className="space-y-4">
              {questions.map((question) => (
                <li key={question.id} className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                  <span className="font-bold mr-2">{question.id}</span>
                  <span>{question.question}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-zinc-200 pb-2">
              {matchingData.rightHeading}
            </h3>

            <ul className="grid gap-3 sm:grid-cols-2">
              {matchingData.options.map((option, index) => (
                <li
                  key={index}
                  className={`rounded-2xl border p-3 ${
                    matchingData.optionCardStyle === "notice"
                      ? "border-zinc-300 bg-zinc-50"
                      : "border-zinc-200 bg-white"
                  }`}
                >
                  <div className="text-sm font-bold text-indigo-600 mb-2">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <div className="text-sm leading-6 whitespace-pre-line">{option}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-surface-light/20 p-5 rounded-xl border border-surface-lighter">
        <p className="text-sm font-semibold text-center text-text-secondary mb-4 uppercase tracking-wider">
          Dap an cua ban
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {questions.map((question) => {
            const answerKey = `${question.id}-${group.partId}`;
            const selectedIdx = answers[answerKey];
            const isCorrect = showResult && question.correct !== null && question.correct === selectedIdx;
            const isWrong =
              showResult &&
              question.correct !== null &&
              selectedIdx !== undefined &&
              question.correct !== selectedIdx;

            return (
              <div key={question.id} className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-text-primary text-lg">{question.id}</span>
                  <div className="relative">
                    <select
                      disabled={showResult}
                      value={selectedIdx !== undefined ? selectedIdx : ""}
                      onChange={(event) => {
                        const value = event.target.value;
                        onSelectAnswer(question.id, value === "" ? undefined : parseInt(value, 10));
                      }}
                      className={`w-14 h-12 appearance-none text-center font-bold text-lg rounded-xl border-2 transition-all outline-none cursor-pointer ${
                        showResult
                          ? isCorrect
                            ? "border-success bg-success/10 text-success"
                            : isWrong
                            ? "border-danger bg-danger/10 text-danger"
                            : "border-surface-lighter bg-surface-light text-text-muted"
                          : selectedIdx !== undefined
                          ? "border-primary bg-primary/10 text-primary ring-2 ring-primary/20"
                          : "border-surface-lighter bg-surface hover:border-primary/50 text-text-primary"
                      }`}
                      style={{ paddingLeft: "0.5rem" }}
                    >
                      <option value=""></option>
                      {matchingData.options.map((_, index) => (
                        <option key={index} value={index}>
                          {String.fromCharCode(65 + index)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {showResult && question.correct !== null && !isCorrect && (
                  <div className="text-xs font-bold text-success mt-1">
                    Dap an: {String.fromCharCode(65 + question.correct)}
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
