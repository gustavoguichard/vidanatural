import useStore from 'utils/useStore'
import Cookies from 'js-cookie'
import { Store } from 'utils/typeDeclarations'
import find from 'lodash/find'
import api from 'utils/api'

const initialState = {
  cart: [],
  showCart: false,
  searchOpen: false,
}

export default useStore(
  {
    addToCart: async (store: Store, sku: string, quantity = 1) => {
      const existing = find(store.state.cart, item => item.variant_sku === sku)
      await api.addToCart(
        sku,
        existing ? existing.quantity + quantity : quantity,
      )
      const result = await api.listCart()
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
          .then(result => {
            if (result.status === 404) {
              Cookies.remove('cart_id')
            } else {
              store.setState({
                cart: result || [],
              })
            }
          })
          .catch(() => console.warn('Not able to get cart'))
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
