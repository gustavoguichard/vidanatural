import get from 'lodash/get'
import fetch from 'isomorphic-unfetch'
import { buildQuery, joinWith } from 'utils/helpers'
import Cookies from 'js-cookie'

const saveCookie = (headers: Headers) => {
  const cookie = headers.get('Biscuit')
  if (cookie && typeof window !== 'undefined') {
    const [id, tail] = cookie.split('=')
    const value = tail.substring(0, tail.indexOf(';'))
    if (!!value) {
      Cookies.set(id, value)
    }
  }
}

const getUrl = (path: string, params?: object, proxy?: boolean) => {
  const base = proxy
    ? process.env.API_PROXY
    : `https://${process.env.API_DOMAIN}/`
  const formattedPath = proxy ? path.replace('/', '::') : path
  const query = buildQuery(params)
  const url = joinWith([base, formattedPath])
  return joinWith([url, query], '?')
}

const doRequest = async (url: string, params = {}, proxy?: boolean) => {
  const requestParams = {
    method: 'GET',
    headers: {
      ...get(params, 'headers'),
      Accept: 'application/json',
    },
    ...params,
    credentials: proxy ? 'include' : undefined,
  } as any
  const res = await fetch(url, requestParams)
  const data = res.status >= 400 ? [] : await res.json()
  saveCookie(res.headers)
  return data
}

const fetchApi = (path = '', query?: object, proxy = false) => {
  const url = getUrl(path, query, proxy)
  return doRequest(url, {}, proxy)
}

const post = (path = '', query?: object, params?: object, proxy = false) => {
  const url = getUrl(path, query, proxy)
  return doRequest(url, { ...params, method: 'POST' }, proxy)
}

const search = (params?: object) => fetchApi('busca', params, true)

const textSearch = (text: string) => fetchApi('busca', { q: text }, true)

const listCart = () => fetchApi('carrinho/popup', {}, true)

const listProduct = (slug: string) => fetchApi(`produto/${slug}`, {}, true)

const listPage = (slug: string) => fetchApi(`p/${slug}`, {}, true)

const addToCart = (sku: string, quantity = 1) =>
  post('carrinho/adicionar', { sku, quantity }, {}, true)

const getUrlObject = (url: string) => {
  const formattedUrl = url.startsWith('//')
    ? joinWith([window.location.protocol, url])
    : url.startsWith('http')
    ? url
    : joinWith([window.location.origin, url])
  const urlObject = new URL(formattedUrl)
  return urlObject
}

export const getResizedImg = (url: string, w = 200, h = w) => {
  const DOMAIN_REG = /((http(s)?\:\/\/)?(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,11}?)/
  return url.replace(DOMAIN_REG, `$1/${w}x${h}`)
}

export const getOwnPath = (url: string) => {
  const urlObj = getUrlObject(url)
  return joinWith([urlObj.pathname, urlObj.search])
}

export default {
  fetch: fetchApi,
  post,
  addToCart,
  listCart,
  listProduct,
  listPage,
  search,
  textSearch,
  CART_URL: getUrl('carrinho'),
}
