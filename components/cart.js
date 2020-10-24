import isArray from 'lodash/isArray'
import sumBy from 'lodash/sumBy'

import api from 'lib/api'
import useGlobal from 'lib/use-global'

import CTAButton from 'components/cta-button'
import CloseButton from 'components/close-button'
import Drawer from 'components/drawer'
import CartItem from 'components/cart-item'

const Cart = () => {
  const [{ cart, showCart }, actions] = useGlobal()
  const safeCart = isArray(cart) ? cart : []
  const quantity = sumBy(safeCart, 'quantity')
  return (
    <Drawer
      open={showCart}
      onClose={actions.hideCart}
      onOpen={actions.openCart}
      anchor="right"
      className="w-full sm:max-w-md flex flex-col"
    >
      <div className="relative flex-grow flex flex-col max-h-full overflow-scroll overscroll-contain">
        <div className="sticky top-0 bg-white shadow-sm border-b text-sm py-2 px-4 flex items-center">
          <CloseButton onClick={actions.hideCart} />
          <p className="flex-grow ml-2 font-semibold">Seu carrinho</p>
          <span>{quantity} ítens</span>
        </div>
        <div className="flex flex-wrap p-1 sm:items-start bg-gray-50 flex-grow">
          {safeCart.map((cartItem) => (
            <CartItem actions={actions} key={cartItem.id} {...cartItem} />
          ))}
        </div>
        <p className="sticky bottom-0 bg-white border flex flex-col p-2 pb-1 px-4">
          <CTAButton href={api.vnda.CART_URL}>Ver carrinho</CTAButton>
        </p>
      </div>
    </Drawer>
  )
}

export default Cart
