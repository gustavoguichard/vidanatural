import Layout from 'src/ui/Layout'
import ProductIngredients from 'src/product-page/ProductIngredients'
import ProductTestimonials from 'src/components/ProductTestimonials'

const ProductLayout = ({ product, children }) => (
  <Layout
    stickBar
    logoCompanion={require(`../../static/svgs/${product.packing}.svg`)}
  >
    {children}
    <ProductIngredients product={product} />
    <ProductTestimonials product={product} />
  </Layout>
)

export default ProductLayout
