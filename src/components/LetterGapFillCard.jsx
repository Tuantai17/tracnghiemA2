import React from "react";

const LetterGapFillCard = ({ group, answers, onSelectAnswer }) => {
  const { description, letterData, partId } = group;

  const renderToken = (token, tokenIndex) => {
    if (token.type === "text") {
      return (
        <span
          key={`${token.type}-${tokenIndex}`}
          className="whitespace-pre-wrap"
        >
          {token.value}
        </span>
      );
    }

    if (token.type === "example") {
      return (
        <span
          key={`example-${token.id}-${tokenIndex}`}
          className="mx-1 inline-flex min-w-[88px] items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-base font-semibold text-emerald-700"
        >
          {token.id}. {token.value}
        </span>
      );
    }

    const answerKey = `${token.id}-${partId}`;
    const currentValue = answers[answerKey] ?? "";

    return (
      <label
        key={`blank-${token.id}-${tokenIndex}`}
        className="mx-1 inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-2 py-1 align-middle"
      >
        <span className="text-xs font-bold text-zinc-500">{token.id}</span>
        <input
          type="text"
          value={currentValue}
          onChange={(event) => onSelectAnswer(token.id, event.target.value)}
          className="w-24 border-none bg-transparent text-center text-base font-medium text-zinc-800 outline-none sm:w-28"
          autoComplete="off"
        />
      </label>
    );
  };

  return (
    <div className="animate-fade-in-up">
      <div className="mb-6 pb-4 border-b border-surface-lighter">
        <p className="text-text-primary font-medium text-base leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mx-auto max-w-4xl rounded-[28px] border border-zinc-200 bg-white p-6 text-zinc-800 shadow-[12px_12px_0_rgba(15,23,42,0.18)] sm:p-8">
        <p className="mb-6 text-2xl font-semibold text-zinc-800">{letterData.greeting}</p>

        <div className="space-y-5 text-base leading-8 sm:text-lg">
          {letterData.lines.map((line, index) => (
            <p key={index} className="flex flex-wrap items-center">
              {line.map(renderToken)}
            </p>
          ))}
        </div>

        <div className="mt-10 space-y-1 text-xl text-zinc-700">
          {letterData.closing.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LetterGapFillCard;
