import { NextApiRequest, NextApiResponse } from 'next'

import api from 'lib/api'

async function UpdateQuantity(req: NextApiRequest, res: NextApiResponse) {
  const cartData = await api.vnda.fetch(`cart/${req.query.token}`)
  const { id, quantity } = JSON.parse(req.body)

  const response = await api.vnda.fetchFromAPI(
    `carts/${cartData?.id}/items/${id}`,
    'PATCH',
    { quantity },
  )

  if (response.data) {
    const cartUpdatedData = await api.vnda.fetch(`cart/${req.query.token}`)
    res.send(cartUpdatedData)
  } else {
    res.send({
      status: 500,
      error: 'Não foi possível atualizar o produto no carrinho',
    })
  }
}

export default UpdateQuantity
