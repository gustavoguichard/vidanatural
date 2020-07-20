import { useState } from 'react'
import { useFormState } from 'react-use-form-state'
import {
  Box,
  Button,
  IconButton,
  CircularProgress,
  InputAdornment,
  TextField,
  Typography,
} from '@material-ui/core'
import { Send } from '@material-ui/icons'

import api from 'lib/api'

import Alert from 'components/alert'

const OutOfStockForm = ({ product, innerRef }) => {
  const [showForm, setShowForm] = useState(false)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [formState, { email }] = useFormState({
    key: 'vidanatural-avise-me-quando-chegar-o-produto',
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    setHasError(false)
    setSending(true)

    const isSent = await api.vnda.sendForm(formState.values)
    if (isSent) {
      formState.clear()
      setSent(true)
    } else {
      setHasError(true)
    }
    setSending(false)
  }

  if (showForm) {
    return sent && !hasError ? (
      <Typography>
        Gratos!
        <br />
        Você receberá uma mensagem em breve! 🌱
      </Typography>
    ) : (
      <form name="Newsletter" onSubmit={handleSubmit} action="/webform">
        <Typography>
          Deixe o seu e-mail abaixo e enviaremos uma mensagem assim que tivermos
          o produto
        </Typography>
        <Box mt={2}>
          <TextField
            id="news-email"
            {...email('email')}
            css={{ display: 'flex', paddingRight: 5 }}
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

  return (
    <Button
      ref={innerRef}
      variant="contained"
      color="secondary"
      onClick={() => setShowForm(true)}
    >
      Avise-me quando chegar
    </Button>
  )
}

export default OutOfStockForm
