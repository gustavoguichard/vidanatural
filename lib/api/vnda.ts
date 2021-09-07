import vnda from 'lib/api/vnda-api2'
import endpoints from 'lib/api/vnda-endpoints'
import cart from 'lib/api/vnda-cart'
import utils from 'lib/api/vnda-utils'

const vndaApi = {
  cart,
  utils,
  endpoints,
  fetch: vnda.fetch,
  clientFetch: vnda.clientFetch,
  fetchFromAPI: vnda.fetchFromAPI,
}

export default vndaApi
