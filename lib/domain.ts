import get from 'lodash/get'
import map from 'lodash/map'
import truncate from 'lodash/truncate'
import reduce from 'lodash/reduce'
import uniqBy from 'lodash/uniqBy'
import Cookies from 'js-cookie'

import api from 'lib/api'
import { getReadTime, toCurrency } from 'lib/utils'

import { PostBody } from 'types/cms'
import { VndaProduct, ProductTag } from 'types/vnda'

export const timeSince = (date: number) => {
  const now = new Date()
  const then = new Date(date)
  const seconds = Math.floor((now.getTime() - then.getTime()) / 1000)
  const minute = 60
  const hour = 60 * minute
  const day = 24 * hour
  const week = 7 * day
  const month = 30 * day
  const year = 365 * day
  const timeSpans = [year, month, week, day, hour, minute]
  const labels = [
    ['ano'],
    ['mês', 'meses'],
    ['semana'],
    ['dia'],
    ['hora'],
    ['minuto'],
  ]

  const [interval, idx] = timeSpans.reduce(
    (result, curr, i) => {
      if (result[1] >= 0) return result
      const total = (seconds + 1) / curr
      return total > 1 ? [total, i] : result
    },
    [0, -1],
  )
  if (idx < 0) {
    return `${seconds} segundo${seconds > 1 ? 's' : ''}`
  }

  const [label, plural] = labels[idx]
  const total = Math.floor(interval)
  return `${total} ${total > 1 ? plural || label + 's' : label}`
}

export const calculatePostReadTime = (body: PostBody[]) => {
  const paragraphs = body.filter((b) => b.type === 'paragraph')
  const text = map(paragraphs, 'text').join(' ')
  return `${getReadTime(text)} min`
}

export const getExcerpt = (body: PostBody[], length = 200) => {
  const paragraph = body.find((b) => b.type === 'paragraph') || { text: '' }
  return truncate(paragraph.text, { length })
}

export const isEmptyBody = (body?: PostBody[]) => {
  return !body || getExcerpt(body) === ''
}

export const resolveLink = (link: string) => {
  const url = new URL(link)
  const isLocal = url.hostname.includes('vidanatural.eco.br')
  const result = isLocal ? `${url.pathname}${url.search}` : url
  return result
}

export const getCategoryTags = (products: VndaProduct[], addSales = true) => {
  const isCategoryType = (cat: ProductTag) => cat.type === 'product_cat'
  const allCategoryTags = reduce(
    products,
    (result, product) => [
      ...result,
      ...(product.tags || []).filter(isCategoryType),
    ],
    [] as ProductTag[],
  )
  const prepend = addSales ? [{ name: 'promocoes', title: 'Promoções' }] : []
  return [
    ...prepend,
    ...uniqBy(allCategoryTags, 'name').sort((cat) =>
      cat.name === 'kit' ? -1 : 1,
    ),
  ]
}

export const getDiscount = (product: VndaProduct) => {
  const isPercentage = get(product, 'discount_rule.type') === 'percentage'
  return isPercentage
    ? `${get(product, 'discount_rule.amount', 0)}%`
    : `${toCurrency(get(product, 'discount_rule.amount', 0))}`
}

export const getProductsByTag = (products: VndaProduct[], tags: string[]) => {
  return products.filter((p: VndaProduct) =>
    p.tags.reduce(
      (res: boolean, tag: ProductTag) => tags.includes(tag.name) || res,
      false,
    ),
  )
}

export const clearCartInfo = () => {
  Cookies.remove('cart_id')
  localStorage.removeItem('vn_cart_token')
}

export const localCartInfo = () => ({
  id: Cookies.get('cart_id'),
  token: localStorage.getItem('vn_cart_token'),
})

export const getCartToken = async () => {
  const { token } = localCartInfo()
  if (token) return token
  const cart = await getCart()
  return cart.token
}

export const getCart = async () => {
  const { id, token } = localCartInfo()
  let result
  if (id || token) {
    try {
      if (token) {
        result = await api.vnda.fetch(`cart/${token}`)
      } else if (id) {
        result = await api.vnda.listCart()
      }
      if (!result || result.status === 404) {
        clearCartInfo()
      }
    } catch (err) {
      clearCartInfo()
    }
  }
  if (!result || result.status === 404) {
    result = await api.vnda.fetch('cart/create')
  }
  localStorage.setItem('vn_cart_token', result.token)
  console.log(result)
  return result
}
