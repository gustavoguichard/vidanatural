import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    common: {
      black: '#070707',
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
      main: red.A700,
    },
    text: {
      primary: '#25282F',
      secondary: '#fff',
      hint: '#5b5c67',
      disabled: '#9e9fb3',
    },
  },
  typography: {
    fontFamily: 'DM Sans, sans-serif',
    htmlFontSize: 17,
    fontSize: 16,
    h2: {
      fontSize: '3rem',
      fontWeight: 600,
      letterSpacing: '-0.035rem',
      lineHeight: 1.0667,
    },
    h3: {
      fontSize: '2.125rem',
      fontWeight: 600,
      lineHeight: 1.0667,
      letterSpacing: '-0.035rem',
    },
    h4: {
      fontSize: '1.425rem',
      fontWeight: 400,
      lineHeight: 1.0667,
      letterSpacing: '-0.035rem',
    },
    h5: {
      fontSize: '1.25rem',
      lineHeight: 1.38105,
      fontWeight: 400,
      letterSpacing: '-0.022rem',
    },
    h6: {
      fontSize: '1.12rem',
      lineHeight: 1.38105,
      fontWeight: 600,
      letterSpacing: '-0.022rem',
    },
    body1: {
      fontSize: '1.0667rem',
      lineHeight: 1.47059,
      fontWeight: 400,
      letterSpacing: '-0.022rem',
    },
    overline: {
      lineHeight: 1.66,
    },
  },
})

export default responsiveFontSizes(theme)
