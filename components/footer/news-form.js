import { useState } from 'react'
import { useFormState } from 'react-use-form-state'
import {
  Box,
  IconButton,
  CircularProgress,
  InputAdornment,
  TextField,
  Typography,
} from '@material-ui/core'
import { Send } from '@material-ui/icons'

import theme from 'lib/theme'
import api from 'lib/api'
import useGlobal from 'lib/use-global'

import Alert from 'components/alert'

const NewsForm = () => {
  const [sending, setSending] = useState(false)
  const [{ subscribed }, { subscribe }] = useGlobal()
  const [hasError, setHasError] = useState(false)
  const [formState, { email }] = useFormState({ key: 'vidanatural-newsletter' })
  const handleSubmit = async (event) => {
    event.preventDefault()
    setHasError(false)
    setSending(true)

    const isSent = await api.vnda.sendForm(formState.values)
    if (isSent) {
      formState.clear()
      subscribe()
    } else {
      setHasError(true)
    }
    setSending(false)
  }

  const successful = subscribed && !hasError
  return successful ? (
    <Typography
      variant="h5"
      color="inherit"
      css={{ marginBottom: theme.spacing() }}
    >
      Gratos!
      <br />
      Você começará a receber nossas ofertas em breve! 🌱
    </Typography>
  ) : (
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
          id="news-email"
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
          label="Seu e-mail"
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
      </Box>
    </form>
  )
}

export default NewsForm
