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
      <FloatingDecorations variant="full" />
      
      <div className="flex flex-col items-center justify-center gap-6 animate-slide-up">
        <div className="relative">
          <img 
            src={giftPink} 
            alt="Dárek" 
            className="w-0 h-50 object-contain floating sparkle"
          />
        </div>
        
        <PinkBox className="text-center max-w-sm">
          <h1 className="text-4xl font-display text-foreground mb-3">
            youuuu haaaave found the gift n.{giftNumber} (or at least i hope you did)
          </h1>
        </PinkBox>
        
        <img 
          src={girlClapping} 
          alt="Nadšená holka" 
          style={{ 
            width: '50%', 
            height: 'auto'
          }}
          className="object-contain relative z-20"
        />
        
        <NavigationArrow onClick={onNext} />
      </div>
    </div>
  );
};

export default GiftFoundScreen;
