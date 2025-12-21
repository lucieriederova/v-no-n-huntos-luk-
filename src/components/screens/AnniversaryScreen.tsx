import { useState } from 'react';
import FloatingDecorations from '@/components/FloatingDecorations';
import PinkBox from '@/components/PinkBox';
import girlPeeking from "@/assets/32-girl-peeking.png";

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
    <div className="screen-container">
      <FloatingDecorations variant="candy" />
      
      <div className="flex flex-col items-center justify-center gap-4 animate-slide-up">
        <img 
          src={girlPeeking} 
          alt="Holka přemýšlí" 
          className="w-40 h-40 object-contain"
        />
        
        <PinkBox className="text-center max-w-sm">
          <h1 className="text-3xl font-display text-foreground mb-3">
            Hádanka o nás! 💕
          </h1>
          <p className="text-muted-foreground mb-4">
            Kolik dní jsme spolu?
          </p>
          <div className="bg-secondary/50 rounded-2xl p-4 mb-4">
            <p className="text-lg">
              (Spočítej od našeho výročí do dneška!)
            </p>
          </div>
          
          <div className={`flex gap-2 ${shake ? 'animate-wiggle' : ''}`}>
            <input
              type="text"
              value={answer}
              onChange={(e) => {
                setAnswer(e.target.value);
                setError(false);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Počet dní..."
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
              Zkus to znovu, lásko! 💕
            </p>
          )}
        </PinkBox>
      </div>
    </div>
  );
};

export default AnniversaryScreen;
