import { joinWith } from 'lib/utils'
import vnda from 'lib/api/vnda2'

import type { FormKeys } from 'types/vnda'

const getUrl = (path: string, params?: URLSearchParams, proxy?: boolean) => {
  const base = proxy
    ? process.env.NEXT_PUBLIC_API_PROXY
    : `https://${process.env.NEXT_PUBLIC_API_DOMAIN}/`
  const formattedPath = proxy ? path.replace('/', '::') : path
  const query = new URLSearchParams(params).toString()
  const url = joinWith([base, formattedPath])
  return joinWith([url, query], '?')
}

const doRequest = async (
  url: string,
  method = 'GET',
  returnArray?: boolean,
) => {
  const requestParams = {
    headers: { Accept: 'application/json' },
    method,
  } as RequestInit
  const res = await fetch(url, requestParams)
  const data = res.status >= 400 ? (returnArray ? [] : res) : await res.json()
  return data
}

interface ShippingParams {
  sku: number
  zip: string
  quantity?: number
}
const calculateShipping = async ({ sku, quantity, zip }: ShippingParams) => {
  const url = getUrl('frete_produto', ({
    sku,
    quantity,
    zip,
  } as unknown) as URLSearchParams)
  return doRequest(url, 'POST')
}

const textSearch = async (q: string) => {
  const url = getUrl('busca', ({ q } as unknown) as URLSearchParams)
  return doRequest(url)
}

const sendForm = async (values: FormKeys) => {
  const { a_password, key, ...otherValues } = values

  if (!!a_password || !key) {
    return false
  }

  const url = getUrl('webform', ({
    key,
    ...otherValues,
  } as unknown) as URLSearchParams)
  const response = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  })

  return response.status < 400
}

const listProducts = async () => {
  const url = getUrl('busca')
  return doRequest(url, 'GET', true)
}

const getResizedImg = (url: string, w = 200, h = w) => {
  const DOMAIN_REG = /((http(s)?\:\/\/)?(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,11}?)/
  const result = url.replace(DOMAIN_REG, `$1/${w}x${h}`)
  return result.match(/^\/\//) ? `https:${result}` : result
}

const getOwnPath = (url: string) => {
  try {
    const urlObj = new URL(url)
    return urlObj.pathname + urlObj.search
  } catch (e) {
    return url
  }
}

const clearCartInfo = () => {
  localStorage.removeItem('vn_cart_token')
}

const getLocalToken = () => localStorage.getItem('vn_cart_token')

const getCartToken = async () => {
  const token = getLocalToken()
  if (token) return token
  const cart = await getCart()
  return cart.token
}

const getCart = async () => {
  const token = getLocalToken()
  let result
  if (token) {
    try {
      result = await vnda.clientFetch(`cart/${token}`)
      if (!(result && result.id) || result.status === 404) {
        clearCartInfo()
      }
    } catch (err) {
      clearCartInfo()
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

export default {
  getCart,
  getCartToken,
  getUrl,
  getOwnPath,
  getResizedImg,
  getLocalToken,
  fetch: vnda.fetch,
  clientFetch: vnda.clientFetch,
  calculateShipping,
  sendForm,
  listProducts,
  textSearch,
}
