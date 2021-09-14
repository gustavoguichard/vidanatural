import uniqBy from 'lodash/uniqBy'
import createStore, { Store } from 'lib/create-store'

import api from 'lib/api'
import { initialState } from 'lib/constants'

import type { Cart } from 'types/vnda'
import type { Notification } from 'types/global-state'

const updateCart = (store: Store, cart: Cart) => {
  if (cart.id) {
    store.setState({ cart, updatingCart: false })
  } else {
    store.setState({ updatingCart: false })
  }
}

export default createStore(
  {
    updateItem: async (store: Store, id: number, quantity = 1) => {
      store.setState({ updatingCart: true })
      const token = await api.vnda.cart.getCartToken()
      const cart = await api.vnda.clientFetch(
        `cart/${token}/update-quantity`,
        'POST',
        {
          id,
          quantity,
        },
      )
      updateCart(store, cart)
      return true
    },
    addCoupon: async (store: Store, coupon: string) => {
      store.setState({ updatingCart: true })
      const token = await api.vnda.cart.getCartToken()
      await api.vnda.clientFetch(`cart/${token}/coupon`, 'POST', { coupon })
      const cart = await api.vnda.cart.getCart()
      updateCart(store, cart)
      return cart
    },
    addToCart: async (store: Store, sku: string, quantity = 1) => {
      store.setState({ showCart: true, updatingCart: true })
      const { token } = await api.vnda.cart.getCart()
      const cart = await api.vnda.clientFetch(`cart/${token}/add`, 'POST', {
        sku,
        quantity,
      })
      updateCart(store, cart)
      return true
    },
    updateZip: async (store: Store, zip: string) => {
      store.setState({ updatingCart: true })
      const token = await api.vnda.cart.getCartToken()
      const cart = await api.vnda.clientFetch(`cart/${token}/zip`, 'POST', {
        zip,
      })
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
      const token = await api.vnda.cart.getCartToken()
      const cart = await api.vnda.clientFetch(`cart/${token}/remove`, 'POST', {
        id,
      })
      store.setState({ cart, updatingCart: false })
    },
    updateShippingPrice: (
      store: Store,
      freeShippingPrice = initialState.freeShippingPrice,
    ) => {
      store.setState({ freeShippingPrice })
    },
    listCart: async (store: Store) => {
      const cart = await api.vnda.cart.getCart()
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
    notify: (store: Store, notification: Partial<Notification>) => {
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
