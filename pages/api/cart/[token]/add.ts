import find from 'lodash/find'
import { NextApiRequest, NextApiResponse } from 'next'

import vnda from 'lib/api/vnda2'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const cartData = await vnda.fetch(`cart/${req.query.token}`)
  const { sku, quantity } = JSON.parse(req.body)

  const { items } = cartData
  const item = find(items, ({ variant_sku }) => variant_sku === String(sku))

  const path = item ? `items/${item.id}` : 'items'
  const method = item ? 'PATCH' : 'POST'
  const data = item ? { quantity: item.quantity + quantity } : { sku, quantity }
  const response = await vnda.fetcher(
    `carts/${cartData?.id}/${path}`,
    method,
    data,
  )

  if (response.data) {
    const cartUpdatedData = await vnda.fetch(`cart/${req.query.token}`)
    res.send(cartUpdatedData)
  } else {
    res.send({
      status: 500,
      error: 'Não foi possível adicionar os produtos ao carrinho',
    })
  }
}
