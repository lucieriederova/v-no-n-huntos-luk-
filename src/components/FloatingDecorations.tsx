import snowflake from "@/assets/20-snowflake.png";
import candy from "@/assets/21-candy.png";
import ornament from "@/assets/22-ornament.png";
import giftPink from "@/assets/23-gift-pink.png";
import giftGreen from "@/assets/24-gift-green.png";
import giftBlue from "@/assets/25-gift-blue.png";
import candyCane from "@/assets/26-candy-cane.png";
import ornamentBlue from "@/assets/27-ornament-blue.png";
import pinkBow from "@/assets/37-pink-bow.png";

interface FloatingDecorationsProps {
  variant?: 'full' | 'minimal' | 'gifts' | 'candy';
}

const FloatingDecorations = ({ variant = 'full' }: FloatingDecorationsProps) => {
  // Dekorace jsou cca 5-8% velikosti obrazovky podle wireframu
  const decorations = {
    full: [
      // Levá strana - horní část (cca 5% od okraje)
      { src: snowflake, className: "top-[5%] left-[3%] w-[6%] min-w-12 aspect-square floating", delay: "0s" },
      { src: candy, className: "top-[8%] left-[12%] w-[5%] min-w-10 aspect-square floating-slow", delay: "0.5s" },
      
      // Pravá strana - horní část
      { src: snowflake, className: "top-[5%] right-[3%] w-[6%] min-w-12 aspect-square floating", delay: "0.3s" },
      { src: candy, className: "top-[10%] right-[12%] w-[5%] min-w-10 aspect-square floating-slow", delay: "0.7s" },
      
      // Levá strana - střed
      { src: ornament, className: "top-[30%] left-[2%] w-[5%] min-w-10 aspect-square floating", delay: "1s" },
      { src: snowflake, className: "top-[45%] left-[8%] w-[6%] min-w-12 aspect-square floating-slow", delay: "0.4s" },
      
      // Pravá strana - střed
      { src: ornamentBlue, className: "top-[35%] right-[5%] w-[5%] min-w-10 aspect-square floating", delay: "1.2s" },
      
      // Levá strana - spodní část
      { src: pinkBow, className: "bottom-[35%] left-[3%] w-[5%] min-w-10 aspect-square floating-slow", delay: "0.6s" },
      { src: giftPink, className: "bottom-[10%] left-[5%] w-[8%] min-w-16 aspect-square floating", delay: "0.2s" },
      
      // Pravá strana - spodní část
      { src: ornament, className: "bottom-[25%] right-[3%] w-[5%] min-w-10 aspect-square floating", delay: "0.8s" },
      { src: giftGreen, className: "bottom-[8%] right-[5%] w-[7%] min-w-14 aspect-square floating-slow", delay: "0.3s" },
    ],
    minimal: [
      { src: snowflake, className: "top-[6%] right-[6%] w-[6%] min-w-10 aspect-square floating", delay: "0s" },
      { src: pinkBow, className: "bottom-[15%] left-[4%] w-[5%] min-w-8 aspect-square floating-slow", delay: "0.5s" },
    ],
    gifts: [
      { src: giftPink, className: "bottom-[12%] left-[4%] w-[10%] min-w-16 aspect-square floating", delay: "0s" },
      { src: giftGreen, className: "bottom-[20%] right-[6%] w-[8%] min-w-14 aspect-square floating-slow", delay: "0.3s" },
      { src: giftBlue, className: "top-[12%] right-[4%] w-[7%] min-w-12 aspect-square floating", delay: "0.6s" },
      { src: pinkBow, className: "top-[8%] left-[6%] w-[6%] min-w-10 aspect-square floating-slow", delay: "0.2s" },
    ],
    candy: [
      { src: candy, className: "top-[8%] left-[4%] w-[6%] min-w-10 aspect-square floating", delay: "0s" },
      { src: candyCane, className: "bottom-[15%] right-[6%] w-[7%] min-w-12 aspect-square floating-slow", delay: "0.4s" },
      { src: candy, className: "top-[33%] right-[4%] w-[5%] min-w-8 aspect-square floating-fast", delay: "0.8s" },
    ],
  };

  const items = decorations[variant];

  return (
    <>
      {items.map((item, index) => (
        <img
          key={index}
          src={item.src}
          alt=""
          className={`absolute pointer-events-none opacity-90 ${item.className}`}
          style={{ animationDelay: item.delay }}
        />
      ))}
    </>
  );
};

export default FloatingDecorations;