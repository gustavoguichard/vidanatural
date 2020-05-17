import { useState } from 'react'
import { Box, Container, Tabs, Tab } from '@material-ui/core'
import filter from 'lodash/filter'
import times from 'lodash/times'
import ProductSlide from 'src/home/ProductSlide'
import products from 'data/products'
import { useIsMobile } from 'utils/responsive'
import theme from 'src/ui/theme'

const productsArray = filter(products, 'showHome')

const Products = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
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
    <Box
      css={{
        borderBottom: '10px solid white',
        borderTop: '10px solid white',
        minHeight: '80vh',
      }}
    >
      <Container
        maxWidth="lg"
        css={{ display: 'flex', alignItems: 'center', position: 'relative' }}
      >
        <Box flex={1} py={isMobile ? 7 : 10}>
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
        </Box>
      </Container>
    </Box>
  )
}

export default Products
