import { useState } from 'react'
import { useFormState } from 'react-use-form-state'
import PaperAirplaneIcon from '@heroicons/react/outline/PaperAirplaneIcon'

import api from 'lib/api'

import Spinner from 'components/spinner'
import CTAButton from 'components/cta-button'
import IconButton from 'components/icon-button'
import Input from 'components/input'
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
    event && event.preventDefault()
    setHasError(false)
    setSending(true)

    const values = { ...formState.values, produto: product.name }
    const isSent = await api.vnda.endpoints.sendForm(values)
    isSent ? setSent(true) : setHasError(true)
    setSending(false)
  }

  if (showForm) {
    return sent && !hasError ? (
      <p className="p-3 mt-2 text-blue-900 bg-blue-100 border-2 border-blue-300 rounded">
        Gratos!
        <br />
        Você receberá uma mensagem em breve! 🌱
      </p>
    ) : (
      <form
        name="Avise-me"
        data-webform="vidanatural-avise-me-quando-chegar-o-produto"
        onSubmit={handleSubmit}
        className="mt-2"
        action="/webform"
      >
        <p className="px-4 mb-4 text-sm font-semibold">
          Deixe o seu e-mail abaixo e enviaremos uma mensagem assim que tivermos
          o produto
        </p>
        <input {...raw('key')} type="hidden" />
        <input {...raw('produto')} type="hidden" />
        <Input
          id="news-email"
          {...email('email')}
          className="flex"
          required
          label="Seu e-mail"
          autoFocus
          bg="gray-50"
          button={
            sending ? (
              <Spinner className="mx-2 text-gray-900" />
            ) : (
              <IconButton
                type="submit"
                onClick={handleSubmit}
                aria-label="Enviar"
              >
                <PaperAirplaneIcon className="w-5 h-5" />
              </IconButton>
            )
          }
        />
        <FormError
          show={hasError}
          message="Ocorreu um erro. Por favor, tente denovo mais tarde."
        />
      </form>
    )
  }

  return (
    <CTAButton ref={innerRef} onClick={() => setShowForm(true)}>
      Avise-me quando chegar
    </CTAButton>
  )
}

export default OutOfStockForm
