import { memo } from 'react'
import { useMediaQuery } from '@material-ui/core'
import IngredientsDesktop from 'src/components/IngredientsDesktop'
import IngredientsMobile from 'src/components/IngredientsMobile'
import ingredientData from 'data/ingredients'
import find from 'lodash/find'
import theme from 'src/ui/theme'

const Ingredients = ({ product }) => {
  const ingredients = product
    ? product.ingredients.map(ing =>
        find(ingredientData, data => data.inci === ing),
      )
    : ingredientData.filter(ing => ing.showHome)

  const matches = useMediaQuery(`(min-width: 820px)`)

  return (
    <div id="ingredientes">
      {matches ? (
        <IngredientsDesktop data={ingredients} />
      ) : (
        <IngredientsMobile data={ingredients} />
      )}
    </div>
  )
}

export default memo(Ingredients)
