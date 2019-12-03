import Layout from 'src/ui/Layout'
import { Box } from '@material-ui/core'
import ProductHero from 'src/product-page/ProductHero'
import ProductTestimonials from 'src/components/ProductTestimonials'
import Certifications from 'src/components/Certifications'

const ProductLayout = ({ product, children }) => (
  <Layout logoCompanion={require(`../../static/svgs/${product.packing}.svg`)}>
    <ProductHero product={product} />
    {children}
    <ProductTestimonials product={product} />
    <Box css={{ width: '100%' }}>
      <Certifications css={{ '& img': { filter: 'brightness(0.35)' } }} />
    </Box>
  </Layout>
)

export default ProductLayout
