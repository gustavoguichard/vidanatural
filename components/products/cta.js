import React, { useState, forwardRef } from 'react'

import { classes } from 'lib/utils'
import useGlobal from 'lib/use-global'

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

  const cx = classes('flex overflow-hidden', {
    'flex-col flex-grow mr-2': hideQuantity,
  })
  return variant ? (
    <>
      <div className={cx}>
        {inStock && !hideQuantity && (
          <NumericStepper
            current={quantity}
            onDecrease={handleChange(-1)}
            onIncrease={handleChange(1)}
          />
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
