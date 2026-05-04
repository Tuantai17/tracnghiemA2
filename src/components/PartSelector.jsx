const EyeIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12 18 18.75 12 18.75 2.25 12 2.25 12Z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75A3.75 3.75 0 1 0 12 8.25a3.75 3.75 0 0 0 0 7.5Z" />
  </svg>
);

const PartSelector = ({ test, onSelectPart, onPreviewPart, onGoBack }) => {
  const partColors = [
    "from-indigo-500 to-purple-500",
    "from-cyan-500 to-blue-500",
    "from-emerald-500 to-teal-500",
    "from-amber-500 to-orange-500",
    "from-rose-500 to-pink-500",
  ];
  const totalQuestions = test.parts.reduce((sum, part) => sum + part.questions.length, 0);

  const normalizedPaper = String(test.paper || "").toLowerCase();
  const isReadingWriting = normalizedPaper.includes("reading") || String(test.id || "").toUpperCase().startsWith("RW");

  const gridColsClass = isReadingWriting ? "md:grid-cols-2 xl:grid-cols-3" : "md:grid-cols-2";

  return (
    <div className="animate-fade-in-up">
      <button
        onClick={onGoBack}
        className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors mb-6 group"
      >
        <svg
          className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-sm font-medium">Quay lai</span>
      </button>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-1">{test.title}</h2>
        <p className="text-sm text-text-secondary">{test.description}</p>

        <div className="mt-3 inline-flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs px-3 py-1 rounded-full bg-primary/15 text-primary-light">
            {test.book}
          </span>
          {test.paper && (
            <span className="text-xs px-3 py-1 rounded-full bg-sky-500/15 text-sky-300">
              {test.paper}
            </span>
          )}
        </div>
      </div>

      <div className={`grid grid-cols-1 gap-3 ${gridColsClass}`}>
        {test.parts.map((part, index) => {
          const colorClass = partColors[index % partColors.length];
          const iconLabel = `P${index + 1}`;

          return (
            <div
              key={part.id}
              className="glass-card glass-card-hover p-4 transition-all duration-300 group min-h-[170px]"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex h-full flex-col gap-3">
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center shadow-lg`}
                >
                  <span className="text-sm font-bold text-white">{iconLabel}</span>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-text-primary mb-0.5 group-hover:text-primary-light transition-colors">
                    {part.title}
                  </h3>
                  <p className="text-xs text-text-secondary line-clamp-3">{part.description}</p>
                  <div className="flex flex-wrap items-center gap-2 mt-1.5">
                    <span className="text-xs text-text-muted">{part.questions.length} cau hoi</span>
                    {(part.badge || part.type) && (
                      <span className="text-xs px-1.5 py-0.5 rounded bg-accent/15 text-accent">
                        {part.badge || part.type}
                      </span>
                    )}
                  </div>
                </div>

                <div className="part-card-actions">
                  <button
                    type="button"
                    onClick={() => onPreviewPart(part)}
                    className="preview-answer-button"
                  >
                    <EyeIcon />
                    <span>Xem dap an</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectPart(part)}
                    className="start-part-button"
                  >
                    <span>Lam bai</span>
                    <svg
                      className="w-4 h-4 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <button
          onClick={() => onPreviewPart("all")}
          className="preview-answer-button preview-answer-button--wide"
        >
          <EyeIcon />
          <span>Xem dap an tat ca ({totalQuestions} cau)</span>
        </button>
        <button
          onClick={() => onSelectPart("all")}
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold transition-all hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]"
        >
          Lam tat ca ({totalQuestions} cau)
        </button>
      </div>
    </div>
  );
};

export default PartSelector;
