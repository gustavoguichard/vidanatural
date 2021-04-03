import React, { useState, forwardRef } from 'react'

import { classes } from 'lib/utils'
import useGlobal from 'lib/use-global'
import analytics from 'lib/analytics'

import CTAButton from 'components/cta-button'
import NumericStepper from 'components/numeric-stepper'
import Spinner from 'components/spinner'
import CalculateShipping from './calculate-shipping'
import OutOfStockForm from './out-of-stock-form'

const ProductCTA = ({ product, innerRef, hideQuantity }) => {
  const [adding, setAdding] = useState(false)
  const [, { addToCart }] = useGlobal()
  const [variant] = product.variants ? product.variants : []

  const [quantity, setQuantity] = useState(1)
  const handleChange = (increment) => () => {
    const newValue = Math.max(quantity + increment, 1)
    setQuantity(Math.min(newValue, variant.stock))
  }
  const inStock = variant.stock > 0
  const handleSubmit = async (event) => {
    event.preventDefault()
    setAdding(true)
    analytics.addToCart({
      product,
      variant,
      quantity,
      location: 'ProductPage',
    })
    await addToCart(variant.sku, quantity)
    setAdding(false)
  }

  const cx = classes('flex overflow-hidden', {
    'flex-col flex-grow mr-2': hideQuantity,
  })
  return variant ? (
    <>
      <form
        method="post"
        onSubmit={handleSubmit}
        action="/api/cart/add-to-cart"
        className={cx}
      >
        <input type="hidden" name="sku" value={variant.sku} />
        {inStock && !hideQuantity && (
          <div className="flex shadow border bg-white text-center text-lg border-gray-200 font-semibold mr-1">
            <NumericStepper
              fixed
              current={quantity}
              onDecrease={handleChange(-1)}
              onIncrease={handleChange(1)}
            />
          </div>
        )}
        {inStock ? (
          <CTAButton
            ref={innerRef}
            disableIcon={adding}
            className="overflow-hidden"
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
      </form>
      {hideQuantity || (
        <CalculateShipping sku={variant.sku} quantity={quantity} />
      )}
    </>
  ) : null
}

export default forwardRef((props, ref) => (
  <ProductCTA innerRef={ref} {...props} />
))
