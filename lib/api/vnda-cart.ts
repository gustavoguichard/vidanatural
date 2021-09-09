import vnda from './vnda-api2'
import utils from './vnda-utils'

const getCartToken = async () => {
  const token = utils.getLocalToken()
  if (token) return token
  const cart = await getCart()
  return cart.token
}

const getCart = async () => {
  const token = utils.getLocalToken()
  let result
  if (token) {
    try {
      result = await vnda.clientFetch(`cart/${token}`)
      if (!(result && result.id) || result.status === 404) {
        utils.clearCartInfo()
      }
    } catch (err) {
      utils.clearCartInfo()
    }
  }
  if (!(result && result.id) || result.status === 404) {
    result = await vnda.clientFetch('cart/create')
  }
  if (result && result.token) {
    localStorage.setItem('vn_cart_token', result.token)
  }
  return result
}

const vndaCart = {
  getCart,
  getCartToken,
}

export default vndaCart
