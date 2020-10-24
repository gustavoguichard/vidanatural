import api from 'lib/api'
import { toCurrency } from 'lib/utils'

import Link from 'components/link'

const CartItem = ({
  product_name,
  image_url,
  product_url,
  total,
  quantity,
}) => (
  <div className="flex p-2 w-1/2">
    <div className="border rounded-sm bg-white">
      <p className="bg-white text-sm font-semibold p-3 leading-snug">
        {quantity}x{' '}
        <Link
          href="/produto/[slug]"
          as={api.vnda.getOwnPath(product_url)}
          className="hover:text-teal-600"
        >
          {product_name}
        </Link>
        <br />
        <span className="block mt-1 font-normal">{toCurrency(total)}</span>
      </p>
      <img
        alt={product_name}
        src={api.vnda.getResizedImg(image_url, 200)}
        className="w-full object-cover"
      />
    </div>
  </div>
)

export default CartItem
