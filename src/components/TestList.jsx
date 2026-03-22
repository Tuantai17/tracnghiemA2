const TestList = ({ tests, onSelectTest }) => {
  return (
    <div className="animate-fade-in-up">
      {/* Hero Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-4 shadow-lg shadow-primary/30">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
          </svg>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
          Listening <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Practice</span>
        </h1>
        <p className="text-text-secondary text-sm sm:text-base max-w-md mx-auto">
          Cambridge English Key (KET) A2 — Luyện nghe tiếng Anh
        </p>
      </div>

      {/* Test Cards */}
      <div className="space-y-4">
        {tests.map((test, index) => (
          <button
            key={test.id}
            onClick={() => onSelectTest(test)}
            className="w-full glass-card glass-card-hover p-5 text-left transition-all duration-300 group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-4">
              {/* Test Number */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary-light to-accent">
                  {test.id}
                </span>
              </div>

              {/* Test Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-text-primary mb-0.5 group-hover:text-primary-light transition-colors">
                  {test.title}
                </h3>
                <p className="text-sm text-text-secondary truncate">
                  {test.description}
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/15 text-primary-light font-medium">
                    📚 {test.book}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-accent/15 text-accent font-medium">
                    🎧 {test.parts.length} Parts
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-success/15 text-success font-medium">
                    📝 {test.parts.reduce((sum, p) => sum + p.questions.length, 0)} Câu
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="shrink-0 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                <svg className="w-5 h-5 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Footer Info */}
      <div className="mt-8 text-center">
        <p className="text-xs text-text-muted">
          Dữ liệu từ sách Cambridge English Key A2 • Đang phát triển
        </p>
      </div>
    </div>
  );
};

export default TestList;
