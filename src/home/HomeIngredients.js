import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from '@material-ui/core'
import Ingredients from 'src/components/Ingredients'
import theme from 'src/ui/theme'

const HomeIngredients = () => {
  const matches = useMediaQuery('(min-width: 760px)')
  return (
    <Container
      css={{ paddingBottom: theme.spacing(8), paddingTop: theme.spacing(8) }}
    >
      <Grid container justify="center">
        <Grid item xs={12} md={10}>
          <Box textAlign={matches ? 'center' : 'left'}>
            <Typography variant="h2">Ingredientes que você conhece</Typography>
            <Typography
              variant="body1"
              css={{
                marginTop: theme.spacing(2),
                marginBottom: theme.spacing(4),
              }}
            >
              Cosméticos são usados diariamente e acabam sendo absorvidos pelo
              organismo.
              <br />
              Certifique-se que você leia os rótulos e entenda o que está
              colocando no corpo.
              <br />
              <br />
              Veja a lista de alguns ingredientes que usamos nas nossas
              composições:
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={10}>
          <Ingredients />
        </Grid>
      </Grid>
    </Container>
  )
}

export default HomeIngredients
