import Img from 'components/img'
import InciLink from 'components/inci-link'
import RichText from 'components/rich-text'

const FeaturedIngredients = ({ ingredients }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {ingredients.map((ing) => (
      <div key={ing.inci_title}>
        <Img
          className="max-w-full -mb-16"
          height={290}
          width={300}
          alt={ing.title}
          src={ing.image.url}
        />
        <div className="bg-gray-100 bg-opacity-75 py-1 relative z-10 rounded">
          <h4 className="text-lg font-semibold tracking-tight">{ing.title}</h4>
          <p className="text-xs">
            <InciLink {...ing} />
          </p>
        </div>
        <RichText className="my-2 text-gray-700">{ing.description}</RichText>
      </div>
    ))}
  </div>
)

export default FeaturedIngredients
