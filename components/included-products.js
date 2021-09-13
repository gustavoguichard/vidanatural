import isEmpty from 'lodash/isEmpty'

import SearchItem from 'components/header/search-item'

const IncludedProducts = ({ products }) =>
  isEmpty(products) ? null : (
    <div className="max-w-screen-md px-6 mx-auto mt-2 mb-6">
      <div className="bg-white rounded-lg shadow">
        <h3 className="py-2 text-3xl font-semibold tracking-tight text-center">
          Produtos incluídos
        </h3>
        {products.map((product, index) => (
          <SearchItem key={`c-item-${index}`} {...product} />
        ))}
      </div>
    </div>
  )

export default IncludedProducts
