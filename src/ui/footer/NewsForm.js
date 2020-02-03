import { useState } from 'react'
import {
  Box,
  IconButton,
  CircularProgress,
  InputAdornment,
  TextField,
  Typography,
} from '@material-ui/core'
import { Send } from '@material-ui/icons'
import { useFormState } from 'react-use-form-state'
import Alert from 'src/components/Alert'
import theme from 'src/ui/theme'
import api from 'utils/api'

const NewsForm = () => {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [formState, { email }] = useFormState({ key: 'vidanatural-newsletter' })
  const handleSubmit = async event => {
    event.preventDefault()
    setHasError(false)
    setSending(true)

    const isSent = await api.sendForm(formState.values)
    if (isSent) {
      formState.clear()
      setSent(true)
    } else {
      setHasError(true)
    }
    setSending(false)
  }
  return (
    <form name="Newsletter" onSubmit={handleSubmit} action="/webform">
      <Typography
        variant="h5"
        color="inherit"
        css={{ marginBottom: theme.spacing() }}
      >
        Quer descontos exclusivos?
      </Typography>
      <Typography variant="body2" color="inherit">
        Assine nossa newsletter e receba ofertas no seu e-mail
      </Typography>
      <Box mt={2}>
        <TextField
          id="email"
          variant="outlined"
          {...email('email')}
          css={{
            display: 'flex',
            paddingRight: 5,
            '& fieldset': {
              borderColor: theme.palette.primary.light,
            },
            '.MuiOutlinedInput-root:hover fieldset, .MuiOutlinedInput-root.Mui-focused fieldset': {
              borderColor: theme.palette.common.white,
            },
            'label.Mui-focused': {
              color: theme.palette.common.white,
            },
            input: {
              color: theme.palette.common.white,
            },
          }}
          required
          label="Sem e-mail"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {sending ? (
                  <CircularProgress color="secondary" />
                ) : (
                  <IconButton
                    onClick={handleSubmit}
                    aria-label="Enviar"
                    type="submit"
                    color="secondary"
                  >
                    <Send />
                  </IconButton>
                )}
              </InputAdornment>
            ),
          }}
        />
        <Alert
          message={
            hasError && 'Ocorreu um erro. Por favor, tente denovo mais tarde.'
          }
        />
        <Alert
          color={theme.palette.secondary.dark}
          message={
            sent &&
            'Agradecemos a confiança! Confira seu e-mail para confirmação.'
          }
        />
      </Box>
    </form>
  )
}

export default NewsForm
