import { useState } from 'react'
import { useFormState } from 'react-use-form-state'

import api from 'lib/api'
import useGlobal from 'lib/use-global'
import { cx } from 'lib/utils'

const NewsForm = () => {
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

  return (
    <form
      className={cx(
        'mt-4 sm:flex sm:max-w-md',
        sending && 'opacity-50 pointer-events-none',
      )}
      name="Newsletter"
      onSubmit={handleSubmit}
      action="/webform"
    >
      <label htmlFor="email-address" className="sr-only">
        E-mail
      </label>
      <input
        {...email('email')}
        autoComplete="email"
        required
        className="w-full min-w-0 px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-white border border-transparent rounded-md appearance-none"
        placeholder="Digite seu e-mail"
      />
      <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
        <button
          type="submit"
          className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md bg-nature-500 hover:bg-nature-600"
        >
          Inscrever-se
        </button>
      </div>
    </form>
  )
}

export default NewsForm
