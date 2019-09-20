import find from 'lodash/find'
import ProductLayout from 'src/product-page/ProductLayout'
import ProductFeature from 'src/product-page/ProductFeature'
import ProductSale from 'src/product-page/ProductSale'
import products from 'data/products'
import api from 'utils/api'

const ProductPage = ({ product }) => {
  console.log(product)
  return (
    <ProductLayout product={product}>
      {product.id ? (
        <ProductSale product={product} />
      ) : (
        <ProductFeature product={product} />
      )}
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
