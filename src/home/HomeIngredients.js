import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from '@material-ui/core'
import IngredientsDesktop from 'src/components/IngredientsDesktop'
import IngredientsMobile from 'src/components/IngredientsMobile'
import ingredientData from 'data/ingredients'
import theme from 'src/ui/theme'

const HomeIngredients = () => {
  const ingredients = ingredientData.filter(ing => ing.showHome)
  const matches = useMediaQuery(`(min-width: 820px)`)
  return (
    <Container
      css={{
        borderBottom: '10px solid white',
        borderTop: '10px solid white',
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
        paddingBottom: theme.spacing(8),
        paddingTop: theme.spacing(8),
      }}
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
          <div
            id="ingredientes"
            css={{
              marginLeft: -theme.spacing(2),
              marginRight: -theme.spacing(2),
            }}
          >
            {matches ? (
              <IngredientsDesktop data={ingredients} />
            ) : (
              <IngredientsMobile data={ingredients} />
            )}
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default HomeIngredients
