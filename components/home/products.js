import { useState, useMemo } from 'react'
import filter from 'lodash/filter'
import times from 'lodash/times'

import { useIsMobile } from 'lib/hooks'
import { classes } from 'lib/utils'

import ProductSlide from 'components/home/slide'

import productsData from 'data/products'

const HomeProducts = ({ products }) => {
  const [value, setValue] = useState(0)

  const productsArray = useMemo(() => {
    return filter(productsData, (product) => {
      const vndaProduct = products.find((p) => p.id === product.vndaId)
      return product.showHome && vndaProduct
    })
  }, [products])

  const handleChange = (newValue) => {
    const safeVal = newValue < 0 ? productsArray.length - 1 : newValue
    setValue(safeVal % productsArray.length)
  }
  const isMobile = useIsMobile()

  return (
    <div className="border-white mb-12 border-t-8 border-b-8 max-w-screen-xl m-auto flex items-center relative min-h-full">
      <div className="flex pt-8">
        <ProductSlide
          key="product---1"
          hidden
          show
          index={value}
          product={productsArray[value]}
          handleChange={handleChange}
        />
        {productsArray.map((product, idx) => (
          <ProductSlide
            isMobile={isMobile}
            key={`product-${idx}`}
            show={value === idx}
            handleChange={handleChange}
            index={idx}
            product={product}
          >
            <Stepper
              handleChange={handleChange}
              size={productsArray.length}
              current={value}
            />
          </ProductSlide>
        ))}
      </div>
    </div>
  )
}

const Stepper = ({ current, size, handleChange }) => (
  <div className="text-green-600 text-center">
    {times(size, (idx) => {
      const cx = classes('font-semibold px-4 py-2 border-b-2', {
        'border-green-600': current === idx,
        'border-transparent': current !== idx,
      })
      return (
        <button
          type="button"
          onClick={() => handleChange(idx)}
          key={`idxex-${idx}`}
          className={cx}
        >
          {idx + 1}
        </button>
      )
    })}
  </div>
)

export default HomeProducts
