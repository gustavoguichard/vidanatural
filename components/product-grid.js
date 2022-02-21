import ProductCard from 'components/product-card'

const ProductGrid = ({ products }) =>
  products?.length ? (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-4">
      {products.map((product, index) => (
        <ProductCard key={index + product.id} product={product} />
      ))}
    </div>
  ) : null

export default ProductGrid
