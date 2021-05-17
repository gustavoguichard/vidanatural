import utils from 'lib/api/vnda-utils'
import vnda from 'lib/api/vnda-api2'

import type { FormKeys } from 'types/vnda'

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
  const url = utils.getUrl('frete_produto', ({
    sku,
    quantity,
    zip,
  } as unknown) as URLSearchParams)
  return doRequest(url, 'POST')
}

const textSearch = async (q: string) => {
  const url = utils.getUrl('busca', ({ q } as unknown) as URLSearchParams)
  return doRequest(url)
}

const sendForm = async (values: FormKeys) => {
  const { a_password, key, ...otherValues } = values

  if (!!a_password || !key) {
    return false
  }

  const url = utils.getUrl('webform', ({
    key,
    ...otherValues,
  } as unknown) as URLSearchParams)
  const response = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  })

  return response.status < 400
}

const productsList = async () => vnda.fetch('products/list')

export default {
  calculateShipping,
  productsList,
  sendForm,
  textSearch,
}
