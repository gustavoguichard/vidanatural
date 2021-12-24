import { useState, useEffect, memo } from 'react'

import api from 'lib/api'
import useGlobal from 'lib/use-global'

import Drawer from 'components/drawer'
import CartCTA from './cta'
import CartCoupon from './coupon'
import CartEmpty from './empty'
import CartHeader from './header'
import CartItem from './item'
import CartLoading from './loading'
import CartShipping from './shipping'
import CartSummary from './summary'

const Cart = () => {
  const [{ cart, showCart }, actions] = useGlobal()
  const [shipping, setShipping] = useState({ loading: false, methods: [] })

  const getShipping = async () => {
    setShipping({ loading: true, methods: shipping.methods })
    const token = await api.vnda.cart.getCartToken()
    const response = await api.vnda.clientFetch(
      `cart/${token}/shipping-methods`,
    )
    setShipping({ loading: false, methods: response || [] })
  }

  useEffect(() => {
    if (cart.shipping_address_id) {
      getShipping()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart.shipping_address_id, cart.subtotal])

  const safeItems = cart?.items ?? []
  return (
    <Drawer
      open={showCart}
      onClose={actions.hideCart}
      onOpen={actions.openCart}
      anchor="right"
      className="flex flex-col w-full sm:max-w-sm"
    >
      <CartLoading />
      <div className="relative flex flex-col grow max-h-full overflow-scroll overscroll-contain">
        <CartHeader actions={actions} items={safeItems} />
        <CartShipping cart={cart} items={safeItems} {...shipping} />
        <div className="flex flex-wrap items-start grow p-1 bg-gray-50">
          {!!safeItems.length || <CartEmpty />}
          {safeItems.map((cartItem) => (
            <CartItem actions={actions} key={cartItem.id} item={cartItem} />
          ))}
        </div>
        <CartCoupon actions={actions} cart={cart} items={safeItems} />
        <CartSummary cart={cart} items={safeItems} />
        <CartCTA cart={cart} items={safeItems} />
      </div>
    </Drawer>
  )
}

export default memo(Cart)
