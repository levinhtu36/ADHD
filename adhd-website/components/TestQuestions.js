'use client';

import { useState } from 'react';
import { questions, answerOptions } from '@/data/questions';
import { Sparkle } from './Stars';

export default function TestQuestions({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  // Kiểm tra câu hiện tại đã được trả lời chưa
  const isCurrentAnswered = answers[currentQuestion.id] !== undefined;

  // Kiểm tra tất cả câu hỏi đã được trả lời chưa
  const allAnswered = Object.keys(answers).length === totalQuestions;

  const handleAnswer = (value) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));
  };

  const goNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    if (allAnswered) {
      onComplete(answers);
    }
  };

  // Lấy màu cho section
  const getSectionColor = (section) => {
    switch (section) {
      case 'A': return 'bg-brutal-red/20 border-brutal-red';
      case 'B': return 'bg-brutal-yellow/20 border-brutal-yellow';
      case 'C': return 'bg-brutal-green/20 border-brutal-green';
      default: return 'bg-gray-200';
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold text-brutal-black">
            Câu {currentIndex + 1}/{totalQuestions}
          </span>
          <span className="text-sm text-brutal-black/60">
            {Math.round(progress)}% hoàn thành
          </span>
        </div>
        <div className="h-4 bg-white border-3 border-brutal-black">
          <div
            className="h-full bg-brutal-green progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Section Label */}
      <div className={`inline-block px-4 py-2 mb-4 border-2 ${getSectionColor(currentQuestion.section)}`}>
        <span className="font-semibold text-sm">
          Phần {currentQuestion.section}: {currentQuestion.sectionName}
        </span>
      </div>

      {/* Question Card */}
      <div className="bg-cream-dark border-3 border-brutal-black p-6 md:p-8 shadow-brutal mb-6">
        <div className="flex items-start gap-3 mb-6">
          <span className="flex-shrink-0 w-10 h-10 bg-brutal-black text-cream font-bold flex items-center justify-center">
            {currentQuestion.id}
          </span>
          <p className="text-lg md:text-xl font-medium leading-relaxed">
            {currentQuestion.text}
          </p>
        </div>

        {/* Answer Options */}
        <div className="space-y-3">
          {answerOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option.value)}
              className={`w-full p-4 text-left font-medium border-3 transition-all ${
                answers[currentQuestion.id] === option.value
                  ? 'bg-brutal-orange text-white border-brutal-black shadow-brutal-sm'
                  : 'bg-white border-brutal-black hover:bg-brutal-yellow/30 btn-brutal shadow-brutal-sm'
              }`}
            >
              <span className="flex items-center gap-3">
                <span className={`w-6 h-6 border-2 flex items-center justify-center ${
                  answers[currentQuestion.id] === option.value
                    ? 'bg-white border-white'
                    : 'border-brutal-black'
                }`}>
                  {answers[currentQuestion.id] === option.value && (
                    <Sparkle color="#E67E22" className="w-4 h-4" />
                  )}
                </span>
                {option.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-4">
        <button
          onClick={goPrev}
          disabled={currentIndex === 0}
          className={`flex-1 py-3 px-6 font-bold border-3 border-brutal-black transition-all ${
            currentIndex === 0
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-white btn-brutal shadow-brutal-sm hover:bg-cream-dark'
          }`}
        >
          ← Trước
        </button>

        {currentIndex < totalQuestions - 1 ? (
          <button
            onClick={goNext}
            disabled={!isCurrentAnswered}
            className={`flex-1 py-3 px-6 font-bold border-3 border-brutal-black transition-all ${
              !isCurrentAnswered
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-brutal-green text-white btn-brutal shadow-brutal-sm hover:bg-green-600'
            }`}
          >
            Tiếp →
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className={`flex-1 py-3 px-6 font-bold border-3 border-brutal-black transition-all ${
              !allAnswered
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-brutal-red text-white btn-brutal shadow-brutal-sm hover:bg-red-600'
            }`}
          >
            Xem kết quả
          </button>
        )}
      </div>

      {/* Question Navigator (Mini) */}
      <div className="mt-8 p-4 bg-white border-3 border-brutal-black">
        <p className="text-sm font-semibold mb-3">Tiến độ trả lời:</p>
        <div className="flex flex-wrap gap-2">
          {questions.map((q, index) => (
            <button
              key={q.id}
              onClick={() => setCurrentIndex(index)}
              className={`w-8 h-8 text-sm font-bold border-2 border-brutal-black transition-all ${
                index === currentIndex
                  ? 'bg-brutal-black text-white'
                  : answers[q.id] !== undefined
                    ? 'bg-brutal-green text-white'
                    : 'bg-white hover:bg-cream-dark'
              }`}
            >
              {q.id}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
