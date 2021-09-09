import { VndaProduct } from 'types/vnda'
import ProductCard from './product-card'

type Props = { products: VndaProduct[] }
const TrendingProducts = ({ products }: Props) => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Produtos mais populares
          </h2>
          <a
            href="#"
            className="hidden text-sm font-medium group text-nature-600 hover:text-nature-500 md:block"
          >
            Comprar produtos
            <span
              aria-hidden="true"
              className="inline-block transition group-hover:translate-x-1"
            >
              {' '}
              &rarr;
            </span>
          </a>
        </div>

        <div className="grid grid-cols-2 mt-6 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-sm md:hidden">
          <a
            href="#"
            className="font-medium group text-nature-600 hover:text-nature-500"
          >
            Comprar produtos
            <span
              aria-hidden="true"
              className="inline-block transition group-hover:translate-x-1"
            >
              {' '}
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default TrendingProducts
