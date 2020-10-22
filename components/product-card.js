import { useState } from 'react'

import api from 'lib/api'
import { toCurrency } from 'lib/utils'
import { useInterval } from 'lib/hooks'
import useGlobal from 'lib/use-global'

import CircularProgress from 'components/circular-progress'
import DiscountTag from 'components/products/discount-tag'
import Img from 'components/img'
import Link from 'components/link'

const ProductCard = ({ product }) => {
  const [adding, setAdding] = useState(false)
  const [, { addToCart }] = useGlobal()
  const [variant] = product.variants || [{}]

  const [image] = product.images
  const [hovering, setHovering] = useState(false)
  const [index, setIndex] = useState(0)
  const nextImage = () => setIndex((index + 1) % product.images.length)
  useInterval(nextImage, hovering ? 500 : null)

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
    <span key="add">Adicionar</span>,
    <span key="price" className="flex flex-wrap items-baseline">
      {variant.price > variant.sale_price && (
        <span className="mr-1 line-through text-xs text-gray-500">
          {toCurrency(variant.price)}
        </span>
      )}
      {toCurrency(variant.sale_price)}
    </span>,
  ]

  const thumbnail = hovering ? product.images[index].url : image.url

  return (
    <div className="flex rounded hover:shadow items-start group overflow-hidden bg-gray-200 bg-opacity-50">
      <Link
        className="flex h-full"
        href="/produto/[slug]"
        as={`/produto/${product.slug}`}
      >
        <div className="flex flex-col flex-grow relative">
          <Img
            alt={product.name}
            height="250"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            src={api.vnda.getResizedImg(thumbnail, 300)}
            title={product.name}
            className="object-cover"
          />
          <DiscountTag small product={product} />
          <div className="flex flex-col flex-grow justify-between p-2">
            <div className="leading-snug">
              <h3 className="font-semibold tracking-tight mb-1">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600">{variant.name}</p>
            </div>
            <button
              type="button"
              onClick={onClick}
              className="flex flex-wrap mt-2 text-sm font-semibold justify-between p-3 border hover:border-gray-500 transition duration-500 bg-white rounded"
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

export default ProductCard
