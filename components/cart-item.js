import api from 'lib/api'
import { toCurrency } from 'lib/utils'

import Link from 'components/link'

const CartItem = ({
  product_name,
  image_url,
  product_url,
  price,
  variant_price,
  quantity,
  actions,
}) => {
  const hasDiscont = variant_price > price
  return (
    <div className="flex p-1 w-1/2">
      <div className="border tracking-tight rounded-sm bg-white w-full max-h-72 overflow-hidden flex flex-col">
        <p className="bg-white text-sm font-semibold p-2 leading-snug">
          {quantity}x{' '}
          <Link
            onClick={actions.hideCart}
            href={api.vnda.getOwnPath(product_url)}
            className="hover:text-teal-600"
          >
            {product_name}
          </Link>
          <br />
          <span className={`block mt-1 font-${hasDiscont ? 'bold' : 'normal'}`}>
            {toCurrency(price)}
            {hasDiscont && ' '}
            {hasDiscont && (
              <span className="line-through text-xs font-normal text-gray-500">
                {toCurrency(variant_price)}
              </span>
            )}
          </span>
        </p>
        <img
          alt={product_name}
          src={api.vnda.getResizedImg(image_url, 200)}
          className="w-full object-cover"
        />
      </div>
    </div>
  )
}

export default CartItem
