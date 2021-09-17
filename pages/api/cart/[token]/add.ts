import { NextApiRequest, NextApiResponse } from 'next'

import api from 'lib/api'
import type { Cart } from 'types/vnda'

async function CartAdd(req: NextApiRequest, res: NextApiResponse) {
  const cartData: Cart = await api.vnda.fetch(`cart/${req.query.token}`)
  const { sku, quantity } = JSON.parse(req.body)

  const { items } = cartData
  const item = items?.find(({ variant_sku }) => variant_sku === String(sku))

  const path = item ? `items/${item.id}` : 'items'
  const method = item ? 'PATCH' : 'POST'
  const data = item ? { quantity: item.quantity + quantity } : { sku, quantity }
  const response = await api.vnda.fetchFromAPI(
    `carts/${cartData?.id}/${path}`,
    method,
    data,
  )

  if (response.data) {
    const cartUpdatedData = await api.vnda.fetch(`cart/${req.query.token}`)
    res.send(cartUpdatedData)
  } else {
    res.send({
      status: 500,
      error: 'Não foi possível adicionar os produtos ao carrinho',
    })
  }
}

export default CartAdd
