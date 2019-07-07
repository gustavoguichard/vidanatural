import Link from 'src/components/Link'
import Img from 'src/components/Img'
import { Box, Grid } from '@material-ui/core'
import theme from 'src/ui/theme'

export const wrapperCss = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    order: -1,
  },
}

const ProductImg = ({ product, height, width, ...props }) => (
  <Link href={`/${product.path}`} title={product.name}>
    <Img
      className="responsive"
      css={{
        width,
        maxHeight: height,
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
      }}
      src={`/static/images/products/${product.path}.png`}
      alt={product.name}
      {...props}
    />
  </Link>
)

export default ProductImg
