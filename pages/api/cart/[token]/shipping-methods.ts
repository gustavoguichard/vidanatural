import { NextApiRequest, NextApiResponse } from 'next'

import api from 'lib/api'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const cartData = await api.vnda.fetch(`cart/${req.query.token}`)
  if (cartData?.shipping_address_id) {
    const methodsResponse = await api.vnda.fetchFromAPI(
      `carts/${cartData?.id}/shipping_methods`,
    )
    if (methodsResponse.data) {
      res.send(methodsResponse.data[''] || [])
    } else {
      res.send([])
    }
  } else {
    res.send([])
  }
}
