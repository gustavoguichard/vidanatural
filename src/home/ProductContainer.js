import Link from 'src/components/Link'
import { Box, Container, Grid } from '@material-ui/core'
import ProductTitle from 'src/home/ProductTitle'
import PaperContent from 'src/ui/PaperContent'
import { useIsMobile } from 'utils/responsive'
import theme from 'src/ui/theme'

const Wrapper = ({ paper, children, ...props }) => {
  const isMobile = useIsMobile()
  return isMobile || !paper ? (
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
      <Box py={isMobile ? 7 : 10}>{children}</Box>
    </Container>
  ) : (
    <PaperContent {...props}>{children}</PaperContent>
  )
}

const ProductContainer = ({ paper, product, children }) => (
  <Wrapper css={{ scrollSnapAlign: 'start' }} paper={paper}>
    <Grid spacing={3} justify="center" container>
      <Grid item xs={12} md={6} css={{ textAlign: 'center' }}>
        <ProductTitle product={product} />
      </Grid>
      <Grid item xs={12} md={10} css={{ textAlign: 'center' }}>
        <Grid spacing={6} justify="center" container>
          {children}
        </Grid>
      </Grid>
    </Grid>
  </Wrapper>
)

export default ProductContainer
