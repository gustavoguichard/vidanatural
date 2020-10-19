import { useEffect, useRef } from 'react'
import take from 'lodash/take'
import isArray from 'lodash/isArray'
import { FaShoppingCart } from 'react-icons/fa'

import api from 'lib/api'
import { sleep } from 'lib/utils'
import useGlobal from 'lib/use-global'

import CTAButton from 'components/cta-button'
import Dropdown from 'components/dropdown'
import IconButton from 'components/icon-button'
import CartItem from './cart-item'

const CartIcon = () => {
  const [{ cart, showCart }, actions] = useGlobal()
  const safeCart = isArray(cart) ? cart : []
  const cartRef = useRef(null)
  const hideCart = async () => {
    await sleep(8000)
    actions.hideCart()
  }
  useEffect(() => {
    if (showCart) {
      hideCart()
    }
  }, [showCart])
  return (
    <div className="relative">
      <IconButton ref={cartRef} aria-label="Carrinho" href={api.vnda.CART_URL}>
        {!!safeCart.length && (
          <span className="absolute flex h-2 w-2 right-0 top-0 transform translate-y-1 -translate-x-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full border-2 border-green-500 bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
        )}
        <FaShoppingCart />
      </IconButton>
      <Dropdown className="divide-y" onClose={actions.hideCart} open={showCart}>
        <p className="text-sm py-2 px-4">Adicionado recentemente</p>
        {take(safeCart, 3).map((cartItem) => (
          <CartItem key={cartItem.id} {...cartItem} />
        ))}
        <p className="flex flex-col p-2 pb-1">
          <CTAButton href={api.vnda.CART_URL}>Ver carrinho</CTAButton>
        </p>
      </Dropdown>
    </div>
  )
}

export default CartIcon
