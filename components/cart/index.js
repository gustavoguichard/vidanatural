import { useState } from 'react'
import get from 'lodash/get'

import useGlobal from 'lib/use-global'

import Drawer from 'components/drawer'
import CartCTA from './cta'
import CartEditing from './editing'
import CartEmpty from './empty'
import CartHeader from './header'
import CartItem from './item'
import CartLoading from './loading'
import CartSummary from './summary'

const Cart = () => {
  const [{ cart, showCart }, actions] = useGlobal()
  const [editing, setEditing] = useState()

  const safeItems = get(cart, 'items', [])
  return (
    <Drawer
      open={showCart}
      onClose={actions.hideCart}
      onOpen={actions.openCart}
      anchor="right"
      className="w-full sm:max-w-sm flex flex-col"
    >
      <CartEditing
        actions={actions}
        item={editing}
        onClose={() => setEditing()}
      />
      <CartLoading />
      <div className="relative flex-grow flex flex-col max-h-full overflow-scroll overscroll-contain">
        <CartHeader actions={actions} items={safeItems} />
        <div className="flex flex-wrap p-1 items-start bg-gray-50 flex-grow">
          {!!safeItems.length || <CartEmpty />}
          {safeItems.map((cartItem) => (
            <CartItem
              onEdit={setEditing}
              actions={actions}
              key={cartItem.id}
              item={cartItem}
            />
          ))}
        </div>
        <CartSummary cart={cart} items={safeItems} />
        <CartCTA cart={cart} items={safeItems} />
      </div>
    </Drawer>
  )
}

export default Cart
