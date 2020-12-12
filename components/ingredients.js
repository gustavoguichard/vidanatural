import { memo } from 'react'

import IngredientsDesktop from 'components/ingredients-desktop'
import IngredientsMobile from 'components/ingredients-mobile'

const Ingredients = ({ ingredients, hasFeatured }) =>
  ingredients.length ? (
    <div id="ingredientes" className="w-full">
      {hasFeatured && (
        <h4 className="mt-12 mb-4 md:text-center text-2xl tracking-tight">
          Outros ingredientes
        </h4>
      )}
      <IngredientsDesktop data={ingredients} />
      <IngredientsMobile data={ingredients} />
    </div>
  ) : null

export default memo(Ingredients)
