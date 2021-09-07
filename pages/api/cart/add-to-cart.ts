import { NextApiRequest, NextApiResponse } from 'next'

import api from 'lib/api'

async function AddToCart(req: NextApiRequest, res: NextApiResponse) {
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
      res.redirect(
        301,
        `https://${process.env.NEXT_PUBLIC_API_DOMAIN}/pagamento/${cartData?.token}`,
      )
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

export default AddToCart
