import { useState } from 'react'
import { useFormState } from 'react-use-form-state'
import TruckIcon from '@heroicons/react/outline/TruckIcon'

import api from 'lib/api'
import { toCurrency } from 'lib/utils'
import useGlobal from 'lib/use-global'

import Spinner from 'components/spinner'
import IconButton from 'components/icon-button'
import Input from 'components/input'
import FormError from 'components/form-error'

const CalculateShipping = ({ sku, quantity }) => {
  const [, { updateZip }] = useGlobal()
  const [showForm, setShowForm] = useState(false)
  const [sending, setSending] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [results, setResults] = useState(null)
  const [notFound, setNotFound] = useState(false)
  const [formState, { text }] = useFormState()

  const handleSubmit = async (event) => {
    event && event.preventDefault()
    setHasError(false)
    setSending(true)
    setNotFound(false)
    setResults(null)

    const zip = (formState?.values?.zip ?? '').replaceAll(/\D/g, '')
    if (zip.length >= 8) {
      const result = await api.vnda.endpoints.calculateShipping({
        sku,
        quantity,
        zip,
      })
      updateZip(zip)
      if (!result) {
        setHasError(true)
        return null
      }

      const { address_details, methods } = result
      if (address_details && methods) {
        const shippingMethods = JSON.parse(methods)
        setResults({ ...address_details, shippingMethods })
      } else {
        setNotFound(true)
      }
    }
    return setSending(false)
  }

  return showForm ? (
    <form
      className="relative z-10 mt-6"
      onSubmit={handleSubmit}
      action="/frete_produto"
    >
      <Input
        {...text('zip')}
        autoFocus
        required
        bg="gray-50"
        label="Qual o seu CEP?"
        button={
          <IconButton type="submit" onClick={handleSubmit} aria-label="Enviar">
            <TruckIcon className="w-5 h-5" />
          </IconButton>
        }
      />
      {(sending || notFound || results) && !hasError && (
        <div className="px-4 py-3 mt-4 border-2 rounded text-amber-900 bg-amber-100 border-amber-200">
          {sending && <Spinner className="mx-auto text-amber-900" />}
          {notFound && <p className="font-semibold">Endereço não encontrado</p>}
          {results && (
            <div>
              <p>
                <strong>Preços para:</strong> {results.neighborhood},{' '}
                {results.city}
              </p>
              <ul>
                {results.shippingMethods.map((method) => (
                  <li key={method.shipping_method_id}>
                    <strong>{method.name}: </strong>
                    {toCurrency(method.price)} (até {method.delivery_days} dias
                    para entrega)
                    <br />
                    {method.value_needed_to_discount && (
                      <strong className="text-sm">
                        Frete grátis por mais{' '}
                        {toCurrency(method.value_needed_to_discount)} em
                        compras.
                      </strong>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
      <FormError
        show={hasError}
        message="Ocorreu um erro. Por favor, tente denovo mais tarde."
      />
    </form>
  ) : (
    <a
      href="#"
      className="relative z-10 flex mt-4 text-sm font-semibold place-items-center hover:underline"
      onClick={(ev) => {
        ev.preventDefault()
        setShowForm(true)
      }}
    >
      Calcular frete <TruckIcon className="w-5 h-5 ml-1" />
    </a>
  )
}

export default CalculateShipping
