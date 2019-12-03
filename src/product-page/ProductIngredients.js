import Ingredients from 'src/components/Ingredients'
import FeaturedIngredients from 'src/product-page/FeaturedIngredients'
import {
  Container,
  Grid,
  Box,
  Typography,
  useMediaQuery,
} from '@material-ui/core'
import theme from 'src/ui/theme'

const ProductIngredients = ({ product }) => {
  const matches = useMediaQuery('(min-width: 760px)')
  return (
    <Container>
      <Grid container justify="center">
        <Grid item xs={12} md={10}>
          <Box pt={8} pb={8} textAlign={matches ? 'center' : 'left'}>
            <Typography variant="h3">Ingredientes</Typography>
            <Typography
              variant="body1"
              css={{
                marginTop: theme.spacing(2),
                marginBottom: theme.spacing(4),
              }}
            >
              Esse produto é feito de{' '}
              <strong>ingredientes seguros que você conhece</strong>, se tiver
              alguma dúvida, clique no link de cada um para obter informações
              sobre o nível de segurança no site da EWG (Environmental Working
              Group - em inglês).
            </Typography>
            <FeaturedIngredients product={product} />
            <Ingredients hideFeatured product={product} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProductIngredients
