import get from 'lodash/get'
import map from 'lodash/map'
import truncate from 'lodash/truncate'
import flatMap from 'lodash/flatMap'
import uniqBy from 'lodash/uniqBy'

import { getReadTime, toCurrency } from 'lib/utils'

import type { PostBody } from 'types/cms'
import type { ParsedProduct, ProductTag, VndaProduct } from 'types/vnda'

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
  return `${total} ${total > 1 ? plural || `${label}s` : label}`
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

export const isEmptyBody = (body?: PostBody[]) =>
  !body || getExcerpt(body) === ''

export const resolveLink = (link: string) => {
  const url = new URL(link)
  const isLocal = url.hostname.includes('vidanatural.eco.br')
  const result = isLocal ? `${url.pathname}${url.search}` : url
  return result
}

export const getCategoryTags = (products: ParsedProduct[], addSales = true) => {
  const isProductCategory = (cat: ProductTag) => cat.tag_type === 'product_cat'
  const allCategoryTags = flatMap(products, (product) =>
    (product.category_tags || []).filter(isProductCategory),
  )
  const withoutRepetition = uniqBy(allCategoryTags, 'name')
  const prepend = addSales ? [{ name: 'promocoes', title: 'Promoções' }] : []
  return [
    ...prepend,
    ...withoutRepetition.sort((cat) => (cat.name === 'kit' ? -1 : 1)),
  ]
}

export const getDiscount = (product: VndaProduct) => {
  const isPercentage = get(product, 'discount_rule.type') === 'percentage'
  return isPercentage
    ? `${get(product, 'discount_rule.amount', 0)}%`
    : `${toCurrency(get(product, 'discount_rule.amount', 0))}`
}

export const getProductsByTag = (products: ParsedProduct[], tags: string[]) =>
  products.filter((p: ParsedProduct) =>
    p.tag_names.some((tag: string) => tags.includes(tag)),
  )
