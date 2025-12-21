import FloatingDecorations from '@/components/FloatingDecorations';
import NavigationArrow from '@/components/NavigationArrow';
import PinkBox from '@/components/PinkBox';
import girlWaving from "@/assets/29-girl-waving.png";

interface FinalMessageScreenProps {
  onNext: () => void;
}

const FinalMessageScreen = ({ onNext }: FinalMessageScreenProps) => {
  return (
    <div className="screen-container">
      <FloatingDecorations variant="full" />
      
      <div className="flex flex-col items-center justify-center gap-6 animate-slide-up">
        <PinkBox className="text-center max-w-sm">
          <h1 className="text-3xl font-display text-foreground mb-4">
            Všechny dárky nalezeny! 🎉
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            Gratuluju, lásko! Zvládla jsi celý hon za pokladem!
          </p>
          <div className="bg-secondary/50 rounded-2xl p-4">
            <p className="text-xl font-display text-primary">
              Miluju tě nejvíc na světě! 💕
            </p>
          </div>
        </PinkBox>
        
        <img 
          src={girlWaving} 
          alt="Holka mává" 
          className="w-48 h-48 object-contain floating"
        />
        
        <NavigationArrow onClick={onNext} />
      </div>
    </div>
  );
};

export default FinalMessageScreen;
