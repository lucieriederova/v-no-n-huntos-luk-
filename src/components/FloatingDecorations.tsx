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
  const decorations = {
    full: [
      { src: snowflake, className: "top-4 left-4 w-12 h-12 floating", delay: "0s" },
      { src: candy, className: "top-8 right-6 w-10 h-10 floating-slow", delay: "0.5s" },
      { src: ornament, className: "bottom-20 left-6 w-10 h-10 floating", delay: "1s" },
      { src: giftPink, className: "bottom-32 right-4 w-14 h-14 floating-slow", delay: "0.3s" },
      { src: candyCane, className: "top-1/4 left-2 w-8 h-8 floating-fast", delay: "0.7s" },
      { src: ornamentBlue, className: "top-1/3 right-3 w-9 h-9 floating", delay: "1.2s" },
      { src: pinkBow, className: "bottom-40 left-8 w-10 h-10 floating-slow", delay: "0.4s" },
    ],
    minimal: [
      { src: snowflake, className: "top-6 right-6 w-10 h-10 floating", delay: "0s" },
      { src: pinkBow, className: "bottom-24 left-4 w-8 h-8 floating-slow", delay: "0.5s" },
    ],
    gifts: [
      { src: giftPink, className: "bottom-20 left-4 w-16 h-16 floating", delay: "0s" },
      { src: giftGreen, className: "bottom-32 right-6 w-14 h-14 floating-slow", delay: "0.3s" },
      { src: giftBlue, className: "top-20 right-4 w-12 h-12 floating", delay: "0.6s" },
      { src: pinkBow, className: "top-8 left-6 w-10 h-10 floating-slow", delay: "0.2s" },
    ],
    candy: [
      { src: candy, className: "top-8 left-4 w-10 h-10 floating", delay: "0s" },
      { src: candyCane, className: "bottom-24 right-6 w-12 h-12 floating-slow", delay: "0.4s" },
      { src: candy, className: "top-1/3 right-4 w-8 h-8 floating-fast", delay: "0.8s" },
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
          className={`absolute pointer-events-none opacity-80 ${item.className}`}
          style={{ animationDelay: item.delay }}
        />
      ))}
    </>
  );
};

export default FloatingDecorations;
