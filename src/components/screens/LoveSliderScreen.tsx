import { useState } from 'react';
import FloatingDecorations from '@/components/FloatingDecorations';
import PinkBox from '@/components/PinkBox';
import NavigationArrow from '@/components/NavigationArrow';
import { Slider } from '@/components/ui/slider';
import girlClapping from "@/assets/35-girl-clapping.png";
import FloatingDog from '../FloatingDog';

interface LoveSliderScreenProps {
  onComplete: () => void;
}

const LoveSliderScreen = ({ onComplete }: LoveSliderScreenProps) => {
    const [sliderValue, setSliderValue] = useState([0]);
    const isMaxed = sliderValue[0] >= 100;

    return (
      <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden bg-[#FFF5F7]">
        {/* Dekorace na pozadí mají pointer-events-none v základu, ale raději zkontroluj */}
        <FloatingDecorations variant="full" />
        <FloatingDog />
        
        <div className="relative z-10 flex flex-row items-center justify-center gap-[5%] w-full max-w-6xl px-8 animate-slide-up">
          
          <PinkBox 
            className="relative text-center flex flex-col items-center justify-center px-10 !overflow-visible shadow-sm"
            style={{ 
              width: '45%', 
              minHeight: '400px', 
              backgroundImage: 'none', 
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
              // Přidáno pro jistotu, aby box neblokoval okolí
              pointerEvents: 'auto'
            }}
          >
            <h2 className="text-3xl font-display text-[#D14D72] mb-12">
              how much do i loooove you?
            </h2>
            
            <div className="w-full mb-8">
              <Slider
                value={sliderValue}
                onValueChange={setSliderValue}
                max={100}
                step={1}
                className="w-full cursor-pointer"
              />
            </div>
            
            <div className="flex justify-between w-full text-xl font-display text-[#4A1D1F]/60">
              <span>moooc</span>
              <span className={isMaxed ? "text-[#D14D72] font-bold animate-pulse" : ""}>nejvíc!</span>
            </div>

            {/* HOLČIČKA: Vykukuje z boxu */}
            {isMaxed && (
              <img 
                src={girlClapping} 
                alt="Holka tleská" 
                style={{ 
                  width: '60%', 
                  height: 'auto',
                  position: 'absolute',
                  right: '-30%', 
                  bottom: '-10%',
                  pointerEvents: 'none' // Aby obrázek neblokoval klikání na šipku pod ním
                }}
                className="object-contain z-20 drop-shadow-xl animate-bounce-gentle"
              />
            )}
          </PinkBox>
          
          {/* ŠIPKA: Přidán explicitní pointer-events a vyšší z-index */}
          <div className="flex-shrink-0 z-50 min-w-[100px] relative pointer-events-auto">
            {isMaxed && (
              <div className="cursor-pointer transition-transform hover:scale-110 active:scale-95">
                <NavigationArrow onClick={onComplete} />
              </div>
            )}
          </div>

        </div>
      </div>
    );
};

export default LoveSliderScreen;