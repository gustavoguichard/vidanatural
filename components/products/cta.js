import React, { useState, forwardRef } from 'react'

import { classes } from 'lib/utils'
import useGlobal from 'lib/use-global'

import Spinner from 'components/spinner'
import CTAButton from 'components/cta-button'
import CalculateShipping from './calculate-shipping'
import OutOfStockForm from './out-of-stock-form'

const ProductCTA = ({ product, innerRef, hideQuantity }) => {
  const [adding, setAdding] = useState(false)
  const [, { addToCart }] = useGlobal()
  const [variant] = product.variants ? product.variants : []

  const [quantity, setQuantity] = useState(1)
  const handleChange = (increment) => () => {
    const newValue = Math.max(quantity + increment, 0)
    setQuantity(Math.min(newValue, variant.stock))
  }
  const inStock = variant.stock > 0

  const cx = classes('flex overflow-hidden', {
    'flex-col flex-grow mr-2': hideQuantity,
  })
  return variant ? (
    <>
      <div className={cx}>
        {inStock && !hideQuantity && (
          <div className="flex shadow border bg-white text-center text-lg border-gray-200 font-semibold mr-1">
            <button
              type="button"
              className="h-full w-8 hover:bg-gray-100"
              onClick={handleChange(-1)}
            >
              -
            </button>
            <span className="flex items-center px-1 h-full">{quantity}</span>
            <button
              type="button"
              className="h-full w-8 hover:bg-gray-100"
              onClick={handleChange(1)}
            >
              +
            </button>
          </div>
        )}
        {inStock ? (
          <CTAButton
            ref={innerRef}
            disableIcon={adding}
            className="overflow-hidden"
            onClick={async () => {
              setAdding(true)
              await addToCart(variant.sku, quantity)
              setAdding(false)
            }}
          >
            {adding ? (
              <Spinner className="mx-8" />
            ) : product.isKit ? (
              <span className="truncate">Adicionar items ao carrinho</span>
            ) : (
              <span className="truncate">Adicionar ao carrinho</span>
            )}
          </CTAButton>
        ) : (
          <OutOfStockForm innerRef={innerRef} product={variant} />
        )}
      </div>
      {hideQuantity || (
        <CalculateShipping sku={variant.sku} quantity={quantity} />
      )}
    </>
  ) : null
}

export default forwardRef((props, ref) => (
  <ProductCTA innerRef={ref} {...props} />
))
