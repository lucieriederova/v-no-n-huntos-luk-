import FloatingDecorations from '@/components/FloatingDecorations';
import NavigationArrow from '@/components/NavigationArrow';
import PinkBox from '@/components/PinkBox';
import ribbon from "@/assets/36-pink-ribbon.png";

interface LoveAnswer1ScreenProps {
  onNext: () => void;
}

const LoveAnswer1Screen = ({ onNext }: LoveAnswer1ScreenProps) => {
  return (
    <div className="screen-container">
      <FloatingDecorations variant="minimal" />
      
      <div className="flex flex-col items-center justify-center gap-6 animate-slide-up">
        <PinkBox className="text-center max-w-sm">
          <h1 className="text-5xl font-display text-foreground mb-4">
            moooc... 💕
          </h1>
        </PinkBox>
        
        <img 
          src={ribbon} 
          alt="Mašle" 
          className="w-48 h-24 object-contain floating"
        />
        
        <NavigationArrow onClick={onNext} />
      </div>
    </div>
  );
};

export default LoveAnswer1Screen;
