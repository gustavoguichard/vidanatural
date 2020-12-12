import { memo } from 'react'
import isEmpty from 'lodash/isEmpty'

import FeaturedIngredients from 'components/featured-ingredients'
import Ingredients from 'components/ingredients'
import RichText from 'components/rich-text'

const ProductIngredients = ({
  ingredients_description,
  ingredients,
  ingredients_table,
}) => {
  const hasIngredients = !isEmpty(ingredients)
  const hasTable = !isEmpty(ingredients_table)
  return hasIngredients || hasTable ? (
    <div className="border-white border-t-8 border-b-8" id="ingredientes">
      <div className="flex flex-col items-center max-w-screen-xl px-10">
        <div className="md:w-10/12 py-16 flex flex-col items-center">
          <div className="self-start max-w-3xl md:self-auto md:text-center">
            <h3 className="text-4xl font-bold tracking-tight">Ingredientes</h3>
            <RichText className="my-2 max-w-sceen-xs mx-auto">
              {ingredients_description}
            </RichText>
          </div>
          <FeaturedIngredients ingredients={ingredients} />
          <Ingredients
            hasFeatured={hasIngredients}
            ingredients={ingredients_table}
          />
        </div>
      </div>
    </div>
  ) : null
}

export default memo(ProductIngredients)
