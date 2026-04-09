import React from "react";

const MultipleChoiceGroupCard = ({ group, answers, onSelectAnswer, showResult }) => {
  const { questions, example, description, partId, passage } = group;
  const optionLabels = ["A", "B", "C", "D", "E", "F", "G", "H"];

  const getOptionStyle = (question, optionIndex) => {
    const answerKey = `${question.id}-${partId}`;
    const selectedAnswer = answers[answerKey];
    const isSelected = selectedAnswer === optionIndex;
    const isCorrect = question.correct === optionIndex;
    const hasAnswer = question.correct !== null;

    if (showResult && hasAnswer) {
      if (isCorrect) return "border-success bg-success/10 text-success";
      if (isSelected && !isCorrect) return "border-danger bg-danger/10 text-danger";
    }

    if (isSelected) {
      return "border-primary bg-primary/10 text-primary ring-2 ring-primary/30";
    }

    return "border-surface-lighter bg-surface-light/50 text-text-primary hover:border-primary/40 hover:bg-surface-light cursor-pointer active:scale-[0.98]";
  };

  return (
    <div className="animate-fade-in-up">
      <div className="mb-6 pb-4 border-b border-surface-lighter">
        <p className="text-text-primary font-medium text-base leading-relaxed mb-3">
          {description}
        </p>

        {example && (
          <div className="bg-surface-light p-4 rounded-xl mt-4 border border-surface-lighter">
            <p className="font-semibold text-text-secondary text-sm mb-2">Example</p>
            <div className="flex flex-col gap-4">
              <span className="font-medium text-text-primary">
                <span className="font-bold w-6 inline-block">0</span> {example.question}
              </span>
              <div className="grid gap-3 sm:grid-cols-3">
                {example.options.map((option, index) => {
                  const isCorrect = optionLabels[index] === example.answer;

                  return (
                    <div
                      key={index}
                      className={`rounded-xl border px-3 py-2 text-sm ${
                        isCorrect
                          ? "border-success/40 bg-success/10 text-success"
                          : "border-surface-lighter bg-surface text-text-muted"
                      }`}
                    >
                      <span className="font-bold mr-2">{optionLabels[index]}</span>
                      {option}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {passage && (
        <div className="mb-8 rounded-[28px] border border-zinc-200 bg-white p-6 text-zinc-800 shadow-[12px_12px_0_rgba(15,23,42,0.18)] sm:p-8">
          <h3 className="font-serif text-4xl leading-none text-zinc-800">{passage.title}</h3>
          <div className="mt-5 space-y-4 text-base leading-7 text-zinc-700">
            {passage.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-8">
        {questions.map((question) => (
          <div key={question.id} className="group">
            <h3 className="font-semibold text-lg text-text-primary mb-3 flex items-start gap-2">
              <span className="bg-primary/10 text-primary w-7 h-7 flex items-center justify-center rounded-lg text-sm shrink-0 mt-0.5">
                {question.id}
              </span>
              {question.question}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {question.options.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  onClick={() => !showResult && onSelectAnswer(question.id, optionIndex)}
                  disabled={showResult}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl border-2 transition-all duration-200 text-left ${getOptionStyle(
                    question,
                    optionIndex
                  )}`}
                >
                  <div
                    className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-sm shrink-0 ${
                      answers[`${question.id}-${partId}`] === optionIndex
                        ? "bg-primary text-white"
                        : "bg-surface-lighter text-text-secondary"
                    }`}
                  >
                    {optionLabels[optionIndex]}
                  </div>

                  <span className="flex-1 text-sm font-medium">{option}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleChoiceGroupCard;
