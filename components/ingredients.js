import { memo } from 'react'
import find from 'lodash/find'
import { Box, Typography, useMediaQuery } from '@material-ui/core'

import theme from 'lib/theme'

import IngredientsDesktop from 'components/ingredients-desktop'
import IngredientsMobile from 'components/ingredients-mobile'

import ingredientData from 'data/ingredients'

const Ingredients = ({ product, hideFeatured }) => {
  const allIngredients = product.ingredients.map((ing) =>
    find(ingredientData, (data) => data.inci === ing),
  )
  const ingredients = hideFeatured
    ? allIngredients.filter((ing) => !ing.hasIcon)
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
      <Box mx={-2}>
        {matches ? (
          <IngredientsDesktop data={ingredients} />
        ) : (
          <IngredientsMobile data={ingredients} />
        )}
      </Box>
    </div>
  ) : null
}

export default memo(Ingredients)
