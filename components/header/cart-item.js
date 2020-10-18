import api from 'lib/api'
import { toCurrency } from 'lib/utils'

import Link from 'components/link'

const CartItem = ({
  product_name,
  image_url,
  product_url,
  total,
  price,
  quantity,
}) => {
  const fixedUrl = product_url.replace('/produto/', '/produtos/')
  const path = api.vnda.getOwnPath(fixedUrl)
  return (
    <Link
      className="flex px-4 py-2 hover:bg-gray-200 space-x-2"
      href="/produtos/[slug]"
      as={path}
    >
      <img
        alt={product_name}
        src={api.vnda.getResizedImg(image_url, 60)}
        width="60"
      />
      <div>
        <p className="text-sm leading-snug">{product_name}</p>
        <p className="text-xs">
          {quantity > 1 ? `${quantity} x ${toCurrency(price)} = ` : null}
          <strong>{toCurrency(total)}</strong>
        </p>
      </div>
    </Link>
  )
}

export default CartItem
