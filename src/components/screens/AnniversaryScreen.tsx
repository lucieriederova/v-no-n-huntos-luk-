import { useState } from 'react';
import FloatingDecorations from '@/components/FloatingDecorations';
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
    <div className="screen-container">
      <FloatingDecorations variant="full" />
      
      <div className="flex items-center justify-center gap-4 animate-slide-up">
        <PinkBox className="text-center max-w-md relative">
          <p className="text-2xl font-display text-foreground/70 leading-relaxed mb-6">
            dny kolik jsme spolu - kolik dnů nam chybí do výročí + kolik dnů od naši prvního (školního) setkani =
          </p>
          
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
                w-full px-6 py-4 rounded-2xl text-center text-xl
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
        </PinkBox>
        
        <img 
          src={girlPeekingQuestion} 
          alt="Holka přemýšlí" 
          className="w-48 h-64 object-contain"
        />
      </div>
    </div>
  );
};

export default AnniversaryScreen;
