import { NextApiRequest, NextApiResponse } from 'next'

import api from 'lib/api'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await api.vnda.fetchFromAPI(`carts/${req.query.token}`)
  if (response.data) {
    res.send(response.data)
  } else {
    res.send({})
  }
}
