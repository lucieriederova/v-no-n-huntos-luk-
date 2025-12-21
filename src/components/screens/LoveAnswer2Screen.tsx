import FloatingDecorations from '@/components/FloatingDecorations';
import PinkBox from '@/components/PinkBox';
import ribbon from "@/assets/36-pink-ribbon.png";
import bow from "@/assets/37-pink-bow.png";
import girlPeekingQuestion from "@/assets/33-girl-peeking-question.png";

interface LoveAnswer2ScreenProps {
  onSelectAnswer: (answer: 'moc' | 'vic') => void;
}

const LoveAnswer2Screen = ({ onSelectAnswer }: LoveAnswer2ScreenProps) => {
  return (
    <div className="screen-container">
      <FloatingDecorations variant="full" />
      
      <div className="flex items-center justify-center gap-4 animate-slide-up">
        <PinkBox className="text-center max-w-md min-h-[300px] flex flex-col items-center justify-center relative">
          {/* Ribbon with bow decoration */}
          <div className="relative w-full flex items-center justify-center mb-8">
            <img 
              src={ribbon} 
              alt="Stuha" 
              className="w-full h-12 object-contain"
            />
            <img 
              src={bow} 
              alt="Mašle" 
              className="absolute w-20 h-20 object-contain"
            />
          </div>
          
          {/* Two answer options */}
          <div className="flex justify-between w-full px-8 mt-4">
            <button
              onClick={() => onSelectAnswer('moc')}
              className="text-2xl font-display text-foreground/70 hover:text-primary transition-colors"
            >
              moooc
            </button>
            <button
              onClick={() => onSelectAnswer('vic')}
              className="text-2xl font-display text-foreground/70 hover:text-primary transition-colors"
            >
              ještě víc!
            </button>
          </div>
        </PinkBox>
        
        <img 
          src={girlPeekingQuestion} 
          alt="Holka nakukuje s otázkou" 
          className="w-40 h-56 object-contain"
        />
      </div>
    </div>
  );
};

export default LoveAnswer2Screen;
