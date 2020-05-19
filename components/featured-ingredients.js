import find from 'lodash/find'
import { Box, Grid, Typography } from '@material-ui/core'

import theme from 'lib/theme'

import Img from 'components/img'
import InciLink from 'components/inci-link'

import ingredientData from 'data/ingredients'

const FeaturedIngredients = ({ product }) => {
  const allIngredients = product
    ? product.ingredients.map((ing) =>
        find(ingredientData, (data) => data.inci === ing),
      )
    : ingredientData

  const ingredients = allIngredients.filter((ing) => ing.hasIcon)

  return (
    <Grid
      spacing={3}
      container
      justify="space-around"
      css={{ textAlign: 'center' }}
    >
      {ingredients.map((ing) => (
        <Grid key={ing.inci} item xs={12} sm={6} md={4}>
          <Box mb={-8} minHeight={250}>
            <Img
              className="responsive"
              width={300}
              alt={ing.name}
              src={`/static/images/ingredients/${ing.inci}.png`}
            />
          </Box>
          <Typography
            variant="h4"
            css={{
              textShadow:
                '-2px -2px 1px white, 2px -2px 1px white, -2px 2px 1px white, 2px 2px 1px white',
            }}
          >
            {ing.name}
          </Typography>
          <Typography variant="caption">
            <InciLink {...ing} />
          </Typography>
          <Typography
            variant="body1"
            css={{
              color: theme.palette.text.hint,
              marginTop: theme.spacing(),
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
