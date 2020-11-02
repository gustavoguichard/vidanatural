import { NextApiRequest, NextApiResponse } from 'next'

import vnda from 'lib/api/vnda2'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const cartData = await vnda.fetch(`cart/${req.query.token}`)
  if (cartData?.shipping_address_id) {
    const methodsResponse = await vnda.fetcher(
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
