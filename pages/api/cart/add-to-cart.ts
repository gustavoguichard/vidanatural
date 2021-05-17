import { NextApiRequest, NextApiResponse } from 'next'

import api from 'lib/api'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const cartData = await api.vnda.fetch('cart/create')
    const response = await api.vnda.fetchFromAPI(
      `carts/${cartData?.id}/items`,
      'POST',
      {
        quantity: 1,
        sku: req.body.sku,
      },
    )

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
