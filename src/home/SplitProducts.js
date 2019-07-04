import Link from 'src/components/Link'
import { Box, Container, Grid, Paper } from '@material-ui/core'
import BackgroundImg from 'src/components/BackgroundImg'
import ProductTitle from 'src/home/ProductTitle'
import ProductImg from 'src/home/ProductImg'
import { useIsMobile } from 'utils/responsive'
import theme from 'src/ui/theme'

const ProductWrapper = ({ product }) => (
  <Grid
    item
    css={{
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingBottom: '2rem',
      paddingTop: '2rem',
    }}
    xs={12}
    md={6}
  >
    <BackgroundImg src={`/static/images/product-images/${product.path}.jpg`} />
    <Box
      position="relative"
      zIndex={2}
      p={5}
      maxWidth={500}
      css={{ color: 'white' }}
    >
      <ProductTitle product={product} dark />
      <ProductImg product={product} height={400} />
    </Box>
  </Grid>
)

const Wrapper = ({ paper, children, ...props }) => {
  const isMobile = useIsMobile()
  return isMobile || !paper ? (
    <div {...props}>{children}</div>
  ) : (
    <Container maxWidth="lg">
      <Paper
        css={{
          overflow: 'hidden',
          marginBottom: '-3rem',
          marginTop: '-1rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {children}
      </Paper>
    </Container>
  )
}

const SplitProduct = ({ product1, product2 }) => (
  <Wrapper paper>
    <Grid css={{ minHeight: '60vh' }} container>
      <ProductWrapper product={product1} />
      <ProductWrapper product={product2} />
    </Grid>
  </Wrapper>
)

export default SplitProduct
