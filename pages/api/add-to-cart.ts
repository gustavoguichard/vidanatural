import { NextApiRequest, NextApiResponse } from 'next'

import vnda from 'lib/api/vnda2'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const cartData = await vnda.fetch('cart/create')
    const response = await vnda.fetcher(`carts/${cartData?.id}/items`, 'POST', {
      quantity: 1,
      sku: req.body.sku,
    })

    if (response.data) {
      res.redirect(301, `${process.env.API_IP}pagamento/${cartData?.token}`)
    } else {
      res.send({
        status: 500,
        error: 'Não foi possível adicionar os produtos ao carrinho',
      })
    }
  } catch (error) {
    res.send({
      status: 500,
      error,
    })
  }
}
