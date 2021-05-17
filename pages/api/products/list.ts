import { NextApiRequest, NextApiResponse } from 'next'

import api from 'lib/api'
import { ParsedProduct } from 'types/vnda'

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const response = await api.vnda.fetchFromAPI('products')
  if (response.data) {
    const products: ParsedProduct[] = await Promise.all(
      response.data.map(api.vnda.endpoints.populateProducts),
    )
    res.send(products)
  } else {
    res.send([])
  }
}
