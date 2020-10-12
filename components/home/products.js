import { useState, useMemo } from 'react'
import filter from 'lodash/filter'

import { useIsMobile } from 'lib/hooks'

import ProductSlide from 'components/home/slide'
import Tabs from 'components/tabs'

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
            <Tabs
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

export default HomeProducts
