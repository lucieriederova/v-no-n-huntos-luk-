import FloatingDecorations from '@/components/FloatingDecorations';
import NavigationArrow from '@/components/NavigationArrow';
import PinkBox from '@/components/PinkBox';
import girlClapping from "@/assets/35-girl-clapping.png";

const GoodMorningScreen = ({ onNext }: { onNext: () => void }) => {
  return (
    // HLAVNÍ ZMĚNA: w-screen a h-screen zajistí, že dekorace mají prostor
    <div className="relative w-screen h-screen flex flex-col items-center justify-center overflow-hidden bg-[#FFF5F7]">
      
      {/* Dekorace jsou nyní absolutně v rámci celé obrazovky */}
      <FloatingDecorations variant="full" />
      
      {/* Obsah je nad dekoracemi díky z-10 */}
      <div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-4xl px-4">
        <PinkBox 
          className="text-center p-8 shadow-sm" 
          style={{ width: '80%', backgroundImage: 'none', backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
        >
          <h1 className="text-5xl font-display text-[#D14D72] mb-4">helluv my luv...</h1>
          <p className="text-2xl font-body text-[#4A1D1F]/80 italic">
            veselé Vánoce, doufám, že si řádně užíváš s rodinou!
          </p>
          <p className="text-2xl font-body text-[#4A1D1F]/80 italic">
          ps: look at the ornaments on the screen to see lil messages
          </p>
        </PinkBox>
        
        <img 
          src={girlClapping} 
          style={{ width: '70%', height: 'auto', minWidth: '200px' }} 
          className="object-contain animate-bounce-gentle"
        />
        
        <div className="mt-4">
          <NavigationArrow onClick={onNext} />
        </div>
      </div>
    </div>
  );
};

export default GoodMorningScreen;