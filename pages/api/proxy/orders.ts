import { NextApiRequest, NextApiResponse } from 'next'

import vnda from 'lib/api/vnda2'

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const response = await vnda.fetcher('orders')
  if (response.data) {
    res.send(response.data)
  } else {
    res.send({})
  }
}
