import { classes, toCurrency } from 'lib/utils'

import OldPrice from './old-price'

const PriceTag = ({ item, inline, lineBreak, ...props }) => {
  const cx = classes('text-sm text-gray-900', {
    'm-2 mt-0': !inline,
    'inline-block': inline,
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
