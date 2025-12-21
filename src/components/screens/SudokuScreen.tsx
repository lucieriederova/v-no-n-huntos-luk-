import { useState } from 'react';
import FloatingDecorations from '@/components/FloatingDecorations';
import NavigationArrow from '@/components/NavigationArrow';
import PinkBox from '@/components/PinkBox';
import sudokuImg from "@/assets/30-sudoku.png";
import girlStanding from "@/assets/29-girl-waving.png";

interface SudokuScreenProps {
  onCorrect: () => void;
  validateAnswer: (answer: string) => boolean;
}

const SudokuScreen = ({ onCorrect, validateAnswer }: SudokuScreenProps) => {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = () => {
    if (validateAnswer(answer)) {
      onCorrect();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="screen-container">
      <FloatingDecorations variant="full" />
      
      <div className="flex items-center justify-center gap-4 animate-slide-up">
        <PinkBox className="text-center max-w-lg relative">
          <p className="text-lg font-display text-foreground/70 leading-relaxed mb-4 uppercase">
            SOLVE THIS SUDOKU AND WRITE THE COLORED NUMBERS INTO THE BOX (FROM THE BIGGEST
          </p>
          
          <img 
            src={sudokuImg} 
            alt="Sudoku" 
            className="w-full max-w-sm mx-auto mb-4"
          />
          
          <div className={`${shake ? 'animate-wiggle' : ''}`}>
            <input
              type="text"
              value={answer}
              onChange={(e) => {
                setAnswer(e.target.value);
                setError(false);
              }}
              onKeyDown={handleKeyDown}
              placeholder=""
              maxLength={10}
              className="
                w-full max-w-xs mx-auto px-6 py-4 rounded-2xl text-center text-xl
                bg-secondary/30 border-0
                focus:outline-none focus:ring-2 focus:ring-primary/50
                shadow-[0_4px_20px_rgba(236,72,153,0.3)]
              "
            />
          </div>
          {error && (
            <p className="text-destructive text-sm mt-2">
              Zkus to znovu! 💕
            </p>
          )}
          
          {/* Girl on the right side */}
          <img 
            src={girlStanding} 
            alt="Holka" 
            className="absolute -right-20 bottom-0 w-36 h-52 object-contain"
          />
        </PinkBox>
        
        <NavigationArrow onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default SudokuScreen;
