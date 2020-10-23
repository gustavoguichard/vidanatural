import flatMap from 'lodash/flatMap'
import last from 'lodash/last'
import values from 'lodash/values'
import { NextApiRequest, NextApiResponse } from 'next'

import vnda from 'lib/api/vnda2'
import parseProduct from 'lib/parsers/product'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req
  const id = last((query.slug as string).split('-'))
  const response = await vnda.fetcher(`products/${id}`)
  const images = await vnda.fetcher(`products/${id}/images`)
  const discount = await vnda.fetcher(`products/${id}/discount`)
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
