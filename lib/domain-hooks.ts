import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import api from 'lib/api'
import useGlobal from 'lib/use-global'

import { useFormState } from 'react-use-form-state'

function useCoupon() {
  const [, actions] = useGlobal()
  const router = useRouter()
  useEffect(() => {
    if (router.query.ccc) {
      actions.notify({
        id: 10,
        title: 'Cupom aceito!',
        htmlMessage: `<p>Seu cupom <strong>${router.query.ccc}</strong> será aplicado na finalização da compra. Aproveite!</p>`,
        type: 'success',
        persist: true,
      })
      actions.addCoupon(router.query.ccc as string)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router])
}

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

export { useNewsletterService, useCoupon }
