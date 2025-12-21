import FloatingDecorations from '@/components/FloatingDecorations';
import NavigationArrow from '@/components/NavigationArrow';
import PinkBox from '@/components/PinkBox';
import girlClapping from "@/assets/35-girl-clapping.png";

interface KitchenClueScreenProps {
  onNext: () => void;
}

const KitchenClueScreen = ({ onNext }: KitchenClueScreenProps) => {
  return (
    <div className="screen-container">
      <FloatingDecorations variant="full" />
      
      <div className="flex flex-col items-center justify-center gap-4 animate-slide-up">
        <PinkBox className="text-center max-w-md">
          <div className="bg-secondary/30 rounded-2xl px-6 py-3 mb-6 shadow-[0_4px_20px_rgba(236,72,153,0.3)]">
            {/* Empty input-like box at top */}
          </div>
          
          <p className="text-2xl font-display text-foreground/70 leading-relaxed mb-4">
            your first gift is in the kitchen under the place where we store plates
          </p>
          
          <p className="text-xl font-display text-foreground/70">
            ps: asi to z toho docela vypadne
          </p>
          
          <img 
            src={girlClapping} 
            alt="Nadšená holka" 
            className="w-40 h-40 object-contain mx-auto mt-4"
          />
        </PinkBox>
        
        <NavigationArrow onClick={onNext} />
      </div>
    </div>
  );
};

export default KitchenClueScreen;
