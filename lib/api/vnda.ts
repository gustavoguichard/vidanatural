import vnda from './vnda-api2'
import endpoints from './vnda-endpoints'
import cart from './vnda-cart'
import utils from './vnda-utils'

const vndaApi = {
  cart,
  utils,
  endpoints,
  fetch: vnda.fetch,
  clientFetch: vnda.clientFetch,
  fetchFromAPI: vnda.fetchFromAPI,
}

export default vndaApi
