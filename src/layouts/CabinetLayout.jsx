import { Box } from '@mui/material';

function CabinetLayout({ children, gameAreaRef }) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        p: 2
      }}
    >
      <Box
        sx={{
          width: { xs: '92vw', sm: 560 },
          maxWidth: 560,
          aspectRatio: '1 / 1',
          bgcolor: 'background.paper',
          border: '6px solid',
          borderColor: '#6d1837',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'stretch',
          justifyContent: 'stretch'
        }}
      >
        <Box
          ref={gameAreaRef}
          sx={{
            width: '100%',
            height: '100%',
            border: '5px solid',
            borderColor: '#8d1f47',
            boxShadow: 'inset 0 0 0 3px #4a1129',
            bgcolor: '#34101e',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 4,
            pt: 6
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default CabinetLayout;
