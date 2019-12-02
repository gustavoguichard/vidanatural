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

  const handleChange = (event, value) => {
    setValue(value)
  }
  const isMobile = useIsMobile()

  const Stepper = ({ hidden }) => (
    <Tabs
      centered
      value={value}
      onChange={handleChange}
      textColor="secondary"
      indicatorColor="secondary"
      css={{
        a: {
          color: theme.palette.secondary.main,
          fontWeight: 'bold',
          minWidth: 50,
        },
      }}
    >
      {times(productsArray.length, ind => (
        <Tab key={`index-${ind}`} component="a" label={ind + 1} />
      ))}
    </Tabs>
  )

  return (
    <Container
      maxWidth="lg"
      css={{
        borderBottom: '10px solid white',
        borderTop: '10px solid white',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Box flex={1} py={isMobile ? 7 : 10}>
        <ProductSlide
          key={`product---1`}
          hidden
          show
          product={productsArray[value]}
        >
          <Stepper hidden />
        </ProductSlide>
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
  )
}

export default Products
