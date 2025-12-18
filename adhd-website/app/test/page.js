'use client';

import { useState } from 'react';
import TestIntro from '@/components/TestIntro';
import TestQuestions from '@/components/TestQuestions';
import TestResult from '@/components/TestResult';
import { calculateResult } from '@/data/questions';

export default function TestPage() {
  const [stage, setStage] = useState('intro'); // intro, questions, result
  const [result, setResult] = useState(null);

  const handleStart = () => {
    setStage('questions');
  };

  const handleComplete = (answers) => {
    const resultLevel = calculateResult(answers);
    setResult(resultLevel);
    setStage('result');
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestart = () => {
    setStage('intro');
    setResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen py-8 md:py-12 px-4">
      {stage === 'intro' && (
        <TestIntro onStart={handleStart} />
      )}

      {stage === 'questions' && (
        <TestQuestions onComplete={handleComplete} />
      )}

      {stage === 'result' && (
        <TestResult result={result} onRestart={handleRestart} />
      )}
    </div>
  );
}
