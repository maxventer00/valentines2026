import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

const MACCAS_COST = 30;
const NOBU_COST = 800;

function LevelSix({ balance }) {
  const [choice, setChoice] = useState('');
  const [currentBalance, setCurrentBalance] = useState(balance);

  const handleChoice = (option) => {
    if (choice) return;

    if (option === 'maccas') {
      if (currentBalance >= MACCAS_COST) {
        setCurrentBalance((prev) => prev - MACCAS_COST);
        setChoice('maccas');
      }
      return;
    }

    if (option === 'nobu') {
      if (currentBalance >= NOBU_COST) {
        setCurrentBalance((prev) => prev - NOBU_COST);
        setChoice('nobu');
      }
    }
  };

  return (
    <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
      <Typography variant="h5" align="center" sx={{ mb: 4 }}>
        Dinner time
      </Typography>

      <Box
        sx={{
          position: 'absolute',
          top: 8,
          right: 12
        }}
      >
        <Typography variant="body1" sx={{ color: '#6eff6e', fontWeight: 700 }}>
          ${currentBalance}
        </Typography>
      </Box>

      {!choice && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            mt: 6
          }}
        >
          <Button variant="contained" onClick={() => handleChoice('maccas')}>
            Maccas ${MACCAS_COST}
          </Button>
          <Button variant="contained" onClick={() => handleChoice('nobu')}>
            Nobu ${NOBU_COST}
          </Button>
        </Box>
      )}

      {choice === 'maccas' && (
        <Typography variant="body1" align="center" sx={{ mt: 5, mx: 2 }}>
          The double cheeseburger combo w/ lettuce and sweet and sour sauce gave you the shits, had to go home straight
          away.
        </Typography>
      )}

      {choice === 'nobu' && (
        <Typography variant="body1" align="center" sx={{ mt: 5, mx: 2 }}>
          Akasha got cuddly after 2 bottles of expensive wine but too drunk and fell asleep immediately after getting in
          the car. Max had to drive x
        </Typography>
      )}
    </Box>
  );
}

export default LevelSix;
