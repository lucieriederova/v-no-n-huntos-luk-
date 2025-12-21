import FloatingDecorations from '@/components/FloatingDecorations';
import NavigationArrow from '@/components/NavigationArrow';
import PinkBox from '@/components/PinkBox';
import girlSleeping from "@/assets/18-girl-sleeping.png";
import dreamBubble from "@/assets/19-dream-bubble.png";

interface WakeUpScreenProps {
  onNext: () => void;
}

const WakeUpScreen = ({ onNext }: WakeUpScreenProps) => {
  return (
    <div className="screen-container">
      <FloatingDecorations variant="full" />
      
      <div className="flex items-center justify-center gap-4 animate-slide-up">
        <PinkBox className="text-center max-w-md min-h-[400px] flex flex-col items-center justify-end pb-8 relative">
          {/* Dream bubble with couple */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2">
            <img 
              src={dreamBubble} 
              alt="Sen o nás" 
              className="w-48 h-48 object-contain floating"
            />
          </div>
          
          {/* Girl waking up at bottom */}
          <img 
            src={girlSleeping} 
            alt="Holka se probouzí" 
            className="w-48 h-48 object-contain"
          />
        </PinkBox>
        
        <NavigationArrow onClick={onNext} />
      </div>
    </div>
  );
};

export default WakeUpScreen;
