import FloatingDecorations from '@/components/FloatingDecorations';
import NavigationArrow from '@/components/NavigationArrow';
import PinkBox from '@/components/PinkBox';
import girlPeeking from "@/assets/32-girl-peeking.png";

interface RulesScreenProps {
  onNext: () => void;
}

const RulesScreen = ({ onNext }: RulesScreenProps) => {
  return (
    <div className="screen-container">
      <FloatingDecorations variant="full" />
      
      <div className="flex flex-col items-center justify-center gap-6 animate-slide-up">
        <img 
          src={girlPeeking} 
          alt="Holka nakukuje" 
          className="w-48 h-48 object-contain"
        />
        
        <PinkBox className="text-center max-w-sm">
          <h1 className="text-3xl font-display text-foreground mb-4">
            Připrav se na hon za pokladem! 💎
          </h1>
          <div className="text-left text-muted-foreground space-y-2">
            <p>🎀 Vyřeš hádanky a úkoly</p>
            <p>🎀 Najdi skryté dárky</p>
            <p>🎀 Užij si každý krok!</p>
          </div>
        </PinkBox>
        
        <NavigationArrow onClick={onNext} />
      </div>
    </div>
  );
};

export default RulesScreen;
