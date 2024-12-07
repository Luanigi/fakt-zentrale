"use client";

import React, { useState, useEffect } from 'react';
import { RadioGroup } from '@headlessui/react';
import clsx from 'clsx';
import ConfettiButton from './ConfettiButton';

interface Fact {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

const Quiz: React.FC = () => {
  const [facts, setFacts] = useState<Fact[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    fetch('/quiz.json')
      .then(response => response.json())
      .then(data => setFacts(data));
  }, []);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (selectedAnswer) {
      const correct = selectedAnswer === facts[currentQuestionIndex].correct_answer;
      setIsCorrect(correct);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % facts.length);
  };

  if (facts.length === 0) return <p>Loading...</p>;

  const currentFact = facts[currentQuestionIndex];
  const options = [currentFact.correct_answer, ...currentFact.incorrect_answers].sort();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black p-4" data-aos="fade-up" id="quiz">

      <h1 className='text-4xl font-bold text-white pb-10 underline'>Fakten Quiz</h1>
      <div className="w-full max-w-md p-4 bg-zinc-900 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-white">{currentFact.question}</h2>
        <RadioGroup value={selectedAnswer} onChange={handleAnswerSelect}>
          <RadioGroup.Label className="sr-only">Answers</RadioGroup.Label>
          <div className="space-y-2">
            {options.map((option) => (
              <RadioGroup.Option
                key={option}
                value={option}
                className='relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none bg-white focus:bg-zinc-300 hover:scale-105 transition duration-300 ease-in-out'
                >
                {({ checked }) => (
                  <>
                    <span
                      className={clsx(
                        'w-4 h-4 mr-3 rounded-full border border-gray-300 flex justify-center items-center',
                        {
                          'bg-blue-600': checked,
                          'bg-white': !checked,
                        }
                      )}
                    >
                      {checked && (
                        <span className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </span>
                    <RadioGroup.Label as="span" className="text-gray-900">
                      {option}
                    </RadioGroup.Label>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
        <ConfettiButton onClick={handleSubmit} isCorrect={isCorrect} />
        {isCorrect !== null && (
          <div className="mt-4">
            {isCorrect ? (
              <p className="text-green-600 py-3">Super, deine Antwort ist richtig!</p>
            ) : (
              <p className="text-red-600 py-3">Falsch! Die richtige Antwort ist {currentFact.correct_answer}.</p>
            )}
            <button
              className="mt-2 py-2 px-4 bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 rounded-lg shadow-lg text-white text-sm font-bold  hover:bg-gray-700"
              onClick={handleNextQuestion}
            >
              Nächste Frage
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
