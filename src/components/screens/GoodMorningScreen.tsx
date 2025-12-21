import FloatingDecorations from '@/components/FloatingDecorations';
import NavigationArrow from '@/components/NavigationArrow';
import PinkBox from '@/components/PinkBox';
import girlClapping from "@/assets/35-girl-clapping.png";

interface GoodMorningScreenProps {
  onNext: () => void;
}

const GoodMorningScreen = ({ onNext }: GoodMorningScreenProps) => {
  return (
    <div className="screen-container">
      <FloatingDecorations variant="candy" />
      
      <div className="flex flex-col items-center justify-center gap-6 animate-slide-up">
        <PinkBox className="text-center max-w-sm">
          <h1 className="text-4xl font-display text-foreground mb-3">
            Veselé Vánoce! 🎄
          </h1>
          <p className="text-lg text-muted-foreground">
            Dneska je ten velký den!
          </p>
        </PinkBox>
        
        <img 
          src={girlClapping} 
          alt="Nadšená holka" 
          className="w-52 h-52 object-contain bounce-gentle"
        />
        
        <NavigationArrow onClick={onNext} />
      </div>
    </div>
  );
};

export default GoodMorningScreen;
