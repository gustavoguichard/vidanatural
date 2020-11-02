import uniqBy from 'lodash/uniqBy'
import useStore from 'lib/use-store'

import api from 'lib/api'
import { initialState } from 'lib/constants'

import { Store } from 'types/global-state'

export default useStore(
  {
    updateItem: async (store: Store, id: number, quantity = 1) => {
      store.setState({ updatingCart: true })
      const token = await api.vnda.getCartToken()
      const result = await api.vnda.post(`cart/${token}/update-quantity`, {
        id,
        quantity,
      })
      store.setState({ cart: result, updatingCart: false })
      return true
    },
    addCoupon: async (store: Store, coupon: string) => {
      store.setState({ updatingCart: true })
      const token = await api.vnda.getCartToken()
      await api.vnda.post(`cart/${token}/coupon`, { coupon })
      const cart = await api.vnda.getCart()
      store.setState({ cart, updatingCart: false })
      return cart
    },
    addToCart: async (store: Store, sku: string, quantity = 1) => {
      store.setState({ showCart: true, updatingCart: true })
      const token = await api.vnda.getCartToken()
      const result = await api.vnda.post(`cart/${token}/add`, { sku, quantity })
      store.setState({ cart: result, updatingCart: false })
      return true
    },
    updateZip: async (store: Store, zip: string) => {
      store.setState({ updatingCart: true })
      const token = await api.vnda.getCartToken()
      const cart = await api.vnda.post(`cart/${token}/zip`, { zip })
      store.setState({ cart, updatingCart: false })
      return cart
    },
    removeFromCart: async (store: Store, id: number) => {
      store.setState({ updatingCart: true })
      const token = await api.vnda.getCartToken()
      const cart = await api.vnda.fetch(`cart/${token}/remove`, 'POST', { id })
      store.setState({ cart, updatingCart: false })
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
    dismissNotification: (store: Store, notification: Notification) => {
      store.setState({
        notifications: store.state.notifications.filter(
          (n: Notification) => n.id !== notification.id,
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
