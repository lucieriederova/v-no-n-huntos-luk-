import FloatingDecorations from '@/components/FloatingDecorations';
import NavigationArrow from '@/components/NavigationArrow';
import PinkBox from '@/components/PinkBox';
import girlStanding from "@/assets/29-girl-waving.png";

interface HowMuchLoveScreenProps {
  onNext: () => void;
}

const HowMuchLoveScreen = ({ onNext }: HowMuchLoveScreenProps) => {
  return (
    // Celá obrazovka v procentech
    <div className="relative w-[100vw] h-[100vh] flex items-center justify-center overflow-hidden bg-[#FFF5F7]">
      
      {/* Dekorace na pozadí */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingDecorations variant="full" />
      </div>
      
      {/* HLAVNÍ LAYOUT: Mezera mezi boxem a šipkou v procentech */}
      <div className="relative z-10 flex items-center justify-center gap-[5%] w-full max-w-[90%] animate-slide-up">
        
        {/* RŮŽOVÝ BOX: Šířka nastavena na 45% šířky kontejneru */}
        <div className="relative w-[45%]">
          <PinkBox 
            className="relative text-center flex items-center justify-center px-[8%] !overflow-visible shadow-sm"
            style={{ 
              width: '100%', 
              minHeight: '45vh', // Výška v procentech výšky okna
              backgroundColor: 'rgba(255, 255, 255, 0.4)' 
            }}
          >
            <h1 className="text-[2.2vw] font-display text-[#D14D72] leading-tight">
              how much do i loooove you?
            </h1>

            {/* HOLČIČKA: Vykukuje zpoza boxu, velikost i pozice v % */}
            <img 
              src={girlStanding} 
              alt="Holka mává" 
              style={{ 
                width: '100%', // Šířka relativně k PinkBoxu
                height: 'auto',
                position: 'absolute',
                right: '-60%', // Posun vpravo ven v %
                bottom: '-60%', // Posun dolů přes hranu v %
                zIndex: -1,     // Skryje se za box
                pointerEvents: 'none' // Myš "proteče" skrz postavu
              }}
              className="object-contain drop-shadow-md"
            />
          </PinkBox>
        </div>

        {/* ŠIPKA: Velikost kontejneru v % */}
        <div className="w-[10%] z-30 relative pointer-events-auto flex justify-center">
          <NavigationArrow onClick={onNext} />
        </div>
      </div>
    </div>
  );
};

export default HowMuchLoveScreen;