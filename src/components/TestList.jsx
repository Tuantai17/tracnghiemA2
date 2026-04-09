import { useMemo, useState } from "react";

const normalizeBookKey = (book) => {
  if (!book) return "book_other";
  if (book.includes("1")) return "book_1";
  if (book.includes("2")) return "book_2";
  return "book_other";
};

const getPaperType = (test) => {
  const paper = String(test.paper || "").toLowerCase();
  const testId = String(test.id || "").toUpperCase();

  if (paper.includes("reading")) return "reading";
  if (paper.includes("listen")) return "listening";
  if (testId.startsWith("RW")) return "reading";
  return "listening";
};

const getQuestionCount = (test) => test.parts.reduce((sum, part) => sum + part.questions.length, 0);

const BOOKS = [
  { key: "book_1", label: "Quyen 1", subtitle: "Bo de co ban" },
  { key: "book_2", label: "Quyen 2", subtitle: "Bo de mo rong" },
];

const PAPER_BLOCKS = [
  { key: "reading", title: "Reading & Writing", subtitle: "Paper 1" },
  { key: "listening", title: "Listening", subtitle: "Paper 2" },
];

const updateRibbonTilt = (event) => {
  const el = event.currentTarget;
  const rect = el.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const ratioX = x / rect.width;
  const ratioY = y / rect.height;

  const rotateY = (ratioX - 0.5) * 12;
  const rotateX = (0.5 - ratioY) * 10;

  el.style.setProperty("--mx", `${(ratioX * 100).toFixed(2)}%`);
  el.style.setProperty("--my", `${(ratioY * 100).toFixed(2)}%`);
  el.style.setProperty("--rx", `${rotateY.toFixed(2)}deg`);
  el.style.setProperty("--ry", `${rotateX.toFixed(2)}deg`);
};

const resetRibbonTilt = (event) => {
  const el = event.currentTarget;
  el.style.setProperty("--mx", "50%");
  el.style.setProperty("--my", "50%");
  el.style.setProperty("--rx", "0deg");
  el.style.setProperty("--ry", "0deg");
};

const TestList = ({ tests, onSelectTest, interactionMode = "ribbon" }) => {
  const [selectedBookKey, setSelectedBookKey] = useState(null);

  const groupedTests = useMemo(() => {
    return tests.reduce((groups, test) => {
      const key = normalizeBookKey(test.book);
      if (!groups[key]) groups[key] = [];
      groups[key].push(test);
      return groups;
    }, {});
  }, [tests]);

  if (!selectedBookKey) {
    return (
      <main className="animate-fade-in-up space-y-8">
        <section className="double-bezel-shell">
          <div className="double-bezel-core px-5 py-7 text-center sm:px-8 sm:py-9">
            <p className="eyebrow-tag mx-auto">Cambridge key a2 workbook</p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 text-balance sm:text-5xl">
              Chon quyen de bat dau
            </h1>
            <p className="mx-auto mt-3 max-w-[56ch] text-sm font-medium text-zinc-400 sm:text-base">
              Moi quyen duoc chia san thanh 2 nhom rieng: Reading & Writing va Listening.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {BOOKS.map((book) => {
            const testsInBook = groupedTests[book.key] || [];
            const readingCount = testsInBook.filter((test) => getPaperType(test) === "reading").length;
            const listeningCount = testsInBook.filter((test) => getPaperType(test) === "listening").length;

            return (
              <button
                key={book.key}
                type="button"
                onClick={() => setSelectedBookKey(book.key)}
                onMouseMove={interactionMode === "ribbon" ? updateRibbonTilt : undefined}
                onMouseLeave={interactionMode === "ribbon" ? resetRibbonTilt : undefined}
                className="ribbon-card book-card-shell text-left"
              >
                <div className="book-card-core">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-300/90">{book.subtitle}</p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100">{book.label}</h2>

                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    <span className="book-pill">{readingCount} reading tests</span>
                    <span className="book-pill">{listeningCount} listening tests</span>
                  </div>

                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-zinc-200">
                    Mo danh sach theo paper
                    <span className="book-arrow-wrap" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 stroke-current" strokeWidth="1.8">
                        <path d="M5 12h14" />
                        <path d="m13 6 6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </section>
      </main>
    );
  }

  const selectedBook = BOOKS.find((book) => book.key === selectedBookKey);
  const testsInBook = groupedTests[selectedBookKey] || [];

  const testsByPaper = {
    reading: testsInBook.filter((test) => getPaperType(test) === "reading"),
    listening: testsInBook.filter((test) => getPaperType(test) === "listening"),
  };

  return (
    <main className="animate-fade-in-up space-y-5">
      <button
        type="button"
        onClick={() => setSelectedBookKey(null)}
        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-zinc-100 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-white/40 hover:bg-white/10 active:scale-[0.98]"
      >
        <span aria-hidden="true">&larr;</span>
        Quay lai chon quyen
      </button>

      <section className="double-bezel-shell">
        <div className="double-bezel-core p-5 sm:p-7">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <p className="eyebrow-tag">Danh sach test</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
                {selectedBook?.label}
              </h2>
            </div>
            <p className="text-sm font-medium text-zinc-400">{testsInBook.length} bai test kha dung</p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {PAPER_BLOCKS.map((paperBlock) => {
              const paperTests = testsByPaper[paperBlock.key];

              return (
                <article key={paperBlock.key} className="rounded-3xl border border-white/10 bg-white/[0.02] p-4 sm:p-5">
                  <header className="mb-4 border-b border-white/10 pb-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-300/85">
                      {paperBlock.subtitle}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-zinc-100">{paperBlock.title}</h3>
                    <p className="mt-1 text-sm text-zinc-400">{paperTests.length} bai test</p>
                  </header>

                  {paperTests.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-white/20 bg-white/[0.03] p-4 text-sm text-zinc-400">
                      Chua co du lieu cho muc nay trong {selectedBook?.label}.
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {paperTests.map((test) => (
                        <button
                          key={test.id}
                          type="button"
                          onClick={() => onSelectTest(test)}
                          onMouseMove={interactionMode === "ribbon" ? updateRibbonTilt : undefined}
                          onMouseLeave={interactionMode === "ribbon" ? resetRibbonTilt : undefined}
                          className="ribbon-card test-row-shell w-full text-left"
                        >
                          <div className="test-row-core">
                            <div className="flex flex-wrap items-start justify-between gap-4">
                              <div>
                                <p className="text-sm font-semibold tracking-wide text-teal-300/90">{test.id}</p>
                                <h4 className="mt-1 text-lg font-semibold text-zinc-100">{test.title}</h4>
                                <p className="mt-1 text-sm text-zinc-400">{test.description}</p>
                              </div>

                              <span className="book-arrow-wrap mt-1 shrink-0" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 stroke-current" strokeWidth="1.8">
                                  <path d="M5 12h14" />
                                  <path d="m13 6 6 6-6 6" />
                                </svg>
                              </span>
                            </div>

                            <div className="mt-4 flex flex-wrap gap-2">
                              <span className="book-pill">{test.parts.length} parts</span>
                              <span className="book-pill">{getQuestionCount(test)} cau</span>
                              {test.paper && <span className="book-pill">{test.paper}</span>}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default TestList;
