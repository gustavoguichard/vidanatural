import Link from 'src/components/Link'
import { Box, Container, Grid, Paper, Typography } from '@material-ui/core'
import BackgroundImg from 'src/components/BackgroundImg'
import CTAButton from 'src/components/CTAButton'
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
      <Typography variant="h3" color="textSecondary">
        {product.name}
      </Typography>
      <Typography
        css={{
          marginTop: theme.spacing(3),
          marginBottom: theme.spacing(2),
        }}
        variant="body1"
        color="textSecondary"
      >
        {product.subtitle}
      </Typography>
      <CTAButton href={`/${product.path}`} color="inherit">
        Saiba mais
      </CTAButton>
      <Link href={`/${product.path}`}>
        <img
          className="responsive"
          css={{
            maxHeight: 400,
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(4),
          }}
          src={`/static/images/products/${product.path}.png`}
          alt={product.name}
        />
      </Link>
    </Box>
  </Grid>
)

const SplitProduct = ({ product1, product2 }) => (
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
      <Grid css={{ minHeight: '60vh' }} container>
        <ProductWrapper product={product1} />
        <ProductWrapper product={product2} />
      </Grid>
    </Paper>
  </Container>
)

export default SplitProduct
