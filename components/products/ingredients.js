import { memo } from 'react'

import FeaturedIngredients from 'components/featured-ingredients'
import Ingredients from 'components/ingredients'
import { RichText } from 'prismic-reactjs'

const ProductIngredients = ({
  ingredients_description,
  ingredients,
  ingredients_table,
}) => {
  const hasIngredients = ingredients?.length > 0
  const hasTable = ingredients_table?.length > 0
  return hasIngredients || hasTable ? (
    <div className="border-t-8 border-b-8 border-white" id="ingredientes">
      <div className="flex flex-col items-center max-w-screen-xl px-10 mx-auto">
        <div className="flex flex-col items-center py-16 md:w-10/12">
          <div className="self-start max-w-3xl md:self-auto md:text-center">
            <h3 className="text-4xl font-bold tracking-tight">Ingredientes</h3>
            <div className="mx-auto my-2 max-w-sceen-xs">
              <RichText render={ingredients_description} />
            </div>
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
