import { NextApiRequest, NextApiResponse } from 'next'

import vnda from 'lib/api/vnda2'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { code, url, order } = JSON.parse(req.body)
  const response = await vnda.fetcher(
    `orders/${order}/packages/${order}-01/trackings`,
    'POST',
    {
      code,
      url,
      company: url.includes('totalexpress') ? 'Total Express' : null,
    },
  )
  if (response.status < 400) {
    res.send({ message: 'Success' })
  } else {
    res
      .status(500)
      .json({ message: 'There was some problem during the processing' })
  }
}
