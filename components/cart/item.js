import { useState, useEffect, useMemo } from 'react'
import debounce from 'lodash/debounce'

import api from 'lib/api'
import { toCurrency } from 'lib/utils'

import Link from 'components/link'
import NumericStepper from 'components/numeric-stepper'

const CartItem = ({ item, actions }) => {
  const {
    id,
    available_quantity,
    product_name,
    image_url,
    product_url,
    price,
    variant_price,
  } = item
  const [quantity, setQuantity] = useState(item.quantity)
  const hasDiscont = variant_price > price

  const debouncedUpdate = useMemo(
    () =>
      debounce((qtty) => {
        actions.updateItem(item.id, qtty)
      }, 500),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  useEffect(() => {
    setQuantity(item.quantity)
  }, [item.quantity])

  useEffect(() => {
    if (item.quantity !== quantity) {
      debouncedUpdate(quantity)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity])

  const handleChange = (increment) => () => {
    const value = Math.max(quantity + increment, 1)
    setQuantity(Math.min(value, available_quantity))
  }

  return (
    <div className="flex w-1/2 p-1 cart-item">
      <div className="flex flex-col justify-between w-full overflow-hidden tracking-tight bg-white border rounded-sm h-72">
        <p className="p-2 text-sm font-semibold bg-white">
          {quantity}x{' '}
          <Link
            onClick={actions.hideCart}
            href={api.vnda.utils.getOwnPath(product_url)}
            className="hover:text-teal-600"
          >
            {product_name}
          </Link>
          <br />
          <span className={`block mt-1 font-${hasDiscont ? 'bold' : 'normal'}`}>
            {toCurrency(price)}
            {hasDiscont && ' '}
            {hasDiscont && (
              <span className="text-xs font-normal text-gray-500 line-through">
                {toCurrency(variant_price)}
              </span>
            )}
          </span>
        </p>
        <div className="flex-grow overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={product_name}
            src={api.vnda.utils.getResizedImg(image_url, 200)}
            className="object-cover w-full"
          />
        </div>
        <div className="flex w-full mt-px text-xs">
          <div className="flex flex-grow border-t border-r">
            <NumericStepper
              onIncrease={handleChange(1)}
              onDecrease={handleChange(-1)}
              current={quantity}
            />
          </div>
          <button
            type="button"
            onClick={() => actions.removeFromCart(id)}
            className="p-2 border-t hover:bg-gray-100"
          >
            Remover
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
