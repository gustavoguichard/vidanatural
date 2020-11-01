import { useState, useEffect } from 'react'

import api from 'lib/api'
import { toCurrency } from 'lib/utils'

import CTAButton from 'components/cta-button'
import CloseButton from 'components/close-button'
import NumericStepper from 'components/numeric-stepper'

const CartEditing = ({ item, onClose, actions }) => {
  const [quantity, setQuantity] = useState(0)
  useEffect(() => {
    setQuantity(item ? item.quantity : 0)
  }, [item])

  const handleChange = (increment) => () => {
    const value = Math.max(quantity + increment, 1)
    setQuantity(Math.min(value, item.available_quantity))
  }

  const onClick = () => {
    actions.updateItem(item.id, quantity)
    onClose()
  }
  return item ? (
    <div
      className="absolute flex inset-0 pt-6 z-20 bg-black bg-opacity-25"
      onClick={onClose}
    >
      <div
        onClick={(ev) => {
          ev.preventDefault()
          ev.stopPropagation()
        }}
        className="bg-white rounded-t-lg flex flex-grow flex-col animate__animated animate__faster animate__slideInUp p-4"
      >
        <div className="flex flex-grow flex-col justify-between">
          <div className="flex items-start justify-between">
            <p className="font-semibold tracking-tight leading-snug">
              {item.product_name}
              <br />
              <span className="font-normal text-gray-500">
                {item.variant_name}
              </span>
              <br />
              <span className="font-normal">{toCurrency(item.price)}</span>
            </p>
            <CloseButton className="-mr-3 -mt-3" onClick={onClose} />
          </div>
          <div className="flex w-full items-center">
            <img
              alt={item.product_name}
              src={api.vnda.getResizedImg(item.image_url, 360)}
              className="object-cover w-full"
            />
          </div>
          <div className="flex">
            <NumericStepper
              onIncrease={handleChange(1)}
              onDecrease={handleChange(-1)}
              current={quantity}
            />
            <CTAButton onClick={onClick} disableIcon className="flex-grow">
              Atualizar{' '}
              <span className="ml-4">{toCurrency(item.price * quantity)}</span>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  ) : null
}

export default CartEditing
