import { useState, useEffect } from 'react';
import dogwalking from "@/assets/dogwalking.png";
import dogrunning from "@/assets/dogrunning.png";
import frolicingdog from "@/assets/frolicingdog.png";
import presentdog from "@/assets/presentdog.png";
import balldog from "@/assets/balldog.png";
import sockdog from "@/assets/sockdog.png";


const FloatingDog = () => {
  // Definujeme 4 pozice po obvodu obrazovky
  const positions = [
    { id: 1, src: dogwalking, style: { bottom: '5%', left: '10%', right: 'auto', top: 'auto' }, text: 'už jdeme na procházkuu??' },
    { id: 5, src: balldog, style: { top: '5%', right: '40%', left: 'auto', bottom: 'auto' }, text: 'i want hruškaa not a ball!' },
    { id: 2, src: dogrunning, style: { top: '15%', right: '10%', left: 'auto', bottom: 'auto' }, text: 'snííh!!!!' },
    { id: 6, src: sockdog, style: { bottom: '40%', left: '2%', right: 'auto', top: 'auto' }, text: 'no touchie i am eeping now' },
    { id: 4, src: dogrunning, style: { bottom: '15%', right: '20%', left: 'auto', top: 'auto' }, text: 'hugggiiieees!!' },
    { id: 7, src: presentdog, style: { bottom: '2%', left: '45%', right: 'auto', top: 'auto' }, text: 'to jsem nesnědla jááá' },
    { id: 3, src: dogwalking, style: { top: '5%', left: '20%', right: 'auto', bottom: 'auto' }, text: 'kam jdeeeeš??' },
    { id: 8, src: frolicingdog, style: { top: '35%', left: '25%', right: 'auto', bottom: 'auto' }, text: 'wake uuup!! i wan a walkieee hooman!' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Interval pro změnu pozice (např. každých 8 sekund)
    const interval = setInterval(() => {
      setIsVisible(false); // Nejdřív pejska schováme
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % positions.length); // Změníme pozici
        setIsVisible(true); // Zase ho ukážeme
      }, 500); // 1 sekunda pauza na zmizení

    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentDog = positions[currentIndex];

  return (
    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden w-full h-full">
      <div
        className={`absolute transition-all duration-1000 ease-in-out pointer-events-auto
          ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
        style={{ 
          width: '15%', 
          ...currentDog.style 
        }}
      >
        {/* Obrázek pejska s jemnou animací chůze/běhu */}
        <img
          src={currentDog.src}
          alt="Pejsek"
          className="w-full h-auto animate-gentle-wag"
          style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.15))' }}
        />
        
        {/* Bublina u pejska, která se objeví jen když je vidět */}
        {isVisible && (
          <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full border border-pink-200 shadow-md">
            <span className="text-[#D14D72] text-[1.1vw] font-display whitespace-nowrap">
              {currentDog.text}
            </span>
          </div>
        )}
      </div>

      <style>{`
        @keyframes gentleWag {
          0%, 100% { transform: rotate(-2deg) translateY(0); }
          50% { transform: rotate(2deg) translateY(-5px); }
        }
        .animate-gentle-wag {
          animation: gentleWag 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default FloatingDog;