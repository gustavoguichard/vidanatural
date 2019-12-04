import { Paper } from '@material-ui/core'
import Chat from 'src/ui/Chat'
import ProductCTA from 'src/product-page/ProductCTA'
import theme from 'src/ui/theme'

const MobileCTA = ({ product, visible }) => (
  <Paper
    elevation={5}
    css={{
      backgroundColor: theme.palette.primary.main,
      borderRadius: 0,
      bottom: visible ? -100 : 0,
      display: 'flex',
      justifyContent: 'space-evenly',
      left: 0,
      padding: '.5rem',
      position: 'fixed',
      right: 0,
      transition: 'all .45s ease-in-out',
      zIndex: 200,
    }}
  >
    <ProductCTA size="large" product={product} hideQuantity />
    <Chat />
  </Paper>
)

export default MobileCTA
