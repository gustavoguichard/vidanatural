import { Box, Container, Grid } from '@material-ui/core'

import Breadcrumbs from './breadcrumbs'

const ProductSale = ({ children, product, isMobile }) => {
  return (
    <>
      <Container maxWidth="lg">
        <Box pt={isMobile ? 8 : 7} pb={6}>
          {isMobile || <Breadcrumbs product={product} />}
          <Grid spacing={4} container justify="center">
            {children}
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default ProductSale
