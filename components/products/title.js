const ProductTitle = ({ product }) => {
  const [variant] = product.variants || [{}]
  return (
    <div className="text-center lg:text-left mb-3 lg:mb-2">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
        {product.name}
      </h1>
      <p className="text-gray-700 uppercase text-sm my-1">{variant.name}</p>
    </div>
  )
}

export default ProductTitle
