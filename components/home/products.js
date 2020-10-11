import { useState, useMemo } from 'react'
import filter from 'lodash/filter'
import times from 'lodash/times'
import { Tabs, Tab } from '@material-ui/core'

import { useIsMobile } from 'lib/hooks'
import theme from 'lib/theme'

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

  const handleChange = (_event, newValue) => {
    const safeVal = newValue < 0 ? productsArray.length - 1 : newValue
    setValue(safeVal % productsArray.length)
  }
  const isMobile = useIsMobile()

  const Stepper = () => (
    <Tabs
      centered
      value={value}
      onChange={handleChange}
      textColor="secondary"
      indicatorColor="secondary"
      css={{
        padding: 0,
        a: {
          color: theme.palette.secondary.main,
          fontWeight: 'bold',
          minWidth: 50,
        },
      }}
    >
      {times(productsArray.length, (ind) => (
        <Tab key={`index-${ind}`} component="a" label={ind + 1} />
      ))}
    </Tabs>
  )

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
        {productsArray.map((product, index) => (
          <ProductSlide
            isMobile={isMobile}
            key={`product-${index}`}
            show={value === index}
            handleChange={handleChange}
            index={index}
            product={product}
          >
            <Stepper />
          </ProductSlide>
        ))}
      </div>
    </div>
  )
}

export default HomeProducts
