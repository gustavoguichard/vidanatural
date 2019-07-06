import { Typography } from '@material-ui/core'
import Hero from 'src/components/Hero'

const ProductHero = ({ product }) => (
  <Hero background={`/static/images/product-images/${product.path}.jpg`}>
    <Typography variant="h2">{product.name}</Typography>
    <Typography css={{ margin: '1rem' }} variant="h4">
      {product.slogan}
    </Typography>
  </Hero>
)

export default ProductHero
