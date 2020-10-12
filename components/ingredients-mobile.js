import InciLink from 'components/inci-link'
import Pannel from 'components/pannel'
import RichText from 'components/rich-text'

const IngredientsMobile = ({ data }) => {
  return data.map((item, i) => (
    <Pannel
      className="md:hidden"
      key={`item-${i}`}
      title={item.title || item.inci_title}
    >
      <div component="div" className="">
        <strong>Inci:</strong> <InciLink {...item} />
        <br />
        <br />
        <strong>O que significa?</strong>
        <br />
        {item.description ? <RichText>{item.description}</RichText> : '--'}
      </div>
    </Pannel>
  ))
}

export default IngredientsMobile
