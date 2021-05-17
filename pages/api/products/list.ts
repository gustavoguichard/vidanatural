import flatMap from 'lodash/flatMap'
import values from 'lodash/values'
import { NextApiRequest, NextApiResponse } from 'next'

import api from 'lib/api'
import parseProduct from 'lib/parsers/product'
import { VndaProduct } from 'types/vnda'
import { ParsedProduct } from '../../../types/vnda'

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const response = await api.vnda.fetchFromAPI('products')
  if (response.data) {
    const products = await Promise.all(
      response.data.map(async (product: VndaProduct) => {
        const images = await api.vnda.fetchFromAPI(
          `products/${product.id}/images`,
        )
        const discount = await api.vnda.fetchFromAPI(
          `products/${product.id}/discount`,
        )
        const variants = flatMap(product.variants, values)
        return parseProduct({
          ...product,
          images: images.data,
          variants,
          ...discount.data,
        })
      }),
    )
    res.send(products as ParsedProduct[])
  } else {
    res.send([])
  }
}
