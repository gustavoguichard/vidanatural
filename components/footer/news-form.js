import { useState } from 'react'
import { useFormState } from 'react-use-form-state'
import { FiSend } from 'react-icons/fi'

import api from 'lib/api'
import useGlobal from 'lib/use-global'

import Spinner from 'components/spinner'
import Input from 'components/input'

const NewsForm = () => {
  const [sending, setSending] = useState(false)
  const [{ subscribed }, { subscribe }] = useGlobal()
  const [hasError, setHasError] = useState()
  const [formState, { email }] = useFormState({ key: 'vidanatural-newsletter' })
  const handleSubmit = async (event) => {
    event.preventDefault()
    setHasError(null)
    setSending(true)

    const isSent = await api.vnda.endpoints.sendForm(formState.values)
    if (isSent) {
      formState.clear()
      subscribe()
    } else {
      setHasError(
        'Não foi possível adicionar este e-mail nesse momento. Por favor, tente mais novamente.',
      )
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
      <h4 className="mb-1 font-semibold tracking-wide uppercase">
        Quer descontos exclusivos?
      </h4>
      <p>Assine nossa newsletter e receba ofertas no seu e-mail</p>
      <div className="mt-3">
        <Input
          {...email('email')}
          required
          label="Seu e-mail"
          text="white"
          bg="gray-900"
          error={hasError}
          button={
            sending ? (
              <Spinner className="mx-2" />
            ) : (
              <button
                type="submit"
                onClick={handleSubmit}
                aria-label="Enviar"
                className="flex p-2 rounded-full hover:bg-gray-500/25"
              >
                <FiSend className="w-6 h-6 text-teal-700" />
              </button>
            )
          }
        />
      </div>
    </form>
  )
}

export default NewsForm
