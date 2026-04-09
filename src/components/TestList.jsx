const normalizeBook = (book) => {
  if (!book) return "Khac";
  if (book.includes("1")) return "Quyển 1";
  if (book.includes("2")) return "Quyển 2";
  return book;
};

const orderedBooks = ["Quyển 1", "Quyển 2"];

const TestList = ({ tests, onSelectTest }) => {
  const groupedTests = tests.reduce((groups, test) => {
    const book = normalizeBook(test.book);
    if (!groups[book]) groups[book] = [];
    groups[book].push({
      ...test,
      book,
    });
    return groups;
  }, {});

  const bookSections = [
    ...orderedBooks.filter((book) => groupedTests[book]),
    ...Object.keys(groupedTests).filter((book) => !orderedBooks.includes(book)),
  ];

  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-4 shadow-lg shadow-primary/30">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 19.5V4.5C4 3.67 4.67 3 5.5 3h10A1.5 1.5 0 0 1 17 4.5V21l-3-1.8L11 21l-3-1.8L5 21v-1.5Z" />
          </svg>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
          Cambridge A2{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Practice
          </span>
        </h1>

        <p className="text-text-secondary text-sm sm:text-base max-w-md mx-auto">
          Cambridge English Key (KET) A2 - Listening and Reading & Writing
        </p>
      </div>

      <div className="space-y-6">
        {bookSections.map((book) => (
          <section key={book} className="space-y-4">
            <div className="flex items-center justify-between gap-3 px-1">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-text-primary">{book}</h2>
                <p className="text-xs sm:text-sm text-text-secondary">
                  {groupedTests[book].length} bai test
                </p>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-accent/20 to-transparent" />
            </div>

            <div className="space-y-4">
              {groupedTests[book].map((test, index) => (
                <button
                  key={test.id}
                  onClick={() => onSelectTest(test)}
                  className="w-full glass-card glass-card-hover p-5 text-left transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                      <span className="text-sm sm:text-base font-bold text-center leading-tight text-transparent bg-clip-text bg-gradient-to-br from-primary-light to-accent break-words">
                        {test.id}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-text-primary mb-0.5 group-hover:text-primary-light transition-colors">
                        {test.title}
                      </h3>
                      <p className="text-sm text-text-secondary truncate">{test.description}</p>

                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-primary/15 text-primary-light font-medium">
                          {test.book}
                        </span>

                        {test.paper && (
                          <span className="text-xs px-2 py-1 rounded-full bg-sky-500/15 text-sky-300 font-medium">
                            {test.paper}
                          </span>
                        )}

                        <span className="text-xs px-2 py-1 rounded-full bg-accent/15 text-accent font-medium">
                          {test.parts.length} Parts
                        </span>

                        <span className="text-xs px-2 py-1 rounded-full bg-success/15 text-success font-medium">
                          {test.parts.reduce((sum, part) => sum + part.questions.length, 0)} Cau
                        </span>
                      </div>
                    </div>

                    <div className="shrink-0 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                      <svg
                        className="w-5 h-5 text-text-secondary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-xs text-text-muted">Du lieu tu sach Cambridge English Key A2</p>
      </div>
    </div>
  );
};

export default TestList;
