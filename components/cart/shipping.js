import { useState, useEffect } from 'react'
import get from 'lodash/get'
import isNil from 'lodash/isNil'

import api from 'lib/api'
import { toCurrency } from 'lib/utils'
import useGlobal from 'lib/use-global'

const CartShipping = ({ cart, items }) => {
  const [{ freeShippingPrice }, { updateShippingPrice }] = useGlobal()
  const [methods, setMethods] = useState([])
  const [requesting, setRequesting] = useState(false)

  const getShippingMethods = async () => {
    setRequesting(true)
    const token = await api.vnda.getCartToken()
    const response = await api.vnda.fetch(`cart/${token}/shipping-methods`)
    setMethods(response || [])
    setRequesting(false)
    return null
  }

  useEffect(() => {
    if (cart.shipping_address_id) {
      getShippingMethods()
    } else {
      updateShippingPrice()
    }
  }, [cart.shipping_address_id, cart.subtotal])

  const valueNeededToDiscount = methods.reduce((sum, curr) => {
    if (curr.value === 'retirar-na-loja' || sum === 0) return sum
    if (curr.price === 0) return 0
    return isNil(curr.value_needed_to_discount)
      ? sum
      : isNil(sum)
      ? curr.value_needed_to_discount
      : Math.min(sum, curr.value_needed_to_discount)
  }, undefined)
  const needed = isNil(valueNeededToDiscount)
    ? freeShippingPrice
    : cart.subtotal + valueNeededToDiscount
  const valueNeeded = Math.max(needed - cart.subtotal, 0)
  const percentage = Math.min((cart.subtotal * 100) / needed, 100)
  const completed = percentage >= 100

  const bg = completed ? 'bg-green-500' : 'bg-blue-400'

  useEffect(() => {
    updateShippingPrice(needed)
  }, [needed])

  if (!items.length) {
    return null
  }

  return !isNil(valueNeeded || freeShippingPrice) ? (
    <div
      className={`bg-gray-50 p-2 px-4 text-sm flex flex-col opacity-${
        requesting ? 25 : 100
      }`}
    >
      <p className="text-gray-600 text-xs py-2 font-semibold">
        {completed ? (
          <span>
            <strong>Feito!</strong> Você tem direito à frete grátis!
          </span>
        ) : (
          `Compre mais ${toCurrency(valueNeeded)} para ganhar frete grátis.`
        )}
      </p>
      <div className="bg-white w-full border rounded-lg p-px pr-1">
        <div
          className={`${bg} m-px h-1 rounded transition-all duration-300`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  ) : null
}

export default CartShipping
