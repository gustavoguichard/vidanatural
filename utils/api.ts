import fetch from 'isomorphic-unfetch'
import { buildQuery } from 'utils/helpers'

const headers = { Accept: 'application/json' }

const getUrl = (path: string, params?: object) => {
  const base = process.env.API_BASE
  const query = buildQuery(params)
  const url = path.startsWith('/') ? `${base}${path}` : `${base}/${path}`
  return query ? `${url}?${query}` : url
}

const doRequest = async (url: string, params = {}) => {
  const requestParams = { headers, method: 'GET', ...params }
  const res = await fetch(url, requestParams)
  const data = res.status >= 400 ? [] : await res.json()
  return { data }
}

const fetchApi = (path = '', query?: object) => {
  const url = getUrl(path, query)
  return doRequest(url)
}

const post = (path = '', query?: object, params?: object) => {
  const url = getUrl(path, query)
  return doRequest(url, { ...params, method: 'POST' })
}

const search = (params?: object) => fetchApi('busca', params)

const textSearch = (text: string) => fetchApi('busca', { q: text })

const listCart = () => fetchApi('carrinho/popup')

const listProduct = async (slug: string) => {
  const response = await fetchApi(`produto/${slug}`)
  return response.data
}

const addToCart = (sku: 'string', quantity = 1) =>
  post('carrinho/adicionar', { sku, quantity })

export const getResizedImg = (url: string, w = 200, h = w) => {
  const imgUrl = new URL(url)
  return `${imgUrl.origin}/${w}x${h}${imgUrl.pathname}${imgUrl.search}`
}

export default {
  fetch: fetchApi,
  post,
  addToCart,
  listCart,
  listProduct,
  search,
  textSearch,
  CART_URL: getUrl('carrinho'),
}
