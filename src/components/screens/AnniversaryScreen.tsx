import { useState } from 'react';
import FloatingDecorations from '@/components/FloatingDecorations';
import FloatingDog from '@/components/FloatingDog';
import PinkBox from '@/components/PinkBox';
import girlPeekingQuestion from "@/assets/33-girl-peeking-question.png";

interface AnniversaryScreenProps {
  onCorrect: () => void;
  validateAnswer: (answer: string) => boolean;
}

const AnniversaryScreen = ({ onCorrect, validateAnswer }: AnniversaryScreenProps) => {
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
      
      <div className="relative z-10 flex items-center justify-center w-full max-w-6xl px-8 animate-slide-up">
        
        {/* PinkBox s textem a vykukující holčičkou */}
        <PinkBox 
          className="relative p-12 !overflow-visible shadow-sm flex flex-col items-center justify-center"
          style={{ 
            width: '50%', 
            minHeight: '400px', 
            backgroundImage: 'none', 
            backgroundColor: 'rgba(255, 255, 255, 0.4)' 
          }}
        >
          <p className="text-2xl font-display text-[#D14D72] leading-relaxed mb-8 text-center">
            dny kolik jsme spolu - kolik dnů nam chybí do výročí + kolik dnů od naši prvního (školního) setkani =
          </p>
          
          <div className={`${shake ? 'animate-wiggle' : ''} w-full max-w-xs relative z-10`}>
            <input
              type="text"
              value={answer}
              onChange={(e) => {
                setAnswer(e.target.value);
                setError(false);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Zadej číslo..."
              className="
                w-full px-6 py-4 rounded-2xl text-center text-2xl
                bg-white/80 border-2 border-pink-200
                focus:outline-none focus:ring-4 focus:ring-pink-300/30
                shadow-lg transition-all
              "
            />
          </div>

          {error && (
            <p className="text-pink-600 font-bold mt-4 animate-bounce">
              zkus to znovu! 💕
            </p>
          )}

          {/* HOLČIČKA: Vykukuje z pravé hrany boxu */}
          <img 
            src={girlPeekingQuestion} 
            alt="Holka přemýšlí" 
            style={{ 
              width: '55%', // Větší velikost
              height: 'auto',
              position: 'absolute',
              right: '-28%', // Vykukuje ven z boxu
              bottom: '-10%', // Nohy/tělo posunuté níže na hranu
              maxWidth: 'none'
            }}
            className="object-contain z-20 drop-shadow-xl"
          />
        </PinkBox>
        
        {/* Šipka pro odeslání (pokud ji používáš i zde) */}
        <div className="ml-12 flex-shrink-0 z-30">
          <button 
            onClick={handleSubmit}
            className="p-4 bg-white/80 rounded-full shadow-lg hover:scale-110 transition-transform border-2 border-pink-100"
          >
            <span className="text-3xl">➔</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default AnniversaryScreen;