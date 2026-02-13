import { useRef, useState } from 'react';
import { Button, Typography } from '@mui/material';

function LevelOne({ gameAreaRef, onBeginDate }) {
  const noButtonRef = useRef(null);
  const [noButtonPosition, setNoButtonPosition] = useState(null);
  const [accepted, setAccepted] = useState(false);

  const moveNoButton = () => {
    const gameArea = gameAreaRef.current;
    const noButton = noButtonRef.current;

    if (!gameArea || !noButton) {
      return;
    }

    const areaWidth = gameArea.clientWidth;
    const areaHeight = gameArea.clientHeight;
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;
    const padding = 12;

    const maxX = Math.max(padding, areaWidth - buttonWidth - padding);
    const maxY = Math.max(padding, areaHeight - buttonHeight - padding);

    const randomX = Math.floor(Math.random() * (maxX - padding + 1)) + padding;
    const randomY = Math.floor(Math.random() * (maxY - padding + 1)) + padding;

    setNoButtonPosition({ x: randomX, y: randomY });
  };

  const handleNoAttempt = () => {
    if (!accepted) {
      moveNoButton();
    }
  };

  return (
    <>
      <Typography variant="h5" align="center" sx={{ mb: 5 }}>
        Akasha will you be my valentine? - Max
      </Typography>
      {accepted && (
        <Typography variant="body2" color="secondary.main" sx={{ mb: 2 }}>
          If u said no I was going to have to take lobby on a date instead...
        </Typography>
      )}

      {!accepted && (
        <>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setAccepted(true)}
            sx={{
              position: 'absolute',
              left: 180,
              top: '50%'
            }}
          >
            YES
          </Button>
          <Button
            ref={noButtonRef}
            variant="outlined"
            color="secondary"
            onMouseEnter={handleNoAttempt}
            onMouseDown={handleNoAttempt}
            onFocus={handleNoAttempt}
            onTouchStart={handleNoAttempt}
            sx={{
              position: 'absolute',
              left: noButtonPosition ? noButtonPosition.x : 300,
              top: noButtonPosition ? noButtonPosition.y : '50%'
            }}
          >
            NO
          </Button>
        </>
      )}

      {accepted && onBeginDate && (
        <Button variant="contained" color="primary" onClick={onBeginDate}>
          Begin date
        </Button>
      )}
    </>
  );
}

export default LevelOne;
