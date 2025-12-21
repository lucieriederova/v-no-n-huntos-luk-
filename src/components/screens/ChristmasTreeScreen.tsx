import FloatingDecorations from '@/components/FloatingDecorations';
import NavigationArrow from '@/components/NavigationArrow';
import PinkBox from '@/components/PinkBox';
import girlTree from "@/assets/28-girl-tree-sleeping.png";

interface ChristmasTreeScreenProps {
  onNext: () => void;
}

const ChristmasTreeScreen = ({ onNext }: ChristmasTreeScreenProps) => {
  return (
    <div className="screen-container">
      <FloatingDecorations variant="gifts" />
      
      <div className="flex flex-col items-center justify-center gap-4 animate-slide-up">
        <PinkBox className="text-center max-w-sm">
          <h1 className="text-3xl font-display text-foreground mb-2">
            Pod stromečkem něco je... 🎁
          </h1>
          <p className="text-muted-foreground">
            Ale počkat, to není jen tak obyčejný dárek!
          </p>
        </PinkBox>
        
        <img 
          src={girlTree} 
          alt="Holka u stromečku" 
          className="w-72 h-72 object-contain"
        />
        
        <NavigationArrow onClick={onNext} />
      </div>
    </div>
  );
};

export default ChristmasTreeScreen;
