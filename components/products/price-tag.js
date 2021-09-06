import { cx, toCurrency } from 'lib/utils'

import OldPrice from './old-price'

const PriceTag = ({ item, big, inline, lineBreak, ...props }) => (
  <p
    className={cx(
      'text-gray-900',
      inline ? 'inline-block' : 'mb-2 mt-0',
      big ? 'font-semibold text-2xl' : 'text-sm'
    )}
    {...props}
  >
    <OldPrice
      price={item.price}
      salePrice={item.sale_price}
      lineBreak={lineBreak}
    />
    {toCurrency(item.sale_price)}
  </p>
)

export default PriceTag
