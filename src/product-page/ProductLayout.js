import Layout from 'src/ui/Layout'
import ProductHero from 'src/product-page/ProductHero'
import ProductTestimonials from 'src/components/ProductTestimonials'

const ProductLayout = ({ product, children }) => (
  <Layout logoCompanion={require(`../../static/svgs/${product.packing}.svg`)}>
    <ProductHero product={product} />
    {children}
    <ProductTestimonials product={product} />
  </Layout>
)

export default ProductLayout
