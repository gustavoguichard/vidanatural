import { NextApiRequest, NextApiResponse } from 'next'

import vnda from 'lib/api/vnda2'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const cartData = await vnda.fetch(`cart/${req.query.token}`)
  const { id, quantity } = JSON.parse(req.body)

  const response = await vnda.fetcher(
    `carts/${cartData?.id}/items/${id}`,
    'PATCH',
    { quantity },
  )

  if (response.data) {
    const cartUpdatedData = await vnda.fetch(`cart/${req.query.token}`)
    res.send(cartUpdatedData)
  } else {
    res.send({
      status: 500,
      error: 'Não foi possível atualizar o produto no carrinho',
    })
  }
}
