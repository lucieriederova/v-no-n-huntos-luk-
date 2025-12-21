import FloatingDecorations from '@/components/FloatingDecorations';
import NavigationArrow from '@/components/NavigationArrow';
import PinkBox from '@/components/PinkBox';
import girlJumping from "@/assets/34-girl-jumping.png";

interface LoveAnswer2ScreenProps {
  onNext: () => void;
}

const LoveAnswer2Screen = ({ onNext }: LoveAnswer2ScreenProps) => {
  return (
    <div className="screen-container">
      <FloatingDecorations variant="full" />
      
      <div className="flex flex-col items-center justify-center gap-6 animate-slide-up">
        <PinkBox className="text-center max-w-sm">
          <h1 className="text-4xl font-display text-foreground mb-2">
            ještě víííc! 💕💕💕
          </h1>
          <p className="text-lg text-muted-foreground">
            Správně! To je naše!
          </p>
        </PinkBox>
        
        <img 
          src={girlJumping} 
          alt="Nadšená holka" 
          className="w-56 h-56 object-contain bounce-gentle"
        />
        
        <NavigationArrow onClick={onNext} />
      </div>
    </div>
  );
};

export default LoveAnswer2Screen;
