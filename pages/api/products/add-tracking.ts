import { NextApiRequest, NextApiResponse } from 'next'

import api from 'lib/api'

async function AddTracking(req: NextApiRequest, res: NextApiResponse) {
  const { url, order } = JSON.parse(req.body)
  const response = await api.vnda.fetchFromAPI(
    `orders/${order}/packages/${order}-01/trackings`,
    'POST',
    {
      code: url,
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

export default AddTracking
