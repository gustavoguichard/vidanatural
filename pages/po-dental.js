import find from 'lodash/find'
import ProductLayout from 'src/product-page/ProductLayout'
import ProductFeature from 'src/product-page/ProductFeature'
import products from 'data/products'

const product = find(products, p => p.path === 'po-dental')

const Page = () => {
  return (
    <ProductLayout product={product}>
      <ProductFeature product={product} />
    </ProductLayout>
  )
}

export default Page
