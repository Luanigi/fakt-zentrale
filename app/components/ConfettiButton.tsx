'use client';

import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Button } from '@/components/ui/button';

interface ConfettiButtonProps {
  onClick: () => void;
  isCorrect: boolean | null;
}

export default function ConfettiButton({ onClick, isCorrect }: ConfettiButtonProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const audiofile = document.getElementById("myAudio") as HTMLAudioElement | null;
    if (isCorrect !== null && !isAnimating) {
      setIsAnimating(true);
      if (audiofile) {
        if (isCorrect) {
          audiofile.src = "/gewonnen.mp3";
        } else {
          audiofile.src = "/verloren.mp3";
        }
        audiofile.play();
      }
      if (isCorrect) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      }
      setTimeout(() => setIsAnimating(false), 1000);
    }
  }, [isCorrect]);

  let buttonText = "Absenden";
  if (isAnimating) {
    buttonText = isCorrect ? 'Richtig!' : 'Falsch!';
  }

  return (
    <>
      <audio id="myAudio"></audio>
      <Button 
        onClick={onClick}
        disabled={isAnimating}
        className="mt-5 bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        {buttonText}
      </Button>
    </>
  );
}
