import Link from 'src/components/Link'
import { Box, Container, Grid, Paper, Typography } from '@material-ui/core'
import PaperContent from 'src/ui/PaperContent'
import CTAButton from 'src/components/CTAButton'
import { useIsMobile } from 'utils/responsive'
import theme from 'src/ui/theme'

const Wrapper = ({ paper, children }) => {
  const isMobile = useIsMobile()
  return isMobile || !paper ? (
    <Container
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
    <PaperContent>{children}</PaperContent>
  )
}

const ProductContainer = ({ paper, product, children }) => (
  <Wrapper paper={paper}>
    <Grid spacing={3} justify="center" container>
      <Grid item xs={12} md={6} css={{ textAlign: 'center' }}>
        <Typography variant="h3">{product.name}</Typography>
        <Typography
          css={{
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(2),
            color: theme.palette.text.disabled,
          }}
          variant="body1"
        >
          {product.subtitle}
        </Typography>
        <CTAButton href={`/${product.path}`}>Saiba mais</CTAButton>
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
