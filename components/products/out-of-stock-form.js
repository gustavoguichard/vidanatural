import { useState } from 'react'
import { useFormState } from 'react-use-form-state'
import { FiSend } from 'react-icons/fi'

import api from 'lib/api'

import CircularProgress from 'components/circular-progress'
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
    const isSent = await api.vnda.sendForm(values)
    isSent ? setSent(true) : setHasError(true)
    setSending(false)
  }

  if (showForm) {
    return sent && !hasError ? (
      <p className="mt-2 p-3 bg-blue-100 border-blue-300 border-2 rounded text-blue-900">
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
        <p className="font-semibold text-sm px-4 mb-4">
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
              <CircularProgress className="mx-2 text-gray-900" />
            ) : (
              <IconButton
                type="submit"
                onClick={handleSubmit}
                aria-label="Enviar"
              >
                <FiSend />
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
