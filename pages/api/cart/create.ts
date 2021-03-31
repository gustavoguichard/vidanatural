import { NextApiRequest, NextApiResponse } from 'next'
import publicIp from 'public-ip'

import vnda from 'lib/api/vnda2'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let ip = '127.0.0.1'
  let userAgent = 'not-found'
  try {
    userAgent = req.headers['user-agent'] as string
  } catch (error) {
    console.log(error)
  }
  try {
    ip = await publicIp.v4()
  } catch (error) {
    console.log(error)
  }
  const response = await vnda.fetcher('carts', 'POST', undefined, {
    'X-User-Agent': userAgent,
    'X-Browser-Ip': ip,
  })
  res.send(response.data)
}
