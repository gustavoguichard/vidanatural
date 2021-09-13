import CTAButton from 'components/cta-button'
import FeaturedIngredients from 'components/featured-ingredients'
import RichText from 'components/rich-text'

const IllustratedIngredients = ({
  ingredients_description,
  ingredients_title,
  ingredients,
}) => (
  <div className="border-t-8 border-b-8 border-white" id="ingredientes">
    <div className="flex flex-col items-center max-w-screen-xl px-10 mx-auto">
      <div className="flex flex-col items-center py-16 md:w-10/12">
        <div className="self-start md:self-auto md:text-center">
          <h3 className="text-4xl font-bold tracking-tight">
            {ingredients_title}
          </h3>
          <RichText className="mx-auto my-2 max-w-sceen-xs">
            {ingredients_description}
          </RichText>
        </div>
        <FeaturedIngredients ingredients={ingredients} />
      </div>
    </div>
  </div>
)

export default IllustratedIngredients
