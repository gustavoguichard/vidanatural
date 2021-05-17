import { NextApiRequest, NextApiResponse } from 'next'

import vnda from 'lib/api/vnda2'

// Range status=confirmed&range_by=created_at&start=2021-04-12&finish=2021-04-12
export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const params = new URLSearchParams({
    status: 'confirmed',
    sort: 'confirmed_at,desc',
  })
  const response = await vnda.fetcher(`orders?${params.toString()}`)
  if (response.data) {
    res.send(response.data)
  } else {
    res.send({})
  }
}
