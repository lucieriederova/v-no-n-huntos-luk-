import FloatingDecorations from '@/components/FloatingDecorations';
import girlSleeping from "@/assets/18-girl-sleeping.png";
import dreamBubble from "@/assets/19-dream-bubble.png";

interface IntroScreenProps {
  onWakeUp: () => void;
}

const IntroScreen = ({ onWakeUp }: IntroScreenProps) => {
  return (
    <div className="screen-container">
      <FloatingDecorations variant="minimal" />
      
      <div className="relative flex flex-col items-center justify-center animate-fade-in">
        {/* Dream bubble */}
        <div className="absolute -top-16 right-0 floating-slow">
          <img 
            src={dreamBubble} 
            alt="Sen" 
            className="w-24 h-24 object-contain"
          />
        </div>
        
        {/* Sleeping girl */}
        <img 
          src={girlSleeping} 
          alt="Spící holka" 
          className="w-64 h-64 object-contain mb-8"
        />
        
        {/* Wake up button */}
        <button
          onClick={onWakeUp}
          className="
            bg-primary text-primary-foreground 
            px-8 py-4 rounded-full text-xl font-display
            shadow-lg hover:shadow-xl
            transition-all duration-300 
            hover:scale-105 active:scale-95
            animate-bounce
          "
        >
          Probuď mě! 💕
        </button>
      </div>
    </div>
  );
};

export default IntroScreen;
