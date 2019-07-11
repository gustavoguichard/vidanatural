import { Typography } from '@material-ui/core'
import MdContent from 'src/components/MdContent'
import Hero from 'src/components/Hero'
import theme from 'src/ui/theme'

const ProductHero = ({ product }) => (
  <Hero background={`/static/images/product-images/${product.path}.jpg`}>
    <Typography variant="h2">{product.fullName}</Typography>
    <MdContent
      css={{ margin: theme.spacing(3), fontWeight: 500 }}
      className="MuiTypography-root MuiTypography-body1"
      content={product.fullSubtitle || product.subtitle}
    />
  </Hero>
)

export default ProductHero
