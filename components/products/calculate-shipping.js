import { useState } from 'react'
import { useFormState } from 'react-use-form-state'
import get from 'lodash/get'
import { FiTruck } from 'react-icons/fi'

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

    const zip = get(formState, 'values.zip', '').replaceAll(/\D/g, '')
    if (zip.length >= 8) {
      const result = await api.vnda.calculateShipping({ sku, quantity, zip })
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
    setSending(false)
  }

  return showForm ? (
    <form className="mt-6" onSubmit={handleSubmit} action="/frete_produto">
      <Input
        {...text('zip')}
        autoFocus
        required
        bg="gray-50"
        label="Qual o seu CEP?"
        button={
          <IconButton type="submit" onClick={handleSubmit} aria-label="Enviar">
            <FiTruck />
          </IconButton>
        }
      />
      {(sending || notFound || results) && !hasError && (
        <div className="mt-4 py-3 px-4 bg-yellow-100 text-yellow-900 border-yellow-200 border-2 rounded">
          {sending && <Spinner className="mx-auto text-yellow-900" />}
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
                      <strong css={{ fontSize: '.9rem' }}>
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
      className="mt-4 flex place-items-center text-sm font-semibold hover:underline"
      onClick={(ev) => {
        ev.preventDefault()
        setShowForm(true)
      }}
    >
      Calcular frete <FiTruck className="ml-1" />
    </a>
  )
}

export default CalculateShipping
