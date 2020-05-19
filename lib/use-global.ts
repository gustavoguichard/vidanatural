import useStore from 'lib/use-store'
import Cookies from 'js-cookie'
import { Store } from 'types/global-state'
import find from 'lodash/find'
import api from 'lib/api'
import { initialState } from 'lib/constants'

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
        api
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
    hideCart: async (store: Store) => {
      store.setState({ showCart: false })
    },
    openSearch: (store: Store) => {
      store.setState({ searchOpen: true })
    },
    closeSearch: (store: Store) => {
      store.setState({ searchOpen: false })
    },
  },
  initialState,
)
