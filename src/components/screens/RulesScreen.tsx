import FloatingDecorations from '@/components/FloatingDecorations';
import NavigationArrow from '@/components/NavigationArrow';
import PinkBox from '@/components/PinkBox';
import girlWaving from "@/assets/29-girl-waving.png";

interface RulesScreenProps {
  onNext: () => void;
}

const RulesScreen = ({ onNext }: RulesScreenProps) => {
  return (
    <div className="screen-container">
      <FloatingDecorations variant="full" />
      
      <div className="flex items-center justify-center gap-4 animate-slide-up">
        <PinkBox className="text-center max-w-md relative pr-24">
          <p className="text-2xl font-display text-foreground/70 leading-relaxed mb-4">
            helluwaaa!
          </p>
          <p className="text-xl font-display text-foreground/70 leading-relaxed mb-4">
            i hope you're having an amazing christmas!! about this gift:
          </p>
          <p className="text-xl font-display text-foreground/70 leading-relaxed">
            You'll be solving small riddles and puzzles. and every time you solve one, I'll give you a clue about where the next gift is hiding
          </p>
          
          {/* Girl on the right side, overlapping */}
          <img 
            src={girlWaving} 
            alt="Holka mává" 
            className="absolute -right-16 bottom-0 w-40 h-56 object-contain"
          />
        </PinkBox>
        
        <NavigationArrow onClick={onNext} />
      </div>
    </div>
  );
};

export default RulesScreen;
