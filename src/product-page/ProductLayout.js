import Layout from 'src/ui/Layout'
import { Box } from '@material-ui/core'
import ProductIngredients from 'src/product-page/ProductIngredients'
import ProductTestimonials from 'src/components/ProductTestimonials'
import Certifications from 'src/components/Certifications'

const ProductLayout = ({ product, children }) => (
  <Layout
    stickBar
    logoCompanion={require(`../../static/svgs/${product.packing}.svg`)}
  >
    {children}
    <ProductIngredients product={product} />
    <ProductTestimonials product={product} />
    <Box css={{ width: '100%' }}>
      <Certifications css={{ '& img': { filter: 'brightness(0.35)' } }} />
    </Box>
  </Layout>
)

export default ProductLayout
