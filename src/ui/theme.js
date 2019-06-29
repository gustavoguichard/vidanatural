import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    common: {
      black: '#0b0c17',
    },
    primary: {
      main: '#32333d',
      light: '#5b5c67',
      dark: '#0b0c17',
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
  },
})

export default theme
