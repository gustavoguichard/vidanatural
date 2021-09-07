import { NextApiRequest, NextApiResponse } from 'next'

import api from 'lib/api'

async function LastConfirmedOrders(_req: NextApiRequest, res: NextApiResponse) {
  const params = new URLSearchParams({
    status: 'confirmed',
    sort: 'confirmed_at,desc',
  })
  const response = await api.vnda.fetchFromAPI(`orders?${params.toString()}`)
  if (response.data) {
    res.send(response.data)
  } else {
    res.send({})
  }
}

export default LastConfirmedOrders
