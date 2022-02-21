import { useState } from 'react'

import api from 'lib/api'
import useGlobal from 'lib/use-global'

import { useFormState } from 'react-use-form-state'

function useNewsletterService() {
  const [sending, setSending] = useState(false)
  const [, { notify }] = useGlobal()
  const [formState, { email }] = useFormState<{ email: string; key: string }>({
    key: 'vidanatural-newsletter',
  })
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setSending(true)

    const isSent = await api.vnda.endpoints.sendForm(formState.values)
    if (isSent) {
      formState.clear()
      notify({
        title: 'Gratos!',
        message: 'Você começará a receber nossas ofertas em breve! 🌱',
        type: 'success',
        position: 'bottom-right',
      })
    } else {
      notify({
        title: 'Erro',
        message:
          'Não foi possível adicionar este e-mail nesse momento. Por favor, tente mais novamente.',
        type: 'error',
        position: 'bottom-right',
      })
    }
    setSending(false)
  }

  return { handleSubmit, sending, emailField: email }
}

export { useNewsletterService }
