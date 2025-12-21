import { useState, useCallback } from 'react';

export type ScreenId = 
  | 'intro'
  | 'wakeUp'
  | 'goodMorning'
  | 'christmasTree'
  | 'rules'
  | 'sudoku'
  | 'kitchenClue'
  | 'giftFound1'
  | 'anniversary'
  | 'sisterRoom'
  | 'howMuchLove'
  | 'loveAnswer1'
  | 'loveAnswer2'
  | 'guitarClue'
  | 'giftFound2'
  | 'finalMessage'
  | 'theEnd';

const SCREEN_ORDER: ScreenId[] = [
  'intro',
  'wakeUp',
  'goodMorning',
  'christmasTree',
  'rules',
  'sudoku',
  'kitchenClue',
  'giftFound1',
  'anniversary',
  'sisterRoom',
  'giftFound2',
  'howMuchLove',
  'loveAnswer1',
  'loveAnswer2',
  'guitarClue',
  'finalMessage',
  'theEnd',
];

export const useTreasureHunt = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('intro');
  const [answeredPuzzles, setAnsweredPuzzles] = useState<Set<string>>(new Set());

  const goToScreen = useCallback((screen: ScreenId) => {
    setCurrentScreen(screen);
  }, []);

  const goNext = useCallback(() => {
    const currentIndex = SCREEN_ORDER.indexOf(currentScreen);
    if (currentIndex < SCREEN_ORDER.length - 1) {
      setCurrentScreen(SCREEN_ORDER[currentIndex + 1]);
    }
  }, [currentScreen]);

  const goBack = useCallback(() => {
    const currentIndex = SCREEN_ORDER.indexOf(currentScreen);
    if (currentIndex > 0) {
      setCurrentScreen(SCREEN_ORDER[currentIndex - 1]);
    }
  }, [currentScreen]);

  const markPuzzleSolved = useCallback((puzzleId: string) => {
    setAnsweredPuzzles(prev => new Set([...prev, puzzleId]));
  }, []);

  const isPuzzleSolved = useCallback((puzzleId: string) => {
    return answeredPuzzles.has(puzzleId);
  }, [answeredPuzzles]);

  const validateSudokuAnswer = useCallback((answer: string): boolean => {
    return answer.trim() === '6622';
  }, []);

  const validateAnniversaryAnswer = useCallback((answer: string): boolean => {
    return answer.trim() === '324';
  }, []);

  const validateLoveAnswer = useCallback((answer: string): boolean => {
    const normalized = answer.toLowerCase().trim()
      .replace(/í/g, 'i')
      .replace(/á/g, 'a')
      .replace(/é/g, 'e')
      .replace(/ě/g, 'e')
      .replace(/ý/g, 'y')
      .replace(/ú/g, 'u')
      .replace(/ů/g, 'u');
    
    return normalized.includes('jeste') && normalized.includes('vic');
  }, []);

  return {
    currentScreen,
    goToScreen,
    goNext,
    goBack,
    markPuzzleSolved,
    isPuzzleSolved,
    validateSudokuAnswer,
    validateAnniversaryAnswer,
    validateLoveAnswer,
  };
};
