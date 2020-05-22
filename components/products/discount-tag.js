import { Badge } from '@material-ui/core'

import { toCurrency } from 'lib/utils'
import theme from 'lib/theme'

const DiscountTag = ({ product }) => {
  // discount_rule: { type: 'percentage', amount: 20 }
  const isPercentage = product.discount_rule?.type === 'percentage'
  const content = isPercentage
    ? `-${product.discount_rule?.amount}%`
    : `${toCurrency(-product.discount_rule?.amount)}`
  return product.discount_rule ? (
    <Badge
      css={{
        position: 'absolute',
        right: 50,
        top: 50,
        zIndex: 4,
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
    />
  ) : null
}

export default DiscountTag
