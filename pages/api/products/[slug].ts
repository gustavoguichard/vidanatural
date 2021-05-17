import flatMap from 'lodash/flatMap'
import last from 'lodash/last'
import values from 'lodash/values'
import { NextApiRequest, NextApiResponse } from 'next'

import api from 'lib/api'
import parseProduct from 'lib/parsers/product'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req
  const id = last((query.slug as string).split('-'))
  const response = await api.vnda.fetchFromAPI(`products/${id}`)
  const images = await api.vnda.fetchFromAPI(`products/${id}/images`)
  const discount = await api.vnda.fetchFromAPI(`products/${id}/discount`)
  if (response.data) {
    const variants = flatMap(response.data.variants, values)
    const product = parseProduct({
      ...response.data,
      images: images.data,
      variants,
      ...discount.data,
    })
    res.send(product)
  } else {
    res.send({})
  }
}
