import api from 'lib/api'
import { toCurrency } from 'lib/utils'

import Link from 'components/link'

const CartItem = ({ onEdit, item, actions }) => {
  const {
    id,
    product_name,
    image_url,
    product_url,
    price,
    variant_price,
    quantity,
  } = item
  const hasDiscont = variant_price > price
  return (
    <div className="flex p-1 w-1/2">
      <div className="border tracking-tight rounded-sm bg-white w-full h-72 overflow-hidden flex flex-col justify-between">
        <p className="bg-white text-sm font-semibold p-2">
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
        <div className="flex-grow overflow-hidden">
          <img
            alt={product_name}
            src={api.vnda.getResizedImg(image_url, 200)}
            className="w-full object-cover"
          />
        </div>
        <div className="w-full text-xs flex mt-px">
          <button
            onClick={() => onEdit(item)}
            type="button"
            className="flex-grow py-2 border-t border-r"
          >
            Editar
          </button>
          <button
            type="button"
            onClick={() => actions.removeFromCart(id)}
            className="flex-grow py-2 border-t"
          >
            Remover
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
