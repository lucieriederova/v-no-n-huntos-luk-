import FloatingDecorations from '@/components/FloatingDecorations';
import NavigationArrow from '@/components/NavigationArrow';
import PinkBox from '@/components/PinkBox';
import girlJumping from "@/assets/34-girl-jumping.png";

interface KitchenClueScreenProps {
  onNext: () => void;
}

const KitchenClueScreen = ({ onNext }: KitchenClueScreenProps) => {
  return (
    <div className="screen-container">
      <FloatingDecorations variant="gifts" />
      
      <div className="flex flex-col items-center justify-center gap-6 animate-slide-up">
        <img 
          src={girlJumping} 
          alt="Nadšená holka" 
          className="w-48 h-48 object-contain bounce-gentle"
        />
        
        <PinkBox className="text-center max-w-sm">
          <h1 className="text-3xl font-display text-foreground mb-3">
            Správně! 🎉
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            První dárek je schovaný v...
          </p>
          <div className="bg-secondary/50 rounded-2xl p-4">
            <p className="text-2xl font-display text-primary">
              🍳 Kuchyni! 🍳
            </p>
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            Běž se podívat a pak se vrať!
          </p>
        </PinkBox>
        
        <NavigationArrow onClick={onNext} />
      </div>
    </div>
  );
};

export default KitchenClueScreen;
