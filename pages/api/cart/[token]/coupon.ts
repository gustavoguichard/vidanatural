import { NextApiRequest, NextApiResponse } from 'next'

import api from 'lib/api'

async function CartCoupon(req: NextApiRequest, res: NextApiResponse) {
  const cartData = await api.vnda.fetch(`cart/${req.query.token}`)
  const { coupon } = JSON.parse(req.body)
  await api.vnda.fetchFromAPI(`carts/${cartData?.id}/coupon_code`, 'DELETE')
  const response = await api.vnda.fetchFromAPI(
    `carts/${cartData?.id}`,
    'PATCH',
    {
      coupon_code: coupon,
    },
  )
  res.send(response.data)
}

export default CartCoupon
