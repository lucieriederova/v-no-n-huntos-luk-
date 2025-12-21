import FloatingDecorations from '@/components/FloatingDecorations';
import NavigationArrow from '@/components/NavigationArrow';
import PinkBox from '@/components/PinkBox';
import girlWaving from "@/assets/29-girl-waving.png";

interface WakeUpScreenProps {
  onNext: () => void;
}

const WakeUpScreen = ({ onNext }: WakeUpScreenProps) => {
  return (
    <div className="screen-container">
      <FloatingDecorations variant="minimal" />
      
      <div className="flex flex-col items-center justify-center gap-6 animate-slide-up">
        <img 
          src={girlWaving} 
          alt="Holka mává" 
          className="w-56 h-56 object-contain floating"
        />
        
        <PinkBox className="text-center max-w-sm">
          <h1 className="text-4xl font-display text-foreground mb-2">
            Dobré ráno, lásko! 🌸
          </h1>
          <p className="text-lg text-muted-foreground">
            Už je čas vstávat...
          </p>
        </PinkBox>
        
        <NavigationArrow onClick={onNext} />
      </div>
    </div>
  );
};

export default WakeUpScreen;
