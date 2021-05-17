import { NextApiRequest, NextApiResponse } from 'next'

import api from 'lib/api'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const cartData = await api.vnda.fetch(`cart/${req.query.token}`)
  const { zip } = JSON.parse(req.body)
  await api.vnda.fetchFromAPI(
    `carts/${cartData?.id}/shipping_address`,
    cartData?.shipping_address_id ? 'PATCH' : 'POST',
    { zip },
  )
  const updatedCart = await api.vnda.fetch(`cart/${req.query.token}`)
  res.send(updatedCart)
}
