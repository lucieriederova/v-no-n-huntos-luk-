import FloatingDecorations from '@/components/FloatingDecorations';
import NavigationArrow from '@/components/NavigationArrow';
import PinkBox from '@/components/PinkBox';
import girlClapping from "@/assets/35-girl-clapping.png";
import FloatingDog from '@/components/FloatingDog';

interface GuitarClueScreenProps {
  onNext: () => void;
}

const GuitarClueScreen = ({ onNext }: GuitarClueScreenProps) => {
  return (
    <div className="screen-container">
      <FloatingDecorations variant="full" />
      <FloatingDog/>
      
      <div className="flex flex-col items-center justify-center gap-4 animate-slide-up">
        <PinkBox className="text-center max-w-md">
          <p className="text-2xl font-display text-foreground/70 leading-relaxed mb-6">
            your last gift is behind the guitar covers in our room
          </p>
          
          <img 
            src={girlClapping} 
            alt="Nadšená holka" 
            style={{ 
              width: '200%', 
              height: 'auto'
            }}
            className="object-contain relative z-10"
          />
        </PinkBox>
        
        <NavigationArrow onClick={onNext} />
      </div>
    </div>
  );
};

export default GuitarClueScreen;
