import { NextApiRequest, NextApiResponse } from 'next'

import vnda from 'lib/api/vnda2'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const cartData = await vnda.fetch(`cart/${req.query.token}`)
  const { zip } = JSON.parse(req.body)
  await vnda.fetcher(
    `carts/${cartData?.id}/shipping_address`,
    cartData?.shipping_address_id ? 'PATCH' : 'POST',
    { zip },
  )
  const updatedCart = await vnda.fetch(`cart/${req.query.token}`)
  res.send(updatedCart)
}
