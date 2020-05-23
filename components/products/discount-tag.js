import { Badge } from '@material-ui/core'

import { toCurrency } from 'lib/utils'
import theme from 'lib/theme'

const DiscountTag = ({ product, small, ...props }) => {
  const isPercentage = product.discount_rule?.type === 'percentage'
  const content = isPercentage
    ? `-${product.discount_rule?.amount}%`
    : `${toCurrency(-product.discount_rule?.amount)}`

  const offset = small ? 30 : 50

  return product.discount_rule ? (
    <Badge
      css={{
        position: 'absolute',
        right: offset,
        top: offset,
        zIndex: 4,
        transform: small ? 'scale(0.8)' : null,
        '.MuiBadge-badge': {
          height: 60,
          width: 60,
          borderRadius: '50%',
          color: 'white',
          fontWeight: 'bold',
          fontSize: isPercentage ? '1.2rem' : '.9rem',
          textAlign: 'center',
        },
      }}
      color="secondary"
      badgeContent={content}
      {...props}
    />
  ) : null
}

export default DiscountTag
