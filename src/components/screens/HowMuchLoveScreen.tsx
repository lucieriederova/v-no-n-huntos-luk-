import FloatingDecorations from '@/components/FloatingDecorations';
import NavigationArrow from '@/components/NavigationArrow';
import PinkBox from '@/components/PinkBox';
import girlStanding from "@/assets/29-girl-waving.png";

interface HowMuchLoveScreenProps {
  onNext: () => void;
}

const HowMuchLoveScreen = ({ onNext }: HowMuchLoveScreenProps) => {
  return (
    <div className="screen-container">
      <FloatingDecorations variant="full" />
      
      <div className="flex items-center justify-center gap-4 animate-slide-up">
        <PinkBox className="text-center max-w-md min-h-[300px] flex items-center justify-center">
          <h1 className="text-3xl font-display text-foreground/70">
            JAK MOC TĚ MAM RÁDA?
          </h1>
        </PinkBox>
        
        <img 
          src={girlStanding} 
          alt="Holka stojí" 
          className="w-40 h-56 object-contain"
        />
      </div>
      
      <NavigationArrow onClick={onNext} />
    </div>
  );
};

export default HowMuchLoveScreen;
