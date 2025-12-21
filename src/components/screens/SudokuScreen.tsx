import { useState } from 'react';
import FloatingDecorations from '@/components/FloatingDecorations';
import PinkBox from '@/components/PinkBox';
import sudokuImg from "@/assets/30-sudoku.png";
import girlQuestion from "@/assets/33-girl-peeking-question.png";

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
      <FloatingDecorations variant="minimal" />
      
      <div className="flex flex-col items-center justify-center gap-4 animate-slide-up">
        <PinkBox className="text-center max-w-sm">
          <h1 className="text-3xl font-display text-foreground mb-2">
            Sudoku výzva! 🧩
          </h1>
          <p className="text-sm text-muted-foreground mb-4">
            Vyřeš sudoku a zadej čísla z růžových bublin (zleva doprava, shora dolů)
          </p>
          
          <img 
            src={sudokuImg} 
            alt="Sudoku" 
            className="w-full max-w-xs mx-auto rounded-xl shadow-md mb-4"
          />
          
          <div className={`flex gap-2 ${shake ? 'animate-wiggle' : ''}`}>
            <input
              type="text"
              value={answer}
              onChange={(e) => {
                setAnswer(e.target.value);
                setError(false);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Zadej kód..."
              maxLength={10}
              className={`
                flex-1 px-4 py-3 rounded-full text-center text-lg
                border-2 bg-background
                focus:outline-none focus:ring-2 focus:ring-primary
                ${error ? 'border-destructive' : 'border-input'}
              `}
            />
            <button
              onClick={handleSubmit}
              className="
                bg-primary text-primary-foreground 
                px-6 py-3 rounded-full font-medium
                hover:bg-primary/90 transition-colors
              "
            >
              ✓
            </button>
          </div>
          {error && (
            <p className="text-destructive text-sm mt-2">
              To není správně, zkus to znovu! 💕
            </p>
          )}
        </PinkBox>
        
        <img 
          src={girlQuestion} 
          alt="Holka přemýšlí" 
          className="w-32 h-32 object-contain floating"
        />
      </div>
    </div>
  );
};

export default SudokuScreen;
