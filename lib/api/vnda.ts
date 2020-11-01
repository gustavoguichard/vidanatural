import get from 'lodash/get'
import flatten from 'lodash/flatten'
import Cookies from 'js-cookie'

import { buildQuery, joinWith } from 'lib/utils'
import vnda from 'lib/api/vnda2'

import { FormKeys } from 'types/vnda'

const saveCookie = (headers: Headers) => {
  const cookie = headers.get('Biscuit')
  if (cookie && typeof window !== 'undefined') {
    const entries = cookie.split(', ')
    const values = flatten(entries.map((val) => val.split('; ')))
    values.forEach((value) => {
      const [key, val] = value.split('=')
      if (!!val) {
        Cookies.set(key, val)
      }
    })
  }
}

const getUrl = (path: string, params?: object, proxy?: boolean) => {
  const base = proxy
    ? process.env.NEXT_PUBLIC_API_PROXY
    : `https://${process.env.NEXT_PUBLIC_API_DOMAIN}/`
  const formattedPath = proxy ? path.replace('/', '::') : path
  const query = buildQuery(params)
  const url = joinWith([base, formattedPath])
  return joinWith([url, query], '?')
}

const doRequest = async (
  url: string,
  params = {},
  proxy?: boolean,
  returnArray?: boolean,
) => {
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
  const data = res.status >= 400 ? (returnArray ? [] : res) : await res.json()
  saveCookie(res.headers)
  return data
}

const fetchApi = async (
  path = '',
  query?: object,
  proxy = false,
  returnArray = true,
) => {
  const url = getUrl(path, query, proxy)
  return doRequest(url, {}, proxy, returnArray)
}

const post = async (
  path = '',
  query?: object,
  params?: object,
  proxy = false,
) => {
  const url = getUrl(path, query, proxy)
  return doRequest(url, { ...params, method: 'POST' }, proxy)
}

const sendForm = async (values: FormKeys) => {
  const { a_password, key, ...otherValues } = values

  if (!!a_password || !key) {
    return false
  }

  const url = getUrl('webform', { key, ...otherValues })
  const response = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  })

  return response.status < 400
}

const search = (params?: object) => fetchApi('busca', params, true)

const textSearch = (text: string) => fetchApi('busca', { q: text }, true)

const listCart = () => fetchApi('carrinho/popup', {}, true, false)

const listPage = (slug: string) => fetchApi(`p/${slug}`, {}, true)

const registerCoupon = (coupon: string) =>
  fetchApi(`cep/88060100?ccc=${coupon}`, {}, true)

interface ShippingParams {
  sku: number
  zip: string
  quantity?: number
}
const calculateShipping = ({ sku, quantity, zip }: ShippingParams) =>
  post(`frete_produto`, { sku, quantity, zip }, {}, true)

const addToCart = (sku: string, quantity = 1) =>
  post('carrinho/adicionar', { sku, quantity }, {}, true)

const getResizedImg = (url: string, w = 200, h = w) => {
  const DOMAIN_REG = /((http(s)?\:\/\/)?(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,11}?)/
  return url.replace(DOMAIN_REG, `$1/${w}x${h}`)
}

const getOwnPath = (url: string) => {
  try {
    const urlObj = new URL(url)
    return urlObj.pathname + urlObj.search
  } catch (e) {
    return url
  }
}

export default {
  getOwnPath,
  getResizedImg,
  fetch: vnda.fetch,
  post: vnda.post,
  addToCart,
  calculateShipping,
  listCart,
  listPage,
  registerCoupon,
  sendForm,
  search,
  textSearch,
  CART_URL:
    process.env.NODE_ENV === 'development' ? getUrl('carrinho') : '/carrinho',
}
