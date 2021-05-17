import last from 'lodash/last'
import { NextApiRequest, NextApiResponse } from 'next'

import api from 'lib/api'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req
  const id = last((query.slug as string).split('-'))
  const response = await api.vnda.fetchFromAPI(`products/${id}`)
  if (response.data) {
    const product = await api.vnda.endpoints.populateProducts(response.data)
    res.send(product)
  } else {
    res.send({})
  }
}
