import { useState } from 'react'
import { useFormState } from 'react-use-form-state'
import {
  Button,
  IconButton,
  CircularProgress,
  InputAdornment,
  TextField,
  Typography,
} from '@material-ui/core'
import { FiSend } from 'react-icons/fi'

import api from 'lib/api'

import FormError from 'components/form-error'

const OutOfStockForm = ({ product, innerRef }) => {
  const [showForm, setShowForm] = useState(false)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [formState, { email, raw }] = useFormState({
    key: 'vidanatural-avise-me-quando-chegar-o-produto',
    produto: '',
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    setHasError(false)
    setSending(true)

    const values = { ...formState.values, produto: product.name }
    const isSent = await api.vnda.sendForm(values)
    isSent ? setSent(true) : setHasError(true)
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
      <form
        name="Avise-me"
        data-webform="vidanatural-avise-me-quando-chegar-o-produto"
        onSubmit={handleSubmit}
        action="/webform"
      >
        <Typography>
          Deixe o seu e-mail abaixo e enviaremos uma mensagem assim que tivermos
          o produto
        </Typography>
        <TextField {...raw('key')} type="hidden" />
        <TextField {...raw('produto')} type="hidden" />
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
                    <FiSend />
                  </IconButton>
                )}
              </InputAdornment>
            ),
          }}
        />
        <FormError
          message={
            hasError && 'Ocorreu um erro. Por favor, tente denovo mais tarde.'
          }
        />
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
