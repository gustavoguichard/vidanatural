import InciLink from 'components/inci-link'
import Pannel from 'components/pannel'
import { RichText } from 'prismic-reactjs'

const IngredientsMobile = ({ data }) =>
  data.map((item, i) => (
    <Pannel
      className="md:hidden"
      key={`item-${i}`}
      title={item.title || item.inci_title}
    >
      <div className="pb-3">
        <strong>Inci:</strong> <InciLink {...item} />
        <br />
        <br />
        <strong>O que significa?</strong>
        <br />
        {item.description ? <RichText render={item.description} /> : '--'}
      </div>
    </Pannel>
  ))

export default IngredientsMobile
