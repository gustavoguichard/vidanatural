import { useState } from 'react'
import { useFormState } from 'react-use-form-state'
import {
  IconButton,
  CircularProgress,
  InputAdornment,
  TextField,
} from '@material-ui/core'
import { Send } from '@material-ui/icons'

import theme from 'lib/theme'
import api from 'lib/api'
import useGlobal from 'lib/use-global'

import FormError from 'components/form-error'

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
    <p>
      <strong>Gratos!</strong> <br /> Você começará a receber nossas ofertas em
      breve! 🌱
    </p>
  ) : (
    <form name="Newsletter" onSubmit={handleSubmit} action="/webform">
      <h4 className="mb-1 uppercase tracking-wider font-semibold">
        Quer descontos exclusivos?
      </h4>
      <p>Assine nossa newsletter e receba ofertas no seu e-mail</p>
      <div className="mt-3">
        <TextField
          id="news-email"
          variant="outlined"
          className="flex pr-1"
          {...email('email')}
          css={{
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
        <FormError show={hasError} />
      </div>
    </form>
  )
}

export default NewsForm
