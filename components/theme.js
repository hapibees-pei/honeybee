import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FCC322',
    },
    secondary: {
      main: '#FFCD00',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    white: {
      main: '#FFFAFA',
    },
  },
});

export default theme;
