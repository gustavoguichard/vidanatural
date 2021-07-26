import { cx, toCurrency } from 'lib/utils'

const OldPrice = ({ price, salePrice, lineBreak = true }) => {
  const hasDiscont = salePrice < price
  return hasDiscont ? (
    <span
      className={cx('text-xs text-gray-600 line-through', lineBreak || 'pr-2')}
    >
      De: {toCurrency(price)}
      {lineBreak && <br />}
    </span>
  ) : null
}

export default OldPrice
