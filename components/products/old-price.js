import { classes, toCurrency } from 'lib/utils'

const OldPrice = ({ price, salePrice, lineBreak = true }) => {
  const hasDiscont = salePrice < price
  const cx = classes('text-xs text-gray-600 line-through', {
    'pr-2': !lineBreak,
  })
  return hasDiscont ? (
    <span className={cx}>
      De: {toCurrency(price)}
      {lineBreak && <br />}
    </span>
  ) : null
}

export default OldPrice
