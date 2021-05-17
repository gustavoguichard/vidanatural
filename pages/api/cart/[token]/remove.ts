import { NextApiRequest, NextApiResponse } from 'next'

import api from 'lib/api'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const cartData = await api.vnda.fetch(`cart/${req.query.token}`)
  const { id } = JSON.parse(req.body)
  await api.vnda.fetchFromAPI(`carts/${cartData?.id}/items/${id}`, 'DELETE')
  const cartUpdatedData = await api.vnda.fetch(`cart/${req.query.token}`)
  res.send(cartUpdatedData)
}
