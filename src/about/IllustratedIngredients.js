import {
  Container,
  Grid,
  Box,
  Typography,
  useMediaQuery,
} from '@material-ui/core'

import theme from 'lib/theme'

import CTAButton from 'components/cta-button'
import FeaturedIngredients from 'src/product-page/FeaturedIngredients'

const IllustratedIngredients = () => {
  const matches = useMediaQuery('(min-width: 760px)')
  return (
    <Box
      css={{
        borderBottom: '10px solid white',
        borderTop: '10px solid white',
      }}
      id="ingredientes"
    >
      <Container
        css={{ paddingLeft: theme.spacing(5), paddingRight: theme.spacing(5) }}
      >
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
                Veja alguns dos nossos principais ingredientes e seus
                benefícios.
              </Typography>
              <FeaturedIngredients />
              <CTAButton href="/produtos" css={{ marginTop: theme.spacing(4) }}>
                Conhecer os produtos
              </CTAButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default IllustratedIngredients
