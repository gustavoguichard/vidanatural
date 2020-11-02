import { NextApiRequest, NextApiResponse } from 'next'

import vnda from 'lib/api/vnda2'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const cartData = await vnda.fetch(`cart/${req.query.token}`)
  const { id } = JSON.parse(req.body)
  await vnda.fetcher(`carts/${cartData?.id}/items/${id}`, 'DELETE')
  const cartUpdatedData = await vnda.fetch(`cart/${req.query.token}`)
  res.send(cartUpdatedData)
}
