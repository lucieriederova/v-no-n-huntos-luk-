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
      <FloatingDecorations variant="full" />
      
      <div className="flex items-center justify-center gap-4 animate-slide-up">
        <PinkBox className="text-center max-w-lg min-h-[500px] flex items-end justify-center pb-4">
          <img 
            src={girlTree} 
            alt="Holka u stromečku" 
            className="w-full max-w-md object-contain"
          />
        </PinkBox>
        
        <NavigationArrow onClick={onNext} />
      </div>
    </div>
  );
};

export default ChristmasTreeScreen;
