import get from 'lodash/get'
import sumBy from 'lodash/sumBy'

import api from 'lib/api'
import { toCurrency } from 'lib/utils'
import useGlobal from 'lib/use-global'

import CartItem from 'components/cart-item'
import CTAButton from 'components/cta-button'
import CloseButton from 'components/close-button'
import Drawer from 'components/drawer'
import Link from 'components/link'

const Cart = () => {
  const [{ cart, showCart }, actions] = useGlobal()
  const safeItems = get(cart, 'items', [])
  const quantity = sumBy(safeItems, 'quantity')
  const subtotal = safeItems.reduce(
    (sum, curr) => sum + curr.variant_price * curr.quantity,
    0,
  )
  const hasDisconts = subtotal > cart.total
  return (
    <Drawer
      open={showCart}
      onClose={actions.hideCart}
      onOpen={actions.openCart}
      anchor="right"
      className="w-full sm:max-w-sm flex flex-col"
    >
      <div className="relative flex-grow flex flex-col max-h-full overflow-scroll overscroll-contain">
        <div className="sticky top-0 bg-white shadow-sm border-b text-sm py-1 px-4 flex items-center">
          <CloseButton onClick={actions.hideCart} />
          <p className="flex-grow ml-2 font-semibold">Seu carrinho</p>
          <span>{quantity} itens</span>
        </div>
        <div className="flex flex-wrap p-1 items-start bg-gray-50 flex-grow">
          {safeItems.map((cartItem) => (
            <CartItem actions={actions} key={cartItem.id} {...cartItem} />
          ))}
        </div>
        <div className="bg-gray-50 mx-4 mt-2 py-4 text-sm flex flex-col">
          <p className="flex justify-between mb-1">
            <span className="font-semibold">Subtotal</span>
            <span className="font-semibold">{toCurrency(subtotal)}</span>
          </p>
          {hasDisconts && (
            <p className="flex justify-between mb-1">
              <span className="font-semibold">Descontos</span>
              <span className="font-semibold">
                {toCurrency(-subtotal + cart.total)}
              </span>
            </p>
          )}
          <p className="text-xs my-1 text-gray-500 leading-tight">
            Promoções e custos com frete serão calculados na finalização da
            compra.
          </p>
          <p className="text-xs text-gray-700 leading-tight">
            Ao prosseguir para a finalização da compra eu concordo que tenho
            conhecimento dos{' '}
            <Link
              href="/termos-e-condicoes"
              className="underline hover:text-teal-600"
            >
              Termos e condições
            </Link>
            .
          </p>
        </div>
        <footer className="sticky bottom-0 bg-white border flex flex-col p-2 pb-1">
          <p className="flex justify-between font-semibold mb-2 px-2">
            <span>Total estimado</span>
            <span>{toCurrency(cart.total)}</span>
          </p>
          <CTAButton href={api.vnda.CART_URL}>Fechar pedido</CTAButton>
        </footer>
      </div>
    </Drawer>
  )
}

export default Cart
