import { useState } from 'react'
import { Button, CircularProgress, TextField } from '@material-ui/core'
import { useFormState } from 'react-use-form-state'
import { useRouter } from 'next/router'
import Alert from 'src/components/Alert'
import Input from 'src/contato/Input'
import api from 'utils/api'

const Form = () => {
  const router = useRouter()
  const [sending, setSending] = useState(false)
  const [hasError, setHasError] = useState(false)

  const [formState, { raw, text, email, textarea }] = useFormState({
    key: 'vidanatural-mensagem-pelo-site',
    reply_to: '',
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    setHasError(false)
    setSending(true)

    const values = { ...formState.values, reply_to: formState.values.email }
    const isSent = await api.sendForm(values)

    isSent ? router.push({ pathname: '/gratos' }) : setHasError(true)
    setSending(false)
  }
  return (
    <form
      name="Contato"
      onSubmit={handleSubmit}
      action="/webform"
      data-webform="vidanatural-mensagem-pelo-site"
    >
      <TextField {...raw('key')} type="hidden" />
      <TextField {...raw('reply_to')} type="hidden" />
      <input
        {...text('a_password')}
        css={{ display: 'none !important' }}
        tabIndex={-1}
        autoComplete="false"
      />
      <Input {...text('name')} required label="Seu nome" />
      <Input {...email('email')} required label="Seu e-mail" />
      <Input {...text('phone')} label="Seu telefone / whatsapp" />
      <Input
        {...textarea('message')}
        multiline
        required
        rows="4"
        label="Mensagem"
      />
      <Alert
        message={
          hasError && 'Ocorreu um erro. Por favor, tente denovo mais tarde.'
        }
      />
      <Button type="submit" variant="contained" color="secondary">
        {sending ? <CircularProgress /> : 'Enviar mensagem'}
      </Button>
    </form>
  )
}

export default Form
