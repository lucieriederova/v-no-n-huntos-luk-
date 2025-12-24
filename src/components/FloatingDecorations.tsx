import { useState } from 'react';
import snowflake from "@/assets/20-snowflake.png";
import candy from "@/assets/21-candy.png";
import ornament from "@/assets/22-ornament.png";
import candyCane from "@/assets/26-candy-cane.png";
import pinkBow from "@/assets/37-pink-bow.png";
import giftPink from "@/assets/23-gift-pink.png";
import ornamentBlue from "@/assets/27-ornament-blue.png";

const FloatingDecorations = ({ variant = 'full' }: { variant?: string }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const decorations: any = {
    full: [
      { src: snowflake, top: '5%', left: '3%', anim: 'animate-slow-float', text: 'i am sending you snooow' },
      { src: candy, top: '25%', left: '8%', anim: 'animate-slow-sway', text: 'merry christmas!' },
      { src: ornament, top: '45%', left: '2%', anim: 'animate-slow-float', text: 'sedning loove' },
      { src: giftPink, bottom: '20%', left: '10%', anim: 'animate-slow-sway', text: 'sending kisseeesss' },
      { src: pinkBow, bottom: '2%', left: '2%', anim: 'animate-slow-float', text: 'also sending huggiiees' },
      { src: snowflake, top: '8%', right: '4%', anim: 'animate-slow-sway', text: 'um... sending more snow?' },
      { src: candyCane, top: '28%', right: '7%', anim: 'animate-slow-float', text: 'pssst... do you know i love you?' },
      { src: ornamentBlue, top: '48%', right: '3%', anim: 'animate-slow-sway', text: 'i am excited to seee youuuu!!!' },
      { src: candy, bottom: '25%', right: '12%', anim: 'animate-slow-float', text: 'you are my pretty boyyyy!' },
      { src: giftPink, bottom: '5%', right: '5%', anim: 'animate-slow-sway', text: 'omg i am so excited about the gift, i hope youll like them.' },
    ],
    candy: [
      { src: candy, top: '10%', left: '5%', anim: 'animate-slow-float', text: 'you are my pretty boyyyy!' },
      { src: candyCane, top: '15%', right: '10%', anim: 'animate-slow-sway', text: 'pssst... do you know i love you?' },
      { src: candy, top: '40%', left: '12%', anim: 'animate-slow-float', text: 'you are my prettiest boyyyy!' },
      { src: pinkBow, bottom: '5%', right: '5%', anim: 'animate-slow-sway', text: 'Mašlička' },
    ],
    minimal: [
      { src: snowflake, top: '5%', right: '5%', anim: 'animate-slow-float', text: 'i am sending you snooow' },
      { src: pinkBow, bottom: '5%', left: '5%', anim: 'animate-slow-sway', text: 'also sending huggiiees' },
      { src: candy, top: '20%', left: '10%', anim: 'animate-slow-float', text: 'you are my pretty boyyyy!' },
    ]
  };

  const items = decorations[variant] || decorations.minimal;

  return (
    <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
      {items.map((item: any, index: number) => (
        <div
          key={index}
          className={`absolute transition-all duration-700 ${hoveredIndex === index ? '' : item.anim}`}
          style={{ 
            width: item.src === pinkBow ? '22%' : '10%', 
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
            zIndex: hoveredIndex === index ? 50 : 1,
            pointerEvents: 'auto'
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Obrázek dekorace [cite: 20, 21, 22, 23, 24, 25, 26, 27] */}
          <img
            src={item.src}
            className={`w-full h-auto transition-all duration-500 ${
              hoveredIndex === index ? 'brightness-110 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] scale-110' : 'opacity-90'
            }`}
          />
          
          {/* Bublina s textem */}
          {hoveredIndex === index && item.text && (
            <div className="absolute top-[-45px] left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-4 py-1 rounded-full border border-pink-100 shadow-xl z-[60] animate-in fade-in zoom-in duration-200">
              <span className="text-[#D14D72] text-[1.1vw] font-display whitespace-nowrap">
                {item.text}
              </span>
            </div>
          )}
        </div>
      ))}

      <style>{`
        @keyframes slowFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes slowSway {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(10px, -10px) rotate(5deg); }
        }
        .animate-slow-float {
          animation: slowFloat 7s ease-in-out infinite;
        }
        .animate-slow-sway {
          animation: slowSway 9s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default FloatingDecorations;