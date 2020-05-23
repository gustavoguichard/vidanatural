import moment from 'moment'
import map from 'lodash/map'
import truncate from 'lodash/truncate'
import reduce from 'lodash/reduce'
import uniqBy from 'lodash/uniqBy'

import { getReadTime } from 'lib/utils'

import { PostBody } from 'types/cms'
import { VndaProduct, ProductTag } from 'types/vnda'

moment.locale('pt-br')
export const getFromDate = (date: Date | string) => moment(date).fromNow()

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
  return isLocal ? `/${url.pathname}${url.search}` : url
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
