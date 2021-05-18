import { NextApiRequest, NextApiResponse } from 'next'

import api from 'lib/api'

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const response = await api.vnda.fetchFromAPI('products')
  res.send(response.data || [])
}
