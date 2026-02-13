import { useEffect, useRef, useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import CabinetLayout from './layouts/CabinetLayout';
import LevelOne from './levels/LevelOne';
import LevelTwo from './levels/LevelTwo';
import LevelThree from './levels/LevelThree';
import LevelFour from './levels/LevelFour';
import LevelFive from './levels/LevelFive';
import retroTheme from './theme/retroTheme';
import LevelSix from './levels/LevelSix';
import HelloKittyTheme from './assets/hello-kitty-theme.mp3';

function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryPlay = () => {
      audio.play().catch(() => {
        // ignore autoplay errors; user interaction will retry
      });
    };

    tryPlay();

    window.addEventListener('click', tryPlay, { once: true });

    return () => {
      window.removeEventListener('click', tryPlay);
    };
  }, []);

  return <audio ref={audioRef} src={HelloKittyTheme} loop />;
}

function App() {
  const gameAreaRef = useRef(null);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [money, setMoney] = useState(0);

  return (
    <ThemeProvider theme={retroTheme}>
      <CssBaseline />
      <BackgroundMusic />
      <CabinetLayout gameAreaRef={gameAreaRef}>
        {currentLevel === 1 && (
          <LevelOne
            gameAreaRef={gameAreaRef}
            onBeginDate={() => {
              setCurrentLevel(2);
            }}
          />
        )}
        {currentLevel === 2 && (
          <LevelTwo
            onNextLevel={() => {
              setCurrentLevel(3);
            }}
          />
        )}
        {currentLevel === 3 && (
          <LevelThree
            onComplete={() => {
              setCurrentLevel(4);
            }}
          />
        )}
        {currentLevel === 4 && (
          <LevelFour
            onNextLevel={(finalMoney) => {
              setMoney(finalMoney);
              setCurrentLevel(5);
            }}
          />
        )}
        {currentLevel === 5 && (
          <LevelFive
            balance={money}
            onComplete={(balanceAfterDrive) => {
              setMoney(balanceAfterDrive);
              setCurrentLevel(6);
            }}
          />
        )}
        {currentLevel === 6 && <LevelSix balance={money} />}
      </CabinetLayout>
    </ThemeProvider>
  );
}

export default App;
