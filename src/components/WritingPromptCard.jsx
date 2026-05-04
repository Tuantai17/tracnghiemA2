import React from "react";

const WritingPromptCard = ({ group, answers, onSelectAnswer, showResult = false }) => {
  const { description, writingData, partId, questions } = group;
  const question = questions[0];
  const answerKey = `${question.id}-${partId}`;
  const currentValue = answers[answerKey] ?? "";
  const wordCount = currentValue.trim() ? currentValue.trim().split(/\s+/).length : 0;

  return (
    <div className="animate-fade-in-up">
      <div className="mb-6 pb-4 border-b border-surface-lighter">
        <p className="text-text-primary font-medium text-base leading-relaxed">
          {description}
        </p>
      </div>

      <div className="space-y-6">
        <div className="rounded-[28px] border border-zinc-200 bg-white p-6 text-zinc-800 shadow-[12px_12px_0_rgba(15,23,42,0.18)] sm:p-8">
          <p className="text-2xl font-semibold text-zinc-800">{writingData.prompt}</p>

          <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Tell Sam
            </p>
            <ul className="mt-4 space-y-3 text-base leading-7 text-zinc-700">
              {writingData.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-indigo-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-[28px] border border-zinc-200 bg-white p-5 text-zinc-800 shadow-[12px_12px_0_rgba(15,23,42,0.18)]">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                {showResult ? "Sample Note" : "Your Note"}
              </p>
              <p className="text-sm text-zinc-500">Recommended length: 25-35 words</p>
            </div>
            <div className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-600">
              {wordCount} words
            </div>
          </div>

          <textarea
            value={currentValue}
            onChange={(event) => onSelectAnswer(question.id, event.target.value)}
            className="min-h-[220px] w-full resize-y rounded-2xl border border-zinc-300 bg-zinc-50 p-4 text-base leading-7 text-zinc-800 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 disabled:cursor-not-allowed disabled:text-zinc-500"
            placeholder="Hi Sam, ..."
            disabled={showResult}
            readOnly={showResult}
          />
        </div>
      </div>
    </div>
  );
};

export default WritingPromptCard;
