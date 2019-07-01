import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: ['DM Sans', 'sans-serif'],
  },
  palette: {
    common: {
      black: '#0b0c17',
    },
    primary: {
      main: '#32333d',
      light: '#5b5c67',
      dark: '#25282F',
      contrastText: '#fff',
    },
    secondary: {
      main: '#1db980',
      light: '#62ecb0',
      dark: '#008853',
      contrastText: '#000',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#25282F',
      secondary: '#fff',
      hint: '#32333d',
      disabled: '#5b5c67',
    },
  },
})

export default responsiveFontSizes(theme)
