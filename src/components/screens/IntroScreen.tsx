import FloatingDecorations from '@/components/FloatingDecorations';
import PinkBox from '@/components/PinkBox';
import girlSleeping from "@/assets/18-girl-sleeping.png";
import dreamBubble from "@/assets/19-dream-bubble.png";

interface IntroScreenProps {
  onWakeUp: () => void;
}

const IntroScreen = ({ onWakeUp }: IntroScreenProps) => {
  return (
    <div className="screen-container">
      <FloatingDecorations variant="full" />
      
      <div className="flex items-center justify-center gap-4 animate-fade-in">
        <PinkBox className="text-center max-w-md min-h-[400px] flex flex-col items-center justify-end pb-8 relative">
          {/* Dream bubble with couple */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2">
            <img 
              src={dreamBubble} 
              alt="Sen o nás" 
              className="w-48 h-48 object-contain floating"
            />
          </div>
          
          {/* Sleeping girl at bottom */}
          <img 
            src={girlSleeping} 
            alt="Spící holka" 
            className="w-48 h-48 object-contain"
          />
        </PinkBox>
        
        {/* Wake me up button on the right side */}
        <button
          onClick={onWakeUp}
          className="
            bg-gradient-to-b from-white/80 to-pink-100/80
            backdrop-blur-sm
            px-6 py-4 rounded-full text-lg font-display
            text-primary shadow-lg hover:shadow-xl
            transition-all duration-300 
            hover:scale-105 active:scale-95
            border border-primary/20
          "
        >
          wake me up
        </button>
      </div>
    </div>
  );
};

export default IntroScreen;
