import { NextApiRequest, NextApiResponse } from 'next'
import publicIp from 'public-ip'

import vnda from 'lib/api/vnda2'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let ip
  let userAgent
  try {
    userAgent = req.headers['user-agent']
  } catch (error) {
    console.log(error)
    userAgent =
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36'
  }
  try {
    ip = await publicIp.v4()
  } catch (error) {
    console.log(error)
    ip = '127.0.0.1'
  }
  const response = await vnda.fetcher('carts', 'POST', undefined, {
    'X-User-Agent': userAgent,
    'X-Browser-Ip': ip,
  })
  res.send(response.data)
}
