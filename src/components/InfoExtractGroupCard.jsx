import React from "react";

const InfoExtractGroupCard = ({ group, answers, onSelectAnswer }) => {
  const { description, infoData, questions, partId } = group;

  return (
    <div className="animate-fade-in-up">
      <div className="mb-6 pb-4 border-b border-surface-lighter">
        <p className="text-text-primary font-medium text-base leading-relaxed">
          {description}
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-[24px] border border-zinc-200 bg-white p-5 text-zinc-800 shadow-[10px_10px_0_rgba(15,23,42,0.16)]">
            <p className="text-center text-3xl font-semibold italic text-zinc-800">
              {infoData.advertTitle}
            </p>
            <p className="mt-2 text-center text-sm font-medium uppercase tracking-[0.22em] text-zinc-500">
              {infoData.advertSubtitle}
            </p>

            <div className="mt-6 space-y-6 text-center">
              {infoData.advertBlocks.map((block) => (
                <div key={block.title}>
                  <p className="text-xl font-semibold text-zinc-800">{block.title}</p>
                  {block.lines.map((line) => (
                    <p key={line} className="mt-2 text-base leading-7 text-zinc-600">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-zinc-200 bg-white p-5 text-zinc-800 shadow-[10px_10px_0_rgba(15,23,42,0.16)]">
            <div className="grid grid-cols-[72px_1fr] gap-3 text-sm">
              <span className="font-semibold text-zinc-500">From:</span>
              <div className="rounded-lg bg-zinc-100 px-3 py-2 font-medium">
                {infoData.email.from}
              </div>
              <span className="font-semibold text-zinc-500">To:</span>
              <div className="rounded-lg bg-zinc-100 px-3 py-2 font-medium">
                {infoData.email.to}
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-base leading-7 text-zinc-700">
              {infoData.email.body}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl rounded-[24px] border border-zinc-200 bg-white p-6 text-zinc-800 shadow-[10px_10px_0_rgba(15,23,42,0.16)]">
          <p className="text-center text-3xl font-semibold text-zinc-800">
            {infoData.notesTitle}
          </p>
          <p className="mt-1 text-center text-xl text-zinc-500">{infoData.notesSubtitle}</p>

          <div className="mt-8 space-y-4">
            {questions.map((question) => {
              const answerKey = `${question.id}-${partId}`;
              const currentValue = answers[answerKey] ?? "";

              return (
                <div
                  key={question.id}
                  className="grid gap-3 sm:grid-cols-[180px_1fr] sm:items-center"
                >
                  <label className="text-base font-medium text-zinc-700">
                    {question.question}:
                  </label>

                  <div className="flex items-center rounded-2xl border border-zinc-300 bg-zinc-50">
                    <div className="flex h-12 w-12 items-center justify-center border-r border-zinc-300 bg-zinc-200 font-semibold">
                      {question.id}
                    </div>

                    {question.prefix && (
                      <span className="px-3 text-sm font-semibold text-zinc-600">
                        {question.prefix}
                      </span>
                    )}

                    <input
                      type="text"
                      value={currentValue}
                      onChange={(event) => onSelectAnswer(question.id, event.target.value)}
                      className="h-12 flex-1 border-none bg-transparent px-3 text-base text-zinc-800 outline-none"
                      autoComplete="off"
                    />

                    {question.suffix && (
                      <span className="px-3 text-sm font-semibold text-zinc-600">
                        {question.suffix}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoExtractGroupCard;
