import { useState } from 'react'

import analytics from 'lib/analytics'
import { toCurrency } from 'lib/utils'
import useGlobal from 'lib/use-global'

import DiscountTag from 'components/products/discount-tag'
import CardImage from 'components/card-image'
import Link from 'components/link'
import Spinner from 'components/spinner'

const ProductCard = ({ product }) => {
  const [adding, setAdding] = useState(false)
  const [, { addToCart }] = useGlobal()
  const [variant] = product.variants || [{}]

  const onClick = async (ev) => {
    if (product.inStock) {
      ev.preventDefault()
      ev.stopPropagation()
      setAdding(true)
      analytics.addToCart({ product, variant, location: 'ProductCard' })
      await addToCart(variant.sku, 1)
      setAdding(false)
    }
  }

  const priceTag = [
    <span key="add">Adicionar</span>,
    <span key="price" className="flex flex-wrap items-baseline">
      {variant.price > variant.sale_price && (
        <span className="mr-1 text-xs text-gray-500 line-through">
          {toCurrency(variant.price)}
        </span>
      )}
      {toCurrency(variant.sale_price)}
    </span>,
  ]

  return (
    <div className="flex items-start w-full overflow-hidden border border-transparent rounded hover:border-gray-200 group bg-gray-100/50">
      <Link className="flex w-full h-full" href={`/produto/${product.slug}`}>
        <div className="relative flex flex-col flex-grow">
          <CardImage product={product} />
          <DiscountTag small product={product} />
          <div className="flex flex-col justify-between flex-grow p-2">
            <div className="leading-snug">
              <h3 className="mb-1 font-semibold tracking-tight text-gray-800">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600">{variant.name}</p>
            </div>
            <button
              type="button"
              onClick={onClick}
              className="flex flex-wrap justify-between p-3 mt-2 text-sm font-semibold transition duration-500 bg-white border rounded hover:border-gray-500"
            >
              {adding ? (
                <Spinner className="m-auto text-gray-800" />
              ) : product.inStock ? (
                priceTag
              ) : (
                'Sem estoque'
              )}
            </button>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
