import useStore from 'utils/useStore'
import { Store } from 'utils/typeDeclarations'
import find from 'lodash/find'
import api from 'utils/api'
import { parseCookies } from 'utils/helpers'

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
      const cookies = parseCookies(document.cookie)
      if (cookies.hasOwnProperty('cart_id')) {
        api
          .listCart()
          .then(result => {
            store.setState({
              cart: result,
            })
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
