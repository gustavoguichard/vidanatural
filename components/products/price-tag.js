import { Grid, Typography } from '@material-ui/core'

import { toCurrency } from 'lib/utils'
import theme from 'lib/theme'

import OldPrice from './old-price'

const PriceTag = ({ item, component, lineBreak, ...props }) => {
  return (
    <Typography
      variant="h5"
      css={{
        fontWeight: 'bold',
        margin: component === 'span' ? 0 : theme.spacing(0, 1, 1),
      }}
      component={component}
      {...props}
    >
      <OldPrice
        price={item.price}
        salePrice={item.sale_price}
        lineBreak={lineBreak}
      />
      <strong>{toCurrency(item.sale_price)}</strong>
    </Typography>
  )
}

export default PriceTag
