import find from 'lodash/find'
import uniqBy from 'lodash/uniqBy'
import useStore from 'lib/use-store'
import Cookies from 'js-cookie'

import api from 'lib/api'
import { initialState } from 'lib/constants'

import { Store } from 'types/global-state'

export default useStore(
  {
    addToCart: async (store: Store, sku: string, quantity = 1) => {
      const existing = find(
        store.state.cart,
        (item) => item.variant_sku === sku,
      )
      await api.vnda.addToCart(
        sku,
        existing ? existing.quantity + quantity : quantity,
      )
      const result = await api.vnda.listCart()
      store.setState({
        cart: result,
        showCart: true,
      })
      return true
    },
    getCartItems: (store: Store) => {
      const cartId = Cookies.get('cart_id')
      if (cartId) {
        api.vnda
          .listCart()
          .then((result) => {
            if (result.status === 404) {
              Cookies.remove('cart_id')
            } else {
              store.setState({
                cart: result || [],
              })
            }
          })
          .catch(() => {
            Cookies.remove('cart_id')
          })
      }
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
