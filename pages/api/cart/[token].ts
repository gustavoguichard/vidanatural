import { NextApiRequest, NextApiResponse } from 'next'

import vnda from 'lib/api/vnda2'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await vnda.fetcher(`carts/${req.query.token}`)
  if (response.data) {
    let methods = []
    if (response.data?.shipping_address_id) {
      const methodsResponse = await vnda.fetcher(
        `carts/${response.data?.id}/shipping_methods`,
      )
      console.log(methodsResponse)
      methods = methodsResponse.data?.['']
    }

    res.send({ ...response.data, methods })
  } else {
    res.send({})
  }
}
