import { memo } from 'react'
import { Typography, useMediaQuery } from '@material-ui/core'
import IngredientsDesktop from 'src/components/IngredientsDesktop'
import IngredientsMobile from 'src/components/IngredientsMobile'
import ingredientData from 'data/ingredients'
import find from 'lodash/find'
import theme from 'src/ui/theme'

const Ingredients = ({ product, hideFeatured }) => {
  const allIngredients = product.ingredients.map(ing =>
    find(ingredientData, data => data.inci === ing),
  )
  const ingredients = hideFeatured
    ? allIngredients.filter(ing => !ing.hasIcon)
    : allIngredients

  const matches = useMediaQuery(`(min-width: 820px)`)

  return ingredients.length ? (
    <div id="ingredientes">
      {hideFeatured && (
        <Typography
          variant="h4"
          css={{
            marginBottom: theme.spacing(2),
            marginTop: theme.spacing(6),
          }}
        >
          Outros ingredientes
        </Typography>
      )}
      {matches ? (
        <IngredientsDesktop data={ingredients} />
      ) : (
        <IngredientsMobile data={ingredients} />
      )}
    </div>
  ) : null
}

export default memo(Ingredients)
