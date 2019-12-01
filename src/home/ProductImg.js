import Link from 'src/components/Link'
import Img from 'src/components/Img'
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
  <Link
    href={product.slug ? `/produto/${product.slug}` : `/${product.path}`}
    title={product.name}
    prefetch={false}
  >
    <Img
      className="responsive"
      css={{
        width,
        maxHeight: height,
        marginTop: theme.spacing(4),
      }}
      src={`/static/images/products/big/${product.path}.png`}
      alt={product.name}
      {...props}
    />
  </Link>
)

export default ProductImg
