import { useEffect, useState } from 'react';
import TestList from './components/TestList';
import PartSelector from './components/PartSelector';
import QuizScreen from './components/QuizScreen';
import SettingsPanel from './components/SettingsPanel';
import TubesCursor from './components/TubesCursor';
import testsData from './data/testsData';
import readingWritingTestsData from './data/readingWritingTestsData';
import readingWritingQuyen2Data from './data/readingWritingQuyen2Data';
import './index.css';

/**
 * App flow:
 * 1. TestList → chọn test
 * 2. PartSelector → chọn Part (hoặc làm tất cả)
 * 3. QuizScreen → làm bài → ResultScreen
 */
const App = () => {
  const allTests = [...readingWritingTestsData, ...readingWritingQuyen2Data, ...testsData];
  const [screen, setScreen] = useState('home'); // 'home' | 'parts' | 'quiz'
  const [selectedTest, setSelectedTest] = useState(null);
  const [selectedPart, setSelectedPart] = useState(null);
  const [interactionMode, setInteractionMode] = useState(() => {
    if (typeof window === "undefined") return "ribbon";
    const savedMode = window.localStorage.getItem("interaction-mode");
    return savedMode === "tubes" ? "tubes" : "ribbon";
  });

  useEffect(() => {
    document.body.setAttribute("data-interaction-mode", interactionMode);
    window.localStorage.setItem("interaction-mode", interactionMode);
  }, [interactionMode]);

  const handleSelectTest = (test) => {
    setSelectedTest(test);
    setScreen('parts');
  };

  const handleSelectPart = (part) => {
    setSelectedPart(part);
    setScreen('quiz');
  };

  const handleGoHome = () => {
    setScreen('home');
    setSelectedTest(null);
    setSelectedPart(null);
  };

  const handleGoBackToParts = () => {
    setScreen('parts');
    setSelectedPart(null);
  };

  const contentMaxWidth =
    screen === "quiz" ? "max-w-6xl" : screen === "home" ? "max-w-6xl" : "max-w-5xl";

  return (
    <div className="min-h-screen">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-18%] right-[-8%] h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-[-15%] left-[-7%] h-[380px] w-[380px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <TubesCursor enabled={interactionMode === "tubes"} />
      <SettingsPanel mode={interactionMode} onChangeMode={setInteractionMode} />

      {/* Main content */}
      <div className={`relative z-10 ${contentMaxWidth} mx-auto px-4 py-6 sm:py-8`}>
        {screen === 'home' && (
          <TestList
            tests={allTests}
            onSelectTest={handleSelectTest}
            interactionMode={interactionMode}
          />
        )}

        {screen === 'parts' && selectedTest && (
          <PartSelector
            test={selectedTest}
            onSelectPart={handleSelectPart}
            onGoBack={handleGoHome}
          />
        )}

        {screen === 'quiz' && selectedTest && selectedPart && (
          <QuizScreen
            test={selectedTest}
            part={selectedPart}
            onGoBack={handleGoBackToParts}
            onGoHome={handleGoHome}
          />
        )}
      </div>
    </div>
  );
};

export default App;
