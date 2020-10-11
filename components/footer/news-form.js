import { useState } from 'react'
import { useFormState } from 'react-use-form-state'
import { FiSend } from 'react-icons/fi'

import api from 'lib/api'
import useGlobal from 'lib/use-global'

import CircularProgress from 'components/circular-progress'
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

    const isSent = await api.vnda.sendForm(formState.values)
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
      <h4 className="mb-1 uppercase tracking-wide font-semibold">
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
              <CircularProgress className="mx-2" />
            ) : (
              <button
                type="submit"
                onClick={handleSubmit}
                aria-label="Enviar"
                className="hover:bg-opacity-25 hover:bg-gray-500 rounded-full p-2 flex"
              >
                <FiSend className="text-green-700 w-6 h-6" />
              </button>
            )
          }
        />
      </div>
    </form>
  )
}

export default NewsForm
