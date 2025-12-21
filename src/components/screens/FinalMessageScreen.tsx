import FloatingDecorations from '@/components/FloatingDecorations';
import PinkBox from '@/components/PinkBox';
import girlJumping from "@/assets/34-girl-jumping.png";

const FinalMessageScreen = () => {
  return (
    <div className="screen-container">
      <FloatingDecorations variant="full" />
      
      <div className="flex flex-col items-center justify-center gap-4 animate-slide-up">
        <PinkBox className="text-center max-w-md">
          <p className="text-2xl font-display text-foreground/70 leading-relaxed mb-4">
            i hope you liked the gifts
          </p>
          <p className="text-2xl font-display text-foreground/70 mb-6">
            love you
          </p>
          
          <img 
            src={girlJumping} 
            alt="Nadšená holka" 
            className="w-40 h-40 object-contain mx-auto mb-6"
          />
          
          <p className="text-xl font-display text-foreground/70 uppercase">
            ps: I AM SO EXCITED FOR HUGGIES AND KISSES
          </p>
        </PinkBox>
      </div>
    </div>
  );
};

export default FinalMessageScreen;
