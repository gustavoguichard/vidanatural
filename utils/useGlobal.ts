import useStore from 'utils/useStore'
import { sleep } from 'utils/helpers'
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
      // const result = await api.listCart()
      await sleep(2000)
      store.setState({
        cart: result,
        showCart: true,
      })
      return true
    },
    getCartItems: async () => {
      // getCartItems: async (store: Store) => {
      // const result = await api.listCart()
      // store.setState({
      //   cart: result,
      // })
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

const result = [
  {
    id: 6,
    quantity: 2,
    price: 23.0,
    total: 46.0,
    product_url:
      'https://vidanatural.vnda.com.br/produto/desodorante-em-pasta-maior-protecao-40g-1',
    image_url:
      '//b0.vnda.com.br/vidanatural/2019/09/17/0606529335496-desodorante-em-pasta-maior-protecao-40g-1.jpg?1568739232.93135',
    product_name: 'Desodorante em Pasta - Maior proteção - 40g',
    variant_sku: '0001',
    variant_name: 'Desodorante Pasta',
  },
  {
    id: 16,
    quantity: 1,
    price: 12.0,
    total: 12.0,
    product_url: 'https://vidanatural.vnda.com.br/produto/po-dental-20g-2',
    image_url:
      '//b0.vnda.com.br/vidanatural/2019/09/18/0606529335571-po-dental-20g-5.jpg?1568842425.5696',
    product_name: 'Pó dental 20g',
    variant_sku: '0007',
    variant_name: 'Pó dental',
  },
]
