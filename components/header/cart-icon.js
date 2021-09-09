import { useRef } from 'react'
import get from 'lodash/get'
import { FiShoppingBag } from 'react-icons/fi'

import useGlobal from 'lib/use-global'

import Cart from 'components/cart'
import IconButton from 'components/icon-button'

const CartIcon = () => {
  const [{ cart }, actions] = useGlobal()
  const cartRef = useRef(null)
  return (
    <div className="relative">
      <IconButton
        ref={cartRef}
        aria-label="Carrinho"
        onClick={actions.openCart}
      >
        {get(cart, 'items.length', 0) > 0 && (
          <span className="absolute top-0 right-0 flex w-2 h-2 -translate-x-1 translate-y-1">
            <span className="absolute inline-flex w-full h-full bg-teal-500 border-2 border-teal-600 rounded-full opacity-75 animate-ping" />
            <span className="relative inline-flex w-2 h-2 bg-teal-600 rounded-full" />
          </span>
        )}
        <FiShoppingBag />
      </IconButton>
      <Cart />
    </div>
  )
}

export default CartIcon
