import FloatingDecorations from '@/components/FloatingDecorations';
import FloatingDog from '@/components/FloatingDog';
import girlJumping from "@/assets/34-girl-jumping.png";

const FinalMessageScreen = () => {
  return (
    // Celá obrazovka v procentech
    <div className="relative w-[100vw] h-[100vh] flex items-center justify-center overflow-hidden bg-[#FFF5F7]">
      
      {/* Dekorace a pejsek na pozadí */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingDecorations variant="full" />
        <FloatingDog />
      </div>
      
      {/* HLAVNÍ OBSAH: Bez PinkBoxu, vše v procentech */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-[90%] animate-slide-up">
        
        {/* LEVITUJÍCÍ KONTEJNER (Text + Holčička) */}
        <div className="relative w-[60%] flex flex-col items-center justify-center animate-float">
          
          {/* HORNÍ TEXT: Responzivní velikost v % */}
          <div className="text-center mb-[4%]">
            <p className="text-[2.2vw] font-display text-[#D14D72] leading-relaxed">
              i hope you liked the gifts
            </p>
            <p className="text-[2.2vw] font-display text-[#D14D72]">
              love you
            </p>
          </div>

          {/* HOLČIČKA: Skákající postava s levitací a stínem */}
          <div className="w-full flex justify-center items-center mb-[6%]">
            <img 
              src={girlJumping} 
              alt="Nadšená holka" 
              className="w-[90%] h-auto object-contain"
              style={{ filter: 'drop-shadow(0 3vw 5vw rgba(251, 204, 231, 0.7))' }}
            />
          </div>
          
          {/* PS TEXT: Spodní text v % */}
          <p className="text-[1.3vw] font-display text-[#4A1D1F]/60 uppercase tracking-widest text-center">
            ps: I AM SO EXCITED FOR HUGGIES AND KISSES
          </p>
          
        </div>
      </div>

      {/* Definice plynulé levitace pro celou scénu */}
      <style>{`
        @keyframes floatFinal {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5vh); }
        }
        .animate-float {
          animation: floatFinal 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default FinalMessageScreen;