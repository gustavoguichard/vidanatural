import flatMap from 'lodash/flatMap'
import values from 'lodash/values'

import utils from './vnda-utils'
import vnda from './vnda-api2'
import parseProduct from '../parsers/product'

import type { FormKeys, VndaProduct, ParsedProduct } from '../../types/vnda'

const doRequest = async (url: string, method = 'GET') => {
  const requestParams = { headers: { Accept: 'application/json' }, method }
  const res = await fetch(url, requestParams)
  const data = res.status >= 400 ? res : await res.json()
  return data
}

interface ShippingParams {
  sku: number
  zip: string
  quantity?: number
}
const calculateShipping = async ({ sku, quantity, zip }: ShippingParams) => {
  const url = utils.getUrl('frete_produto', {
    sku,
    quantity,
    zip,
  } as unknown as URLSearchParams)
  return doRequest(url, 'POST')
}

const textSearch = async (q: string) => {
  const url = utils.getUrl('busca', { q } as unknown as URLSearchParams)
  return doRequest(url)
}

const sendForm = async (values: FormKeys) => {
  const { a_password, key, ...otherValues } = values

  if (!!a_password || !key) {
    return false
  }

  const url = utils.getUrl('webform', {
    key,
    ...otherValues,
  } as unknown as URLSearchParams)
  const response = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  })

  return response.status < 400
}

const populateProducts = async (
  product: VndaProduct,
): Promise<ParsedProduct> => {
  const images = await vnda.fetchFromAPI(`products/${product.id}/images`)
  const discount = await vnda.fetchFromAPI(`products/${product.id}/discount`)
  const variants = flatMap(product.variants, values)
  return parseProduct({
    ...product,
    images: images.data,
    variants,
    ...discount.data,
  })
}

const vndaEndpoints = {
  calculateShipping,
  populateProducts,
  sendForm,
  textSearch,
}

export default vndaEndpoints
