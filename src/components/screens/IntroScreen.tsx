import FloatingDecorations from '@/components/FloatingDecorations';
import girlSleeping from "@/assets/18-girl-sleeping.png";
import FloatingDog from '@/components/FloatingDog';

interface IntroScreenProps {
  onWakeUp: () => void;
}

const IntroScreen = ({ onWakeUp }: IntroScreenProps) => {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden bg-[#FFF5F7]">
      
      {/* Dekorace na pozadí */}
      <div className="absolute inset-0 z-0">
        <FloatingDecorations variant="full" />
        <FloatingDog />
      </div>
      
      {/* HLAVNÍ OBSAH - gap zmenšen na 2% pro větší blízkost */}
      <div className="relative z-10 flex items-center justify-center gap-[1%] w-full max-w-7xl px-[5%]">
        
        {/* LEVITUJÍCÍ HOLČIČKA */}
        <div className="relative w-[90%] flex justify-center items-center">
            <img 
              src={girlSleeping} 
              alt="Spící holka" 
              className="w-full h-auto object-contain animate-float"
              style={{ filter: 'drop-shadow(0 20px 30px rgba(251, 204, 231, 0.5))' }}
            />
        </div>
        
        {/* TLAČÍTKO - upravené na procenta a blíže k postavě */}
        <button
          onClick={onWakeUp}
          className="
            bg-gradient-to-b from-white/95 to-pink-100/95
            backdrop-blur-sm
            rounded-full font-display
            text-[#D14D72] shadow-xl hover:shadow-2xl
            transition-all duration-300 
            hover:scale-110 active:scale-95
            border-2 border-pink-200
            whitespace-nowrap
            z-20
            flex items-center justify-center
          "
          /* Velikost buttonu v procentech šířky obrazovky */
          style={{ 
            fontSize: '1.3vw',
            width: '10%', 
            height: 'auto',
            aspectRatio: '1 / 1', 
            padding: '2%'
          }} 
        >
          wake me up
        </button>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3vh); } /* Levitace v závislosti na výšce okna */
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default IntroScreen;