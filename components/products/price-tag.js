import { classes, toCurrency } from 'lib/utils'

import OldPrice from './old-price'

const PriceTag = ({ item, big, inline, lineBreak, ...props }) => {
  const cx = classes('text-gray-900', {
    'mb-2 mt-0': !inline,
    'inline-block': inline,
    'text-sm': !big,
    'font-semibold text-2xl': big,
  })
  return (
    <p className={cx} {...props}>
      <OldPrice
        price={item.price}
        salePrice={item.sale_price}
        lineBreak={lineBreak}
      />
      {toCurrency(item.sale_price)}
    </p>
  )
}

export default PriceTag
