import uniqBy from 'lodash/uniqBy'
import useStore from 'lib/use-store'

import api from 'lib/api'
import { initialState } from 'lib/constants'

import type { Store } from 'types/global-state'
import type { Cart } from 'types/vnda'

const updateCart = (store: Store, cart: Cart) => {
  if (cart.id) {
    store.setState({ cart, updatingCart: false })
  } else {
    store.setState({ updatingCart: false })
  }
}

export default useStore(
  {
    updateItem: async (store: Store, id: number, quantity = 1) => {
      store.setState({ updatingCart: true })
      const token = await api.vnda.getCartToken()
      const cart = await api.vnda.post(`cart/${token}/update-quantity`, {
        id,
        quantity,
      })
      updateCart(store, cart)
      return true
    },
    addCoupon: async (store: Store, coupon: string) => {
      store.setState({ updatingCart: true })
      const token = await api.vnda.getCartToken()
      await api.vnda.post(`cart/${token}/coupon`, { coupon })
      const cart = await api.vnda.getCart()
      updateCart(store, cart)
      return cart
    },
    addToCart: async (store: Store, sku: string, quantity = 1) => {
      store.setState({ showCart: true, updatingCart: true })
      const { token } = await api.vnda.getCart()
      const cart = await api.vnda.post(`cart/${token}/add`, { sku, quantity })
      updateCart(store, cart)
      return true
    },
    updateZip: async (store: Store, zip: string) => {
      store.setState({ updatingCart: true })
      const token = await api.vnda.getCartToken()
      const cart = await api.vnda.post(`cart/${token}/zip`, { zip })
      if (cart.id) {
        store.setState({
          cart,
          updatingCart: false,
          freeShippingPrice: initialState.freeShippingPrice,
        })
      } else {
        store.setState({
          updatingCart: false,
          freeShippingPrice: initialState.freeShippingPrice,
        })
      }
      return cart
    },
    removeFromCart: async (store: Store, id: number) => {
      store.setState({ updatingCart: true })
      const token = await api.vnda.getCartToken()
      const cart = await api.vnda.fetch(`cart/${token}/remove`, 'POST', { id })
      store.setState({ cart, updatingCart: false })
    },
    updateShippingPrice: (
      store: Store,
      freeShippingPrice = initialState.freeShippingPrice,
    ) => {
      store.setState({ freeShippingPrice })
    },
    listCart: async (store: Store) => {
      const cart = await api.vnda.getCart()
      store.setState({ cart })
    },
    openCart: async (store: Store) => {
      store.setState({ showCart: true })
    },
    hideCart: async (store: Store) => {
      store.setState({ showCart: false })
    },
    openSearch: (store: Store) => {
      store.setState({ searchOpen: true })
    },
    closeSearch: (store: Store) => {
      store.setState({ searchOpen: false })
    },
    subscribe: (store: Store) => {
      store.setState({ subscribed: true })
    },
    notify: (store: Store, notification: Notification) => {
      store.setState({
        notifications: uniqBy(
          [
            ...store.state.notifications,
            {
              ...notification,
              id: notification.id || new Date().getTime(),
              type: notification.type || 'info',
            },
          ],
          'id',
        ),
      })
    },
    dismissNotification: (store: Store, id: string | number) => {
      store.setState({
        notifications: store.state.notifications.filter(
          (n: Notification) => n.id !== id,
        ),
      })
    },
  },
  initialState,
)

interface Notification {
  id: number
  message?: string
  htmlMessage?: string
  persist?: boolean
  type: 'alert' | 'info'
}
