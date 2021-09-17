import isObject from 'lodash/isObject'
import compact from 'lodash/fp/compact'

const normalizeBody = (body: undefined | string | object, method: string) => {
  if (['HEAD', 'GET', 'DELETE'].includes(method)) return undefined

  return isObject(body) ? JSON.stringify(body) : body
}

const getAPIPath = (path: string, bff = false) =>
  [
    bff ? 'api/' : `https://${process.env.NEXT_PUBLIC_API_DOMAIN}/api/v2/`,
    path.replace(/^\//, ''),
  ].join('')

const getUrl = (path: string, params?: URLSearchParams) => {
  const url = `https://${process.env.NEXT_PUBLIC_API_DOMAIN}/${path}`
  const query = new URLSearchParams(params).toString()
  return compact([url, query]).join('?')
}

const getResizedImg = (url: string, w = 200, h = w) => {
  const DOMAIN_REG =
    /((http(s)?\:\/\/)?(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,11}?)/
  const result = url.replace(DOMAIN_REG, `$1/${w}x${h}`)
  return result.replace(/^(\/\/.+)/, 'https:$1')
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

const vndaUtils = {
  clearCartInfo,
  getAPIPath,
  getLocalToken,
  getOwnPath,
  getResizedImg,
  getUrl,
  normalizeBody,
}

export default vndaUtils
