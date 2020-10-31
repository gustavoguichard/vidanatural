import { useRef } from 'react'
import isArray from 'lodash/isArray'
import { FiShoppingBag } from 'react-icons/fi'

import useGlobal from 'lib/use-global'

import Cart from 'components/cart'
import IconButton from 'components/icon-button'

const CartIcon = () => {
  const [{ cart }, actions] = useGlobal()
  const safeCart = isArray(cart) ? cart : []
  const cartRef = useRef(null)
  return (
    <div className="relative">
      <IconButton
        ref={cartRef}
        aria-label="Carrinho"
        onClick={actions.openCart}
      >
        {!!safeCart.length && (
          <span className="absolute flex h-2 w-2 right-0 top-0 transform translate-y-1 -translate-x-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full border-2 border-teal-600 bg-teal-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600" />
          </span>
        )}
        <FiShoppingBag />
      </IconButton>
      <Cart />
    </div>
  )
}

export default CartIcon
