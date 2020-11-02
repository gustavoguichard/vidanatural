import { NextApiRequest, NextApiResponse } from 'next'
import publicIp from 'public-ip'

import vnda from 'lib/api/vnda2'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const ip = await publicIp.v4()
  const userAgent = req.headers['user-agent']
  const response = await vnda.fetcher('carts', 'POST', undefined, {
    'X-User-Agent': userAgent,
    'X-Browser-Ip': ip,
  })
  res.send(response.data)
}
