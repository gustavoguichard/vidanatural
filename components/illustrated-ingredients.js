import CTAButton from 'components/cta-button'
import FeaturedIngredients from 'components/featured-ingredients'
import RichText from 'components/rich-text'

const IllustratedIngredients = ({
  ingredients_description,
  ingredients_title,
  ingredients,
}) => (
  <div className="border-white border-t-8 border-b-8" id="ingredientes">
    <div className="flex flex-col items-center max-w-screen-xl px-10">
      <div className="md:w-10/12 py-16 flex flex-col items-center">
        <div className="self-start md:self-auto md:text-center">
          <h3 className="text-4xl font-bold tracking-tight">
            {ingredients_title}
          </h3>
          <RichText className="my-2 max-w-sceen-xs mx-auto">
            {ingredients_description}
          </RichText>
        </div>
        <FeaturedIngredients ingredients={ingredients} />
        <CTAButton href="/produtos" className="mt-8 self-start sm:self-auto">
          Conhecer os produtos
        </CTAButton>
      </div>
    </div>
  </div>
)

export default IllustratedIngredients
