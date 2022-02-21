import Img from 'components/img'
import type { VndaProduct } from 'types/vnda'
import Link from 'components/link'

type Props = { product: VndaProduct }
const ProductCard = ({ product }: Props) => {
  const [variant] = product.variants || [{}]

  return (
    <div key={product.id} className="relative flex flex-col w-full mb-4 group">
      <div className="w-full h-56 overflow-hidden transition bg-gray-200 rounded-md group-hover:opacity-75 lg:h-72 xl:h-80">
        <Img
          src={product.images?.[0]?.url}
          alt={product.name}
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div className="grow">
        <h3 className="mt-4 text-sm text-gray-700">
          <a href={`/produto/${product.slug}`}>
            <span className="absolute inset-0" />
            {product.name}
          </a>
        </h3>
        <p className="mt-1 text-sm text-gray-500">{variant.name}</p>
      </div>
      <div className="flex gap-1 mt-6">
        <Link
          href={`/produto/${product.slug}`}
          className="relative flex items-center justify-center flex-1 grow px-4 py-2 text-sm font-medium text-white transition border border-transparent rounded-md sm:px-8 bg-primary-500 hover:bg-primary-700"
        >
          Comprar<span className="sr-only">, {product.name}</span>
        </Link>
      </div>
    </div>
  )
}

export default ProductCard
