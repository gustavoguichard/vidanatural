import { toCurrency } from 'lib/utils'
import theme from 'lib/theme'

const OldPrice = ({ price, salePrice, lineBreak = true }) => {
  const hasDiscont = salePrice < price
  return hasDiscont ? (
    <span
      className="old-price"
      css={{
        fontSize: '80%',
        color: theme.palette.text.disabled,
        textDecoration: 'line-through',
        paddingRight: lineBreak ? undefined : theme.spacing(),
      }}
    >
      De: {toCurrency(price)}
      {lineBreak && <br />}
    </span>
  ) : null
}

export default OldPrice
