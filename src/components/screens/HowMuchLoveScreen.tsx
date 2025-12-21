import { useState } from 'react';
import FloatingDecorations from '@/components/FloatingDecorations';
import PinkBox from '@/components/PinkBox';
import girlQuestion from "@/assets/33-girl-peeking-question.png";

interface HowMuchLoveScreenProps {
  onCorrect: () => void;
  validateAnswer: (answer: string) => boolean;
}

const HowMuchLoveScreen = ({ onCorrect, validateAnswer }: HowMuchLoveScreenProps) => {
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
      
      <div className="flex flex-col items-center justify-center gap-4 animate-slide-up">
        <PinkBox className="text-center max-w-sm">
          <h1 className="text-3xl font-display text-foreground mb-4">
            Jak moc tě miluju? 💕
          </h1>
          <p className="text-muted-foreground mb-2">
            Když řeknu "moc"...
          </p>
          <p className="text-muted-foreground mb-4">
            Ty odpovíš...?
          </p>
          
          <div className={`flex gap-2 ${shake ? 'animate-wiggle' : ''}`}>
            <input
              type="text"
              value={answer}
              onChange={(e) => {
                setAnswer(e.target.value);
                setError(false);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Tvoje odpověď..."
              maxLength={30}
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
              💕
            </button>
          </div>
          {error && (
            <p className="text-destructive text-sm mt-2">
              Co říkáš vždycky? 😊
            </p>
          )}
        </PinkBox>
        
        <img 
          src={girlQuestion} 
          alt="Holka přemýšlí" 
          className="w-40 h-40 object-contain floating"
        />
      </div>
    </div>
  );
};

export default HowMuchLoveScreen;
