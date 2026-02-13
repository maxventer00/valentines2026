import { Button, Typography } from '@mui/material';
import Tulips from '../assets/tulips.png';

function LevelTwo({ onNextLevel }) {
  return (
    <>
      <Typography variant="h5" align="center" sx={{ mb: 2 }}>
        I bought you flowers (tulips since u lov them)
      </Typography>
      <img src={Tulips} alt="Tulips" style={{ width: 300, height: 200, marginBottom: 20 }} />

      {onNextLevel && (
        <Button variant="contained" color="primary" onClick={onNextLevel}>
          Lets go to the zoo
        </Button>
      )}
    </>
  );
}

export default LevelTwo;
