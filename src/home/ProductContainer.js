import { Box, Container, Grid } from '@material-ui/core'
import ProductTitle from 'src/home/ProductTitle'
import { useIsMobile } from 'utils/responsive'
import theme from 'src/ui/theme'

const Wrapper = ({ paper, children, ...props }) => {
  const isMobile = useIsMobile()
  return (
    <Container
      {...props}
      maxWidth="lg"
      css={{
        borderBottom: '10px solid white',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box flex={1} py={isMobile ? 7 : 10}>
        {children}
      </Box>
    </Container>
  )
}

const ProductContainer = ({ dark, product, children }) => (
  <Wrapper css={{ color: dark ? theme.palette.text.secondary : null }}>
    <Grid
      spacing={3}
      justify="center"
      container
      css={{
        background: `url(/static/images/products/big/${product.path}-bg.png) no-repeat`,
        backgroundPosition: 'top center',
        backgroundSize: 'contain',
      }}
    >
      <Grid item xs={12} md={10} css={{ textAlign: 'center' }}>
        <Grid spacing={6} justify="center" container>
          {children}
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} css={{ textAlign: 'center' }}>
        <ProductTitle dark={dark} product={product} />
      </Grid>
    </Grid>
  </Wrapper>
)

export default ProductContainer
