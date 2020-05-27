import { memo } from 'react'
import map from 'lodash/map'
import reduce from 'lodash/reduce'
import intersection from 'lodash/intersection'

import Testimonials from 'components/testimonials'

const ProductTestimonials = ({ testimonials, product, ...props }) => {
  const tags = map(product.tags, 'name')
  const [specific, general] = reduce(
    testimonials,
    ([spec, gener], item) => {
      const hasProductTag = intersection(tags, item.tags).length > 0
      return hasProductTag ? [[...spec, item], gener] : [spec, [...gener, item]]
    },
    [[], []],
  )
  const items = [...specific, ...general]
  return (
    <div id="depoimentos">
      <Testimonials {...props} testimonials={items} />
    </div>
  )
}

export default memo(ProductTestimonials)
