import { useState } from 'react';
import FloatingDecorations from '@/components/FloatingDecorations';
import NavigationArrow from '@/components/NavigationArrow';
import PinkBox from '@/components/PinkBox';
import sudokuImg from "@/assets/30-sudoku.png";
import girlStanding from "@/assets/29-girl-waving.png";
import FloatingDog from '../FloatingDog';

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
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden bg-[#FFF5F7]">
      <FloatingDecorations variant="full" />
      <FloatingDog />
      
      {/* Hlavní kontejner s větším gapem pro prostor dívky */}
      <div className="relative z-10 flex flex-row items-center justify-center gap-20 w-full max-w-7xl px-8 animate-slide-up">
        
        <PinkBox 
          className="relative text-center p-10 !overflow-visible shadow-sm"
          style={{ 
            width: '50%', 
            minHeight: '550px', 
            backgroundImage: 'none', 
            backgroundColor: 'rgba(255, 255, 255, 0.4)' 
          }}
        >
          <p className="text-lg font-display text-[#D14D72] leading-relaxed mb-6 uppercase">
            SOLVE THIS SUDOKU AND WRITE THE COLORED NUMBERS INTO THE BOX (FROM THE BIGGEST)
          </p>
          
          <div className="relative z-10 bg-white/50 p-4 rounded-xl mb-6">
            <img 
              src={sudokuImg} 
              alt="Sudoku" 
              className="w-full max-w-sm mx-auto"
            />
          </div>
          
          <div className={`${shake ? 'animate-wiggle' : ''} relative z-10`}>
            <input
              type="text"
              value={answer}
              onChange={(e) => {
                setAnswer(e.target.value);
                setError(false);
              }}
              onKeyDown={handleKeyDown}
              placeholder="tadyy napiš numerooo..."
              maxLength={10}
              className="
                w-full max-w-xs mx-auto px-6 py-4 rounded-2xl text-center text-xl
                bg-white/80 border-2 border-pink-200
                focus:outline-none focus:ring-4 focus:ring-pink-300/30
                shadow-lg transition-all
              "
            />
          </div>

          {error && (
            <p className="text-pink-600 font-bold mt-2 animate-bounce">
              zkus to znovu! 💕
            </p>
          )}
          
          {/* HOLČIČKA: Posunutá více napravo mimo vnitřek sudoku */}
          <img 
            src={girlStanding} 
            alt="Holka" 
            style={{ 
              width: '70%', 
              height: 'auto',
              position: 'absolute',
              right: '-10%', // Posun výrazně doprava mimo box
              bottom: '-5%', // Nohy níže na hraně
              maxWidth: 'none'
            }}
            className="object-contain z-20 drop-shadow-xl"
          />
        </PinkBox>
        
        {/* Navigační šipka */}
        <div className="flex-shrink-0 z-30">
          <NavigationArrow onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default SudokuScreen;