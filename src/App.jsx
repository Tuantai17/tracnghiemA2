import { useState } from 'react';
import TestList from './components/TestList';
import PartSelector from './components/PartSelector';
import QuizScreen from './components/QuizScreen';
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

  return (
    <div className="min-h-screen">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 py-6 sm:py-8">
        {screen === 'home' && (
          <TestList
            tests={allTests}
            onSelectTest={handleSelectTest}
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
