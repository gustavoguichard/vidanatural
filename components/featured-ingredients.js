import Img from 'components/img'
import InciLink from 'components/inci-link'
import RichText from 'components/rich-text'

const FeaturedIngredients = ({ ingredients }) => (
  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {ingredients.map((ing) => (
      <div key={ing.inci_title}>
        <Img
          className="max-w-full -mb-16"
          height={290}
          width={300}
          alt={ing.title}
          src={ing.image.url}
        />
        <div className="relative z-10 py-1 rounded bg-white/10 backdrop-blur">
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
