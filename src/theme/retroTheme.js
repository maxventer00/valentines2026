import { createTheme } from '@mui/material';

const retroTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#d23669'
    },
    secondary: {
      main: '#f06292'
    },
    text: {
      primary: '#ffe5ef',
      secondary: '#f5b7cc'
    },
    background: {
      default: '#18030c',
      paper: '#2b0b17'
    }
  },
  shape: {
    borderRadius: 0
  },
  typography: {
    fontFamily: '"Courier New", "Lucida Console", monospace'
  }
});

export default retroTheme;
