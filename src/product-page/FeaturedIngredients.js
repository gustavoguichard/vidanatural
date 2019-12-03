import find from 'lodash/find'
import { Grid, Typography } from '@material-ui/core'
import Img from 'src/components/Img'
import ingredientData from 'data/ingredients'
import theme from 'src/ui/theme'

const FeaturedIngredients = ({ product }) => {
  const allIngredients = product.ingredients.map(ing =>
    find(ingredientData, data => data.inci === ing),
  )
  const ingredients = allIngredients.filter(ing => ing.hasIcon)

  return (
    <Grid
      spacing={3}
      container
      justify="space-around"
      css={{ textAlign: 'center' }}
    >
      {ingredients.map(ing => (
        <Grid key={ing.inci} item xs={12} sm={6} md={4}>
          <Img
            css={{ marginBottom: -theme.spacing(8) }}
            alt={ing.name}
            src={`/static/images/ingredients/${ing.inci}.png`}
          />
          <Typography variant="h4" css={{ textShadow: '-1px -1px 1px white' }}>
            {ing.name}
          </Typography>
          <Typography
            variant="body1"
            css={{
              color: theme.palette.text.hint,
              marginTop: theme.spacing(3),
              marginBottom: theme.spacing(5),
            }}
          >
            {ing.description}
          </Typography>
        </Grid>
      ))}
    </Grid>
  )
}

export default FeaturedIngredients
