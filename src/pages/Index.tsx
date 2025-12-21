import { useTreasureHunt } from '@/hooks/useTreasureHunt';
import IntroScreen from '@/components/screens/IntroScreen';
import WakeUpScreen from '@/components/screens/WakeUpScreen';
import GoodMorningScreen from '@/components/screens/GoodMorningScreen';
import ChristmasTreeScreen from '@/components/screens/ChristmasTreeScreen';
import RulesScreen from '@/components/screens/RulesScreen';
import SudokuScreen from '@/components/screens/SudokuScreen';
import KitchenClueScreen from '@/components/screens/KitchenClueScreen';
import GiftFoundScreen from '@/components/screens/GiftFoundScreen';
import AnniversaryScreen from '@/components/screens/AnniversaryScreen';
import SisterRoomScreen from '@/components/screens/SisterRoomScreen';
import HowMuchLoveScreen from '@/components/screens/HowMuchLoveScreen';
import LoveSliderScreen from '@/components/screens/LoveSliderScreen';
import GuitarClueScreen from '@/components/screens/GuitarClueScreen';
import FinalMessageScreen from '@/components/screens/FinalMessageScreen';
import TheEndScreen from '@/components/screens/TheEndScreen';

const Index = () => {
  const {
    currentScreen,
    goToScreen,
    goNext,
    validateSudokuAnswer,
    validateAnniversaryAnswer,
  } = useTreasureHunt();

  const renderScreen = () => {
    switch (currentScreen) {
      case 'intro':
        return <IntroScreen onWakeUp={() => goToScreen('wakeUp')} />;
      case 'wakeUp':
        return <WakeUpScreen onNext={goNext} />;
      case 'goodMorning':
        return <GoodMorningScreen onNext={goNext} />;
      case 'christmasTree':
        return <ChristmasTreeScreen onNext={goNext} />;
      case 'rules':
        return <RulesScreen onNext={goNext} />;
      case 'sudoku':
        return (
          <SudokuScreen 
            onCorrect={() => goToScreen('kitchenClue')} 
            validateAnswer={validateSudokuAnswer}
          />
        );
      case 'kitchenClue':
        return <KitchenClueScreen onNext={goNext} />;
      case 'giftFound1':
        return <GiftFoundScreen onNext={goNext} giftNumber={1} />;
      case 'anniversary':
        return (
          <AnniversaryScreen 
            onCorrect={() => goToScreen('sisterRoom')} 
            validateAnswer={validateAnniversaryAnswer}
          />
        );
      case 'sisterRoom':
        return <SisterRoomScreen onNext={goNext} />;
      case 'giftFound2':
        return <GiftFoundScreen onNext={goNext} giftNumber={2} />;
      case 'howMuchLove':
        return <HowMuchLoveScreen onNext={goNext} />;
      case 'loveSlider':
        return <LoveSliderScreen onComplete={() => goToScreen('guitarClue')} />;
      case 'guitarClue':
        return <GuitarClueScreen onNext={goNext} />;
      case 'finalMessage':
        return <FinalMessageScreen />;
      case 'theEnd':
        return <TheEndScreen />;
      default:
        return <IntroScreen onWakeUp={() => goToScreen('wakeUp')} />;
    }
  };

  return (
    <main className="font-body">
      {renderScreen()}
    </main>
  );
};

export default Index;