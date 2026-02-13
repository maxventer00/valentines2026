import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Skyline from '../assets/skyline.png';

function LevelFive({ balance, onComplete }) {
  const [secondsLeft, setSecondsLeft] = useState(5);

  useEffect(() => {
    if (secondsLeft <= 0) {
      if (onComplete) {
        onComplete(balance);
      }
      return;
    }

    const id = setTimeout(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(id);
  }, [secondsLeft, onComplete]);

  return (
    <>
      <Typography variant="h5" align="center" sx={{ mb: 2 }}>
        Driving... {secondsLeft}s
      </Typography>
      <Box
        sx={{
          mb: 2,
          '@keyframes carBob': {
            from: {
              transform: 'translateY(0px)'
            },
            to: {
              transform: 'translateY(-3px)'
            }
          },
          animation: 'carBob 0.25s ease-in-out infinite alternate'
        }}
      >
        <img src={Skyline} alt="Skyline" style={{ width: 360, maxWidth: '100%', height: 'auto', display: 'block' }} />
      </Box>
    </>
  );
}

export default LevelFive;
