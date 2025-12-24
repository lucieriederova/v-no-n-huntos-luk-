import FloatingDecorations from '@/components/FloatingDecorations';
import NavigationArrow from '@/components/NavigationArrow';
import PinkBox from '@/components/PinkBox';
import FloatingDog from '@/components/FloatingDog';
import girlWaving from "@/assets/29-girl-waving.png";

interface RulesScreenProps {
  onNext: () => void;
}

const RulesScreen = ({ onNext }: RulesScreenProps) => {
  return (
    <div className="relative w-[100vw] h-[100vh] flex items-center justify-center overflow-hidden bg-[#FFF5F7]">
      
      {/* Dekorace a pejsek na pozadí */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingDecorations variant="full" />
        <FloatingDog />
      </div>
      
      {/* HLAVNÍ KONTEJNER: flex-col zajistí, že šipka bude pod boxem */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-[6vh] w-full max-w-[95%] animate-slide-up">
        
        {/* PINKBOX: Šířka a pozice v procentech */}
        <div className="relative w-[45%]">
          <PinkBox 
            className="relative p-[8%] !overflow-visible shadow-sm flex items-center justify-center"
            style={{ 
              width: '100%', 
              minHeight: '40vh', 
              backgroundColor: 'rgba(255, 255, 255, 0.4)'
            }}
          >
            {/* TEXTOVÁ ČÁST */}
            <div className="w-full flex flex-col gap-[2vh] text-center z-10">
              <p className="text-[1.3vw] font-display text-[#D14D72] uppercase tracking-wide">
                about this gift:
              </p>
              <p className="text-[1.6vw] font-body text-[#4A1D1F]/80 leading-relaxed italic">
                you'll be solving small riddles of sorts, and every time you solve one, 
                i'll give you a clue about where the next gift is hiding.
              </p>
            </div>
            
            {/* HOLČIČKA: Vykukuje zpoza pravého dolního rohu */}
            <img 
              src={girlWaving} 
              alt="Holka mává" 
              style={{ 
                width: '55%', 
                height: 'auto',
                position: 'absolute',
                right: '-25%', 
                bottom: '-20%',
                zIndex: -1, // Skryje se za bílou plochu boxu
                pointerEvents: 'none'
              }}
              className="object-contain drop-shadow-xl"
            />
          </PinkBox>
        </div>
        
        {/* ŠIPKA: Nyní umístěna centrálně pod boxem */}
        <div className="z-30 pointer-events-auto transition-transform hover:scale-110 active:scale-95">
          <NavigationArrow onClick={onNext} />
        </div>
        
      </div>
    </div>
  );
};

export default RulesScreen;