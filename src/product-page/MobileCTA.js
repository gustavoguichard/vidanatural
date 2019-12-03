import ProductCTA from 'src/product-page/ProductCTA'
import { Paper } from '@material-ui/core'
import theme from 'src/ui/theme'

const MobileCTA = ({ product, visible }) => (
  <Paper
    elevation={5}
    css={{
      backgroundColor: theme.palette.primary.main,
      borderRadius: 0,
      position: 'fixed',
      bottom: visible ? -100 : 0,
      left: 0,
      right: 0,
      zIndex: 200,
      padding: '.5rem',
      transition: 'all .45s ease-in-out',
    }}
  >
    <ProductCTA size="large" product={product} hideQuantity />
  </Paper>
)

export default MobileCTA
