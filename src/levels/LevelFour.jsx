import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import CapybaraSleep from '../assets/capybara-sleep.jpg';
import LizardGym from '../assets/lizard-gym.jpeg';
import OtterCar from '../assets/otter-car.jpeg';
import SealCar from '../assets/seal-car.webp';

function LevelFour({ onNextLevel }) {
  const [money, setMoney] = useState(0);
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastChoice, setLastChoice] = useState(null);
  const [lastCorrect, setLastCorrect] = useState(null);
  const [moneyFlashRed, setMoneyFlashRed] = useState(false);
  const [finished, setFinished] = useState(false);

  const animals = [
    { id: 1, image: LizardGym, correct: 'max' },
    { id: 2, image: CapybaraSleep, correct: 'akasha' },
    { id: 3, image: SealCar, correct: 'max' },
    { id: 4, image: OtterCar, correct: 'akasha' }
  ];

  const currentAnimal = animals[currentIndex] ?? animals[animals.length - 1];

  const handleStart = () => {
    setStarted(true);
    setFinished(false);
    setCurrentIndex(0);
  };

  const handleChoice = (choice) => {
    if (!started || finished) return;

    const correct = choice === currentAnimal.correct;
    setLastChoice(choice);
    setLastCorrect(correct);

    if (correct) {
      setMoney((prev) => prev + 200);
    } else {
      setMoneyFlashRed(true);
    }

    setTimeout(() => {
      setLastChoice(null);
      setLastCorrect(null);
      setMoneyFlashRed(false);
      setCurrentIndex((prev) => {
        const next = prev + 1;
        if (next >= animals.length) {
          setFinished(true);
          return prev;
        }
        return next;
      });
    }, 500);
  };

  return (
    <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 8,
          left: 12
        }}
      >
        <Typography variant="h6">The Zoo</Typography>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: 8,
          right: 12
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: moneyFlashRed ? '#ff4b4b' : '#6eff6e',
            fontWeight: 700,
            transition: 'color 150ms linear'
          }}
        >
          ${money}
        </Typography>
      </Box>

      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 3,
          pb: 8,
          textAlign: 'center'
        }}
      >
        {!started && !finished && (
          <Button variant="contained" color="primary" onClick={handleStart}>
            Lets look at the animals
          </Button>
        )}

        {started && !finished && (
          <Box
            sx={{
              width: 500,
              height: 300,
              border: '3px dashed #f5b7cc',
              bgcolor: '#2b0b17',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img
              src={currentAnimal.image}
              alt="Cute animal"
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
            />
          </Box>
        )}

        {finished && (
          <>
            <Typography variant="body1">
              Literally us when we are at the zoo looking at animals on a date because we love each other lots and its
              literally us we are max and akasha
            </Typography>
            {onNextLevel && (
              <Button
                sx={{ mt: 3 }}
                variant="contained"
                color="primary"
                onClick={() => {
                  onNextLevel(money);
                }}
              >
                Dinner time?
              </Button>
            )}
          </>
        )}
      </Box>

      {started && !finished && (
        <Box
          sx={{
            position: 'absolute',
            bottom: 10,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            gap: 2
          }}
        >
          <Button
            variant="contained"
            onClick={() => handleChoice('max')}
            sx={{
              minWidth: 140,
              bgcolor: lastChoice === 'max' ? (lastCorrect ? '#2e7d32' : '#c62828') : 'primary.main',
              '&:hover': {
                bgcolor: lastChoice === 'max' ? (lastCorrect ? '#1b5e20' : '#8e0000') : 'primary.dark'
              }
            }}
          >
            Literally Max
          </Button>
          <Button
            variant="contained"
            onClick={() => handleChoice('akasha')}
            sx={{
              minWidth: 140,
              bgcolor: lastChoice === 'akasha' ? (lastCorrect ? '#2e7d32' : '#c62828') : 'primary.main',
              '&:hover': {
                bgcolor: lastChoice === 'akasha' ? (lastCorrect ? '#1b5e20' : '#8e0000') : 'primary.dark'
              }
            }}
          >
            Literally Akasha
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default LevelFour;
