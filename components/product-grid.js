import ProductCard from 'components/product-card'

const ProductGrid = ({ products }) =>
  products?.length ? (
    <div className="flex flex-wrap">
      {products.map((product, index) => (
        <div
          key={index}
          className="flex w-1/2 px-2 mb-4 sm:w-1/3 md:w-1/3 lg:w-1/4"
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  ) : null

export default ProductGrid
