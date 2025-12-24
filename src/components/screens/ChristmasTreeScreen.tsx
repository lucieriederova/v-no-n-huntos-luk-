import FloatingDecorations from '@/components/FloatingDecorations';
import NavigationArrow from '@/components/NavigationArrow';
import FloatingDog from '@/components/FloatingDog';
import girlTree from "@/assets/28-girl-tree-sleeping.png";

interface ChristmasTreeScreenProps {
  onNext: () => void;
}

const ChristmasTreeScreen = ({ onNext }: ChristmasTreeScreenProps) => {
  return (
    <div className="relative w-[100vw] h-[100vh] flex items-center justify-center overflow-hidden bg-[#FFF5F7]">
      
      {/* Dekorace na pozadí */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingDecorations variant="full" />
        <FloatingDog/>
      </div>
      
      {/* HLAVNÍ LAYOUT: Rozšířený kontejner pro větší prostor */}
      <div className="relative z-10 flex items-center justify-center gap-[3%] w-full max-w-[98%] px-[2%] animate-slide-up">
        
        {/* VĚTŠÍ VYTYČENÝ PROSTOR PRO POSTAVU A TEXT (nyní 60% šířky) */}
        <div className="relative w-[60%] flex flex-col items-center justify-center min-h-[80vh]">
          
          {/* TEXT: Větší mezera a responzivní velikost */}
          <div className="mb-[10%] animate-float-delayed">
            <p className="text-[1.5vw] font-body text-[#D14D72] italic text-center drop-shadow-sm leading-relaxed">
              i am most of the time very sleepy and i miss youuuu
            </p>
            <p className="text-[1.5vw] font-body text-[#D14D72] italic text-center drop-shadow-sm leading-relaxed">
              i am so excited about the giftos and mostly about seeing youuu!!
            </p>
          </div>

          {/* HOLČIČKA: Ve velkém prostoru s plynulým pohybem */}
          <div className="w-full flex justify-center items-center">
            <img 
              src={girlTree} 
              alt="Holka u stromečku" 
              className="w-[100%] h-auto object-contain animate-float"
              style={{ 
                filter: 'drop-shadow(0 3vw 5vw rgba(251, 204, 231, 0.7))',
                maxHeight: '60vh' // Zajištění, aby postava nepřerostla výšku okna
              }}
            />
          </div>
        </div>
        
        {/* ŠIPKA: Menší mezera, aby šipka neutíkala z obrazovky */}
        <div className="w-[10%] flex justify-center z-30 pointer-events-auto">
          <NavigationArrow onClick={onNext} />
        </div>
      </div>

      {/* DEFINICE VELKORYSÉ LEVITACE */}
      <style>{`
        @keyframes floatLarge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6vh); } /* Větší rozsah pohybu nahoru/dolů */
        }
        .animate-float {
          animation: floatLarge 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: floatLarge 6s ease-in-out infinite;
          animation-delay: 0.8s;
        }
      `}</style>
    </div>
  );
};

export default ChristmasTreeScreen;