import FeaturedIngredients from 'components/featured-ingredients'
import { RichText } from 'prismic-reactjs'

const IllustratedIngredients = ({
  ingredients_description,
  ingredients_title,
  ingredients,
}) => (
  <div id="ingredientes" className="bg-white">
    <div className="px-4 py-12 mx-auto max-w-7xl sm:py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <h3 className="mt-1 text-2xl font-extrabold text-gray-900 sm:text-3xl sm:tracking-tight lg:text-4xl">
          {ingredients_title}
        </h3>
        <div className="max-w-xl mx-auto mt-5 text-lg text-gray-500">
          <RichText render={ingredients_description} />
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center w-full max-w-5xl px-10 pb-8 mx-auto">
      <FeaturedIngredients ingredients={ingredients} />
    </div>
  </div>
)

export default IllustratedIngredients
