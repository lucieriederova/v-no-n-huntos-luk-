import FloatingDecorations from '@/components/FloatingDecorations';
import PinkBox from '@/components/PinkBox';
import girlTree from "@/assets/28-girl-tree-sleeping.png";
import pinkBow from "@/assets/37-pink-bow.png";

const TheEndScreen = () => {
  return (
    <div className="screen-container">
      <FloatingDecorations variant="full" />
      
      <div className="flex flex-col items-center justify-center gap-6 animate-slide-up">
        <div className="relative">
          <img 
            src={pinkBow} 
            alt="Mašle" 
            className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 object-contain floating"
          />
          <PinkBox className="text-center max-w-sm pt-10">
            <h1 className="text-5xl font-display text-foreground mb-4">
              Veselé Vánoce! 🎄
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              Přeju ti ty nejkrásnější svátky!
            </p>
            <p className="text-lg text-primary font-display">
              S láskou, tvůj přítel 💕
            </p>
          </PinkBox>
        </div>
        
        <img 
          src={girlTree} 
          alt="Holka u stromečku" 
          className="w-64 h-64 object-contain"
        />
        
        <p className="text-muted-foreground text-sm animate-pulse">
          ✨ Konec ✨
        </p>
      </div>
    </div>
  );
};

export default TheEndScreen;
