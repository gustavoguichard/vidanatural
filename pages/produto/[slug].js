import find from 'lodash/find'
import ProductLayout from 'src/product-page/ProductLayout'
import ProductSale from 'src/product-page/ProductSale'
import products from 'data/products'
import api from 'utils/api'
import { useIsMobile } from 'utils/responsive'

const ProductPage = ({ product }) => {
  const isMobile = useIsMobile()
  return (
    <ProductLayout product={product}>
      <ProductSale isMobile={isMobile} product={product} />
    </ProductLayout>
  )
}

ProductPage.getInitialProps = async ({ query }) => {
  const { slug } = query
  const serverData = await api.listProduct(slug)
  const localData = find(products, p => p.slug === slug)
  return {
    product: {
      ...localData,
      ...serverData,
    },
  }
}

export default ProductPage
