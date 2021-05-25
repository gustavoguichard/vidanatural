import { useState } from 'react'
import { useFormState } from 'react-use-form-state'
import { useRouter } from 'next/router'

import api from 'lib/api'
import analytics from 'lib/analytics'

import CTAButton from 'components/cta-button'
import Spinner from 'components/spinner'
import FormError from 'components/form-error'
import Input from 'components/input'

const Form = () => {
  const router = useRouter()
  const [sending, setSending] = useState(false)
  const [hasError, setHasError] = useState(false)

  const [formState, { raw, text, email, textarea }] = useFormState({
    key: 'vidanatural-nova-mensagem-pelo-site-da-vn',
    reply_to: '',
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    setHasError(false)
    setSending(true)

    const values = { ...formState.values, reply_to: formState.values.email }
    analytics.track('Contact', { location: 'ContactForm', values })
    const isSent = await api.vnda.endpoints.sendForm(values)

    isSent ? router.push({ pathname: '/gratos' }) : setHasError(true)
    setSending(false)
  }
  return (
    <form
      name="Contato"
      onSubmit={handleSubmit}
      action="/webform"
      data-webform="vidanatural-nova-mensagem-pelo-site-da-vn"
    >
      <input {...raw('key')} type="hidden" />
      <input {...raw('reply_to')} type="hidden" />
      <input
        {...text('a_password')}
        className="hidden"
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
      <FormError show={hasError} />
      <CTAButton
        type="submit"
        className="g-recaptcha"
        data-sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA}
        data-callback="onSubmit"
        data-action="submit"
      >
        {sending ? (
          <Spinner color="inherit" size="4" className="mx-6" />
        ) : (
          'Enviar mensagem'
        )}
      </CTAButton>
    </form>
  )
}

export default Form
