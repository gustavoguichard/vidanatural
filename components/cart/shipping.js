import { useState, useEffect } from 'react'
import get from 'lodash/get'
import isNil from 'lodash/isNil'
import { useFormState } from 'react-use-form-state'

import api from 'lib/api'
import { toCurrency } from 'lib/utils'

import CTAButton from 'components/cta-button'
import Input from 'components/input'

const CartShipping = ({ actions, cart, items }) => {
  const [methods, setMethods] = useState([])

  const getShippingMethods = async () => {
    const token = await api.vnda.getCartToken()
    const response = await api.vnda.fetch(`cart/${token}/shipping-methods`)
    setMethods(response || [])
  }
  useEffect(() => {
    getShippingMethods()
  }, [cart.subtotal])

  const [editing, setEditing] = useState(false)
  const [formState, { text }] = useFormState()

  if (!items.length) {
    return null
  }

  const valueNeededToDiscount = methods.reduce((sum, curr) => {
    if (curr.value === 'retirar-na-loja' || sum === 0) return sum
    if (curr.price === 0) return 0
    return isNil(curr.value_needed_to_discount)
      ? sum
      : isNil(sum)
      ? curr.value_needed_to_discount
      : Math.min(sum, curr.value_needed_to_discount)
  }, undefined)
  const needed = cart.subtotal + valueNeededToDiscount
  const percentage = (cart.subtotal * 100) / needed
  const completed = percentage >= 100

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const zip = get(formState, 'values.zip', '').replaceAll(/\D/g, '')
    if (zip.length === 8) {
      actions.updateZip(zip)
      setEditing(false)
    }
  }

  return !isNil(valueNeededToDiscount) ? (
    <div className="bg-gray-50 p-2 px-4 text-sm flex flex-col">
      <p className="text-gray-600 text-xs py-2 font-semibold">
        {completed
          ? 'Parabéns! Você tem direito à frete grátis!'
          : `Compre mais ${toCurrency(
              valueNeededToDiscount,
            )} para ganhar frete grátis.`}
      </p>
      <div className="bg-white w-full border rounded-lg p-px">
        <div
          className="bg-green-500 m-px h-1 rounded transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  ) : !cart.shipping_address_id ? (
    <div className="bg-gray-50 pt-2 px-4 text-sm flex flex-col">
      {editing ? (
        <form onSubmit={handleSubmit} className="mt-2">
          <Input
            label="CEP"
            bg="gray-50"
            autoFocus
            {...text('zip')}
            button={
              <CTAButton disableIcon mini>
                Calcular
              </CTAButton>
            }
          />
        </form>
      ) : (
        <a
          href="#"
          onClick={(ev) => {
            ev.preventDefault()
            setEditing(true)
          }}
          className="text-xs underline hover:text-teal-600"
        >
          Quanto preciso para ganhar frete grátis?
        </a>
      )}
    </div>
  ) : null
}

export default CartShipping
