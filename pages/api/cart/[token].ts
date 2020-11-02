import { NextApiRequest, NextApiResponse } from 'next'

import vnda from 'lib/api/vnda2'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await vnda.fetcher(`carts/${req.query.token}`)
  if (response.data) {
    res.send(response.data)
  } else {
    res.send({})
  }
}
