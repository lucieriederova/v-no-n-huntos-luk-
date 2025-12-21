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
          {/* Dream bubble with couple - cca 40% šířky boxu */}
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[55%]">
            <img 
              src={dreamBubble} 
              alt="Sen o nás" 
              className="w-full object-contain floating"
            />
          </div>
          
          {/* Two sleeping girls at bottom - každá cca 35% šířky boxu */}
          <div className="flex items-end justify-center gap-2 w-full">
            <img 
              src={girlSleeping} 
              alt="Spící holka 1" 
              className="w-[40%] object-contain"
            />
            <img 
              src={girlSleeping} 
              alt="Spící holka 2" 
              className="w-[40%] object-contain -scale-x-100"
            />
          </div>
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