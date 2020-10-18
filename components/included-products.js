import isEmpty from 'lodash/isEmpty'

import SearchItem from 'components/header/search-item'

const RelatedProducts = ({ products }) => {
  return isEmpty(products) ? null : (
    <div className="max-w-screen-md mx-auto mt-2 mb-6 px-6">
      <div className="bg-white rounded-lg shadow">
        <h3 className="text-center py-2 text-3xl font-semibold tracking-tight">
          Produtos incluídos
        </h3>
        {products.map((product, index) => (
          <SearchItem key={`c-item-${index}`} {...product} />
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts
