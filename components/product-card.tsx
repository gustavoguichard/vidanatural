import { cx, toCurrency } from 'lib/utils'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import Img from 'components/img'
import type { VndaProduct } from 'types/vnda'
import useGlobal from 'lib/use-global'
import { useState } from 'react'
import analytics from 'lib/analytics'
import Link from 'components/link'
import Spinner from 'components/spinner'

type Props = { product: VndaProduct }
const ProductCard = ({ product }: Props) => {
  const [adding, setAdding] = useState(false)
  const [, { addToCart }] = useGlobal()
  const [variant] = product.variants || [{}]

  const onClick = async (ev: React.MouseEvent) => {
    if ((product as any).inStock) {
      ev.preventDefault()
      ev.stopPropagation()
      setAdding(true)
      analytics.addToCart({ product, variant, location: 'ProductCard' })
      await addToCart(variant.sku, 1)
      setAdding(false)
    }
  }

  return (
    <div key={product.id} className="relative w-full mb-4 group">
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
        <Link
          href={`/produto/${product.slug}`}
          className="relative flex items-center justify-center flex-1 flex-grow px-4 py-2 text-sm font-medium text-white transition border border-transparent rounded-md sm:px-8 bg-primary-500 hover:bg-primary-700"
        >
          Comprar<span className="sr-only">, {product.name}</span>
        </Link>
        <button
          type="button"
          onClick={onClick}
          className="relative flex items-center p-2 text-lg font-semibold text-white transition rounded-md bg-secondary-300 hover:bg-secondary-500"
        >
          {adding ? (
            <Spinner
              aria-hidden="true"
              className="w-6 h-6 -mr-1 translate-x-1"
            />
          ) : (
            <ShoppingCartIcon
              className="flex-shrink-0 w-6 h-6 -mr-1"
              aria-hidden="true"
            />
          )}
          <span className={cx(adding && 'opacity-0')}>
            + <span className="sr-only">Adicionar ao carrinho</span>
          </span>
        </button>
      </div>
    </div>
  )
}

export default ProductCard
