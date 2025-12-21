import { useState } from 'react';
import FloatingDecorations from '@/components/FloatingDecorations';
import PinkBox from '@/components/PinkBox';
import NavigationArrow from '@/components/NavigationArrow';
import { Slider } from '@/components/ui/slider';
import girlClapping from "@/assets/35-girl-clapping.png";

interface LoveSliderScreenProps {
  onComplete: () => void;
}

const LoveSliderScreen = ({ onComplete }: LoveSliderScreenProps) => {
  const [sliderValue, setSliderValue] = useState([0]);
  const isMaxed = sliderValue[0] >= 100;

  return (
    <div className="screen-container">
      <FloatingDecorations variant="full" />
      
      <div className="flex items-center justify-center gap-4 animate-slide-up">
        <PinkBox className="text-center max-w-md min-h-[350px] flex flex-col items-center justify-center px-8">
          <h2 className="text-2xl font-display text-foreground/80 mb-8">
            JAK MOC TĚ MÁM RÁDA?
          </h2>
          
          {/* Slider - musí být nastavený na maximum */}
          <div className="w-full mb-6">
            <Slider
              value={sliderValue}
              onValueChange={setSliderValue}
              max={100}
              step={1}
              className="w-full"
            />
          </div>
          
          <div className="flex justify-between w-full text-lg font-display text-foreground/60">
            <span>moooc</span>
            <span className={isMaxed ? "text-primary font-bold" : ""}>ještě víc!</span>
          </div>
          
          {!isMaxed && (
            <p className="text-sm text-foreground/50 mt-4 italic">
              Posuň na maximum...
            </p>
          )}
        </PinkBox>
        
        {isMaxed && (
          <>
            <img 
              src={girlClapping} 
              alt="Holka tleská" 
              className="w-[15%] min-w-32 object-contain"
            />
            <NavigationArrow onClick={onComplete} />
          </>
        )}
      </div>
    </div>
  );
};

export default LoveSliderScreen;