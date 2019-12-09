import find from 'lodash/find'
import isArray from 'lodash/isArray'
import ProductLayout from 'src/product-page/ProductLayout'
import ProductSale from 'src/product-page/ProductSale'
import products from 'data/products'
import api from 'utils/api'
import { useIsMobile } from 'utils/responsive'

const ProductPage = ({ product }) => {
  const isMobile = useIsMobile()

  return (
    <ProductLayout isMobile={isMobile} product={product}>
      <ProductSale isMobile={isMobile} product={product} />
    </ProductLayout>
  )
}

ProductPage.getInitialProps = async ({ query }) => {
  const { slug } = query
  const response = await api.listProduct(slug)
  const serverData = isArray(response) ? response[0] : response
  const localData = find(products, p => serverData.id === p.vndaId)
  const rescueData = localData || find(products, p => slug.includes(p.path))
  return {
    product: {
      ...rescueData,
      ...serverData,
    },
  }
}

export default ProductPage
