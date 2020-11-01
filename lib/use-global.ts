import uniqBy from 'lodash/uniqBy'
import useStore from 'lib/use-store'

import api from 'lib/api'
import { initialState } from 'lib/constants'
import { getCartToken, getCart } from 'lib/domain'

import { Store } from 'types/global-state'

export default useStore(
  {
    addToCart: async (store: Store, sku: string, quantity = 1) => {
      const token = await getCartToken()
      const result = await api.vnda.post(`cart/${token}/add`, { sku, quantity })
      store.setState({
        cart: result,
        showCart: true,
      })
      return true
    },
    listCart: async (store: Store) => {
      const cart = await getCart()
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
