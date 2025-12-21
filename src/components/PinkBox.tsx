import { ReactNode } from 'react';

interface PinkBoxProps {
  children: ReactNode;
  className?: string;
}

const PinkBox = ({ children, className = '' }: PinkBoxProps) => {
  return (
    <div className={`pink-box animate-fade-in ${className}`}>
      {children}
    </div>
  );
};

export default PinkBox;
