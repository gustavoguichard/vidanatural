import { useState } from 'react'

import api from 'lib/api'
import { toCurrency } from 'lib/utils'
import useGlobal from 'lib/use-global'

import CircularProgress from 'components/circular-progress'
import DiscountTag from 'components/products/discount-tag'
import Img from 'components/img'
import Link from 'components/link'

const ProductPreview = ({ product }) => {
  const [adding, setAdding] = useState(false)
  const [, { addToCart }] = useGlobal()
  const [variant] = product.variants || [{}]
  const [image] = product.images
  const onClick = async (ev) => {
    if (product.inStock) {
      ev.preventDefault()
      ev.stopPropagation()
      setAdding(true)
      await addToCart(variant.sku, 1)
      setAdding(false)
    }
  }

  const priceTag = [
    <span>Adicionar</span>,
    <span>
      {variant.price > variant.sale_price && (
        <span className="mr-1 line-through text-xs text-gray-400">
          {toCurrency(variant.price)}
        </span>
      )}
      {toCurrency(variant.sale_price)}
    </span>,
  ]

  return (
    <div className="flex rounded hover:shadow items-start group overflow-hidden bg-gray-200 bg-opacity-50">
      <Link
        className="flex h-full"
        href="/produtos/[slug]"
        as={`/produtos/${product.slug}`}
      >
        <div className="flex flex-col flex-grow relative">
          <Img
            alt={product.name}
            height="250"
            src={api.vnda.getResizedImg(image.url, 600)}
            title={product.name}
          />
          <DiscountTag small product={product} />
          <div className="flex flex-col flex-grow justify-between p-2">
            <div className="leading-snug">
              <h3 className="font-semibold tracking-tight mb-1">
                {product.name}
              </h3>
              <p
                className="text-sm text-gray-600"
                dangerouslySetInnerHTML={{
                  __html: product.description.featured,
                }}
              />
            </div>
            <button
              type="button"
              onClick={onClick}
              className="flex mt-2 text-sm font-semibold justify-between p-3 border hover:border-gray-500 transition duration-500 bg-white rounded"
            >
              {adding ? (
                <CircularProgress className="text-gray-800 m-auto" />
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

export default ProductPreview
