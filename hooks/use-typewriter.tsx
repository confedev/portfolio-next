import { useState, useEffect, useCallback } from 'react';
import { config } from '@/config/config';

interface UseTypewriterProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  loop?: boolean;
}

export function useTypewriter({
  phrases,
  typingSpeed = config.typewriter.typingSpeed,
  deletingSpeed = config.typewriter.deletingSpeed,
  pauseTime = config.typewriter.pauseTime,
  loop = config.typewriter.loop,
}: UseTypewriterProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  const typeCharacter = useCallback(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    if (isWaiting) {
      return;
    }

    if (!isDeleting) {
      // Typing phase
      if (currentText.length < currentPhrase.length) {
        setCurrentText(currentPhrase.slice(0, currentText.length + 1));
      } else {
        // Finished typing, start waiting
        setIsWaiting(true);
        setTimeout(() => {
          setIsWaiting(false);
          setIsDeleting(true);
        }, pauseTime);
      }
    } else if (currentText.length > 0) {
      // Deleting phase - remove characters
      setCurrentText(currentText.slice(0, -1));
    } else {
      // Finished deleting, move to next phrase
      setIsDeleting(false);
      if (loop) {
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else if (currentPhraseIndex < phrases.length - 1) {
        setCurrentPhraseIndex((prev) => prev + 1);
      }
    }
  }, [
    currentText,
    currentPhraseIndex,
    isDeleting,
    isWaiting,
    phrases,
    pauseTime,
    loop,
  ]);

  useEffect(() => {
    if (phrases.length === 0) return;

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(typeCharacter, speed);

    return () => clearTimeout(timer);
  }, [typeCharacter, isDeleting, typingSpeed, deletingSpeed, phrases.length]);

  return {
    currentText,
    isDeleting,
    currentPhraseIndex,
  };
}
