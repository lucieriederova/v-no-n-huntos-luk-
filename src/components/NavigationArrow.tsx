import arrowImg from "@/assets/31-pink-arrow.png";

interface NavigationArrowProps {
  onClick: () => void;
  direction?: 'left' | 'right';
  className?: string;
}

const NavigationArrow = ({ onClick, direction = 'right', className = '' }: NavigationArrowProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        transition-all duration-300 hover:scale-110 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-full
        ${className}
      `}
    >
      <img
        src={arrowImg}
        alt={direction === 'right' ? 'Další' : 'Zpět'}
        className={`w-20 h-12 object-contain ${direction === 'left' ? 'rotate-180' : ''}`}
      />
    </button>
  );
};

export default NavigationArrow;
