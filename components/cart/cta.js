import { useState, useEffect } from 'react'

import api from 'lib/api'
import analytics from 'lib/analytics'
import { toCurrency } from 'lib/utils'

import CTAButton from 'components/cta-button'

const CartCTA = ({ cart, items }) => {
  const [cartUrl, setCartUrl] = useState()
  useEffect(() => {
    if (cart.token) {
      const url = api.vnda.getUrl(`pagamento/${cart.token}`)
      setCartUrl(url)
    }
  }, [cart.token])
  const handleClick = () => {
    analytics.track('InitiateCheckout')
  }

  return items.length ? (
    <footer className="sticky bottom-0 bg-white border flex flex-col p-2">
      <p className="flex justify-between font-semibold mb-2 px-2">
        <span>Total estimado</span>
        <span>{toCurrency(cart.total)}</span>
      </p>
      <CTAButton onClick={handleClick} href={cartUrl}>
        Fechar pedido
      </CTAButton>
    </footer>
  ) : null
}

export default CartCTA
