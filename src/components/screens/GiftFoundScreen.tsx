import FloatingDecorations from '@/components/FloatingDecorations';
import NavigationArrow from '@/components/NavigationArrow';
import PinkBox from '@/components/PinkBox';
import girlClapping from "@/assets/35-girl-clapping.png";
import giftPink from "@/assets/23-gift-pink.png";

interface GiftFoundScreenProps {
  onNext: () => void;
  giftNumber: number;
}

const GiftFoundScreen = ({ onNext, giftNumber }: GiftFoundScreenProps) => {
  return (
    <div className="screen-container">
      <FloatingDecorations variant="gifts" />
      
      <div className="flex flex-col items-center justify-center gap-6 animate-slide-up">
        <div className="relative">
          <img 
            src={giftPink} 
            alt="Dárek" 
            className="w-32 h-32 object-contain floating sparkle"
          />
        </div>
        
        <PinkBox className="text-center max-w-sm">
          <h1 className="text-4xl font-display text-foreground mb-3">
            Našla jsi dárek č.{giftNumber}! 🎁
          </h1>
          <p className="text-lg text-muted-foreground">
            Úžasné! Pokračuj dál, čeká tě další hádanka!
          </p>
        </PinkBox>
        
        <img 
          src={girlClapping} 
          alt="Nadšená holka" 
          className="w-44 h-44 object-contain bounce-gentle"
        />
        
        <NavigationArrow onClick={onNext} />
      </div>
    </div>
  );
};

export default GiftFoundScreen;
