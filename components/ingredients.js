import { memo } from 'react'
import { Box, Typography, useMediaQuery } from '@material-ui/core'

import theme from 'lib/theme'

import IngredientsDesktop from 'components/ingredients-desktop'
import IngredientsMobile from 'components/ingredients-mobile'

const Ingredients = ({ ingredients, hasFeatured }) => {
  const matches = useMediaQuery(`(min-width: 820px)`)

  return ingredients.length ? (
    <div id="ingredientes">
      {hasFeatured && (
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
