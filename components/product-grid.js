import isEmpty from 'lodash/isEmpty'

import ProductCard from 'components/product-card'

const ProductGrid = ({ products }) =>
  isEmpty(products) ? null : (
    <div className="flex flex-wrap">
      {products.map((product, index) => (
        <div
          key={index}
          className="flex mb-4 w-1/2 sm:w-1/3 md:w-1/3 lg:w-1/4 px-2"
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )

export default ProductGrid
