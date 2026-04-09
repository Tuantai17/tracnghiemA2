import React from "react";

const WordBuilderGroupCard = ({ group, answers, onSelectAnswer }) => {
  const { description, example, questions, partId } = group;

  return (
    <div className="animate-fade-in-up">
      <div className="mb-6 pb-4 border-b border-surface-lighter">
        <p className="text-text-primary font-medium text-base leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mx-auto max-w-4xl rounded-[28px] border border-zinc-200 bg-white p-6 text-zinc-800 shadow-[12px_12px_0_rgba(15,23,42,0.18)] sm:p-8">
        <div className="mb-6 border-b border-zinc-200 pb-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
            Example
          </p>
          <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
            <p className="text-base leading-7">{example.prompt}</p>
            <div className="rounded-2xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-lg">
              <span className="font-semibold">{example.start}</span>
              <span className="ml-1 tracking-[0.3em] text-zinc-400">
                {"_".repeat(Math.max(example.answer.length - 1, 1))}
              </span>
              <span className="ml-4 font-medium text-zinc-500">{example.answer}</span>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          {questions.map((question) => {
            const answerKey = `${question.id}-${partId}`;
            const currentValue = answers[answerKey] ?? "";

            return (
              <div
                key={question.id}
                className="grid gap-3 rounded-2xl border border-zinc-200 bg-zinc-50/80 p-4 sm:grid-cols-[1fr_auto]"
              >
                <div>
                  <p className="text-sm font-semibold text-zinc-500">Question {question.id}</p>
                  <p className="mt-1 text-base leading-7">{question.question}</p>
                </div>

                <label className="flex min-w-[220px] items-center gap-2 rounded-2xl border border-zinc-300 bg-white px-4 py-3">
                  <span className="text-2xl font-semibold lowercase text-zinc-700">
                    {question.start}
                  </span>
                  <span className="text-zinc-300">|</span>
                  <input
                    type="text"
                    value={currentValue}
                    onChange={(event) => onSelectAnswer(question.id, event.target.value)}
                    className="w-full border-none bg-transparent text-lg text-zinc-800 outline-none"
                    placeholder={"_".repeat(Math.max((question.correct?.length ?? 4) - 1, 1))}
                    autoComplete="off"
                  />
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WordBuilderGroupCard;
