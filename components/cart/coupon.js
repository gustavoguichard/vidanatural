import { useState } from 'react'
import { useFormState } from 'react-use-form-state'

import CTAButton from 'components/cta-button'
import Input from 'components/input'

const CartCoupon = ({ actions, cart, items }) => {
  const [error, setError] = useState()
  const [editing, setEditing] = useState(false)
  const openForm = (ev) => {
    ev.preventDefault()
    setEditing(true)
  }

  const [formState, { text }] = useFormState({ coupon: cart.coupon_code || '' })

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError()
    const result = await actions.addCoupon(formState.values.coupon)
    if (result.coupon_code) {
      setEditing(false)
    } else {
      setError('Cupom inválido, tente novamente.')
    }
  }

  return items.length ? (
    <div className="bg-gray-50 mt-2 p-4 text-sm flex flex-col">
      {cart.coupon_code && !editing && (
        <p className="flex justify-between items-baseline">
          <span>
            Cupom: <strong>{cart.coupon_code}</strong>
          </span>
          <a className="text-xs underline" href="#" onClick={openForm}>
            editar
          </a>
        </p>
      )}
      {!editing && !cart.coupon_code && (
        <a className="text-sm underline" href="#" onClick={openForm}>
          + Aplicar cupom
        </a>
      )}
      {editing && (
        <form onSubmit={handleSubmit} className="flex flex-col">
          <Input
            autoFocus
            button={
              <CTAButton mini disableIcon>
                Aplicar
              </CTAButton>
            }
            label="Cupom"
            wrapperClasses="transform translate-y-2"
            bg="gray-50"
            {...text('coupon')}
            error={error}
          />
        </form>
      )}
    </div>
  ) : null
}

export default CartCoupon
