const PartSelector = ({ test, onSelectPart, onGoBack }) => {
  const partIcons = ['🎧', '🔗', '📝', '✏️', '📋'];
  const partColors = [
    'from-indigo-500 to-purple-500',
    'from-cyan-500 to-blue-500',
    'from-emerald-500 to-teal-500',
    'from-amber-500 to-orange-500',
    'from-rose-500 to-pink-500',
  ];

  return (
    <div className="animate-fade-in-up">
      {/* Back button */}
      <button
        onClick={onGoBack}
        className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors mb-6 group"
      >
        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-sm font-medium">Quay lại</span>
      </button>

      {/* Test Title */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-1">{test.title}</h2>
        <p className="text-sm text-text-secondary">{test.description}</p>
        <div className="mt-3 inline-flex items-center gap-2">
          <span className="text-xs px-3 py-1 rounded-full bg-primary/15 text-primary-light">
            {test.book}
          </span>
        </div>
      </div>

      {/* Part Cards */}
      <div className="space-y-3">
        {test.parts.map((part, index) => (
          <button
            key={part.id}
            onClick={() => onSelectPart(part)}
            className="w-full glass-card glass-card-hover p-4 text-left transition-all duration-300 group"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="flex items-center gap-4">
              {/* Part Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${partColors[index]} flex items-center justify-center shrink-0 shadow-lg`}>
                <span className="text-xl">{partIcons[index]}</span>
              </div>

              {/* Part Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-text-primary mb-0.5 group-hover:text-primary-light transition-colors">
                  {part.title}
                </h3>
                <p className="text-xs text-text-secondary line-clamp-2">
                  {part.description}
                </p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-xs text-text-muted">
                    {part.questions.length} câu hỏi
                  </span>
                  {part.type && (
                    <span className="text-xs px-1.5 py-0.5 rounded bg-accent/15 text-accent">
                      {part.type}
                    </span>
                  )}
                </div>
              </div>

              {/* Arrow */}
              <svg className="w-5 h-5 text-text-muted opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {/* Do all parts button */}
      <div className="mt-6">
        <button
          onClick={() => onSelectPart('all')}
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold transition-all hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]"
        >
          🚀 Làm tất cả (25 câu)
        </button>
      </div>
    </div>
  );
};

export default PartSelector;
