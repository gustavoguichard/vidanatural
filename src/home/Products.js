import { useState } from 'react'
import { Box, Container, Grid, Tabs, Tab } from '@material-ui/core'
import find from 'lodash/find'
import times from 'lodash/times'
import ProductSlide from 'src/home/ProductSlide'
import products from 'data/products'
import { useIsMobile } from 'utils/responsive'
import theme from 'src/ui/theme'

const getProduct = path => find(products, p => p.path === path)
const productsArray = [
  getProduct('desodorante-em-pasta'),
  getProduct('rosa-mosqueta'),
  getProduct('desodorante-rollon'),
  getProduct('xampu-em-barra'),
  getProduct('po-dental'),
]

const Products = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, value) => {
    setValue(value)
  }
  const isMobile = useIsMobile()

  const Stepper = ({ hidden }) => (
    <Grid
      item
      xs={12}
      md={10}
      css={{
        textAlign: 'center',
        pointerEvents: hidden ? null : 'none',
        opacity: hidden ? 1 : 0,
        zIndex: 10,
      }}
    >
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
            minWidth: null,
          },
        }}
      >
        {times(productsArray.length, ind => (
          <Tab key={`index-${ind}`} component="a" label={ind + 1} />
        ))}
      </Tabs>
    </Grid>
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
