import { NextApiRequest, NextApiResponse } from 'next'

import vnda from 'lib/api/vnda2'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const cartData = await vnda.fetch(`cart/${req.query.token}`)
  const { coupon } = JSON.parse(req.body)
  await vnda.fetcher(`carts/${cartData?.id}/coupon_code`, 'DELETE')
  const response = await vnda.fetcher(`carts/${cartData?.id}`, 'PATCH', {
    coupon_code: coupon,
  })
  res.send(response.data)
}
