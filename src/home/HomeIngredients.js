import { Box, Grid, Typography } from '@material-ui/core'
import Ingredients from 'src/components/Ingredients'
import theme from 'src/ui/theme'

const HomeIngredients = () => {
  return (
    <Grid
      container
      justify="center"
      css={{ paddingBottom: theme.spacing(8), paddingTop: theme.spacing(8) }}
    >
      <Grid item xs={12} md={10}>
        <Box textAlign="center">
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
        <Ingredients />
      </Grid>
    </Grid>
  )
}

export default HomeIngredients
