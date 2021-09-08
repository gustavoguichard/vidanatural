import { toCurrency } from 'lib/utils'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import Img from 'components/img'

const ProductCard = ({ product }) => {
  const [variant] = product.variants || [{}]
  return (
    <div key={product.id} className="relative mb-4 group">
      <div className="w-full h-56 overflow-hidden transition bg-gray-200 rounded-md group-hover:opacity-75 lg:h-72 xl:h-80">
        <Img
          src={product.images?.[0]?.url}
          alt={product.name}
          className="object-cover object-center w-full h-full"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">
        <a href={`/produto/${product.slug}`}>
          <span className="absolute inset-0" />
          {product.name}
        </a>
      </h3>
      <p className="mt-1 text-sm text-gray-500">{variant.name}</p>
      <p className="mt-1 text-sm font-medium text-gray-900">
        {toCurrency(variant.price)}
      </p>
      <div className="flex gap-1 mt-6">
        <a
          href={`/produto/${product.slug}`}
          className="relative flex items-center justify-center flex-1 px-8 py-2 text-sm font-medium text-white transition border border-transparent rounded-md bg-salmon-500 hover:bg-salmon-700"
        >
          Comprar<span className="sr-only">, {product.name}</span>
        </a>
        <a
          href="#"
          className="relative flex items-center p-2 text-lg font-semibold text-white transition rounded-md bg-nature-300 hover:bg-nature-500"
        >
          <ShoppingCartIcon
            className="flex-shrink-0 w-6 h-6 -mr-1"
            aria-hidden="true"
          />
          + <span className="sr-only">Adicionar ao carrinho</span>
        </a>
      </div>
    </div>
  )
}

export default ProductCard
