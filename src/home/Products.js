import { useState } from 'react'
import { Box, Container } from '@material-ui/core'
import find from 'lodash/find'
import ProductSlide from 'src/home/ProductSlide'
import products from 'data/products'
import { useIsMobile } from 'utils/responsive'

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

  const handleChange = () => setValue((value + 1) % productsArray.length)
  const isMobile = useIsMobile()

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
          product={productsArray[value]}
        />
        {productsArray.map((product, index) => (
          <ProductSlide
            isMobile={isMobile}
            key={`product-${index}`}
            show={value === index}
            product={product}
          />
        ))}
      </Box>
      <button onClick={handleChange}>Next</button>
    </Container>
  )
}

export default Products
