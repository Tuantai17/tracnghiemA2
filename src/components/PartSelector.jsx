const PartSelector = ({ test, onSelectPart, onGoBack }) => {
  const partIcons = ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9"];
  const partColors = [
    "from-indigo-500 to-purple-500",
    "from-cyan-500 to-blue-500",
    "from-emerald-500 to-teal-500",
    "from-amber-500 to-orange-500",
    "from-rose-500 to-pink-500",
  ];
  const totalQuestions = test.parts.reduce((sum, part) => sum + part.questions.length, 0);

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

      <div className="space-y-3">
        {test.parts.map((part, index) => {
          const colorClass = partColors[index % partColors.length];
          const iconLabel = partIcons[index] ?? `P${part.id}`;

          return (
            <button
              key={part.id}
              onClick={() => onSelectPart(part)}
              className="w-full glass-card glass-card-hover p-4 text-left transition-all duration-300 group"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center shrink-0 shadow-lg`}
                >
                  <span className="text-sm font-bold text-white">{iconLabel}</span>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-text-primary mb-0.5 group-hover:text-primary-light transition-colors">
                    {part.title}
                  </h3>
                  <p className="text-xs text-text-secondary line-clamp-2">{part.description}</p>
                  <div className="flex flex-wrap items-center gap-2 mt-1.5">
                    <span className="text-xs text-text-muted">{part.questions.length} cau hoi</span>
                    {(part.badge || part.type) && (
                      <span className="text-xs px-1.5 py-0.5 rounded bg-accent/15 text-accent">
                        {part.badge || part.type}
                      </span>
                    )}
                  </div>
                </div>

                <svg
                  className="w-5 h-5 text-text-muted opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-6">
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
