import api from 'lib/api'
import { toCurrency } from 'lib/utils'

import CTAButton from 'components/cta-button'

const CartCTA = ({ cart, items }) =>
  items.length ? (
    <footer className="sticky bottom-0 bg-white border flex flex-col p-2">
      <p className="flex justify-between font-semibold mb-2 px-2">
        <span>Total estimado</span>
        <span>{toCurrency(cart.total)}</span>
      </p>
      <CTAButton href={api.vnda.CART_URL}>Fechar pedido</CTAButton>
    </footer>
  ) : null

export default CartCTA
